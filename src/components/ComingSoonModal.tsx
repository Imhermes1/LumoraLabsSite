'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  section: 'apps' | 'technology'
}

export default function ComingSoonModal({ isOpen, onClose, section }: ComingSoonModalProps) {

  const getSectionInfo = () => {
    switch (section) {
      case 'apps':
        return {
          title: 'Our Apps',
          description: 'Discover Macro and Micro! Our elegantly crafted apps designed to transform your productivity and nutrition tracking.',
          icon: '📱'
        }
      case 'technology':
        return {
          title: 'Our Technology',
          description: 'Explore the cutting-edge technology and AI that powers our apps, designed to understand and adapt to your unique needs.',
          icon: '🚀'
        }
      default:
        return {
          title: 'Coming Soon',
          description: 'More information will be released soon.',
          icon: '🔮'
        }
    }
  }

  const sectionInfo = getSectionInfo()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="glass-strong rounded-3xl p-8 max-w-md w-full mx-4 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="text-6xl mb-4">
              {sectionInfo.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-4">
              {sectionInfo.title}
            </h2>

            {/* Description */}
            <p className="text-white/70 mb-6 leading-relaxed">
              {sectionInfo.description}
            </p>

            {/* Coming Soon Badge */}
            <div className="glass rounded-full px-4 py-2 inline-block mb-6">
              <span className="text-lumora-pink font-semibold text-sm">
                🚧 More Information Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 