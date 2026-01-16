# 🔧 PROMPTS CURSOR - MODIFICATIONS HEADER/FOOTER/LOGO

> **Date:** 16 janvier 2026  
> **Objectif:** Supprimer logo animé header, effet glass sur header/footer, améliorer LogoHero

---

## PROMPT 1 - HEADER : SUPPRIMER LOGO ANIMÉ + EFFET LIQUID GLASS

```
TÂCHE: 
1. Remplacer le logo 3D par un logo texte simple
2. Ajouter un effet liquid glass en fond du header

FICHIER: /components/header.tsx

MODIFICATIONS:

1. SUPPRIMER l'import LogoHero :
// SUPPRIMER cette ligne :
import { LogoHero } from "@/components/LogoHero"

2. CRÉER un composant LogoText stylisé (garder celui existant ou améliorer) :
function LogoText() {
  return (
    <span className="text-xl font-bold tracking-tight">
      FACILE-<span className="text-accent">IA</span>
    </span>
  )
}

3. REMPLACER toute la section logo par simplement :
<Link href="/" className="flex items-center">
  <LogoText />
</Link>

4. SUPPRIMER AnimatePresence si plus utilisé (et son import)

5. MODIFIER le className du header pour ajouter l'effet liquid glass :

AVANT :
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled 
    ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border/50" 
    : "h-28 bg-background/95 backdrop-blur-md border-b border-border"
}`}

APRÈS :
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled 
    ? "h-16" 
    : "h-20"
} bg-background/60 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}

6. SIMPLIFIER la hauteur (plus besoin de h-28 sans le logo 3D)

CODE HEADER COMPLET SIMPLIFIÉ :

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

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
        isScrolled ? "h-14" : "h-16"
      } bg-background/60 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo texte */}
          <Link href="/" className="flex items-center">
            <LogoText />
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
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
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
```

---

## PROMPT 2 - FOOTER : AJOUTER EFFET LIQUID GLASS

```
TÂCHE: Ajouter le même effet liquid glass que le header sur le footer.

FICHIER: /components/footer.tsx

MODIFICATION:

Remplacer le className du <footer> :

AVANT :
className="bg-secondary border-t border-border py-12 px-4 sm:px-6 lg:px-8"

APRÈS :
className="bg-background/60 backdrop-blur-xl border-t border-white/10 dark:border-white/5 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] py-12 px-4 sm:px-6 lg:px-8"

NOTE: Le shadow est inversé (-4px au lieu de 4px) pour que l'ombre soit vers le haut.
```

---

## PROMPT 3 - LOGOHERO : AMÉLIORER LES PARTICULES + COULEUR IA

```
TÂCHE: Modifier le LogoHero pour :
1. Diminuer la profondeur des lettres (axe Z)
2. Augmenter la densité de particules
3. Diminuer la taille des particules
4. Mettre les 2 dernières lettres "IA" en couleur accent (#6366f1)

FICHIER: /components/LogoHero.tsx

MODIFICATIONS:

1. RÉDUIRE LA PROFONDEUR (thickness) - Ligne ~145 environ :

AVANT :
const thickness = 0.1

APRÈS :
const thickness = 0.03

2. AUGMENTER LA DENSITÉ DE PARTICULES - Ligne ~140 environ :

AVANT :
const baseParticles = char === 'I' || char === '-' ? 2500 : 5500

APRÈS :
const baseParticles = char === 'I' || char === '-' ? 4000 : 8000

3. RÉDUIRE LA TAILLE DES PARTICULES - Ligne ~175 environ :

AVANT :
const material = new THREE.PointsMaterial({
  size: 0.005,
  ...
})

APRÈS :
const material = new THREE.PointsMaterial({
  size: 0.003,
  ...
})

4. COLORER LES LETTRES "I" et "A" FINALES EN ACCENT

Modifier la configuration des lettres pour ajouter un flag de couleur :

AVANT (ligne ~110 environ) :
const letterConfig = [
  { char: 'F', width: 0.14 },
  { char: 'A', width: 0.13 },
  { char: 'C', width: 0.12 },
  { char: 'I', width: 0.07 },
  { char: 'L', width: 0.11 },
  { char: 'E', width: 0.11 },
  { char: '-', width: 0.09 },
  { char: 'I', width: 0.07 },
  { char: 'A', width: 0.13 },
]

APRÈS :
const letterConfig = [
  { char: 'F', width: 0.14, accent: false },
  { char: 'A', width: 0.13, accent: false },
  { char: 'C', width: 0.12, accent: false },
  { char: 'I', width: 0.07, accent: false },
  { char: 'L', width: 0.11, accent: false },
  { char: 'E', width: 0.11, accent: false },
  { char: '-', width: 0.09, accent: false },
  { char: 'I', width: 0.07, accent: true },  // IA en accent
  { char: 'A', width: 0.13, accent: true },  // IA en accent
]

5. MODIFIER LA BOUCLE D'ANIMATION POUR LA COULEUR - Dans animate() :

Trouver la section qui gère les couleurs (vers ligne ~220) :

AVANT :
// Couleur selon le thème
if (isDark) {
  colors.setXYZ(i, 1, 1, 1)
} else {
  colors.setXYZ(i, 0, 0, 0)
}

APRÈS :
// Couleur selon le thème ET si c'est une lettre accent
const letterData = letterPositions[groupIndex]
const isAccent = letterData?.accent || false

if (isAccent) {
  // Couleur accent (#6366f1 = rgb(99, 102, 241))
  colors.setXYZ(i, 99/255, 102/255, 241/255)
} else if (isDark) {
  colors.setXYZ(i, 1, 1, 1)
} else {
  colors.setXYZ(i, 0, 0, 0)
}

IMPORTANT: Il faut que letterPositions soit accessible dans la boucle animate(). 
Vérifier que la variable est bien définie avant la fonction animate().

6. ALTERNATIVE PLUS SIMPLE pour la couleur (si la méthode ci-dessus pose problème) :

Stocker l'info accent directement dans allParticleData ou créer un tableau séparé :

// Après letterPositions, créer un tableau des indices accent
const accentIndices = letterConfig
  .map((letter, index) => letter.accent ? index : -1)
  .filter(i => i !== -1)

// Dans animate(), vérifier si groupIndex est dans accentIndices
const isAccent = accentIndices.includes(groupIndex)
```

---

## 📋 ORDRE D'APPLICATION

1. **PROMPT 1** - Header simplifié + liquid glass
2. **PROMPT 2** - Footer liquid glass
3. **PROMPT 3** - LogoHero amélioré

---

## 🎨 RÉSUMÉ VISUEL

| Élément | Avant | Après |
|---------|-------|-------|
| Header logo | Logo 3D animé | Texte "FACILE-**IA**" |
| Header fond | bg-background/80 | Liquid glass (blur + transparence) |
| Footer fond | bg-secondary | Liquid glass (même style) |
| LogoHero profondeur | 0.1 | 0.03 (plus plat) |
| LogoHero densité | 2500/5500 | 4000/8000 (plus dense) |
| LogoHero taille particules | 0.005 | 0.003 (plus fines) |
| LogoHero "IA" | Blanc/Noir | Couleur accent (#6366f1) |

---

*Prompts générés le 16 janvier 2026*
