'use client'

import { useState, useEffect } from 'react'

interface MagicalWandProps {
  onTapComplete: () => void
  isVisible: boolean
}

export default function MagicalWand({ onTapComplete, isVisible }: MagicalWandProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true)
      
      // Start wand animation after a delay
      setTimeout(() => {
        // Create sparkles when wand taps
        const newSparkles = Array.from({ length: 30 }, (_, i) => ({
          id: i,
          x: Math.random() * 300 - 150,
          y: Math.random() * 300 - 150,
          delay: Math.random() * 0.8
        }))
        setSparkles(newSparkles)
        
        // Complete animation after sparkles
        setTimeout(() => {
          onTapComplete()
          setIsAnimating(false)
          setSparkles([])
        }, 2500)
      }, 2000)
    }
  }, [isVisible, isAnimating, onTapComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Wand */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
        isAnimating ? 'animate-wand-approach' : 'opacity-0'
      }`}>
        <svg
          width="120"
          height="400"
          viewBox="0 0 120 400"
          className="drop-shadow-2xl"
        >
          {/* Wand handle - dark wood with golden accents */}
          <defs>
            <linearGradient id="wandHandle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#654321', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="wandTip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="wandGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          
          {/* Wand glow effect */}
          <ellipse
            cx="60"
            cy="50"
            rx="25"
            ry="8"
            fill="url(#wandGlow)"
            className="animate-pulse"
            opacity="0.6"
          />
          
          {/* Wand tip */}
          <ellipse
            cx="60"
            cy="50"
            rx="8"
            ry="4"
            fill="url(#wandTip)"
            className="animate-pulse"
          />
          
          {/* Wand shaft */}
          <rect
            x="56"
            y="50"
            width="8"
            height="300"
            fill="url(#wandHandle)"
            rx="4"
          />
          
          {/* Golden bands */}
          <rect x="54" y="80" width="12" height="3" fill="#FFD700" rx="1.5" />
          <rect x="54" y="120" width="12" height="3" fill="#FFD700" rx="1.5" />
          <rect x="54" y="160" width="12" height="3" fill="#FFD700" rx="1.5" />
          <rect x="54" y="200" width="12" height="3" fill="#FFD700" rx="1.5" />
          <rect x="54" y="240" width="12" height="3" fill="#FFD700" rx="1.5" />
          <rect x="54" y="280" width="12" height="3" fill="#FFD700" rx="1.5" />
          
          {/* Handle grip */}
          <rect
            x="52"
            y="320"
            width="16"
            height="60"
            fill="#654321"
            rx="8"
          />
          
          {/* Handle grip texture */}
          <rect x="54" y="330" width="12" height="2" fill="#8B4513" rx="1" />
          <rect x="54" y="340" width="12" height="2" fill="#8B4513" rx="1" />
          <rect x="54" y="350" width="12" height="2" fill="#8B4513" rx="1" />
          <rect x="54" y="360" width="12" height="2" fill="#8B4513" rx="1" />
          <rect x="54" y="370" width="12" height="2" fill="#8B4513" rx="1" />
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