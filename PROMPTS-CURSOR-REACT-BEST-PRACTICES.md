# 🚀 PROMPTS CURSOR - BONNES PRATIQUES REACT/NEXT.JS VERCEL

**Basé sur :** [vercel-labs/agent-skills/react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)

**Projet :** `/Users/vandorsselaere/Documents/CURSOR/FACILIA-WEBSITE`

---

## 📋 RÉSUMÉ DES 8 CATÉGORIES VERCEL

| Priorité | Catégorie | Impact |
|----------|-----------|--------|
| 🔴 | Éliminer les waterfalls | CRITICAL |
| 🔴 | Optimisation bundle size | CRITICAL |
| 🟠 | Performance serveur | HIGH |
| 🟡 | Data fetching client | MEDIUM-HIGH |
| 🟡 | Optimisation re-renders | MEDIUM |
| 🟢 | Performance rendering | MEDIUM |
| 🟢 | Micro-optimisations JS | LOW-MEDIUM |
| 🟢 | Patterns avancés | INCREMENTAL |

---

## 🔴 PROMPT 1 : Optimisation des imports (CRITICAL)

### Problème détecté
Le projet utilise `lucide-react` avec des imports potentiellement non optimisés.

### Prompt Cursor

```
@workspace

**Objectif :** Optimiser les imports d'icônes pour réduire le bundle size.

**Contexte :** Le guide Vercel indique que les librairies suivantes nécessitent des imports nominatifs :
- lucide-react
- @radix-ui/react-*
- lodash

**Fichiers à vérifier et modifier :**
- components/hero.tsx
- components/header.tsx  
- components/contact.tsx
- components/pricing.tsx
- components/footer.tsx

**Action :**
1. Vérifier que tous les imports de lucide-react utilisent la syntaxe nominative :
   
   ❌ INCORRECT :
   ```tsx
   import * as Icons from "lucide-react"
   // ou
   import { ArrowRight, Check, Menu, X, Sun, Moon, Star, Calendar } from "lucide-react"
   ```
   
   ✅ CORRECT (déjà OK si une seule icône par import) :
   ```tsx
   import { ArrowRight } from "lucide-react"
   ```

2. Pour les composants @radix-ui, vérifier les imports dans components/ui/

3. Rapport attendu :
   - Liste des fichiers modifiés
   - Avant/Après pour chaque modification
```

---

## 🔴 PROMPT 2 : Conversion Server Components (CRITICAL)

### Problème détecté
Plusieurs composants ont `"use client"` alors qu'ils pourraient être des Server Components.

### Prompt Cursor

```
@workspace

**Objectif :** Convertir les composants statiques en Server Components pour améliorer les performances.

**Règle Vercel :** "Use Server Components by default. Only add 'use client' when you need interactivity, browser APIs, or React hooks."

**Analyse des fichiers :**

1. **components/services.tsx** - A `"use client"` mais :
   - Pas de useState/useEffect
   - Pas d'événements onClick
   - Données statiques
   → **DOIT être converti en Server Component**

2. **components/testimonials.tsx** - A `"use client"` mais :
   - Pas de hooks
   - Pas d'interactivité
   → **DOIT être converti en Server Component**

3. **components/pricing.tsx** - A `"use client"` mais :
   - Le Button peut rester client, mais le composant parent peut être serveur
   → **À évaluer : extraire la logique statique**

4. **components/footer.tsx** - A `"use client"` mais :
   - Aucune interactivité
   → **DOIT être converti en Server Component**

**Actions :**

Pour chaque composant identifié :
1. Retirer `"use client"` en haut du fichier
2. Vérifier qu'il n'y a pas d'erreur de compilation
3. Si le composant contient un sous-élément interactif, extraire ce sous-élément dans un composant client séparé

**Template de modification :**

```tsx
// AVANT (components/services.tsx)
"use client"

export function Services() {
  const services = [...] // données statiques
  return (...)
}

// APRÈS
// Pas de "use client" - Server Component par défaut
export function Services() {
  const services = [...] // données statiques
  return (...)
}
```

**Rapport attendu :**
- 4 fichiers modifiés
- Confirmation que le build passe sans erreur
```

---

## 🔴 PROMPT 3 : Lazy Loading des composants lourds (CRITICAL)

### Problème détecté
LogoHero.tsx utilise Three.js (182 KB) chargé à chaque page.

### Prompt Cursor

```
@workspace

**Objectif :** Implémenter le lazy loading pour le composant LogoHero qui utilise Three.js.

**Règle Vercel :** "Use dynamic imports for large libraries and components that aren't needed immediately."

**Problème actuel :**
- LogoHero.tsx importe Three.js (182 KB gzipped)
- Chargé même si l'utilisateur ne voit pas le hero
- Utilisé dans header.tsx ET hero.tsx (double instanciation potentielle)

**Solution :**

1. **Créer un wrapper avec dynamic import dans hero.tsx :**

```tsx
// components/hero.tsx
import dynamic from 'next/dynamic'

const LogoHero = dynamic(
  () => import('@/components/LogoHero').then(mod => ({ default: mod.LogoHero })),
  { 
    ssr: false, // Three.js ne fonctionne pas côté serveur
    loading: () => (
      <div className="h-64 sm:h-80 md:h-96 w-full flex items-center justify-center">
        <span className="text-4xl font-bold text-accent">FACILE-IA</span>
      </div>
    )
  }
)
```

2. **Dans header.tsx, utiliser un logo texte simplifié :**

```tsx
// components/header.tsx
// Remplacer LogoHero par un logo texte pour le header
<Link href="/" className="text-xl font-bold text-accent">
  FACILE-IA
</Link>
```

**Impact attendu :**
- Réduction du JavaScript initial de ~180 KB
- First Contentful Paint amélioré
- Un seul canvas WebGL (plus de risque de limite)

**Fichiers à modifier :**
- components/hero.tsx
- components/header.tsx
```

---

## 🟠 PROMPT 4 : Optimisation des métadonnées (HIGH)

### Problème détecté
Les métadonnées sont minimales et non optimisées pour le SEO.

### Prompt Cursor

```
@workspace

**Objectif :** Améliorer les métadonnées pour le SEO selon les bonnes pratiques Next.js.

**Fichier :** app/layout.tsx

**Métadonnées actuelles :**
```tsx
export const metadata: Metadata = {
  title: "FACILE-IA - Solutions d'IA pour votre entreprise",
  description: "Agence d'IA spécialisée...",
  generator: "v0.app", // ❌ À retirer
}
```

**Métadonnées optimisées à implémenter :**

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://facile-ia.fr'),
  title: {
    default: "FACILE-IA | Automatisation IA pour PME et Artisans",
    template: "%s | FACILE-IA"
  },
  description: "Gagnez 10-12h par semaine grâce à nos outils IA : notes de frais, devis, gestion avis, CRM. Pack Sérénité à partir de 999€.",
  keywords: ["IA pour PME", "automatisation artisans", "outils IA entreprise", "Pack Sérénité", "FACILE-IA"],
  authors: [{ name: "FACILE-IA" }],
  creator: "FACILE-IA",
  publisher: "FACILE-IA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://facile-ia.fr',
    siteName: 'FACILE-IA',
    title: "FACILE-IA | Automatisation IA pour PME et Artisans",
    description: "Gagnez 10-12h par semaine grâce à nos outils IA.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FACILE-IA - Automatisation IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FACILE-IA | Automatisation IA pour PME",
    description: "Gagnez 10-12h par semaine grâce à nos outils IA.",
    images: ['/og-image.png'],
    creator: '@facile_ia',
  },
  verification: {
    // À ajouter quand configuré
    // google: 'votre-code-verification',
  },
  alternates: {
    canonical: 'https://facile-ia.fr',
  },
}
```

**Action supplémentaire :**
- Créer une image OG dans public/og-image.png (1200x630px)
- Retirer `generator: "v0.app"`
```

---

## 🟠 PROMPT 5 : Optimisation des images (HIGH)

### Problème détecté
Pas d'utilisation du composant Image de Next.js.

### Prompt Cursor

```
@workspace

**Objectif :** Implémenter le composant Image de Next.js pour toutes les images.

**Règle Vercel :** "Always use next/image for automatic optimization, lazy loading, and responsive images."

**Vérification :**
1. Scanner tous les fichiers pour trouver les balises <img>
2. Vérifier les imports de `next/image`

**Pattern à suivre :**

```tsx
// ❌ INCORRECT
<img src="/logo.png" alt="Logo" />

// ✅ CORRECT
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo FACILE-IA"
  width={200}
  height={50}
  priority // Pour les images above the fold
/>

// Pour les images de fond ou dynamiques
<Image
  src="/hero-bg.jpg"
  alt="Background"
  fill
  sizes="100vw"
  className="object-cover"
  priority={false}
/>
```

**Configuration next.config.mjs à vérifier :**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig
```

**Fichiers à scanner :**
- Tous les fichiers dans components/
- Tous les fichiers dans app/
```

---

## 🟡 PROMPT 6 : Éviter les re-renders inutiles (MEDIUM)

### Problème détecté
Certains composants peuvent causer des re-renders inutiles.

### Prompt Cursor

```
@workspace

**Objectif :** Optimiser les composants pour éviter les re-renders inutiles.

**Règles Vercel :**
1. "Memoize expensive computations with useMemo"
2. "Memoize callback functions with useCallback"
3. "Use React.memo for pure components"

**Fichier à analyser : components/header.tsx**

**Problèmes potentiels :**
1. `navLinks` est recréé à chaque render
2. Le toggle theme pourrait être optimisé

**Optimisations :**

```tsx
// components/header.tsx
"use client"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

// Sortir les données statiques hors du composant
const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Le Lab", href: "/lab" },
  { label: "Nous contacter", href: "/contact" },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  
  // Mémoiser les valeurs dérivées
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme])
  
  // Mémoiser les callbacks
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark")
  }, [isDark, setTheme])

  return (
    // ... utiliser les constantes et callbacks mémorisés
  )
}
```

**Fichiers à optimiser :**
- components/header.tsx (priorité haute - interactif)
- components/LogoHero.tsx (si des callbacks sont recréés)
```

---

## 🟡 PROMPT 7 : Optimisation du chargement des fonts (MEDIUM)

### Problème détecté
La font Geist est bien configurée mais peut être optimisée.

### Prompt Cursor

```
@workspace

**Objectif :** Vérifier et optimiser le chargement des fonts.

**État actuel (app/layout.tsx) :**
```tsx
import { Geist } from "next/font/google"
const geist = Geist({ subsets: ["latin"] })
```

**Optimisation recommandée :**

```tsx
import { Geist, Geist_Mono } from "next/font/google"

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap', // Évite le FOIT (Flash of Invisible Text)
  preload: true,
  variable: '--font-geist', // Pour utiliser avec Tailwind
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-geist-mono',
})

// Dans le body
<body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
```

**Configuration Tailwind (tailwind.config.js) :**

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
}
```
```

---

## 🟢 PROMPT 8 : Extraction des composants interactifs (MEDIUM)

### Problème détecté
Des composants mixent parties statiques et interactives.

### Prompt Cursor

```
@workspace

**Objectif :** Séparer les parties interactives des parties statiques pour optimiser le SSR.

**Règle Vercel :** "Extract interactive parts to separate client components to keep parent as Server Component."

**Exemple avec pricing.tsx :**

**Structure actuelle :**
```tsx
"use client" // Tout le composant est client

export function Pricing() {
  // Données statiques + boutons interactifs mélangés
}
```

**Structure optimisée :**

```tsx
// components/pricing.tsx (Server Component)
import { PricingCard } from './pricing-card'

const plans = [
  { name: "Pack Sérénité", price: "999", ... },
  { name: "Site Solo", price: "999", ... },
  { name: "Outils IA", price: "49", ... },
]

export function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2>Tarification Simple</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

```tsx
// components/pricing-card.tsx (Client Component)
"use client"

import { Button } from "@/components/ui/button"

interface Plan {
  name: string
  price: string
  // ...
}

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div className="...">
      {/* Contenu statique */}
      <Button onClick={() => {/* action */}}>
        Commencer
      </Button>
    </div>
  )
}
```

**Avantage :** Le HTML statique est rendu côté serveur, seuls les boutons sont hydratés côté client.
```

---

## 🟢 PROMPT 9 : Configuration du cache (INCREMENTAL)

### Prompt Cursor

```
@workspace

**Objectif :** Configurer le cache pour les routes statiques.

**Fichier : next.config.mjs**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Activer le strict mode React
  reactStrictMode: true,
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Headers de cache
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Experimental features pour Next.js 16
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
    ],
  },
}

export default nextConfig
```
```

---

## 🟢 PROMPT 10 : Audit global des performances

### Prompt Cursor

```
@workspace

**Objectif :** Effectuer un audit complet des performances selon les critères Vercel.

**Checklist à vérifier :**

### Bundle Size (CRITICAL)
- [ ] Imports nominatifs pour lucide-react
- [ ] Imports nominatifs pour @radix-ui
- [ ] Pas d'import * as
- [ ] Dynamic imports pour Three.js

### Server Components (HIGH)
- [ ] services.tsx → Server Component
- [ ] testimonials.tsx → Server Component  
- [ ] footer.tsx → Server Component
- [ ] pricing.tsx → Server Component + Client Card

### Hydration (MEDIUM)
- [ ] Extraction des parties interactives
- [ ] "use client" uniquement où nécessaire

### Images (HIGH)
- [ ] Utilisation de next/image
- [ ] Attribut priority pour hero
- [ ] Attribut sizes défini

### Metadata (HIGH)
- [ ] OpenGraph configuré
- [ ] Twitter cards configurés
- [ ] Canonical URL

### Cache (MEDIUM)
- [ ] Headers de cache configurés
- [ ] Static assets avec max-age

**Générer un rapport avec :**
1. Score actuel estimé (0-100)
2. Liste des corrections appliquées
3. Score après corrections estimé
```

---

## 📁 ORDRE D'EXÉCUTION RECOMMANDÉ

1. **PROMPT 2** - Conversion Server Components (gain immédiat)
2. **PROMPT 1** - Optimisation imports (réduction bundle)
3. **PROMPT 3** - Lazy Loading Three.js (gain majeur)
4. **PROMPT 4** - Métadonnées SEO
5. **PROMPT 8** - Extraction composants interactifs
6. **PROMPT 6** - Éviter re-renders
7. **PROMPT 5** - Optimisation images
8. **PROMPT 7** - Optimisation fonts
9. **PROMPT 9** - Configuration cache
10. **PROMPT 10** - Audit final

---

*Document généré le 16 janvier 2026 - Basé sur Vercel React Best Practices*
