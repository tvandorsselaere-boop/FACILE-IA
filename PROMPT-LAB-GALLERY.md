# 🧪 PROMPT CURSOR - Restructuration Le Lab en Galerie de Projets

## OBJECTIF
Transformer la page Le Lab en une **galerie de projets** cliquables. Chaque projet (WolfEdge, FEAsy) doit avoir sa propre **page dédiée** avec une flèche de retour vers Le Lab.

---

## STRUCTURE CIBLE

```
app/
├── lab/
│   ├── page.tsx              # Galerie des projets (cartes cliquables)
│   ├── wolfedge/
│   │   └── page.tsx          # Page dédiée WolfEdge
│   └── feasy/
│       └── page.tsx          # Page dédiée FEAsy
```

---

## 1. CRÉER LA GALERIE - `app/lab/page.tsx`

La page principale du Lab doit afficher une galerie de cartes projets cliquables :

```tsx
import { Header } from "@/components/Header"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "wolfedge",
    emoji: "🐺",
    title: "WolfEdge",
    tagline: "The Alpha Trader's Journal",
    description: "Journal de trading intelligent avec import universel, Real Risk Ratio et coach IA conversationnel.",
    badges: ["PRIORITAIRE", "FINTECH"],
    badgeColors: ["bg-blue-500", "bg-purple-500"],
    gradient: "from-blue-500/20 to-purple-500/10",
    borderColor: "border-blue-500/30",
    status: "Lancement Q1 2026",
  },
  {
    id: "feasy",
    emoji: "🏗️",
    title: "FEAsy",
    tagline: "AI-Powered Finite Element Analysis",
    description: "Démocratiser l'analyse par éléments finis : de 100h à 5 minutes, coûts divisés par 10.",
    badges: ["ENGINEERING", "DEEPTECH"],
    badgeColors: ["bg-green-500", "bg-blue-500"],
    gradient: "from-green-500/20 to-blue-500/10",
    borderColor: "border-green-500/30",
    status: "Lancement Q4 2026",
  },
]

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Retour accueil */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              🔬 R&D
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Lab</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos projets d'innovation en cours de développement
            </p>
          </div>

          {/* Galerie de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/lab/${project.id}`}
                className="group"
              >
                <div className={`
                  relative p-8 md:p-10 rounded-3xl
                  bg-gradient-to-br ${project.gradient}
                  border ${project.borderColor}
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl hover:shadow-glow/10
                  cursor-pointer
                `}>
                  {/* Badges */}
                  <div className="flex gap-2 mb-6">
                    {project.badges.map((badge, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full ${project.badgeColors[i]} text-white text-xs font-medium`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Emoji + Titre */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{project.emoji}</span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                      <p className="text-glow italic">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{project.status}</span>
                    <span className="inline-flex items-center gap-2 text-glow font-medium group-hover:gap-3 transition-all">
                      Découvrir
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Citation */}
          <div className="text-center mt-16 p-8 rounded-3xl bg-card/50 border border-border/50">
            <p className="text-lg italic text-muted-foreground">
              "Ces projets prouvent notre capacité à développer des solutions IA 
              <span className="text-glow font-semibold"> complexes et scalables</span>"
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
```

---

## 2. CRÉER LA PAGE WOLFEDGE - `app/lab/wolfedge/page.tsx`

Déplacer tout le contenu WolfEdge actuel (de LabContent.tsx) dans cette page dédiée :

```tsx
"use client"

import { Header } from "@/components/Header"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Sparkles, Zap } from "lucide-react"
// ... importer le reste

export default function WolfEdgePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* ⬅️ FLÈCHE RETOUR VERS LE LAB */}
          <Link 
            href="/lab"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au Lab
          </Link>

          {/* Header WolfEdge */}
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">PRIORITAIRE</span>
              <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">FINTECH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">🐺 WolfEdge</h1>
            <p className="text-2xl text-blue-400 italic mb-2">The Alpha Trader's Journal</p>
            <p className="text-muted-foreground">Lancement Q1 2026</p>
          </div>

          {/* CONTENU WOLFEDGE - Reprendre les sections de LabContent.tsx */}
          {/* Section Le Problème */}
          {/* Section La Solution : 3 Piliers */}
          {/* Section Stack Technique */}
          
        </div>
      </main>
    </>
  )
}
```

---

## 3. CRÉER LA PAGE FEASY - `app/lab/feasy/page.tsx`

Même structure, déplacer le contenu FEAsy :

```tsx
"use client"

import { Header } from "@/components/Header"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, DollarSign, Target, BarChart3 } from "lucide-react"
// ... importer le reste

export default function FEAsyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* ⬅️ FLÈCHE RETOUR VERS LE LAB */}
          <Link 
            href="/lab"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au Lab
          </Link>

          {/* Header FEAsy */}
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">ENGINEERING</span>
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">DEEPTECH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">🏗️ FEAsy</h1>
            <p className="text-2xl text-blue-400 italic mb-2">AI-Powered Finite Element Analysis</p>
            <p className="text-muted-foreground">Lancement Q4 2026</p>
          </div>

          {/* CONTENU FEASY - Reprendre les sections de LabContent.tsx */}
          {/* Section Mission */}
          {/* Section Les 6 Capacités IA */}
          {/* Section Impact (÷10, 5min, $13B) */}
          
        </div>
      </main>
    </>
  )
}
```

---

## 4. MISE À JOUR DU COMPOSANT LABCONTENT

Après avoir créé les pages dédiées, le fichier `components/sections/LabContent.tsx` peut être :
- **Supprimé** (car son contenu est maintenant dans les pages dédiées)
- Ou gardé comme **référence** si besoin

---

## 5. NAVIGATION & UX

### Flèche de retour obligatoire sur chaque page projet :
```tsx
<Link 
  href="/lab"
  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-12"
>
  <ArrowLeft className="w-4 h-4" />
  Retour au Lab
</Link>
```

### Animation hover sur les cartes de la galerie :
```tsx
className="hover:scale-[1.02] hover:shadow-xl hover:shadow-glow/10 transition-all duration-300"
```

### Flèche "Découvrir" qui s'anime :
```tsx
<span className="group-hover:gap-3 transition-all">
  Découvrir
  <ArrowRight className="w-4 h-4" />
</span>
```

---

## 6. CHECKLIST

- [ ] Créer `app/lab/wolfedge/page.tsx`
- [ ] Créer `app/lab/feasy/page.tsx`
- [ ] Modifier `app/lab/page.tsx` en galerie
- [ ] Chaque page projet a une flèche "Retour au Lab"
- [ ] Les cartes de la galerie sont cliquables avec effet hover
- [ ] Supprimer ou archiver `LabContent.tsx`
- [ ] Tester les navigations : Accueil → Lab → WolfEdge → Lab → FEAsy → Lab

---

## STRUCTURE VISUELLE FINALE

### Page Galerie (/lab)
```
┌────────────────────────────────────────────┐
│ ← Retour à l'accueil                       │
│                                            │
│              🔬 R&D                        │
│              Le Lab                        │
│    Nos projets d'innovation...             │
│                                            │
│  ┌─────────────────┐  ┌─────────────────┐  │
│  │ 🐺 WolfEdge     │  │ 🏗️ FEAsy        │  │
│  │ Trader's Journal│  │ FEA Analysis    │  │
│  │                 │  │                 │  │
│  │ Découvrir →     │  │ Découvrir →     │  │
│  └─────────────────┘  └─────────────────┘  │
│                                            │
└────────────────────────────────────────────┘
```

### Page Projet (/lab/wolfedge)
```
┌────────────────────────────────────────────┐
│ ← Retour au Lab                            │
│                                            │
│         [PRIORITAIRE] [FINTECH]            │
│           🐺 WolfEdge                      │
│      The Alpha Trader's Journal            │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │        🎯 Le Problème                │  │
│  │   [Card] [Card] [Card]               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │     💡 La Solution : 3 Piliers       │  │
│  │   [Card] [Card] [Card]               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │        ⚡ Stack Technique            │  │
│  │   [Card] [Card] [Card] [Card]        │  │
│  └──────────────────────────────────────┘  │
│                                            │
└────────────────────────────────────────────┘
```
