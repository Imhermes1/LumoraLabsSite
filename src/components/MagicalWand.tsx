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
  const [showGlow, setShowGlow] = useState(false)

  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true)
      
      // Start wand animation after a delay
      setTimeout(() => {
        // Show glow at wand tip
        setShowGlow(true)
        
        // Hide glow after a delay
        setTimeout(() => {
          setShowGlow(false)
        }, 600)
        
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

  // Reset animation state when visibility changes
  useEffect(() => {
    if (!isVisible) {
      setIsAnimating(false)
      setSparkles([])
      setShowGlow(false)
    }
  }, [isVisible])

  if (!isVisible) return null

  // Calculate wand tip position
  const wandTipOffset = {
    x: Math.cos(45 * Math.PI / 180) * 100, // 100px is the translateY offset
    y: -Math.sin(45 * Math.PI / 180) * 100
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Wand */}
      <div className={`absolute transition-all duration-1000 transform-gpu ${
        isAnimating ? 'animate-wand-approach' : 'opacity-0'
      }`} style={{
        left: targetPosition ? `${targetPosition.x}px` : '50%',
        top: targetPosition ? `${targetPosition.y}px` : '50%',
        transform: targetPosition ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)'
      }}>
        <div className="wand-container">
          <div className="wand" id="hp-wand">
            {/* Remove the glow from here - we'll position it separately */}
          </div>
        </div>
      </div>

      {/* Wand Glow - positioned at wand tip */}
      {showGlow && targetPosition && (
        <div 
          className="absolute w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 transition-opacity duration-600"
          style={{
            left: `${targetPosition.x + wandTipOffset.x}px`,
            top: `${targetPosition.y + wandTipOffset.y}px`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px gold, 0 0 30px rgba(255, 215, 0, 0.6)',
            zIndex: 51
          }}
        />
      )}

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
        
        // Calculate sparkle position relative to wand tip
        const sparkleX = targetPosition ? 
          targetPosition.x + wandTipOffset.x + sparkle.x : 
          `calc(50% + ${sparkle.x}px)`
        const sparkleY = targetPosition ? 
          targetPosition.y + wandTipOffset.y + sparkle.y : 
          `calc(50% + ${sparkle.y}px)`
        
        return (
          <div
            key={sparkle.id}
            className={`absolute ${size} bg-gradient-to-r ${color} rounded-full animate-sparkle-float`}
            style={{
              left: typeof sparkleX === 'number' ? `${sparkleX}px` : sparkleX,
              top: typeof sparkleY === 'number' ? `${sparkleY}px` : sparkleY,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '2.5s'
            }}
          />
        )
      })}
    </div>
  )
} 