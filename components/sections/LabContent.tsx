"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

export function LabContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Retour */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-glow transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour à l'accueil</span>
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-6xl mb-4 block">🔬</span>
        <h1 className="text-5xl md:text-7xl font-light mb-4">Le Lab</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Notre R&D travaille pendant que vous vivez.
          <br />
          Validation de la compétence technique via deux piliers.
        </p>
      </motion.div>

      {/* Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* FEAsy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <LiquidGlassCard className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🏗️</span>
              <div>
                <h2 className="text-3xl font-bold">FEAsy</h2>
                <p className="text-glow">Pilier Ingénierie</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Expertise en calculs de structures et précision. 20 ans d'expérience 
              en analyse par éléments finis dans l'aéronautique (Airbus).
            </p>
            
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Caractéristiques :</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-glow">✓</span>
                  Réduction 100h → 5min (calculs FEA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-glow">✓</span>
                  Prix ÷10 vs bureaux d'études traditionnels
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-glow">✓</span>
                  IA au cœur du process
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-muted-foreground">Lancement</p>
                  <p className="font-medium">Q4 2026</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Modèle</p>
                  <p className="font-medium">B2B + SaaS</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Marché</p>
                  <p className="font-medium">$13B (2030)</p>
                </div>
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>

        {/* WolfEdge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LiquidGlassCard glowColor="purple" className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">📊</span>
              <div>
                <h2 className="text-3xl font-bold">WolfEdge</h2>
                <p className="text-purple-400">Pilier Algorithmique</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Maîtrise de la data et de la finance. Application fintech 
              pour traders particuliers avec IA intégrée.
            </p>
            
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">3 Piliers Techniques :</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  AI Import (Extraction transactions auto)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Real Risk Ratio (Calcul risque temps réel)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  AI Coach (Assistant trading IA)
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-muted-foreground">Lancement</p>
                  <p className="font-medium">Q1 2026</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Modèle</p>
                  <p className="font-medium">Freemium</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Marché</p>
                  <p className="font-medium">$113M TAM</p>
                </div>
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>
      </div>

      {/* Citation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 text-xl text-muted-foreground italic"
      >
        "Ces projets prouvent notre capacité à développer des solutions IA complexes et scalables"
      </motion.p>
    </div>
  )
}
