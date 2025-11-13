import { Code, Palette, Database, Globe, TrendingUp, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SkillsIllustration from '@/components/illustrations/SkillsIllustration'

const skills = [
  {
    name: 'Microsoft Excel',
    category: 'Productivity',
    description: 'Advanced data analysis, pivot tables, VLOOKUP, macros, and data visualization.',
    level: 'Advanced',
    icon: Database,
    color: 'bg-green-500',
  },
  {
    name: 'Python Programming',
    category: 'Development',
    description: 'Data analysis with Pandas, web scraping, automation scripts, and basic machine learning.',
    level: 'Intermediate',
    icon: Code,
    color: 'bg-blue-500',
  },
  {
    name: 'Canva Design',
    category: 'Design',
    description: 'Creating professional presentations, social media graphics, infographics, and branding materials.',
    level: 'Advanced',
    icon: Palette,
    color: 'bg-purple-500',
  },
]

const projects = [
  {
    title: 'Student Data Dashboard',
    description: 'An interactive dashboard analyzing student performance metrics across multiple semesters with real-time data visualization and automated reporting using Power BI and Excel.',
    skills: ['Power BI', 'Excel', 'Data Analysis', 'Visualization'],
    image: 'https://cdn.boldbi.com/wp/pages/dashboards/education/student-performance-banner-v1.webp',
  },
  {
    title: 'Social Media Content Calendar',
    description: 'Designed a comprehensive content calendar template in Canva for a student organization, including post designs, scheduling system, and analytics tracking.',
    skills: ['Canva', 'Design', 'Planning', 'Social Media'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VBB9lbF0JKa4vKyf1zh4oTUc_d9-jIUblQ&s',
  },
  {
    title: 'Web Scraping Tool',
    description: 'Python script that automates data collection from educational websites, saving 10+ hours per week on manual data entry with BeautifulSoup and Pandas.',
    skills: ['Python', 'Automation', 'BeautifulSoup', 'Pandas'],
    image: 'data:image/png;base64,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',
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <ScrollReveal />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 scroll-reveal">
          <div className="inline-block px-3 sm:px-4 lg:px-6 py-1 sm:py-2 bg-brutalist-accent border-2 sm:border-4 border-brutalist-black mb-4 sm:mb-6">
            <p className="text-sm sm:text-base lg:text-lg font-bold">SKILLS & PROJECTS</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            WHAT I CAN DO
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brutalist-gray max-w-3xl">
            A comprehensive overview of my technical skills, tools, and hands-on projects that demonstrate my capabilities in data analytics and business intelligence.
          </p>
        </div>

        {/* Add Skills Illustration */}
        <div className="mb-12 lg:mb-16 scroll-reveal">
          <SkillsIllustration />
        </div>

        {/* Skills Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
          <h2 className="text-4xl font-bold mb-8 pb-4 border-b-8 border-brutalist-black">
            CORE SKILLS
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="brutalist-card">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-3 sm:p-4 ${skill.color} border-2 sm:border-4 border-brutalist-black`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="px-3 py-1 sm:px-4 sm:py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-xs sm:text-sm font-bold">
                      {skill.level}
                    </span>
                  </div>
                  
                  <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-brutalist-accent border-2 border-brutalist-black text-xs font-bold mb-2 sm:mb-3">
                    {skill.category}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{skill.name}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-brutalist-gray leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Additional Skills */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl font-bold mb-8 pb-4 border-b-8 border-brutalist-black">
            TECHNICAL TOOLKIT
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="brutalist-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code size={32} className="flex-shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">PROGRAMMING & TOOLS</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['JavaScript', 'HTML/CSS', 'Git', 'VS Code', 'SQL', 'R'].map((tech) => (
                  <span key={tech} className="px-3 py-1 sm:px-4 sm:py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black font-bold text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="brutalist-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Globe size={32} className="flex-shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">DIGITAL MARKETING</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Social Media', 'Content Creation', 'Analytics', 'SEO Basics', 'Email Marketing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 sm:px-4 sm:py-2 bg-brutalist-white border-2 border-brutalist-black font-bold text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="brutalist-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <TrendingUp size={32} className="flex-shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">BUSINESS SKILLS</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Project Management', 'Data Analysis', 'Presentation', 'Research', 'Documentation'].map((skill) => (
                  <span key={skill} className="px-3 py-1 sm:px-4 sm:py-2 bg-brutalist-accent border-2 border-brutalist-black font-bold text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="brutalist-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={32} className="flex-shrink-0" />
                <h3 className="text-2xl font-bold">SOFT SKILLS</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Communication', 'Teamwork', 'Problem-Solving', 'Time Management', 'Adaptability', 'Critical Thinking'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-brutalist-white border-2 border-brutalist-black font-bold text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 pb-4 border-b-8 border-brutalist-black">
            FEATURED PROJECTS
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="brutalist-card p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 border-4 border-brutalist-black bg-brutalist-accent overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <span className="inline-block px-4 py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-xs font-bold">
                        PROJECT #{index + 1}
                      </span>
                    </div>
                    
                    <p className="text-lg text-brutalist-gray mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-brutalist-white border-2 border-brutalist-black font-bold text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="brutalist-section text-center bg-brutalist-black text-brutalist-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ALWAYS LEARNING, ALWAYS GROWING
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              These skills represent my current capabilities, but I'm committed to continuous improvement 
              and excited to learn new technologies and methodologies.
            </p>
            <div className="inline-block p-6 bg-brutalist-accent border-4 border-brutalist-white">
              <p className="text-2xl font-bold">
                Ready to collaborate? Let's connect!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
