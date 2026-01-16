# 🔧 PROMPT CURSOR - Corrections Complètes Facile-IA

## CONTEXTE
Le site a une base propre générée par v0.dev mais le contenu est générique. Il faut injecter le vrai contenu Facile-IA et corriger les bugs techniques.

---

## 🚨 CORRECTIONS URGENTES

### 1. FIXER LE THEME TOGGLE

**Fichier : `app/layout.tsx`**

Remplacer par :
```tsx
import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FACILE-IA | Digitalisation PME",
  description: "Agence IA ciblant artisans et PME. 20 ans d'expertise Airbus appliqués à votre digitalisation.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Fichier : `components/theme-provider.tsx`**

Créer/vérifier qu'il contient :
```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

---

### 2. FIXER LE HEADER

**Fichier : `components/header.tsx`**

Remplacer les navLinks et supprimer le bouton "Démarrer" :

```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

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
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-widest">FACILE-IA</span>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  link.accent 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Le Lab */}
            <Link href="/lab">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-2">
                <FlaskConical className="w-4 h-4" />
                Le Lab
              </Button>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/lab"
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FlaskConical className="w-4 h-4" />
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

### 3. FIXER LE HERO AVEC LOGO ANIMÉ

**Fichier : `components/hero.tsx`**

Remplacer entièrement par :

```tsx
"use client"

import Link from "next/link"
import { Clock, Sparkles, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoHero } from "@/components/LogoHero"

const valueProps = [
  { icon: Clock, label: "+10h/semaine", desc: "de temps libéré" },
  { icon: Sparkles, label: "IA sur mesure", desc: "adaptée à votre métier" },
  { icon: Shield, label: "Sans engagement", desc: "résiliez quand vous voulez" },
]

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <span className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-8">
          Pôle Services PME
        </span>

        {/* Logo Animé */}
        <div className="h-28 md:h-40 mb-8">
          <LogoHero />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground italic mb-12 max-w-2xl mx-auto">
          « Gagner du temps pour ce qui compte vraiment. »
        </p>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {valueProps.map((prop, i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-border">
              <prop.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-semibold text-lg">{prop.label}</p>
              <p className="text-sm text-muted-foreground">{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="#services">
            <Button size="lg">Découvrir nos offres</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">Réserver un appel gratuit</Button>
          </Link>
        </div>

        {/* Lien Lab */}
        <Link 
          href="/lab" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          🔬 Découvrez notre Lab R&D →
        </Link>

      </div>
    </section>
  )
}
```

---

### 4. REFAIRE SERVICES AVEC LE VRAI CONTENU

**Fichier : `components/services.tsx`**

Remplacer par le Pack Sérénité + 6 outils + ROI + Pourquoi :

```tsx
"use client"

import { CheckCircle, DollarSign, FileText, Star, File, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tools = [
  { Icon: DollarSign, color: "bg-green-500", title: "Notes de Frais", desc: "OCR + IA" },
  { Icon: FileText, color: "bg-blue-500", title: "Devis Pro", desc: "Templates pro" },
  { Icon: Star, color: "bg-yellow-500", title: "Reputation IA", desc: "Réponses auto" },
  { Icon: File, color: "bg-orange-500", title: "PDF Pro", desc: "Fusion & signatures" },
  { Icon: Eye, color: "bg-purple-500", title: "Veille Pro", desc: "Intelligence concurrentielle" },
  { Icon: Users, color: "bg-red-500", title: "CRM Smart", desc: "Gestion auto clients" },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Pack Sérénité Numérique
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            L'IA qui travaille <span className="text-primary">pour vous</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            20 ans d'expertise Airbus Helicopters • Stack Python/Next.js/Claude
          </p>
        </div>

        {/* Prix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          
          {/* Installation */}
          <div className="p-8 bg-card rounded-2xl border border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">Installation unique</p>
            <p className="text-5xl font-bold text-primary mb-4">999€</p>
            <ul className="text-sm text-left space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                Setup technique complet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                Site vitrine professionnel
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                3 applications au choix
              </li>
            </ul>
          </div>

          {/* Abonnement */}
          <div className="p-8 bg-card rounded-2xl border-2 border-primary text-center relative">
            <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              RECOMMANDÉ
            </span>
            <p className="text-sm text-muted-foreground mb-2">Abonnement mensuel</p>
            <p className="text-5xl font-bold text-primary">
              29€<span className="text-lg font-normal text-muted-foreground">/mois</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 mb-4">Sans engagement</p>
            <ul className="text-sm text-left space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                Tous les outils IA inclus
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                Mises à jour automatiques
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                Support prioritaire
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Link href="#contact">
            <Button size="lg">Réserver un appel découverte →</Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">30 minutes gratuites, sans engagement</p>
        </div>

        {/* 6 Outils */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-4">
            Les <span className="text-primary">6 outils</span> disponibles
          </h3>
          <p className="text-muted-foreground text-center mb-10">
            Choisissez 3 applications adaptées à votre métier
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                  <tool.Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold">{tool.title}</p>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            💡 ROI Client : <span className="text-primary">Temps Gagné</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="p-8 bg-card rounded-2xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">AVANT</p>
              <p className="text-6xl font-bold text-muted-foreground">12h</p>
              <p className="text-muted-foreground">par semaine</p>
            </div>
            <div className="p-8 bg-card rounded-2xl border-2 border-green-500 text-center">
              <p className="text-sm text-green-500 mb-2">APRÈS ✅</p>
              <p className="text-6xl font-bold text-green-500">2h</p>
              <p className="text-green-500/80">par semaine</p>
            </div>
          </div>
          
          <div className="max-w-md mx-auto p-8 bg-green-500/10 rounded-2xl border border-green-500/30 text-center">
            <p className="text-5xl font-bold text-green-500 mb-2">83%</p>
            <p className="text-green-400">Réduction du temps administratif</p>
            <p className="text-sm text-green-400/60">≈ 520h économisées par an</p>
          </div>
        </div>

        {/* Pourquoi */}
        <div className="max-w-3xl mx-auto p-8 bg-orange-500 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-6">🎯 Pourquoi Facile-IA ?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Fiabilité Aéro</strong> : Rigueur Airbus Helicopters appliquée à vos outils digitaux
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Rapidité</strong> : POC livrés en jours, pas en mois
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Transparence</strong> : ROI immédiat et mesurable sur chaque outil
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
```

---

### 5. REFAIRE TESTIMONIALS

**Fichier : `components/testimonials.tsx`**

```tsx
"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    avatar: "🌸",
    name: "Marie Dupont",
    role: "Artisan Fleuriste",
    company: "Les Fleurs de Marie",
    text: "Grâce à Facile-IA, je ne passe plus mes dimanches à faire ma comptabilité. Les notes de frais sont traitées automatiquement. J'ai retrouvé du temps pour ma famille !",
  },
  {
    avatar: "🔧",
    name: "Jean-Pierre Martin",
    role: "Gérant",
    company: "Plomberie Martin & Fils",
    text: "Les relances d'impayés, c'était ma hantise. Maintenant l'IA s'en occupe avec le bon ton. Mes clients paient plus vite et je garde de bonnes relations.",
  },
  {
    avatar: "💅",
    name: "Sophie Leroy",
    role: "Gérante",
    company: "Salon Beauté & Zen",
    text: "La gestion des avis Google était chronophage. Facile-IA me propose des réponses parfaites en un clic. Ma note est passée de 4.2 à 4.8 étoiles !",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg">Des artisans et PME comme vous</p>
        </div>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-card rounded-2xl border border-border flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-3xl flex-shrink-0">
                {t.avatar}
              </div>
              <div className="flex-1">
                <Quote className="w-6 h-6 text-primary/30 mb-3" />
                <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role} • <span className="text-primary">{t.company}</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground italic">
          * Témoignages de démonstration
        </p>
      </div>
    </section>
  )
}
```

---

### 6. REFAIRE CONTACT (Timeline + FAQ)

**Fichier : `components/contact.tsx`**

```tsx
"use client"

import { useState } from "react"
import { Phone, Settings, Rocket, CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  { icon: Phone, label: "Appel découverte", accent: "30min gratuit", desc: "On échange sur vos besoins" },
  { icon: Settings, label: "Installation", accent: "1 semaine max", desc: "Site + outils IA configurés" },
  { icon: Rocket, label: "Liberté retrouvée", accent: "+10h/semaine", desc: "Vous vivez, l'IA travaille" },
]

const faq = [
  { q: "Pourquoi 29€/mois ?", a: "Couvre les APIs IA (OpenAI, Google). Moins cher qu'un Netflix, mais infiniment plus utile pour votre business." },
  { q: "Sans engagement ?", a: "Oui, vous arrêtez quand vous voulez. Pas de préavis, pas de frais cachés." },
  { q: "Le site vitrine m'appartient ?", a: "Oui, 100%. Même si vous arrêtez l'abonnement, votre site reste à vous." },
  { q: "Support inclus ?", a: "Oui, IA 24/7 + accès direct à un ingénieur si besoin. On ne vous laisse jamais seul." },
  { q: "Combien de temps pour l'installation ?", a: "1 semaine maximum. Votre site et vos outils IA sont prêts, formation incluse." },
]

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à <span className="text-primary">gagner du temps</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">En 3 étapes simples</p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20 relative">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-primary/30" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center z-10">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <p className="font-semibold text-lg">{step.label}</p>
              <p className="text-primary text-sm font-medium">{step.accent}</p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-xl mx-auto p-10 bg-card rounded-3xl border-2 border-primary text-center mb-20">
          <p className="text-5xl font-bold text-primary mb-2">
            29€<span className="text-lg font-normal text-muted-foreground">/mois</span>
          </p>
          <p className="text-muted-foreground mb-8">
            L'IA qui travaille pour vous, pendant que vous vivez
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="mailto:contact@facile-ia.fr">
              <Button size="lg">Démarrer maintenant</Button>
            </Link>
            <Link href="mailto:contact@facile-ia.fr">
              <Button variant="outline" size="lg">Réserver un appel gratuit</Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Réponse sous 48h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Support IA 24/7
            </span>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Questions <span className="text-primary">fréquentes</span>
          </h3>
          
          <div className="max-w-2xl mx-auto space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex justify-between items-center text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
```

---

### 7. SUPPRIMER PRICING ET FOOTER (optionnel)

**Fichier : `app/page.tsx`**

Supprimer les imports de Pricing et Footer si pas nécessaires :

```tsx
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
```

---

### 8. INSTALLER NEXT-THEMES (si pas déjà fait)

```bash
pnpm add next-themes
```

---

## CHECKLIST FINALE

- [ ] Theme toggle fonctionne (dark ↔ light)
- [ ] Logo animé apparaît dans le Hero
- [ ] Header avec bons liens (Facile-IA, Offres, Témoignages, Contact, Le Lab)
- [ ] Hero avec badge orange + logo + tagline + 3 value props
- [ ] Services avec 999€ + 29€/mois + 6 outils + ROI + Pourquoi
- [ ] Testimonials avec Marie/Jean-Pierre/Sophie
- [ ] Contact avec timeline + CTA + FAQ
- [ ] Bouton "Démarrer" supprimé du header
