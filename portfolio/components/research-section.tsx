"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Book, Calendar, Users, FileText, Building, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const publications = [
    {
      title: "User Interfaces and System Design: Optimizing    Interaction, Accessibility, and Administration",
      authors: ["Pankaj Kumar"],
      date: "2024",
      status: "Under Review", // or "Under Review", "Accepted", etc.
      abstract: "Research paper on Designing user interfaces and system architecture focused on optimizing user interaction, accessibility, and administrative efficiency to deliver intuitive and inclusive digital experiences",
      type: "publication" // or "patent"
    },
    // Add more publications here
  ]

  return (
    <section id="research" ref={ref} className="py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">RESEARCH & PATENTS</h2>
          <p className="text-gray-400 text-lg text-center mb-16">Academic contributions and intellectual property</p>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-3 flex-shrink-0">
                    {pub.type === "publication" ? (
                      <Book className="w-6 h-6 text-blue-400" />
                    ) : (
                      <FileText className="w-6 h-6 text-blue-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-white">{pub.title}</h3>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {pub.status}
                      </Badge>
                    </div>

                    <div className="flex items-center mt-2 text-white/70">
                      <Users className="mr-2 h-4 w-4" />
                      <p>{pub.authors.join(", ")}</p>
                    </div>

                    <div className="flex items-center mt-2 text-white/70">
                      <Building className="mr-2 h-4 w-4" />
                      <p>{pub.journal}</p>
                    </div>

                    <div className="flex items-center mt-2 text-white/50">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{pub.date}</span>
                    </div>

                    <p className="mt-4 text-white/70">{pub.abstract}</p>

                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
                      >
                        View Publication <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
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