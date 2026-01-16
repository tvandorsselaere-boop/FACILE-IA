"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoHero } from "@/components/LogoHero"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-6"
        >
          <span className="text-accent text-sm font-bold uppercase">agence digitale augmentée pour PME et artisans</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-64 sm:h-80 md:h-96 w-full mx-auto mb-6"
        >
          <LogoHero />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 mx-auto"
        >
          Gagnez du temps pour ce qui compte vraiment
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/#contact">
            <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto">
              Nous contacter
            </Button>
          </Link>
          <Link href="/lab">
            <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
              Découvrir nos projets
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { title: "Innovant", desc: "La technologie qui vous simplifie la vie" },
            { title: "Sur-mesure", desc: "Des solutions adaptées à vos besoins" },
            { title: "Humain", desc: "Un interlocuteur, pas un robot" },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="p-6 bg-secondary rounded-lg border border-border card-hover-glow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
