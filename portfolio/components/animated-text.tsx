"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsTyping(false)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex])
      setCurrentIndex((prev) => prev + 1)
    }, 50) // Typing speed

    return () => clearTimeout(timeout)
  }, [currentIndex, text])

  return (
    <div className={`inline-block ${className}`}>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay }}>
        {displayText}
      </motion.span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="ml-1 inline-block w-2 h-5 bg-amber-400"
        />
      )}
    </div>
  )
}
