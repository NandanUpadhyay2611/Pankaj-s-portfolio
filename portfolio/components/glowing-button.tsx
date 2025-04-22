"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}

export default function GlowingButton({ children, className, variant = "primary", onClick }: GlowingButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative group rounded-full px-8 py-2.5 font-medium transition-all duration-300",
        isPrimary ? "text-black" : "text-white border border-white/20 hover:border-white/40 bg-transparent",
        className,
      )}
    >
      {isPrimary && (
        <>
          <div className="absolute inset-0 rounded-full bg-white" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
        </>
      )}

      {!isPrimary && (
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-600/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      )}

      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </motion.button>
  )
}
