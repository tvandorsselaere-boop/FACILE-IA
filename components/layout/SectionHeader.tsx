"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  badgeColor?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  badge,
  badgeColor = "bg-glow",
  title,
  titleHighlight,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className={cn(
          "inline-block px-4 py-1.5 rounded-full text-white text-sm font-medium mb-6",
          badgeColor
        )}>
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
        {titleHighlight && (
          <span className="text-glow"> {titleHighlight}</span>
        )}
      </h2>
      
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
