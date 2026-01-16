"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const reasons = [
  {
    title: "Fiabilité Aéro",
    desc: "Rigueur Airbus Helicopters appliquée à vos outils digitaux",
  },
  {
    title: "Rapidité",
    desc: "POC livrés en jours, pas en mois",
  },
  {
    title: "Transparence",
    desc: "ROI immédiat et mesurable sur chaque outil",
  },
]

export function WhySection() {
  return (
    <section className="py-24 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <LiquidGlassCard 
            className="p-10 bg-gradient-to-br from-orange-500 to-orange-600 border-0" 
            hover={false}
          >
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-8">
              🎯 Pourquoi Facile-IA ?
            </h3>
            <ul className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="text-white/80 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white text-lg">{reason.title}</strong>
                    <span className="text-white/90"> : {reason.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </LiquidGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
