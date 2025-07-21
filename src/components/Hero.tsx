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
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!mounted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded w-96 mb-4"></div>
          <div className="h-6 bg-white/10 rounded w-64"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Lumos Spell Magical Background - Optimized */}
      <div className="absolute inset-0">
        {/* Core light source - reduced complexity */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-center-float-1"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/30 rounded-full blur-2xl animate-center-float-2 delay-2000"></div>
        
        {/* Essential corner elements only */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/30 via-lumora-purple/40 to-transparent rounded-full blur-3xl animate-figure-8"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/30 via-lumora-pink/45 to-transparent rounded-full blur-3xl animate-s-shape delay-1000"></div>
      </div>

      {/* Content - Lowered position */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Logo - 10% bigger and lowered */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/images/Lumora-Labs-Logo-transparent.png" 
              alt="Lumora Labs Logo" 
              className="h-26 md:h-31 lg:h-35 xl:h-39 w-auto opacity-95 hover:opacity-100 transition-all duration-300 animate-logo-glow"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting the{' '}
            <span className="gradient-text animate-gradient bg-gradient-to-r from-lumora-pink via-lumora-purple to-deep-purple bg-[length:200%_200%]">
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
              <span className="ml-2 group-hover:animate-pulse">✨</span>
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
            className="text-white/50 hover:text-white/80 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Lumos Magical Floating Elements - Optimized */}
      {/* Reduced to essential 8 elements instead of 30+ */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-pink/60 rounded-full animate-move-around-1 animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-purple/60 rounded-full animate-move-around-2 animate-pulse-glow delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-7 h-7 bg-gradient-to-br from-white/80 via-yellow-200/70 to-deep-purple/60 rounded-full animate-move-around-3 animate-pulse-glow delay-500"></div>
      <div className="absolute bottom-20 right-10 w-9 h-9 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-pink/60 rounded-full animate-move-around-4 animate-pulse-glow delay-1500"></div>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
