'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CountdownOverlayProps {
  targetDate: Date
  isVisible?: boolean
}

export default function CountdownOverlay({
  targetDate,
  isVisible = true
}: CountdownOverlayProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Prevent bypass attempts
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'S') ||
        (e.ctrlKey && e.key === 'P')
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('dragstart', handleDragStart)

    // Set loaded state after a small delay to ensure overlay appears first
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('dragstart', handleDragStart)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
        setIsExpired(false)
      } else {
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!isVisible) return null

  return (
    <>
      {/* Single Bulletproof Overlay with Everything */}
      <div 
        data-overlay="countdown"
        className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white/10 backdrop-blur-xl z-[9999] select-none flex items-center justify-center"
      >
        {/* Animated Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full opacity-80 animate-pulse" />
            </div>
          ))}
        </div>
        
        {/* Magical Content */}
        <div className="text-center space-y-8 w-full h-full flex flex-col justify-center">
          {/* Lumora Labs Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/Lumora-Labs-Logo-transparent.png"
              alt="Lumora Labs"
              width={200}
              height={80}
              className="w-48 md:w-64 h-auto animate-logo-glow"
            />
          </div>

          {/* Magical Message */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white/90 tracking-wider">
              Something Magical
            </h1>
            <h2 className="text-xl md:text-2xl text-white/70 font-light">
              is about to happen
            </h2>
          </div>

          {/* Countdown Timer */}
          {!isExpired ? (
            <div className="space-y-4">
              <div className="text-sm text-white/50 uppercase tracking-widest">
                In exactly
              </div>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-lumora-pink animate-pulse">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-lumora-pink animate-pulse">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-lumora-pink animate-pulse">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Mins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-lumora-pink animate-pulse">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Secs</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl animate-bounce">
                🎉
              </div>
              <div className="text-2xl md:text-3xl font-bold text-lumora-pink">
                The Magic Has Arrived
              </div>
              <div className="text-white/70 text-lg">
                Welcome to the future
              </div>
            </div>
          )}


        </div>
      </div>
    </>
  )
} 