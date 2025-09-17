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
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Users className="text-purple-600" size={20} />
          <span className="text-gray-700 font-medium">Beta Program</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
        </div>
        <p className="text-gray-500 text-sm mt-2">Loading...</p>
      </div>
    )
  }

  if (count === null) {
    return (
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <Users className="text-purple-600" size={20} />
          <span className="text-gray-700 font-medium">Beta Program Active</span>
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
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2 mb-3">
        <Users className="text-purple-600" size={20} />
        <span className="text-gray-700 font-medium">Beta Program</span>
        <div className="flex items-center space-x-1 ml-3">
          <TrendingUp className="text-pink-500" size={16} />
          <span className="text-pink-500 font-semibold">{count}/{totalSlots}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{ width: `${totalProgressPercentage}%` }}
        ></div>
      </div>

      <p className="text-gray-500 text-sm">
        {totalSlots - count} spots remaining
      </p>
    </div>
  )
}

// Extend Window interface to include the preloaded count
declare global {
  interface Window {
    __preloadedBetaCount?: number | null
  }
} 