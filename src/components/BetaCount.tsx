'use client'

import { useState, useEffect } from 'react'

interface BetaCountProps {
  className?: string
}

export default function BetaCount({ className = '' }: BetaCountProps) {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCount = async () => {
      try {
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

    fetchCount()
  }, [])

  if (loading) {
    return (
      <div className={`glass rounded-2xl p-4 inline-block ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-32"></div>
        </div>
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
    <div className={`glass rounded-2xl p-4 inline-block ${className}`}>
      <p className="text-white/70 text-sm">
        <span className="text-lumora-pink font-semibold">Exclusive Beta:</span> 
        <span className="ml-2">{count}/{100} spots filled</span>
      </p>
      {count !== null && (
        <div className="mt-2 w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-lumora-pink to-lumora-purple h-2 rounded-full transition-all duration-500"
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