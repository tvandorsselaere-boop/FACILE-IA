# 🗺️ STRUCTURE DU SITE FACILE-IA

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                         FACILE-IA                               │
│                    Site Vitrine + Lab R&D                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 1. ARBORESCENCE DES PAGES

```
/                           → Page d'accueil (One-Page)
│
├── /#hero                  → Section Hero (Logo + Value Props)
├── /#services              → Section Services (Pack Sérénité + Outils)
├── /#testimonials          → Section Témoignages
├── /#contact               → Section Contact (Timeline + FAQ)
│
└── /lab                    → Galerie des projets R&D
    ├── /lab/wolfedge       → Page dédiée WolfEdge
    └── /lab/feasy          → Page dédiée FEAsy
```

---

## 2. STRUCTURE DES FICHIERS

```
FACILIA-WEBSITE/
│
├── app/
│   ├── layout.tsx              # Layout global (ThemeProvider)
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux + variables CSS
│   │
│   └── lab/
│       ├── page.tsx            # Galerie des projets
│       ├── wolfedge/
│       │   └── page.tsx        # Page WolfEdge
│       └── feasy/
│           └── page.tsx        # Page FEAsy
│
├── components/
│   ├── Header.tsx              # Navigation principale
│   ├── LogoHero.tsx            # Logo animé FACILE-IA
│   ├── PageNavigation.tsx      # Navigation dots (sections)
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Section Hero
│   │   ├── ServicesSection.tsx # Section Services
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── LabContent.tsx      # (à supprimer après refacto)
│   │
│   ├── ui/
│   │   └── LiquidGlassCard.tsx # Composant carte glass
│   │
│   └── layout/                 # (À CRÉER - voir PROMPT-RESTRUCTURATION)
│       ├── PageSection.tsx
│       ├── SectionHeader.tsx
│       ├── CardGrid.tsx
│       ├── FeatureCard.tsx
│       └── Carousel.tsx
│
├── lib/
│   └── utils.ts                # Fonction cn() pour classes
│
└── public/
    └── (assets)
```

---

## 3. NAVIGATION

### Header (présent sur toutes les pages)

```
┌────────────────────────────────────────────────────────────────┐
│  [LOGO]     Facile-IA  Offres  Témoignages  Contact   [Le Lab] │
└────────────────────────────────────────────────────────────────┘
```

| Élément | Lien | Action |
|---------|------|--------|
| Logo | `/` | Retour accueil |
| Facile-IA | `/#hero` | Scroll vers Hero |
| Offres | `/#services` | Scroll vers Services |
| Témoignages | `/#testimonials` | Scroll vers Témoignages |
| Contact | `/#contact` | Scroll vers Contact |
| Le Lab | `/lab` | Navigation vers Lab |

### Navigation dans Le Lab

```
Accueil (/)
    │
    └──→ Le Lab (/lab)
              │
              ├──→ WolfEdge (/lab/wolfedge)
              │         │
              │         └──← [Retour au Lab]
              │
              └──→ FEAsy (/lab/feasy)
                        │
                        └──← [Retour au Lab]
```

---

## 4. SECTIONS DE LA PAGE D'ACCUEIL

### 4.1 Hero Section (`/#hero`)

```
┌─────────────────────────────────────────────┐
│                                             │
│           [Pôle Services PME]               │
│                                             │
│            F A C I L E - I A                │
│                                             │
│  « Gagner du temps pour ce qui compte »     │
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │+10h/sem │ │IA mesure│ │Sans eng.│       │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  [Découvrir nos offres] [Réserver appel]    │
│                                             │
│         🔬 Découvrez notre Lab R&D          │
│                                             │
└─────────────────────────────────────────────┘
```

**Contenu :**
- Badge "Pôle Services PME"
- Logo FACILE-IA (grand, animé)
- Tagline italique
- 3 Value Props (cartes)
- 2 CTAs
- Lien discret vers Le Lab

---

### 4.2 Services Section (`/#services`)

```
┌─────────────────────────────────────────────┐
│                                             │
│         Le Pack Sérénité Numérique          │
│      20 ans d'expertise Airbus Helicopters  │
│                                             │
│  ┌─────────────────┐ ┌─────────────────┐   │
│  │   999€          │ │   29€/mois      │   │
│  │   Installation  │ │   Abonnement    │   │
│  │   unique        │ │   RECOMMANDÉ    │   │
│  └─────────────────┘ └─────────────────┘   │
│                                             │
│       [Réserver un appel découverte]        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          Les 6 outils disponibles           │
│                                             │
│  [Notes Frais] [Devis Pro] [Reputation IA]  │
│  [PDF Pro] [Veille Pro] [CRM Smart]         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          💡 ROI : Temps Gagné               │
│                                             │
│     AVANT: 12h  →  APRÈS: 2h  =  83%        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          🎯 Pourquoi Facile-IA ?            │
│   • Fiabilité Aéro                          │
│   • Rapidité                                │
│   • Transparence                            │
│                                             │
└─────────────────────────────────────────────┘
```

**Contenu :**
- Header avec badge expertise
- 2 cartes de prix (999€ + 29€/mois)
- CTA central
- Grille 6 outils (cliquables → modal)
- Section ROI (avant/après)
- Section "Pourquoi Facile-IA"

---

### 4.3 Testimonials Section (`/#testimonials`)

```
┌─────────────────────────────────────────────┐
│                                             │
│          Ils nous font confiance            │
│         Des artisans et PME comme vous      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🌸 Marie Dupont - Fleuriste         │   │
│  │ "Grâce à Facile-IA, je ne passe     │   │
│  │  plus mes dimanches..."  ⭐⭐⭐⭐⭐    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🔧 Jean-Pierre - Plombier           │   │
│  │ "Les relances d'impayés..."  ⭐⭐⭐⭐⭐ │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 💅 Sophie - Salon Beauté            │   │
│  │ "La gestion des avis..."  ⭐⭐⭐⭐⭐    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  * Témoignages de démonstration             │
│                                             │
└─────────────────────────────────────────────┘
```

**Contenu :**
- Header
- 3 témoignages (avatar + citation + étoiles)
- Note de démo

---

### 4.4 Contact Section (`/#contact`)

```
┌─────────────────────────────────────────────┐
│                                             │
│         Prêt à gagner du temps ?            │
│             En 3 étapes simples             │
│                                             │
│     ①──────────②──────────③                │
│     📞          ⚙️          🚀               │
│   Appel      Installation   Liberté         │
│   30min        1 semaine    +10h/sem        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│              ┌─────────────┐                │
│              │  29€/mois   │                │
│              │             │                │
│              │ [Démarrer]  │                │
│              │ [Appel]     │                │
│              └─────────────┘                │
│                                             │
│  ✓ Sans engagement  ✓ 48h  ✓ Support 24/7  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          Questions fréquentes               │
│                                             │
│  [Pourquoi 29€/mois ?]  [Sans engagement ?] │
│  [Site m'appartient ?]  [Support inclus ?]  │
│  [Temps installation ?]                     │
│                                             │
└─────────────────────────────────────────────┘
```

**Contenu :**
- Header
- Timeline horizontale (3 étapes)
- CTA central avec prix
- 3 badges de confiance
- FAQ accordéon (5 questions)

---

## 5. PAGES LE LAB

### 5.1 Galerie (`/lab`)

```
┌─────────────────────────────────────────────┐
│ ← Retour à l'accueil                        │
│                                             │
│                🔬 R&D                       │
│                Le Lab                       │
│    Nos projets d'innovation en cours        │
│                                             │
│  ┌───────────────┐  ┌───────────────┐      │
│  │ 🐺 WolfEdge   │  │ 🏗️ FEAsy      │      │
│  │               │  │               │      │
│  │ FINTECH      │  │ DEEPTECH      │      │
│  │ Q1 2026      │  │ Q4 2026       │      │
│  │               │  │               │      │
│  │ Découvrir →  │  │ Découvrir →   │      │
│  └───────────────┘  └───────────────┘      │
│                                             │
│  "Ces projets prouvent notre capacité..."   │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 5.2 Page WolfEdge (`/lab/wolfedge`)

```
┌─────────────────────────────────────────────┐
│ ← Retour au Lab                             │
│                                             │
│        [PRIORITAIRE] [FINTECH]              │
│           🐺 WolfEdge                       │
│      The Alpha Trader's Journal             │
│            Q1 2026                          │
│                                             │
├─────────────────────────────────────────────┤
│ 🎯 Le Problème                              │
│ [Import Manuel] [Outils Inadéquats] [...]   │
├─────────────────────────────────────────────┤
│ 💡 La Solution : 3 Piliers                  │
│ [AI Import] [Real Risk Ratio] [AI Coach]    │
├─────────────────────────────────────────────┤
│ ⚡ Stack Technique                          │
│ [Frontend] [Backend] [AI] [Parsing]         │
└─────────────────────────────────────────────┘
```

---

### 5.3 Page FEAsy (`/lab/feasy`)

```
┌─────────────────────────────────────────────┐
│ ← Retour au Lab                             │
│                                             │
│        [ENGINEERING] [DEEPTECH]             │
│            🏗️ FEAsy                         │
│    AI-Powered Finite Element Analysis       │
│            Q4 2026                          │
│                                             │
├─────────────────────────────────────────────┤
│ 🎯 Mission                                  │
│ "100h → 5 minutes, coûts ÷10"               │
├─────────────────────────────────────────────┤
│ 🤖 Les 6 Capacités IA                       │
│ [Génération] [Analyses] [Chat] [...]        │
├─────────────────────────────────────────────┤
│ 📊 Impact                                   │
│ [÷10 coût] [5min] [$13B marché]             │
└─────────────────────────────────────────────┘
```

---

## 6. THÈME & COULEURS

### Variables CSS (Dark Mode = défaut)

| Variable | Valeur Dark | Usage |
|----------|-------------|-------|
| `--background` | `hsl(222 47% 6%)` | Fond principal |
| `--foreground` | `hsl(0 0% 98%)` | Texte principal |
| `--glow-color` | `rgb(239, 68, 68)` | Rouge (accents) |
| `--card` | `hsl(222 47% 8%)` | Fond cartes |
| `--border` | `hsl(222 30% 15%)` | Bordures |
| `--muted-foreground` | `hsl(0 0% 63.9%)` | Texte secondaire |

### Variables CSS (Light Mode)

| Variable | Valeur Light | Usage |
|----------|--------------|-------|
| `--background` | `hsl(0 0% 100%)` | Fond blanc |
| `--glow-color` | `rgb(59, 130, 246)` | Bleu (accents) |

---

## 7. COMPOSANTS RÉUTILISABLES

| Composant | Fichier | Usage |
|-----------|---------|-------|
| `Header` | `Header.tsx` | Navigation globale |
| `LogoHero` | `LogoHero.tsx` | Logo animé |
| `LiquidGlassCard` | `ui/LiquidGlassCard.tsx` | Cartes glassmorphism |
| `PageSection` | `layout/PageSection.tsx` | Wrapper section (à créer) |
| `SectionHeader` | `layout/SectionHeader.tsx` | En-tête section (à créer) |
| `CardGrid` | `layout/CardGrid.tsx` | Grille responsive (à créer) |
| `FeatureCard` | `layout/FeatureCard.tsx` | Carte feature (à créer) |
| `Carousel` | `layout/Carousel.tsx` | Scroll horizontal (à créer) |

---

## 8. TECHNOLOGIES

| Catégorie | Technologies |
|-----------|--------------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, TypeScript |
| Styling | Tailwind CSS, CSS Variables |
| Animations | Framer Motion |
| Icônes | Lucide React |
| Thème | next-themes |
| Fonts | System fonts |

---

## 9. FICHIERS DE CONFIGURATION

| Fichier | Rôle |
|---------|------|
| `next.config.ts` | Config Next.js |
| `tailwind.config.ts` | Config Tailwind (implicite) |
| `tsconfig.json` | Config TypeScript |
| `package.json` | Dépendances |
| `components.json` | Config shadcn/ui |

---

## 10. PROMPTS CURSOR DISPONIBLES

| Fichier | Objectif |
|---------|----------|
| `PROMPT-RESTRUCTURATION.md` | Refacto layout style Apple |
| `PROMPT-LAB-GALLERY.md` | Transformer Lab en galerie |

---

*Document généré le 16/01/2026*
