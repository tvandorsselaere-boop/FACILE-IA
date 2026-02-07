# FACILE-IA — Instructions Claude Code

## Projet
Site web et plateforme de l'agence digitale Facile-IA (facile-ia.fr).
- **Stack** : Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, Three.js
- **Déploiement** : Vercel
- **Propriétaire** : Thomas VAN DORSSELAERE, micro-entrepreneur, Puyloubier (PACA)

## Skills Facile-IA

Ce projet dispose de **27 skills spécialisées** dans `.claude/skills/`. Elles sont organisées par domaine et contiennent chacune un fichier `SKILL.md` avec la mission, les règles, les templates et les commandes.

### Détection automatique
Avant de répondre à une demande, **vérifie toujours** si une skill existante peut apporter une expertise pertinente. Scan `.claude/skills/` et charge le `SKILL.md` correspondant.

### Catégories de skills

| Catégorie | Skills | Usage |
|-----------|--------|-------|
| **core/** | `skills-manager`, `strategic-advisor` | Gestion des skills, stratégie globale de Tom |
| **technique/** | `frontend-design`, `backend-data`, `integrations`, `devops` | Dev frontend/backend, APIs, déploiement |
| **marketing/** | `content-creator`, `seo-auditor`, `page-cro` | Contenu, SEO, conversion |
| **commercial/** | `lead-generator`, `closer` | Génération de leads, closing |
| **finance/** | `business-analyst`, `comptabilite` | Analyse financière, comptabilité |
| **produits/** | `chef-produit`, `frais-auto`, `devis-pro`, `reputation-ia`, `pdf-pro`, `veille-pro`, `crm-smart`, `social-pro`, `doc-pro` | Produits Facile-IA |
| **support/** | `onboarding`, `tutos-youtube`, `unia-chatbot` | Onboarding, tutos, chatbot |
| **lab/** | `feasy`, `wolfedge` | Projets R&D |

### Comment utiliser les skills
- L'utilisateur peut appeler une skill avec `@nom-de-skill` (ex: `@frontend-design`, `@strategic-advisor`)
- Quand une skill est invoquée, **lis le fichier `.claude/skills/<catégorie>/<nom>/SKILL.md`** et applique ses règles
- Pour les tâches complexes, consulte `@skills-manager` pour savoir quelle skill mobiliser
- Les skills suivent le format : Mission → Règles → Commandes → Métriques

### Règles d'activation
1. Si le message mentionne `@skill-name` → charge et applique cette skill
2. Si la tâche relève clairement d'un domaine couvert → **propose d'utiliser la skill** correspondante
3. Pour les décisions stratégiques → consulte `@strategic-advisor`
4. Pour les tâches techniques front → consulte `@frontend-design`
5. Pour le SEO ou le contenu → consulte `@content-creator` ou `@seo-auditor`

## Conventions de code
- Design system : glassmorphism / liquid glass (voir `globals.css`)
- Composants UI : Radix UI + variants dans `components/ui/`
- Animations : Framer Motion
- Langue du site : Français
- Thème par défaut : dark mode
