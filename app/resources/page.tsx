import { BookOpen, Clock, Video, Headphones, Lightbulb, Brain, Target, Zap } from 'lucide-react'

const studyTips = [
  {
    title: 'Pomodoro Technique',
    description: 'Work in focused 25-minute intervals with 5-minute breaks. After 4 sessions, take a longer 15-30 minute break.',
    icon: Clock,
    benefit: 'Maintains focus and prevents burnout',
  },
  {
    title: 'Active Recall',
    description: 'Test yourself on material instead of passively re-reading. Close your notes and try to recall key concepts.',
    icon: Brain,
    benefit: 'Significantly improves retention',
  },
  {
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals over time. Study today, tomorrow, in 3 days, in a week, etc.',
    icon: Target,
    benefit: 'Long-term memory consolidation',
  },
  {
    title: 'The Feynman Technique',
    description: 'Explain concepts in simple terms as if teaching someone else. Identify gaps in your understanding.',
    icon: Lightbulb,
    benefit: 'Deepens understanding and exposes weaknesses',
  },
]

const resources = [
  {
    category: 'YOUTUBE CHANNELS',
    icon: Video,
    color: 'bg-red-500',
    items: [
      { name: 'Ali Abdaal', description: 'Productivity, study techniques, and evidence-based learning strategies' },
      { name: 'Thomas Frank', description: 'Study tips, productivity systems, and academic success' },
      { name: 'CrashCourse', description: 'Quick, entertaining overviews of various academic subjects' },
      { name: 'Khan Academy', description: 'Free comprehensive lessons on math, science, and more' },
    ],
  },
  {
    category: 'STUDY TOOLS',
    icon: Zap,
    color: 'bg-yellow-500',
    items: [
      { name: 'Anki', description: 'Powerful spaced repetition flashcard system for memorization' },
      { name: 'Notion', description: 'All-in-one workspace for notes, tasks, and project management' },
      { name: 'Forest App', description: 'Stay focused by growing virtual trees during study sessions' },
      { name: 'Quizlet', description: 'Create and study flashcards with various study modes' },
    ],
  },
  {
    category: 'PODCASTS',
    icon: Headphones,
    color: 'bg-purple-500',
    items: [
      { name: 'The Learning Scientists', description: 'Evidence-based strategies to improve learning' },
      { name: 'Study With Jess', description: 'Study motivation, tips, and student life advice' },
      { name: 'Huberman Lab', description: 'Neuroscience of learning, focus, and performance' },
    ],
  },
  {
    category: 'READING & WEBSITES',
    icon: BookOpen,
    color: 'bg-blue-500',
    items: [
      { name: 'Coursera', description: 'Free online courses from top universities worldwide' },
      { name: 'Medium', description: 'Articles on productivity, learning, and personal development' },
      { name: 'Reddit r/GetStudying', description: 'Community for study tips, accountability, and motivation' },
      { name: 'Study Guides and Strategies', description: 'Comprehensive resource on study techniques' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-6 py-2 bg-brutalist-accent border-4 border-brutalist-black mb-6">
            <p className="text-lg font-bold">STUDY RESOURCES</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TOOLS FOR SUCCESS
          </h1>
          <p className="text-xl md:text-2xl text-brutalist-gray max-w-3xl">
            Curated study strategies, tools, and resources that have genuinely helped me improve 
            my learning efficiency and academic performance.
          </p>
        </div>

        {/* Study Tips Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 pb-4 border-b-8 border-brutalist-black">
            PROVEN STUDY TECHNIQUES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {studyTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="brutalist-card p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-brutalist-black flex-shrink-0">
                      <Icon size={32} className="text-brutalist-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
                      <span className="inline-block px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-xs font-bold">
                        {tip.benefit}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-brutalist-gray leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* My Personal Study Routine */}
        <section className="mb-20">
          <div className="brutalist-section bg-brutalist-black text-brutalist-white">
            <h2 className="text-4xl font-bold mb-8">MY STUDY ROUTINE</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-brutalist-white">
                  DAILY HABITS
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Review notes within 24 hours of each lecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>30-minute focused study sessions with 5-minute breaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Use active recall techniques for memorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Practice problems instead of just reading examples</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-brutalist-white">
                  WEEKLY STRATEGY
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Sunday planning session to map out the week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Join or organize study groups for challenging subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Friday review of the week's material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brutalist-accent text-2xl">•</span>
                    <span>Balance academics with physical activity and social time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Categories */}
        <section>
          <h2 className="text-4xl font-bold mb-8 pb-4 border-b-8 border-brutalist-black">
            RECOMMENDED RESOURCES
          </h2>
          
          <div className="space-y-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div key={index} className="brutalist-card p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 ${resource.color} border-4 border-brutalist-black`}>
                      <Icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{resource.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {resource.items.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-brutalist-black pl-6">
                        <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                        <p className="text-lg text-brutalist-gray">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mt-16">
          <div className="brutalist-card p-8 md:p-12 bg-brutalist-accent">
            <h2 className="text-3xl font-bold mb-8 text-center">
              💡 BONUS STUDY TIPS
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brutalist-white p-6 border-4 border-brutalist-black">
                <h3 className="text-xl font-bold mb-3">Study Environment</h3>
                <p className="text-base">
                  Keep your study space clean, well-lit, and distraction-free. Different locations 
                  for different tasks can help your brain context-switch.
                </p>
              </div>

              <div className="bg-brutalist-white p-6 border-4 border-brutalist-black">
                <h3 className="text-xl font-bold mb-3">Sleep & Nutrition</h3>
                <p className="text-base">
                  7-9 hours of sleep is non-negotiable. Stay hydrated and eat brain-healthy foods. 
                  No amount of studying can compensate for poor self-care.
                </p>
              </div>

              <div className="bg-brutalist-white p-6 border-4 border-brutalist-black">
                <h3 className="text-xl font-bold mb-3">Consistency Over Cramming</h3>
                <p className="text-base">
                  30 minutes daily beats 5-hour cram sessions. Build sustainable habits rather than 
                  relying on last-minute heroics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="mt-16 text-center">
          <div className="inline-block p-8 border-4 border-brutalist-black bg-brutalist-white max-w-3xl">
            <p className="text-2xl font-bold mb-4">
              REMEMBER: Everyone Learns Differently
            </p>
            <p className="text-lg text-brutalist-gray">
              These resources and techniques work well for me, but you should experiment to find 
              what fits your learning style. The best study system is the one you'll actually use 
              consistently. Start small, track what works, and iterate.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
