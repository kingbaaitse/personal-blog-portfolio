import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import TypingEffect from '@/components/TypingEffect'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="brutalist-section">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-block px-3 sm:px-4 lg:px-6 py-1 sm:py-2 bg-brutalist-accent border-2 sm:border-4 border-brutalist-black mb-4 sm:mb-6 lg:mb-8 entrance-animation">
                  <p className="text-sm sm:text-base lg:text-lg font-bold">DIGITAL PORTFOLIO</p>
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight heading-animate">
                  HELLO, I'M
                  <br />
                  <span className="relative inline-block">
                    LEATILE KING BAAITSE
                    <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 lg:h-4 bg-brutalist-accent -z-10"></div>
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-12 max-w-3xl leading-relaxed text-brutalist-gray text-animate entrance-delay-1">
                  <TypingEffect 
                    text="A passionate Business Intelligence & Data Analytics student at Botswana Accountancy College, navigating the exciting journey of academic and professional development in the digital age. Welcome to my space where I document growth, skills, and experiences."
                    speed={30}
                    className="inline-block"
                  />
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 entrance-delay-2">
                  <Link href="/cv" className="brutalist-button text-center sm:text-left">
                    VIEW MY CV
                  </Link>
                  <Link 
                    href="/blog" 
                    className="brutalist-button inline-flex items-center justify-center sm:justify-start gap-2"
                  >
                    READ MY BLOG <ArrowRight size={12} className="sm:size-14 md:size-16 lg:size-8 xl:size-10" />
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative image-animate entrance-delay-3">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-2xl overflow-hidden shadow-brutalist-xl hover:shadow-brutalist-2xl transition-all duration-300 hover:scale-105 relative">
                    <Image 
                      src="/images/Baaitse.png" 
                      alt="Leatile King Baaitse" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="bg-brutalist-accent border-2 sm:border-4 border-brutalist-black px-2 sm:px-3 py-1.5 sm:py-2 md:py-3 inline-block">
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">LEATILE KING BAAITSE</p>
                        <p className="text-xs sm:text-xs md:text-sm font-bold">DATA ANALYST & BI SPECIALIST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brutalist-black text-brutalist-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="inline-block px-6 py-2 bg-brutalist-accent border-4 border-brutalist-white mb-6">
                <p className="text-lg font-bold">ABOUT ME</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WHO I AM
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm currently pursuing my BSc (Hons) in Business Intelligence & Data Analytics at Botswana Accountancy College, where I'm 
                  constantly learning and evolving both academically and professionally in the field of data analysis and business intelligence.
                </p>
                <p>
                  My journey in higher education has been transformative, teaching me not just technical 
                  skills but also critical thinking, collaboration, and adaptability—skills essential for 
                  the modern workplace.
                </p>
                <p>
                  This portfolio serves as a living document of my growth, showcasing my projects, 
                  reflections, and readiness for opportunities like internships and professional attachments.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-brutalist-white p-8 bg-brutalist-black hover:bg-brutalist-white hover:text-brutalist-black transition-all duration-300 group">
                <GraduationCap size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">ACADEMIC FOCUS</h3>
                <p className="text-lg">
                  Studying Business Intelligence & Data Analytics with interests in data mining, statistical analysis, and business intelligence systems. 
                  Maintaining strong academic performance (GPA: 3.8/4.0) while engaging in practical projects and internships.
                </p>
              </div>

              <div className="border-4 border-brutalist-white p-8 bg-brutalist-black hover:bg-brutalist-white hover:text-brutalist-black transition-all duration-300 group">
                <Briefcase size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">PROFESSIONAL GOALS</h3>
                <p className="text-lg">
                  Seeking opportunities to apply classroom knowledge in real-world settings through 
                  internships and collaborative projects.
                </p>
              </div>

              <div className="border-4 border-brutalist-white p-8 bg-brutalist-black hover:bg-brutalist-white hover:text-brutalist-black transition-all duration-300 group">
                <Sparkles size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">PERSONAL INTERESTS</h3>
                <p className="text-lg">
                  Beyond academics, I enjoy data visualization, creating dashboards, and staying current with industry 
                  trends in analytics, machine learning, and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">MY CORE VALUES</h2>
            <p className="text-xl text-brutalist-gray max-w-3xl mx-auto">
              These principles guide my academic journey and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="brutalist-card p-8">
              <div className="w-16 h-16 bg-brutalist-black flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-brutalist-white">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">CONTINUOUS LEARNING</h3>
              <p className="text-lg text-brutalist-gray">
                Committed to growth through curiosity, experimentation, and embracing challenges 
                as opportunities to develop new skills.
              </p>
            </div>

            <div className="brutalist-card p-8">
              <div className="w-16 h-16 bg-brutalist-black flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-brutalist-white">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">COLLABORATION</h3>
              <p className="text-lg text-brutalist-gray">
                Valuing teamwork and diverse perspectives, understanding that the best solutions 
                come from collective effort and open communication.
              </p>
            </div>

            <div className="brutalist-card p-8">
              <div className="w-16 h-16 bg-brutalist-black flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-brutalist-white">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-lg text-brutalist-gray">
                Striving for quality in everything I do, from academic work to personal projects, 
                with attention to detail and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brutalist-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S CONNECT
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            <TypingEffect 
              text="Interested in collaboration, internship opportunities, or just want to chat? Explore my work and get in touch!"
              speed={40}
              className="inline-block"
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/skills" className="brutalist-button">
              VIEW MY SKILLS
            </Link>
            <Link href="/resources" className="bg-brutalist-white text-brutalist-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-bold border-2 sm:border-4 border-brutalist-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              STUDY RESOURCES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
