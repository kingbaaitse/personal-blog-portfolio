import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <div className="brutalist-section">
          {/* Giant 404 */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold leading-none mb-4 animate-pulse">
              404
            </h1>
            <div className="inline-block px-6 py-3 bg-brutalist-accent dark:bg-yellow-400 border-4 border-brutalist-black dark:border-brutalist-white">
              <p className="text-2xl md:text-3xl font-bold">PAGE NOT FOUND</p>
            </div>
          </div>

          {/* Message */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-brutalist-gray dark:text-gray-400 mb-6 leading-relaxed">
              Oops! Looks like you've wandered into uncharted territory. 
              This page doesn't exist... yet!
            </p>
            <p className="text-lg text-brutalist-gray dark:text-gray-400">
              Maybe it's still being analyzed, or perhaps the data got lost in the pipeline. 
              Either way, let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/" className="brutalist-button inline-flex items-center gap-2">
              <Home size={20} />
              GO HOME
            </Link>
            <Link href="/blog" className="brutalist-button inline-flex items-center gap-2">
              <Search size={20} />
              BROWSE BLOG
            </Link>
            <Link href="/contact" className="brutalist-button inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              CONTACT ME
            </Link>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 border-4 border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-gray-900">
              <p className="text-4xl font-bold text-brutalist-accent dark:text-yellow-400 mb-2">0%</p>
              <p className="text-sm font-bold">PAGE FOUND</p>
            </div>
            <div className="p-6 border-4 border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-gray-900">
              <p className="text-4xl font-bold text-brutalist-accent dark:text-yellow-400 mb-2">100%</p>
              <p className="text-sm font-bold">CONFUSED</p>
            </div>
            <div className="p-6 border-4 border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-gray-900">
              <p className="text-4xl font-bold text-brutalist-accent dark:text-yellow-400 mb-2">∞</p>
              <p className="text-sm font-bold">POSSIBILITIES</p>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8">
          <p className="text-sm text-brutalist-gray dark:text-gray-500 italic">
            "In data analytics, 404 means 'data not found'. In life, it means 'adventure awaits'." - Leatile King Baaitse
          </p>
        </div>
      </div>
    </div>
  )
}
