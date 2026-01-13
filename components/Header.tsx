"use client"

import { useState, useEffect } from "react"
import { motion, type Variants, AnimatePresence } from "framer-motion"
import { Home, Briefcase, Layers, User, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface MenuItem {
  icon: typeof Home
  label: string
  href: string
  gradient: string
  iconColor: string
}

const items: MenuItem[] = [
  { 
    icon: Home, 
    label: "Accueil", 
    href: "/", 
    gradient: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, rgba(185,28,28,0.06) 50%, rgba(153,27,27,0) 100%)",
    iconColor: "text-red-500"
  },
  { 
    icon: Briefcase, 
    label: "Services", 
    href: "/services", 
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500"
  },
  { 
    icon: Layers, 
    label: "Le Lab", 
    href: "/lab", 
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500"
  },
  { 
    icon: User, 
    label: "À Propos", 
    href: "/about", 
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500"
  },
]

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  hover: {
    opacity: 1,
    scale: 2,
  },
}

const glowTransition = {
  opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
}

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

interface HeaderProps {
  isScrolled?: boolean
}

export function Header({ isScrolled = false }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ne pas afficher le header tant qu'on n'a pas scrollé
  if (!isScrolled) {
    return null
  }

  return (
    <header className="fixed top-4 right-4 z-[100]">
      <AnimatePresence>
        <motion.nav 
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg relative overflow-hidden"
        >
          <ul className="flex items-center gap-2 relative z-10">
            {items.map((item) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Glow individuel par item */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    transition={glowTransition}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                      borderRadius: "12px",
                    }}
                  />
                  
                  {/* Link AVANT (flip vers le haut) */}
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom"
                    }}
                  >
                    <span className={cn(
                      "transition-colors duration-300",
                      item.label === "Accueil" && "group-hover:text-red-500",
                      item.label === "Services" && "group-hover:text-orange-500",
                      item.label === "Le Lab" && "group-hover:text-purple-500",
                      item.label === "À Propos" && "group-hover:text-blue-500"
                    )}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.a>
                  
                  {/* Link ARRIÈRE (flip depuis le haut) */}
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-foreground transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      rotateX: 90
                    }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
            
            {/* BOUTON DARK/LIGHT MODE */}
            <motion.li className="relative ml-2">
              <button
                onClick={() => {
                  const newTheme = theme === "dark" ? "light" : "dark"
                  setTheme(newTheme)
                }}
                className="flex items-center justify-center w-10 h-10 text-blue-400 transition-colors rounded-xl backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-500 hover:border-white/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(59,130,246,0.3),0_0_25px_rgba(59,130,246,0.9)] hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.02) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(110%)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(59,130,246,0.15)'
                }}
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-5 w-5 drop-shadow-md" />
                  ) : (
                    <Moon className="h-5 w-5 drop-shadow-md" />
                  )
                ) : (
                  <div className="h-5 w-5 bg-blue-400/30 rounded-full animate-pulse" />
                )}
              </button>
            </motion.li>
          </ul>
        </motion.nav>
      </AnimatePresence>
    </header>
  )
}
