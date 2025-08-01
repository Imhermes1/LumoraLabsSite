'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, Star, Wand2, Crown, Users, Gift, Zap } from 'lucide-react'

interface AlphaRevealModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AlphaRevealModal({ isOpen, onClose }: AlphaRevealModalProps) {
  const [mounted, setMounted] = useState(false)
  const [showDissolutionParticles, setShowDissolutionParticles] = useState(false)
  const [showModalForm, setShowModalForm] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showSpells, setShowSpells] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
      // Start the magical dissolution sequence - Optimized timing
      setTimeout(() => setShowDissolutionParticles(true), 100)
      setTimeout(() => setShowModalForm(true), 1200)
      setTimeout(() => setShowContent(true), 1500)
      setTimeout(() => setShowSpells(true), 1800)
    } else {
      document.body.classList.remove('modal-open')
      setShowDissolutionParticles(false)
      setShowModalForm(false)
      setShowContent(false)
      setShowSpells(false)
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Magical Backdrop */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Magical Dissolution Particles */}
      {showDissolutionParticles && (
        <div className="absolute inset-0 z-10">
          {/* Particles forming from scattered positions - Reduced for performance */}
          {Array.from({ length: 25 }, (_, i) => {
            const colors = ['yellow', 'pink', 'purple', 'blue', 'green']
            const color = colors[i % colors.length]
            const size = Math.random() * 3 + 1
            const delay = Math.random() * 0.5
            
            const sizeClass = Math.ceil(size) === 1 ? 'w-1 h-1' : 
                             Math.ceil(size) === 2 ? 'w-2 h-2' : 'w-3 h-3'
            const colorClass = color === 'yellow' ? 'bg-yellow-400' :
                              color === 'pink' ? 'bg-pink-400' :
                              color === 'purple' ? 'bg-purple-400' :
                              color === 'blue' ? 'bg-blue-400' : 'bg-green-400'
            
            return (
              <div
                key={i}
                className={`absolute ${sizeClass} ${colorClass} rounded-full animate-dissolution-particle`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: '1.5s'
                }}
              />
            )
          })}
          
          {/* Center sparkle explosion */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-sparkle-explosion">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.1s'}}></div>
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          </div>
        </div>
      )}

      {/* Floating Magical Particles */}
      {showSpells && (
        <>
          <div className="absolute top-1/4 left-1/4 animate-bounce">
            <Sparkles className="text-yellow-400/60" size={20} />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-pulse">
            <Star className="text-blue-400/60" size={16} />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-spin">
            <Sparkles className="text-pink-400/60" size={24} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-bounce">
            <Star className="text-purple-400/60" size={18} />
          </div>
        </>
      )}

      {/* Modal */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] transition-all duration-1000 transform-gpu ${showModalForm ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="glass-strong rounded-3xl max-h-[90vh] overflow-hidden border border-purple-500/30 shadow-2xl">
          <div className="max-h-[90vh] overflow-y-auto modal-scroll-container">
            <div className="p-8 md:p-12">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Wand2 className="text-yellow-400 animate-pulse" size={32} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Aparecium
                  </span>
                </h2>
              </div>
              <p className="text-white/80 text-lg max-w-2xl">
                The spell has revealed a hidden truth about Lumora Labs...
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="glass rounded-full p-3 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Magical Content */}
          <div className={`${showContent ? 'animate-aparecium-reveal' : 'opacity-0 translate-y-4'}`}>
            
            {/* Alpha Program Reveal */}
            <div className="text-center mb-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 rounded-2xl blur-xl"></div>
                <div className="relative glass rounded-2xl p-8 border border-yellow-400/30">
                  <div className="flex items-center justify-center mb-4">
                    <Crown className="text-yellow-400 mr-3" size={32} />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      The <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Alpha Program</span>
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg mb-4">
                    Hidden from the eyes of ordinary users, there exists an exclusive circle of the first 25 chosen ones...
                  </p>
                  <div className="text-yellow-400/80 text-sm font-mono">
                    "Aparecium Revelio Alpha Testers"
                  </div>
                </div>
              </div>
            </div>

            {/* Alpha Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="text-purple-400" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-lg">First Access</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Be among the first 25 to experience our revolutionary apps before anyone else. Your feedback shapes the future.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Users className="text-blue-400" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-lg">Direct Influence</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Your voice matters. Alpha testers have direct input on features, design, and the overall direction of our apps.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Gift className="text-green-400" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-lg">Lifetime Benefits</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Exclusive perks, lifetime discounts, and special recognition as founding members of the Lumora Labs community.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-yellow-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Star className="text-yellow-400" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-lg">Legendary Status</h4>
                </div>
                <p className="text-white/70 text-sm">
                  Join an elite group of pioneers who helped build the future of mobile technology. Your name will be remembered.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="glass rounded-2xl p-6 border border-gradient-to-r from-purple-500/30 to-pink-500/30">
                <h4 className="text-white font-semibold text-xl mb-3">
                  The First 25 Spots Are Almost Full...
                </h4>
                <p className="text-white/70 text-sm mb-6">
                  Only a few magical spots remain. Will you be one of the chosen ones?
                </p>
                <button
                  onClick={onClose}
                  className="glass-strong rounded-full px-8 py-4 text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30"
                >
                  <span className="flex items-center">
                    <Wand2 className="mr-2" size={20} />
                    Join the Alpha Circle
                  </span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
} 