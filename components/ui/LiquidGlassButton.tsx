"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  glowColor?: "blue" | "purple" | "green"
  onClick?: () => void
  href?: string
}

export function LiquidGlassButton({ 
  children, 
  className,
  variant = "primary",
  size = "md",
  glowColor = "blue",
  onClick,
  href
}: LiquidGlassButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-5 text-lg"
  }

  const glowStyles = {
    blue: {
      primary: "bg-blue-500 hover:bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]",
      secondary: "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    },
    purple: {
      primary: "bg-purple-500 hover:bg-purple-400 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]",
      secondary: "bg-purple-500/10 border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_20px_rgba(139,92,246,0.2)]",
    },
    green: {
      primary: "bg-green-500 hover:bg-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)]",
      secondary: "bg-green-500/10 border-green-500/30 hover:border-green-500/60 shadow-[0_0_20px_rgba(34,197,94,0.2)]",
    }
  }

  const variantClasses = {
    primary: cn(
      "text-white font-medium",
      glowStyles[glowColor].primary
    ),
    secondary: cn(
      "text-foreground border backdrop-blur-xl",
      glowStyles[glowColor].secondary
    ),
    ghost: "text-foreground hover:bg-white/10"
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      className={cn(
        "relative rounded-2xl font-medium transition-all duration-300 inline-block",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Reflet liquid */}
      <span 
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </Component>
  )
}
