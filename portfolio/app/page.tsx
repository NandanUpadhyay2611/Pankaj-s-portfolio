"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import LoadingScreen from "@/components/loading-screen"
import AnimatedBackground from "@/components/animated-background"
import GlowingButton from "@/components/glowing-button"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import FloatingSocials from "@/components/FloatingSocials"
import AboutSection from "@/components/about-section"
import HackathonsSection from "@/components/hackathons-section"
import AcademicSection from "@/components/academic-section"
import ResearchSection from "@/components/research-section"
import { Code, Briefcase, Award } from "lucide-react"
import MovingText from "@/components/moving-text"
import SocialIcons from "@/components/social-icons"

const SUGGESTIONS = [
  "Tell me about your experience",
  "What are your technical skills?",
  "What projects have you worked on?",
  "What are your career goals?",
  "Tell me about your education"
]

const RESUME = `Pankaj Kumar
Bihar, India 847230
+919142684182 pankajkr1702@gmail.com linkedin.com/in/-pankajkumar- / github.com/pankajkr1702/
Experience
Live Project September 2024 - October 2024
Outlier.ai
• Trained an AI model specifically designed for outlier detection, refining algorithms to enhance accuracy and reliability
in identifying anomalies within large datasets.
• Optimized training datasets and adjusted hyperparameters to improve the model's performance, achieving a measurable
increase in detection precision and reducing false positives.
• Achieved a measurable increase in detection precision and reduced false positives.
 Projects
Code Hunt| React.js, Node.js, Express.js, MongoDB March 2025 - April 2025
• Built a full-stack web application for coding practice using the MERN stack. Implemented secure user authentication with
JWT, problem listing, code submission, and result tracking with 85% submission evaluation accuracy.
• Designed an interactive React frontend with dynamic routing, responsive UI, and integrated code editor.
• Developed RESTful APIs using Express.js and Node.js for handling users, problems, and submissions.
• Used MongoDB for persistent storage of users, challenges, and submission history.
• GitHub Repository Link: https://github.com/pankajkr1702/Code-hunt
Stock Data Scraper| Python, BeautifulSoup, Pandas October 2024
• Developed an automated stock data scraping tool that pulls financial data from Groww.in for selected U.S. and Indian
stocks, including price, daily changes, and trading volume with 90% data extraction.
• Utilized Python libraries (requests and BeautifulSoup) to send HTTP requests and parse HTML responses, extracting key
data points with efficient code.
• Streamlined data storage processes by converting raw stock information into organized Excel files, enhancing the
 quality of data-driven decision-making across the organization.
• GitHub Repository Link: https://github.com/pankajkr1702/-Stock-Data-Scraper
 Certificates
Data Analysis with Tableau November 2024
Coursera
Supervised Machine Learning: Regression and Classification June 2024 - July 2024
Coursera
R Programming May 2024
Coursera
Achievements
• Participated in hackathon conducted by Infineon Technology. February 2025
• Solved 100+ problems on LeetCode.
Technical Skills
Languages C++, Python, MERN
Technologies/Frameworks: Tableau, Linux, Git, GitHub, Excel
Skills: Data Structures and Algorithms, Problem-Solving, Web Scrapping, Scripting in Python
Education
Lovely Professional University Punjab August 2022 – July 2026
Computer Science and Engineering — CGPA: 7.47 Punjab, India
Sree Ayyappa Public School March 2020 – May 2021
12th with Science — Percentage: 81.60% Jharkhand, India
Delhi Public School March 2018 – May 2019
10th — Percentage: 87.00% Bihar, India
•`

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (inputValue.trim()) {
      const filtered = SUGGESTIONS.filter(suggestion => 
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [inputValue])

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setIsLoading(true)
    setResponse(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputValue,
          resume: RESUME
        }),
      })

      const data = await response.json()
      setResponse(data.response)
    } catch (error) {
      setResponse("Sorry, I encountered an error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-radial from-amber-500/10 via-transparent to-transparent opacity-70"></div>
        </div>
        <AnimatedBackground />
        <FloatingElements />
        <FloatingSocials />

        <Navbar scrolled={scrolled} />

        <div className="relative">
          {/* Global background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full filter blur-[60px]"
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="fixed inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex flex-col items-center min-h-screen pt-32"
          >
            {/* Main container for name and moving text */}
            <div className="relative w-full flex flex-col items-center justify-start space-y-12">
              {/* Name container */}
              <div className="relative w-full text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-none"
                >
                  <span className="text-[#9ca3af]">PANKAJ</span>
                  <span className="text-[#9ca3af]">•</span>
                  <span className="text-[#ef4444]">KUMAR</span>
                </motion.h1>
              </div>

              {/* Moving text line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full overflow-hidden -mt-8"
              >
                <MovingText />
              </motion.div>

              {/* Social Icons */}
              <SocialIcons />

              {/* Description and Chat Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 w-full max-w-2xl mx-auto px-4 text-center"
              >
                <AnimatedText
                  text="Data scientist uncovering insights and driving decisions through data-driven storytelling and advanced machine learning techniques."
                  className="text-lg md:text-xl text-gray-300 mb-8"
                  delay={2.5}
                />

                <div className="relative w-full max-w-xl mx-auto group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-purple-500/50 rounded-full opacity-30 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative">
                    <form onSubmit={handleSubmit} className="relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask me anything..."
                        className="w-full bg-black/50 border-white/10 backdrop-blur-sm h-14 pl-6 pr-16 rounded-full text-white"
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="absolute right-1 top-1 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
                      </Button>
                    </form>

                    {/* Suggestions dropdown */}
                    {suggestions.length > 0 && (
                      <div className="absolute mt-2 w-full bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden z-50">
                        {suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            className="w-full px-4 py-2 text-left text-white/80 hover:bg-white/10 transition-colors"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Response display */}
                {response && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 w-full max-w-2xl mx-auto"
                  >
                    <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                      <p className="text-white/80 whitespace-pre-wrap">{response}</p>
                    </div>
                  </motion.div>
                )}

                {/* Spacer div to enable scrolling */}
                <div className="h-[30vh]"></div>
              </motion.div>
            </div>

            {/* Rest of the content */}
            <main className="relative">
              <AboutSection />
              <SkillsSection />
              <AcademicSection />
              <ProjectsSection />
              <HackathonsSection />
              <ResearchSection />
              <CertificationsSection />
              <ContactSection />
            </main>

            <footer className="relative z-10 border-t border-white/10 py-8 mt-20">
              <div className="container mx-auto px-4 text-center text-white/50 text-sm">
                <p>© {new Date().getFullYear()} Pankaj Kumar. All rights reserved.</p>
              </div>
            </footer>
          </motion.div>
        </div>
      </div>
    </>
  )
}
