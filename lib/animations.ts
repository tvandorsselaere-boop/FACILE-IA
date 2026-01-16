// lib/animations.ts
import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const springHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" },
  animate: {
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.4)",
      "0 0 40px rgba(99, 102, 241, 0.6)",
      "0 0 20px rgba(99, 102, 241, 0.4)"
    ],
    transition: { duration: 2, repeat: Infinity }
  }
}