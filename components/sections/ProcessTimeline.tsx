"use client"

import { motion } from "framer-motion"
import { PhoneCall, Search, Cog, Rocket, HeadphonesIcon } from "lucide-react"

const steps = [
  { 
    icon: PhoneCall, 
    title: "Appel découverte", 
    desc: "15 min pour comprendre vos besoins",
    time: "J+0"
  },
  { 
    icon: Search, 
    title: "Audit gratuit", 
    desc: "Analyse de vos processus actuels",
    time: "J+1"
  },
  { 
    icon: Cog, 
    title: "Configuration", 
    desc: "Mise en place de vos outils IA",
    time: "J+2"
  },
  { 
    icon: Rocket, 
    title: "Lancement", 
    desc: "Formation et déploiement",
    time: "J+3"
  },
  { 
    icon: HeadphonesIcon, 
    title: "Support continu", 
    desc: "Assistance et optimisation",
    time: "∞"
  },
]

export function ProcessTimeline() {
  return (
    <section id="process" className="snap-section relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Comment ça <span className="text-blue-400">marche</span> ?
            </h2>
            <p className="text-lg text-muted-foreground">
              De l'idée au déploiement en 48h
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div 
                      className="inline-block p-6 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <div className={`flex items-center gap-4 mb-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-400"
                          style={{
                            background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)',
                          }}
                        >
                          <step.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm text-blue-400 font-mono">{step.time}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>

                  {/* Dot central */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
