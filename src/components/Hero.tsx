'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Wand2, Sparkles } from 'lucide-react'
import { LazyBetaSignupModal, LazyAlphaRevealModal } from './LazyModals'
import { OptimizedSparkleEffect, OptimizedRuneEffect, OptimizedShockwaveEffect } from './OptimizedAnimations'
import BetaCount from './BetaCount'

// Preload beta count data
let preloadedCount: number | null = null
let preloadPromise: Promise<number | null> | null = null

const preloadBetaCount = async (): Promise<number | null> => {
  if (preloadedCount !== null) return preloadedCount
  if (preloadPromise) return preloadPromise
  
  preloadPromise = fetch('/api/notion')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        preloadedCount = data.count
        return data.count
      }
      return null
    })
    .catch(() => null)
  
  return preloadPromise
}

// Start preloading immediately when this module is imported
if (typeof window !== 'undefined') {
  preloadBetaCount().then(count => {
    window.__preloadedBetaCount = count
  })
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)
  const [isBetaModalFromAlpha, setIsBetaModalFromAlpha] = useState(false)
  const [isButtonExploding, setIsButtonExploding] = useState(false)
  const [explosionPhase, setExplosionPhase] = useState<'powerup' | 'explosion' | 'convergence' | null>(null)
  const [prefectsProgramStatus, setPrefectsProgramStatus] = useState<{
    isFull: boolean
    currentCount: number
    maxSpots: number
    adminOverride?: boolean
  } | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  const checkPrefectsProgramStatus = async () => {
    try {
      const response = await fetch('/api/notion?checkPrefects=true')
      const data = await response.json()
      if (data.success) {
        setPrefectsProgramStatus(data.prefectsStatus)
        return data.prefectsStatus
      }
    } catch (error) {
      console.error('Error checking Prefects Program status:', error)
    }
    return null
  }

  const openBetaSignupFromAlpha = () => {
    console.log('openBetaSignupFromAlpha called!')
    console.log('Setting isBetaModalFromAlpha to true')
    console.log('Setting isModalOpen to true')
    setIsBetaModalFromAlpha(true)
    setIsModalOpen(true)
  }

  const openRegularBetaSignup = () => {
    console.log('openRegularBetaSignup called!')
    console.log('Setting isBetaModalFromAlpha to false')
    console.log('Setting isModalOpen to true')
    setIsBetaModalFromAlpha(false)
    setIsModalOpen(true)
  }

  const openAlphaReveal = async () => {
    // Check if Prefects Program is full before proceeding
    const status = await checkPrefectsProgramStatus()
    
    // Phase 1: Power-up
    setExplosionPhase('powerup')
    setIsButtonExploding(true)
    
    // Phase 2: Explosion
    setTimeout(() => {
      setExplosionPhase('explosion')
    }, 300)
    
    // Phase 3: Convergence
    setTimeout(() => {
      setExplosionPhase('convergence')
    }, 600)
    
    // Phase 4: Modal Formation
    setTimeout(() => {
      setIsAlphaModalOpen(true)
      setIsButtonExploding(false)
      setExplosionPhase(null)
      
      // If Prefects Program is full, show popup after modal opens
      if (status?.isFull) {
        setTimeout(() => {
          alert(`The Prefects Program is currently full (${status.currentCount}/${status.maxSpots} spots taken).\n\nJoin the Beta Program while spots last and keep a look out on our socials for future opportunities!`)
        }, 200)
      }
    }, 900)
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

  return (
    <div className="relative py-16 flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-1 flex justify-center -mt-2">
          <Image 
            src="/images/Lumora-Labs-Logo-transparent.png" 
            alt="Lumora Labs Logo" 
            width={208}
            height={208}
            priority
            className="h-35 md:h-40 lg:h-46 xl:h-52 w-auto opacity-95 hover:opacity-100 transition-all duration-300 animate-logo-glow"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
            className="rounded-full px-8 py-4 text-white font-semibold text-lg transition-all duration-600 group bg-black/30 backdrop-blur-sm border-2 border-lumora-purple/80 shadow-[0_0_20px_rgba(179,64,217,0.6)] hover:shadow-[0_0_30px_rgba(179,64,217,0.8)] hover:scale-105"
          >
            Join Beta Program
            <span className="ml-2">✨</span>
          </button>

          <button
            id="aparecium-button"
            onClick={openAlphaReveal}
            disabled={isButtonExploding}
            className={`rounded-full px-8 py-4 text-white font-semibold text-lg transition-all duration-600 group overflow-hidden bg-black/30 backdrop-blur-sm border-2 border-deep-purple/80 shadow-[0_0_20px_rgba(140,38,242,0.6)] hover:shadow-[0_0_30px_rgba(140,38,242,0.8)] hover:scale-105 ${
              explosionPhase === 'powerup' ? 'animate-button-powerup' :
              explosionPhase === 'explosion' ? 'animate-button-explosion' :
              'animate-aparecium-glow'
            }`}
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

      {/* Beta Signup Modal */}
      {isModalOpen && (
        <LazyBetaSignupModal 
          isOpen={isModalOpen} 
          onClose={() => {
            setIsModalOpen(false)
            setIsBetaModalFromAlpha(false)
          }} 
          isFromAlpha={isBetaModalFromAlpha}
        />
      )}
      
      {/* Alpha Reveal Modal */}
      {isAlphaModalOpen && (
        <LazyAlphaRevealModal 
          isOpen={isAlphaModalOpen} 
          onClose={() => setIsAlphaModalOpen(false)} 
          onOpenBetaSignup={openBetaSignupFromAlpha}
          onOpenRegularBetaSignup={openRegularBetaSignup}
          prefectsStatus={prefectsProgramStatus}
        />
      )}
      
      {/* Screen Flash Effect */}
      {explosionPhase === 'explosion' && (
        <div 
          className="fixed inset-0 bg-white/80 z-40 animate-screen-flash pointer-events-none"
          style={{ willChange: 'opacity' }}
        />
      )}
      
      {/* Shockwave Effect */}
      {explosionPhase === 'explosion' && <OptimizedShockwaveEffect />}
      
      {/* Magical Runes */}
      {explosionPhase === 'powerup' && <OptimizedRuneEffect />}
      
      {/* Optimized Sparkle Effects */}
      {(explosionPhase === 'explosion' || explosionPhase === 'convergence') && (
        <OptimizedSparkleEffect phase={explosionPhase} />
      )}
    </div>
  )
}
