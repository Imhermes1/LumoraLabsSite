'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Wand2, Sparkles } from 'lucide-react'
import BetaSignupModal from './BetaSignupModal'
import AlphaRevealModal from './AlphaRevealModal'
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
      <BetaSignupModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false)
          setIsBetaModalFromAlpha(false)
        }} 
        isFromAlpha={isBetaModalFromAlpha}
      />
      
      {/* Alpha Reveal Modal */}
      <AlphaRevealModal 
        isOpen={isAlphaModalOpen} 
        onClose={() => setIsAlphaModalOpen(false)} 
        onOpenBetaSignup={openBetaSignupFromAlpha}
        onOpenRegularBetaSignup={openRegularBetaSignup}
        prefectsStatus={prefectsProgramStatus}
      />
      
      {/* Screen Flash Effect */}
      {explosionPhase === 'explosion' && (
        <div className="fixed inset-0 bg-white/80 z-40 animate-screen-flash pointer-events-none"></div>
      )}
      
      {/* Shockwave Effect */}
      {explosionPhase === 'explosion' && (
        <div className="fixed inset-0 z-45 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-yellow-400/60 rounded-full animate-shockwave"></div>
          <div className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-purple-400/60 rounded-full animate-shockwave" style={{animationDelay: '0.1s'}}></div>
          <div className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-pink-400/60 rounded-full animate-shockwave" style={{animationDelay: '0.2s'}}></div>
        </div>
      )}
      
      {/* Magical Runes */}
      {explosionPhase === 'powerup' && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400/80 text-2xl animate-rune-float"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`,
                animationDelay: `${i * 0.1}s`
              }}
            >
              ✧
            </div>
          ))}
        </div>
      )}
      
      {/* Explosion Sparkles */}
      {explosionPhase === 'explosion' && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 120 }, (_, i) => {
            const colors = ['yellow', 'pink', 'purple', 'blue', 'green', 'orange', 'cyan']
            const color = colors[i % colors.length]
            const size = Math.random() * 6 + 2
            const delay = Math.random() * 0.3
            
            const sizeClass = Math.ceil(size) === 2 ? 'w-2 h-2' : 
                             Math.ceil(size) === 3 ? 'w-3 h-3' : 
                             Math.ceil(size) === 4 ? 'w-4 h-4' : 
                             Math.ceil(size) === 5 ? 'w-5 h-5' : 'w-6 h-6'
            const colorClass = color === 'yellow' ? 'bg-yellow-400' :
                              color === 'pink' ? 'bg-pink-400' :
                              color === 'purple' ? 'bg-purple-400' :
                              color === 'blue' ? 'bg-blue-400' : 
                              color === 'green' ? 'bg-green-400' :
                              color === 'orange' ? 'bg-orange-400' : 'bg-cyan-400'
            
            return (
              <div
                key={i}
                className={`absolute ${sizeClass} ${colorClass} rounded-full animate-explosion-sparkle`}
                style={{
                  left: '50%',
                  top: '50%',
                  animationDelay: `${delay}s`,
                  animationDuration: '2s'
                }}
              />
            )
          })}
        </div>
      )}
      
      {/* Convergence Sparkles */}
      {explosionPhase === 'convergence' && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 80 }, (_, i) => {
            const colors = ['yellow', 'pink', 'purple', 'blue', 'green']
            const color = colors[i % colors.length]
            const size = Math.random() * 4 + 2
            const delay = Math.random() * 0.5
            
            const sizeClass = Math.ceil(size) === 2 ? 'w-2 h-2' : 
                             Math.ceil(size) === 3 ? 'w-3 h-3' : 
                             Math.ceil(size) === 4 ? 'w-4 h-4' : 'w-5 h-5'
            const colorClass = color === 'yellow' ? 'bg-yellow-400' :
                              color === 'pink' ? 'bg-pink-400' :
                              color === 'purple' ? 'bg-purple-400' :
                              color === 'blue' ? 'bg-blue-400' : 'bg-green-400'
            
            return (
              <div
                key={i}
                className={`absolute ${sizeClass} ${colorClass} rounded-full animate-convergence-sparkle`}
                style={{
                  left: '50%',
                  top: '50%',
                  animationDelay: `${delay}s`,
                  animationDuration: '1.5s'
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
