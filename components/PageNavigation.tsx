"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

const sections = [
  { id: "hero", label: "Accueil" },
  { id: "pack-serenite", label: "Services" },
  { id: "tools", label: "Outils" },
  { id: "pricing", label: "Tarifs" },
  { id: "lab-section", label: "Le Lab" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "cta-final", label: "Contact" },
]

export function PageNavigation() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const currentIndex = Math.round(scrollY / windowHeight)
      setActiveSection(Math.min(currentIndex, sections.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollUp = () => {
    if (activeSection > 0) scrollToSection(activeSection - 1)
  }

  const scrollDown = () => {
    if (activeSection < sections.length - 1) scrollToSection(activeSection + 1)
  }

  return (
    <>
      {/* Indicateur de position (droite) */}
      <motion.div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="group relative flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            {/* Dot */}
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? "bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              animate={{
                scale: activeSection === index ? 1.3 : 1,
              }}
            />
            
            {/* Label on hover */}
            <span className="absolute right-6 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xl text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Flèches de navigation (bas gauche) */}
      <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-2 hidden md:flex">
        <motion.button
          onClick={scrollUp}
          className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 transition-all duration-300 ${
            activeSection === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          }}
          disabled={activeSection === 0}
          whileHover={activeSection > 0 ? { scale: 1.1 } : {}}
          whileTap={activeSection > 0 ? { scale: 0.95 } : {}}
        >
          <ChevronUp className="w-5 h-5 text-white/80" />
        </motion.button>
        
        <motion.button
          onClick={scrollDown}
          className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 transition-all duration-300 ${
            activeSection === sections.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          }}
          disabled={activeSection === sections.length - 1}
          whileHover={activeSection < sections.length - 1 ? { scale: 1.1 } : {}}
          whileTap={activeSection < sections.length - 1 ? { scale: 0.95 } : {}}
        >
          <ChevronDown className="w-5 h-5 text-white/80" />
        </motion.button>
      </div>
    </>
  )
}
