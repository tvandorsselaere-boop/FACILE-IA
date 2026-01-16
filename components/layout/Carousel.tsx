"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  showArrows?: boolean
  itemWidth?: string
}

export function Carousel({ 
  children, 
  className,
  showArrows = true,
  itemWidth = "w-[320px] md:w-[380px]"
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 400
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })
    setTimeout(checkScroll, 300)
  }

  return (
    <div className={cn("relative", className)}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn("flex-shrink-0", itemWidth)}
          >
            {child}
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showArrows && children.length > 3 && (
        <>
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4",
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-background/80 backdrop-blur-sm border border-border",
              "hover:bg-background hover:border-glow/50 transition-all",
              "hidden md:flex",
              !canScrollLeft && "opacity-30 pointer-events-none"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4",
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-background/80 backdrop-blur-sm border border-border",
              "hover:bg-background hover:border-glow/50 transition-all",
              "hidden md:flex",
              !canScrollRight && "opacity-30 pointer-events-none"
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  )
}
