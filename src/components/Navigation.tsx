'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import BetaSignupModal from './BetaSignupModal'
import ComingSoonModal from './ComingSoonModal'
import Logo from './Logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const [comingSoonSection, setComingSoonSection] = useState<'apps' | 'beta' | 'technology'>('apps')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openComingSoonModal = (section: 'apps' | 'beta' | 'technology') => {
    setComingSoonSection(section)
    setIsComingSoonModalOpen(true)
    setIsMenuOpen(false)
  }

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  return (
    <nav className={cn(
      'fixed top-2 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-strong' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
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
              onClick={() => openComingSoonModal('beta')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Beta
            </button>
            <button
              onClick={() => openComingSoonModal('technology')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Technology
            </button>
            <button
              onClick={openBetaSignup}
              className="glass rounded-full px-6 py-2 text-white font-medium hover:bg-lumora-purple/20 transition-all duration-200 btn-glass"
            >
              Join Beta
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass rounded-xl p-2 text-white hover:bg-white/10 transition-all duration-200"
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
          <div className="md:hidden glass-strong mt-2 rounded-2xl p-4 space-y-4 animate-fade-in">
            <button
              onClick={() => openComingSoonModal('apps')}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105"
            >
              <span className="text-lg font-medium">Apps</span>
              <span className="block text-xs text-white/50 mt-1">Coming Soon</span>
            </button>
            <button
              onClick={() => openComingSoonModal('beta')}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105"
            >
              <span className="text-lg font-medium">Beta</span>
              <span className="block text-xs text-white/50 mt-1">Join the waitlist</span>
            </button>
            <button
              onClick={() => openComingSoonModal('technology')}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 hover:scale-105"
            >
              <span className="text-lg font-medium">Technology</span>
              <span className="block text-xs text-white/50 mt-1">Learn more</span>
            </button>
            <div className="pt-2">
              <button
                onClick={openBetaSignup}
                className="w-full glass rounded-full px-6 py-3 text-white font-medium hover:bg-lumora-purple/20 transition-all duration-200 btn-glass"
              >
                Join Beta
              </button>
            </div>
          </div>
        )}

        {/* Beta Signup Modal */}
        <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        {/* Coming Soon Modal */}
        <ComingSoonModal 
          isOpen={isComingSoonModalOpen} 
          onClose={() => setIsComingSoonModalOpen(false)} 
          section={comingSoonSection}
        />
      </div>
    </nav>
  )
}
