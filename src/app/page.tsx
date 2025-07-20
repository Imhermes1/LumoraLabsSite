'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import MooDo from '@/components/MooDo'
import CoreTrack from '@/components/CoreTrack'
import BetaSignup from '@/components/BetaSignup'
import Technology from '@/components/Technology'
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
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Apps Section */}
      <section id="apps" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Apps</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transformative apps that understand your needs and adapt to your lifestyle. 
              Built exclusively for Apple with cutting-edge AI and elegant design.
            </p>
          </div>

          {/* MooDo Section */}
          <div className="mb-16">
            <MooDo />
          </div>

          {/* CoreTrack Section */}
          <div className="mb-16">
            <CoreTrack />
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <BetaSignup />

      {/* Technology Section */}
      <Technology />

      {/* Footer */}
      <Footer />
    </main>
  )
}
