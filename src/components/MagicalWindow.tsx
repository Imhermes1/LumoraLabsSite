'use client'

import { useState, useEffect } from 'react'

interface MagicalWindowProps {
  isVisible: boolean
  onFormComplete: () => void
}

export default function MagicalWindow({ isVisible, onFormComplete }: MagicalWindowProps) {
  const [isForming, setIsForming] = useState(false)

  useEffect(() => {
    if (isVisible && !isForming) {
      setIsForming(true)
      
      // Complete formation after animation
      setTimeout(() => {
        onFormComplete()
      }, 2000)
    }
  }, [isVisible, isForming, onFormComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isForming ? 'animate-window-form' : 'opacity-0'
      }`}>
        <div className="relative">
          {/* Window frame */}
          <div className="w-80 h-96 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-indigo-900/80 rounded-lg border-4 border-purple-400/60 backdrop-blur-sm shadow-2xl">
            {/* Window panes */}
            <div className="grid grid-cols-2 grid-rows-2 gap-1 p-2 h-full">
              <div className="bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded border border-white/30 backdrop-blur-sm"></div>
              <div className="bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded border border-white/30 backdrop-blur-sm"></div>
              <div className="bg-gradient-to-br from-pink-400/40 to-yellow-400/40 rounded border border-white/30 backdrop-blur-sm"></div>
              <div className="bg-gradient-to-br from-yellow-400/40 to-blue-400/40 rounded border border-white/30 backdrop-blur-sm"></div>
            </div>
            
            {/* Magical glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-lg animate-pulse"></div>
            
            {/* Sparkle effects on window */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Window sill */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-gradient-to-r from-purple-800/80 via-blue-800/80 to-indigo-800/80 rounded-lg border-2 border-purple-400/40"></div>
          
          {/* Magical particles around window */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute -top-4 -right-4 w-2 h-2 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1.1s'}}></div>
        </div>
      </div>
    </div>
  )
} 