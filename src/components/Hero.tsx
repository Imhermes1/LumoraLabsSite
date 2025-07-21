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
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded w-96 mb-4"></div>
          <div className="h-6 bg-white/10 rounded w-64"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lumos Spell Magical Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bright light source at center - now moving */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-center-float-1"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/30 rounded-full blur-2xl animate-center-float-2 delay-2000"></div>
        
        {/* Dynamic moving light orbs */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/40 rounded-full blur-xl animate-float-4 delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-yellow-200/35 rounded-full blur-xl animate-float-2 delay-3000"></div>
        <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-white/30 rounded-full blur-lg animate-float-3 delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-yellow-200/30 rounded-full blur-lg animate-float delay-5000"></div>
        
        {/* Corner elements with specific movement patterns */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/30 via-lumora-purple/40 to-transparent rounded-full blur-3xl animate-figure-8"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/30 via-lumora-pink/45 to-transparent rounded-full blur-3xl animate-s-shape delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-200/25 via-lumora-pink/35 to-transparent rounded-full blur-2xl animate-random-path-1 delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-yellow-200/25 via-lumora-pink/30 to-transparent rounded-full blur-2xl animate-random-path-2 delay-3000"></div>
        
        {/* Bright magical orbs */}
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-white/40 via-yellow-200/30 to-lumora-pink/20 rounded-full blur-2xl animate-nebula-drift"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-tl from-white/30 via-yellow-200/25 to-lumora-purple/15 rounded-full blur-3xl animate-nebula-drift delay-10000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/Lumora-Labs-Logo-transparent.png" 
              alt="Lumora Labs Logo" 
              className="h-24 md:h-28 lg:h-32 xl:h-36 w-auto opacity-95 hover:opacity-100 transition-all duration-300 animate-logo-glow"
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

      {/* Lumos Magical Floating Elements */}
      {/* Bright magical orbs - moving around screen */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-pink/60 rounded-full animate-move-around-1 animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-purple/60 rounded-full animate-move-around-2 animate-pulse-glow delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-7 h-7 bg-gradient-to-br from-white/80 via-yellow-200/70 to-deep-purple/60 rounded-full animate-move-around-3 animate-pulse-glow delay-500"></div>
      <div className="absolute bottom-20 right-10 w-9 h-9 bg-gradient-to-br from-white/80 via-yellow-200/70 to-lumora-pink/60 rounded-full animate-move-around-4 animate-pulse-glow delay-1500"></div>
      
      {/* Magical sparkles - moving around screen */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/90 rounded-full animate-move-around-1 animate-magical-sparkle delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-yellow-200/80 rounded-full animate-move-around-2 animate-magical-sparkle delay-3000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-white/90 rounded-full animate-move-around-3 animate-magical-sparkle delay-2500"></div>
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-yellow-200/80 rounded-full animate-move-around-4 animate-magical-sparkle delay-3500"></div>
      
      {/* Bright twinkling stars - moving around screen */}
      <div className="absolute top-16 left-1/2 w-2 h-2 bg-white/95 rounded-full animate-move-around-1 animate-space-twinkle delay-1000"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-white/95 rounded-full animate-move-around-2 animate-space-twinkle delay-2000"></div>
      <div className="absolute bottom-16 left-1/2 w-2 h-2 bg-white/95 rounded-full animate-move-around-3 animate-space-twinkle delay-3000"></div>
      <div className="absolute top-1/2 left-16 w-2 h-2 bg-white/95 rounded-full animate-move-around-4 animate-space-twinkle delay-1500"></div>
      
      {/* More bright twinkling stars - moving around screen */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-yellow-200/90 rounded-full animate-move-around-1 animate-space-twinkle delay-4000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-200/90 rounded-full animate-move-around-2 animate-space-twinkle delay-5000"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/90 rounded-full animate-move-around-3 animate-space-twinkle delay-6000"></div>
      <div className="absolute bottom-2/3 left-1/3 w-1 h-1 bg-white/90 rounded-full animate-move-around-4 animate-space-twinkle delay-7000"></div>
      
      {/* Large bright magical orbs - moving around screen */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-white/60 via-yellow-200/50 to-lumora-pink/40 rounded-full animate-move-around-1 animate-pulse-glow delay-4000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-gradient-to-br from-white/60 via-yellow-200/50 to-lumora-purple/40 rounded-full animate-move-around-2 animate-pulse-glow delay-5000"></div>
      <div className="absolute top-3/4 left-1/2 w-6 h-6 bg-gradient-to-br from-white/60 via-yellow-200/50 to-lumora-pink/40 rounded-full animate-move-around-3 animate-pulse-glow delay-6000"></div>
      
      {/* Complex magical particles - moving around screen */}
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-br from-white/70 via-yellow-200/60 to-lumora-pink/50 rounded-full animate-move-around-4 delay-8000"></div>
      <div className="absolute bottom-1/2 left-1/4 w-5 h-5 bg-gradient-to-br from-white/70 via-yellow-200/60 to-lumora-purple/50 rounded-full animate-move-around-1 delay-9000"></div>
      <div className="absolute top-1/4 bottom-1/4 w-3 h-3 bg-gradient-to-br from-white/70 via-yellow-200/60 to-lumora-pink/50 rounded-full animate-move-around-2 delay-10000"></div>
      
      {/* Additional magical sparkles - moving around screen */}
      <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-yellow-200/85 rounded-full animate-move-around-1 animate-magical-sparkle delay-11000"></div>
      <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-white/85 rounded-full animate-move-around-2 animate-magical-sparkle delay-12000"></div>
      <div className="absolute top-5/6 left-1/6 w-2 h-2 bg-yellow-200/85 rounded-full animate-move-around-3 animate-magical-sparkle delay-13000"></div>
      <div className="absolute bottom-5/6 right-1/6 w-2 h-2 bg-white/85 rounded-full animate-move-around-4 animate-magical-sparkle delay-14000"></div>
      
      {/* More dynamic moving elements - moving around screen */}
      <div className="absolute top-1/8 left-3/4 w-3 h-3 bg-white/80 rounded-full animate-move-around-1 delay-15000"></div>
      <div className="absolute bottom-1/8 right-3/4 w-4 h-4 bg-yellow-200/75 rounded-full animate-move-around-2 delay-16000"></div>
      <div className="absolute top-7/8 right-1/8 w-3 h-3 bg-white/80 rounded-full animate-move-around-3 delay-17000"></div>
      <div className="absolute bottom-7/8 left-1/8 w-4 h-4 bg-yellow-200/75 rounded-full animate-move-around-4 delay-18000"></div>
      
      {/* Floating light trails - moving around screen */}
      <div className="absolute top-1/5 right-1/5 w-6 h-6 bg-gradient-to-br from-white/60 via-yellow-200/50 to-transparent rounded-full animate-move-around-1 delay-19000"></div>
      <div className="absolute bottom-1/5 left-1/5 w-5 h-5 bg-gradient-to-br from-yellow-200/60 via-white/50 to-transparent rounded-full animate-move-around-2 delay-20000"></div>
      <div className="absolute top-4/5 left-4/5 w-4 h-4 bg-gradient-to-br from-white/60 via-yellow-200/50 to-transparent rounded-full animate-move-around-3 delay-21000"></div>
      <div className="absolute bottom-4/5 right-4/5 w-5 h-5 bg-gradient-to-br from-yellow-200/60 via-white/50 to-transparent rounded-full animate-move-around-4 delay-22000"></div>
      
      {/* Extra twinkling elements - moving around screen */}
      <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-white/90 rounded-full animate-move-around-1 animate-space-twinkle delay-23000"></div>
      <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-yellow-200/90 rounded-full animate-move-around-2 animate-space-twinkle delay-24000"></div>
      <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-white/90 rounded-full animate-move-around-3 animate-space-twinkle delay-25000"></div>
      <div className="absolute bottom-3/4 right-1/6 w-1 h-1 bg-yellow-200/90 rounded-full animate-move-around-4 animate-space-twinkle delay-26000"></div>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
