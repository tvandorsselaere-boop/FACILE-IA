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
    <section id="services" className="snap-section relative py-16 px-4">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-2">
            Pack <span className="text-glow">Sérénité</span>
          </h2>
          <p className="text-sm text-muted-foreground">Installation + Outils IA inclus</p>
        </motion.div>

        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Colonne prix (2/5) */}
          <div className="lg:col-span-2 space-y-4">
            <LiquidGlassCard className="p-5" hover={false}>
              <p className="text-xs text-muted-foreground mb-1">Installation unique</p>
              <p className="text-2xl font-bold text-glow">999€</p>
              <p className="text-xs text-muted-foreground mt-2">Site vitrine + Formation inclus</p>
            </LiquidGlassCard>
            
            <LiquidGlassCard className="p-5 border-glow" hover={false}>
              <span className="text-xs bg-glow/20 text-glow px-2 py-0.5 rounded-full">NO-BRAINER</span>
              <p className="text-3xl font-bold text-glow mt-2">29€<span className="text-lg">/mois</span></p>
              <p className="text-xs text-muted-foreground mt-1">Sans engagement</p>
            </LiquidGlassCard>

            <a href="#contact" className="block w-full py-3 rounded-xl bg-glow text-white text-sm text-center font-medium hover:opacity-90 transition-opacity">
              Réserver un appel (30min gratuit)
            </a>
          </div>

          {/* Colonne outils (3/5) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <motion.button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className="p-4 rounded-xl text-left glass-card-glow hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <p className="font-medium text-sm mt-2">{tool.title}</p>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  <p className="text-xs text-glow mt-1">{tool.gain}</p>
                </motion.button>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Total : <span className="text-glow font-medium">+10h/semaine</span> libérées
            </p>
          </div>
        </div>
      </div>

      {/* Modal détail (simplifié) */}
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
