"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { LogoHero } from "./LogoHero"

const navItems = [
  { label: "Facile-IA", href: "/#hero", isAnchor: true, isLab: false },
  { label: "Offres", href: "/#services", isAnchor: true, isLab: false },
  { label: "Témoignages", href: "/#testimonials", isAnchor: true, isLab: false },
  { label: "Contact", href: "/#contact", isAnchor: true, isLab: false },
  { label: "Le Lab", href: "/lab", isAnchor: false, isLab: true },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isLabPage = pathname === "/lab"

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    // Si c'est un anchor sur la page principale, scroll smooth
    if (item.isAnchor && !isLabPage) {
      e.preventDefault()
      const target = document.querySelector(item.href.replace('/', ''))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full px-4 py-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl glass-card-glow"
      >
        {/* Logo à gauche */}
        <Link href="/" className="w-[220px] h-[55px] flex-shrink-0">
          <LogoHero />
        </Link>

        {/* MILIEU : Espace flexible */}
        <div className="flex-1" />

        {/* DROITE : Navigation + Toggle theme (groupés) */}
        <div className="flex items-center gap-2">
          {/* Navigation desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {/* Séparateur avant Le Lab */}
                {item.isLab && (
                  <div className="w-px h-6 bg-glow/30 mx-3" />
                )}
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    (isLabPage && item.href === "/lab") || (!isLabPage && item.href === "/#hero")
                      ? "text-glow"
                      : "text-muted-foreground hover:text-foreground"
                  } ${item.isLab ? "border border-glow/50 bg-glow/10 hover:bg-glow/20 hover:border-glow shadow-glow" : ""}`}
                >
                  {item.isLab && <span className="text-base">🧪</span>}
                  {item.label}
                </Link>
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
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                    (isLabPage && item.href === "/lab") || (!isLabPage && item.href === "/#hero")
                      ? "text-glow"
                      : "text-foreground hover:text-glow"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
