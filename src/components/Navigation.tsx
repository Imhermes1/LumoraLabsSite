'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import BetaSignupModal from './BetaSignupModal'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-strong' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/6bb54c3c-75a0-40d9-b472-6e30dc2cb268.png"
                alt="Lumora Labs"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">
              Lumora Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('apps')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection('beta')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Beta
            </button>
            <button
              onClick={() => scrollToSection('technology')}
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
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-strong mt-2 rounded-2xl p-4 space-y-4">
            <button
              onClick={() => scrollToSection('apps')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection('beta')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
            >
              Beta
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
            >
              Technology
            </button>
            <button
              onClick={openBetaSignup}
              className="w-full glass rounded-full px-6 py-3 text-white font-medium hover:bg-lumora-purple/20 transition-all duration-200"
            >
              Join Beta
            </button>
          </div>
        )}

        {/* Beta Signup Modal */}
        <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </nav>
  )
}
