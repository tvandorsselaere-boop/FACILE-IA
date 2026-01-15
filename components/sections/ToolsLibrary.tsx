"use client"

import { motion } from "framer-motion"
import { Bot, FileText, Calendar, Mail, Database, BarChart3, MessageSquare, Cog } from "lucide-react"
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard"

const tools = [
  { icon: Bot, name: "Chatbots IA", desc: "Assistants conversationnels 24/7", color: "blue" },
  { icon: FileText, name: "Documents", desc: "Génération et analyse automatique", color: "purple" },
  { icon: Calendar, name: "Planning", desc: "Gestion intelligente des RDV", color: "green" },
  { icon: Mail, name: "Emails", desc: "Réponses et tris automatisés", color: "blue" },
  { icon: Database, name: "Data", desc: "Extraction et structuration", color: "purple" },
  { icon: BarChart3, name: "Analytics", desc: "Tableaux de bord en temps réel", color: "green" },
  { icon: MessageSquare, name: "Social", desc: "Gestion des réseaux sociaux", color: "blue" },
  { icon: Cog, name: "Custom", desc: "Outils sur-mesure", color: "purple" },
]

export function ToolsLibrary() {
  return (
    <section id="tools" className="snap-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Bibliothèque d'<span className="text-purple-400">Outils IA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              +50 outils préconfigurés pour automatiser chaque aspect de votre activité
            </p>
          </motion.div>

          {/* Grid d'outils */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <LiquidGlassCard 
                key={i} 
                className="p-6 text-center" 
                glowColor={tool.color as "blue" | "purple" | "green"}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div 
                    className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      tool.color === "blue" ? "text-blue-400" :
                      tool.color === "purple" ? "text-purple-400" : "text-green-400"
                    }`}
                    style={{
                      background: tool.color === "blue" 
                        ? 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 100%)'
                        : tool.color === "purple"
                        ? 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 100%)',
                    }}
                  >
                    <tool.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-medium mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </motion.div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
