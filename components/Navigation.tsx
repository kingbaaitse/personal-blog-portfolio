'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'CV', href: '/cv' },
  { name: 'BLOG', href: '/blog' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'RESOURCES', href: '/resources' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b-4 sm:border-b-8 border-brutalist-accent bg-brutalist-white sticky top-0 z-50 transition-all duration-300">
      <div className="responsive-container">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold hover:text-brutalist-accent transition-colors">
            PORTFOLIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-bold border-2 sm:border-4 border-brutalist-accent transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-brutalist-accent text-brutalist-black'
                    : 'bg-brutalist-white text-brutalist-black hover:bg-brutalist-accent hover:translate-y-[-2px]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 border-2 sm:border-4 border-brutalist-accent bg-brutalist-white hover:bg-brutalist-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-item block ${
                  pathname === item.href
                    ? 'bg-brutalist-accent text-brutalist-black'
                    : 'hover:bg-brutalist-secondary'
                } px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-bold border-2 sm:border-4 border-brutalist-accent transition-all duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
