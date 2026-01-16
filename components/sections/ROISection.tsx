"use client"

import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

export function ROISection() {
  return (
    <section id="roi" className="snap-section relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            💡 ROI Client : <span className="text-glow">Temps Gagné</span>
          </h2>
        </motion.div>

        {/* Avant/Après */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-12 max-w-4xl mx-auto">
          {/* Card AVANT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <LiquidGlassCard className="p-10 text-center border-2 border-white/20" hover={false}>
              <span className="text-muted-foreground uppercase text-sm font-medium">Avant</span>
              <p className="text-6xl md:text-7xl font-bold text-muted-foreground my-6">12h</p>
              <p className="text-lg text-muted-foreground mb-2">par semaine</p>
              <p className="text-sm text-muted-foreground/60">Tâches admin manuelles</p>
            </LiquidGlassCard>
          </motion.div>
          
          {/* Card APRÈS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <LiquidGlassCard 
              className="p-10 text-center bg-gradient-to-br from-glow/20 to-glow/10 border-2 border-glow" 
              hover={false}
            >
              <span className="text-glow uppercase text-sm font-medium">Après ✅</span>
              <p className="text-6xl md:text-7xl font-bold text-glow my-6">2h</p>
              <p className="text-lg text-glow/80 mb-2">par semaine</p>
              <p className="text-sm text-glow/60">Automatisé par IA</p>
            </LiquidGlassCard>
          </motion.div>
        </div>

        {/* Stat impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <LiquidGlassCard 
            className="p-10 text-center bg-gradient-to-r from-green-500/20 to-green-600/10 border-2 border-green-500/50" 
            hover={false}
          >
            <p className="text-6xl md:text-7xl font-bold text-green-400 mb-4">83%</p>
            <p className="text-xl text-green-300 mb-2">Réduction du temps administratif</p>
            <p className="text-sm text-green-200/60">≈ 520h économisées par an</p>
          </LiquidGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
