"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Reveal({ children }: any) {
  const ref = useRef<any>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          scrub: true,
        },
      }
    )
  }, [])

  return <div ref={ref}>{children}</div>
}
