'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const openBetaSignup = () => {
    window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')
  }

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/6bb54c3c-75a0-40d9-b472-6e30dc2cb268.png"
                  alt="Lumora Labs"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">Lumora Labs</span>
            </div>

            <p className="text-white/70 text-lg mb-6 max-w-md leading-relaxed">
              Where light meets innovation. Creating the world's most beautiful and functional apps 
              exclusively for Apple, with Android coming soon.
            </p>

            <div className="flex items-center space-x-2 text-white/60 mb-2">
              <MapPin size={16} />
              <span className="text-sm">Vermont South, VIC, Australia</span>
            </div>

            <div className="flex items-center space-x-2 text-white/60">
              <Mail size={16} />
              <a href="mailto:luke@lumoralabs.com" className="text-sm hover:text-lumora-pink transition-colors">
                luke@lumoralabs.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Apps</h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-lumora-pink transition-colors text-sm"
              >
                MooDo - Mood Management
              </button>
              <button 
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-lumora-pink transition-colors text-sm"
              >
                Core Track - Nutrition AI
              </button>
              <button 
                onClick={openBetaSignup}
                className="block text-white/70 hover:text-lumora-pink transition-colors text-sm"
              >
                Beta Program
              </button>
              <button 
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-lumora-pink transition-colors text-sm"
              >
                Technology
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-lumora-pink transition-colors text-sm">
                About Us
              </Link>
              <Link href="#" className="block text-white/70 hover:text-lumora-pink transition-colors text-sm">
                Careers
              </Link>
              <Link href="#" className="block text-white/70 hover:text-lumora-pink transition-colors text-sm">
                Press Kit
              </Link>
              <Link href="#" className="block text-white/70 hover:text-lumora-pink transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Beta CTA Section */}
        <div className="glass-strong rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join our exclusive beta program and be among the first to experience beautiful, 
            AI-powered apps that enhance your productivity and wellness.
          </p>
          <button
            onClick={openBetaSignup}
            className="bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full px-8 py-3 text-white font-semibold hover:shadow-lg hover:shadow-lumora-purple/25 transition-all duration-300"
          >
            Join Beta Program
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-4 lg:mb-0">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Support
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-white/60 hover:text-lumora-pink transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-white/60 hover:text-lumora-pink transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-white/60 hover:text-lumora-pink transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/50 text-sm">
            © {currentYear} Lumora Labs. All rights reserved. Made with ✨ in Australia.
          </p>
        </div>
      </div>
    </footer>
  )
}
