"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

export function HeroSection() {
  return (
    <section id="hero" className="snap-section relative overflow-hidden">
      {/* Background gradient animé */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)',
          }}
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Particules flottantes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Titre principal */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Je ne vous vends pas un logiciel.
            <br />
            <span className="text-blue-400">Je vous vends vos dimanches après-midi.</span>
          </h1>

          {/* Badge prix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block"
          >
            <div 
              className="px-8 md:px-12 py-6 md:py-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)',
                border: '1px solid rgba(59,130,246,0.3)',
                boxShadow: '0 0 60px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-400">29€/mois</p>
              <p className="text-lg md:text-xl text-muted-foreground mt-3">C'est tout.</p>
            </div>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
          >
            L'IA qui travaille pendant que vous vivez
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <LiquidGlassButton size="lg" glowColor="blue" href="#pack-serenite">
              Découvrir l'offre No-Brainer →
            </LiquidGlassButton>
          </motion.div>
        </motion.div>

        {/* Indicateur scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground/70">Scroll pour découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
