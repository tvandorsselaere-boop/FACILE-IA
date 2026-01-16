"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, DollarSign, FileText, Star, File, Eye, Users, CheckCircle } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const tools = [
  { 
    id: "frais", 
    Icon: DollarSign,
    color: "bg-green-500",
    title: "Notes de Frais", 
    desc: "OCR + IA", 
    details: "Photographiez vos reçus, l'IA extrait et classe automatiquement. Fini les tickets qui s'accumulent !"
  },
  { 
    id: "devis", 
    Icon: FileText,
    color: "bg-blue-500",
    title: "Devis Pro", 
    desc: "Templates pro", 
    details: "Créez des devis professionnels en quelques clics avec des templates personnalisés à votre image."
  },
  { 
    id: "reputation", 
    Icon: Star,
    color: "bg-yellow-500",
    title: "Reputation IA", 
    desc: "Réponses auto", 
    details: "L'IA surveille et répond à vos avis Google avec le ton parfait. Améliorez votre e-réputation sans effort."
  },
  { 
    id: "pdf", 
    Icon: File,
    color: "bg-orange-500",
    title: "PDF Pro", 
    desc: "Fusion & signatures", 
    details: "Fusionnez, divisez, signez vos PDF en un clic. Tout est automatique et sécurisé."
  },
  { 
    id: "veille", 
    Icon: Eye,
    color: "bg-purple-500",
    title: "Veille Pro", 
    desc: "Intelligence concurrentielle", 
    details: "L'IA surveille votre marché et vous alerte des opportunités et menaces en temps réel."
  },
  { 
    id: "crm", 
    Icon: Users,
    color: "bg-red-500",
    title: "CRM Smart", 
    desc: "Gestion auto clients", 
    details: "Gérez vos clients intelligemment : relances automatiques, historique complet, rappels personnalisés."
  },
]

const packIncludes = [
  "Setup technique complet",
  "Site vitrine professionnel",
  "3 applications au choix parmi notre panel d'outils métier",
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
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Le <span className="text-glow">Pack Sérénité Numérique</span>
          </h2>
          <p className="text-xl text-glow/80 font-medium mb-4">
            20 ans d'expertise Airbus Helicopters
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack propriétaires Python/Next.js/Claude/Cursor pour digitaliser les PME avec une rigueur aéronautique
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
                <div className="space-y-3 text-sm">
                  {packIncludes.map((item, i) => (
                    <p key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-glow w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </p>
                  ))}
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
              <h3 className="text-2xl md:text-3xl font-light mb-3">
                Les <span className="text-glow">6 outils disponibles</span>
              </h3>
              <p className="text-muted-foreground">
                Choisissez 3 applications adaptées à votre métier
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedTool(tool.id)}
                  className="p-6 rounded-2xl text-left glass-card-glow hover:shadow-glow transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center mb-4`}>
                    <tool.Icon className="text-white w-7 h-7" />
                  </div>
                  <p className="font-semibold text-lg mb-2">{tool.title}</p>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-4 group-hover:text-glow transition-colors">
                    En savoir plus <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.button>
              ))}
            </div>

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
                    <div className={`w-16 h-16 rounded-xl ${tool.color} flex items-center justify-center mb-4`}>
                      <tool.Icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{tool.title}</h3>
                    <p className="text-sm text-glow font-medium mb-4">{tool.desc}</p>
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
