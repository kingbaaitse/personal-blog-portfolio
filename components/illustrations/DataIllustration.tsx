'use client'

import { motion } from 'framer-motion'
import { BarChart3, PieChart, TrendingUp, Database, Activity, LineChart } from 'lucide-react'

export default function DataIllustration() {
  const dataElements = [
    { icon: BarChart3, color: 'text-brutalist-accent', position: 'top-8 left-8', delay: 0.2 },
    { icon: PieChart, color: 'text-brutalist-black', position: 'top-8 right-8', delay: 0.4 },
    { icon: TrendingUp, color: 'text-brutalist-accent', position: 'bottom-8 left-8', delay: 0.6 },
    { icon: Database, color: 'text-brutalist-black', position: 'bottom-8 right-8', delay: 0.8 }
  ]

  return (
    <motion.div 
      className="relative w-full h-64 sm:h-80 lg:h-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dashboard background */}
      <motion.div
        className="absolute inset-4 sm:inset-6 lg:inset-8 border-4 border-brutalist-black bg-brutalist-white rounded-lg shadow-brutalist-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Dashboard header */}
        <div className="border-b-4 border-brutalist-accent p-4 sm:p-6">
          <motion.div 
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Activity size={20} className="text-brutalist-accent" />
            <div className="w-20 h-3 bg-brutalist-accent rounded"></div>
          </motion.div>
          <motion.div 
            className="w-32 h-2 bg-brutalist-black rounded"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>
        
        {/* Chart area */}
        <div className="p-4 sm:p-6">
          {/* Bar chart visualization */}
          <motion.div 
            className="flex items-end gap-2 h-16 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="w-4 h-8 bg-brutalist-accent rounded"></div>
            <div className="w-4 h-12 bg-brutalist-black rounded"></div>
            <div className="w-4 h-6 bg-brutalist-accent rounded"></div>
            <div className="w-4 h-16 bg-brutalist-black rounded"></div>
            <div className="w-4 h-10 bg-brutalist-accent rounded"></div>
            <div className="w-4 h-14 bg-brutalist-black rounded"></div>
          </motion.div>
          
          {/* Line chart visualization */}
          <motion.div 
            className="relative h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 50">
              <motion.polyline
                points="10,40 50,30 90,35 130,20 170,25 190,15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-brutalist-accent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Data icons */}
      {dataElements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${element.position}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: element.delay }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-4 border-brutalist-black bg-brutalist-white rounded-lg flex items-center justify-center shadow-brutalist-lg">
              <Icon size={24} className={element.color} />
            </div>
          </motion.div>
        )
      })}
      
      {/* Center analytics badge */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border-4 border-brutalist-accent bg-brutalist-white rounded-lg flex items-center justify-center shadow-brutalist-xl"
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        whileHover={{ scale: 1.1, rotate: 15 }}
      >
        <div className="text-center">
          <LineChart size={28} className="text-brutalist-accent mx-auto mb-1" />
          <span className="text-xs sm:text-sm font-bold text-brutalist-black">DATA</span>
        </div>
      </motion.div>
      
      {/* Floating data points */}
      <motion.div
        className="absolute top-12 right-1/4 w-3 h-3 bg-brutalist-accent rounded-full"
        animate={{ scale: [1, 1.5, 1], y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 left-1/4 w-4 h-4 bg-brutalist-black rounded-full"
        animate={{ scale: [1, 1.3, 1], y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
