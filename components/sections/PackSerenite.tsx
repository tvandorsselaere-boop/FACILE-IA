"use client"

import { motion } from "framer-motion"
import { Check, Zap, Shield, Clock, HeadphonesIcon } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

const features = [
  { icon: Zap, text: "Automatisation intelligente de vos tâches répétitives" },
  { icon: Shield, text: "Sécurité et confidentialité garanties" },
  { icon: Clock, text: "Disponible 24/7, sans pause café" },
  { icon: HeadphonesIcon, text: "Support prioritaire inclus" },
]

const includes = [
  "Configuration personnalisée",
  "Formation de votre équipe",
  "Maintenance et mises à jour",
  "Dashboard de suivi",
  "Intégrations illimitées",
  "Sans engagement",
]

export function PackSerenite() {
  return (
    <section id="pack-serenite" className="snap-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Le Pack <span className="text-blue-400">Sérénité</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour automatiser votre entreprise, sans surprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Colonne gauche - Features */}
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)',
                      border: '1px solid rgba(59,130,246,0.3)',
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg text-foreground/90 pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Colonne droite - Card prix */}
            <LiquidGlassCard className="p-8" glowColor="blue">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">Forfait mensuel tout inclus</p>
                <p className="text-6xl font-bold text-blue-400">29€</p>
                <p className="text-muted-foreground">/mois</p>
              </div>

              <div className="space-y-3 mb-8">
                {includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <LiquidGlassButton className="w-full" glowColor="blue">
                Commencer maintenant
              </LiquidGlassButton>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
