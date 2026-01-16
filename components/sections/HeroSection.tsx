"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Clock, Sparkles, Shield } from "lucide-react"
import Link from "next/link"
import { LogoHero } from "@/components/LogoHero"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

interface Particle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
}

const valueProps = [
  { icon: Clock, label: "+10h/semaine", sub: "de temps libéré" },
  { icon: Sparkles, label: "IA sur mesure", sub: "adaptée à votre métier" },
  { icon: Shield, label: "Sans engagement", sub: "résiliez quand vous voulez" },
]

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    })))
  }, [])

  return (
    <section id="hero" className="snap-section relative">
      {/* Background subtil */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 50% 20%, var(--glow-color-20) 0%, transparent 50%)',
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

      <div className="relative z-10 flex flex-col h-full px-4 pt-8">
        {/* Logo GRAND - Centré verticalement dans la partie haute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center justify-center min-h-[50vh]"
        >
          {/* Badge Pôle Services */}
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-8">
            Pôle Services PME
          </span>

          <div className="w-full max-w-[900px] h-[180px] mx-auto mb-8">
            <LogoHero />
          </div>

          {/* Slogan principal */}
          <p className="text-xl md:text-2xl text-muted-foreground/70 font-light text-center max-w-2xl italic">
            « Gagner du temps pour ce qui compte vraiment. »
          </p>
        </motion.div>

        {/* Value Props - Cards empilables sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <LiquidGlassCard className="p-6 text-center h-full">
                  <prop.icon className="w-8 h-8 text-glow mx-auto mb-3" />
                  <p className="font-semibold text-lg">{prop.label}</p>
                  <p className="text-sm text-muted-foreground">{prop.sub}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-6 py-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="px-10 py-4 rounded-xl bg-glow text-white font-medium hover:opacity-90 transition-all hover:shadow-glow-lg text-center"
            >
              Découvrir nos offres
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 rounded-xl border border-border hover:border-glow/50 transition-colors text-center"
            >
              Réserver un appel gratuit
            </a>
          </div>

          {/* Lien Le Lab discret */}
          <Link 
            href="/lab" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors"
          >
            <span>🔬</span>
            <span>Découvrez notre Lab R&D</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center pb-8"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
