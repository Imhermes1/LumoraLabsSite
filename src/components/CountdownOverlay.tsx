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
      {/* Frosted Glass Backdrop - Edge to Edge */}
      <div className="fixed inset-0 bg-white/10 backdrop-blur-xl z-[9999]" />
      
      {/* Animated Sparkles */}
      <div className="fixed inset-0 z-[10000] pointer-events-none">
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
      
      {/* Magical Content - Edge to Edge */}
      <div className="fixed inset-0 z-[10001] flex items-center justify-center">
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

          {/* Bold Lumora Labs Text */}
          <div className="text-white/60 text-lg font-bold tracking-wider">
            Lumora Labs
          </div>
        </div>
      </div>
    </>
  )
} 