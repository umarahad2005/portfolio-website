import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  AdaptiveDpr,
  Billboard,
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
  RoundedBox,
  Sparkles,
  Text,
} from '@react-three/drei'
import * as THREE from 'three'

/* Tech stack shown as orbiting satellite badges around the AI core. */
const TECHS = [
  { label: 'Flutter', color: '#54C5F8' },
  { label: 'Firebase', color: '#FFA000' },
  { label: 'Gemini', color: '#8AB4F8' },
  { label: 'React', color: '#61DAFB' },
  { label: 'FastAPI', color: '#0BA37F' },
  { label: 'Python', color: '#FFD43B' },
  { label: 'LangChain', color: '#34D399' },
  { label: 'MERN', color: '#A78BFA' },
]

/* AI core: liquid-chrome pearl (the glossy centerpiece) inside a pulsing
   wireframe icosahedron cage with a breathing halo. */
function AICore() {
  const cage = useRef()
  const halo = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (cage.current) {
      cage.current.rotation.x = t * 0.28
      cage.current.rotation.z = t * 0.2
    }
    if (halo.current) {
      halo.current.scale.setScalar(1.3 + Math.sin(t * 1.4) * 0.09)
    }
  })

  return (
    <group>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.45}>
        <mesh scale={0.8}>
          <icosahedronGeometry args={[1, 64]} />
          <MeshDistortMaterial
            distort={0.32}
            speed={1.8}
            color="#e4ddff"
            metalness={0.85}
            roughness={0.14}
            clearcoat={1}
            clearcoatRoughness={0.12}
            envMapIntensity={2.2}
          />
        </mesh>
      </Float>

      <mesh ref={cage} scale={1.12}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.9}
          wireframe
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>

      <mesh ref={halo}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

/* Thin emissive ring that slowly precesses for a touch of life. */
function OrbitalRing({ radius, tilt, color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.14
    }
  })
  return (
    <group rotation={tilt}>
      <group ref={ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.012, 8, 128]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  )
}

/* Glass tech pill that orbits the core and always faces the camera. */
function SatelliteBadge({ tech, radius, speed, phase }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (!ref.current) return
    const a = phase + clock.elapsedTime * speed
    ref.current.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius)
  })

  return (
    <group ref={ref}>
      <Billboard follow>
        <RoundedBox args={[1.3, 0.46, 0.08]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial
            color={tech.color}
            transparent
            opacity={0.16}
            metalness={0.6}
            roughness={0.12}
            envMapIntensity={1.2}
          />
        </RoundedBox>
        <RoundedBox args={[0.07, 0.3, 0.09]} radius={0.03} smoothness={4} position={[-0.52, 0, 0.01]}>
          <meshStandardMaterial
            color={tech.color}
            emissive={tech.color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </RoundedBox>
        <Text fontSize={0.155} color={tech.color} anchorX="center" anchorY="middle" position={[0.06, 0, 0.06]}>
          {tech.label}
        </Text>
      </Billboard>
    </group>
  )
}

/* Two counter-rotating orbit tracks of tech badges. */
function Satellites() {
  const outer = TECHS.slice(0, 4)
  const inner = TECHS.slice(4)

  return (
    <>
      <group rotation={[0.28, 0, 0]}>
        {outer.map((tech, i) => (
          <SatelliteBadge
            key={tech.label}
            tech={tech}
            radius={2.5}
            speed={0.32}
            phase={(i / outer.length) * Math.PI * 2}
          />
        ))}
      </group>
      <group rotation={[-0.22, 0.6, 0]}>
        {inner.map((tech, i) => (
          <SatelliteBadge
            key={tech.label}
            tech={tech}
            radius={1.75}
            speed={-0.45}
            phase={(i / inner.length) * Math.PI * 2 + Math.PI * 0.25}
          />
        ))}
      </group>
    </>
  )
}

/* Lerp the whole scene toward the pointer for a parallax feel. */
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
      {/* dim dome so reflections never fall to pure black */}
      <mesh scale={60}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#1b1e36" side={THREE.BackSide} />
      </mesh>
      <Lightformer intensity={5} position={[0, 5, -6]} scale={[14, 5, 1]} color="#ffffff" />
      <Lightformer intensity={4} position={[0, 2, 6]} scale={[12, 4, 1]} color="#dfe6ff" />
      <Lightformer intensity={3.5} position={[-6, 1, 1]} rotation-y={Math.PI / 2} scale={[10, 4, 1]} color="#8b5cf6" />
      <Lightformer intensity={3.5} position={[6, -1, 1]} rotation-y={-Math.PI / 2} scale={[10, 4, 1]} color="#22d3ee" />
      <Lightformer intensity={2.2} position={[0, -5, 3]} scale={[10, 3, 1]} color="#f472b6" />
    </Environment>
  )
}

/* Tracks the mobile breakpoint reactively so resize/orientation
   changes update the Canvas DPR and effects. */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
  )

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)')
    const onChange = (event) => setIsMobile(event.matches)
    setIsMobile(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

export default function HeroScene() {
  const isMobile = useIsMobile()

  return (
    <Canvas
      dpr={[1, isMobile ? 1.5 : 1.75]}
      camera={{ position: [0, 0, 7], fov: 50 }}
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
          <group scale={isMobile ? 0.68 : 0.85}>
            <AICore />
            <OrbitalRing radius={1.35} tilt={[Math.PI / 2.2, 0, 0.4]} color="#7C3AED" />
            <OrbitalRing radius={1.6} tilt={[Math.PI / 3, 0, -0.6]} color="#3B82F6" />
            <Satellites />
          </group>
          {!isMobile && (
            <Sparkles count={100} scale={9} size={2} speed={0.35} opacity={0.5} color="#a78bfa" />
          )}
        </MouseRig>
        <Studio />
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} intensity={26} color="#7C3AED" />
        <pointLight position={[-4, -2, -4]} intensity={16} color="#3B82F6" />
      </Suspense>
      <AdaptiveDpr pixelated />
    </Canvas>
  )
}
