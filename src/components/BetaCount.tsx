'use client'

import { useState, useEffect } from 'react'

interface BetaCountProps {
  className?: string
}

// Access preloaded data from Hero component
declare global {
  interface Window {
    __preloadedBetaCount?: number | null
    __preloadBetaCountPromise?: Promise<number | null>
  }
}

export default function BetaCount({ className = '' }: BetaCountProps) {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Try to use preloaded data first
        if (window.__preloadedBetaCount !== undefined) {
          setCount(window.__preloadedBetaCount)
          setLoading(false)
          setLastUpdate(new Date())
          // If data is preloaded, show content sooner
          setTimeout(() => setShowContent(true), 500)
          return
        }

        // If preloaded data is not available, fetch it
        const response = await fetch('/api/notion')
        const data = await response.json()
        
        if (data.success) {
          setCount(data.count)
          setLastUpdate(new Date())
        } else {
          setError(true)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    // Fetch data immediately
    fetchCount()

    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchCount, 30000)

    // Show content after 2 seconds for smooth transition, or sooner if data is preloaded
    const showDelay = window.__preloadedBetaCount !== undefined ? 500 : 2000
    const timer = setTimeout(() => {
      setShowContent(true)
    }, showDelay)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // Show enhanced loading animation for the first 2 seconds or until content is ready
  if (loading || !showContent) {
    return (
      <div className={`rounded-2xl p-4 inline-block ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-32"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-lumora-pink rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-lumora-purple rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-deep-purple rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
        <div className="mt-2 w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-lumora-pink via-lumora-purple to-deep-purple h-2 rounded-full transition-all duration-2000 ease-out"
            style={{ 
              width: showContent ? '100%' : '0%',
              animation: !showContent ? 'loading-progress 2s ease-out forwards' : 'none'
            }}
          ></div>
        </div>
        {!showContent && (
          <p className="text-white/50 text-xs mt-1 animate-pulse">
            Loading exclusive beta data...
          </p>
        )}
      </div>
    )
  }

  if (error) {
    return (
      <div className={`rounded-2xl p-4 inline-block ${className}`}>
        <p className="text-white/70 text-sm">
          <span className="text-lumora-pink font-semibold">Exclusive Beta:</span> 
          <span className="ml-2">Join now</span>
        </p>
      </div>
    )
  }

  const remaining = Math.max(0, 100 - (count || 0))
  const percentage = Math.min(100, ((count || 0) / 100) * 100)
  const isNearCapacity = percentage > 80
  const isCritical = percentage > 95

  return (
    <div className={`card-primary rounded-2xl p-4 inline-block ${className} animate-fade-in`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-white/70 text-sm">
          <span className="text-lumora-pink font-semibold">Exclusive Beta Access</span>
        </p>
        {lastUpdate && (
          <div className="text-white/30 text-xs">
            Live
            <span className="ml-1 w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
          </div>
        )}
      </div>
      
      <div className="mb-2">
        <p className="text-white/90 text-lg font-bold">
          {count}/{100} spots filled
        </p>
        <p className="text-white/60 text-xs">
          {isCritical ? '🚨 Almost full!' : isNearCapacity ? '⚡ Filling fast!' : '✨ Limited spots available'}
        </p>
      </div>

      {count !== null && (
        <div className="mt-3 w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
              isCritical 
                ? 'bg-gradient-to-r from-red-500 to-red-400' 
                : isNearCapacity 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-400'
                : 'bg-gradient-to-r from-lumora-pink to-lumora-purple'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
      
      {remaining > 0 && (
        <p className="text-white/50 text-xs mt-2">
          {remaining} spots remaining
        </p>
      )}
      
      {isCritical && (
        <p className="text-red-400 text-xs mt-1 font-semibold animate-pulse">
          ⚡ Join now before we close!
        </p>
      )}
    </div>
  )
} 