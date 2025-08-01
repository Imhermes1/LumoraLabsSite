'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp } from 'lucide-react'

export default function BetaCount() {
  const [count, setCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Check if we have a preloaded count from the Hero component
        if (typeof window !== 'undefined' && window.__preloadedBetaCount !== undefined) {
          setCount(window.__preloadedBetaCount)
          setIsLoading(false)
          return
        }

        const response = await fetch('/api/notion')
        const data = await response.json()
        
        if (data.success) {
          setCount(data.count)
        }
      } catch (error) {
        console.error('Error fetching beta count:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  if (isLoading) {
    return (
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-2 border-lumora-purple/40 shadow-[0_0_10px_rgba(179,64,217,0.2)] hover:shadow-[0_0_15px_rgba(179,64,217,0.3)] transition-all duration-300">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-lumora-purple rounded-full animate-pulse"></div>
          <span className="text-white/70 text-sm">Loading beta count...</span>
        </div>
      </div>
    )
  }

  if (count === null) {
    return (
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-2 border-lumora-purple/40 shadow-[0_0_10px_rgba(179,64,217,0.2)] hover:shadow-[0_0_15px_rgba(179,64,217,0.3)] transition-all duration-300">
        <div className="flex items-center justify-center space-x-2">
          <Users className="text-lumora-purple" size={16} />
          <span className="text-white/70 text-sm">Beta Program Active</span>
        </div>
      </div>
    )
  }

  const totalSlots = 100
  const progressPercentage = Math.min((count / totalSlots) * 100, 100)

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-2 border-lumora-purple/40 shadow-[0_0_10px_rgba(179,64,217,0.2)] hover:shadow-[0_0_15px_rgba(179,64,217,0.3)] transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Users className="text-lumora-purple" size={16} />
          <span className="text-white/70 text-sm">Beta Program</span>
        </div>
        <div className="flex items-center space-x-1">
          <TrendingUp className="text-lumora-pink" size={14} />
          <span className="text-lumora-pink font-semibold text-sm">{count}/{totalSlots}</span>
        </div>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-lumora-pink to-lumora-purple transition-all duration-1000 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-white/50 text-xs">
          {totalSlots - count} spots remaining
        </span>
        <span className="text-white/50 text-xs">
          {progressPercentage.toFixed(0)}% full
        </span>
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