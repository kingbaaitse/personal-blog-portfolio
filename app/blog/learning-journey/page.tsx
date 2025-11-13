import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

export default function LearningJourneyPost() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-lg font-bold mb-8 border-b-4 border-brutalist-black hover:bg-brutalist-accent hover:px-4 hover:py-2 transition-all duration-200"
        >
          <ArrowLeft size={20} /> BACK TO BLOG
        </Link>

        {/* Article Header */}
        <article className="brutalist-section">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-sm font-bold mb-4">
              PERSONAL GROWTH
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Learning Journey: Adapting to Tertiary Education
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-brutalist-gray">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="font-bold">November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="font-bold">5 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-l-8 border-brutalist-accent pl-6 py-4 mb-8 bg-gray-50">
              <p className="text-xl font-bold italic">
                "The journey of a thousand miles begins with a single step, and my journey through tertiary 
                education has been a transformative experience of continuous growth and adaptation."
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              THE TRANSITION CHALLENGE
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When I first stepped onto campus, I quickly realized that university was nothing like high school. 
              The independence, the workload, and the expectations were all significantly higher. I remember 
              feeling overwhelmed during my first semester, trying to balance lectures, assignments, and personal 
              life while adjusting to this new environment.
            </p>

            {/* Campus Life Photo */}
            <div className="my-8">
              <img 
                src="/images/IMG_20250904_133340.jpg" 
                alt="My journey adapting to tertiary education" 
                className="w-full rounded-lg border-4 border-brutalist-black shadow-brutalist"
              />
              <p className="text-center text-sm text-brutalist-gray mt-2 italic">
                A moment of reflection during my academic journey
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              What struck me most was the shift in responsibility. No one was going to chase me for assignments 
              or remind me about deadlines. I was solely responsible for my academic success, and this realization 
              was both liberating and terrifying. I had to develop new strategies, new habits, and ultimately, 
              a new mindset.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              MASTERING TIME MANAGEMENT
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              One of my biggest challenges was time management. Initially, I underestimated how much time tasks 
              would take and often found myself rushing to meet deadlines. Through trial and error, I discovered 
              several techniques that transformed my approach:
            </p>

            <div className="my-8 p-6 bg-brutalist-black text-brutalist-white border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">KEY TIME MANAGEMENT STRATEGIES</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Using a digital calendar to track all deadlines and commitments</li>
                <li>Breaking large projects into smaller, manageable tasks</li>
                <li>Implementing the Pomodoro Technique for focused study sessions</li>
                <li>Learning to say no to commitments that don't align with my priorities</li>
                <li>Setting aside specific times for different activities</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              These strategies didn't just help me meet deadlines; they reduced my stress levels significantly 
              and gave me back a sense of control over my schedule. I learned that effective time management 
              isn't about doing more—it's about doing what matters most.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              EVOLVING STUDY HABITS
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              My study habits from high school simply didn't cut it at university. I had to completely reimagine 
              how I approached learning. Instead of passive reading and last-minute cramming, I adopted active 
              learning techniques that enhanced both my understanding and retention.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I started creating mind maps to visualize connections between concepts, practicing active recall 
              instead of just re-reading notes, and teaching concepts to peers to solidify my understanding. 
              The library became my second home, and I discovered the power of study groups where diverse 
              perspectives enriched my learning experience.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              CULTIVATING A GROWTH MINDSET
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Perhaps the most important lesson I've learned is the value of a growth mindset. There were moments 
              when I failed—exams I didn't ace, presentations that didn't go as planned, and concepts I struggled 
              to grasp. Initially, these setbacks shook my confidence.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              However, I learned to reframe failure as feedback. Each challenge became an opportunity to learn 
              something new about myself and my capabilities. I started asking myself: "What can I learn from this?" 
              instead of "Why can't I do this?" This shift in perspective has been transformative, turning obstacles 
              into stepping stones.
            </p>

            <div className="my-8 p-6 border-4 border-brutalist-accent bg-brutalist-accent">
              <h3 className="text-2xl font-bold mb-4">LESSONS LEARNED</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Embrace discomfort—that's where growth happens</li>
                <li>Consistency trumps intensity in the long run</li>
                <li>Self-care isn't selfish; it's essential for sustainable success</li>
                <li>Mistakes are data points, not definitions of your ability</li>
                <li>Building a support network is crucial for academic success</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              LOOKING FORWARD
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As I continue my academic journey, I recognize that learning is not a destination but an ongoing 
              process. The skills I've developed—time management, effective study habits, and a growth mindset—
              extend far beyond the classroom. They're life skills that will serve me in whatever career path 
              I choose.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I'm excited about the challenges that lie ahead, knowing that each one will push me to grow. 
              University has taught me that I'm capable of far more than I initially believed, and that the 
              greatest limitations are often the ones we place on ourselves.
            </p>

            <div className="border-l-8 border-brutalist-black pl-6 py-4 mt-8 bg-gray-50">
              <p className="text-xl font-bold">
                The journey continues, and I'm ready for whatever comes next.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/blog"
            className="brutalist-button"
          >
            BACK TO BLOG
          </Link>
          <Link 
            href="/blog/group-work-reflection"
            className="bg-brutalist-white text-brutalist-black px-8 py-4 text-lg font-bold border-4 border-brutalist-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            NEXT ARTICLE →
          </Link>
        </div>
      </div>
    </div>
  )
}
