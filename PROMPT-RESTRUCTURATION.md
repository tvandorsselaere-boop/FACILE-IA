# 🎯 PROMPT CURSOR - Restructuration Layout Style Apple

## OBJECTIF
Restructurer COMPLÈTEMENT la mise en page du site Facile-IA pour adopter une structure **uniforme, claire et spacieuse** inspirée d'Apple.com. Le contenu et la logique technique sont OK, mais la mise en page doit être refaite.

---

## 1. CRÉER UN SYSTÈME DE COMPOSANTS UNIFORMES

### A) Créer `components/layout/PageSection.tsx`
Un wrapper obligatoire pour TOUTES les sections du site :

```tsx
// Chaque section DOIT utiliser ce composant
interface PageSectionProps {
  id: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean // Pour les sections qui ont besoin de 100% width
}

export function PageSection({ id, children, className, fullWidth = false }: PageSectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen py-24 md:py-32", // Padding généreux vertical
        "px-6 md:px-12 lg:px-24", // Padding horizontal progressif
        className
      )}
    >
      <div className={cn(
        "mx-auto",
        fullWidth ? "max-w-full" : "max-w-6xl" // Container centré par défaut
      )}>
        {children}
      </div>
    </section>
  )
}
```

### B) Créer `components/layout/SectionHeader.tsx`
Un header de section IDENTIQUE partout :

```tsx
interface SectionHeaderProps {
  badge?: string // Ex: "Nouveau", "Pack Sérénité"
  title: string
  titleHighlight?: string // Partie colorée du titre
  subtitle?: string
  centered?: boolean // true par défaut
}

export function SectionHeader({ badge, title, titleHighlight, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 md:mb-20", centered && "text-center")}>
      {badge && (
        <span className="inline-block px-4 py-2 rounded-full bg-glow/10 text-glow text-sm font-medium mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
        {title} {titleHighlight && <span className="text-glow">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

### C) Créer `components/layout/CardGrid.tsx`
Une grille de cards uniforme :

```tsx
interface CardGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
}

export function CardGrid({ children, columns = 3, gap = "lg" }: CardGridProps) {
  const gapClass = {
    sm: "gap-4",
    md: "gap-6", 
    lg: "gap-8"
  }[gap]

  const colsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns]

  return (
    <div className={cn("grid", colsClass, gapClass)}>
      {children}
    </div>
  )
}
```

### D) Créer `components/layout/FeatureCard.tsx`
Une card spacieuse style Apple :

```tsx
interface FeatureCardProps {
  icon?: React.ReactNode
  iconBg?: string // Couleur de fond de l'icône
  title: string
  description: string
  highlighted?: boolean
  badge?: string
  onClick?: () => void
}

export function FeatureCard({ icon, iconBg, title, description, highlighted, badge, onClick }: FeatureCardProps) {
  const Comp = onClick ? 'button' : 'div'
  
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "relative p-8 md:p-10 rounded-3xl", // Padding généreux + grands radius
        "bg-card/50 backdrop-blur-sm",
        "border border-border/50",
        "transition-all duration-300",
        "hover:border-glow/30 hover:shadow-lg hover:shadow-glow/5",
        highlighted && "border-glow bg-glow/5",
        onClick && "cursor-pointer text-left w-full"
      )}
    >
      {badge && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-glow text-white">
          {badge}
        </span>
      )}
      
      {icon && (
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
          iconBg || "bg-glow/10"
        )}>
          {icon}
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Comp>
  )
}
```

### E) Créer `components/layout/Carousel.tsx`
Pour les sections avec beaucoup de cards (mode carrousel) :

```tsx
"use client"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode
  showArrows?: boolean
  showDots?: boolean
}

export function Carousel({ children, showArrows = true, showDots = true }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.offsetWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const updateScrollState = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <div className="relative group">
      {/* Flèches de navigation */}
      {showArrows && (
        <>
          <button
            onClick={() => scroll('left')}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10",
              "w-12 h-12 rounded-full bg-background/90 border border-border shadow-lg",
              "flex items-center justify-center",
              "opacity-0 group-hover:opacity-100 transition-opacity",
              !canScrollLeft && "hidden"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10",
              "w-12 h-12 rounded-full bg-background/90 border border-border shadow-lg",
              "flex items-center justify-center",
              "opacity-0 group-hover:opacity-100 transition-opacity",
              !canScrollRight && "hidden"
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Container scrollable */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  )
}

// Card pour carousel - largeur fixe
export function CarouselCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "flex-shrink-0 snap-start",
      "w-[300px] md:w-[350px] lg:w-[400px]", // Largeur fixe
      className
    )}>
      {children}
    </div>
  )
}
```

---

## 2. REFACTORER CHAQUE SECTION

### Structure obligatoire pour CHAQUE section :

```tsx
<PageSection id="nom-section">
  <SectionHeader 
    badge="Optionnel"
    title="Titre Principal"
    titleHighlight="partie colorée"
    subtitle="Description courte"
  />
  
  {/* Option 1: Grille de cards */}
  <CardGrid columns={3}>
    <FeatureCard ... />
    <FeatureCard ... />
    <FeatureCard ... />
  </CardGrid>

  {/* Option 2: Carousel si >4 items */}
  <Carousel>
    <CarouselCard>...</CarouselCard>
    <CarouselCard>...</CarouselCard>
  </Carousel>
</PageSection>
```

---

## 3. SECTIONS À REFACTORER

### HeroSection.tsx
```
- Supprimer les particles complexes
- Garder: Badge + Logo + Tagline + 3 value props en CardGrid + CTAs
- Structure:
  PageSection > 
    [Badge centré] > 
    [Logo GRAND centré] > 
    [Tagline] > 
    CardGrid(3) avec les 3 value props > 
    [2 boutons CTAs]
```

### ServicesSection.tsx  
```
- SÉPARER en 2 sous-sections visuelles
- Section 1: "Le Pack Sérénité" avec les 2 cards de prix (999€ + 29€/mois) en CardGrid(2)
- Section 2: "Nos outils" avec les 6 outils en Carousel (car >4 items)
- Supprimer la section ROI et Why - les mettre dans une section dédiée plus bas
```

### TestimonialsSection.tsx
```
- Utiliser Carousel pour les témoignages
- Chaque témoignage = CarouselCard avec le même design
- Scroll horizontal élégant
```

### ContactSection.tsx
```
- Timeline horizontale SIMPLIFIÉE (3 icônes + labels)
- CTA central bien espacé
- FAQ en CardGrid(2) avec des cards cliquables
```

---

## 4. RÈGLES CSS À APPLIQUER

Dans `globals.css`, ajouter/modifier :

```css
/* Supprimer le snap scroll - trop agressif */
html {
  scroll-snap-type: none !important;
  scroll-behavior: smooth;
}

/* Scrollbar invisible pour carousel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Spacing uniforme */
:root {
  --section-padding-y: 6rem;
  --section-padding-x: 1.5rem;
  --card-padding: 2rem;
  --card-radius: 1.5rem;
}

@media (min-width: 768px) {
  :root {
    --section-padding-y: 8rem;
    --section-padding-x: 3rem;
    --card-padding: 2.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --section-padding-x: 6rem;
  }
}
```

---

## 5. CHECKLIST FINALE

Après refactoring, vérifier que :

- [ ] TOUTES les sections utilisent `<PageSection>`
- [ ] TOUS les headers de section utilisent `<SectionHeader>`
- [ ] TOUTES les cards ont le même padding (p-8 md:p-10)
- [ ] TOUTES les cards ont le même border-radius (rounded-3xl)
- [ ] Le spacing entre sections est uniforme (py-24 md:py-32)
- [ ] Le container max-width est cohérent (max-w-6xl)
- [ ] Les grilles utilisent `<CardGrid>` avec columns={2|3|4}
- [ ] Les sections avec >4 cards utilisent `<Carousel>`
- [ ] Plus aucun `max-w-7xl`, `max-w-4xl`, `max-w-3xl` inline
- [ ] Plus aucun padding custom différent entre sections

---

## 6. ORDRE D'EXÉCUTION

1. Créer les composants layout (PageSection, SectionHeader, CardGrid, FeatureCard, Carousel)
2. Modifier globals.css
3. Refactorer HeroSection
4. Refactorer ServicesSection
5. Refactorer TestimonialsSection  
6. Refactorer ContactSection
7. Tester et ajuster

---

## EXEMPLE VISUEL ATTENDU

Chaque "page" (section) doit ressembler à :

```
┌──────────────────────────────────────────────┐
│                                              │
│              [Badge optionnel]               │
│                                              │
│         TITRE PRINCIPAL coloré               │
│           Sous-titre descriptif              │
│                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │         │  │         │  │         │      │
│  │  Card   │  │  Card   │  │  Card   │      │
│  │         │  │         │  │         │      │
│  │         │  │         │  │         │      │
│  └─────────┘  └─────────┘  └─────────┘      │
│                                              │
│              [CTA optionnel]                 │
│                                              │
└──────────────────────────────────────────────┘
```

Espacement généreux, respiration, clarté. Comme Apple.
