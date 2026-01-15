"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Comment ça peut coûter seulement 29€/mois ?",
    a: "Nous utilisons des technologies IA modernes et des processus automatisés qui réduisent drastiquement nos coûts. Pas de commerciaux, pas de locaux luxueux - juste de l'expertise et de l'efficacité."
  },
  {
    q: "Quels types de tâches peuvent être automatisées ?",
    a: "Pratiquement tout ce qui est répétitif : emails, planning, génération de documents, analyse de données, chatbots, gestion des réseaux sociaux, et bien plus. Nous adaptons les outils à vos besoins."
  },
  {
    q: "Faut-il des compétences techniques ?",
    a: "Absolument pas. Nous nous occupons de tout : configuration, formation, maintenance. Vous n'avez qu'à profiter des résultats."
  },
  {
    q: "Et si ça ne me convient pas ?",
    a: "Sans engagement signifie sans engagement. Vous pouvez arrêter quand vous voulez. Mais honnêtement, personne n'a encore arrêté."
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Oui, sécurité maximale. Hébergement européen, chiffrement de bout en bout, conformité RGPD. Vos données restent les vôtres."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="snap-section relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-3xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Questions <span className="text-blue-400">fréquentes</span>
            </h2>
          </motion.div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
