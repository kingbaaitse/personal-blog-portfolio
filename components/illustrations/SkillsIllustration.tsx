'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Target, Rocket, Brain, Cpu, Globe, Sparkles } from 'lucide-react'

export default function SkillsIllustration() {
  const skillOrbs = [
    { icon: Code, color: 'text-brutalist-accent', delay: 0.2, orbitRadius: 80, orbitSpeed: 10 },
    { icon: Palette, color: 'text-brutalist-black', delay: 0.4, orbitRadius: 120, orbitSpeed: 15 },
    { icon: Target, color: 'text-brutalist-accent', delay: 0.6, orbitRadius: 100, orbitSpeed: 12 },
    { icon: Rocket, color: 'text-brutalist-black', delay: 0.8, orbitRadius: 140, orbitSpeed: 20 }
  ]

  const floatingParticles = [
    { delay: 0, duration: 3 },
    { delay: 0.5, duration: 4 },
    { delay: 1, duration: 3.5 },
    { delay: 1.5, duration: 5 }
  ]

  return (
    <motion.div 
      className="relative w-full h-80 sm:h-96 lg:h-[28rem] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated neural network background */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="neuralGradient">
            <stop offset="0%" stopColor="currentColor" className="text-brutalist-accent" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="currentColor" className="text-brutalist-black" stopOpacity="0.1"/>
          </radialGradient>
        </defs>
        
        {/* Neural network connections */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={i}
            x1={200}
            y1={200}
            x2={200 + Math.cos(i * Math.PI / 4) * 150}
            y2={200 + Math.sin(i * Math.PI / 4) * 150}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
          />
        ))}
        
        {/* Neural nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + Math.cos(i * Math.PI / 4) * 150}
            cy={200 + Math.sin(i * Math.PI / 4) * 150}
            r="4"
            fill="currentColor"
            className="text-brutalist-accent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          />
        ))}
      </svg>
      
      {/* Central brain/core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-4 border-brutalist-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Middle pulsing ring */}
        <motion.div
          className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-4 border-brutalist-accent rounded-full inset-2 m-auto"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Core brain icon */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brutalist-white border-4 border-brutalist-black rounded-full flex items-center justify-center shadow-brutalist-xl m-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotate: 0 }}
        >
          <Brain size={32} className="text-brutalist-accent" />
        </motion.div>
      </motion.div>
      
      {/* Orbiting skill orbs */}
      {skillOrbs.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: 'translate(-50%, -50%)'
            }}
          >
            <motion.div
              className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brutalist-white border-4 border-brutalist-black rounded-lg flex items-center justify-center shadow-brutalist-lg"
              animate={{
                rotate: 360,
                x: skill.orbitRadius * Math.cos((Date.now() / 1000 / skill.orbitSpeed) * 2 * Math.PI),
                y: skill.orbitRadius * Math.sin((Date.now() / 1000 / skill.orbitSpeed) * 2 * Math.PI),
                opacity: 1,
                scale: 1
              }}
              transition={{
                rotate: { duration: skill.orbitSpeed, repeat: Infinity, ease: "easeInOut" },
                x: { duration: skill.orbitSpeed, repeat: Infinity, ease: "easeInOut" },
                y: { duration: skill.orbitSpeed, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: skill.delay },
                scale: { duration: 0.5, delay: skill.delay }
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.3, rotate: 0 }}
            >
              <Icon size={24} className={skill.color} />
            </motion.div>
          </motion.div>
        )
      })}
      
      {/* Floating skill particles */}
      {floatingParticles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-brutalist-accent rounded-full"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Skill constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 2 }}
        >
          {/* Connecting lines between skills */}
          <motion.line
            x1="100" y1="100" x2="300" y2="100"
            stroke="currentColor"
            className="text-brutalist-accent"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="300" y1="100" x2="300" y2="300"
            stroke="currentColor"
            className="text-brutalist-black"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="300" y1="300" x2="100" y2="300"
            stroke="currentColor"
            className="text-brutalist-accent"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="100" y1="300" x2="100" y2="100"
            stroke="currentColor"
            className="text-brutalist-black"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </motion.g>
      </svg>
      
      {/* Energy bursts */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0.8, 0, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut"
        }}
      >
        <Zap size={24} className="text-brutalist-accent" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/4"
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0.8, 0, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 3.5,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={24} className="text-brutalist-black" />
      </motion.div>
      
      {/* Skill level indicators */}
      <motion.div
        className="absolute top-8 right-8 w-20 h-2 bg-brutalist-gray rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '5rem' }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="h-full w-4/5 bg-brutalist-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1.5, delay: 3 }}
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-8 w-20 h-2 bg-brutalist-gray rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '5rem' }}
        transition={{ duration: 1, delay: 2.7 }}
      >
        <motion.div
          className="h-full w-3/4 bg-brutalist-black rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{ duration: 1.5, delay: 3.2 }}
        />
      </motion.div>
    </motion.div>
  )
}
