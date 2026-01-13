"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Header } from "@/components/Header"
import { HeroSlider } from "@/components/HeroSlider"
import { LogoHero } from "@/components/LogoHero"
import { Logo } from "@/components/Logo"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const infoSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToInfo = () => {
    infoSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Header avec menu - visible seulement après scroll */}
      <Header isScrolled={isScrolled} />

      {/* Logo central - visible quand pas scrollé */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-[160px] left-0 right-0 z-50 pointer-events-none flex items-center justify-center"
          >
            <div className="relative w-[1000px] h-[180px] pointer-events-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoHero />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider en dessous */}
      <HeroSlider />

      {/* Bouton scroll down */}
      <motion.button
        onClick={scrollToInfo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 20 : 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2 group cursor-pointer"
        style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
      >
        <span className="text-sm font-light tracking-widest uppercase text-muted-foreground/70 group-hover:text-foreground transition-colors">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-500 group-hover:border-white/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(59,130,246,0.3)]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.02) 100%)',
            backdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(59,130,246,0.15)'
          }}
        >
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.button>

      {/* Section Plus d'infos */}
      <section
        ref={infoSectionRef}
        className="min-h-screen bg-background relative z-10 py-24 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-foreground">
              Notre Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              20 ans d&apos;expérience chez Airbus appliqués à la digitalisation des PME
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pack Sérénité",
                desc: "Solution clé en main pour digitaliser votre PME avec un ROI immédiat",
                price: "999€ + 49€/mois"
              },
              {
                title: "WolfEdge",
                desc: "Journal de trading propulsé par l'IA pour optimiser vos performances",
                price: "€9.99/mois"
              },
              {
                title: "FEAsy",
                desc: "Démocratiser l'analyse par éléments finis - de 100h à 5min",
                price: "Q4 2026"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-8 rounded-2xl backdrop-blur-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-white/40 group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.02) 100%)',
                }}
              >
                <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {card.desc}
                </p>
                <span className="text-sm font-medium text-blue-400">
                  {card.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
