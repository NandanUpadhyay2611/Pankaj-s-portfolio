"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface SkillBadgeProps {
  skill: string
  index: number
  inView: boolean
}

export default function SkillBadge({ skill, index, inView }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
      className="flex items-center text-gray-300 mb-2 mr-6"
    >
      <ChevronRight className="h-4 w-4 text-cyan-400 mr-1" />
      <span>{skill}</span>
    </motion.div>
  )
}
