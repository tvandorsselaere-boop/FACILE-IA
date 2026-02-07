# Guide de lancement — Weekend Facile-IA

Checklist des comptes à créer et actions à mener pour être opérationnel et joignable.

---

## 1. Email professionnel — thomas@facile-ia.fr

Tu as le nom de domaine `facile-ia.fr`. Il faut maintenant activer une boîte mail dessus.

**Options :**
- **Option A — OVH Mail (si ton domaine est chez OVH)** : Va dans ton espace client OVH > Emails > Créer une adresse email `thomas@facile-ia.fr`. Inclus dans la plupart des hébergements OVH.
- **Option B — Google Workspace** (~6€/mois) : Va sur [workspace.google.com](https://workspace.google.com), achète le plan Business Starter, ajoute ton domaine et crée `thomas@facile-ia.fr`. Avantage : Gmail pro + Google Drive + Google Meet.
- **Option C — Zoho Mail (gratuit pour 1 user)** : [zoho.com/mail](https://www.zoho.com/mail/). Bonne alternative gratuite.

**Action** : Quel que soit le choix, il faudra ajouter des enregistrements DNS (MX, SPF, DKIM) chez ton registrar (OVH, Gandi…). Le fournisseur de mail te guidera pas à pas.

---

## 2. WhatsApp Business

1. Télécharge **WhatsApp Business** (app séparée de WhatsApp perso) sur ton téléphone.
2. Inscris-toi avec ton numéro **06 10 02 64 50**.
3. Configure ton profil :
   - **Nom** : Facile-IA
   - **Catégorie** : Services informatiques / Agence digitale
   - **Description** : Agence digitale augmentée — Solutions IA pour artisans, indépendants et PME en PACA
   - **Adresse** : Puyloubier, France
   - **Email** : thomas@facile-ia.fr
   - **Site web** : https://facile-ia.fr
4. Configure un **message d'accueil automatique** :
   > Bonjour ! Merci de contacter Facile-IA. Nous vous répondons dans les plus brefs délais. Pour un échange rapide, n'hésitez pas à préciser votre besoin !
5. Configure les **horaires d'ouverture** et un **message d'absence**.

---

## 3. Google Business Profile (fiche Google)

Indispensable pour apparaître sur Google Maps et dans les recherches locales.

1. Va sur [business.google.com](https://business.google.com).
2. Clique sur **Gérer maintenant**.
3. Entre le nom **Facile-IA**.
4. Catégorie : **Consultant en informatique** ou **Agence web**.
5. Adresse : Puyloubier (tu peux choisir de ne montrer que la ville, pas l'adresse exacte).
6. Numéro : 06 10 02 64 50.
7. Site web : https://facile-ia.fr
8. Google enverra un code de vérification (par courrier ou téléphone).
9. Une fois vérifié, ajoute :
   - Des photos (logo, bureau, ambiance de travail)
   - Tes horaires
   - Une description de tes services

---

## 4. Calendly (prise de RDV en ligne)

1. Va sur [calendly.com](https://calendly.com) et crée un compte gratuit.
2. Crée un type d'événement : **Appel découverte — 15 min**.
3. Paramètre :
   - Durée : 15 minutes
   - Disponibilités : tes créneaux habituels
   - Questions : Nom, email, "Décrivez brièvement votre besoin"
4. Ton lien Calendly sera du type : `calendly.com/facile-ia/decouverte`
5. Ce lien est déjà intégré dans la page Contact du site.

---

## 5. Réseaux sociaux (optionnel mais recommandé)

### LinkedIn (prioritaire pour le B2B)
1. Crée une **Page Entreprise** sur [linkedin.com/company/setup](https://www.linkedin.com/company/setup/new/)
2. Nom : **Facile-IA**
3. Ajoute le logo, une bannière, et la description :
   > Agence digitale augmentée — Solutions numériques et IA pour artisans, indépendants et PME en région PACA. Contact humain, tarifs accessibles.
4. Publie un premier post d'annonce de lancement.

### Instagram / Facebook (optionnel)
- Utile si tu cibles des artisans/commerçants locaux.
- Crée les comptes avec le handle `@facile.ia` si disponible.

---

## 6. Déploiement du site sur Vercel

Le site est déjà configuré pour Vercel. Pour déployer la page temporaire :

```bash
git add .
git commit -m "feat: page d'accueil temporaire Facile-IA"
git push
```

Vercel déploiera automatiquement si le repo est connecté.

### Connecter le domaine facile-ia.fr à Vercel :
1. Va sur [vercel.com](https://vercel.com) > ton projet > Settings > Domains.
2. Ajoute `facile-ia.fr` et `www.facile-ia.fr`.
3. Vercel te donnera des enregistrements DNS à ajouter chez ton registrar :
   - Type `A` : `76.76.21.21`
   - Type `CNAME` pour `www` : `cname.vercel-dns.com`
4. Attends la propagation DNS (quelques minutes à 24h).

---

## 7. Récapitulatif — Ordre de priorité

| # | Action | Temps estimé | Priorité |
|---|--------|-------------|----------|
| 1 | WhatsApp Business | 10 min | Immédiat |
| 2 | Déployer le site + domaine Vercel | 20 min | Immédiat |
| 3 | Email thomas@facile-ia.fr | 30 min | Ce weekend |
| 4 | Google Business Profile | 15 min | Ce weekend |
| 5 | Calendly | 15 min | Ce weekend |
| 6 | Page LinkedIn | 20 min | Semaine prochaine |
| 7 | Instagram / Facebook | 15 min | Optionnel |

---

## 8. Pour restaurer le site complet plus tard

Quand tu seras prêt à passer au site complet, ouvre `app/page.tsx` et :
1. Décommente les imports (`Hero`, `Services`, `Testimonials`, etc.)
2. Décommente le bloc JSX dans le return
3. Supprime ou commente `LandingTemporaire`
4. Le fichier `components/landing-temporaire.tsx` peut être supprimé

Tout est indiqué en commentaire dans le fichier.
