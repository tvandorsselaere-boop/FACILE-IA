"use client"

import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

export function LabSection() {
  return (
    <section id="lab" className="snap-section relative py-20 px-4">
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🔬</span>
          <h2 className="text-3xl md:text-4xl font-light mb-2">Le Lab</h2>
          <p className="text-base text-muted-foreground">
            Notre R&D - Validation de l'expertise technique
          </p>
        </motion.div>

        {/* 2 projets côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* FEAsy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LiquidGlassCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏗️</span>
                <div>
                  <h3 className="text-xl font-semibold">FEAsy</h3>
                  <p className="text-xs text-glow">Pilier Ingénierie</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                20 ans d'expertise Airbus en calculs de structures. 
                Réduction 100h → 5min via IA.
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>📅 Q4 2026</span>
                <span>💼 B2B + SaaS</span>
              </div>
            </LiquidGlassCard>
          </motion.div>

          {/* WolfEdge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <LiquidGlassCard glowColor="purple" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-xl font-semibold">WolfEdge</h3>
                  <p className="text-xs text-purple-400">Pilier Algorithmique</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Journal de trading IA pour particuliers. 
                Import auto, calcul risque temps réel, coach IA.
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>📅 Q1 2026</span>
                <span>💼 Freemium</span>
              </div>
            </LiquidGlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
