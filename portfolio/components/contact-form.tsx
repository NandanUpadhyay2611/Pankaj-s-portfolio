"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface ContactFormProps {
  inView: boolean
}

export default function ContactForm({ inView }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl"
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label htmlFor="name" className="text-sm text-gray-400">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="bg-gray-900 border-gray-700 focus:border-cyan-500"
            />
          </div>
          <div className="space-y-2 text-left">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="bg-gray-900 border-gray-700 focus:border-cyan-500"
            />
          </div>
        </div>
        <div className="space-y-2 text-left">
          <label htmlFor="message" className="text-sm text-gray-400">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="min-h-[150px] bg-gray-900 border-gray-700 focus:border-cyan-500"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 w-full"
        >
          Send Message <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.form>
  )
}
