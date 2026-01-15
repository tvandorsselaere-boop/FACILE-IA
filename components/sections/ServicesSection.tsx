"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const tools = [
  { id: "frais", icon: "📱", title: "Notes de Frais IA", desc: "Photo → Comptabilité", gain: "-3h/sem" },
  { id: "avis", icon: "⭐", title: "Avis Google", desc: "Surveillance + Réponses", gain: "-2h/sem" },
  { id: "impayes", icon: "💰", title: "Relance Impayés", desc: "Efficace et diplomate", gain: "-1.5h/sem" },
  { id: "pdf", icon: "📋", title: "Assistant PDF", desc: "Organisation auto", gain: "-1h/sem" },
]

export function ServicesSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <section id="services" className="snap-section relative py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header avec plus d'espace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-3">
            Pack <span className="text-glow">Sérénité</span>
          </h2>
          <p className="text-sm text-muted-foreground">Installation + Outils IA inclus</p>
        </motion.div>

        {/* Grid avec cards plus grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Colonne prix - Cards plus hautes */}
          <div className="space-y-6">
            <LiquidGlassCard className="p-8" hover={false}>
              <p className="text-sm text-muted-foreground mb-2">Installation unique</p>
              <p className="text-4xl font-bold text-glow mb-3">999€</p>
              <p className="text-sm text-muted-foreground">Site vitrine professionnel</p>
              <p className="text-sm text-muted-foreground">Formation complète incluse</p>
            </LiquidGlassCard>
            
            <LiquidGlassCard className="p-8 border-glow" hover={false}>
              <span className="inline-block text-xs bg-glow/20 text-glow px-3 py-1 rounded-full mb-4">
                NO-BRAINER
              </span>
              <p className="text-4xl font-bold text-glow">
                29€<span className="text-xl font-normal">/mois</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Sans engagement • Annulez quand vous voulez</p>
            </LiquidGlassCard>

            <a 
              href="#contact" 
              className="block w-full py-4 rounded-xl bg-glow text-white text-center font-medium hover:opacity-90 transition-opacity"
            >
              Réserver un appel découverte (30min gratuit)
            </a>
          </div>

          {/* Colonne outils - Cards plus grandes */}
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className="p-6 rounded-2xl text-left glass-card-glow hover:shadow-glow transition-all h-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-3xl block mb-3">{tool.icon}</span>
                <p className="font-semibold text-base mb-1">{tool.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{tool.desc}</p>
                <p className="text-sm text-glow font-medium">{tool.gain}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Total en bas */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Total : <span className="text-glow font-semibold">+10h/semaine</span> libérées
        </p>
      </div>

      {/* Modal détail */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="glass-card-glow p-6 rounded-2xl max-w-sm w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedTool(null)} className="absolute top-4 right-4">
                <X className="w-4 h-4" />
              </button>
              {(() => {
                const tool = tools.find(t => t.id === selectedTool)
                if (!tool) return null
                return (
                  <>
                    <span className="text-4xl">{tool.icon}</span>
                    <h3 className="text-lg font-semibold mt-3">{tool.title}</h3>
                    <p className="text-glow text-sm">{tool.gain}</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      {tool.desc}
                    </p>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
