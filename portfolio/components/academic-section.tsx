import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "2022 – 2026",
    score: "CGPA: 7.47"
  },
  {
    degree: "Class 12th(PCM)",
    institution: "Shree Ayyapa public school",
    location: "Bokaro, Jharkhand",
    period: "2019 – 2021",
    score: "Percentage: 81.60%"
  },
  {
    degree: "Class 10th",
    institution: "Delhi Public School",
    location: "Madhubani, Bihar",
    period: "2018 – 2019",
    score: "Percentage: 87%"
  }
]

export default function AcademicSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <p className="text-gray-400 text-lg">Showcasing my educational journey and academic achievements</p>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      </div>
                      <p className="text-blue-400">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <span className="text-blue-400 font-medium">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 