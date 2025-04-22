import { motion } from "framer-motion"
import { Trophy, GitFork, Users, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"

const HACKATHONS = [

  {
    title: "Infineon Technologies' Hackathon challenge",
    position: "",
    organizer: "Infineon Technology",
    description: "Built an XML-driven DSA Solver during a hackathon. Designed a parser to extract data structures and test cases from XML input, implemented core DSA algorithms in real-time, and delivered dynamic problem-solving results with a focus on efficiency and accuracy.",
    link: "https://drive.google.com/file/d/1O29XqKZswGzaN2KshS9AviGikSS4LZDc/view?usp=drive_link",
    stats: "200+ participants"
  }
]

export default function HackathonsSection() {
  return (
    <section className="relative py-20">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 text-amber-500/10 w-24 h-24">
          <Trophy className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 left-10 text-purple-500/10 w-20 h-20">
          <GitFork className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-amber-500/10 w-16 h-16 rotate-12">
          <Users className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Hackathons
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through competitive coding challenges
          </p>
        </motion.div>

        {/* Hackathons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HACKATHONS.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{hackathon.title}</h3>
                    {hackathon.position && <p className="text-amber-500">{hackathon.position}</p>}
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-purple-500/10">
                    <Trophy className="text-amber-400 h-6 w-6" />
                  </div>
                </div>
                {hackathon.description && <p className="text-gray-400 mb-4">{hackathon.description}</p>}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{hackathon.organizer} • {hackathon.stats}</span>
                  {hackathon.link && (
                    <Button
                      variant="ghost"
                      className="text-amber-500 hover:text-amber-400 -mr-4"
                      onClick={() => window.open(hackathon.link, '_blank')}
                    >
                      View <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 