"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, MessageSquare, Phone, FlaskConical, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { LogoHero } from "./LogoHero"

const navItems = [
  { icon: Briefcase, label: "Facile-IA", href: "#hero" },
  { icon: Briefcase, label: "Services", href: "#services" },
  { icon: MessageSquare, label: "Témoignages", href: "#testimonials" },
  { icon: Phone, label: "Contact", href: "#contact" },
  { icon: FlaskConical, label: "Le Lab", href: "#lab" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 rounded-2xl glass-card-glow"
      >
        {/* Logo à gauche */}
        <div className="w-[220px] h-[55px] flex-shrink-0">
          <LogoHero />
        </div>

        {/* MILIEU : Espace flexible */}
        <div className="flex-1" />

        {/* DROITE : Navigation + Toggle theme (groupés) */}
        <div className="flex items-center gap-2">
          {/* Navigation desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Séparateur */}
          <div className="hidden md:block w-px h-6 bg-border mx-2" />

          {/* Toggle theme */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-glow glass-card-glow"
            whileHover={{ scale: 1.1, boxShadow: '0 0 25px var(--glow-color-50)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Changer de thème"
          >
            {mounted && (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </motion.button>

          {/* Menu mobile */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center glass-card-glow"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-card-glow"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-glow transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
