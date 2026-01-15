"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"
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
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section id="hero" className="snap-section relative overflow-hidden">
      {/* Background gradient animé */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, var(--glow-color-15) 0%, transparent 50%)',
          }}
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 20%, var(--glow-color-15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 70% 80%, var(--glow-color-15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 30% 20%, var(--glow-color-15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Particules flottantes - RENDU CONDITIONNEL */}
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-glow/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Logo en GRAND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[600px] h-[120px] mx-auto mb-8"
          >
            <LogoHero />
          </motion.div>

          {/* Titre activité */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground"
          >
            Agence numérique augmentée
            <br />
            <span className="text-glow font-medium">pour Artisans et PME</span>
          </motion.h1>

          {/* Slogan principal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
          >
            Gagnez du temps pour
            <br />
            <span className="text-glow">ce qui compte vraiment</span>
          </motion.p>

          {/* Badge prix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block"
          >
            <div className="glass-card-glow px-10 py-6 rounded-3xl">
              <p className="text-5xl md:text-6xl font-bold text-glow">29€/mois</p>
              <p className="text-lg text-muted-foreground mt-2">L'IA qui travaille pendant que vous vivez</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <LiquidGlassButton size="lg" variant="primary" href="#services">
              Découvrir nos services →
            </LiquidGlassButton>
            <LiquidGlassButton size="lg" variant="secondary" href="#contact">
              Réserver un appel gratuit
            </LiquidGlassButton>
          </motion.div>

          {/* Mention Le Lab */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <a 
              href="/lab" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors"
            >
              <span className="text-lg">🔬</span>
              <span>Découvrez notre Lab R&D : FEAsy & WolfEdge</span>
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Indicateur scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground/70">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
