'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block">
          {/* Animated Logo/Text */}
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse">
              LKB
            </h2>
            <div className="h-2 w-64 bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
              <div className="h-full bg-brutalist-accent dark:bg-yellow-400 absolute animate-loading"></div>
            </div>
          </div>
          
          <p className="text-xl font-bold text-brutalist-gray dark:text-gray-400">
            Loading that good Leatile effect...
          </p>
        </div>
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
  }

  return (
    <div className={`${sizeClasses[size]} border-brutalist-black dark:border-brutalist-white border-t-brutalist-accent dark:border-t-yellow-400 rounded-full animate-spin`}></div>
  )
}

export function LoadingDots() {
  return (
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-brutalist-accent dark:bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-3 h-3 bg-brutalist-accent dark:bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-3 h-3 bg-brutalist-accent dark:bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  )
}
