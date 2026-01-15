"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const comparisons = [
  { feature: "Automatisation IA", facile: true, traditional: false },
  { feature: "Sans engagement", facile: true, traditional: false },
  { feature: "Support inclus", facile: true, traditional: "Payant" },
  { feature: "Mises à jour", facile: "Incluses", traditional: "Payantes" },
  { feature: "Prix mensuel", facile: "29€", traditional: "200€+" },
  { feature: "Temps d'implémentation", facile: "48h", traditional: "3-6 mois" },
]

export function PricingComparison() {
  return (
    <section id="pricing" className="snap-section relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Pourquoi <span className="text-blue-400">FACILE-IA</span> ?
            </h2>
            <p className="text-lg text-muted-foreground">
              La comparaison parle d'elle-même
            </p>
          </motion.div>

          {/* Tableau comparatif */}
          <LiquidGlassCard className="overflow-hidden" glowColor="blue" hover={false}>
            <div className="grid grid-cols-3 gap-0">
              {/* Header */}
              <div className="p-4 border-b border-white/10" />
              <div className="p-4 border-b border-white/10 text-center">
                <span className="text-blue-400 font-bold text-lg">FACILE-IA</span>
              </div>
              <div className="p-4 border-b border-white/10 text-center">
                <span className="text-muted-foreground">Solutions traditionnelles</span>
              </div>

              {/* Rows */}
              {comparisons.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="contents"
                >
                  <div className="p-4 border-b border-white/5 flex items-center">
                    <span className="text-foreground/80">{row.feature}</span>
                  </div>
                  <div className="p-4 border-b border-white/5 flex items-center justify-center">
                    {row.facile === true ? (
                      <Check className="w-6 h-6 text-green-400" />
                    ) : typeof row.facile === "string" ? (
                      <span className="text-blue-400 font-medium">{row.facile}</span>
                    ) : (
                      <X className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                  <div className="p-4 border-b border-white/5 flex items-center justify-center">
                    {row.traditional === true ? (
                      <Check className="w-6 h-6 text-green-400" />
                    ) : row.traditional === false ? (
                      <X className="w-6 h-6 text-red-400" />
                    ) : (
                      <span className="text-muted-foreground">{row.traditional}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  )
}
