'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactIllustration() {
  const contactMethods = [
    { icon: Mail, color: 'text-brutalist-accent', position: 'top-8 left-8', delay: 0.2 },
    { icon: Phone, color: 'text-brutalist-black', position: 'top-8 right-8', delay: 0.4 },
    { icon: MapPin, color: 'text-brutalist-accent', position: 'bottom-8 left-8', delay: 0.6 },
    { icon: Send, color: 'text-brutalist-black', position: 'bottom-8 right-8', delay: 0.8 }
  ]

  return (
    <motion.div 
      className="relative w-full h-64 sm:h-80 lg:h-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-4 border-brutalist-accent rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-4 border-4 border-brutalist-black rounded-full animate-float"></div>
          <div className="absolute inset-8 border-4 border-brutalist-accent rounded-lg animate-rotate"></div>
        </div>
      </div>
      
      {/* Contact icons */}
      {contactMethods.map((method, index) => {
        const Icon = method.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${method.position}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: method.delay }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-brutalist-black bg-brutalist-white rounded-lg flex items-center justify-center shadow-brutalist-lg">
              <Icon size={32} className={method.color} />
            </div>
          </motion.div>
        )
      })}
      
      {/* Center message */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="text-center px-4">
          <motion.div 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brutalist-black mb-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            LET'S TALK
          </motion.div>
          <motion.div 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-brutalist-accent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            GET IN TOUCH
          </motion.div>
        </div>
      </motion.div>
      
      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brutalist-accent opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brutalist-black opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
    </motion.div>
  )
}
