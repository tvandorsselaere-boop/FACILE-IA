"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WolfEdgePage() {
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">WolfEdge</h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Journal de trading alimenté par l'IA - La plateforme révolutionnaire pour les traders modernes
            </p>

            <Link href="/#contact">
              <Button size="lg">Demander une démo</Button>
            </Link>

            <div className="mt-16 aspect-video bg-secondary rounded-lg border border-border overflow-hidden">
              <img src="/wolfedge-trading-platform-dashboard.jpg" alt="WolfEdge Platform" className="w-full h-full object-cover" />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">À Propos de WolfEdge</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  WolfEdge est une plateforme de trading révolutionnaire qui combine la puissance de l'intelligence
                  artificielle avec une interface intuitive et user-friendly. Notre système analyse en temps réel les
                  mouvements du marché pour vous offrir des insights pertinents.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Conçue pour les traders de tous niveaux, WolfEdge offre des outils sophistiqués tout en restant
                  accessible et facile à utiliser.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Caractéristiques Clés</h2>
                <ul className="space-y-3">
                  {[
                    "Analyse IA en temps réel",
                    "Interface intuitive et moderne",
                    "Alerts personnalisées",
                    "Historique d'analyse détaillé",
                    "Support 24/7",
                    "Intégration multi-plateformes",
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
              <h2 className="text-2xl font-bold mb-4">Chiffres Clés</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-muted-foreground">Précision d'analyse</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500ms</div>
                  <p className="text-muted-foreground">Temps de réponse</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">10k+</div>
                  <p className="text-muted-foreground">Utilisateurs actifs</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre les traders de demain ?</h2>
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
