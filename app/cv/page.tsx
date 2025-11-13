import { Download, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Code, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CVIllustration from '@/components/illustrations/CVIllustration'

export default function CVPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <ScrollReveal />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="brutalist-section mb-6 sm:mb-8 scroll-reveal">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-brutalist-black flex-shrink-0 relative">
                <Image 
                  src="/images/Baaitse.png" 
                  alt="Leatile King Baaitse" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">LEATILE KING BAAITSE</h1>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm">
                    <Mail size={10} className="sm:size-12 md:size-14 lg:size-8 xl:size-10" />
                    <span className="break-all">leatile.m.baaitse@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm">
                    <Phone size={10} className="sm:size-12 md:size-14 lg:size-8 xl:size-10" />
                    <span>+267 71 419 498</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm">
                    <MapPin size={10} className="sm:size-12 md:size-14 lg:size-8 xl:size-10" />
                    <span>Gaborone, Botswana</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="brutalist-button inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm">
              <Download size={10} className="sm:size-12 md:size-14 lg:size-8 xl:size-10" />
              DOWNLOAD PDF
            </button>
          </div>

          {/* Profile Summary */}
          <div className="border-t-2 sm:border-t-4 border-brutalist-black pt-4 sm:pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">PROFESSIONAL SUMMARY</h2>
            <p className="text-base sm:text-lg text-brutalist-gray leading-relaxed">
              Motivated and detail-oriented student pursuing BSc (Hons) in Business Intelligence & Data Analytics with a strong foundation in 
              data analysis, business intelligence, and information systems. Demonstrated ability to adapt quickly, work collaboratively, and apply 
              theoretical knowledge to practical situations. Seeking opportunities to contribute to 
              innovative projects while continuing to develop professional skills through internships 
              and hands-on experience.
            </p>
          </div>
        </div>

        {/* Add CV Illustration */}
        <div className="mb-8 lg:mb-12">
          <CVIllustration />
        </div>

        {/* Education */}
        <div className="brutalist-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brutalist-black">
              <GraduationCap className="text-brutalist-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold">EDUCATION</h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-brutalist-black pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold">BSc (Hons) in Business Intelligence & Data Analytics</h3>
                <span className="inline-block px-4 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">
                  2023 - Present
                </span>
              </div>
              <p className="text-xl font-bold text-brutalist-gray mb-2">Botswana Accountancy College</p>
              <p className="text-lg text-brutalist-gray mb-3">GPA: 3.8 / 4.0</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-brutalist-gray">
                <li>Relevant Coursework: Data Mining, Business Intelligence Systems, Database Management, Statistical Analysis, Data Visualization</li>
                <li>Skills Developed: SQL, Python, Power BI, Excel Advanced Analytics, Data Warehousing</li>
                <li>Member of Data Science and Analytics Student Association</li>
              </ul>
            </div>

            <div className="border-l-4 border-brutalist-black pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold">High School Diploma</h3>
                <span className="inline-block px-4 py-1 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-sm font-bold">
                  2018 - 2022
                </span>
              </div>
              <p className="text-xl font-bold text-brutalist-gray mb-2">Mater Spei College</p>
              <p className="text-lg text-brutalist-gray">BGCSE Excellence Award • Academic Merit Scholar</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="brutalist-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brutalist-black">
              <Briefcase className="text-brutalist-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold">EXPERIENCE</h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-brutalist-black pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold">Data Analytics Intern</h3>
                <span className="inline-block px-4 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">
                  Jun 2025 - Aug 2025
                </span>
              </div>
              <p className="text-xl font-bold text-brutalist-gray mb-3">Botswana Innovation Hub, Gaborone</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-brutalist-gray">
                <li>Analyzed large datasets using SQL and Python to identify business trends and insights</li>
                <li>Created interactive dashboards and reports using Power BI for stakeholder decision-making</li>
                <li>Developed data cleaning and validation processes improving data accuracy by 25%</li>
              </ul>
            </div>

            <div className="border-l-4 border-brutalist-black pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold">Teaching Assistant - Data Science</h3>
                <span className="inline-block px-4 py-1 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black text-sm font-bold">
                  Jan 2025 - May 2025
                </span>
              </div>
              <p className="text-xl font-bold text-brutalist-gray mb-3">Botswana Accountancy College</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-brutalist-gray">
                <li>Assisted 50+ students in understanding data analysis concepts and statistical methods</li>
                <li>Conducted tutorial sessions on Python programming and database management</li>
                <li>Graded assignments and provided constructive feedback to improve student performance</li>
              </ul>
            </div>

            <div className="border-l-4 border-brutalist-black pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-2xl font-bold">Library Assistant</h3>
                <span className="inline-block px-4 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">
                  2022 - 2023
                </span>
              </div>
              <p className="text-xl font-bold text-brutalist-gray mb-3">BAC Campus Library</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-brutalist-gray">
                <li>Managed circulation desk and assisted students with research and resource location</li>
                <li>Organized and maintained digital and physical library collections</li>
                <li>Developed strong customer service and problem-solving abilities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="brutalist-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brutalist-black">
              <Code className="text-brutalist-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold">TECHNICAL SKILLS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-brutalist-black">PROGRAMMING LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'SQL', 'R'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-brutalist-black text-brutalist-white border-2 border-brutalist-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-brutalist-black">TOOLS & TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'Tableau', 'Excel Advanced', 'Git'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-brutalist-white border-2 border-brutalist-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-brutalist-black">SOFT SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Teamwork', 'Problem-Solving', 'Time Management'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-brutalist-accent border-2 border-brutalist-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-brutalist-black">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                {['English (Native)', 'Setswana (Native)'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-brutalist-white border-2 border-brutalist-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="brutalist-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brutalist-black">
              <Code className="text-brutalist-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold">FEATURED PROJECTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-4 border-brutalist-black bg-brutalist-white p-4">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VBB9lbF0JKa4vKyf1zh4oTUc_d9-jIUblQ&s" 
                  alt="Social Media Calendar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media Calendar</h3>
              <p className="text-base text-brutalist-gray mb-3">
                Developed a comprehensive social media management system with scheduling, analytics, and content planning features.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">React</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">Node.js</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">MongoDB</span>
              </div>
            </div>

            <div className="border-4 border-brutalist-black bg-brutalist-white p-4">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="https://cdn.boldbi.com/wp/pages/dashboards/education/student-performance-banner-v1.webp" 
                  alt="Student Data Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Data Dashboard</h3>
              <p className="text-base text-brutalist-gray mb-3">
                Created an interactive dashboard for visualizing student performance metrics with real-time data analysis and reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">Power BI</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">SQL</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">Python</span>
              </div>
            </div>

            <div className="border-4 border-brutalist-black bg-brutalist-white p-4">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="data:image/png;base64,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" 
                  alt="Web Scraping Tool" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Scraping Tool</h3>
              <p className="text-base text-brutalist-gray mb-3">
                Built an automated data extraction tool for gathering and processing web data with customizable scraping rules.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">Python</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">BeautifulSoup</span>
                <span className="px-3 py-1 bg-brutalist-accent border-2 border-brutalist-black text-sm font-bold">Pandas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="brutalist-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brutalist-black">
              <Award className="text-brutalist-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold">CERTIFICATIONS & ACHIEVEMENTS</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b-2 border-brutalist-black">
              <div className="w-16 h-16 flex-shrink-0 bg-brutalist-accent border-2 border-brutalist-black flex items-center justify-center">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Microsoft Power BI Certification</h3>
                <p className="text-lg text-brutalist-gray mb-1">Microsoft • 2025</p>
                <p className="text-base text-brutalist-gray">Data visualization and business intelligence professional certification</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b-2 border-brutalist-black">
              <div className="w-16 h-16 flex-shrink-0 bg-brutalist-black border-2 border-brutalist-black flex items-center justify-center">
                <Award className="text-brutalist-white" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Dean's List Excellence</h3>
                <p className="text-lg text-brutalist-gray mb-1">Botswana Accountancy College • 2023, 2025</p>
                <p className="text-base text-brutalist-gray">Recognized for outstanding academic performance and leadership</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 bg-brutalist-white border-2 border-brutalist-black flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Data Science Fundamentals</h3>
                <p className="text-lg text-brutalist-gray mb-1">Coursera • 2023</p>
                <p className="text-base text-brutalist-gray">Comprehensive course covering machine learning, statistics, and data analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 border-4 border-brutalist-black bg-brutalist-accent">
            <p className="text-2xl font-bold mb-4">INTERESTED IN WORKING TOGETHER?</p>
            <button className="brutalist-button inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm">
              <Download size={12} className="sm:size-14 md:size-16 lg:size-10 xl:size-12" />
              DOWNLOAD FULL CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
