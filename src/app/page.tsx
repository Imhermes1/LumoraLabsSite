'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
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
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="glass section-transition">
        <Hero />
      </section>

      {/* Temporary spacer to test scroll */}
      <div className="h-screen"></div>

      {/* Apps Section - Coming Soon */}
      {/* <section id="apps" className="py-16 md:py-24 glass section-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Apps</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transformative apps that understand your needs and adapt to your lifestyle. 
              Built for Apple and Android with cutting-edge technology and elegant design.
            </p>
          </div>

          <div className="mb-16">
            <MooDo />
          </div>

          <div className="mb-16">
            <CoreTrack />
          </div>
        </div>
      </section> */}

      {/* Beta Signup Section - Coming Soon */}
      {/* <section className="glass section-transition">
        <BetaSignup />
      </section> */}

      {/* Technology Section - Coming Soon */}
      {/* <section className="glass section-transition">
        <Technology />
      </section> */}

      {/* Footer */}
      <section className="glass section-transition">
        <Footer />
      </section>
    </main>
  )
}
