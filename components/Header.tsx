"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { LogoHero } from "@/components/LogoHero"
import { motion, AnimatePresence } from "framer-motion"

// Logo texte simple pour le header réduit
function LogoText() {
  return (
    <span className="text-xl font-bold tracking-tight">
      FACILE-<span className="text-accent">IA</span>
    </span>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = resolvedTheme === "dark"

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Le Lab", href: "/lab" },
    { label: "Nous contacter", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border/50" 
          : "h-28 bg-background/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo : 3D quand grand, texte quand réduit */}
          <Link href="/" className="flex items-center">
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.div
                  key="logo-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <LogoText />
                </motion.div>
              ) : (
                <motion.div
                  key="logo-3d"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-20 w-[450px]"
                >
                  <LogoHero />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                isDark ? <Sun size={20} /> : <Moon size={20} />
              ) : (
                <div className="w-5 h-5" />
              )}
            </motion.button>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="liquidGlass" 
                className="hidden sm:inline-flex liquid-glass-btn-primary" 
                asChild
              >
                <Link href="/contact">Réserver un appel</Link>
              </Button>
            </motion.div>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 flex flex-col gap-2 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-foreground/80 hover:text-accent rounded-lg block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
