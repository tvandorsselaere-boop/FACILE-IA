"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Settings, Rocket, CheckCircle } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const faq = [
  { q: "Pourquoi 29€/mois ?", a: "Couvre les APIs IA (OpenAI, Google). Moins cher qu'un Netflix, mais infiniment plus utile pour votre business." },
  { q: "Sans engagement ?", a: "Oui, vous arrêtez quand vous voulez. Pas de préavis, pas de frais cachés." },
  { q: "Le site vitrine m'appartient ?", a: "Oui, 100%. Même si vous arrêtez l'abonnement, votre site reste à vous." },
  { q: "Support inclus ?", a: "Oui, IA 24/7 + accès direct à un ingénieur si besoin. On ne vous laisse jamais seul." },
  { q: "Combien de temps pour l'installation ?", a: "1 semaine maximum. Votre site et vos outils IA sont prêts, formation incluse." },
]

const timelineSteps = [
  { 
    icon: Phone, 
    label: "Appel découverte", 
    sub: "30min gratuit",
    detail: "On échange sur vos besoins"
  },
  { 
    icon: Settings, 
    label: "Installation", 
    sub: "1 semaine max",
    detail: "Site + outils IA configurés"
  },
  { 
    icon: Rocket, 
    label: "Liberté retrouvée", 
    sub: "+10h/semaine",
    detail: "Vous vivez, l'IA travaille"
  },
]

export function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="snap-section relative">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Prêt à <span className="text-glow">gagner du temps</span> ?
          </h2>
          <p className="text-muted-foreground">En 3 étapes simples</p>
        </motion.div>

        {/* TIMELINE HORIZONTALE AVEC TRAIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Trait de la timeline - PLUS VISIBLE */}
            <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-glow/20 via-glow to-glow/20 rounded-full" />
            <div className="absolute top-10 left-[10%] right-[10%] h-2 bg-glow/10 blur-md rounded-full" />
            
            {/* Points de la timeline */}
            <div className="flex justify-between relative">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center w-1/3"
                >
                  {/* Cercle avec icône */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full glass-card-glow flex items-center justify-center shadow-glow mb-4 relative z-10">
                      <step.icon className="w-8 h-8 text-glow" />
                    </div>
                    {/* Numéro */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-glow text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  
                  {/* Texte */}
                  <h3 className="font-semibold text-lg mb-1">{step.label}</h3>
                  <p className="text-glow text-sm font-medium mb-1">{step.sub}</p>
                  <p className="text-xs text-muted-foreground">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA CENTRAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <LiquidGlassCard className="p-10 max-w-2xl mx-auto text-center" hover={false}>
            <div className="inline-block px-6 py-3 rounded-2xl bg-glow/10 border border-glow/30 mb-6">
              <p className="text-4xl font-bold text-glow">
                29€<span className="text-xl font-normal text-muted-foreground">/mois</span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              L'IA qui travaille pour vous, pendant que vous vivez
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="mailto:contact@facile-ia.fr" 
                className="px-8 py-4 rounded-xl bg-glow text-white font-medium hover:opacity-90 transition-all hover:shadow-glow-lg"
              >
                Démarrer maintenant
              </a>
              <a 
                href="mailto:contact@facile-ia.fr" 
                className="px-8 py-4 rounded-xl border border-border hover:border-glow/50 transition-colors"
              >
                Réserver un appel gratuit
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-glow" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-glow" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-glow" />
                Support IA 24/7
              </span>
            </div>
          </LiquidGlassCard>
        </motion.div>

        {/* FAQ EN DESSOUS - PLEINE LARGEUR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-center mb-8">
            Questions <span className="text-glow">fréquentes</span>
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <LiquidGlassCard className="p-6 md:p-8" hover={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faq.map((item, i) => (
                  <div 
                    key={i} 
                    className="border border-border/30 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-4 flex justify-between items-center text-left hover:bg-glow/5 transition-colors"
                    >
                      <span className="font-medium pr-4">{item.q}</span>
                      <ChevronDown 
                        className={`w-5 h-5 flex-shrink-0 text-glow transition-transform ${
                          openFaq === i ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-sm text-muted-foreground">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
