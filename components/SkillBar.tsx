'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SkillBarProps {
  name: string
  level: number
  color?: string
  delay?: number
}

export default function SkillBar({ name, level, color = 'bg-brutalist-accent dark:bg-yellow-400', delay = 0 }: SkillBarProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= level) {
              clearInterval(interval)
              return level
            }
            return prev + 1
          })
        }, 15)
        return () => clearInterval(interval)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, level, delay])

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-lg font-bold text-brutalist-accent dark:text-yellow-400">
          {progress}%
        </span>
      </div>
      <div className="h-6 border-4 border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-gray-900 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
          style={{ width: `${progress}%` }}
        >
          {progress > 10 && (
            <span className="text-xs font-bold text-brutalist-black">
              {progress >= 100 ? '✓' : ''}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
