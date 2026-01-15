"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

const tools = [
  { 
    id: "frais",
    icon: "📱", 
    title: "Notes de Frais IA", 
    shortDesc: "Photo → Comptabilité",
    fullDesc: "Prenez en photo vos tickets et factures. L'IA extrait automatiquement toutes les informations et les envoie directement à votre comptable. Fini les heures perdues à trier les justificatifs !",
    gain: "-3h/semaine" 
  },
  { 
    id: "avis",
    icon: "⭐", 
    title: "Gestion Avis Google", 
    shortDesc: "Surveillance + Réponses IA",
    fullDesc: "Surveillance automatique de vos avis Google. L'IA génère des réponses personnalisées et professionnelles. Vous validez en un clic. Votre e-réputation protégée 24/7.",
    gain: "-2h/semaine" 
  },
  { 
    id: "impayes",
    icon: "💰", 
    title: "Relance Impayés IA", 
    shortDesc: "Efficace sans être lourd",
    fullDesc: "Séquences de relance intelligentes et graduelles. L'IA adapte le ton selon l'historique client. Récupérez vos créances sans abîmer vos relations commerciales.",
    gain: "-1.5h/semaine" 
  },
  { 
    id: "pdf",
    icon: "📋", 
    title: "Assistant PDF Pro", 
    shortDesc: "Organisation intelligente",
    fullDesc: "Import de tous vos documents. L'IA les renomme, les classe et les rend cherchables. Retrouvez n'importe quel document en 5 secondes.",
    gain: "-1h/semaine" 
  },
]

export function ServicesSection() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  return (
    <section id="services" className="snap-section relative py-20 px-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Le Pack <span className="text-glow">Sérénité</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Installation complète + Accès à tous les outils IA
          </p>
        </motion.div>

        {/* Grid principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          
          {/* Colonne gauche : Offre */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Prix Installation */}
            <LiquidGlassCard className="p-6" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Installation unique</p>
                  <p className="text-4xl font-bold text-glow">999€</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Site vitrine inclus</p>
                  <p className="text-sm text-muted-foreground">Formation + Support</p>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Prix Abonnement */}
            <LiquidGlassCard className="p-6 border-glow" hover={false}>
              <div className="inline-block px-3 py-1 rounded-full bg-glow/20 text-glow text-sm font-medium mb-4">
                🔥 OFFRE NO-BRAINER
              </div>
              <div className="flex items-end gap-2 mb-2">
                <p className="text-5xl font-bold text-glow">29€</p>
                <p className="text-xl text-muted-foreground pb-1">/mois</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Moins cher qu'un Netflix • Sans engagement
              </p>
            </LiquidGlassCard>

            {/* CTA */}
            <LiquidGlassButton size="lg" variant="primary" className="w-full" href="#contact">
              Réserver un appel découverte (30min gratuit)
            </LiquidGlassButton>
          </motion.div>

          {/* Colonne droite : Outils (cards expandables) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                className="relative"
              >
                <motion.button
                  onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                  className="w-full text-left p-4 rounded-2xl transition-all duration-300 glass-card-glow hover:shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{tool.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{tool.shortDesc}</p>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        expandedTool === tool.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  <div className="mt-2 text-xs text-glow font-medium">
                    {tool.gain}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal détail outil */}
        <AnimatePresence>
          {expandedTool && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setExpandedTool(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card-glow p-8 rounded-3xl max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const tool = tools.find(t => t.id === expandedTool)
                  if (!tool) return null
                  return (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl">{tool.icon}</span>
                          <div>
                            <h3 className="text-2xl font-bold">{tool.title}</h3>
                            <p className="text-glow font-medium">{tool.gain}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setExpandedTool(null)}
                          className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {tool.fullDesc}
                      </p>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Total gains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-muted-foreground">
            Total : <span className="text-glow font-bold text-2xl">+10h/semaine</span> de temps libéré
          </p>
        </motion.div>
      </div>
    </section>
  )
}
