'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Wand2, Sparkles } from 'lucide-react'
import BetaSignupModal from './BetaSignupModal'
import AlphaRevealModal from './AlphaRevealModal'
import BetaCount from './BetaCount'
import MagicalWand from './MagicalWand'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)
  const [showWand, setShowWand] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  const openAlphaReveal = () => {
    // Start the magical wand animation sequence
    setShowWand(true)
  }

  const handleWandTapComplete = () => {
    // Open the Alpha modal directly after wand animation
    setTimeout(() => {
      setIsAlphaModalOpen(true)
    }, 500)
  }

  const scrollToApps = () => {
    const element = document.getElementById('apps')
    if (element) {
      const navHeight = 52
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
          <div className="mb-1 flex justify-center -mt-2">
            <img 
              src="/images/Lumora-Labs-Logo-transparent.png" 
              alt="Lumora Labs Logo" 
              className="h-35 md:h-40 lg:h-46 xl:h-52 w-auto opacity-95 hover:opacity-100 transition-all duration-300 animate-logo-glow"
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
            for Apple and Android
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
              onClick={openAlphaReveal}
              className="relative border border-purple-500/50 rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-purple-500/20 transition-all duration-300 group overflow-hidden animate-aparecium-glow"
            >
              {/* Enhanced glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              
              {/* Content */}
              <span className="relative flex items-center">
                Aparecium
                <Sparkles className="ml-2 text-yellow-400 animate-aparecium-sparkle" size={16} />
              </span>
              
              {/* Enhanced magical sparkle effects */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </button>
          </div>

          {/* Beta Status */}
          <BetaCount />
        </div>
      </div>

      {/* Beta Signup Modal */}
      <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Alpha Reveal Modal */}
      <AlphaRevealModal isOpen={isAlphaModalOpen} onClose={() => setIsAlphaModalOpen(false)} />
      
      {/* Magical Wand Animation */}
      <MagicalWand 
        isVisible={showWand} 
        onTapComplete={handleWandTapComplete}
      />
      

    </section>
  )
}
