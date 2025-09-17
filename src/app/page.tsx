'use client'

import { useEffect } from 'react'
import FloatingNav from '@/components/FloatingNav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <Hero />

      {/* Footer */}
      <Footer />
    </main>
  )
}
