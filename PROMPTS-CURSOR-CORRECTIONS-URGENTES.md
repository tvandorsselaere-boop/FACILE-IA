# 🔧 PROMPTS CURSOR - CORRECTIONS URGENTES

> **Date:** 16 janvier 2026  
> **Contexte:** Corrections suite aux tests des effets/animations

---

## PROMPT A - FIX ERREUR HOOKS SPOTLIGHT

```
ERREUR: "Rendered more hooks than during the previous render" dans spotlight-effect.tsx

PROBLÈME:
Le useTransform est appelé APRÈS le return conditionnel `if (!mounted) return null`.
Les hooks React doivent TOUJOURS être appelés dans le même ordre à chaque render.

CORRECTION dans /components/spotlight-effect.tsx :

1. Déplacer le useTransform AVANT le return conditionnel
2. Stocker le résultat dans une variable
3. Utiliser cette variable dans le style

Code corrigé :

"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function SpotlightEffect() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // IMPORTANT: useTransform AVANT tout return conditionnel
  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(800px circle at ${x}px ${y}px, var(--spotlight-color), transparent 40%)`
  )

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.pageX)
      mouseY.set(e.pageY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Return conditionnel APRÈS tous les hooks
  if (!mounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ background }}
    />
  )
}
```

---

## PROMPT B - FIX PROPAGATION SPOTLIGHT

```
PROBLÈME: Le spotlight ne se propage pas sur toute la page quand on scroll.

CAUSE POSSIBLE: 
- z-index trop bas
- Position fixed vs absolute
- Les sections ont un background opaque qui cache le spotlight

CORRECTIONS dans /components/spotlight-effect.tsx :

1. Augmenter le z-index à z-10 (au-dessus des sections mais sous le header)
2. S'assurer que le gradient utilise bien pageX/pageY (pas clientX/clientY)

Modifier la classe :
className="pointer-events-none fixed inset-0 z-10 hidden md:block"

ET dans /app/globals.css, ajouter après les variables :

/* Assurer que les sections laissent passer le spotlight */
section {
  position: relative;
  z-index: 1;
}

/* Le spotlight doit être au-dessus */
.spotlight-layer {
  z-index: 5;
}

ALTERNATIVE si ça ne fonctionne toujours pas :
Mettre le SpotlightEffect DANS le layout.tsx plutôt que page.tsx pour qu'il soit vraiment global.
```

---

## PROMPT C - UNIFORMISER DESIGN DES CARDS

```
TÂCHE: Uniformiser toutes les cards du site avec le même style que la section Services.

Le style de référence (Services) :
- Background: bg-secondary
- Border: border border-border
- Radius: rounded-lg
- Effet hover: card-hover-glow (glow bleu au survol)
- Animation: whileHover={{ y: -5 }}

FICHIERS À MODIFIER :

1. /components/hero.tsx - Les 3 cards en bas (Innovant, Sur-mesure, Humain)
Remplacer :
<motion.div 
  key={item.title} 
  className="p-6 bg-secondary rounded-lg border border-border"
  whileHover={{ y: -5 }}
  transition={{ duration: 0.2 }}
>

Par :
<motion.div 
  key={item.title} 
  className="p-6 bg-secondary rounded-lg border border-border card-hover-glow"
  whileHover={{ y: -5 }}
  transition={{ duration: 0.2 }}
>

2. /components/testimonials.tsx - Les cards témoignages
Remplacer :
<div key={testimonial.name} className="p-8 bg-card rounded-lg border border-border">

Par :
<motion.div 
  key={testimonial.name} 
  className="p-8 bg-secondary rounded-lg border border-border card-hover-glow"
  whileHover={{ y: -5 }}
  transition={{ duration: 0.2 }}
>

(Ajouter import { motion } from "framer-motion" en haut)

3. /components/pricing.tsx - Les cards pricing (sauf highlighted)
Pour les cards NON highlighted, ajouter card-hover-glow :
className="relative rounded-lg p-8 bg-secondary card-hover-glow"

RÉSULTAT ATTENDU:
Toutes les cards ont :
- Même background (bg-secondary)
- Même border glow au hover
- Même animation lift (y: -5)
```

---

## PROMPT D - ANIMER LE FOOTER COMME LE HEADER

```
TÂCHE: Appliquer les mêmes effets d'animation au Footer qu'au Header.

Dans /components/footer.tsx :

1. Ajouter les imports :
import { motion } from "framer-motion"

2. Envelopper le footer avec motion :
<motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-secondary border-t border-border py-12 px-4 sm:px-6 lg:px-8"
>

3. Animer chaque colonne avec stagger :
{/* Pour chaque div de colonne */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.1 * index }}
>

4. Ajouter l'effet underline sur les liens (comme le header) :
Remplacer les classes des liens :
className="text-muted-foreground hover:text-foreground transition-colors"

Par :
className="relative text-muted-foreground hover:text-foreground transition-colors group"

Et ajouter après le texte du lien :
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />

5. Optionnel - Glassmorphism subtil sur le footer :
Ajouter à la className du footer :
"backdrop-blur-sm bg-secondary/95"
```

---

## PROMPT E - GARDER LOGO ANIMÉ DANS HEADER (REDIMENSIONNÉ)

```
TÂCHE: Garder le LogoHero 3D dans le header mais le REDIMENSIONNER au scroll au lieu de le remplacer par du texte.

Dans /components/header.tsx :

1. SUPPRIMER le composant LogoText (on n'en a plus besoin)

2. SUPPRIMER le AnimatePresence et la logique de switch logo

3. REMPLACER par un simple div qui change de taille :

<Link href="/" className="flex items-center">
  <motion.div
    animate={{
      width: isScrolled ? 200 : 450,
      height: isScrolled ? 40 : 80,
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="relative"
  >
    <LogoHero />
  </motion.div>
</Link>

ALTERNATIVE avec classes Tailwind (si motion ne redimensionne pas bien le canvas) :

<Link 
  href="/" 
  className={`flex items-center transition-all duration-300 ${
    isScrolled ? "w-[200px] h-[40px]" : "w-[450px] h-[80px]"
  }`}
>
  <LogoHero />
</Link>

NOTE: Le LogoHero utilise Three.js qui écoute le resize. Le canvas devrait s'adapter automatiquement grâce au handleResize dans le useEffect du LogoHero.

Si le logo ne se redimensionne pas bien, il faudra peut-être forcer un re-render ou ajuster le code de LogoHero pour mieux gérer les petites tailles.
```

---

## 📋 ORDRE D'APPLICATION

1. **PROMPT A** - Fix erreur hooks (bloquant)
2. **PROMPT B** - Fix spotlight propagation
3. **PROMPT E** - Logo header redimensionné
4. **PROMPT C** - Uniformiser cards
5. **PROMPT D** - Animer footer

---

## ⚠️ NOTES

- Toujours tester avec `npm run dev` après chaque prompt
- Si le logo 3D pose problème en petite taille, on pourra créer une version simplifiée
- Le spotlight peut nécessiter des ajustements de z-index selon les sections

---

*Prompts générés le 16 janvier 2026*
