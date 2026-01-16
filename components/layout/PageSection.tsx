"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  fullHeight?: boolean
  noPadding?: boolean
}

export function PageSection({
  children,
  id,
  className,
  fullHeight = false,
  noPadding = false,
}: PageSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative w-full",
        fullHeight && "min-h-screen flex flex-col justify-center",
        !noPadding && "py-16 md:py-24 lg:py-32",
        "px-6 md:px-12 lg:px-24",
        className
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
