/**
 * TechOrbit3D — Drop-in 3D hero element for umarahadusmani.vercel.app
 *
 * Replaces the liquid-chrome blob / ring / satellites scene.
 * Uses @react-three/fiber + @react-three/drei (already in your package.json).
 *
 * HOW TO USE:
 *   1. Copy this file to  src/components/TechOrbit3D.jsx
 *   2. In your Hero.jsx (or wherever the <Canvas> lives), replace the
 *      blob/ring/satellite JSX with:
 *
 *        import TechOrbit3D from './TechOrbit3D';
 *        ...
 *        <TechOrbit3D />
 *
 *   The component is already a self-contained <Canvas> so it owns its
 *   own renderer — just drop it anywhere you want a 3D block.
 *
 * WHAT IT RENDERS:
 *   • A pulsing AI core (icosahedron + inner glow sphere + outer halo)
 *   • Two orbital rings (tilted, wireframe, glowing)
 *   • 8 tech-badge "satellites" that orbit the core on 2 tracks
 *   • Each satellite is a rounded plane with the tech name + icon colour pill
 *   • Mouse-parallax tilt on the whole scene
 *   • Floating particle field behind everything
 *   • Matches your dark theme (#06070f background, purple/blue accent palette)
 */

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, RoundedBox, MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// ─── Tech data ─────────────────────────────────────────────────────────────
const TECHS = [
  { label: 'Flutter',   color: '#54C5F8', emoji: '🐦' },
  { label: 'Firebase',  color: '#FFA000', emoji: '🔥' },
  { label: 'Gemini',    color: '#8AB4F8', emoji: '✦'  },
  { label: 'React',     color: '#61DAFB', emoji: '⚛'  },
  { label: 'FastAPI',   color: '#009688', emoji: '⚡'  },
  { label: 'Python',    color: '#FFD43B', emoji: '🐍'  },
  { label: 'LangChain', color: '#1C8C4E', emoji: '🔗'  },
  { label: 'MERN',      color: '#A78BFA', emoji: '🌐'  },
];

// ─── Orbital ring ──────────────────────────────────────────────────────────
function OrbitalRing({ radius, tiltX = 0, tiltZ = 0, color = '#7C3AED' }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.18;
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  return (
    <group rotation={[tiltX, 0, tiltZ]} ref={ref}>
      <mesh>
        <tubeGeometry args={[new THREE.CatmullRomCurve3(points, true), 128, 0.012, 6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} toneMapped={false} />
      </mesh>
    </group>
  );
}

// ─── Single satellite badge ────────────────────────────────────────────────
function SatelliteBadge({ tech, orbitRadius, orbitSpeed, orbitTilt, phaseOffset }) {
  const groupRef = useRef();
  const angle = useRef(phaseOffset);

  useFrame((_, delta) => {
    angle.current += delta * orbitSpeed;
    const x = Math.cos(angle.current) * orbitRadius;
    const z = Math.sin(angle.current) * orbitRadius;
    groupRef.current.position.set(x, 0, z);
    // Always face camera
    groupRef.current.rotation.y = -angle.current;
  });

  return (
    <group ref={groupRef} rotation={[orbitTilt, 0, 0]}>
      {/* Glass pill background */}
      <RoundedBox args={[1.4, 0.5, 0.08]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color={tech.color}
          transparent
          opacity={0.18}
          roughness={0}
          metalness={0.4}
        />
      </RoundedBox>

      {/* Coloured left accent strip */}
      <RoundedBox args={[0.08, 0.34, 0.09]} radius={0.04} smoothness={4} position={[-0.58, 0, 0]}>
        <meshStandardMaterial color={tech.color} emissive={tech.color} emissiveIntensity={2} toneMapped={false} />
      </RoundedBox>

      {/* Tech name */}
      <Text
        fontSize={0.16}
        color={tech.color}
        anchorX="center"
        anchorY="middle"
        position={[0.06, 0, 0.06]}
        font={undefined}
      >
        {tech.label}
      </Text>

      {/* Subtle glow halo */}
      <mesh>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial color={tech.color} transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

// ─── Central AI core ──────────────────────────────────────────────────────
function AICore() {
  const coreRef = useRef();
  const glowRef = useRef();
  const haloRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    coreRef.current.rotation.x = t * 0.3;
    coreRef.current.rotation.z = t * 0.22;

    // Breathing pulse
    const pulse = 1 + Math.sin(t * 1.8) * 0.06;
    glowRef.current.scale.setScalar(pulse);
    haloRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.12);
  });

  return (
    <group>
      {/* Core icosahedron - wireframe */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.8}
          wireframe
          toneMapped={false}
        />
      </mesh>

      {/* Inner solid sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color="#4F46E5"
          emissive="#6D28D9"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.6}
          toneMapped={false}
        />
      </mesh>

      {/* Outer halo */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshStandardMaterial
          color="#7C3AED"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* AI label */}
      <Text
        fontSize={0.2}
        color="#C4B5FD"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.76]}
      >
        AI
      </Text>
    </group>
  );
}

// ─── Orbiting satellites (two tracks) ─────────────────────────────────────
function Satellites() {
  const track1 = TECHS.slice(0, 4);
  const track2 = TECHS.slice(4);

  return (
    <>
      {/* Track 1 — outer ring, slight upward tilt */}
      <group rotation={[0.28, 0, 0]}>
        {track1.map((tech, i) => (
          <SatelliteBadge
            key={tech.label}
            tech={tech}
            orbitRadius={2.4}
            orbitSpeed={0.38}
            orbitTilt={0}
            phaseOffset={(i / track1.length) * Math.PI * 2}
          />
        ))}
      </group>

      {/* Track 2 — inner ring, tilted the other way */}
      <group rotation={[-0.22, 0.6, 0]}>
        {track2.map((tech, i) => (
          <SatelliteBadge
            key={tech.label}
            tech={tech}
            orbitRadius={1.7}
            orbitSpeed={-0.52}
            orbitTilt={0}
            phaseOffset={(i / track2.length) * Math.PI * 2 + Math.PI * 0.25}
          />
        ))}
      </group>
    </>
  );
}

// ─── Mouse-parallax rig ────────────────────────────────────────────────────
function ParallaxRig({ children }) {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05;
    target.current.y += (mouse.current.y - target.current.y) * 0.05;
    groupRef.current.rotation.y = target.current.x * 0.3;
    groupRef.current.rotation.x = target.current.y * 0.18;
  });

  return <group ref={groupRef}>{children}</group>;
}

// ─── Main scene ───────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#7C3AED" />
      <pointLight position={[-4, -2, -4]} intensity={1.2} color="#3B82F6" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#C4B5FD" />

      <Sparkles count={80} scale={7} size={1.2} speed={0.3} color="#A78BFA" opacity={0.5} />

      <ParallaxRig>
        <AICore />
        <OrbitalRing radius={1.1} tiltX={Math.PI / 2.2} tiltZ={0.4}  color="#7C3AED" />
        <OrbitalRing radius={1.45} tiltX={Math.PI / 3}   tiltZ={-0.6} color="#3B82F6" />
        <Satellites />
      </ParallaxRig>
    </>
  );
}

// ─── Exported component ───────────────────────────────────────────────────
export default function TechOrbit3D({ style }) {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent', ...style }}
      camera={{ position: [0, 0, 6.5], fov: 52 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
