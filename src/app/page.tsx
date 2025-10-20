'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'auto'
      }
    }
  }, [])

  return (
    <main className="flex flex-col">
      <Hero />
      <Footer />
    </main>
  )
}
