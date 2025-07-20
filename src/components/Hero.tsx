'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openBetaSignup = () => {
    window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')
  }

  const scrollToApps = () => {
    const element = document.getElementById('apps')
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded w-96 mb-4"></div>
          <div className="h-6 bg-white/10 rounded w-64"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lumora-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lumora-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-deep-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the{' '}
            <span className="gradient-text animate-gradient bg-gradient-to-r from-lumora-pink via-lumora-purple to-deep-purple bg-[length:200%_200%]">
              Future
            </span>
            <br />
            of Beautiful Apps
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Lumora Labs creates the world's most beautifully designed and best functioning apps 
            exclusively for Apple, with Android coming soon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={openBetaSignup}
              className="glass-strong rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-lumora-purple/30 transition-all duration-300 btn-glass group"
            >
              Join Beta Program
              <span className="ml-2 group-hover:animate-pulse">✨</span>
            </button>

            <button
              onClick={scrollToApps}
              className="border border-white/30 rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Apps
            </button>
          </div>

          {/* Beta Status */}
          <div className="glass rounded-2xl p-4 inline-block">
            <p className="text-white/70 text-sm">
              <span className="text-lumora-pink font-semibold">Limited Beta:</span> 
              <span className="ml-2">20/50 spots filled</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToApps}
            className="text-white/50 hover:text-white/80 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-lumora-pink/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-lumora-purple/30 rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-deep-purple/30 rounded-full animate-float delay-500"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-positive/30 rounded-full animate-float delay-1500"></div>
    </section>
  )
}
