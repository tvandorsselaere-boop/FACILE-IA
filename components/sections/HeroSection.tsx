"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Clock, Sparkles, Shield } from "lucide-react"
import Link from "next/link"
import { LogoHero } from "@/components/LogoHero"
import { PageSection, CardGrid, FeatureCard } from "@/components/layout"

const valueProps = [
  { icon: Clock, label: "+10h/semaine", sub: "de temps libéré" },
  { icon: Sparkles, label: "IA sur mesure", sub: "adaptée à votre métier" },
  { icon: Shield, label: "Sans engagement", sub: "résiliez quand vous voulez" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <PageSection id="hero" fullHeight className="pt-0">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
          Pôle Services PME
        </span>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-[800px] h-[160px] mx-auto mb-8"
      >
        <LogoHero />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground/70 font-light text-center max-w-2xl mx-auto italic mb-16"
      >
        « Gagner du temps pour ce qui compte vraiment. »
      </motion.p>

      {/* Value Props */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <CardGrid columns={3}>
          {valueProps.map((prop, i) => (
            <FeatureCard
              key={i}
              icon={prop.icon}
              title={prop.label}
              description={prop.sub}
              delay={i * 0.1}
              className="text-center"
            />
          ))}
        </CardGrid>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="px-10 py-4 rounded-full bg-glow text-white font-medium hover:opacity-90 transition-all hover:shadow-glow-lg text-center"
          >
            Découvrir nos offres
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 rounded-full border border-border hover:border-glow/50 transition-colors text-center"
          >
            Réserver un appel gratuit
          </a>
        </div>

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
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      )}
    </PageSection>
  )
}
