"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const tools = [
  { 
    id: "frais", 
    icon: "📱", 
    title: "Notes de Frais IA", 
    desc: "Prenez une photo, l'IA fait le reste", 
    gain: "-3h/sem",
    details: "Fini les tickets qui s'accumulent ! Photographiez vos reçus, l'IA extrait les infos et les classe automatiquement dans votre comptabilité."
  },
  { 
    id: "avis", 
    icon: "⭐", 
    title: "Avis Google", 
    desc: "Surveillance + Réponses personnalisées", 
    gain: "-2h/sem",
    details: "Notification immédiate des nouveaux avis. L'IA rédige des réponses parfaites que vous validez en un clic. Votre e-réputation sans effort."
  },
  { 
    id: "impayes", 
    icon: "💰", 
    title: "Relance Impayés", 
    desc: "Efficace et diplomate", 
    gain: "-1.5h/sem",
    details: "L'IA relance vos clients avec le bon ton au bon moment. Plus de factures oubliées, plus de relations abîmées."
  },
  { 
    id: "pdf", 
    icon: "📋", 
    title: "Assistant PDF", 
    desc: "Organisation automatique", 
    gain: "-1h/sem",
    details: "Factures, devis, contrats... L'IA classe et nomme vos documents. Retrouvez n'importe quel fichier en 2 secondes."
  },
]

export function ServicesSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <section id="services" className="snap-section relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header avec plus d'espace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm bg-glow/10 text-glow px-4 py-2 rounded-full mb-6">
            Pack Sérénité
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Installation + <span className="text-glow">Outils IA</span> inclus
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tout ce qu'il faut pour automatiser les tâches chronophages et retrouver du temps pour votre métier
          </p>
        </motion.div>

        {/* Layout : EMPILÉ verticalement pour plus d'espace */}
        <div className="space-y-12">
          
          {/* Section Prix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LiquidGlassCard className="p-8" hover={false}>
                <p className="text-sm text-muted-foreground mb-3">Installation unique</p>
                <p className="text-5xl font-bold text-glow mb-4">999€</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Site vitrine professionnel
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Configuration des outils IA
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Formation complète incluse
                  </p>
                </div>
              </LiquidGlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <LiquidGlassCard className="p-8 border-2 border-glow/50 relative overflow-hidden" hover={false}>
                <span className="absolute top-4 right-4 text-xs bg-glow text-white px-3 py-1 rounded-full">
                  RECOMMANDÉ
                </span>
                <p className="text-sm text-muted-foreground mb-3">Abonnement mensuel</p>
                <p className="text-5xl font-bold text-glow">
                  29€<span className="text-xl font-normal text-muted-foreground">/mois</span>
                </p>
                <p className="text-sm text-muted-foreground mt-4 mb-4">
                  Sans engagement • Annulez quand vous voulez
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Tous les outils IA inclus
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Mises à jour automatiques
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-glow">✓</span>
                    Support prioritaire
                  </p>
                </div>
              </LiquidGlassCard>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-glow text-white font-medium hover:opacity-90 transition-all hover:shadow-glow-lg"
            >
              Réserver un appel découverte
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-muted-foreground mt-3">
              30 minutes gratuites, sans engagement
            </p>
          </motion.div>

          {/* Section Outils */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-light mb-2">
                Les <span className="text-glow">outils inclus</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                4 outils qui changent tout
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedTool(tool.id)}
                  className="p-6 rounded-2xl text-left glass-card-glow hover:shadow-glow transition-all h-full group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-4xl block mb-4">{tool.icon}</span>
                  <p className="font-semibold text-lg mb-2">{tool.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                  <p className="text-lg text-glow font-bold">{tool.gain}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-3 group-hover:text-glow transition-colors">
                    En savoir plus <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Total en bas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <LiquidGlassCard className="p-6 inline-block" hover={false}>
                <p className="text-sm text-muted-foreground mb-1">Total temps gagné</p>
                <p className="text-3xl font-bold text-glow">+10h/semaine</p>
                <p className="text-xs text-muted-foreground mt-1">
                  C'est un dimanche entier retrouvé
                </p>
              </LiquidGlassCard>
            </motion.div>
          </div>
        </div>
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card-glow p-8 rounded-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTool(null)} 
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass-card-glow flex items-center justify-center hover:bg-glow/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              {(() => {
                const tool = tools.find(t => t.id === selectedTool)
                if (!tool) return null
                return (
                  <>
                    <span className="text-5xl block mb-4">{tool.icon}</span>
                    <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-2xl text-glow font-bold mb-4">{tool.gain}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {tool.details}
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
