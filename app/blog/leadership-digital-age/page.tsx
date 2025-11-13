import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Lightbulb, Users, Award } from 'lucide-react'

export default function LeadershipPost() {
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
            <span className="inline-block px-4 py-2 bg-purple-500 text-white border-2 border-brutalist-black text-sm font-bold mb-4">
              LEADERSHIP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leadership in the Digital Age: Navigating Technology and Teams
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-brutalist-gray">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="font-bold">August 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="font-bold">6 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-l-8 border-purple-500 pl-6 py-4 mb-8 bg-gray-50">
              <p className="text-xl font-bold italic">
                "Leadership is not about being in charge. It's about taking care of those in your charge."
                — Simon Sinek
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              In an era of rapid technological advancement, leadership has taken on new dimensions. 
              As someone studying both technology and business, I've discovered that effective leadership 
              in the digital age requires a unique blend of technical understanding, emotional intelligence, 
              and adaptive thinking. My journey into leadership has been both challenging and transformative, 
              teaching me lessons that extend far beyond the classroom.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Lightbulb className="inline mr-3" size={32} />
              THE EVOLVING LEADERSHIP PARADIGM
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Traditional leadership models often emphasize hierarchy and control. However, the digital age 
              demands a more collaborative and agile approach. Technology has flattened organizational structures, 
              enabled remote work, and accelerated the pace of change. Leaders must now navigate complexity 
              while fostering innovation and maintaining team cohesion across distributed environments.
            </p>

            <div className="my-8 p-6 bg-purple-50 border-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-4">DIGITAL LEADERSHIP COMPETENCIES</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Digital literacy and technological awareness</li>
                <li>Adaptive thinking and change management</li>
                <li>Virtual team management and communication</li>
                <li>Data-driven decision making</li>
                <li>Cybersecurity awareness and risk management</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              I've learned that technical knowledge alone doesn't make someone a technology leader. 
              The ability to translate complex technical concepts into business value, to inspire teams 
              through ambiguity, and to make tough decisions with incomplete information are what truly 
              set apart exceptional technology leaders.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Users className="inline mr-3" size={32} />
              BUILDING HIGH-PERFORMING TECH TEAMS
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              One of my most valuable leadership experiences was leading a team of six students in a 
              semester-long software development project. The challenge wasn't just technical—it was 
              managing different skill levels, work styles, and personalities while keeping everyone 
              motivated and focused on our common goal.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I discovered that psychological safety was the foundation of our success. Team members needed 
              to feel safe admitting mistakes, asking questions, and challenging ideas. Creating this environment 
              required consistent effort: celebrating learning from failures, encouraging diverse perspectives, 
              and modeling vulnerability as a leader.
            </p>

            <div className="my-8 p-6 bg-brutalist-black text-brutalist-white border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">TEAM LEADERSHIP STRATEGIES</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Establish clear goals and measurable outcomes</li>
                <li>Create channels for open feedback and communication</li>
                <li>Recognize and leverage individual strengths</li>
                <li>Foster a culture of continuous learning</li>
                <li>Lead by example with work ethic and integrity</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Award className="inline mr-3" size={32} />
              LEADING THROUGH INNOVATION
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Technology leadership isn't just about managing existing systems—it's about driving innovation. 
              I've learned that innovation requires creating space for experimentation, accepting calculated 
              risks, and learning from failures. The most innovative teams are those where leaders empower 
              individuals to pursue creative solutions while providing guidance and resources.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              In my role as a technology club officer, I implemented a "innovation hour" where members could 
              work on passion projects. This initiative led to several successful prototypes and, more importantly, 
              created a culture where creative thinking was valued and rewarded. Sometimes the best leadership 
              is knowing when to step back and let your team shine.
            </p>

            <div className="border-l-8 border-purple-500 pl-6 py-4 my-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-4">INNOVATION PRINCIPLES</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Fail Forward:</strong> Treat failures as learning opportunities and data points
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Diverse Thinking:</strong> Bring together different perspectives for better solutions
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Rapid Prototyping:</strong> Test ideas quickly and iterate based on feedback
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Cross-Pollination:</strong> Apply insights from different domains to solve problems
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              ETHICAL LEADERSHIP IN TECHNOLOGY
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As technology becomes more powerful, ethical leadership has never been more important. 
              Leaders must consider the broader impact of their decisions on society, privacy, and equality. 
              I've grappled with questions about data privacy, algorithmic bias, and the responsibility 
              that comes with building technology that affects people's lives.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              This has led me to advocate for responsible AI development, inclusive design practices, and 
              transparent data policies. Ethical leadership isn't about avoiding difficult conversations—it's 
              about initiating them and ensuring that technology serves humanity's best interests.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              LESSONS FROM THE TRENCHES
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              My leadership journey has taught me that theory and practice are two different things. 
              Real-world leadership involves messy situations, difficult conversations, and unexpected 
              challenges. Here are the lessons that have shaped my approach:
            </p>

            <div className="my-8 p-6 border-4 border-purple-500 bg-purple-50">
              <h3 className="text-2xl font-bold mb-4">KEY LEADERSHIP INSIGHTS</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Listen more than you speak—your team has valuable insights</li>
                <li>Admit when you're wrong—it builds trust and respect</li>
                <li>Celebrate small wins to maintain momentum and morale</li>
                <li>Be consistent in your decisions and communication</li>
                <li>Invest in your team's growth—your success is their success</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              CONCLUSION
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Leadership in the digital age is a continuous journey of learning and adaptation. 
              The rapid pace of technological change means that leaders must be perpetual students, 
              always ready to learn new skills and challenge their assumptions. But the fundamentals 
              remain constant: integrity, empathy, and a genuine commitment to helping others succeed.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As I prepare to enter the professional world, I'm excited about the opportunity to apply 
              these lessons in real-world settings. Technology will continue to evolve, but the need for 
              thoughtful, ethical, and inspiring leadership will always remain. My goal is to be the kind 
              of leader who not only drives innovation but also creates environments where people can do 
              their best work and grow both personally and professionally.
            </p>

            <div className="border-l-8 border-brutalist-black pl-6 py-4 mt-8 bg-gray-50">
              <p className="text-xl font-bold">
                True leadership isn't about having all the answers—it's about asking the right questions 
                and empowering others to find solutions together.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/blog/building-modern-web"
            className="brutalist-button"
          >
            ← PREVIOUS ARTICLE
          </Link>
          <Link 
            href="/blog"
            className="brutalist-button"
          >
            BACK TO BLOG
          </Link>
        </div>
      </div>
    </div>
  )
}
