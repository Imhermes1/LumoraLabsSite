'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp, Crown } from 'lucide-react'

export default function BetaCount() {
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
  const alphaSlots = 25 // First 25% for alpha testers
  const betaSlots = 75 // Remaining 75% for beta signups
  
  const alphaProgress = Math.min((alphaTesterCount || 0) / alphaSlots, 1) * alphaSlots
  const betaProgress = Math.min((count - (alphaTesterCount || 0)) / betaSlots, 1) * betaSlots
  const totalProgress = alphaProgress + betaProgress
  const totalProgressPercentage = (totalProgress / totalSlots) * 100

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
      
      {/* Progress Bar */}
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden relative">
        {/* Alpha section (golden/white) - first 25% */}
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 to-white transition-all duration-1000 ease-out"
          style={{ width: `${alphaProgress}%` }}
        ></div>
        
        {/* Beta section (blue/green gradient) - remaining 75% */}
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000 ease-out"
          style={{ width: `${totalProgress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Crown className="text-yellow-400" size={12} />
            <span className="text-white/50 text-xs">
              {alphaTesterCount || 0}/{alphaSlots} Alpha
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="text-blue-400" size={12} />
            <span className="text-white/50 text-xs">
              {count - (alphaTesterCount || 0)}/{betaSlots} Beta
            </span>
          </div>
        </div>
        <span className="text-white/50 text-xs">
          {totalProgressPercentage.toFixed(0)}% full
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