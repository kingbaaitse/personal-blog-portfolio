import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Users } from 'lucide-react'

export default function GroupWorkPost() {
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
            <span className="inline-block px-4 py-2 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold mb-4">
              COLLABORATION
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Navigating Group Dynamics: A Tuckman Model Reflection
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-brutalist-gray">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="font-bold">November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="font-bold">6 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-l-8 border-brutalist-accent pl-6 py-4 mb-8 bg-gray-50">
              <p className="text-xl font-bold italic">
                "Coming together is a beginning, staying together is progress, and working together is success." 
                — Henry Ford
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              This semester, I had the opportunity to work on a significant group project that tested not just 
              my technical skills, but more importantly, my ability to collaborate, communicate, and navigate 
              interpersonal dynamics. Looking back through the lens of Tuckman's stages of group development, 
              I can clearly see how our team progressed through each phase, and the valuable lessons learned 
              along the way.
            </p>

            {/* Team Photo */}
            <div className="my-8">
              <img 
                src="/images/IMG-20250925-WA0004.jpg" 
                alt="Our team working together on the group project" 
                className="w-full rounded-lg border-4 border-brutalist-black shadow-brutalist"
              />
              <p className="text-center text-sm text-brutalist-gray mt-2 italic">
                Our team collaborating during the project's final stages
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Users className="inline mr-3" size={32} />
              STAGE 1: FORMING
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When we first came together as a group of five students, there was a palpable mixture of excitement 
              and apprehension. We were strangers brought together by academic necessity, each carrying our own 
              expectations, work styles, and concerns about how the collaboration would unfold.
            </p>

            <div className="my-8 p-6 bg-brutalist-white border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">INITIAL OBSERVATIONS</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Everyone was polite, professional, and somewhat guarded</li>
                <li>We focused heavily on understanding the project requirements</li>
                <li>Initial role discussions were surface-level and diplomatic</li>
                <li>There was uncertainty about leadership and decision-making processes</li>
                <li>Team members were cautious about expressing dissenting opinions</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              During this phase, we spent considerable time in our first meetings simply getting to know each other, 
              discussing our schedules, and establishing basic communication channels. We created a WhatsApp group 
              and scheduled regular check-ins. Everything felt optimistic but somewhat superficial—we hadn't yet 
              encountered the challenges that would truly test our teamwork.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              STAGE 2: STORMING
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              If forming was characterized by politeness, storming was marked by reality. About two weeks into 
              the project, cracks began to appear. Different work ethic, conflicting schedules, and varying 
              standards of quality led to our first real conflicts. I remember one particularly tense meeting 
              where disagreements about the project direction became heated.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Two team members had completely different visions for our approach. One favored a conservative, 
              tested method, while another pushed for a more innovative but risky strategy. Meanwhile, concerns 
              emerged about unequal workload distribution—some felt they were carrying more weight than others.
            </p>

            <div className="my-8 p-6 bg-brutalist-accent border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">CHALLENGES FACED</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Conflicting communication styles causing misunderstandings</li>
                <li>Disagreements about task priorities and deadlines</li>
                <li>Emergence of cliques within the larger group</li>
                <li>Frustration with perceived lack of contribution from some members</li>
                <li>Tension between perfectionism and pragmatism</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              This was uncomfortable but necessary. I learned that conflict, when handled constructively, is not 
              the death of collaboration but rather a critical step toward genuine teamwork. We had to address 
              these issues head-on rather than let them fester.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              STAGE 3: NORMING
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              After our storming phase, we held a crucial "clearing the air" meeting. This was transformative. 
              We established ground rules, clarified expectations, and most importantly, created systems for 
              accountability and conflict resolution. This marked our transition into the norming stage.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              We implemented several key changes: created a shared project management board to track tasks, 
              established weekly check-ins with rotating facilitators, and agreed on clear deadlines with 
              buffer time. We also developed a system where each person's contribution would be reviewed by 
              at least one other team member, ensuring quality while distributing the load.
            </p>

            <div className="my-8 p-6 bg-brutalist-black text-brutalist-white border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">WHAT WORKED</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Transparent communication about workload and constraints</li>
                <li>Recognition of each person's unique strengths</li>
                <li>Flexible task allocation based on individual expertise</li>
                <li>Regular positive reinforcement and appreciation</li>
                <li>Willingness to compromise and adapt approaches</li>
              </ol>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              During this phase, I noticed a shift in our interactions. Humor emerged more naturally, people 
              felt comfortable sharing concerns without fear of judgment, and we started celebrating small wins 
              together. The group began to feel like an actual team.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              STAGE 4: PERFORMING
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              By the final stretch of our project, we had become a well-oiled machine. Tasks were completed 
              efficiently, communication was seamless, and problem-solving became collaborative rather than 
              combative. We had developed an intuitive understanding of each other's working styles and could 
              anticipate potential issues before they became problems.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              What impressed me most was how we handled unexpected challenges during this phase. When we 
              encountered a technical setback just days before our presentation, instead of panicking or 
              pointing fingers, we quickly regrouped, assessed our options, and implemented a solution. 
              Each person knew their role and executed it flawlessly.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              STAGE 5: ADJOURNING
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As our project concluded successfully, there was a bittersweet feeling. We had formed genuine 
              connections and developed an effective working relationship, but our collaboration was coming 
              to an end. In our final meeting, we took time to reflect on our journey, acknowledge each 
              person's contributions, and discuss lessons learned.
            </p>

            <div className="border-l-8 border-brutalist-accent pl-6 py-4 my-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-4">KEY TAKEAWAYS</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>1. Trust is earned through consistency:</strong> Reliable follow-through on commitments 
                builds trust faster than any team-building exercise.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>2. Conflict can be constructive:</strong> Disagreements, when handled respectfully, 
                lead to better solutions than artificial harmony.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>3. Communication is multifaceted:</strong> It's not just about talking—it's about 
                active listening, clarity, and emotional intelligence.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>4. Flexibility is crucial:</strong> Rigid adherence to initial plans often leads to 
                friction. Adaptability keeps teams functional.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>5. Appreciation matters:</strong> Acknowledging contributions, both big and small, 
                creates positive momentum and strengthens team bonds.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              CONCLUSION
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Understanding Tuckman's model gave me a framework to make sense of our group's journey. It normalized 
              the challenges we faced and provided reassurance that conflict and discomfort were not signs of 
              failure but natural stages of team development. This experience taught me that successful collaboration 
              requires patience, empathy, clear communication, and a willingness to work through difficulties rather 
              than around them.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As I move forward in my academic and professional career, I carry these lessons with me. I've learned 
              that the ability to work effectively in teams is not innate—it's a skill that must be developed 
              through experience, reflection, and intentional practice. Every group dynamic will be different, 
              but the fundamental principles of respect, communication, and collaboration remain constant.
            </p>

            <div className="border-l-8 border-brutalist-black pl-6 py-4 mt-8 bg-gray-50">
              <p className="text-xl font-bold">
                Group work is more than completing a project—it's about growing as a collaborator, communicator, 
                and teammate. These are skills that will serve me throughout my career and life.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/blog/learning-journey"
            className="bg-brutalist-white text-brutalist-black px-8 py-4 text-lg font-bold border-4 border-brutalist-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
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
