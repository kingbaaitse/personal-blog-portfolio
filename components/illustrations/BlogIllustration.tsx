'use client'

import { motion } from 'framer-motion'
import { FileText, Calendar, Eye, Heart, PenTool, BookOpen, Coffee, MessageCircle } from 'lucide-react'

export default function BlogIllustration() {
  const floatingElements = [
    { icon: Coffee, color: 'text-brutalist-accent', delay: 0.2, path: 'M 50 100 Q 150 50 250 100 T 350 100' },
    { icon: MessageCircle, color: 'text-brutalist-black', delay: 0.4, path: 'M 100 150 Q 200 100 300 150 T 400 150' },
    { icon: Heart, color: 'text-brutalist-accent', delay: 0.6, path: 'M 80 200 Q 180 150 280 200 T 380 200' },
    { icon: Eye, color: 'text-brutalist-black', delay: 0.8, path: 'M 120 250 Q 220 200 320 250 T 420 250' }
  ]

  return (
    <motion.div 
      className="relative w-full h-80 sm:h-96 lg:h-[28rem] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-brutalist-accent" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Central book with pages */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Book spine */}
        <motion.div
          className="absolute w-8 h-32 sm:h-40 lg:h-48 bg-brutalist-black left-1/2 transform -translate-x-1/2 rounded-sm shadow-brutalist-lg"
          animate={{ rotateZ: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Left page */}
        <motion.div
          className="absolute w-24 h-32 sm:w-28 sm:h-40 lg:w-32 lg:h-48 bg-brutalist-white border-4 border-brutalist-black rounded-l-lg shadow-brutalist-lg -right-20"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: [-25, -30, -25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-2 sm:p-3 space-y-1">
            <div className="w-full h-1 bg-brutalist-gray rounded"></div>
            <div className="w-4/5 h-1 bg-brutalist-gray rounded"></div>
            <div className="w-3/4 h-1 bg-brutalist-gray rounded"></div>
          </div>
        </motion.div>
        
        {/* Right page */}
        <motion.div
          className="absolute w-24 h-32 sm:w-28 sm:h-40 lg:w-32 lg:h-48 bg-brutalist-white border-4 border-brutalist-black rounded-r-lg shadow-brutalist-lg -left-20"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: [25, 30, 25] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        >
          <div className="p-2 sm:p-3 space-y-1">
            <div className="w-full h-1 bg-brutalist-gray rounded"></div>
            <div className="w-5/6 h-1 bg-brutalist-gray rounded"></div>
            <div className="w-2/3 h-1 bg-brutalist-gray rounded"></div>
          </div>
        </motion.div>
        
        {/* Center content */}
        <div className="relative w-16 h-32 sm:w-20 sm:h-40 lg:w-24 lg:h-48 bg-brutalist-accent border-4 border-brutalist-black rounded-lg shadow-brutalist-xl flex items-center justify-center">
          <BookOpen size={32} className="text-brutalist-white" />
        </div>
      </motion.div>
      
      {/* Floating elements along curved paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.g key={index}>
              <motion.path
                d={element.path}
                stroke="none"
                fill="none"
                className="text-brutalist-accent"
              />
              <motion.foreignObject
                x="0"
                y="0"
                width="500"
                height="400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: element.delay }}
              >
                <motion.div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 border-4 border-brutalist-black bg-brutalist-white rounded-lg flex items-center justify-center shadow-brutalist-lg"
                  animate={{
                    offsetPath: `path('${element.path}')`,
                    offsetDistance: ['0%', '100%']
                  }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: element.delay
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <Icon size={24} className={element.color} />
                </motion.div>
              </motion.foreignObject>
            </motion.g>
          )
        })}
      </svg>
      
      {/* Writing pen animation */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: -45 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [-45, -50, -45]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 1.5,
            ease: "easeInOut"
          }}
        >
          <PenTool size={32} className="text-brutalist-black" />
        </motion.div>
      </motion.div>
      
      {/* Floating words/bubbles */}
      <motion.div
        className="absolute top-8 left-1/4 w-16 h-8 border-2 border-brutalist-accent bg-brutalist-white rounded-full flex items-center justify-center shadow-brutalist-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <span className="text-xs font-bold text-brutalist-accent">STORY</span>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 right-1/4 w-20 h-8 border-2 border-brutalist-black bg-brutalist-white rounded-full flex items-center justify-center shadow-brutalist-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <span className="text-xs font-bold text-brutalist-black">INSIGHTS</span>
      </motion.div>
      
      {/* Decorative ink splatters */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-brutalist-accent rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-brutalist-black rounded-full opacity-40"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
