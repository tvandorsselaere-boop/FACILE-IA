"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LabPage() {
  const projects = [
    {
      id: "wolfedge",
      title: "WolfEdge",
      subtitle: "Journal de trading alimenté par l'IA",
      description:
        "Une plateforme innovante qui combine analyse de marché intelligente avec interface intuitive pour les traders.",
      image: "/trading-dashboard-ai-interface.jpg",
      tags: ["Trading", "IA", "Finance"],
    },
    {
      id: "feasy",
      title: "FEAsy",
      subtitle: "Simulation FEA simplifiée par l'IA",
      description: "Rendez accessibles les simulations éléments finis complexes grâce à notre système IA intuitif.",
      image: "/3d-simulation-engineering-interface.jpg",
      tags: ["Ingénierie", "IA", "Simulation"],
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Nos Projets Innovants</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les solutions d'IA que nous avons développées pour transformer les industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/lab/${project.id}`} className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden card-hover-glow-intense">
                  <div className="aspect-video bg-secondary overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-accent text-sm font-medium mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
                      Découvrir <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
