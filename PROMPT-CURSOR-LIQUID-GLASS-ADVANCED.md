# 🍎 PROMPT CURSOR - Effets Liquid Glass Avancés (Style Apple iOS 26)

## Contexte
Ce prompt est un complément au `PROMPT-CURSOR-LIQUID-GLASS-BUTTONS.md` principal.
Il ajoute des effets premium inspirés du design Liquid Glass d'Apple iOS 26 / visionOS.

---

## EFFETS AVANCÉS À AJOUTER DANS `app/globals.css`

Ajoute ces styles APRÈS les styles de base liquid glass :

```css
/* ========================================
   EFFETS AVANCÉS LIQUID GLASS
   Style Apple iOS 26 / visionOS
   ======================================== */

/* ----------------------------------------
   1. REFLET ANIMÉ (Shine sweep)
   ---------------------------------------- */
@keyframes glass-shine-sweep {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(200%) rotate(45deg);
  }
}

.liquid-glass-btn-shine::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: translateX(-100%) rotate(45deg);
  pointer-events: none;
}

.liquid-glass-btn-shine:hover::before {
  animation: glass-shine-sweep 0.8s ease-out;
}

/* ----------------------------------------
   2. EFFET SPECTRAL (Rainbow glow)
   ---------------------------------------- */
@keyframes glass-spectral {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.liquid-glass-btn-spectral:hover {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.2),
    rgba(236, 72, 153, 0.2),
    rgba(59, 130, 246, 0.2)
  );
  box-shadow: 
    0 0 20px rgba(99, 102, 241, 0.5),
    0 0 40px rgba(236, 72, 153, 0.3),
    0 0 60px rgba(59, 130, 246, 0.2);
}

.liquid-glass-btn-spectral:hover::after {
  animation: glass-spectral 3s linear infinite;
}

/* ----------------------------------------
   3. EFFET DEPTH (3D avec perspective)
   ---------------------------------------- */
.liquid-glass-btn-depth {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.liquid-glass-btn-depth:hover {
  transform: translateY(-4px) rotateX(5deg);
  box-shadow: 
    0 10px 30px -10px var(--glass-glow),
    0 20px 50px -20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 var(--glass-shine),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

/* ----------------------------------------
   4. EFFET MORPH (Border animée)
   ---------------------------------------- */
@keyframes glass-border-morph {
  0%, 100% {
    border-radius: 0.75rem;
  }
  25% {
    border-radius: 1rem 0.5rem 1rem 0.5rem;
  }
  50% {
    border-radius: 0.5rem 1rem 0.5rem 1rem;
  }
  75% {
    border-radius: 1rem 0.5rem 1rem 0.5rem;
  }
}

.liquid-glass-btn-morph:hover {
  animation: glass-border-morph 2s ease-in-out infinite;
}

/* ----------------------------------------
   5. EFFET MAGNETIC (Suit le curseur)
   Nécessite JavaScript - voir composant
   ---------------------------------------- */
.liquid-glass-btn-magnetic {
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
}

/* ----------------------------------------
   6. EFFET RIPPLE (Onde au clic)
   ---------------------------------------- */
.liquid-glass-btn-ripple {
  position: relative;
  overflow: hidden;
}

.liquid-glass-btn-ripple .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: scale(0);
  animation: ripple-effect 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* ----------------------------------------
   7. EFFET GLOW BREATHING
   ---------------------------------------- */
@keyframes glass-breathing {
  0%, 100% {
    box-shadow: 
      0 0 10px var(--glass-glow),
      inset 0 1px 0 var(--glass-shine);
  }
  50% {
    box-shadow: 
      0 0 30px var(--glass-glow-strong),
      0 0 60px var(--glass-glow),
      inset 0 1px 0 var(--glass-shine);
  }
}

.liquid-glass-btn-breathing {
  animation: glass-breathing 3s ease-in-out infinite;
}

/* ----------------------------------------
   8. EFFET FROSTED INTENSE
   ---------------------------------------- */
.liquid-glass-btn-frosted {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.dark .liquid-glass-btn-frosted {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.liquid-glass-btn-frosted:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
}

/* ----------------------------------------
   9. GROUPE DE BOUTONS GLASS
   ---------------------------------------- */
.liquid-glass-btn-group {
  display: inline-flex;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  padding: 0.25rem;
  gap: 0.25rem;
}

.liquid-glass-btn-group .liquid-glass-btn {
  background: transparent;
  border: none;
  backdrop-filter: none;
}

.liquid-glass-btn-group .liquid-glass-btn:hover {
  background: rgba(99, 102, 241, 0.2);
}

.liquid-glass-btn-group .liquid-glass-btn.active {
  background: rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 10px var(--glass-glow);
}
```

---

## COMPOSANT AVANCÉ AVEC EFFET MAGNETIC + RIPPLE

Crée `components/ui/liquid-glass-button-advanced.tsx` :

```tsx
"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface LiquidGlassButtonAdvancedProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'primary' | 'outline' | 'frosted'
  effect?: 'none' | 'shine' | 'spectral' | 'depth' | 'morph' | 'breathing' | 'magnetic' | 'ripple'
}

const LiquidGlassButtonAdvanced = React.forwardRef<HTMLButtonElement, LiquidGlassButtonAdvancedProps>(
  ({ className, asChild = false, size = 'default', variant = 'default', effect = 'none', children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const Comp = asChild ? Slot : 'button'
    
    // Effet Magnetic
    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (effect !== 'magnetic' || !buttonRef.current) return
      
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      buttonRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
    }, [effect])

    const handleMouseLeave = React.useCallback(() => {
      if (effect !== 'magnetic' || !buttonRef.current) return
      buttonRef.current.style.transform = 'translate(0, 0)'
    }, [effect])

    // Effet Ripple
    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (effect !== 'ripple' || !buttonRef.current) return
      
      const rect = buttonRef.current.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`
      ripple.className = 'ripple'
      
      buttonRef.current.appendChild(ripple)
      
      setTimeout(() => ripple.remove(), 600)
    }, [effect])

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
      frosted: 'liquid-glass-btn-frosted',
    }

    const effectClasses = {
      none: '',
      shine: 'liquid-glass-btn-shine',
      spectral: 'liquid-glass-btn-spectral',
      depth: 'liquid-glass-btn-depth',
      morph: 'liquid-glass-btn-morph',
      breathing: 'liquid-glass-btn-breathing',
      magnetic: 'liquid-glass-btn-magnetic',
      ripple: 'liquid-glass-btn-ripple',
    }

    // Combiner les refs
    const combinedRef = React.useCallback((node: HTMLButtonElement) => {
      buttonRef.current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }, [ref])

    return (
      <Comp
        className={cn(
          'liquid-glass-btn',
          sizeClasses[size],
          variantClasses[variant],
          effectClasses[effect],
          className
        )}
        ref={combinedRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          handleClick(e)
          props.onClick?.(e)
        }}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
LiquidGlassButtonAdvanced.displayName = 'LiquidGlassButtonAdvanced'

export { LiquidGlassButtonAdvanced }
```

---

## EXEMPLES D'UTILISATION

```tsx
import { LiquidGlassButtonAdvanced } from '@/components/ui/liquid-glass-button-advanced'

// Effet shine (reflet animé)
<LiquidGlassButtonAdvanced effect="shine" variant="primary">
  Réserver un appel
</LiquidGlassButtonAdvanced>

// Effet spectral (rainbow glow)
<LiquidGlassButtonAdvanced effect="spectral">
  Découvrir
</LiquidGlassButtonAdvanced>

// Effet depth (3D)
<LiquidGlassButtonAdvanced effect="depth" size="lg">
  En savoir plus
</LiquidGlassButtonAdvanced>

// Effet magnetic (suit le curseur)
<LiquidGlassButtonAdvanced effect="magnetic" variant="frosted">
  Contactez-nous
</LiquidGlassButtonAdvanced>

// Effet ripple (onde au clic)
<LiquidGlassButtonAdvanced effect="ripple" variant="primary">
  Commencer
</LiquidGlassButtonAdvanced>

// Combinaison avec asChild pour Link
<LiquidGlassButtonAdvanced effect="shine" variant="primary" asChild>
  <Link href="/contact">Réserver</Link>
</LiquidGlassButtonAdvanced>
```

---

## GROUPE DE BOUTONS GLASS

```tsx
// Groupe de boutons type segmented control
<div className="liquid-glass-btn-group">
  <button className="liquid-glass-btn active">Mensuel</button>
  <button className="liquid-glass-btn">Annuel</button>
</div>
```

---

## RECOMMANDATIONS D'USAGE

| Effet | Usage recommandé |
|-------|------------------|
| `shine` | CTA principal, boutons premium |
| `spectral` | Pages créatives, showcases |
| `depth` | Boutons importants, hero sections |
| `morph` | Éléments ludiques, pages produit |
| `breathing` | Attirer l'attention, boutons "en attente" |
| `magnetic` | Éléments interactifs, UX premium |
| `ripple` | Material Design feel, confirmations |
| `frosted` | Cards, overlays, navigation |

---

## PERFORMANCE TIPS

1. **Limiter les effets simultanés** : Max 2-3 boutons avec effets avancés par page
2. **Désactiver sur mobile** : Les effets `magnetic` et `spectral` peuvent être lourds
3. **Utiliser `will-change` avec parcimonie** : Déjà inclus dans les styles de base
4. **Tester sur appareils bas de gamme** : `backdrop-filter` peut être coûteux

```tsx
// Exemple : désactiver effect sur mobile
import { useMediaQuery } from '@/hooks/use-media-query'

const isMobile = useMediaQuery('(max-width: 768px)')

<LiquidGlassButtonAdvanced 
  effect={isMobile ? 'none' : 'shine'}
>
  Bouton adaptatif
</LiquidGlassButtonAdvanced>
```

---

## CONCLUSION

Ces effets avancés permettent de créer une expérience premium style Apple.
Utilise-les avec parcimonie pour les éléments clés de l'interface.

