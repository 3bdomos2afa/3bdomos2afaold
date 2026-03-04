"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere() {
  const ref = useRef<any>()

  useFrame(({ mouse }) => {
    if (!ref.current) return
    ref.current.rotation.x = mouse.y * 1.5
    ref.current.rotation.y = mouse.x * 1.5
  })

  return (
    <Sphere ref={ref} args={[1.5, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#2563eb"
        distort={0.4}
        speed={2}
      />
    </Sphere>
  )
}

export default function Hero3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <AnimatedSphere />
    </Canvas>
  )
}
