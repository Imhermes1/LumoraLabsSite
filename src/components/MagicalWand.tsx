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
        // Trigger wand glow animation
        const wand = document.getElementById("hp-wand");
        const glow = document.getElementById("wand-glow");
        
        if (wand && glow) {
          glow.style.opacity = "1";
          glow.style.transition = "opacity 0.6s cubic-bezier(.4,2,.3,1)";
          setTimeout(() => {
            glow.style.opacity = "0";
          }, 600);
        }
        
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
        left: targetPosition ? `${targetPosition.x}px` : '50%',
        top: targetPosition ? `${targetPosition.y}px` : '50%',
        transform: targetPosition ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)'
      }}>
        <div className="wand-container">
          <div className="wand" id="hp-wand">
            {/* Glow effect */}
            <div className="wand-glow" id="wand-glow"></div>
          </div>
        </div>
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