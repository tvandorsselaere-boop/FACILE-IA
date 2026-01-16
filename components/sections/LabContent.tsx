"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, DollarSign, Target, Sparkles, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import { PageSection, SectionHeader, CardGrid, FeatureCard, Carousel } from "@/components/layout"

const wolfEdgeProblems = [
  { icon: "📥", title: "Import Manuel", desc: "2-4h/semaine perdues à exporter depuis MT5, Tradovate, puis copier dans Excel." },
  { icon: "🔧", title: "Outils Inadéquats", desc: "Edgewonk (€29/mois) et TraderVue ($39/mois) nécessitent imports manuels complexes." },
  { icon: "📊", title: "Analyses Superficielles", desc: "Pas de coaching IA pour comprendre overtrading, early exits, tilt émotionnel." },
]

const wolfEdgeSolutions = [
  { Icon: Zap, color: "bg-blue-500", title: "AI Universal Import", desc: "Import automatique depuis toutes les plateformes de trading", badges: ["MT5, Tradovate", "Gemini AI", "99.7% précision"] },
  { Icon: TrendingUp, color: "bg-green-500", title: "Real Risk Ratio", desc: "Métrique unique pour analyser les vraies performances", badges: ["MAE/MFE", "Early exits", "R:R réel"] },
  { Icon: Sparkles, color: "bg-purple-500", title: "AI Coach + Journal", desc: "Coach IA conversationnel avec analyses automatiques", badges: ["Rapports auto", "Chat temps réel", "Gemini 2.5"] },
]

const wolfEdgeStack = [
  { title: "🎨 Frontend", content: "React 19 • TypeScript • Tailwind • Vite", color: "text-yellow-400" },
  { title: "🖥️ Backend", content: "Supabase PostgreSQL • Google OAuth", color: "text-purple-400" },
  { title: "🤖 AI/Analytics", content: "Gemini 2.5 Flash/Pro • Charts", color: "text-green-400" },
  { title: "📄 Parsing", content: "SheetJS • PapaParse • jsPDF", color: "text-orange-400" },
]

const feasyCapabilities = [
  { title: "🎯 Génération Auto", desc: "Modèles CAD/FEA via Claude" },
  { title: "📊 Analyses Temps Réel", desc: "Streaming des résultats" },
  { title: "💬 Interface Chat", desc: "Ajuster le design par chat" },
  { title: "📈 Optimisation IA", desc: "Propositions optimisées" },
  { title: "🔄 Itérations Rapides", desc: "Modifications instantanées" },
  { title: "📄 Rapports Auto", desc: "Documentation générée" },
]

export function LabContent() {
  return (
    <div className="pt-8">
      {/* Back link */}
      <div className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Intro */}
      <PageSection noPadding className="pb-8">
        <SectionHeader
          badge="R&D"
          badgeColor="bg-blue-500"
          title="Le Lab"
          subtitle="Nos projets d'innovation en cours de développement"
        />
      </PageSection>

      {/* ===== WOLFEDGE ===== */}
      <PageSection className="bg-white/[0.02] dark:bg-white/[0.02]">
        <SectionHeader
          badge="FINTECH"
          badgeColor="bg-purple-500"
          title="🐺 WolfEdge"
          subtitle="The Alpha Trader's Journal — Lancement Q1 2026"
        />

        {/* Problème */}
        <div className="mb-16">
          <h3 className="text-xl text-orange-400 text-center mb-8">🎯 Le Problème</h3>
          <CardGrid columns={3}>
            {wolfEdgeProblems.map((problem, i) => (
              <FeatureCard
                key={i}
                icon={problem.icon}
                title={problem.title}
                description={problem.desc}
                delay={i * 0.1}
                className="border-l-4 border-l-orange-500"
              />
            ))}
          </CardGrid>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h3 className="text-xl text-yellow-400 text-center mb-8">💡 La Solution : 3 Piliers</h3>
          <CardGrid columns={3}>
            {wolfEdgeSolutions.map((solution, i) => (
              <FeatureCard key={i} delay={i * 0.1} className="text-center">
                <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <solution.Icon className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-3">{solution.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {solution.badges.map((badge, j) => (
                    <span key={j} className="px-2 py-1 rounded-full border border-border text-xs text-muted-foreground">
                      {badge}
                    </span>
                  ))}
                </div>
              </FeatureCard>
            ))}
          </CardGrid>
        </div>

        {/* Stack */}
        <div>
          <h3 className="text-lg text-yellow-300 mb-6">⚡ Stack Technique</h3>
          <CardGrid columns={4}>
            {wolfEdgeStack.map((stack, i) => (
              <FeatureCard key={i} delay={i * 0.1} className="p-6">
                <h5 className={`${stack.color} font-semibold text-sm mb-2`}>{stack.title}</h5>
                <p className="text-muted-foreground text-xs">{stack.content}</p>
              </FeatureCard>
            ))}
          </CardGrid>
        </div>
      </PageSection>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ===== FEASY ===== */}
      <PageSection>
        <SectionHeader
          badge="DEEPTECH"
          badgeColor="bg-green-500"
          title="🏗️ FEAsy"
          subtitle="AI-Powered Finite Element Analysis — Lancement Q4 2026"
        />

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <FeatureCard className="text-center bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
            <h3 className="text-xl font-bold mb-4">🎯 Mission</h3>
            <p className="text-muted-foreground">
              Démocratiser l'analyse par éléments finis en réduisant le temps de calcul de 
              <span className="text-glow font-bold"> 100 heures à 5 minutes</span>, 
              tout en divisant les coûts par 10.
            </p>
          </FeatureCard>
        </motion.div>

        {/* Capacités */}
        <div className="mb-16">
          <h3 className="text-xl text-center mb-8">🤖 Les <span className="text-glow">6 Capacités IA</span></h3>
          <CardGrid columns={3}>
            {feasyCapabilities.map((cap, i) => (
              <FeatureCard key={i} delay={i * 0.1} className="text-center p-6">
                <h4 className="font-semibold mb-2">{cap.title}</h4>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </FeatureCard>
            ))}
          </CardGrid>
        </div>

        {/* Impact */}
        <CardGrid columns={3}>
          <FeatureCard className="text-center bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30">
            <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <p className="text-4xl font-bold text-green-400 mb-2">÷10</p>
            <p className="text-green-300 text-sm">Coût vs bureaux d'études</p>
          </FeatureCard>

          <FeatureCard className="text-center bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
            <Target className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <p className="text-4xl font-bold text-blue-400 mb-2">5min</p>
            <p className="text-blue-300 text-sm">Au lieu de 100h</p>
          </FeatureCard>

          <FeatureCard className="text-center bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30">
            <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <p className="text-4xl font-bold text-purple-400 mb-2">$13B</p>
            <p className="text-purple-300 text-sm">Marché 2030</p>
          </FeatureCard>
        </CardGrid>
      </PageSection>

      {/* Quote */}
      <PageSection noPadding className="pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <FeatureCard className="text-center bg-gradient-to-br from-glow/10 to-glow/5 border-glow/30">
            <p className="text-lg italic text-muted-foreground">
              "Ces projets prouvent notre capacité à développer des solutions IA <span className="text-glow font-semibold">complexes et scalables</span>"
            </p>
          </FeatureCard>
        </motion.div>
      </PageSection>
    </div>
  )
}
