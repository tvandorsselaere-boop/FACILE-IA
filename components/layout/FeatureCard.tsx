"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  children?: React.ReactNode
  className?: string
  icon?: LucideIcon | string
  iconColor?: string
  title?: string
  description?: string
  highlight?: boolean
  onClick?: () => void
  delay?: number
}

export function FeatureCard({
  children,
  className,
  icon: Icon,
  iconColor = "bg-glow",
  title,
  description,
  highlight = false,
  onClick,
  delay = 0,
}: FeatureCardProps) {
  const CardContent = () => (
    <>
      {Icon && (
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
          typeof Icon === "string" ? "" : iconColor
        )}>
          {typeof Icon === "string" ? (
            <span className="text-3xl">{Icon}</span>
          ) : (
            <Icon className="w-7 h-7 text-white" />
          )}
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
      )}
      
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
      
      {children}
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={onClick ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={cn(
        "p-8 md:p-10 rounded-3xl transition-all duration-300",
        "bg-white/[0.03] dark:bg-white/[0.03]",
        "border border-white/[0.08]",
        "hover:bg-white/[0.06] hover:border-white/[0.15]",
        highlight && "border-glow/50 bg-glow/5",
        onClick && "cursor-pointer",
        className
      )}
    >
      <CardContent />
    </motion.div>
  )
}
