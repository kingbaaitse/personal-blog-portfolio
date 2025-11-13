import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import BlogIllustration from '@/components/illustrations/BlogIllustration'

const blogPosts = [
  {
    slug: 'learning-journey',
    title: 'My Learning Journey: Adapting to Tertiary Education',
    excerpt: 'Reflecting on time management, study habits, and developing a growth mindset in university...',
    date: 'November 2025',
    readTime: '5 min read',
    category: 'Personal Growth',
  },
  {
    slug: 'group-work-reflection',
    title: 'Navigating Group Dynamics: A Tuckman Model Reflection',
    excerpt: 'An in-depth look at my group work experience this semester through the lens of Tuckman\'s stages...',
    date: 'November 2025',
    readTime: '6 min read',
    category: 'Collaboration',
  },
  {
    slug: 'data-analytics-transforming-business',
    title: 'The Power of Data Analytics: Transforming Business Intelligence',
    excerpt: 'Exploring how data analytics drives strategic decision-making and business innovation in the modern era...',
    date: 'October 2025',
    readTime: '7 min read',
    category: 'Technical Skills',
  },
  {
    slug: 'building-modern-web',
    title: 'Building the Modern Web: From HTML to Full-Stack Applications',
    excerpt: 'My journey through web development, from basic HTML to building complex full-stack applications with modern frameworks...',
    date: 'September 2025',
    readTime: '8 min read',
    category: 'Web Development',
  },
  {
    slug: 'leadership-digital-age',
    title: 'Leadership in the Digital Age: Navigating Technology and Teams',
    excerpt: 'Discovering the essential skills and mindset for leading technology teams in today\'s rapidly evolving digital landscape...',
    date: 'August 2025',
    readTime: '6 min read',
    category: 'Leadership',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <ScrollReveal />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 scroll-reveal">
          <div className="inline-block px-6 py-2 bg-brutalist-accent border-4 border-brutalist-black mb-6">
            <p className="text-lg font-bold">REFLECTIVE BLOG</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            THOUGHTS & REFLECTIONS
          </h1>
          <p className="text-xl md:text-2xl text-brutalist-gray max-w-3xl">
            Exploring my journey through data analytics, leadership insights, and continuous learning in the digital age.
          </p>
        </div>

        {/* Add Blog Illustration */}
        <div className="mb-16 scroll-reveal">
          <BlogIllustration />
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="brutalist-card p-8 md:p-12 scroll-reveal">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-sm font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-brutalist-gray">
                  <Calendar size={18} />
                  <span className="font-bold">{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-brutalist-gray">
                  <Clock size={18} />
                  <span className="font-bold">{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-brutalist-accent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-lg text-brutalist-gray mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-lg font-bold border-b-4 border-brutalist-black hover:bg-brutalist-accent hover:px-4 hover:py-2 transition-all duration-200"
              >
                READ FULL ARTICLE <ArrowRight size={20} />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 border-4 border-brutalist-black bg-primary">
            <p className="text-2xl font-bold mb-4 text-primary">MORE CONTENT COMING SOON</p>
            <p className="text-lg text-secondary">
              This blog is continuously updated with new reflections and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
