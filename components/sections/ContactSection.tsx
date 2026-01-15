"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Settings, Rocket } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const faq = [
  { q: "Pourquoi 29€/mois ?", a: "Couvre les APIs IA (OpenAI, Google). Moins cher qu'un Netflix." },
  { q: "Sans engagement ?", a: "Oui, vous arrêtez quand vous voulez." },
  { q: "Le site vitrine m'appartient ?", a: "Oui, même si vous arrêtez l'abonnement." },
  { q: "Support inclus ?", a: "Oui, IA 24/7 + accès ingénieur si besoin." },
]

export function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="snap-section relative py-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light">
            Prêt à <span className="text-glow">gagner du temps</span> ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Timeline + CTA - Plus grand */}
          <div className="lg:col-span-2">
            <LiquidGlassCard className="p-8 h-full" hover={false}>
              {/* Timeline avec plus d'espace */}
              <h3 className="text-lg font-semibold mb-8 text-center">Comment ça marche ?</h3>
              
              <div className="flex items-start justify-around mb-10 relative">
                <div className="absolute top-8 left-[15%] right-[15%] h-px bg-glow/30" />
                {[
                  { icon: Phone, label: "Appel découverte", sub: "30min gratuit" },
                  { icon: Settings, label: "Installation", sub: "1 semaine max" },
                  { icon: Rocket, label: "Liberté retrouvée", sub: "+10h/semaine" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10 px-4">
                    <div className="w-16 h-16 rounded-full glass-card-glow flex items-center justify-center mb-3">
                      <step.icon className="w-6 h-6 text-glow" />
                    </div>
                    <p className="text-sm font-medium text-center">{step.label}</p>
                    <p className="text-xs text-muted-foreground text-center">{step.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-6">
                <div className="inline-block px-8 py-4 rounded-2xl glass-card-glow">
                  <p className="text-3xl font-bold text-glow">29€/mois</p>
                  <p className="text-sm text-muted-foreground">L'IA qui travaille pour vous</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="mailto:contact@facile-ia.fr" className="px-6 py-3 rounded-xl bg-glow text-white font-medium hover:opacity-90 transition-opacity">
                    Démarrer maintenant
                  </a>
                  <a href="mailto:contact@facile-ia.fr" className="px-6 py-3 rounded-xl border border-border hover:border-glow/50 transition-colors">
                    Réserver un appel
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
                  <span>✓ Sans engagement</span>
                  <span>✓ Réponse sous 48h</span>
                  <span>✓ Support IA 24/7</span>
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* FAQ - Plus grand */}
          <div>
            <LiquidGlassCard className="p-6 h-full" hover={false}>
              <h3 className="text-lg font-semibold mb-6">Questions fréquentes</h3>
              <div className="space-y-2">
                {faq.map((item, i) => (
                  <div key={i} className="border-b border-border/30 last:border-0 pb-2">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-3 flex justify-between items-center text-left hover:text-glow transition-colors"
                    >
                      <span className="text-sm font-medium pr-4">{item.q}</span>
                      <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-sm text-muted-foreground pb-3 overflow-hidden"
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
