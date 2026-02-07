"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function Confidentialite() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Politique de confidentialité</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données collectées sur le site
                <strong className="text-foreground"> facile-ia.fr</strong> est :
              </p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong className="text-foreground">Thomas VAN DORSSELAERE</strong></li>
                <li>Micro-entrepreneur — SIRET : 982 025 827 00014</li>
                <li>325 Chemin du Stade, Puyloubier, France</li>
                <li>Email : thomas@facile-ia.fr</li>
                <li>Téléphone : 06 10 02 64 50</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Données collectées</h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Données de navigation</strong> : pages visitées,
                  durée de visite, type d'appareil et navigateur (via Vercel Analytics, anonymisées).
                </li>
                <li>
                  <strong className="text-foreground">Données de contact</strong> : nom, email, téléphone,
                  message — uniquement lorsque vous nous contactez volontairement par email, téléphone,
                  WhatsApp ou formulaire de contact.
                </li>
                <li>
                  <strong className="text-foreground">Données de rendez-vous</strong> : nom, email — lorsque
                  vous réservez un appel via Calendly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalités du traitement</h2>
              <p>Vos données sont traitées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Répondre à vos demandes de contact et de renseignements</li>
                <li>Organiser et assurer le suivi de nos rendez-vous</li>
                <li>Améliorer notre site et nos services grâce aux statistiques de navigation</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Base légale</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Consentement</strong> : pour les cookies et les statistiques de navigation</li>
                <li><strong className="text-foreground">Intérêt légitime</strong> : pour répondre à vos demandes de contact</li>
                <li><strong className="text-foreground">Exécution contractuelle</strong> : pour la gestion des prestations de service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Durée de conservation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Données de navigation</strong> : 13 mois maximum (conformément aux recommandations de la CNIL)</li>
                <li><strong className="text-foreground">Données de contact</strong> : 3 ans à compter du dernier échange</li>
                <li><strong className="text-foreground">Données de facturation</strong> : 10 ans (obligation légale)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
              <p>
                Ce site utilise <strong className="text-foreground">Vercel Analytics</strong> pour mesurer
                l'audience du site. Cet outil peut déposer des cookies techniques sur votre appareil.
              </p>
              <p className="mt-2">
                Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser
                les cookies de mesure d'audience. Votre choix est conservé pendant 12 mois.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Cookies utilisés :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Vercel Analytics</strong> — mesure d'audience (durée : session)</li>
                <li><strong className="text-foreground">cookie-consent</strong> — mémorisation de votre choix de consentement (durée : 12 mois)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Destinataires des données</h2>
              <p>Vos données peuvent être transmises aux sous-traitants suivants :</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li><strong className="text-foreground">Vercel Inc.</strong> (hébergement et analytics) — États-Unis</li>
                <li><strong className="text-foreground">Calendly LLC</strong> (prise de rendez-vous) — États-Unis</li>
              </ul>
              <p className="mt-2">
                Ces prestataires sont soumis à des clauses contractuelles types approuvées par
                la Commission européenne garantissant un niveau de protection adéquat.
              </p>
              <p className="mt-2">
                Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Vos droits (RGPD)</h2>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                <li><strong className="text-foreground">Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong className="text-foreground">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:thomas@facile-ia.fr" className="text-accent hover:underline">thomas@facile-ia.fr</a>
              </p>
              <p className="mt-2">
                Nous nous engageons à répondre dans un délai de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte pas la réglementation,
                vous pouvez introduire une réclamation auprès de la{" "}
                <a
                  href="https://www.cnil.fr/fr/plaintes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Commission Nationale de l'Informatique et des Libertés (CNIL)
                </a>.
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
