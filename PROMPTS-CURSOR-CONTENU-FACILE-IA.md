# 📝 PROMPTS CURSOR - CORRECTIONS CONTENU FACILE-IA

**Projet :** `/Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE`

**Priorité :** Ces corrections sont CRITIQUES pour le lancement.

---

## 🔴 PROMPT A : Correction Pricing (CRITIQUE)

### Fichier : `components/pricing.tsx`

```
@workspace

**Objectif :** Remplacer les tarifs incorrects par la vraie stratégie de prix FACILE-IA.

**Fichier :** components/pricing.tsx

**Tarifs ACTUELS (FAUX) :**
- Starter: 999€/mois
- Professional: 2999€/mois
- Enterprise: Sur devis

**Tarifs CORRECTS à implémenter :**

| Pack | Prix | Description |
|------|------|-------------|
| Pack Sérénité | 999€ unique + 49€/mois | Site vitrine + 3 outils IA au choix |
| Site Solo | 999€ unique + 100€/an | Site vitrine seul (maintenance) |
| Outils IA | 49€/mois | Accès aux 6 outils IA sans site |
| Sur mesure | À partir de 500€ | Développement personnalisé |

**Code à implémenter :**

```tsx
// components/pricing.tsx
// Retirer "use client" - peut être Server Component

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Site Solo",
    price: "999€",
    priceDetail: "+ 100€/an",
    description: "Votre présence en ligne professionnelle",
    features: [
      "Site vitrine responsive",
      "Design personnalisé",
      "Hébergement inclus 1 an",
      "Maintenance annuelle",
      "Formulaire de contact",
    ],
  },
  {
    name: "Pack Sérénité",
    price: "999€",
    priceDetail: "+ 49€/mois",
    description: "Site + automatisation IA complète",
    features: [
      "Tout Site Solo inclus",
      "3 outils IA au choix",
      "Formation personnalisée",
      "Support prioritaire",
      "Mises à jour incluses",
      "10-12h gagnées/semaine",
    ],
    highlighted: true,
    badge: "Recommandé",
  },
  {
    name: "Outils IA",
    price: "49€",
    priceDetail: "/mois",
    description: "Automatisation sans site",
    features: [
      "Accès aux 6 outils IA",
      "FraisAuto (notes de frais)",
      "Devis Pro (devis auto)",
      "Réputation IA (avis)",
      "PDF Pro (documents)",
      "Support par email",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tarification Transparente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des prix clairs, sans surprise. Payez une fois, profitez longtemps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border ${
                plan.highlighted 
                  ? "border-accent bg-secondary/50 ring-2 ring-accent" 
                  : "border-border bg-card"
              } p-8 relative`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.priceDetail}</span>
              </div>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"} 
                className="w-full mb-8"
                asChild
              >
                <Link href="/contact">Réserver un appel</Link>
              </Button>
              
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-start">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Sur Mesure */}
        <div className="mt-12 p-8 bg-secondary/30 rounded-lg border border-border text-center">
          <h3 className="text-xl font-semibold mb-2">Besoin d'une solution sur mesure ?</h3>
          <p className="text-muted-foreground mb-4">
            Développement personnalisé à partir de 500€
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Discutons de votre projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
```

**Actions :**
1. Remplacer entièrement le contenu de pricing.tsx
2. Vérifier que le build passe
3. Tester l'affichage responsive
```

---

## 🔴 PROMPT B : Refonte Services avec les 6 outils IA

### Fichier : `components/services.tsx`

```
@workspace

**Objectif :** Remplacer les services génériques par les 6 outils IA concrets de FACILE-IA.

**Fichier :** components/services.tsx

**Services ACTUELS (génériques) :**
- Automatisation Intelligente
- Analyse Prédictive
- Optimisation des Ressources
- Support 24/7

**Services CORRECTS (6 outils IA) :**

1. **FraisAuto** - Notes de frais automatiques
2. **Devis Pro** - Génération de devis automatique
3. **Réputation IA** - Gestion des avis clients
4. **PDF Pro** - Traitement de documents
5. **Veille Pro** - Veille concurrentielle
6. **CRM Smart** - Relation client intelligente

**Code à implémenter :**

```tsx
// components/services.tsx
// Server Component (pas de "use client")

import { 
  Receipt, 
  FileText, 
  Star, 
  FileSearch, 
  Eye, 
  Users 
} from "lucide-react"

const tools = [
  {
    icon: Receipt,
    name: "FraisAuto",
    title: "Notes de frais automatiques",
    description: "Photographiez vos tickets, l'IA fait le reste. Export comptable en 1 clic.",
    benefit: "2h/semaine gagnées",
  },
  {
    icon: FileText,
    name: "Devis Pro",
    title: "Devis en 30 secondes",
    description: "Générez des devis professionnels automatiquement depuis vos échanges clients.",
    benefit: "3h/semaine gagnées",
  },
  {
    icon: Star,
    name: "Réputation IA",
    title: "Gestion des avis clients",
    description: "Réponses automatiques aux avis Google, suggestions d'amélioration.",
    benefit: "Note moyenne +0.5★",
  },
  {
    icon: FileSearch,
    name: "PDF Pro",
    title: "Traitement de documents",
    description: "Extraction, classification et archivage automatique de vos documents.",
    benefit: "1h/semaine gagnée",
  },
  {
    icon: Eye,
    name: "Veille Pro",
    title: "Veille concurrentielle",
    description: "Surveillez vos concurrents et le marché. Alertes personnalisées.",
    benefit: "Toujours informé",
  },
  {
    icon: Users,
    name: "CRM Smart",
    title: "Relation client intelligente",
    description: "Suivi automatique des prospects, relances intelligentes, scoring.",
    benefit: "+20% conversion",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium mb-4 block">
            Pack Sérénité
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            6 outils IA pour automatiser votre quotidien
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez 3 outils inclus dans votre Pack Sérénité, ou accédez aux 6 avec l'abonnement Outils IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.name}
                className="p-6 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {tool.name}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{tool.benefit}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Récapitulatif gains */}
        <div className="mt-12 p-8 bg-accent/5 rounded-lg border border-accent/20 text-center">
          <p className="text-2xl font-bold mb-2">
            Jusqu'à <span className="text-accent">10-12h gagnées</span> par semaine
          </p>
          <p className="text-muted-foreground">
            En combinant nos outils IA, concentrez-vous sur ce qui compte vraiment.
          </p>
        </div>
      </div>
    </section>
  )
}
```

**Actions :**
1. Remplacer entièrement le contenu de services.tsx
2. Retirer le "use client" (Server Component)
3. Vérifier les imports lucide-react
```

---

## 🟠 PROMPT C : Refonte Hero ciblé PME

### Fichier : `components/hero.tsx`

```
@workspace

**Objectif :** Rendre le Hero plus percutant pour la cible PME/artisans.

**Fichier :** components/hero.tsx

**Message ACTUEL (vague) :**
- "Gagnez du temps pour ce qui compte vraiment"
- Cards : Innovant, Fiable, Scalable (trop tech)

**Message CIBLÉ à implémenter :**

```tsx
// components/hero.tsx
"use client"

import Link from "next/link"
import dynamic from 'next/dynamic'
import { ArrowRight, Clock, Sparkles, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

// Lazy load du logo 3D
const LogoHero = dynamic(
  () => import('@/components/LogoHero').then(mod => ({ default: mod.LogoHero })),
  { 
    ssr: false,
    loading: () => (
      <div className="h-64 sm:h-80 md:h-96 w-full flex items-center justify-center">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
          FACILE-IA
        </span>
      </div>
    )
  }
)

const benefits = [
  { 
    icon: Clock, 
    title: "10-12h gagnées/semaine", 
    desc: "Automatisez les tâches répétitives" 
  },
  { 
    icon: Sparkles, 
    title: "IA simple d'accès", 
    desc: "Pas besoin d'être expert" 
  },
  { 
    icon: Shield, 
    title: "Accompagnement inclus", 
    desc: "Formation et support personnalisé" 
  },
]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="text-accent text-sm font-medium px-4 py-2 bg-accent/10 rounded-full">
            🚀 L'IA au service des PME et artisans
          </span>
        </div>

        {/* Logo 3D */}
        <div className="h-64 sm:h-80 md:h-96 w-full mx-auto mb-6">
          <LogoHero />
        </div>

        {/* Proposition de valeur */}
        <h1 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Vous passez trop de temps sur l'administratif ?
        </h1>
        <p className="text-lg sm:text-xl text-foreground font-medium mb-8 max-w-2xl mx-auto">
          Nos outils IA automatisent vos <span className="text-accent">notes de frais, devis, gestion des avis</span> et plus encore.
          <br />
          <strong>Concentrez-vous sur votre métier.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto text-base px-8">
              Réserver un appel découverte
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="/#services">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-base">
              Découvrir les outils IA
            </Button>
          </Link>
        </div>

        {/* Bénéfices concrets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="p-6 bg-secondary rounded-lg border border-border">
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

**Points clés :**
1. Dynamic import pour LogoHero (Three.js)
2. Message problème/solution clair
3. Bénéfices concrets (temps gagné)
4. CTA principal : "Réserver un appel découverte"
```

---

## 🟠 PROMPT D : Remplacement Testimonials

### Fichier : `components/testimonials.tsx`

```
@workspace

**Objectif :** Remplacer les faux témoignages par une section "Secteurs cibles" ou "À qui s'adresse FACILE-IA".

**Fichier :** components/testimonials.tsx

**Option choisie :** Section "À qui s'adresse FACILE-IA" avec les secteurs cibles.

**Code à implémenter :**

```tsx
// components/testimonials.tsx → renommer en target-sectors.tsx
// Server Component (pas de "use client")

import { 
  Hammer, 
  Utensils, 
  Stethoscope, 
  Building2, 
  Store, 
  Briefcase 
} from "lucide-react"

const sectors = [
  {
    icon: Hammer,
    title: "Artisans du bâtiment",
    description: "Plombiers, électriciens, maçons... Automatisez vos devis et factures.",
    pain: "Plus de paperasse le soir",
  },
  {
    icon: Utensils,
    title: "Restaurateurs",
    description: "Gérez vos avis clients, vos stocks et vos réservations sans effort.",
    pain: "Concentrez-vous sur la cuisine",
  },
  {
    icon: Stethoscope,
    title: "Professions libérales",
    description: "Médecins, avocats, consultants... Optimisez votre temps administratif.",
    pain: "Plus de temps pour vos patients/clients",
  },
  {
    icon: Store,
    title: "Commerçants",
    description: "Boutiques, e-commerce... Gérez votre réputation et vos clients.",
    pain: "Fidélisez sans y penser",
  },
  {
    icon: Building2,
    title: "TPE / PME",
    description: "10 à 50 employés ? L'IA vous fait gagner l'équivalent d'un mi-temps.",
    pain: "ROI immédiat",
  },
  {
    icon: Briefcase,
    title: "Auto-entrepreneurs",
    description: "Seul à tout gérer ? Déléguez l'administratif à l'IA.",
    pain: "Votre assistant virtuel",
  },
]

export function TargetSectors() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            À qui s'adresse FACILE-IA ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous aidons les PME et artisans à gagner du temps grâce à l'IA. 
            Quel que soit votre secteur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <div 
                key={sector.title} 
                className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{sector.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{sector.description}</p>
                <p className="text-accent text-sm font-medium">→ {sector.pain}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Export avec l'ancien nom pour compatibilité
export { TargetSectors as Testimonials }
```

**Actions :**
1. Remplacer le contenu de testimonials.tsx
2. Optionnel : renommer le fichier en target-sectors.tsx
3. Si renommé, mettre à jour l'import dans app/page.tsx
```

---

## 🟡 PROMPT E : Simplification Header (logo texte)

### Fichier : `components/header.tsx`

```
@workspace

**Objectif :** Remplacer le LogoHero 3D dans le header par un logo texte pour éviter les problèmes WebGL et améliorer les performances.

**Fichier :** components/header.tsx

**Problème actuel :**
- LogoHero utilise Three.js dans le header (lourd)
- Double canvas WebGL (header + hero)
- Problème potentiel sur mobile

**Solution :**

```tsx
// components/header.tsx
"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Le Lab", href: "/lab" },
  { label: "Nous contacter", href: "/contact" },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark")
  }, [isDark, setTheme])

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo texte simplifié */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-accent">FACILE</span>
            <span className="text-muted-foreground">-IA</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="/contact">Réserver un appel</Link>
            </Button>

            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation mobile */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 mx-4"
              onClick={closeMenu}
            >
              <Button className="w-full">Réserver un appel</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
```

**Avantages :**
1. Plus de double canvas WebGL
2. Header plus léger
3. Meilleure performance mobile
4. Logo toujours lisible
```

---

## 📋 ORDRE D'EXÉCUTION

1. **PROMPT A** - Pricing (CRITIQUE)
2. **PROMPT B** - Services (CRITIQUE)
3. **PROMPT C** - Hero (HIGH)
4. **PROMPT D** - Testimonials → Secteurs (MEDIUM)
5. **PROMPT E** - Header simplifié (MEDIUM)

---

## ✅ CHECKLIST POST-MODIFICATIONS

Après chaque prompt :
- [ ] `npm run build` passe sans erreur
- [ ] `npm run dev` - test visuel
- [ ] Responsive mobile vérifié
- [ ] Dark/Light mode OK
- [ ] Liens fonctionnels

---

*Document généré le 16 janvier 2026*
