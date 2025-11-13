'use client'

import SkillBar from '@/components/SkillBar'
import { Code, Database, Palette, TrendingUp } from 'lucide-react'

export default function SkillsShowcase() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-6 py-2 bg-brutalist-accent dark:bg-yellow-400 border-4 border-brutalist-black dark:border-brutalist-white mb-6">
            <p className="text-lg font-bold">SKILL LEVELS</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MY EXPERTISE
          </h1>
          <p className="text-xl md:text-2xl text-brutalist-gray dark:text-gray-400 max-w-3xl">
            A detailed breakdown of my technical proficiency across various tools and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming & Data Analysis */}
          <div className="brutalist-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code size={32} className="text-brutalist-accent dark:text-yellow-400" />
              <h2 className="text-2xl font-bold">PROGRAMMING & DATA</h2>
            </div>
            <SkillBar name="Python" level={85} delay={0} />
            <SkillBar name="SQL" level={90} delay={100} />
            <SkillBar name="R Programming" level={70} delay={200} />
            <SkillBar name="JavaScript" level={75} delay={300} />
          </div>

          {/* Business Intelligence Tools */}
          <div className="brutalist-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database size={32} className="text-brutalist-accent dark:text-yellow-400" />
              <h2 className="text-2xl font-bold">BI TOOLS</h2>
            </div>
            <SkillBar name="Power BI" level={95} delay={0} color="bg-yellow-500" />
            <SkillBar name="Tableau" level={80} delay={100} color="bg-blue-500" />
            <SkillBar name="Excel Advanced" level={92} delay={200} color="bg-green-500" />
            <SkillBar name="Google Analytics" level={75} delay={300} color="bg-orange-500" />
          </div>

          {/* Design & Visualization */}
          <div className="brutalist-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Palette size={32} className="text-brutalist-accent dark:text-yellow-400" />
              <h2 className="text-2xl font-bold">DESIGN & VIZ</h2>
            </div>
            <SkillBar name="Data Visualization" level={88} delay={0} color="bg-purple-500" />
            <SkillBar name="Canva" level={90} delay={100} color="bg-pink-500" />
            <SkillBar name="UI/UX Basics" level={65} delay={200} color="bg-indigo-500" />
            <SkillBar name="Dashboard Design" level={85} delay={300} color="bg-teal-500" />
          </div>

          {/* Soft Skills */}
          <div className="brutalist-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={32} className="text-brutalist-accent dark:text-yellow-400" />
              <h2 className="text-2xl font-bold">SOFT SKILLS</h2>
            </div>
            <SkillBar name="Problem Solving" level={90} delay={0} color="bg-red-500" />
            <SkillBar name="Communication" level={85} delay={100} color="bg-blue-600" />
            <SkillBar name="Team Collaboration" level={88} delay={200} color="bg-green-600" />
            <SkillBar name="Time Management" level={82} delay={300} color="bg-yellow-600" />
          </div>
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 brutalist-card p-8">
          <h3 className="text-2xl font-bold mb-6">PROFICIENCY LEVELS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border-4 border-brutalist-black dark:border-brutalist-white">
              <p className="text-3xl font-bold mb-2">0-25%</p>
              <p className="font-bold">BEGINNER</p>
            </div>
            <div className="text-center p-4 border-4 border-brutalist-black dark:border-brutalist-white">
              <p className="text-3xl font-bold mb-2">26-50%</p>
              <p className="font-bold">LEARNING</p>
            </div>
            <div className="text-center p-4 border-4 border-brutalist-black dark:border-brutalist-white">
              <p className="text-3xl font-bold mb-2">51-75%</p>
              <p className="font-bold">INTERMEDIATE</p>
            </div>
            <div className="text-center p-4 border-4 border-brutalist-black dark:border-brutalist-white">
              <p className="text-3xl font-bold mb-2">76-100%</p>
              <p className="font-bold">ADVANCED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
