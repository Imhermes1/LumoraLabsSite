'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users } from 'lucide-react'

type BetaCountVariant = 'hero' | 'modal'

interface BetaCountProps {
  variant?: BetaCountVariant
}

export default function BetaCount({ variant = 'modal' }: BetaCountProps) {
  const [count, setCount] = useState<number | null>(null)
  const [alphaTesterCount, setAlphaTesterCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Check if we have a preloaded count from the Hero component
        if (typeof window !== 'undefined' && window.__preloadedBetaCount !== undefined) {
          setCount(window.__preloadedBetaCount)
          // We'll need to fetch alpha count separately
          const response = await fetch('/api/notion')
          const data = await response.json()
          if (data.success) {
            setAlphaTesterCount(data.alphaTesterCount)
          }
          setIsLoading(false)
          return
        }

        const response = await fetch('/api/notion')
        const data = await response.json()
        
        if (data.success) {
          setCount(data.count)
          setAlphaTesterCount(data.alphaTesterCount)
        }
      } catch (error) {
        console.error('Error fetching beta count:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  const containerBase =
    variant === 'hero'
      ? 'rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl shadow-[0_18px_55px_-28px_rgba(15,23,42,0.85)]'
      : 'rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg shadow-[0_16px_48px_-30px_rgba(15,23,42,0.75)]'

  const labelTone = variant === 'hero' ? 'text-white/65' : 'text-white/60'
  const captionTone = 'text-white/55'
  const pulseTone = variant === 'hero' ? 'bg-lumora-purple/80' : 'bg-lumora-purple/70'

  if (isLoading) {
    return (
      <div className={`${containerBase} transition-all duration-300`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-lumora-purple" />
            <span className={`text-sm ${labelTone}`}>Beta program</span>
          </div>
          <span className="flex items-center gap-1 text-sm text-lumora-pink">
            <span className={`h-2 w-2 rounded-full ${pulseTone} animate-pulse`}></span>
            Loading…
          </span>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 animate-[pulse_1.2s_ease-in-out_infinite] bg-gradient-to-r from-lumora-pink via-lumora-purple to-lumora-pink" />
        </div>
      </div>
    )
  }

  if (count === null) {
    return (
      <div className={`${containerBase} transition-all duration-300`}>
        <div className="flex items-center justify-center gap-2">
          <Users className="h-4 w-4 text-lumora-purple" />
          <span className={`text-sm ${labelTone}`}>Beta program active</span>
        </div>
      </div>
    )
  }

  const totalSlots = 100
  const alphaSlots = 25 // First 25% for alpha testers
  const betaSlots = 75 // Remaining 75% for beta signups
  
  const alphaProgress = Math.min((alphaTesterCount || 0) / alphaSlots, 1) * alphaSlots
  const betaProgress = Math.min((count - (alphaTesterCount || 0)) / betaSlots, 1) * betaSlots
  const totalProgress = alphaProgress + betaProgress

  return (
    <div className={`${containerBase} transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-lumora-purple" />
          <span className={`text-sm font-medium ${labelTone}`}>Beta program</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-lumora-pink">
          <TrendingUp className="h-4 w-4" />
          {count}/{totalSlots}
        </div>
      </div>

      <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-300 via-yellow-100 to-white transition-all duration-700 ease-out"
          style={{ width: `${alphaProgress}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-lumora-pink via-lumora-purple to-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className={captionTone}>
          Alpha {alphaTesterCount ?? 0} / {alphaSlots}
        </span>
        <span className={captionTone}>{totalSlots - count} spots remaining</span>
      </div>
    </div>
  )
}

// Extend Window interface to include the preloaded count
declare global {
  interface Window {
    __preloadedBetaCount?: number | null
  }
} 
