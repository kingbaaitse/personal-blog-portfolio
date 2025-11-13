'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Star } from 'lucide-react'

export default function CVIllustration() {
  const sections = [
    { icon: Briefcase, color: 'text-brutalist-accent', title: 'EXPERIENCE', delay: 0.2 },
    { icon: GraduationCap, color: 'text-brutalist-black', title: 'EDUCATION', delay: 0.4 },
    { icon: Award, color: 'text-brutalist-accent', title: 'SKILLS', delay: 0.6 },
    { icon: Star, color: 'text-brutalist-black', title: 'ACHIEVEMENTS', delay: 0.8 }
  ]

  return (
    <motion.div 
      className="relative w-full h-64 sm:h-80 lg:h-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Document background */}
      <motion.div
        className="absolute inset-4 sm:inset-6 lg:inset-8 border-4 border-brutalist-black bg-brutalist-white rounded-lg shadow-brutalist-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* CV Header */}
        <div className="border-b-4 border-brutalist-accent p-4 sm:p-6">
          <motion.div 
            className="w-24 h-4 bg-brutalist-accent rounded mb-2"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.div 
            className="w-32 h-3 bg-brutalist-black rounded"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>
        
        {/* CV Content sections */}
        <div className="p-4 sm:p-6 space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: section.delay }}
            >
              <section.icon size={20} className={section.color} />
              <div className="flex-1">
                <div className="w-full h-2 bg-brutalist-gray rounded mb-1"></div>
                <div className="w-3/4 h-2 bg-brutalist-gray rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Floating badges */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-4 border-brutalist-accent bg-brutalist-white rounded-lg flex items-center justify-center shadow-brutalist-lg"
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <span className="text-xs sm:text-sm font-bold text-brutalist-accent">CV</span>
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-14 h-14 border-4 border-brutalist-black bg-brutalist-accent rounded-lg flex items-center justify-center shadow-brutalist-lg"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
      >
        <Star size={20} className="text-brutalist-white" />
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-8 left-8 w-3 h-3 bg-brutalist-accent rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-4 h-4 bg-brutalist-black rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
