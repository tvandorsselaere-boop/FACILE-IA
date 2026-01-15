"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Beaker } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton"

const projects = [
  {
    name: "FEAsy",
    tagline: "L'IA qui parle le langage de la simulation",
    description: "Assistant IA révolutionnaire pour l'analyse par éléments finis. Configurez vos simulations en langage naturel.",
    status: "Beta",
    color: "purple",
    icon: Beaker,
  },
  {
    name: "WolfEdge",
    tagline: "L'avantage du loup solitaire",
    description: "Suite d'outils IA pour entrepreneurs solo. Automatisez comme une équipe de 10.",
    status: "Coming Soon",
    color: "blue",
    icon: Rocket,
  },
]

export function LabSection() {
  return (
    <section id="lab-section" className="snap-section relative overflow-hidden">
      {/* Background effet labo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139,92,246,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">Innovation Lab</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Le <span className="text-purple-400">Lab</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos projets expérimentaux qui repoussent les limites de l'IA
            </p>
          </motion.div>

          {/* Projets */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <LiquidGlassCard 
                key={i} 
                className="p-8" 
                glowColor={project.color as "purple" | "blue"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        project.color === "purple" ? "text-purple-400" : "text-blue-400"
                      }`}
                      style={{
                        background: project.color === "purple"
                          ? 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)',
                      }}
                    >
                      <project.icon className="w-7 h-7" />
                    </div>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Beta" 
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className={`text-lg mb-3 ${
                    project.color === "purple" ? "text-purple-400" : "text-blue-400"
                  }`}>
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <LiquidGlassButton 
                    variant="secondary" 
                    glowColor={project.color as "purple" | "blue"}
                  >
                    En savoir plus →
                  </LiquidGlassButton>
                </motion.div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
