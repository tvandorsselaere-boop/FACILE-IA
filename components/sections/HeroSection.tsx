"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { LogoHero } from "@/components/LogoHero"

interface Particle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setParticles(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    })))
  }, [])

  return (
    <section id="hero" className="snap-section relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, var(--glow-color-15) 0%, transparent 60%)',
          }}
        />
        
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-glow/30"
            style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          {/* Logo GRAND */}
          <div className="w-full max-w-[800px] h-[160px] mx-auto">
            <LogoHero />
          </div>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Agence numérique augmentée pour <span className="text-glow">Artisans et PME</span>
          </p>

          {/* Slogan */}
          <h1 className="text-2xl md:text-4xl font-light leading-relaxed">
            Gagnez du temps pour <span className="text-glow">ce qui compte vraiment</span>
          </h1>

          {/* Prix */}
          <div className="pt-4">
            <div className="inline-block px-8 py-4 rounded-2xl glass-card-glow">
              <p className="text-3xl md:text-4xl font-bold text-glow">29€/mois</p>
              <p className="text-xs text-muted-foreground mt-1">L'IA qui travaille pendant que vous vivez</p>
            </div>
          </div>

          {/* CTAs simples */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <a href="#services" className="px-6 py-3 rounded-xl bg-glow text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Découvrir nos services
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-border text-sm hover:border-glow/50 transition-colors">
              Réserver un appel gratuit
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
