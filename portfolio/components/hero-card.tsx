"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface HeroCardProps {
  title: string
  value: string
  icon: React.ReactNode
  delay?: number
}

export default function HeroCard({ title, value, icon, delay = 0 }: HeroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

      <div className="relative flex items-center gap-4">
        <div className="bg-white/10 rounded-lg p-3 group-hover:bg-white/20 transition-colors duration-300">{icon}</div>

        <div>
          <p className="text-white/50 text-sm">{title}</p>
          <p className="text-white font-medium">{value}</p>
        </div>

        <div className="ml-auto">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
