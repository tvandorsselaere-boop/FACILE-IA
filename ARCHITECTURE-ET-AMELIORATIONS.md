# 🗺️ ARCHITECTURE SITE FACILE-IA

## SCHÉMA GLOBAL

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FACILE-IA                                      │
│                         app/layout.tsx                                      │
│                    (ThemeProvider, Fonts, Meta)                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│         PAGE ACCUEIL            │   │           LE LAB                │
│         app/page.tsx            │   │        app/lab/page.tsx         │
└─────────────────────────────────┘   └─────────────────────────────────┘
                │                                   │
                │                       ┌───────────┴───────────┐
                │                       │                       │
                ▼                       ▼                       ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│   components/       │   │  app/lab/wolfedge/  │   │  app/lab/feasy/     │
│                     │   │     page.tsx        │   │     page.tsx        │
│  ┌───────────────┐  │   └─────────────────────┘   └─────────────────────┘
│  │ header.tsx    │  │
│  ├───────────────┤  │
│  │ hero.tsx      │  │
│  ├───────────────┤  │
│  │ services.tsx  │  │
│  ├───────────────┤  │
│  │ pricing.tsx   │  │
│  ├───────────────┤  │
│  │ testimonials  │  │
│  ├───────────────┤  │
│  │ contact.tsx   │  │
│  ├───────────────┤  │
│  │ footer.tsx    │  │
│  └───────────────┘  │
└─────────────────────┘
```

---

## ARBORESCENCE FICHIERS

```
FACILIA-WEBSITE/
│
├── app/
│   ├── layout.tsx ─────────────── 🔧 Config globale (theme, fonts)
│   ├── page.tsx ───────────────── 📄 Page d'accueil (assemble les sections)
│   ├── globals.css ────────────── 🎨 Styles CSS globaux
│   │
│   └── lab/
│       ├── page.tsx ───────────── 📄 Galerie projets Lab
│       ├── wolfedge/
│       │   └── page.tsx ───────── 📄 Page projet WolfEdge
│       └── feasy/
│           └── page.tsx ───────── 📄 Page projet FEAsy
│
├── components/
│   ├── header.tsx ─────────────── 🧭 Navigation + Theme toggle
│   ├── hero.tsx ───────────────── 🏠 Section Hero (logo, tagline, CTAs)
│   ├── services.tsx ───────────── 💼 Section Services
│   ├── pricing.tsx ────────────── 💰 Section Tarifs
│   ├── testimonials.tsx ───────── 💬 Section Témoignages
│   ├── contact.tsx ────────────── 📧 Section Contact
│   ├── footer.tsx ─────────────── 🦶 Pied de page
│   ├── theme-provider.tsx ─────── 🌙 Provider dark/light mode
│   ├── LogoHero.tsx ───────────── ✨ Logo animé Three.js (À INTÉGRER)
│   │
│   └── ui/ ────────────────────── 🧱 Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── ... (50+ composants)
│
├── hooks/
│   └── (hooks personnalisés)
│
├── lib/
│   └── utils.ts ───────────────── 🔧 Fonction cn() + utils
│
└── styles/
    └── (styles additionnels)
```

---

## FLUX DE NAVIGATION

```
┌──────────────────────────────────────────────────────────────────────────┐
│                              HEADER                                      │
│  [Logo] ──────── [Accueil] [Services] [Projets] [À propos] ── [Theme] ── │
└──────────────────────────────────────────────────────────────────────────┘
                         │         │         │
                         ▼         ▼         ▼
                    ┌────────┐ ┌────────┐ ┌────────┐
                    │  /#    │ │/#serv. │ │ /lab   │
                    │ (hero) │ │        │ │        │
                    └────────┘ └────────┘ └────────┘
                                              │
                                    ┌─────────┴─────────┐
                                    ▼                   ▼
                              ┌──────────┐        ┌──────────┐
                              │/lab/wolf │        │/lab/feasy│
                              │  edge    │        │          │
                              └──────────┘        └──────────┘
                                    │                   │
                                    └─────────┬─────────┘
                                              ▼
                                    [← Retour au Lab]
```

---

## PAGE ACCUEIL - SECTIONS

```
┌─────────────────────────────────────────────────────────────────┐
│                         HEADER                                  │
│                    (sticky, blur)                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      HERO SECTION                               │
│                     components/hero.tsx                         │
│                                                                 │
│              [Badge] [Titre] [Description]                      │
│                    [CTA 1] [CTA 2]                              │
│                   [3 feature cards]                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    SERVICES SECTION                             │
│                  components/services.tsx                        │
│                                                                 │
│                 [Titre] [4 service cards]                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                 TESTIMONIALS SECTION                            │
│                components/testimonials.tsx                      │
│                                                                 │
│              [Titre] [3 testimonial cards]                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    PRICING SECTION                              │
│                  components/pricing.tsx                         │
│                                                                 │
│                [Titre] [3 pricing cards]                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    CONTACT SECTION                              │
│                  components/contact.tsx                         │
│                                                                 │
│                   [Titre] [Formulaire]                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                         FOOTER                                  │
│                    components/footer.tsx                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 LISTE DES AMÉLIORATIONS PROPOSÉES

### BRANCHE 1 : HEADER (`components/header.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 1.1 | Corriger les liens nav | 🔴 Haute | Remplacer "Accueil, Services, Projets, À propos" par "Facile-IA, Offres, Témoignages, Contact" |
| 1.2 | Ajouter bouton "Le Lab" | 🔴 Haute | Bouton outline avec icône flask, lien vers /lab |
| 1.3 | Supprimer "Démarrer" | 🟡 Moyenne | Bouton inutile (ne fait rien) |
| 1.4 | Fixer theme toggle | 🔴 Haute | Utiliser useTheme() de next-themes au lieu de useState |

---

### BRANCHE 2 : LAYOUT (`app/layout.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 2.1 | Ajouter ThemeProvider | 🔴 Haute | Wrapper avec next-themes pour que le toggle fonctionne |
| 2.2 | Mettre à jour meta | 🟢 Basse | Titre "FACILE-IA | Digitalisation PME" |

---

### BRANCHE 3 : HERO (`components/hero.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 3.1 | Intégrer LogoHero | 🔴 Haute | Remplacer le H1 texte par le composant `<LogoHero />` animé |
| 3.2 | Badge "Pôle Services PME" | 🟡 Moyenne | Ajouter badge orange au-dessus du logo |
| 3.3 | Tagline spécifique | 🟡 Moyenne | "« Gagner du temps pour ce qui compte vraiment. »" |
| 3.4 | Value props Facile-IA | 🟡 Moyenne | +10h/semaine, IA sur mesure, Sans engagement (avec icônes) |
| 3.5 | CTAs spécifiques | 🟡 Moyenne | "Découvrir nos offres" + "Réserver un appel gratuit" |
| 3.6 | Lien Lab discret | 🟢 Basse | "🔬 Découvrez notre Lab R&D →" en bas |

---

### BRANCHE 4 : SERVICES (`components/services.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 4.1 | Contenu Pack Sérénité | 🟡 Moyenne | Remplacer les 4 services génériques par le vrai contenu |
| 4.2 | Ajouter section prix | 🟡 Moyenne | 2 cartes : 999€ installation + 29€/mois abonnement |
| 4.3 | Ajouter 6 outils | 🟡 Moyenne | Grille avec Notes de Frais, Devis Pro, etc. |
| 4.4 | Ajouter ROI | 🟢 Basse | Avant/Après : 12h → 2h = 83% réduction |
| 4.5 | Ajouter "Pourquoi" | 🟢 Basse | Carte orange avec 3 arguments |

---

### BRANCHE 5 : PRICING (`components/pricing.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 5.1 | Supprimer ou fusionner | 🟡 Moyenne | Le pricing est redondant si intégré dans Services |

---

### BRANCHE 6 : TESTIMONIALS (`components/testimonials.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 6.1 | Vrais témoignages | 🟡 Moyenne | Marie (🌸 Fleuriste), Jean-Pierre (🔧 Plombier), Sophie (💅 Salon) |
| 6.2 | Format horizontal | 🟢 Basse | Avatar + quote côte à côte au lieu d'empilé |
| 6.3 | Note démo | 🟢 Basse | Ajouter "* Témoignages de démonstration" |

---

### BRANCHE 7 : CONTACT (`components/contact.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 7.1 | Remplacer formulaire | 🟡 Moyenne | Timeline 3 étapes + CTA central + FAQ |
| 7.2 | Ajouter timeline | 🟡 Moyenne | Appel → Installation → Liberté |
| 7.3 | Ajouter FAQ | 🟡 Moyenne | 5 questions accordéon |

---

### BRANCHE 8 : LAB GALERIE (`app/lab/page.tsx`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 8.1 | Vérifier contenu | 🟢 Basse | S'assurer que WolfEdge et FEAsy sont bien présentés |
| 8.2 | Flèche retour | 🟢 Basse | "← Retour à l'accueil" en haut |

---

### BRANCHE 9 : PAGES PROJETS (`app/lab/wolfedge/`, `app/lab/feasy/`)

| # | Amélioration | Priorité | Description |
|---|--------------|----------|-------------|
| 9.1 | Flèche retour Lab | 🔴 Haute | "← Retour au Lab" sur chaque page projet |
| 9.2 | Vérifier contenu | 🟢 Basse | S'assurer que le contenu est complet |

---

## 📊 RÉSUMÉ PAR PRIORITÉ

### 🔴 HAUTE PRIORITÉ (bugs fonctionnels)
- 1.1, 1.2, 1.4 (Header)
- 2.1 (Layout - ThemeProvider)
- 3.1 (Hero - Logo animé)
- 9.1 (Pages Lab - retour)

### 🟡 MOYENNE PRIORITÉ (contenu)
- 1.3 (Header - supprimer Démarrer)
- 3.2, 3.3, 3.4, 3.5 (Hero - contenu)
- 4.1, 4.2, 4.3 (Services - contenu)
- 5.1 (Pricing - décision)
- 6.1 (Testimonials)
- 7.1, 7.2, 7.3 (Contact)

### 🟢 BASSE PRIORITÉ (polish)
- 2.2 (Meta)
- 3.6 (Lien Lab)
- 4.4, 4.5 (ROI, Pourquoi)
- 6.2, 6.3 (Testimonials format)
- 8.1, 8.2, 9.2 (Lab pages)

---

## 🚀 ORDRE RECOMMANDÉ

1. **Layout** → Fixer ThemeProvider (sinon toggle cassé)
2. **Header** → Fixer liens + ajouter Le Lab + fixer toggle
3. **Hero** → Intégrer LogoHero
4. **Hero** → Personnaliser contenu
5. **Services** → Personnaliser contenu
6. **Testimonials** → Personnaliser contenu
7. **Contact** → Refaire avec timeline/FAQ
8. **Pricing** → Décider : garder, supprimer ou fusionner
9. **Lab** → Vérifier navigation
