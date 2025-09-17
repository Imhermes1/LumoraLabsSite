'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, Smartphone, Gift } from 'lucide-react'
import BetaSignupForm from './BetaSignupForm'
import BetaCount from './BetaCount'

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
  isFromAlpha?: boolean
}

export default function BetaSignupModal({ isOpen, onClose, isFromAlpha = false }: BetaSignupModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh]">
        <div className="rounded-3xl border border-black/12 bg-[rgba(24,28,36,0.92)] backdrop-blur-xl shadow-[0_26px_64px_-30px_rgba(15,23,42,0.65)] max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-black/15 flex-shrink-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the <span className="gradient-text">Revolution</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl">
                Be among the first to experience the future of elegant, AI-powered apps. 
                Your journey into extraordinary productivity starts here.
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="rounded-full border border-white/30 bg-[rgba(24,28,36,0.4)] p-3 text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              
              {/* Left Side - App Previews & Info */}
              <div className="space-y-6">
                
                {/* App Cards */}
                <div className="space-y-4">
                  <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 transition-colors duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-positive/20 rounded-2xl flex items-center justify-center border border-positive/50">
                        <Smartphone className="text-positive" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Macro</h3>
                        <p className="text-white/60 text-sm">Intelligent nutrition tracking</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      Macro suggests <span className="text-vibrant">balanced meals</span>, adapts grocery lists to your preferences, and keeps
                      you progressing without obsessing over every gram.
                    </p>
                    <div className="mt-3 text-positive text-sm font-medium">
                      22/50 beta spots filled
                    </div>
                  </div>

                  <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 transition-colors duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-lumora-pink/20 rounded-2xl flex items-center justify-center border border-lumora-pink/50">
                        <Gift className="text-lumora-pink" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Micro</h3>
                        <p className="text-white/60 text-sm">Calendars, tasks, and habits together</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      Micro layers <span className="text-vibrant">gentle prompts</span> over your calendar so planning, prioritising, and
                      building routines feels effortless.
                    </p>
                    <div className="mt-3 text-lumora-pink text-sm font-medium">
                      16/50 beta spots filled
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)] transition-colors duration-300">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Sparkles className="mr-2 text-vibrant" size={20} />
                    Beta Benefits
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lumora-pink rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Exclusive early access to both apps</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lumora-purple rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Direct influence on product development</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-deep-purple rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">50% lifetime discount on premium features</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-positive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm">Exclusive community access</p>
                    </div>
                  </div>
                </div>

                {/* Placeholder Image */}
                <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-8 text-center backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)] transition-colors duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 bg-black/30 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-deep-purple/50">
                    <div className="text-center">
                      <Sparkles size={32} className="text-lumora-purple mx-auto mb-2 animate-pulse" />
                      <p className="text-white/50 text-xs">App Preview</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Experience the future of productivity
                    <br />
                    <span className="text-white/50 text-xs">Screenshots coming soon</span>
                  </p>
                </div>
              </div>

              {/* Right Side - Custom Form */}
              <div className="lg:border-l lg:border-black/15 lg:pl-8">
                <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] overflow-hidden backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)] transition-colors duration-300">
                  <div className="p-6 bg-gradient-to-r from-lumora-pink/10 to-lumora-purple/10 text-center border-b border-black/15">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Sign up for the beta
                    </h3>
                    <p className="text-white/70 text-sm">
                      Shape the next generation of apps
                    </p>
                  </div>
                  
                  {/* Custom Beta Signup Form */}
                  <div className="p-6">
                    <BetaSignupForm isFromAlpha={isFromAlpha} />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-black/15 text-center">
              <BetaCount />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
