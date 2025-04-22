"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const words = [
  "DBMS",
  "DATA SCIENCE",
  "PANKAJ",
  "COMPUTER SCIENCE",
  "SOFTWARE DEVELOPMENT",
  "NETWORKING",
]

export default function MovingText() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center">
            {words.map((word, index) => {
              const globalIndex = arrayIndex * words.length + index
              return (
                <motion.div
                  key={globalIndex}
                  className="flex items-center"
                  onHoverStart={() => setHoveredIndex(globalIndex)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.span
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer px-4"
                    animate={{
                      color: hoveredIndex === globalIndex ? "#ef4444" : "#9ca3af",
                      scale: hoveredIndex === globalIndex ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {word}
                  </motion.span>
                  <span className="text-[#9ca3af] mx-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">•</span>
                </motion.div>
              )
            })}
          </div>
        ))}
      </motion.div>
    </div>
  )
} 