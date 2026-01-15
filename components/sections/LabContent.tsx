"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

export function LabContent() {
  return (
    <div className="max-w-5xl mx-auto">
      
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
        className="text-center mb-16"
      >
        <span className="text-5xl mb-6 block">🔬</span>
        <h1 className="text-3xl md:text-4xl font-light mb-4">Le Lab</h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto">
          Notre R&D travaille pendant que vous vivez.<br />
          Validation de l'expertise technique via deux piliers.
        </p>
      </motion.div>

      {/* Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* FEAsy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LiquidGlassCard className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🏗️</span>
              <div>
                <h2 className="text-2xl font-semibold">FEAsy</h2>
                <p className="text-sm text-glow">Pilier Ingénierie</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              20 ans d'expertise Airbus en calculs de structures (FEA). 
              Démocratiser l'analyse par éléments finis grâce à l'IA.
            </p>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm"><span className="text-glow">✓</span> Réduction 100h → 5min</p>
              <p className="text-sm"><span className="text-glow">✓</span> Prix ÷10 vs bureaux d'études</p>
              <p className="text-sm"><span className="text-glow">✓</span> IA au cœur du process</p>
            </div>
            
            <div className="pt-6 border-t border-border/30">
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Q4 2026</p>
                  <p>Lancement</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">B2B + SaaS</p>
                  <p>Modèle</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">$13B</p>
                  <p>Marché 2030</p>
                </div>
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>

        {/* WolfEdge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <LiquidGlassCard glowColor="purple" className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">📊</span>
              <div>
                <h2 className="text-2xl font-semibold">WolfEdge</h2>
                <p className="text-sm text-purple-400">Pilier Algorithmique</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Journal de trading IA pour particuliers. 
              Maîtrise de la data et de la finance algorithmique.
            </p>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm"><span className="text-purple-400">✓</span> AI Import (extraction auto)</p>
              <p className="text-sm"><span className="text-purple-400">✓</span> Real Risk Ratio (temps réel)</p>
              <p className="text-sm"><span className="text-purple-400">✓</span> AI Coach (assistant trading)</p>
            </div>
            
            <div className="pt-6 border-t border-border/30">
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Q1 2026</p>
                  <p>Lancement</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Freemium</p>
                  <p>Modèle</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">$113M</p>
                  <p>TAM</p>
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
        transition={{ delay: 0.4 }}
        className="text-center mt-16 text-sm text-muted-foreground italic"
      >
        "Ces projets prouvent notre capacité à développer des solutions IA complexes et scalables"
      </motion.p>
    </div>
  )
}
