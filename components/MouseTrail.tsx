"use client"

import { useEffect, useState } from "react"

export default function MouseTrail() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: any) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 transition-all duration-100"
      style={{ left: pos.x - 8, top: pos.y - 8 }}
    />
  )
}
