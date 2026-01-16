# 🔮 PROMPT CURSOR - Intégration Boutons Liquid Glass avec Effet Glow

## Contexte
Projet FACILE-IA utilisant Next.js 16, React 19, Tailwind CSS 4, et shadcn/ui.
Couleur accent : `#6366f1` (indigo)
Support dark/light mode avec next-themes.

## Objectif
Créer un système de boutons "Liquid Glass" avec effet de lumière (glow) au survol, intégré de manière homogène dans tout le projet.

---

## ÉTAPE 1 : Ajouter les styles CSS dans `app/globals.css`

Ajoute ces styles APRÈS le block `@layer base` existant :

```css
/* ========================================
   LIQUID GLASS BUTTON STYLES
   ======================================== */

@layer components {
  /* Variables pour le liquid glass */
  :root {
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.15);
    --glass-glow: rgba(99, 102, 241, 0.5);
    --glass-glow-strong: rgba(99, 102, 241, 0.8);
    --glass-shine: rgba(255, 255, 255, 0.2);
    --glass-blur: 12px;
  }

  .dark {
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-glow: rgba(99, 102, 241, 0.6);
    --glass-glow-strong: rgba(99, 102, 241, 0.9);
    --glass-shine: rgba(255, 255, 255, 0.15);
  }

  /* Base Liquid Glass Button */
  .liquid-glass-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--foreground);
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform, box-shadow;
  }

  /* Effet de brillance (shine) */
  .liquid-glass-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--glass-shine) 0%,
      transparent 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  /* Effet de glow externe */
  .liquid-glass-btn::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      var(--glass-glow) 0%,
      transparent 50%,
      var(--glass-glow) 100%
    );
    opacity: 0;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.3s ease;
  }

  /* Hover : Glow + Shine + Scale */
  .liquid-glass-btn:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 0 20px var(--glass-glow),
      0 0 40px var(--glass-glow),
      inset 0 1px 0 var(--glass-shine);
    border-color: var(--glass-glow);
    background: rgba(99, 102, 241, 0.15);
  }

  .liquid-glass-btn:hover::before {
    opacity: 1;
  }

  .liquid-glass-btn:hover::after {
    opacity: 1;
  }

  /* Focus visible */
  .liquid-glass-btn:focus-visible {
    outline: none;
    box-shadow: 
      0 0 0 3px var(--background),
      0 0 0 5px var(--glass-glow);
  }

  /* Active state */
  .liquid-glass-btn:active {
    transform: translateY(0) scale(0.98);
  }

  /* Disabled state */
  .liquid-glass-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .liquid-glass-btn:disabled:hover {
    box-shadow: none;
    background: var(--glass-bg);
    border-color: var(--glass-border);
  }

  /* ========================================
     VARIANTES DE TAILLE
     ======================================== */

  .liquid-glass-btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: 0.5rem;
  }

  .liquid-glass-btn-lg {
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 1rem;
  }

  .liquid-glass-btn-icon {
    padding: 0.75rem;
    aspect-ratio: 1;
  }

  /* ========================================
     VARIANTE PRIMAIRE (plus visible)
     ======================================== */

  .liquid-glass-btn-primary {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
    color: var(--foreground);
  }

  .liquid-glass-btn-primary:hover {
    background: rgba(99, 102, 241, 0.35);
    box-shadow: 
      0 0 25px var(--glass-glow-strong),
      0 0 50px var(--glass-glow),
      inset 0 1px 0 var(--glass-shine);
  }

  /* ========================================
     VARIANTE OUTLINE (subtile)
     ======================================== */

  .liquid-glass-btn-outline {
    background: transparent;
    border-color: var(--glass-border);
  }

  .liquid-glass-btn-outline:hover {
    background: var(--glass-bg);
  }

  /* ========================================
     ANIMATION PULSE (optionnelle)
     ======================================== */

  @keyframes glass-pulse {
    0%, 100% {
      box-shadow: 0 0 10px var(--glass-glow);
    }
    50% {
      box-shadow: 0 0 20px var(--glass-glow-strong), 0 0 30px var(--glass-glow);
    }
  }

  .liquid-glass-btn-pulse:hover {
    animation: glass-pulse 2s ease-in-out infinite;
  }
}
```

---

## ÉTAPE 2 : Créer le composant `components/ui/liquid-glass-button.tsx`

```tsx
"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'primary' | 'outline'
  pulse?: boolean
}

const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, asChild = false, size = 'default', variant = 'default', pulse = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    const sizeClasses = {
      default: '',
      sm: 'liquid-glass-btn-sm',
      lg: 'liquid-glass-btn-lg',
      icon: 'liquid-glass-btn-icon',
    }

    const variantClasses = {
      default: '',
      primary: 'liquid-glass-btn-primary',
      outline: 'liquid-glass-btn-outline',
    }

    return (
      <Comp
        className={cn(
          'liquid-glass-btn',
          sizeClasses[size],
          variantClasses[variant],
          pulse && 'liquid-glass-btn-pulse',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
LiquidGlassButton.displayName = 'LiquidGlassButton'

export { LiquidGlassButton }
```

---

## ÉTAPE 3 : Ajouter une variante au Button existant `components/ui/button.tsx`

Modifie le fichier `button.tsx` pour ajouter la variante `liquidGlass` :

Dans `buttonVariants`, ajoute dans `variants.variant` :

```tsx
variant: {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: '...',
  outline: '...',
  secondary: '...',
  ghost: '...',
  link: '...',
  // AJOUTER CETTE LIGNE :
  liquidGlass: 'liquid-glass-btn liquid-glass-btn-primary',
},
```

---

## ÉTAPE 4 : Migrer les boutons dans `components/header.tsx`

Remplacer :
```tsx
<Button variant="default" className="hidden sm:inline-flex" asChild>
  <Link href="/contact">Réserver un appel</Link>
</Button>
```

Par :
```tsx
<Button variant="liquidGlass" className="hidden sm:inline-flex" asChild>
  <Link href="/contact">Réserver un appel</Link>
</Button>
```

---

## ÉTAPE 5 : Migrer les boutons dans `components/hero.tsx`

Remplacer :
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Link href="/#contact">
    <Button size="lg" className="w-full sm:w-auto">
      Nous contacter
    </Button>
  </Link>
  <Link href="/lab">
    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
      Découvrir nos projets
      <ArrowRight className="ml-2" size={20} />
    </Button>
  </Link>
</div>
```

Par :
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Link href="/#contact">
    <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto">
      Nous contacter
    </Button>
  </Link>
  <Link href="/lab">
    <Button variant="liquidGlass" size="lg" className="w-full sm:w-auto liquid-glass-btn-outline">
      Découvrir nos projets
      <ArrowRight className="ml-2" size={20} />
    </Button>
  </Link>
</div>
```

---

## ÉTAPE 6 : Migrer les boutons dans `components/contact.tsx`

Remplacer :
```tsx
<Button size="lg">
  <Calendar className="w-5 h-5 mr-2" />
  Réserver un appel
</Button>
```

Par :
```tsx
<Button variant="liquidGlass" size="lg">
  <Calendar className="w-5 h-5 mr-2" />
  Réserver un appel
</Button>
```

---

## ÉTAPE 7 : Migrer les boutons dans `app/contact/page.tsx`

Remplacer tous les `<Button>` par `<Button variant="liquidGlass">` :

1. Bouton "Réserver un appel" principal :
```tsx
<Button variant="liquidGlass" size="lg">
  <Calendar className="w-5 h-5 mr-2" />
  Réserver un appel
</Button>
```

2. Bouton "Envoyer un WhatsApp" :
```tsx
<Button variant="liquidGlass" size="lg" className="liquid-glass-btn-outline">
  <MessageCircle className="w-5 h-5 mr-2" />
  Envoyer un WhatsApp
</Button>
```

---

## ÉTAPE 8 : Migrer les boutons dans `components/pricing.tsx`

Remplacer :
```tsx
<Button variant={plan.highlighted ? "default" : "outline"} className="w-full mb-8">
  Commencer
</Button>
```

Par :
```tsx
<Button 
  variant="liquidGlass" 
  className={cn(
    "w-full mb-8",
    plan.highlighted ? "liquid-glass-btn-primary" : "liquid-glass-btn-outline"
  )}
>
  Commencer
</Button>
```

N'oublie pas d'importer `cn` en haut du fichier :
```tsx
import { cn } from "@/lib/utils"
```

---

## RÉSUMÉ DES FICHIERS À MODIFIER

| Fichier | Action |
|---------|--------|
| `app/globals.css` | Ajouter styles liquid glass |
| `components/ui/liquid-glass-button.tsx` | Créer nouveau composant |
| `components/ui/button.tsx` | Ajouter variante `liquidGlass` |
| `components/header.tsx` | Migrer bouton CTA |
| `components/hero.tsx` | Migrer 2 boutons |
| `components/contact.tsx` | Migrer 1 bouton |
| `components/pricing.tsx` | Migrer 3 boutons + import cn |
| `app/contact/page.tsx` | Migrer 2 boutons |

---

## BONNES PRATIQUES APPLIQUÉES (Vercel React Best Practices)

1. **Performance** : Utilisation de `will-change` pour optimiser les animations GPU
2. **Accessibilité** : États `:focus-visible` et `:disabled` correctement stylés
3. **Progressive Enhancement** : Fallback si `backdrop-filter` non supporté
4. **Réutilisabilité** : Composant avec variantes via props
5. **Dark/Light Mode** : Variables CSS adaptées aux deux thèmes
6. **Bundle Size** : Pas de dépendance JS supplémentaire, CSS pur

---

## TEST

Après les modifications, lance `npm run dev` et vérifie :
- [ ] Effet glow au hover sur tous les boutons
- [ ] Transitions fluides
- [ ] Bon rendu en dark mode ET light mode
- [ ] États focus, active et disabled fonctionnels
- [ ] Pas d'erreur console

