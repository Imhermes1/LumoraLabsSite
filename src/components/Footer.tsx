'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react'
import BetaSignupModal from './BetaSignupModal'
import ContactModal from './ContactModal'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  const openContactModal = () => {
    console.log('Contact modal opening...')
    setIsContactModalOpen(true)
  }

  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
              Where light meets innovation. Creating elegantly crafted and intuitively powerful apps
              for Apple and Android.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 mb-2">
              <MapPin size={16} />
              <span className="text-sm">Melbourne, Australia</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Mail size={16} />
              <a href="mailto:lumos@lumoralabs.io" className="text-sm hover:text-purple-600 transition-colors">
                lumos@lumoralabs.io
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about-us" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Careers
              </Link>
              <Link href="/press-kit" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Press Kit
              </Link>
              <button
                onClick={openContactModal}
                className="block text-gray-600 hover:text-purple-600 transition-colors text-sm text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <div className="space-y-2">
              <button
                onClick={openBetaSignup}
                className="block text-gray-600 hover:text-purple-600 transition-colors text-sm text-left"
              >
                Beta Program
              </button>
              <Link href="/support" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Cookies
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Github size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} Lumora Labs. Made with ✨ in Australia.
          </p>
        </div>

        {/* Modals */}
        <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </footer>
  )
}
