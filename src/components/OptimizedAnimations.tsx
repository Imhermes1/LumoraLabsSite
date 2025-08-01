'use client'

import { memo } from 'react'

interface OptimizedSparkleEffectProps {
  phase: 'powerup' | 'explosion' | 'convergence'
}

// Memoized sparkle component for better performance
const OptimizedSparkleEffect = memo(({ phase }: OptimizedSparkleEffectProps) => {
  // Reduce sparkle count for better performance while maintaining visual impact
  const sparkleCount = phase === 'explosion' ? 60 : 40 // Reduced from 120/80
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: sparkleCount }, (_, i) => {
        const colors = ['yellow', 'pink', 'purple', 'blue', 'green', 'orange', 'cyan']
        const color = colors[i % colors.length]
        const size = Math.random() * 4 + 2
        const delay = Math.random() * (phase === 'explosion' ? 0.3 : 0.5)
        
        const sizeClass = Math.ceil(size) <= 3 ? 'w-2 h-2' : 
                         Math.ceil(size) <= 4 ? 'w-3 h-3' : 'w-4 h-4'
        
        const colorClass = color === 'yellow' ? 'bg-yellow-400' :
                          color === 'pink' ? 'bg-pink-400' :
                          color === 'purple' ? 'bg-purple-400' :
                          color === 'blue' ? 'bg-blue-400' : 
                          color === 'green' ? 'bg-green-400' :
                          color === 'orange' ? 'bg-orange-400' : 'bg-cyan-400'
        
        const animationClass = phase === 'explosion' ? 'animate-explosion-sparkle' : 'animate-convergence-sparkle'
        const duration = phase === 'explosion' ? '2s' : '1.5s'
        
        return (
          <div
            key={i}
            className={`absolute ${sizeClass} ${colorClass} rounded-full ${animationClass}`}
            style={{
              left: '50%',
              top: '50%',
              animationDelay: `${delay}s`,
              animationDuration: duration,
              willChange: 'transform, opacity', // GPU acceleration hint
              transform: 'translate3d(-50%, -50%, 0)', // Force GPU layer
            }}
          />
        )
      })}
    </div>
  )
})

OptimizedSparkleEffect.displayName = 'OptimizedSparkleEffect'

interface OptimizedRuneEffectProps {}

// Memoized rune component
const OptimizedRuneEffect = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-50">
    {Array.from({ length: 8 }, (_, i) => (
      <div
        key={i}
        className="absolute text-yellow-400/80 text-2xl animate-rune-float"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate3d(-50%, -50%, 0) rotate(${i * 45}deg) translateY(-80px)`,
          animationDelay: `${i * 0.1}s`,
          willChange: 'transform, opacity',
        }}
      >
        ✧
      </div>
    ))}
  </div>
))

OptimizedRuneEffect.displayName = 'OptimizedRuneEffect'

interface OptimizedShockwaveEffectProps {}

// Memoized shockwave component
const OptimizedShockwaveEffect = memo(() => (
  <div className="fixed inset-0 z-45 pointer-events-none">
    <div 
      className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-yellow-400/60 rounded-full animate-shockwave"
      style={{ willChange: 'transform' }}
    />
    <div 
      className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-purple-400/60 rounded-full animate-shockwave" 
      style={{ animationDelay: '0.1s', willChange: 'transform' }}
    />
    <div 
      className="absolute left-1/2 top-1/2 w-0 h-0 border-2 border-pink-400/60 rounded-full animate-shockwave" 
      style={{ animationDelay: '0.2s', willChange: 'transform' }}
    />
  </div>
))

OptimizedShockwaveEffect.displayName = 'OptimizedShockwaveEffect'

export { OptimizedSparkleEffect, OptimizedRuneEffect, OptimizedShockwaveEffect }