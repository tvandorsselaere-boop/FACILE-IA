"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "green" | "red"
  hover?: boolean
}

export function LiquidGlassCard({ 
  children, 
  className, 
  glowColor = "blue",
  hover = true 
}: LiquidGlassCardProps) {
  const glowColors = {
    blue: {
      shadow: "rgba(59, 130, 246, 0.15)",
      shadowHover: "rgba(59, 130, 246, 0.35)",
      border: "rgba(59, 130, 246, 0.25)",
      borderHover: "rgba(59, 130, 246, 0.5)"
    },
    purple: {
      shadow: "rgba(139, 92, 246, 0.15)",
      shadowHover: "rgba(139, 92, 246, 0.35)",
      border: "rgba(139, 92, 246, 0.25)",
      borderHover: "rgba(139, 92, 246, 0.5)"
    },
    green: {
      shadow: "rgba(34, 197, 94, 0.15)",
      shadowHover: "rgba(34, 197, 94, 0.35)",
      border: "rgba(34, 197, 94, 0.25)",
      borderHover: "rgba(34, 197, 94, 0.5)"
    },
    red: {
      shadow: "rgba(239, 68, 68, 0.15)",
      shadowHover: "rgba(239, 68, 68, 0.35)",
      border: "rgba(239, 68, 68, 0.25)",
      borderHover: "rgba(239, 68, 68, 0.5)"
    }
  }

  const colors = glowColors[glowColor]

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: `linear-gradient(135deg, 
          rgba(255,255,255,0.08) 0%, 
          rgba(255,255,255,0.04) 30%,
          rgba(255,255,255,0.02) 60%,
          rgba(0,0,0,0.05) 100%)`,
        backdropFilter: 'blur(24px) saturate(180%) brightness(105%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(105%)',
        boxShadow: `
          0 8px 32px ${colors.shadow},
          0 0 0 1px ${colors.border},
          inset 0 1px 0 rgba(255,255,255,0.15),
          inset 0 -1px 0 rgba(0,0,0,0.1)
        `,
      }}
    >
      {/* Reflet lumineux en haut */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
        }}
      />
      
      {/* Glow animé au hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${colors.shadowHover}, transparent 70%)`,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
