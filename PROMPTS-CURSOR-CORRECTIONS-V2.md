# 🔧 PROMPTS CURSOR - CORRECTIONS V2

> **Date:** 16 janvier 2026  
> **Suite aux tests**

---

## PROMPT 1 - HEADER : GARDER LOGO 3D ET LE REDIMENSIONNER

```
PROBLÈME: Le logo 3D est remplacé par du texte quand on scroll. On veut garder le logo 3D et juste le redimensionner.

FICHIER: /components/header.tsx

MODIFICATIONS:

1. SUPPRIMER le composant LogoText() (lignes 11-16)

2. SUPPRIMER le AnimatePresence et la logique conditionnelle isScrolled pour le logo

3. REMPLACER toute la section logo par :

<Link href="/" className="flex items-center">
  <div 
    className={`transition-all duration-300 ease-in-out ${
      isScrolled 
        ? "h-10 w-[180px]" 
        : "h-20 w-[450px]"
    }`}
  >
    <LogoHero />
  </div>
</Link>

NOTE: Le LogoHero a un handleResize qui écoute les changements de taille du container. Le canvas Three.js devrait s'adapter automatiquement.

CODE COMPLET de la section logo à remplacer (lignes 52-72 environ) :

{/* Logo : toujours 3D, juste redimensionné */}
<Link href="/" className="flex items-center">
  <div 
    className={`transition-all duration-300 ease-in-out ${
      isScrolled 
        ? "h-10 w-[180px]" 
        : "h-20 w-[450px]"
    }`}
  >
    <LogoHero />
  </div>
</Link>

SUPPRIMER aussi l'import AnimatePresence si plus utilisé ailleurs.
```

---

## PROMPT 2 - SPOTLIGHT : RÉDUIRE LA TAILLE

```
PROBLÈME: Le spotlight est trop grand (800px). Le réduire pour qu'il soit plus discret.

FICHIER: /components/spotlight-effect.tsx

MODIFICATION:

Ligne 17, changer le radial-gradient de 800px à 400px :

AVANT:
`radial-gradient(800px circle at ${x}px ${y}px, var(--spotlight-color), transparent 40%)`

APRÈS:
`radial-gradient(400px circle at ${x}px ${y}px, var(--spotlight-color), transparent 50%)`

OPTIONNEL - Réduire aussi l'opacité dans globals.css :

Dans la section :root du Modern SaaS Design System, changer :
--spotlight-color: rgba(99, 102, 241, 0.35);

Par :
--spotlight-color: rgba(99, 102, 241, 0.25);

Et pour le dark mode :
--spotlight-color: rgba(99, 102, 241, 0.15);
```

---

## PROMPT 3 - PAGE CONTACT : UNIFORMISER L'ESTHÉTIQUE

```
PROBLÈME: La page contact n'a pas les mêmes effets visuels que le reste du site (cards, animations, spotlight).

FICHIER: /app/contact/page.tsx

MODIFICATIONS:

1. AJOUTER les imports en haut :
import { motion } from "framer-motion"
import { SpotlightEffect } from "@/components/spotlight-effect"

2. AJOUTER le SpotlightEffect après <main> :
<main className="bg-background min-h-screen relative">
  <SpotlightEffect />
  ...

3. AJOUTER le dot-grid background dans la section principale :
<section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
  {/* Dot Grid Background */}
  <div className="absolute inset-0 dot-grid opacity-20 z-0" />
  
  <div className="relative z-10 max-w-4xl mx-auto">
    ...

4. ANIMER le titre et sous-titre :
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
>
  Parlons de votre projet
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-xl text-muted-foreground mb-8 text-balance"
>
  ...
</motion.p>

5. TRANSFORMER les cards avec card-hover-glow :

Card Calendly (ligne ~50) :
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-16 bg-secondary rounded-lg border border-border overflow-hidden card-hover-glow"
>

Card Contact Direct (dans la grid) :
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="p-8 bg-secondary rounded-lg border border-border card-hover-glow"
>
  <h2 className="text-3xl font-bold mb-4">Contact Direct</h2>
  ...
</motion.div>

Card Réseaux Sociaux :
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.1 }}
  className="p-8 bg-secondary rounded-lg border border-border card-hover-glow"
>
  <h2 className="text-3xl font-bold mb-4">Suivez-nous</h2>
  ...
</motion.div>

Card Disponibilités :
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  whileHover={{ y: -5 }}
  className="mt-16 p-8 bg-secondary rounded-lg border border-border card-hover-glow"
>
  <h2 className="text-2xl font-bold mb-4">Disponibilités</h2>
  ...
</motion.div>

6. AJOUTER animation hover sur les liens contact :
Pour chaque lien (email, phone, whatsapp), ajouter le style group et underline :

<a
  href={`mailto:${contactInfo.email}`}
  className="flex gap-3 items-center text-foreground hover:text-accent transition-colors group relative"
>
  <Mail size={20} className="text-accent" />
  <span>{contactInfo.email}</span>
  <span className="absolute bottom-0 left-8 w-0 h-0.5 bg-accent group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
</a>

7. ANIMER le bouton CTA avec whileHover :
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
    <Button variant="liquidGlass" size="lg" className="liquid-glass-btn-primary">
      <Calendar className="w-5 h-5 mr-2" />
      Réserver un appel
    </Button>
  </a>
</motion.div>

8. CTA Final en bas - même traitement :
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16 text-center"
>
  <h2 className="text-3xl font-bold mb-6">Une question rapide ?</h2>
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Bonjour, j'ai une question rapide.`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="liquidGlass" size="lg" className="liquid-glass-btn-outline">
        <MessageCircle className="w-5 h-5 mr-2" />
        Envoyer un WhatsApp
      </Button>
    </a>
  </motion.div>
</motion.div>
```

---

## 📋 ORDRE D'APPLICATION

1. **PROMPT 2** - Spotlight plus petit (rapide)
2. **PROMPT 1** - Header logo redimensionné
3. **PROMPT 3** - Page contact esthétique

---

## ⚠️ NOTES

- Le logo 3D Three.js devrait s'adapter automatiquement grâce au resize handler
- Si le logo 3D est trop petit pour être lisible en h-10, augmenter à h-12 et w-[220px]
- Tester le spotlight avec les nouvelles valeurs, ajuster si trop/pas assez visible

---

*Prompts générés le 16 janvier 2026*
