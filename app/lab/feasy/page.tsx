"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FEAsyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      <div className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/lab" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft size={20} />
              Retour
            </Link>

            <div className="mb-8">
              <span className="text-accent text-sm font-medium">Projet Innovant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">FEAsy</h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Simulation FEA simplifiée par l'IA - Rendez accessibles les analyses complexes
            </p>

            <Link href="/#contact">
              <Button size="lg">Demander une démo</Button>
            </Link>

            <div className="mt-16 aspect-video bg-secondary rounded-lg border border-border overflow-hidden">
              <img src="/feasy-3d-simulation-engineering.jpg" alt="FEAsy Platform" className="w-full h-full object-cover" />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">À Propos de FEAsy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  FEAsy transforme la manière dont les ingénieurs effectuent les simulations éléments finis. Notre
                  système d'IA guidé simplifie les configurations complexes tout en conservant la précision scientifique
                  requise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Idéale pour les équipes d'ingénierie de toute taille, FEAsy réduit le temps d'apprentissage et
                  accélère le cycle de conception.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Caractéristiques Clés</h2>
                <ul className="space-y-3">
                  {[
                    "Assistant IA pour la configuration",
                    "Simulations multi-physiques",
                    "Post-traitement automatisé",
                    "Export multi-formats",
                    "Collaboration en temps réel",
                    "Cloud computing intégré",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 p-8 bg-secondary rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4">Impact Mesurable</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">70%</div>
                  <p className="text-muted-foreground">Réduction du temps de simulation</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">95%</div>
                  <p className="text-muted-foreground">Précision maintenue</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">Entreprises utilisatrices</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Accélérez votre cycle de conception</h2>
              <Link href="/#contact">
                <Button size="lg">Nous Contacter</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
