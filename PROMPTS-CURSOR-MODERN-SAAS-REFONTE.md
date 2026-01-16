# 🚀 PROMPTS CURSOR - REFONTE MODERN SAAS FACILE-IA

> **Date:** 16 janvier 2026  
> **Objectif:** Transformer FACILE-IA en un site Modern SaaS premium  
> **Sources:** Vercel Best Practices, Aceternity UI, Magic UI, Stripe Design

---

## 📋 TABLE DES MATIÈRES

1. [PROMPT 1](#prompt-1) - Installation Framer Motion + Setup
2. [PROMPT 2](#prompt-2) - Header Glassmorphism avec Shrink au Scroll
3. [PROMPT 3](#prompt-3) - Hero Section avec Gradient Text + Spotlight
4. [PROMPT 4](#prompt-4) - Services Bento Grid avec 6 Outils IA
5. [PROMPT 5](#prompt-5) - Pricing avec Vrais Tarifs + Moving Border
6. [PROMPT 6](#prompt-6) - Section Problème/Solution avec Stats
7. [PROMPT 7](#prompt-7) - Composant Card 3D avec Hover Scale
8. [PROMPT 8](#prompt-8) - Section Process 5 Étapes
9. [PROMPT 9](#prompt-9) - FAQ Accordion Animé
10. [PROMPT 10](#prompt-10) - Optimisations Performance Vercel

---

## PROMPT 1
### Installation Framer Motion + Configuration Design System

```
Agis comme un développeur Front-end expert React/Next.js.

CONTEXTE:
- Projet: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE
- Stack: Next.js 16, React 19, Tailwind CSS 4, TypeScript

TÂCHE:
1. Installe framer-motion si pas déjà installé
2. Crée un fichier `lib/animations.ts` avec les animations réutilisables suivantes:

```typescript
// lib/animations.ts
import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const springHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" },
  animate: { 
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.4)",
      "0 0 40px rgba(99, 102, 241, 0.6)",
      "0 0 20px rgba(99, 102, 241, 0.4)"
    ],
    transition: { duration: 2, repeat: Infinity }
  }
}
```

3. Ajoute ces styles dans `globals.css` pour le design system Modern SaaS:

```css
/* Modern SaaS Design System */
:root {
  --gradient-start: #6366f1;
  --gradient-mid: #8b5cf6;
  --gradient-end: #06b6d4;
}

/* Gradient Text Effect (Vercel style) */
.gradient-text {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

/* Glassmorphism Card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.dark .glass-card {
  background: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Soft Shadow (Stripe style) */
.soft-shadow {
  box-shadow: 
    0 30px 60px -12px rgba(50, 50, 93, 0.15),
    0 18px 36px -18px rgba(0, 0, 0, 0.2);
}

.dark .soft-shadow {
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.4),
    0 18px 36px -18px rgba(0, 0, 0, 0.3);
}

/* Dot Grid Background */
.dot-grid {
  background-image: radial-gradient(circle, rgba(99, 102, 241, 0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

CONTRAINTES:
- Ne modifie pas les fichiers existants qui fonctionnent
- Utilise les imports ES6 modernes
- Assure-toi que tout est compatible avec React 19
```

---

## PROMPT 2
### Header Glassmorphism avec Effet Shrink au Scroll

```
Agis comme un développeur Front-end expert et UI/UX Designer.

CONTEXTE:
- Fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/header.tsx
- Le header actuel est déjà fonctionnel avec navigation et toggle dark/light

TÂCHE:
Améliore le header avec:

1. **Effet Glassmorphism amélioré:**
   - Background semi-transparent avec backdrop-blur-md
   - Bordure subtile qui s'illumine au hover

2. **Effet Shrink au scroll (sticky header):**
   - Au scroll > 50px: réduire la hauteur de h-28 à h-16
   - Transition fluide avec Framer Motion
   - Réduire la taille du logo proportionnellement

3. **Micro-interactions:**
   - Liens avec underline animé au hover
   - Bouton CTA avec glow effect

CODE À GÉNÉRER:

```tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { LogoHero } from "@/components/LogoHero"
import { motion, useScroll, useTransform } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Le Lab", href: "/lab" },
    { label: "Contact", href: "/contact" },
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
          <Link 
            href="/" 
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "h-10 w-[280px]" : "h-20 w-[450px]"
            }`}
          >
            <LogoHero />
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
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
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

        {/* Mobile menu avec animation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 flex flex-col gap-2"
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
      </div>
    </motion.header>
  )
}
```

CONTRAINTES:
- Préserve le LogoHero existant
- Transitions fluides (0.3s cubic-bezier)
- Compatible mobile
- Accessibilité maintenue
```

---

## PROMPT 3
### Hero Section avec Gradient Text + Spotlight Effect

```
Agis comme un développeur Front-end expert spécialisé en animations.

CONTEXTE:
- Fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/hero.tsx
- Objectif: Créer un Hero premium style Vercel/Linear avec effet Spotlight

TÂCHE:
Refonte complète du Hero avec:

1. **Message ciblé PME/Artisans:**
   - Titre: "Gagnez 10-12h par semaine"
   - Sous-titre problème/solution
   - CTA clair

2. **Effet Spotlight (Aceternity style):**
   - Cercle lumineux qui suit la souris
   - Gradient radial animé

3. **Gradient Text animé** sur le titre principal

4. **Animation fade-in-up** sur les éléments

CODE À GÉNÉRER:

```tsx
"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoHero } from "@/components/LogoHero"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 })

  const features = [
    { 
      icon: Clock, 
      title: "10-12h gagnées", 
      desc: "Par semaine sur les tâches répétitives" 
    },
    { 
      icon: Sparkles, 
      title: "6 outils IA", 
      desc: "Prêts à l'emploi, adaptés aux PME" 
    },
    { 
      icon: Users, 
      title: "Support humain", 
      desc: "Un interlocuteur dédié, pas un robot" 
    },
  ]

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => 
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
          )
        }}
      />

      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-30 z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">
            Agence digitale augmentée pour PME et artisans
          </span>
        </motion.div>

        {/* Logo 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-64 sm:h-80 md:h-96 w-full mx-auto mb-8"
        >
          <LogoHero />
        </motion.div>

        {/* Titre avec Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
        >
          Gagnez{" "}
          <span className="gradient-text">10 à 12 heures</span>
          <br />
          par semaine
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Automatisez vos tâches répétitives avec nos outils IA. 
          <br className="hidden sm:block" />
          Plus de temps pour ce qui compte vraiment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact">
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-primary">
                Réserver un appel découverte
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/#services">
              <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
                Découvrir nos outils
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 soft-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

CONTRAINTES:
- Performance: useMotionValue pour éviter re-renders
- Effet spotlight subtil (opacité 0.15)
- Mobile: désactiver spotlight effect
- Accessibilité: préserver la sémantique
```

---

## PROMPT 4
### Services Bento Grid avec 6 Outils IA

```
Agis comme un développeur Front-end expert et UI/UX Designer.

CONTEXTE:
- Fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/services.tsx
- Objectif: Remplacer le contenu générique par les 6 vrais outils IA

TÂCHE:
Créer une section Services avec:

1. **Bento Grid Layout asymétrique:**
   - 2 grandes cards (Pack Sérénité + CRM)
   - 4 petites cards (autres outils)
   - Layout: grid-cols-4 avec span-2

2. **6 Outils IA concrets:**
   - FraisAuto (notes de frais)
   - Devis Pro (devis automatiques)
   - Réputation IA (gestion avis)
   - PDF Pro (traitement documents)
   - Veille Pro (veille concurrentielle)
   - CRM Smart (relation client)

3. **Effet hover scale + shine border:**
   - Cards avec glassmorphism
   - Bordure brillante au hover (Magic UI style)

CODE À GÉNÉRER:

```tsx
"use client"

import { motion } from "framer-motion"
import { 
  Receipt, FileText, Star, FileSearch, 
  Eye, Users, Sparkles, ArrowRight 
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tools = [
  {
    id: "pack-serenite",
    name: "Pack Sérénité",
    description: "Site web professionnel + 3 outils IA de votre choix. La solution tout-en-un pour démarrer.",
    icon: Sparkles,
    featured: true,
    price: "999€ + 49€/mois",
    span: "col-span-2 row-span-2",
  },
  {
    id: "frais-auto",
    name: "FraisAuto",
    description: "Photographiez vos tickets, l'IA catégorise et exporte automatiquement.",
    icon: Receipt,
    span: "col-span-1",
  },
  {
    id: "devis-pro",
    name: "Devis Pro",
    description: "Génération automatique de devis personnalisés en 30 secondes.",
    icon: FileText,
    span: "col-span-1",
  },
  {
    id: "reputation-ia",
    name: "Réputation IA",
    description: "Surveillance et réponse automatique aux avis Google, TripAdvisor...",
    icon: Star,
    span: "col-span-1",
  },
  {
    id: "pdf-pro",
    name: "PDF Pro",
    description: "Extraction et traitement intelligent de documents PDF.",
    icon: FileSearch,
    span: "col-span-1",
  },
  {
    id: "veille-pro",
    name: "Veille Pro",
    description: "Surveillance concurrentielle automatisée avec alertes personnalisées.",
    icon: Eye,
    span: "col-span-1",
  },
  {
    id: "crm-smart",
    name: "CRM Smart",
    description: "Gestion intelligente de la relation client avec scoring automatique et suggestions de suivi.",
    icon: Users,
    featured: true,
    span: "col-span-2",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background subtle */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Nos outils IA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            6 outils pour <span className="gradient-text">automatiser</span> votre quotidien
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions concrètes, prêtes à l'emploi, conçues pour les PME et artisans.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl ${
                tool.span.includes("col-span-2") ? "md:col-span-2" : ""
              } ${tool.span.includes("row-span-2") ? "lg:row-span-2" : ""}`}
            >
              {/* Shine Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Card Content */}
              <div className={`relative h-full glass-card p-6 lg:p-8 border border-border/50 group-hover:border-accent/30 transition-all duration-300 ${
                tool.featured ? "bg-accent/5" : ""
              }`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  tool.featured 
                    ? "bg-accent/20 text-accent" 
                    : "bg-secondary text-foreground"
                }`}>
                  <tool.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{tool.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Price for featured */}
                {tool.price && (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-accent">{tool.price}</span>
                  </div>
                )}

                {/* CTA for featured cards */}
                {tool.featured && (
                  <Link href="/contact">
                    <Button variant="liquidGlass" className="group/btn">
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Tous les outils sont disponibles à <span className="font-semibold text-accent">49€/mois</span> individuellement
          </p>
          <Link href="/contact">
            <Button variant="liquidGlass" size="lg" className="liquid-glass-btn-primary">
              Découvrir le Pack Sérénité
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
```

CONTRAINTES:
- Bento Grid responsive (1 col mobile, 2 md, 4 lg)
- Shine border avec gradient animé
- Performance: viewport once pour les animations
```

---

## PROMPT 5
### Pricing avec Vrais Tarifs + Moving Border Effect

```
Agis comme un développeur Front-end expert.

CONTEXTE:
- Fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/pricing.tsx
- CRITIQUE: Les tarifs actuels sont FAUX, il faut les remplacer

TÂCHE:
Remplacer complètement le pricing avec les VRAIS tarifs:

1. **Pack Sérénité:** 999€ unique + 49€/mois (site + 3 outils IA)
2. **Site Solo:** 999€ unique + 100€/an (site seul, maintenance incluse)
3. **Outils IA seuls:** 49€/mois (accès aux 6 outils sans site)
4. **Développement sur mesure:** À partir de 500€

5. **Design:**
   - Moving Border Effect (Aceternity) sur le plan populaire
   - Glassmorphism cards
   - Animation d'entrée staggered

CODE À GÉNÉRER:

```tsx
"use client"

import { motion } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Site Solo",
    price: "999",
    priceDetail: "€ unique",
    recurring: "+ 100€/an",
    recurringDetail: "maintenance incluse",
    description: "Votre présence en ligne professionnelle",
    features: [
      "Site vitrine responsive",
      "Design personnalisé",
      "Hébergement inclus 1 an",
      "Maintenance technique",
      "Support par email",
    ],
    cta: "Choisir ce plan",
    highlighted: false,
  },
  {
    name: "Pack Sérénité",
    price: "999",
    priceDetail: "€ unique",
    recurring: "+ 49€/mois",
    recurringDetail: "3 outils IA inclus",
    description: "Le plus populaire • Tout pour automatiser",
    features: [
      "Site vitrine complet",
      "3 outils IA au choix",
      "Formation personnalisée",
      "Support prioritaire",
      "Mises à jour continues",
      "1 interlocuteur dédié",
    ],
    cta: "Démarrer maintenant",
    highlighted: true,
  },
  {
    name: "Outils IA",
    price: "49",
    priceDetail: "€/mois",
    recurring: "Sans engagement",
    recurringDetail: "résiliable à tout moment",
    description: "Accès à tous les outils IA",
    features: [
      "FraisAuto",
      "Devis Pro",
      "Réputation IA",
      "PDF Pro",
      "Veille Pro",
      "CRM Smart",
    ],
    cta: "Essayer gratuitement",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tarification <span className="gradient-text">transparente</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pas de surprise, pas de frais cachés. Choisissez la formule qui vous correspond.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Moving Border for highlighted */}
              {plan.highlighted && (
                <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{
                      background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)"
                    }}
                  />
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full rounded-2xl p-8 ${
                plan.highlighted 
                  ? "bg-background border-0" 
                  : "glass-card border border-border/50"
              }`}>
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      Le plus populaire
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.priceDetail}</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-accent font-medium">{plan.recurring}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {plan.recurringDetail}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contact" className="block mb-8">
                  <Button 
                    variant="liquidGlass"
                    className={`w-full ${plan.highlighted ? "liquid-glass-btn-primary" : "liquid-glass-btn-outline"}`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sur mesure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Besoin d'une solution sur mesure ?</h3>
            <p className="text-muted-foreground mb-4">
              Développement personnalisé à partir de <span className="text-accent font-bold">500€</span>
            </p>
            <Link href="/contact">
              <Button variant="liquidGlass">
                Discutons de votre projet
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

CONTRAINTES:
- Tarifs EXACTS comme spécifiés
- Moving border avec conic-gradient
- Animation rotate infinie pour le border
```

---

## PROMPT 6
### Section Problème/Solution avec Stats

```
Agis comme un développeur Front-end expert et copywriter.

CONTEXTE:
- Nouveau fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/problem-solution.tsx
- Objectif: Hook émotionnel pour les PME/artisans

TÂCHE:
Créer une nouvelle section Problème/Solution avec:

1. **Structure:**
   - Gauche: Le problème (pain points)
   - Droite: La solution (bénéfices)
   - Stats animées au milieu

2. **Contenu ciblé PME:**
   - "Vous passez des heures sur des tâches répétitives..."
   - "Pendant que vos concurrents automatisent..."

3. **Stats avec compteur animé:**
   - 10-12h gagnées/semaine
   - 6 outils IA
   - 100+ entreprises accompagnées

CODE À GÉNÉRER:

```tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { AlertCircle, CheckCircle2, TrendingUp, Clock, Users, Sparkles } from "lucide-react"

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function ProblemSolution() {
  const problems = [
    "Heures perdues sur les notes de frais",
    "Devis qui prennent trop de temps",
    "Avis clients non gérés",
    "Documents PDF à traiter manuellement",
    "Veille concurrentielle inexistante",
  ]

  const solutions = [
    "FraisAuto scanne et catégorise en 1 clic",
    "Devis Pro génère en 30 secondes",
    "Réputation IA répond automatiquement",
    "PDF Pro extrait l'essentiel",
    "Veille Pro surveille pour vous",
  ]

  const stats = [
    { icon: Clock, value: 12, suffix: "h", label: "gagnées par semaine" },
    { icon: Sparkles, value: 6, suffix: "", label: "outils IA prêts à l'emploi" },
    { icon: Users, value: 100, suffix: "+", label: "entreprises accompagnées" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            De la <span className="text-destructive">frustration</span> à la{" "}
            <span className="gradient-text">sérénité</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous comprenons les défis quotidiens des PME et artisans.
          </p>
        </motion.div>

        {/* Problem / Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">Avant FACILE-IA</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Avec FACILE-IA</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 glass-card rounded-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 gradient-text">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

N'oublie pas d'ajouter ce composant dans app/page.tsx après Hero !
```

---

## PROMPT 7
### Composant Card 3D avec Hover Scale (réutilisable)

```
Agis comme un développeur Front-end expert.

CONTEXTE:
- Nouveau fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/ui/card-3d.tsx
- Objectif: Composant réutilisable avec effet 3D tilt

TÂCHE:
Créer un composant Card3D réutilisable:

1. **Effet 3D au hover:**
   - Tilt basé sur position souris
   - Perspective 1000px
   - Rotation max 10deg

2. **Glare effect:**
   - Reflet brillant qui suit la souris

CODE À GÉNÉRER:

```tsx
"use client"

import { useState, useRef, ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface Card3DProps {
  children: ReactNode
  className?: string
  glare?: boolean
}

export function Card3D({ children, className, glare = true }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className={cn("relative", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Glare Effect */}
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl z-10"
            style={{
              background: useTransform(
                [x, y],
                ([px, py]) =>
                  `radial-gradient(circle at ${(px as number) * 100}% ${(py as number) * 100}%, rgba(255,255,255,0.25) 0%, transparent 50%)`
              ),
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        {children}
      </motion.div>
    </motion.div>
  )
}
```

UTILISATION:
```tsx
<Card3D className="w-full">
  <div className="glass-card p-6 rounded-2xl h-full">
    {/* Contenu */}
  </div>
</Card3D>
```
```

---

## PROMPT 8
### Section Process 5 Étapes

```
Agis comme un développeur Front-end expert.

CONTEXTE:
- Nouveau fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/process.tsx
- Objectif: Montrer le process de collaboration

TÂCHE:
Créer une section Process avec:

1. **5 étapes:**
   - Appel découverte (15 min gratuit)
   - Analyse de vos besoins
   - Proposition personnalisée
   - Mise en place & formation
   - Support continu

2. **Design:**
   - Timeline verticale sur mobile
   - Timeline horizontale sur desktop
   - Icônes animées
   - Ligne de connexion animée

CODE À GÉNÉRER:

```tsx
"use client"

import { motion } from "framer-motion"
import { Phone, Search, FileCheck, Rocket, HeartHandshake } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Appel découverte",
    description: "15 minutes pour comprendre vos besoins et défis quotidiens.",
    duration: "15 min • Gratuit"
  },
  {
    icon: Search,
    title: "Analyse approfondie",
    description: "Nous étudions vos process pour identifier les gains de temps.",
    duration: "48h"
  },
  {
    icon: FileCheck,
    title: "Proposition sur mesure",
    description: "Un devis clair avec les outils adaptés à votre activité.",
    duration: "Sans engagement"
  },
  {
    icon: Rocket,
    title: "Mise en place",
    description: "Installation, configuration et formation personnalisée.",
    duration: "1-2 semaines"
  },
  {
    icon: HeartHandshake,
    title: "Support continu",
    description: "Un interlocuteur dédié pour vous accompagner au quotidien.",
    duration: "Inclus"
  },
]

export function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comment ça <span className="gradient-text">fonctionne</span> ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un process simple et transparent pour vous accompagner.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Numéro */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-6"
                >
                  <step.icon className="w-7 h-7 text-accent" />
                </motion.div>

                {/* Contenu */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    Étape {index + 1}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {step.description}
                  </p>
                  <span className="text-xs text-accent font-medium">
                    {step.duration}
                  </span>
                </div>

                {/* Ligne verticale mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-16 w-0.5 h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

N'oublie pas d'ajouter ce composant dans app/page.tsx !
```

---

## PROMPT 9
### FAQ Accordion Animé

```
Agis comme un développeur Front-end expert.

CONTEXTE:
- Nouveau fichier: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE/components/faq.tsx
- Objectif: Répondre aux questions fréquentes

TÂCHE:
Créer une section FAQ avec:

1. **Questions ciblées PME:**
   - Combien de temps pour voir les résultats ?
   - Ai-je besoin de compétences techniques ?
   - Que se passe-t-il si j'arrête l'abonnement ?
   - Comment fonctionne le support ?
   - Mes données sont-elles sécurisées ?

2. **Design:**
   - Accordion avec animation smooth
   - Icône + / - animée
   - Glassmorphism sur les items

CODE À GÉNÉRER:

```tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Combien de temps pour voir les résultats ?",
    answer: "La plupart de nos clients constatent un gain de temps dès la première semaine. En moyenne, vous économiserez 10 à 12 heures par semaine sur vos tâches répétitives après 1 mois d'utilisation."
  },
  {
    question: "Ai-je besoin de compétences techniques ?",
    answer: "Absolument pas ! Nos outils sont conçus pour être utilisés sans aucune connaissance technique. Nous vous formons et restons disponibles pour toute question."
  },
  {
    question: "Que se passe-t-il si j'arrête l'abonnement ?",
    answer: "Vous restez propriétaire de votre site web et de toutes vos données. Vous pouvez exporter vos données à tout moment. L'abonnement aux outils IA est sans engagement."
  },
  {
    question: "Comment fonctionne le support ?",
    answer: "Chaque client a un interlocuteur dédié. Support par email sous 24h en semaine, téléphone pour les urgences. Pas de chatbot, que de l'humain."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Vos données sont hébergées en France, chiffrées et sauvegardées quotidiennement. Nous sommes conformes RGPD et ne revendons jamais vos données."
  },
  {
    question: "Puis-je tester avant de m'engager ?",
    answer: "Oui ! L'appel découverte de 15 minutes est gratuit et sans engagement. Nous pouvons également vous faire une démo personnalisée de nos outils."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir avant de démarrer.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card rounded-xl p-6 text-left transition-all hover:border-accent/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-accent" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

N'oublie pas d'ajouter ce composant dans app/page.tsx !
```

---

## PROMPT 10
### Optimisations Performance Vercel

```
Agis comme un expert en performance React/Next.js suivant les bonnes pratiques Vercel.

CONTEXTE:
- Projet: /Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE
- Objectif: Appliquer les règles de performance Vercel

TÂCHES:

1. **Vérifier les imports Lucide React:**
   - ❌ import { Icon } from "lucide-react" (tree-shaking impossible)
   - ✅ import { Icon } from "lucide-react/dist/esm/icons/icon"

   Vérifie tous les fichiers et corrige si nécessaire.

2. **Lazy loading des composants lourds:**
   ```tsx
   // Dans app/page.tsx
   import dynamic from "next/dynamic"
   
   const LogoHero = dynamic(() => import("@/components/LogoHero").then(mod => ({ default: mod.LogoHero })), {
     ssr: false,
     loading: () => <div className="h-96 animate-pulse bg-secondary rounded-lg" />
   })
   ```

3. **Optimiser les animations Framer Motion:**
   ```tsx
   // Utiliser whileInView avec viewport: { once: true } pour éviter re-triggers
   // Utiliser useMotionValue au lieu de useState pour les valeurs animées
   ```

4. **Vérifier les fonts:**
   - S'assurer que les fonts sont préchargées dans layout.tsx
   - Utiliser font-display: swap

5. **Images:**
   - Remplacer <img> par <Image> de next/image
   - Ajouter loading="lazy" où approprié

6. **Cache-Control Headers:**
   Ajouter dans next.config.mjs:
   ```js
   async headers() {
     return [
       {
         source: '/(.*)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
     ]
   }
   ```

CONTRAINTES:
- Ne pas casser le fonctionnement existant
- Tester chaque modification
- Documenter les changements
```

---

## 📋 CHECKLIST FINALE

Après avoir appliqué tous les prompts, vérifie:

- [ ] `npm run build` passe sans erreur
- [ ] Aucune erreur console en dev
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Dark/Light mode fonctionne
- [ ] Animations fluides (60fps)
- [ ] Lighthouse score > 90

---

## 📁 STRUCTURE app/page.tsx FINALE

```tsx
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <ProblemSolution />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
```

---

*Prompts générés le 16 janvier 2026 • Basés sur Vercel Best Practices + Aceternity UI + Magic UI*
