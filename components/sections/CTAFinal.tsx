"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

export function CTAFinal() {
  return (
    <section id="cta-final" className="snap-section relative overflow-hidden">
      {/* Background effet */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Titre */}
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Prêt à récupérer vos
              <br />
              <span className="text-blue-400">dimanches après-midi</span> ?
            </h2>

            {/* Prix reminder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl text-muted-foreground">
                Tout ça pour <span className="text-blue-400 font-bold text-4xl">29€/mois</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <LiquidGlassButton size="lg" glowColor="blue">
                <span className="flex items-center gap-2">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5" />
                </span>
              </LiquidGlassButton>
              
              <LiquidGlassButton variant="secondary" size="lg" glowColor="blue">
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Appel découverte gratuit
                </span>
              </LiquidGlassButton>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-8 flex items-center justify-center gap-6 text-muted-foreground"
            >
              <a 
                href="mailto:contact@facile-ia.fr" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@facile-ia.fr
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-muted-foreground/50">
          © 2025 FACILE-IA. Tous droits réservés.
        </div>
      </div>
    </section>
  )
}
