'use client'

import { useState } from 'react'
import { Menu, X, Mail, Users, Sparkles } from 'lucide-react'
import { LazyBetaSignupModal, LazyComingSoonModal } from './LazyModals'

export default function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const [comingSoonSection, setComingSoonSection] = useState<'apps' | 'beta' | 'technology'>('apps')

  const openComingSoonModal = (section: 'apps' | 'beta' | 'technology') => {
    setComingSoonSection(section)
    setIsComingSoonModalOpen(true)
    setIsMenuOpen(false)
  }

  const openBetaSignup = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Main FAB Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fab fab-menu ${isMenuOpen ? 'fab-primary' : ''}`}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Beta Signup FAB */}
      <button
        onClick={openBetaSignup}
        className={`fab fab-beta fab-primary transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <Sparkles size={20} />
      </button>

      {/* Contact FAB */}
      <button
        onClick={() => openComingSoonModal('apps')}
        className={`fab fab-contact transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <Mail size={20} />
      </button>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-6 right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => openComingSoonModal('apps')}
                className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                Apps
              </button>
              <button
                onClick={() => openComingSoonModal('technology')}
                className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                Technology
              </button>
              <hr className="border-gray-200" />
              <button
                onClick={openBetaSignup}
                className="block w-full text-left font-medium text-purple-600 py-2 px-3 rounded-lg hover:bg-purple-50"
              >
                Join Beta
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {isModalOpen && (
        <LazyBetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      {isComingSoonModalOpen && (
        <LazyComingSoonModal
          isOpen={isComingSoonModalOpen}
          onClose={() => setIsComingSoonModalOpen(false)}
          section={comingSoonSection}
        />
      )}
    </>
  )
}