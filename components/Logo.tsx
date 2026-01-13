"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div 
      className="relative w-10 h-10 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Fond avec effet glass */}
      <div 
        className="absolute inset-0 rounded-xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 50%, rgba(239,68,68,0.3) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      />
      
      {/* Texte F stylisé */}
      <span 
        className="relative z-10 text-xl font-black text-white drop-shadow-lg"
        style={{
          textShadow: '0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(147,51,234,0.5)'
        }}
      >
        F
      </span>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-50"
        style={{
          background: 'radial-gradient(circle at center, rgba(59,130,246,0.4) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
