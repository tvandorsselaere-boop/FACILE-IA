"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Settings, Rocket, CheckCircle } from "lucide-react"
import { PageSection, SectionHeader, CardGrid, FeatureCard } from "@/components/layout"

const faq = [
  { q: "Pourquoi 29€/mois ?", a: "Couvre les APIs IA. Moins cher qu'un Netflix, mais infiniment plus utile pour votre business." },
  { q: "Sans engagement ?", a: "Oui, vous arrêtez quand vous voulez. Pas de préavis, pas de frais cachés." },
  { q: "Le site m'appartient ?", a: "Oui, 100%. Même si vous arrêtez l'abonnement, votre site reste à vous." },
  { q: "Support inclus ?", a: "Oui, IA 24/7 + accès direct à un ingénieur si besoin." },
]

const timelineSteps = [
  { icon: Phone, label: "Appel découverte", sub: "30min gratuit" },
  { icon: Settings, label: "Installation", sub: "1 semaine max" },
  { icon: Rocket, label: "Liberté retrouvée", sub: "+10h/semaine" },
]

export function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <PageSection id="contact">
      <SectionHeader
        title="Prêt à"
        titleHighlight="gagner du temps ?"
        subtitle="En 3 étapes simples"
      />

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-glow to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4 border border-glow/30">
                    <step.icon className="w-8 h-8 text-glow" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-glow text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-lg mb-1">{step.label}</h4>
                <p className="text-glow text-sm">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto mb-20"
      >
        <FeatureCard className="text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-glow/10 border border-glow/30 mb-6">
            <p className="text-4xl font-bold text-glow">
              29€<span className="text-xl font-normal text-muted-foreground">/mois</span>
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            L'IA qui travaille pour vous
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:contact@facile-ia.fr" 
              className="px-8 py-4 rounded-full bg-glow text-white font-medium hover:opacity-90 transition-all"
            >
              Démarrer maintenant
            </a>
            <a 
              href="mailto:contact@facile-ia.fr" 
              className="px-8 py-4 rounded-full border border-border hover:border-glow/50 transition-colors"
            >
              Réserver un appel
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            {["Sans engagement", "Réponse sous 48h", "Support IA 24/7"].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-glow" />
                {item}
              </span>
            ))}
          </div>
        </FeatureCard>
      </motion.div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Questions <span className="text-glow">fréquentes</span>
        </h3>
        
        <div className="space-y-3">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-5 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-glow transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}
