# PROMPT CURSOR - Intégrer LogoHero dans Hero + Header

## OBJECTIF
Intégrer le logo animé `LogoHero.tsx` à deux endroits :
1. Dans le Hero (en grand, à la place du H1)
2. Dans le Header (en petit, à la place du logo actuel)

Aucune autre modification.

---

## MODIFICATION 1 : `components/hero.tsx`

Ajouter l'import :
```tsx
import { LogoHero } from "@/components/LogoHero"
```

Remplacer le H1 :
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
  Solutions d'IA pour transformer votre entreprise
</h1>
```

Par :
```tsx
<div className="h-24 sm:h-32 md:h-40 w-full max-w-3xl mx-auto mb-6">
  <LogoHero />
</div>
```

---

## MODIFICATION 2 : `components/header.tsx`

Ajouter l'import :
```tsx
import { LogoHero } from "@/components/LogoHero"
```

Remplacer le logo actuel :
```tsx
<Link href="/" className="flex items-center gap-2">
  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
    <span className="text-accent-foreground font-bold text-lg">F</span>
  </div>
  <span className="font-bold text-lg hidden sm:inline">FACILE-IA</span>
</Link>
```

Par :
```tsx
<Link href="/" className="flex items-center">
  <div className="h-8 w-32 sm:w-40">
    <LogoHero />
  </div>
</Link>
```

---

## RÉSUMÉ

| Fichier | Modification |
|---------|--------------|
| `hero.tsx` | Ajouter import + remplacer H1 par LogoHero (grand) |
| `header.tsx` | Ajouter import + remplacer logo par LogoHero (petit) |

Aucun autre changement (pas de liens, pas de contenu, pas de boutons).
