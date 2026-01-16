"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, DollarSign, Target, Sparkles, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const wolfEdgeProblems = [
  {
    icon: "📥",
    title: "Import Manuel",
    desc: "2-4h/semaine perdues à exporter depuis MT5, Tradovate, puis copier dans Excel.",
  },
  {
    icon: "🔧",
    title: "Outils Inadéquats",
    desc: "Edgewonk (€29/mois) et TraderVue ($39/mois) nécessitent imports manuels complexes.",
  },
  {
    icon: "📊",
    title: "Analyses Superficielles",
    desc: "Pas de coaching IA pour comprendre overtrading, early exits, tilt émotionnel.",
  },
]

const wolfEdgeSolutions = [
  {
    Icon: Zap,
    color: "from-blue-400 to-blue-600",
    title: "AI Universal Import",
    desc: "Import automatique depuis toutes les plateformes de trading",
    badges: ["MT5, Tradovate", "Gemini AI", "99.7% précision"],
  },
  {
    Icon: TrendingUp,
    color: "from-green-400 to-green-600",
    title: "Real Risk Ratio",
    desc: "Métrique unique pour analyser les vraies performances de trading",
    badges: ["MAE/MFE", "Early exits", "R:R réel"],
    badgeColor: "text-orange-400 border-orange-400/50",
  },
  {
    Icon: Sparkles,
    color: "from-purple-400 to-purple-600",
    title: "AI Coach + Journal",
    desc: "Coach IA conversationnel avec analyses automatiques",
    badges: ["Rapports auto", "Chat temps réel", "Gemini 2.5"],
    badgeColor: "text-purple-400 border-purple-400/50",
  },
]

const wolfEdgeStack = [
  { title: "🎨 Frontend", content: "React 19 • TypeScript\nTailwind CSS • Vite", color: "text-yellow-400" },
  { title: "🖥️ Backend", content: "Supabase PostgreSQL\nGoogle OAuth", color: "text-purple-400" },
  { title: "🤖 AI/Analytics", content: "Gemini 2.5 Flash/Pro\nLightweight Charts", color: "text-green-400" },
  { title: "📄 Parsing", content: "SheetJS • PapaParse\njsPDF Export", color: "text-orange-400" },
]

const feasyAICapabilities = [
  { title: "🎯 Génération Auto", desc: "Modèles CAD/FEA auto via Claude" },
  { title: "📊 Analyses Temps Réel", desc: "Streaming des résultats pendant calcul" },
  { title: "💬 Interface Conversationnelle", desc: "Chat IA pour ajuster le design" },
  { title: "📈 Optimisation IA", desc: "Propositions de design optimisées" },
  { title: "🔄 Itérations Rapides", desc: "Modifications instantanées" },
  { title: "📄 Rapports Auto", desc: "Documentation générée automatiquement" },
]

export function LabContent() {
  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Lien retour */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-glow transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l'accueil
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-flex gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
            R&D
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Lab</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nos projets d'innovation en cours de développement
        </p>
      </motion.div>

      {/* ===== WOLFEDGE SECTION ===== */}
      <section className="mb-32">
        {/* Header WolfEdge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
              PROJET PRIORITAIRE
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">
              FINTECH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">🐺 WolfEdge</h2>
          <p className="text-xl text-blue-400 italic mb-2">The Alpha Trader's Journal</p>
          <p className="text-muted-foreground">Lancement Q1 2026</p>
        </motion.div>

        {/* Le Problème */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-orange-400 text-center mb-10"
          >
            🎯 Le Problème
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wolfEdgeProblems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <LiquidGlassCard className="p-6 border-l-4 border-l-orange-500">
                  <span className="text-4xl block mb-4">{problem.icon}</span>
                  <h4 className="text-orange-400 font-semibold text-lg mb-3">{problem.title}</h4>
                  <p className="text-muted-foreground text-sm">{problem.desc}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* La Solution */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-yellow-400 text-center mb-10"
          >
            💡 La Solution : 3 Piliers Innovants
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wolfEdgeSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <LiquidGlassCard className="p-6">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center`}>
                      <solution.Icon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{solution.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.badges.map((badge, j) => (
                      <span 
                        key={j} 
                        className={`px-2 py-1 rounded-full border text-xs ${solution.badgeColor || 'text-muted-foreground border-border'}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack Technique */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-yellow-300 mb-10"
          >
            ⚡ Stack Technique
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wolfEdgeStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <LiquidGlassCard className="p-4" hover={false}>
                  <h5 className={`${stack.color} font-semibold mb-3`}>{stack.title}</h5>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{stack.content}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="h-px bg-border my-24" />

      {/* ===== FEASY SECTION ===== */}
      <section className="mb-20">
        {/* Header FEAsy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
              ENGINEERING
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
              DEEPTECH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">🏗️ FEAsy</h2>
          <p className="text-xl text-blue-400 italic mb-2">AI-Powered Finite Element Analysis</p>
          <p className="text-muted-foreground">Lancement Q4 2026</p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <LiquidGlassCard className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/50 text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Démocratiser l'analyse par éléments finis (FEA) en réduisant le temps de calcul de 
              <span className="text-glow font-bold"> 100 heures à 5 minutes</span>, 
              tout en divisant les coûts par 10 par rapport aux bureaux d'études traditionnels.
            </p>
          </LiquidGlassCard>
        </motion.div>

        {/* Les 6 capacités IA */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center mb-10"
          >
            🤖 Les <span className="text-glow">6 Capacités IA</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feasyAICapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <LiquidGlassCard className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">{cap.title}</h4>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LiquidGlassCard className="p-8 text-center bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/50">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-green-400 mb-2">÷10</p>
              <p className="text-green-300">Coût vs bureaux d'études</p>
            </LiquidGlassCard>

            <LiquidGlassCard className="p-8 text-center bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/50">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-blue-400 mb-2">5min</p>
              <p className="text-blue-300">Au lieu de 100h</p>
            </LiquidGlassCard>

            <LiquidGlassCard className="p-8 text-center bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/50">
              <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-purple-400 mb-2">$13B</p>
              <p className="text-purple-300">Marché 2030</p>
            </LiquidGlassCard>
          </div>
        </motion.div>
      </section>

      {/* Citation finale */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-16"
      >
        <LiquidGlassCard className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-glow/10 to-glow/5 border-glow/30">
          <p className="text-lg italic text-muted-foreground">
            "Ces projets prouvent notre capacité à développer des solutions IA <span className="text-glow font-semibold">complexes et scalables</span>"
          </p>
        </LiquidGlassCard>
      </motion.div>
    </div>
  )
}
