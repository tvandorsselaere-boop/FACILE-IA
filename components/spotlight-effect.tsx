"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function SpotlightEffect() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // useTransform DOIT être appelé avant tout return conditionnel
  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, var(--spotlight-color), transparent 50%)`
  )

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.pageX)
      mouseY.set(e.pageY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Le return conditionnel vient APRÈS tous les hooks
  if (!mounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 hidden md:block spotlight-layer"
      style={{ background }}
    />
  )
}
