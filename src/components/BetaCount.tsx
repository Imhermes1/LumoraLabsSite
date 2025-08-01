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

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Try to use preloaded data first
        if (window.__preloadedBetaCount !== undefined) {
          setCount(window.__preloadedBetaCount)
          setLoading(false)
          // If data is preloaded, show content sooner
          setTimeout(() => setShowContent(true), 500)
          return
        }

        // If preloaded data is not available, fetch it
        const response = await fetch('/api/notion')
        const data = await response.json()
        
        if (data.success) {
          setCount(data.count)
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

    // Show content after 2 seconds for smooth transition, or sooner if data is preloaded
    const showDelay = window.__preloadedBetaCount !== undefined ? 500 : 2000
    const timer = setTimeout(() => {
      setShowContent(true)
    }, showDelay)

    return () => clearTimeout(timer)
  }, [])

  // Show enhanced loading animation for the first 2 seconds or until content is ready
  if (loading || !showContent) {
    return (
      <div className={`glass rounded-2xl p-4 inline-block ${className}`}>
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
      <div className={`glass rounded-2xl p-4 inline-block ${className}`}>
        <p className="text-white/70 text-sm">
          <span className="text-lumora-pink font-semibold">Exclusive Beta:</span> 
          <span className="ml-2">Join now</span>
        </p>
      </div>
    )
  }

  const remaining = Math.max(0, 100 - (count || 0))
  const percentage = Math.min(100, ((count || 0) / 100) * 100)

  return (
    <div className={`glass rounded-2xl p-4 inline-block ${className} animate-fade-in`}>
      <p className="text-white/70 text-sm">
        <span className="text-lumora-pink font-semibold">Exclusive Beta:</span> 
        <span className="ml-2">{count}/{100} spots filled</span>
      </p>
      {count !== null && (
        <div className="mt-2 w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-lumora-pink to-lumora-purple h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
      {remaining > 0 && (
        <p className="text-white/50 text-xs mt-1">
          {remaining} spots remaining
        </p>
      )}
    </div>
  )
} 