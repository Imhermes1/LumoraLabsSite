'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import BetaSignupModal from './BetaSignupModal'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  const scrollToApps = () => {
    const element = document.getElementById('apps')
    if (element) {
      const navHeight = 44
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded w-96 mb-4"></div>
          <div className="h-6 bg-white/10 rounded w-64"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unified card with logo and text */}
        <div className="glass rounded-2xl px-2 pt-0 pb-2 md:px-4 md:pt-0 md:pb-4 lg:px-6 lg:pt-0 lg:pb-6">
          {/* Logo */}
          <div className="mb-3 flex justify-center">
            <img 
              src="/images/Lumora-Labs-Logo-transparent.png" 
              alt="Lumora Labs Logo" 
              className="h-35 md:h-40 lg:h-46 xl:h-52 w-auto opacity-95 hover:opacity-100 transition-all duration-300"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting the{' '}
            <span className="gradient-text bg-gradient-to-r from-lumora-pink via-lumora-purple to-deep-purple">
              Future
            </span>
            <br />
            of Extraordinary Apps
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Lumora Labs creates the world's most elegantly crafted and intuitively powerful apps 
            exclusively for Apple, with Android coming soon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={openBetaSignup}
              className="glass-strong rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-lumora-purple/30 transition-all duration-300 btn-glass group"
            >
              Join Beta Program
              <span className="ml-2">✨</span>
            </button>

            <button
              onClick={scrollToApps}
              className="border border-white/30 rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Discover Apps
            </button>
          </div>

          {/* Beta Status */}
          <div className="glass rounded-2xl p-4 inline-block">
            <p className="text-white/70 text-sm">
              <span className="text-lumora-pink font-semibold">Exclusive Beta:</span> 
              <span className="ml-2">38/100 spots filled</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToApps}
            className="text-white/50 hover:text-white/80 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
