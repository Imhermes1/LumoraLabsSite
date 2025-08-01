'use client'

import { useState, useEffect } from 'react'

interface MagicalWandProps {
  onTapComplete: () => void
  isVisible: boolean
  targetPosition?: { x: number; y: number }
}

export default function MagicalWand({ onTapComplete, isVisible, targetPosition }: MagicalWandProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true)
      
      // Start wand animation after a delay
      setTimeout(() => {
        // Create sparkles when wand taps - Reduced for better performance
        const newSparkles = Array.from({ length: 15 }, (_, i) => ({
          id: i,
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          delay: Math.random() * 0.5
        }))
        setSparkles(newSparkles)
        
        // Complete animation after sparkles
        setTimeout(() => {
          onTapComplete()
          setIsAnimating(false)
          setSparkles([])
        }, 2000)
      }, 2000)
    }
  }, [isVisible, isAnimating, onTapComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Wand */}
      <div className={`absolute transition-all duration-1000 transform-gpu ${
        isAnimating ? 'animate-wand-approach' : 'opacity-0'
      }`} style={{
        left: targetPosition ? `${targetPosition.x - 20}px` : '50%',
        top: targetPosition ? `${targetPosition.y - 15}px` : '50%',
        transform: targetPosition ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)'
      }}>
        <svg
          width="80"
          height="280"
          viewBox="0 0 80 280"
          className="drop-shadow-2xl"
        >
          {/* Harry Potter style wand */}
          <defs>
            <linearGradient id="wandWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#654321', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="wandTip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#DAA520', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="wandGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          

          
          {/* Wand tip - more pointed and elegant */}
          <path
            d="M 40 35 L 36 25 L 44 25 Z"
            fill="url(#wandTip)"
            className="animate-pulse"
          />
          
          {/* Main wand shaft - natural wood grain */}
          <rect
            x="37"
            y="35"
            width="6"
            height="200"
            fill="url(#wandWood)"
            rx="3"
          />
          
          {/* Wood grain details */}
          <path d="M 37 45 Q 40 47 43 45" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 65 Q 40 67 43 65" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 85 Q 40 87 43 85" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 105 Q 40 107 43 105" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 125 Q 40 127 43 125" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 145 Q 40 147 43 145" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 165 Q 40 167 43 165" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          <path d="M 37 185 Q 40 187 43 185" stroke="#654321" strokeWidth="0.5" fill="none" opacity="0.6" />
          
          {/* Subtle golden accent band */}
          <rect x="36" y="120" width="8" height="2" fill="#DAA520" rx="1" opacity="0.8" />
          
          {/* Handle grip - leather wrapped */}
          <rect
            x="35"
            y="235"
            width="10"
            height="35"
            fill="#654321"
            rx="5"
          />
          
          {/* Leather grip texture */}
          <rect x="36" y="240" width="8" height="1" fill="#8B4513" rx="0.5" />
          <rect x="36" y="245" width="8" height="1" fill="#8B4513" rx="0.5" />
          <rect x="36" y="250" width="8" height="1" fill="#8B4513" rx="0.5" />
          <rect x="36" y="255" width="8" height="1" fill="#8B4513" rx="0.5" />
          <rect x="36" y="260" width="8" height="1" fill="#8B4513" rx="0.5" />
        </svg>
      </div>

      {/* Sparkle dust particles */}
      {sparkles.map((sparkle) => {
        const colors = [
          'from-yellow-300 to-yellow-100',
          'from-pink-300 to-pink-100',
          'from-purple-300 to-purple-100',
          'from-blue-300 to-blue-100',
          'from-green-300 to-green-100'
        ]
        const sizes = ['w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2', 'w-2.5 h-2.5']
        const color = colors[sparkle.id % colors.length]
        const size = sizes[sparkle.id % sizes.length]
        
        return (
          <div
            key={sparkle.id}
            className={`absolute ${size} bg-gradient-to-r ${color} rounded-full animate-sparkle-float`}
            style={{
              left: `calc(50% + ${sparkle.x}px)`,
              top: `calc(50% + ${sparkle.y}px)`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '2.5s'
            }}
          />
        )
      })}
    </div>
  )
} 