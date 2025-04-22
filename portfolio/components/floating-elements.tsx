"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const elements = [
    { size: 6, delay: 0, duration: 15, x: "10%", y: "20%" },
    { size: 8, delay: 2, duration: 18, x: "80%", y: "15%" },
    { size: 5, delay: 4, duration: 20, x: "20%", y: "70%" },
    { size: 10, delay: 1, duration: 25, x: "70%", y: "60%" },
    { size: 7, delay: 3, duration: 22, x: "40%", y: "30%" },
    { size: 4, delay: 5, duration: 16, x: "60%", y: "80%" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          style={{
            width: `${el.size}rem`,
            height: `${el.size}rem`,
            left: el.x,
            top: el.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0.1],
            scale: [0, 1, 0.8],
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
