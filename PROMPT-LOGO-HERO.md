# 🎨 PROMPT CURSOR - Intégrer LogoHero

## OBJECTIF
Intégrer le logo animé Three.js (`LogoHero.tsx`) dans la section Hero, et améliorer le logo du Header avec un style cohérent.

---

## 1. MODIFIER `components/hero.tsx`

Remplacer le contenu actuel par :

```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoHero } from "@/components/LogoHero"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
            Pôle Services PME
          </span>
        </div>

        {/* Logo Animé Three.js */}
        <div className="h-24 sm:h-32 md:h-40 lg:h-48 mb-8 w-full max-w-3xl mx-auto">
          <LogoHero />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
          « Gagner du temps pour ce qui compte vraiment. »
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/#services">
            <Button size="lg" className="w-full sm:w-auto">
              Découvrir nos offres
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Réserver un appel gratuit
            </Button>
          </Link>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "+10h/semaine", desc: "de temps libéré" },
            { title: "IA sur mesure", desc: "adaptée à votre métier" },
            { title: "Sans engagement", desc: "résiliez quand vous voulez" },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-secondary rounded-xl border border-border">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Lien Lab discret */}
        <div className="mt-12">
          <Link 
            href="/lab" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            🔬 Découvrez notre Lab R&D
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}
```

---

## 2. MODIFIER `components/header.tsx`

Remplacer le logo carré par un logo texte stylisé avec lettres espacées :

```tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [isDark])

  const navLinks = [
    { label: "Facile-IA", href: "/#hero", accent: true },
    { label: "Offres", href: "/#services" },
    { label: "Témoignages", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo texte stylisé */}
          <Link href="/" className="flex items-center">
            <span 
              className="text-lg font-light tracking-[0.3em] hover:tracking-[0.35em] transition-all duration-300"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span className="font-normal">F</span>
              <span className="text-muted-foreground">A</span>
              <span className="font-normal">C</span>
              <span className="text-muted-foreground">I</span>
              <span className="font-normal">L</span>
              <span className="text-muted-foreground">E</span>
              <span className="mx-1">-</span>
              <span className="font-normal">I</span>
              <span className="text-muted-foreground">A</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  link.accent 
                    ? "text-accent font-medium" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            
            {/* Bouton Le Lab */}
            <Link href="/lab" className="hidden sm:block">
              <Button variant="outline" size="sm" className="gap-2">
                <FlaskConical size={16} />
                Le Lab
              </Button>
            </Link>

            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/lab"
              className="px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FlaskConical size={16} />
              Le Lab
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
```

---

## 3. VÉRIFIER QUE THREE.JS EST INSTALLÉ

Dans le terminal, vérifier que Three.js est installé :

```bash
pnpm list three
```

Si non installé :

```bash
pnpm add three @types/three
```

---

## RÉSUMÉ DES CHANGEMENTS

### Hero (`hero.tsx`)
- ✅ Import `LogoHero` depuis `@/components/LogoHero`
- ✅ Ajout du badge orange "Pôle Services PME"
- ✅ Remplacement du H1 par `<LogoHero />` dans un container de hauteur fixe
- ✅ Tagline italique "« Gagner du temps pour ce qui compte vraiment. »"
- ✅ CTAs mis à jour : "Découvrir nos offres" + "Réserver un appel gratuit"
- ✅ Value props : +10h/semaine, IA sur mesure, Sans engagement
- ✅ Lien discret vers Le Lab en bas

### Header (`header.tsx`)
- ✅ Logo texte stylisé "FACILE-IA" avec lettres espacées (tracking)
- ✅ Navigation mise à jour : Facile-IA, Offres, Témoignages, Contact
- ✅ Bouton "Le Lab" avec icône FlaskConical
- ✅ Suppression du bouton "Démarrer" inutile
- ✅ Menu mobile mis à jour avec Le Lab

---

## VÉRIFICATION APRÈS INTÉGRATION

1. Le logo animé s'affiche dans le Hero ?
2. Les particules réagissent au mouvement de souris ?
3. Le header affiche "FACILE-IA" avec lettres espacées ?
4. Le bouton "Le Lab" apparaît dans le header ?
5. Les liens de navigation sont corrects ?
