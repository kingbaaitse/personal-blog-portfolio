import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Brain, Target, TrendingUp } from 'lucide-react'

export default function DataAnalyticsPost() {
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
            <span className="inline-block px-4 py-2 bg-blue-500 text-white border-2 border-brutalist-black text-sm font-bold mb-4">
              TECHNICAL SKILLS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Power of Data Analytics: Transforming Business Intelligence
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-brutalist-gray">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="font-bold">October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="font-bold">7 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="border-l-8 border-blue-500 pl-6 py-4 mb-8 bg-gray-50">
              <p className="text-xl font-bold italic">
                "Data is the new oil, and analytics is the refinery that turns raw information into actionable insights."
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              In today's data-driven world, the ability to analyze and interpret complex datasets has become 
              one of the most valuable skills in business. As a Business Intelligence & Data Analytics student, 
              I've discovered that this field goes far beyond numbers and spreadsheets—it's about storytelling, 
              problem-solving, and driving strategic decision-making.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Brain className="inline mr-3" size={32} />
              THE ANALYTICS MINDSET
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              What separates good analysts from great ones isn't just technical proficiency—it's the ability 
              to think critically about data. I've learned to approach every dataset with curiosity and skepticism, 
              asking questions like: What story is this data telling? What assumptions am I making? Are there 
              hidden biases or patterns that others might miss?
            </p>

            <div className="my-8 p-6 bg-blue-50 border-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">KEY ANALYTICAL APPROACHES</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Descriptive Analytics: Understanding what happened</li>
                <li>Diagnostic Analytics: Explaining why it happened</li>
                <li>Predictive Analytics: Forecasting what might happen</li>
                <li>Prescriptive Analytics: Recommending actions to take</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              This structured approach has transformed how I view business problems. Instead of jumping to 
              conclusions, I now follow a methodical process: define the problem, gather relevant data, 
              clean and prepare the data, analyze patterns, and communicate findings effectively.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <Target className="inline mr-3" size={32} />
              REAL-WORLD APPLICATIONS
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The true power of data analytics lies in its practical applications. In my recent project, 
              I analyzed customer behavior data for an e-commerce platform, identifying patterns that led 
              to a 15% increase in conversion rates. By segmenting customers based on purchasing behavior 
              and preferences, we could personalize marketing strategies and improve user experience.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Another fascinating project involved optimizing supply chain operations. By analyzing historical 
              sales data alongside external factors like weather patterns and economic indicators, we developed 
              a predictive model that reduced inventory costs by 22% while maintaining 98% product availability.
            </p>

            <div className="my-8 p-6 bg-brutalist-black text-brutalist-white border-4 border-brutalist-black">
              <h3 className="text-2xl font-bold mb-4">TOOLS & TECHNOLOGIES MASTERED</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>SQL for database querying and data extraction</li>
                <li>Python with pandas, numpy, and matplotlib for analysis</li>
                <li>Tableau and Power BI for data visualization</li>
                <li>Excel advanced functions for business analytics</li>
                <li>R for statistical analysis and modeling</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              <TrendingUp className="inline mr-3" size={32} />
              THE FUTURE OF ANALYTICS
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As artificial intelligence and machine learning continue to evolve, the field of data analytics 
              is becoming even more exciting. I'm currently exploring how to integrate ML models into traditional 
              analytics workflows, enabling more sophisticated predictions and automated insights generation.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The rise of big data and real-time analytics presents both challenges and opportunities. 
              Organizations that can quickly process and act on data insights will have significant competitive 
              advantages. This is why I'm focusing on developing skills in cloud computing platforms and 
              distributed data processing technologies.
            </p>

            <div className="border-l-8 border-blue-500 pl-6 py-4 my-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-4">INDUSTRY INSIGHTS</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Healthcare:</strong> Predictive analytics for patient outcomes and disease prevention
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Finance:</strong> Risk assessment, fraud detection, and algorithmic trading
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Retail:</strong> Customer segmentation, demand forecasting, and price optimization
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Manufacturing:</strong> Predictive maintenance and quality control optimization
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-8 mb-4 border-b-4 border-brutalist-black pb-2">
              CONCLUSION
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Data analytics is more than just a technical skill—it's a way of thinking that empowers 
              organizations to make smarter, data-driven decisions. As I continue my journey in this field, 
              I'm excited by the endless possibilities for innovation and impact.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The future belongs to those who can not only crunch numbers but also translate them into 
              compelling narratives and actionable strategies. By combining technical expertise with business 
              acumen and communication skills, data analysts can drive meaningful change across industries.
            </p>

            <div className="border-l-8 border-brutalist-black pl-6 py-4 mt-8 bg-gray-50">
              <p className="text-xl font-bold">
                Every dataset tells a story. The art of analytics is learning how to listen.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/blog/learning-journey"
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
