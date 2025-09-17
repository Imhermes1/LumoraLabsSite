'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Info, Wand2 } from 'lucide-react'
import { LazyBetaSignupModal, LazyAlphaRevealModal } from './LazyModals'
import BetaCount from './BetaCount'

// Preload beta count data
let preloadedCount: number | null = null
let preloadPromise: Promise<number | null> | null = null

const preloadBetaCount = async (): Promise<number | null> => {
  if (preloadedCount !== null) return preloadedCount
  if (preloadPromise) return preloadPromise

  preloadPromise = fetch('/api/notion')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        preloadedCount = data.count
        return data.count
      }
      return null
    })
    .catch(() => null)

  return preloadPromise
}

// Start preloading immediately when this module is imported
if (typeof window !== 'undefined') {
  preloadBetaCount().then(count => {
    window.__preloadedBetaCount = count
  })
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  const openAlphaReveal = () => {
    setIsAlphaModalOpen(true)
  }

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/Lumora-Labs-Logo-transparent.png"
            alt="Lumora Labs Logo"
            width={120}
            height={120}
            priority
            className="w-24 h-24 md:w-32 md:h-32 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300 animate-subtle-float"
          />
        </div>

        <h1 className="text-hero text-gray-900 mb-6">
          Crafting the{' '}
          <span className="gradient-text relative">
            Future
            <span className="absolute -top-2 -right-2 text-yellow-400 animate-gentle-sparkle">✨</span>
          </span>
          <br />
          of Extraordinary Apps
        </h1>

        <p className="text-subtitle text-gray-600 mb-12 max-w-3xl mx-auto">
          Where light meets innovation. Creating elegantly crafted and intuitively powerful apps
          for Apple and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={openBetaSignup}
            className="btn-primary-clean text-lg px-8 py-4 flex items-center gap-2"
          >
            <Sparkles size={20} />
            Join Beta Program
          </button>

          <button
            onClick={openAlphaReveal}
            className="btn-secondary-clean text-lg px-8 py-4 flex items-center gap-2 animate-gentle-glow"
          >
            <Wand2 size={20} />
            Aparecium
          </button>
        </div>

        {/* Beta Status */}
        <div className="card-clean max-w-md mx-auto">
          <BetaCount />
        </div>
      </div>

      {/* Beta Signup Modal */}
      {isModalOpen && (
        <LazyBetaSignupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Alpha Reveal Modal */}
      {isAlphaModalOpen && (
        <LazyAlphaRevealModal
          isOpen={isAlphaModalOpen}
          onClose={() => setIsAlphaModalOpen(false)}
          onOpenBetaSignup={() => {
            setIsAlphaModalOpen(false)
            setIsModalOpen(true)
          }}
          onOpenRegularBetaSignup={() => {
            setIsAlphaModalOpen(false)
            setIsModalOpen(true)
          }}
        />
      )}
    </div>
  )
}