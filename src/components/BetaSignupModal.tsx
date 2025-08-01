'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, Smartphone, Heart } from 'lucide-react'
import BetaSignupForm from './BetaSignupForm'
import BetaCount from './BetaCount'

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaSignupModal({ isOpen, onClose }: BetaSignupModalProps) {
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <div className="glass-strong rounded-3xl max-h-[90vh] overflow-y-auto modal-scroll-container">
          <div className="p-8 md:p-12">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
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
              className="glass rounded-full p-3 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* Left Side - App Previews & Info */}
            <div className="space-y-6">
              
              {/* App Cards */}
              <div className="space-y-4">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-lumora-pink/20 rounded-2xl flex items-center justify-center">
                      <Heart className="text-lumora-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">MooDo</h3>
                      <p className="text-white/60 text-sm">Emotional task management</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Transformative task management that adapts to your emotional rhythm. 
                    Work with your emotions, not against them.
                  </p>
                  <div className="mt-3 text-lumora-pink text-sm font-medium">
                    16/50 beta spots filled
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-positive/20 rounded-2xl flex items-center justify-center">
                      <Smartphone className="text-positive" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Macro</h3>
                      <p className="text-white/60 text-sm">Intelligent nutrition tracking</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Powered by GPT-4, delivering precise nutrition tracking built for 
                    the way Australians eat.
                  </p>
                  <div className="mt-3 text-positive text-sm font-medium">
                    22/50 beta spots filled
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Sparkles className="mr-2 text-lumora-purple" size={20} />
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
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 glass rounded-3xl flex items-center justify-center">
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
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <div className="glass rounded-2xl overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-lumora-pink/10 to-lumora-purple/10 text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Sign up for the beta
                  </h3>
                  <p className="text-white/70 text-sm">
                    Shape the next generation of apps
                  </p>
                </div>
                
                {/* Custom Beta Signup Form */}
                <div className="p-6">
                  <BetaSignupForm />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <BetaCount />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
} 