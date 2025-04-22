"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "Tableau", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg", color: "#E97627" },
    { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", color: "#217346" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "#276DC3" },
    { name: "Hive", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", color: "#D22128" }
  ]

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">SKILLS</h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col items-center"
              >
                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-4 md:p-6 flex items-center justify-center">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
                <span className="mt-3 text-sm text-white/70">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
