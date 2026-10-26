'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function TravelGlobe() {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
  })

  const points = [
    [0.18, 0.2, 0.95],
    [-0.6, 0.34, 0.72],
    [0.52, -0.28, 0.8],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z).normalize().multiplyScalar(1.02))

  return (
    <group ref={group}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial color="#7561ed" roughness={0.85} metalness={0.05} wireframe />
      </Sphere>
      {points.map((point, index) => (
        <group key={index} position={point}>
          <mesh>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color="#c7f400" />
          </mesh>
          <Line points={[[0, 0, 0], point.clone().normalize().multiplyScalar(0.35)]} color="#c7f400" lineWidth={1.5} transparent opacity={0.8} />
        </group>
      ))}
    </group>
  )
}

export function GlobeScene() {
  return (
    <div className="pointer-events-none absolute -right-12 -top-10 h-64 w-64 opacity-80 sm:h-80 sm:w-80" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 2, 4]} intensity={3} color="#c7f400" />
        <TravelGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
