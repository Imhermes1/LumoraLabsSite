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
  const [isMobile, setIsMobile] = useState(false)
  const [prefectsProgramStatus, setPrefectsProgramStatus] = useState<{
    isFull: boolean
    currentCount: number
    maxSpots: number
    adminOverride?: boolean
  } | null>(null)

  useEffect(() => {
    setMounted(true)
    
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
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
    
    // Use lighter animation on mobile devices
    const powerUpDuration = isMobile ? 200 : 300
    const explosionDuration = isMobile ? 400 : 600
    const totalDuration = isMobile ? 600 : 900
    
    // Phase 1: Power-up
    setExplosionPhase('powerup')
    setIsButtonExploding(true)
    
    // Phase 2: Explosion
    setTimeout(() => {
      setExplosionPhase('explosion')
    }, powerUpDuration)
    
    // Phase 3: Convergence
    setTimeout(() => {
      setExplosionPhase('convergence')
    }, explosionDuration)
    
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
    }, totalDuration)
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
    <div id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/Lumora-Labs-Logo-transparent.png"
            alt="Lumora Labs Logo"
            width={120}
            height={120}
            priority
            className="w-24 h-24 md:w-32 md:h-32 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300 animate-subtle-float"
          />
        </div>

        <h1 className="text-hero text-gray-900 mb-6">
          Crafting the{' '}
          <span className="gradient-text relative">
            Future
            <span className="absolute -top-2 -right-2 text-yellow-400 animate-gentle-sparkle">✨</span>
          </span>
          <br />
          of Extraordinary Apps
        </h1>

        <p className="text-subtitle text-gray-600 mb-12 max-w-3xl mx-auto">
          Where light meets innovation. Creating elegantly crafted and intuitively powerful apps
          for Apple and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={openBetaSignup}
            className="btn-primary-clean text-lg px-8 py-4 flex items-center gap-2"
          >
            <Sparkles size={20} />
            Join Beta Program
          </button>

          <button
            onClick={openBetaSignup}
            className="btn-secondary-clean text-lg px-8 py-4 flex items-center gap-2"
          >
            <Star size={20} />
            Learn More
          </button>
        </div>

        {/* Beta Status */}
        <div className="card-clean max-w-md mx-auto">
          <BetaCount />
        </div>
      </div>

      {/* Beta Signup Modal */}
      {isModalOpen && (
        <LazyBetaSignupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}
