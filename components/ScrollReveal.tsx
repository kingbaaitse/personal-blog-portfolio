'use client'

import { useEffect, useRef } from 'react'

export default function ScrollReveal() {
  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      revealElements.forEach((el) => observerRef.current?.observe(el))

      // Fallback: Make elements visible after 3 seconds if not revealed
      const fallbackTimer = setTimeout(() => {
        const unrevealedElements = document.querySelectorAll('.scroll-reveal:not(.revealed), .scroll-reveal-left:not(.revealed), .scroll-reveal-right:not(.revealed)')
        unrevealedElements.forEach((el) => {
          el.classList.add('revealed')
        })
      }, 3000)

      return () => {
        revealElements.forEach((el) => observerRef.current?.unobserve(el))
        clearTimeout(fallbackTimer)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return null
}
