"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, DollarSign, FileText, Star, File, Eye, Users, CheckCircle } from "lucide-react"
import { PageSection, SectionHeader, CardGrid, FeatureCard, Carousel } from "@/components/layout"

const tools = [
  { id: "frais", Icon: DollarSign, color: "bg-green-500", title: "Notes de Frais", desc: "OCR + IA", details: "Photographiez vos reçus, l'IA extrait et classe automatiquement." },
  { id: "devis", Icon: FileText, color: "bg-blue-500", title: "Devis Pro", desc: "Templates pro", details: "Créez des devis professionnels en quelques clics." },
  { id: "reputation", Icon: Star, color: "bg-yellow-500", title: "Reputation IA", desc: "Réponses auto", details: "L'IA surveille et répond à vos avis Google." },
  { id: "pdf", Icon: File, color: "bg-orange-500", title: "PDF Pro", desc: "Fusion & signatures", details: "Fusionnez, signez vos PDF en un clic." },
  { id: "veille", Icon: Eye, color: "bg-purple-500", title: "Veille Pro", desc: "Intelligence concurrentielle", details: "L'IA surveille votre marché en temps réel." },
  { id: "crm", Icon: Users, color: "bg-red-500", title: "CRM Smart", desc: "Gestion auto clients", details: "Gérez vos clients intelligemment." },
]

const packIncludes = [
  "Setup technique complet",
  "Site vitrine professionnel",
  "3 applications au choix",
]

export function ServicesSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <PageSection id="services">
      <SectionHeader
        title="Le Pack"
        titleHighlight="Sérénité Numérique"
        subtitle="20 ans d'expertise Airbus Helicopters pour digitaliser les PME avec une rigueur aéronautique"
      />

      {/* Pricing Cards */}
      <CardGrid columns={2} className="mb-20 max-w-4xl mx-auto">
        <FeatureCard className="text-center">
          <p className="text-sm text-muted-foreground mb-3">Installation unique</p>
          <p className="text-5xl font-bold text-glow mb-6">999€</p>
          <div className="space-y-3 text-left">
            {packIncludes.map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-glow w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </FeatureCard>

        <FeatureCard highlight className="text-center">
          <span className="inline-block text-xs bg-glow text-white px-3 py-1 rounded-full mb-4">
            RECOMMANDÉ
          </span>
          <p className="text-sm text-muted-foreground mb-3">Abonnement mensuel</p>
          <p className="text-5xl font-bold text-glow">
            29€<span className="text-xl font-normal text-muted-foreground">/mois</span>
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Sans engagement • Annulez quand vous voulez
          </p>
        </FeatureCard>
      </CardGrid>

      {/* Tools Carousel */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Les <span className="text-glow">6 outils</span> disponibles
        </h3>
        
        <Carousel itemWidth="w-[280px] md:w-[320px]">
          {tools.map((tool, index) => (
            <FeatureCard
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className="h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${tool.color} flex items-center justify-center mb-4`}>
                <tool.Icon className="text-white w-7 h-7" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{tool.title}</h4>
              <p className="text-sm text-muted-foreground">{tool.desc}</p>
            </FeatureCard>
          ))}
        </Carousel>
      </div>

      {/* ROI Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center mb-12">
          💡 ROI Client : <span className="text-glow">Temps Gagné</span>
        </h3>

        <CardGrid columns={2} className="max-w-3xl mx-auto mb-8">
          <FeatureCard className="text-center">
            <span className="text-muted-foreground uppercase text-sm font-medium">Avant</span>
            <p className="text-6xl font-bold text-muted-foreground my-4">12h</p>
            <p className="text-muted-foreground">par semaine</p>
          </FeatureCard>

          <FeatureCard highlight className="text-center">
            <span className="text-glow uppercase text-sm font-medium">Après ✅</span>
            <p className="text-6xl font-bold text-glow my-4">2h</p>
            <p className="text-glow/80">par semaine</p>
          </FeatureCard>
        </CardGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <FeatureCard className="text-center bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30">
            <p className="text-5xl font-bold text-green-400 mb-2">83%</p>
            <p className="text-green-300">Réduction du temps administratif</p>
            <p className="text-sm text-green-200/60 mt-2">≈ 520h économisées par an</p>
          </FeatureCard>
        </motion.div>
      </div>

      {/* Why Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <FeatureCard className="bg-gradient-to-br from-orange-500 to-orange-600 border-0">
          <h3 className="text-white font-bold text-2xl mb-8">🎯 Pourquoi Facile-IA ?</h3>
          <ul className="space-y-5">
            {[
              { title: "Fiabilité Aéro", desc: "Rigueur Airbus Helicopters appliquée" },
              { title: "Rapidité", desc: "POC livrés en jours, pas en mois" },
              { title: "Transparence", desc: "ROI immédiat et mesurable" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="text-white/80 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">{item.title}</strong>
                  <span className="text-white/90"> : {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </FeatureCard>
      </motion.div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="p-8 md:p-10 rounded-3xl max-w-md w-full bg-card border border-border relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTool(null)} 
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              {(() => {
                const tool = tools.find(t => t.id === selectedTool)
                if (!tool) return null
                return (
                  <>
                    <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mb-6`}>
                      <tool.Icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-glow font-medium mb-4">{tool.desc}</p>
                    <p className="text-muted-foreground">{tool.details}</p>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageSection>
  )
}
