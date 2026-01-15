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
    <section id="contact" className="snap-section relative py-16 px-4">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light">
            Prêt à <span className="text-glow">gagner du temps</span> ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Timeline horizontal + CTA */}
          <div className="lg:col-span-2">
            <LiquidGlassCard className="p-6" hover={false}>
              {/* Timeline */}
              <div className="flex items-center justify-around mb-8 relative">
                <div className="absolute top-6 left-[20%] right-[20%] h-px bg-glow/30" />
                {[
                  { icon: Phone, label: "Appel", sub: "30min gratuit" },
                  { icon: Settings, label: "Installation", sub: "1 semaine" },
                  { icon: Rocket, label: "Liberté", sub: "+10h/sem" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10">
                    <div className="w-12 h-12 rounded-full glass-card-glow flex items-center justify-center mb-2">
                      <step.icon className="w-5 h-5 text-glow" />
                    </div>
                    <p className="text-xs font-medium">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <div className="inline-block px-6 py-3 rounded-xl glass-card-glow">
                  <p className="text-2xl font-bold text-glow">29€/mois</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a href="mailto:contact@facile-ia.fr" className="px-5 py-2 rounded-xl bg-glow text-white text-sm">
                    Démarrer maintenant
                  </a>
                  <a href="mailto:contact@facile-ia.fr" className="px-5 py-2 rounded-xl border border-border text-sm">
                    Réserver un appel
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">
                  ✓ Sans engagement • ✓ Réponse 48h • ✓ Support IA inclus
                </p>
              </div>
            </LiquidGlassCard>
          </div>

          {/* FAQ compact */}
          <div>
            <LiquidGlassCard className="p-4" hover={false}>
              <h3 className="text-sm font-semibold mb-3">Questions fréquentes</h3>
              <div className="space-y-1">
                {faq.map((item, i) => (
                  <div key={i} className="border-b border-border/30 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-2 flex justify-between items-center text-left"
                    >
                      <span className="text-xs font-medium">{item.q}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs text-muted-foreground pb-2 overflow-hidden"
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
