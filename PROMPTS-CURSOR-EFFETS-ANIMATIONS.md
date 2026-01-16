# 🎨 PROMPTS CURSOR - EFFETS & ANIMATIONS MODERN SAAS

> **Objectif:** Ajouter les effets visuels et animations SANS modifier le contenu existant  
> **Stack:** Framer Motion + Tailwind CSS  
> **Style:** Modern SaaS (Vercel/Stripe/Aceternity)

---

## 📋 PROMPTS

1. [Setup Framer Motion](#prompt-1) - Installation + lib animations
2. [Header Shrink](#prompt-2) - ✅ FAIT (corrigé hydratation)
3. [Hero Spotlight](#prompt-3) - Effet souris + fade-in
4. [Services Cards Hover](#prompt-4) - Glow + scale sur cards
5. [Pricing Moving Border](#prompt-5) - Bordure animée plan populaire
6. [Testimonials Carousel](#prompt-6) - Slide auto avec Framer
7. [Contact Glow CTA](#prompt-7) - Bouton avec pulse glow
8. [Scroll Animations](#prompt-8) - Fade-in-up global au scroll
9. [Card 3D Tilt](#prompt-9) - Composant réutilisable
10. [Performance](#prompt-10) - Optimisations

---

## PROMPT 1 ✅
### Setup Framer Motion + Animations Library

```
TÂCHE: Créer le fichier lib/animations.ts avec les variants Framer Motion réutilisables.

Crée le fichier /lib/animations.ts avec ce contenu :

import { Variants } from "framer-motion"

// Fade in depuis le bas
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Fade in avec scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

// Container avec stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

// Slide depuis la gauche
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Slide depuis la droite
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Spring hover effect
export const springHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

// Glow pulse animation
export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
  animate: { 
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.3)",
      "0 0 40px rgba(99, 102, 241, 0.5)",
      "0 0 20px rgba(99, 102, 241, 0.3)"
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
}

Ensuite, ajoute ces styles dans globals.css (à la fin du fichier) :

/* ========================================
   MODERN SAAS EFFECTS
   ======================================== */

/* Gradient Text Effect (Vercel style) */
.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
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

/* Light mode glass card */
:root .glass-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.08);
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

/* Shine effect on hover */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.shine-effect:hover::before {
  left: 100%;
}
```

---

## PROMPT 2 ✅ 
### Header Shrink au Scroll
**DÉJÀ APPLIQUÉ** - Corrigé avec fix hydratation

---

## PROMPT 3
### Hero Spotlight Effect

```
TÂCHE: Ajouter un effet Spotlight (cercle lumineux qui suit la souris) sur le Hero SANS modifier le contenu.

Dans /components/hero.tsx :

1. Ajoute ces imports en haut :
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

2. Dans le composant Hero(), ajoute AVANT le return :
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

3. Modifie la <section> principale pour ajouter ref et onMouseMove :
<section 
  ref={containerRef}
  onMouseMove={handleMouseMove}
  className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
>

4. Ajoute juste après l'ouverture de <section>, AVANT le contenu existant :
{/* Spotlight Effect */}
<motion.div
  className="pointer-events-none absolute inset-0 z-0 hidden md:block"
  style={{
    background: useTransform(
      [springX, springY],
      ([x, y]) => 
        `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.12), transparent 40%)`
    )
  }}
/>

{/* Dot Grid Background */}
<div className="absolute inset-0 dot-grid opacity-20 z-0" />

5. Ajoute z-10 au div contenant le contenu pour qu'il soit au-dessus :
<div className="relative z-10 max-w-6xl w-full mx-auto text-center">

6. Enveloppe les éléments existants avec des animations fade-in :
- Le badge/span : motion.div avec initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
- Le LogoHero : motion.div avec delay: 0.2
- Le paragraphe : motion.p avec delay: 0.3
- Les boutons : motion.div avec delay: 0.4
- La grille des features : motion.div avec delay: 0.5

IMPORTANT: Ne modifie PAS le texte, juste ajoute les wrappers motion.
```

---

## PROMPT 4
### Services Cards Hover Effects

```
TÂCHE: Ajouter des effets hover sur les cards de Services SANS modifier le contenu.

Dans /components/services.tsx :

1. Ajoute l'import Framer Motion :
import { motion } from "framer-motion"

2. Enveloppe chaque card service avec motion.div :

Remplace :
<div
  key={service.number}
  className="p-8 bg-secondary rounded-lg card-hover-glow"
>

Par :
<motion.div
  key={service.number}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  whileHover={{ 
    y: -5, 
    transition: { duration: 0.2 } 
  }}
  className="p-8 bg-secondary rounded-lg card-hover-glow"
>

(Note: ajoute 'index' dans le .map : services.map((service, index) => ...)

3. Ajoute une animation sur le titre de section :
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-center mb-16"
>
```

---

## PROMPT 5
### Pricing Moving Border Effect

```
TÂCHE: Ajouter un effet "Moving Border" (bordure animée) sur le plan populaire dans Pricing.

Dans /components/pricing.tsx :

1. Ajoute l'import :
import { motion } from "framer-motion"

2. Pour le plan avec highlighted: true, enveloppe la card avec :

{plan.highlighted && (
  <div className="absolute -inset-[2px] rounded-lg overflow-hidden">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
      style={{
        background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)"
      }}
    />
  </div>
)}

3. Assure-toi que la card a position: relative et un background qui couvre le gradient :
className={`relative rounded-lg p-8 ${
  plan.highlighted
    ? "border-0 bg-background"  // Fond opaque pour cacher le gradient sauf sur les bords
    : "bg-card card-hover-glow"
}`}

4. Ajoute des animations d'entrée sur les cards :
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
  className="relative"
>
```

---

## PROMPT 6
### Testimonials Slide Animation

```
TÂCHE: Ajouter des animations sur les témoignages SANS modifier le contenu.

Dans /components/testimonials.tsx :

1. Import Framer Motion :
import { motion } from "framer-motion"

2. Anime le titre :
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>

3. Anime chaque card avec stagger :
<motion.div 
  key={testimonial.name} 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.15 }}
  whileHover={{ y: -5 }}
  className="p-8 bg-card rounded-lg border border-border"
>

(Ajoute index dans le map)
```

---

## PROMPT 7
### Contact CTA Glow Effect

```
TÂCHE: Ajouter un effet glow pulsant sur le bouton CTA de la section Contact.

Dans /components/contact.tsx :

1. Import :
import { motion } from "framer-motion"

2. Anime la section :
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="max-w-2xl mx-auto text-center"
>

3. Ajoute un glow pulsant sur le bouton :
<motion.div
  animate={{ 
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.3)",
      "0 0 40px rgba(99, 102, 241, 0.5)",
      "0 0 20px rgba(99, 102, 241, 0.3)"
    ]
  }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  className="inline-block rounded-lg"
>
  <Link href="/contact">
    <Button variant="liquidGlass" size="lg">
      <Calendar className="w-5 h-5 mr-2" />
      Réserver un appel
    </Button>
  </Link>
</motion.div>
```

---

## PROMPT 8
### Scroll Animations Global

```
TÂCHE: S'assurer que tous les composants ont des animations au scroll cohérentes.

Pattern à appliquer sur TOUTES les sections :

1. Titre de section :
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <h2>...</h2>
  <p>...</p>
</motion.div>

2. Grilles d'éléments avec stagger :
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    {/* contenu */}
  </motion.div>
))}

3. IMPORTANT: Toujours utiliser viewport={{ once: true }} pour éviter de rejouer l'animation
```

---

## PROMPT 9
### Composant Card 3D Tilt (optionnel)

```
TÂCHE: Créer un composant réutilisable Card3D avec effet tilt au hover.

Crée le fichier /components/ui/card-3d.tsx :

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

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 })

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
      style={{ perspective: 1000 }}
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
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl z-10"
            style={{
              background: useTransform(
                [x, y],
                ([px, py]) =>
                  `radial-gradient(circle at ${(px as number) * 100}% ${(py as number) * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
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

UTILISATION :
<Card3D>
  <div className="glass-card p-6 rounded-2xl">
    {/* Contenu */}
  </div>
</Card3D>
```

---

## PROMPT 10
### Optimisations Performance

```
TÂCHE: Vérifier et optimiser les performances des animations.

1. Vérifier que TOUS les whileInView utilisent viewport={{ once: true }}

2. Pour les animations complexes, utiliser useMotionValue au lieu de useState :
// ❌ Mauvais (cause des re-renders)
const [position, setPosition] = useState({ x: 0, y: 0 })

// ✅ Bon (pas de re-render)
const x = useMotionValue(0)
const y = useMotionValue(0)

3. Lazy loading pour LogoHero (Three.js) :
Dans app/page.tsx, utiliser dynamic import :

import dynamic from "next/dynamic"

// Dans le composant Hero ou là où LogoHero est utilisé lourdement
const LogoHero = dynamic(
  () => import("@/components/LogoHero").then(mod => ({ default: mod.LogoHero })),
  { 
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-secondary/50 rounded-lg" />
  }
)

4. Désactiver animations sur mobile si nécessaire :
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false

5. Utiliser will-change avec parcimonie :
.element-qui-anime {
  will-change: transform, opacity;
}
```

---

## 📋 CHECKLIST

- [x] Prompt 1 : Setup animations lib
- [x] Prompt 2 : Header shrink (corrigé hydratation)
- [ ] Prompt 3 : Hero spotlight
- [ ] Prompt 4 : Services cards hover
- [ ] Prompt 5 : Pricing moving border
- [ ] Prompt 6 : Testimonials animation
- [ ] Prompt 7 : Contact glow CTA
- [ ] Prompt 8 : Scroll animations
- [ ] Prompt 9 : Card 3D (optionnel)
- [ ] Prompt 10 : Performance

---

## ⚠️ RÈGLES IMPORTANTES

1. **NE PAS modifier le contenu textuel** - Uniquement ajouter des animations
2. **Toujours utiliser `viewport={{ once: true }}`** - Évite les re-triggers
3. **Tester après chaque prompt** - `npm run dev` sans erreur
4. **Fix hydratation** - Utiliser `mounted` state pour les valeurs client-only

---

*Prompts axés effets/animations uniquement - 16 janvier 2026*
