"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "SKILLS", href: "#skills" },
    { name: "ACADEMIC", href: "#academic" },
    { name: "PROJECTS", href: "#projects" },
    { name: "HACKATHONS", href: "#hackathons" },
    { name: "RESEARCH", href: "#research" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "CONTACT", href: "#contact" },
  ]

  const handleHireMeClick = () => {
    window.location.href = "mailto:pankajkr1702@gmail.com"
  }

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = '/pankaj_resume.pdf'
    link.download = 'pankaj_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-white font-bold text-2xl">
            PK
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
              onClick={handleResumeClick}
            >
              <Download className="mr-2 h-4 w-4" />
              RESUME
            </Button>
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full"
              onClick={handleHireMeClick}
            >
              LET'S WORK
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full w-full"
                onClick={handleResumeClick}
              >
                <Download className="mr-2 h-4 w-4" />
                RESUME
              </Button>
              <Button 
                className="bg-white text-black hover:bg-white/90 rounded-full w-full"
                onClick={handleHireMeClick}
              >
                LET'S WORK
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
