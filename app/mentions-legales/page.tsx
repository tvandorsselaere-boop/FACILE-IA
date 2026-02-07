"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function MentionsLegales() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Mentions légales</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
              <p>
                Le site <strong className="text-foreground">facile-ia.fr</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong className="text-foreground">Nom :</strong> Thomas VAN DORSSELAERE</li>
                <li><strong className="text-foreground">Statut :</strong> Micro-entrepreneur (auto-entrepreneur)</li>
                <li><strong className="text-foreground">SIRET :</strong> 982 025 827 00014</li>
                <li><strong className="text-foreground">Code NAF :</strong> 6499Z (en cours de modification vers activité de services numériques)</li>
                <li><strong className="text-foreground">Date d'immatriculation :</strong> 01/10/2023</li>
                <li><strong className="text-foreground">Adresse :</strong> 325 Chemin du Stade, Puyloubier, France</li>
                <li><strong className="text-foreground">Téléphone :</strong> 06 10 02 64 50</li>
                <li><strong className="text-foreground">Email :</strong> contact@facile-ia.fr</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Directeur de la publication</h2>
              <p>Thomas VAN DORSSELAERE — contact@facile-ia.fr</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong className="text-foreground">Vercel Inc.</strong></li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>Site web : vercel.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, logiciels, etc.)
                est la propriété exclusive de Thomas VAN DORSSELAERE, sauf mention contraire.
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
                des éléments du site est interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Responsabilité</h2>
              <p>
                L'éditeur s'efforce de fournir des informations aussi précises que possible.
                Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou
                carences dans la mise à jour. L'éditeur décline toute responsabilité en cas de
                difficultés techniques liées à l'utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Données personnelles</h2>
              <p>
                Les informations relatives au traitement de vos données personnelles sont détaillées
                dans notre{" "}
                <Link href="/confidentialite" className="text-accent hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
              <p>
                Ce site utilise des cookies à des fins de mesure d'audience. Vous pouvez
                accepter ou refuser leur utilisation via le bandeau de consentement affiché
                lors de votre première visite. Pour en savoir plus, consultez notre{" "}
                <Link href="/confidentialite" className="text-accent hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">
              Dernière mise à jour : février 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
