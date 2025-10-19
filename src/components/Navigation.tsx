'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LazyComingSoonModal } from './LazyModals'
import Logo from './Logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const [comingSoonSection, setComingSoonSection] = useState<'apps' | 'technology'>('apps')

  const openComingSoonModal = (section: 'apps' | 'technology') => {
    setComingSoonSection(section)
    setIsComingSoonModalOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => openComingSoonModal('apps')}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Apps
              </button>
              <button
                onClick={() => openComingSoonModal('technology')}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Technology
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-xl p-2 text-white hover:bg-white/10 transition-all duration-600"
              >
                {isMenuOpen ? (
                  <X size={24} className="transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu size={24} className="transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 animate-fade-in">
              <button
                onClick={() => openComingSoonModal('apps')}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105"
              >
                <span className="text-lg font-medium">Apps</span>
                <span className="block text-xs text-white/50 mt-1">Coming Soon</span>
              </button>
              <button
                onClick={() => openComingSoonModal('technology')}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105"
              >
                <span className="text-lg font-medium">Technology</span>
                <span className="block text-xs text-white/50 mt-1">Learn more</span>
              </button>
            </div>
          )}
        </div>
      </div>
        
        {/* Coming Soon Modal */}
        {isComingSoonModalOpen && (
          <LazyComingSoonModal 
            isOpen={isComingSoonModalOpen} 
            onClose={() => setIsComingSoonModalOpen(false)} 
            section={comingSoonSection}
          />
        )}
    </nav>
  )
}
