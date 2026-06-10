import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  AdaptiveDpr,
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
  Sparkles,
} from '@react-three/drei'
import * as THREE from 'three'

/* Liquid-chrome centerpiece: a distorted icosahedron with a mirror finish.
   The distortion animates every frame; the env map gives the glossy look. */
function LiquidBlob() {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.12
      mesh.current.rotation.x = Math.sin(t * 0.2) * 0.15
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={mesh} scale={1.45}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          distort={0.38}
          speed={1.6}
          color="#cdc4ff"
          metalness={0.92}
          roughness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  )
}

function GlossyRing() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.3) * 0.12
      ref.current.rotation.z = t * 0.18
    }
  })
  return (
    <mesh ref={ref} scale={2.5}>
      <torusGeometry args={[1, 0.025, 16, 128]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        metalness={1}
        roughness={0.18}
        envMapIntensity={1.6}
        emissive="#4c1d95"
        emissiveIntensity={0.35}
      />
    </mesh>
  )
}

function Satellite({ position, scale, color, geometry, speed = 1 }) {
  return (
    <Float speed={2.2 * speed} rotationIntensity={1.4} floatIntensity={2.2}>
      <mesh position={position} scale={scale}>
        {geometry === 'octa' ? (
          <octahedronGeometry args={[1, 0]} />
        ) : geometry === 'tetra' ? (
          <tetrahedronGeometry args={[1, 0]} />
        ) : (
          <sphereGeometry args={[1, 32, 32]} />
        )}
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.1}
          iridescence={0.9}
          iridescenceIOR={1.6}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  )
}

/* Lerp the whole group toward the pointer for a parallax feel. */
function MouseRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    if (!group.current) return
    const damp = 1 - Math.pow(0.001, delta)
    group.current.rotation.y +=
      (state.pointer.x * 0.32 - group.current.rotation.y) * damp
    group.current.rotation.x +=
      (-state.pointer.y * 0.22 - group.current.rotation.x) * damp
  })
  return <group ref={group}>{children}</group>
}

/* Local studio environment built from light planes — glossy reflections
   with zero network fetches. */
function Studio() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={2.4} position={[0, 4, -4]} scale={[10, 3, 1]} color="#ffffff" />
      <Lightformer intensity={1.6} position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} color="#8b5cf6" />
      <Lightformer intensity={1.6} position={[5, -1, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} color="#22d3ee" />
      <Lightformer intensity={0.9} position={[0, -4, 3]} scale={[6, 2, 1]} color="#f472b6" />
    </Environment>
  )
}

export default function HeroScene() {
  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
    [],
  )

  return (
    <Canvas
      dpr={[1, isMobile ? 1.5 : 1.75]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <MouseRig>
          <LiquidBlob />
          <GlossyRing />
          <Satellite position={[2.6, 1.4, -0.5]} scale={0.34} color="#22d3ee" geometry="octa" />
          <Satellite position={[-2.7, -1.2, -0.3]} scale={0.3} color="#f472b6" geometry="tetra" speed={0.8} />
          <Satellite position={[-2.2, 1.8, -1]} scale={0.2} color="#8b5cf6" geometry="sphere" speed={1.3} />
          {!isMobile && (
            <Sparkles count={110} scale={9} size={2.2} speed={0.35} opacity={0.55} color="#a78bfa" />
          )}
        </MouseRig>
        <Studio />
        <ambientLight intensity={0.25} />
      </Suspense>
      <AdaptiveDpr pixelated />
    </Canvas>
  )
}
