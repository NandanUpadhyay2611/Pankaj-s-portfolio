import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  const handleResumeDownload = () => {
    // The resume file should be in the public folder
    const link = document.createElement('a')
    link.href = '/pankaj_resume.pdf'  // Update this with your resume file name
    link.download = 'pankaj_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-transparent" />
              <img
                src="/pankajimg.jpg"
                alt="pankaj"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-amber-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-200 text-transparent bg-clip-text">
              Hi, I'm Pankaj
            </h2>
            <div className="space-y-6">
              <p className="text-xl hover:text-red-500 transition-colors duration-300 ease-in-out text-gray-300">
                👋 I'm a passionate software engineer who loves exploring computers at all levels of computation.
              </p>
              <p className="text-lg hover:text-red-500 transition-colors duration-300 ease-in-out text-gray-400">
                To me, software engineering is modern-day magic—using 1s and 0s to bring ideas to life. Despite its relatively recent emergence, Computer Science has grown exponentially and reshaped the way we live.
              </p>
              <p className="text-lg hover:text-red-500 transition-colors duration-300 ease-in-out text-gray-400">
                My main focus is building robust and performant backend systems for web applications. I also have hands-on experience with frontend technologies like ReactJS and NextJS, and a solid understanding of web architecture.
              </p>
              <p className="text-lg hover:text-red-500 transition-colors duration-300 ease-in-out text-gray-400">
                In my free time, I dive into core engineering projects like writing protocol parsers, network services, or simple databases. While "don't reinvent the wheel" is common advice, I believe rebuilding foundational tools is one of the best ways to truly understand them—and sometimes, it leads to better innovations, like the Rust programming language.
              </p>
             
              <p className="text-lg hover:text-red-500 transition-colors duration-300 ease-in-out text-gray-400">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development. When I'm not coding, you can find me solving DSA problems or contributing to open-source projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                onClick={handleResumeDownload}
                className="bg-transparent border-2 border-white/10 hover:border-white/20 text-white rounded-full px-8 py-6 text-lg transition-all duration-300"
              >
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 