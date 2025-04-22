"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags: string[]
    image: string
    link: string
  }
  index: number
  inView: boolean
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`grid md:grid-cols-12 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      <div className={`md:col-span-7 ${!isEven && "md:order-2"}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative group overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0 bg-cyan-600 opacity-20 group-hover:opacity-30 transition-opacity z-10"></div>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>

      <div className={`md:col-span-5 ${!isEven && "md:order-1"}`}>
        <div className={`text-right ${!isEven && "text-left"}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="text-cyan-400 font-mono mb-2"
          >
            Featured Project
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="text-2xl font-bold mb-4"
          >
            {project.title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className={`p-6 rounded-lg bg-gray-800 shadow-xl mb-4 ${!isEven ? "text-left" : "text-right"}`}
          >
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className={`flex flex-wrap gap-2 mb-6 ${isEven ? "justify-end" : "justify-start"}`}
          >
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-900 text-cyan-400 border-cyan-800">
                {tag}
              </Badge>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className={`flex gap-4 ${isEven ? "justify-end" : "justify-start"}`}
          >
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Visit Project</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
