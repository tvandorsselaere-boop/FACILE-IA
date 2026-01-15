"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Settings, Rocket, Mail } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

const faqItems = [
  {
    q: "Pourquoi 29€/mois et pas 0€ ?",
    a: "Les outils utilisent des APIs payantes (OpenAI, Google, etc.). 29€ couvre les coûts tout en restant accessible. C'est moins cher qu'un Netflix."
  },
  {
    q: "Je peux annuler quand je veux ?",
    a: "Oui, sans engagement. Vous arrêtez quand vous voulez."
  },
  {
    q: "Le site vitrine, je le garde si j'arrête ?",
    a: "Oui ! Le site est à vous pour toujours. Vous gardez le domaine et l'hébergement."
  },
  {
    q: "C'est quoi le support IA (Unia) ?",
    a: "IA qui répond à vos questions 24/7. Si elle ne sait pas, alerte prioritaire envoyée à Tom (ingénieur)."
  },
]

export function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="snap-section relative py-16 px-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-2">
            Prêt à <span className="text-glow">gagner du temps</span> ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          
          {/* Colonne 1 : Timeline horizontale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <LiquidGlassCard className="p-6 h-full" hover={false}>
              <h3 className="text-xl font-semibold mb-6 text-center">Comment ça marche ?</h3>
              
              {/* Timeline horizontal */}
              <div className="flex items-center justify-between relative mb-8">
                {/* Ligne de connexion */}
                <div className="absolute top-8 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-glow/50 via-glow to-glow/50" />
                
                {/* Étapes */}
                {[
                  { icon: Phone, title: "Appel", desc: "30min gratuit", color: "text-glow" },
                  { icon: Settings, title: "Installation", desc: "1 semaine", color: "text-glow" },
                  { icon: Rocket, title: "Liberté", desc: "+10h/semaine", color: "text-green-500" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10 flex-1">
                    <div className="w-16 h-16 rounded-full glass-card-glow flex items-center justify-center mb-3">
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <p className="font-semibold text-sm">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA principal */}
              <div className="text-center space-y-4">
                <div className="inline-block px-8 py-4 rounded-2xl glass-card-glow">
                  <p className="text-4xl font-bold text-glow">29€/mois</p>
                  <p className="text-sm text-muted-foreground">L'IA qui travaille pendant que vous vivez</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <LiquidGlassButton variant="primary">
                    Démarrer à 29€/mois
                  </LiquidGlassButton>
                  <LiquidGlassButton variant="secondary">
                    Réserver un appel gratuit
                  </LiquidGlassButton>
                </div>

                <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                  <span>✓ Sans engagement</span>
                  <span>✓ Réponse sous 48h</span>
                  <span>✓ Support IA inclus</span>
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>

          {/* Colonne 2 : FAQ compacte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <LiquidGlassCard className="p-6 h-full" hover={false}>
              <h3 className="text-xl font-semibold mb-4">Questions fréquentes</h3>
              
              <div className="space-y-2">
                {faqItems.map((item, i) => (
                  <div key={i} className="border-b border-border/50 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-3 flex items-center justify-between text-left hover:text-glow transition-colors"
                    >
                      <span className="text-sm font-medium pr-4">{item.q}</span>
                      <ChevronDown 
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
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
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground pb-3">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-6 pt-4 border-t border-border">
                <a 
                  href="mailto:contact@facile-ia.fr"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@facile-ia.fr
                </a>
              </div>
            </LiquidGlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
