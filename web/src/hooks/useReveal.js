import { useEffect } from 'react'

export function useReveal(selector = '.reveal', options = {}) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector))
    if (elements.length === 0) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15, ...options })
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}

