"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  const featuredProjects = [
    {
      title: "StockScrapeX",
      description: "A Python-based real-time stock data aggregator designed to extract and organize financial information from Groww.in. The tool utilizes intelligent web scraping to monitor U.S. and Indian stocks, providing key insights such as stock prices, daily changes, and trading volumes. With built-in error handling, rate-limiting, and Excel export capabilities, StockScrapeX streamlines financial data collection for analysis and tracking.",
      image: "/stockdataimg.jpeg",
      tags: ["Python", "BeautifulSoup", "Pandas", "Requests", "Excel"],
      link: "https://github.com/pankajkr1702/-Stock-Data-Scraper",
      github: "https://github.com/pankajkr1702/-Stock-Data-Scraper"
    },
    {
      title: "CodeForge",
      description: "A web-based coding practice platform designed to help users sharpen their programming skills through structured, interactive problem-solving. With a responsive UI and optimized navigation, the platform delivers a seamless user experience tailored for efficient coding sessions.",
      image: "/codeforgeimg.jpeg",
      tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      link: "https://github.com/pankajkr1702/website-for-coding-practice",
      github: "https://github.com/pankajkr1702/website-for-coding-practice"
    },
    {
      title: "Code-Hunt",
      description: "An eLearning platform designed to empower learners with practical coding knowledge through hands-on challenges and guided lessons. The platform combines interactive learning modules with real-time feedback to create an engaging and effective coding education experience.",
      image: "/elearningimg.jpeg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/pankajkr1702/Code-hunt",
      github: "https://github.com/pankajkr1702/Code-hunt"
    }
  ]

  const allProjects = [...featuredProjects]

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">PROJECTS</h2>
          <p className="text-gray-400 text-lg text-center mb-16">Showcasing my latest work and side projects</p>

          <div className="grid gap-16 md:gap-24">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 rounded-full group"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 rounded-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
