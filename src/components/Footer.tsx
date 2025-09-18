'use client'

import { useState } from 'react'
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
    setIsContactModalOpen(true)
  }

  return (
    <footer className="relative mt-24 border-t border-black/30 pb-12 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

      <div className="max-w-6xl px-6 sm:px-8 lg:px-10 mx-auto">
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-black/60 bg-slate-950/80 p-8 backdrop-blur-xl shadow-[0_26px_64px_-30px_rgba(15,23,42,0.82)] md:flex md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">Stay close to the light</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Receive a curated glimpse into the products we are shaping at Lumora Labs.
            </h2>
            <p className="mt-3 text-white/65">
              Product updates, design stories, and the occasional piece of practical magic—never spam.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:flex-shrink-0 md:justify-end">
            <button
              onClick={openBetaSignup}
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-900/80 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_-18px_rgba(148,163,184,0.6)] transition hover:-translate-y-0.5 hover:border-slate-900 hover:shadow-[0_20px_45px_-16px_rgba(148,163,184,0.7)]"
            >
              <span className="text-vibrant">Join the beta</span>
            </button>
            <button
              onClick={openContactModal}
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-900 hover:bg-white/10"
            >
              <span className="text-vibrant">Talk with us</span>
            </button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              Lumora Labs creates quietly confident experiences that bring light to everyday wellbeing. We are based in Melbourne and build for people everywhere.
            </p>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <MapPin size={16} className="text-white/50" />
              Melbourne, Australia
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <Mail size={16} className="text-white/50" />
              <a
                href="mailto:lumos@lumoralabs.io"
                className="transition hover:text-vibrant"
              >
                lumos@lumoralabs.io
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link href="/about-us" className="transition hover:text-vibrant">
                <span className="text-vibrant">About us</span>
              </Link>
              <Link href="/press-kit" className="transition hover:text-vibrant">
                <span className="text-vibrant">Press kit</span>
              </Link>
              <button
                onClick={openContactModal}
                className="text-left transition hover:text-vibrant"
              >
                <span className="text-vibrant">Contact</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Product</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <button
                onClick={openBetaSignup}
                className="text-left transition hover:text-vibrant"
              >
                <span className="text-vibrant">Beta program</span>
              </button>
              <Link href="/apps" className="transition hover:text-vibrant">
                <span className="text-vibrant">Apps</span>
              </Link>
              <Link href="/support" className="transition hover:text-vibrant">
                <span className="text-vibrant">Support</span>
              </Link>
              <Link href="/terms-of-use" className="transition hover:text-vibrant">
                <span className="text-vibrant">Terms of use</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-black/40 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-xs text-white/60">
            <Link href="/privacy-policy" className="transition hover:text-vibrant">
              <span className="text-vibrant">Privacy</span>
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-vibrant">
              <span className="text-vibrant">Terms</span>
            </Link>
            <Link href="/cookies" className="transition hover:text-vibrant">
              <span className="text-vibrant">Cookies</span>
            </Link>
          </div>
          <div className="flex gap-4 text-white/70">
            <Link href="#" className="transition hover:text-vibrant">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="transition hover:text-vibrant">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="transition hover:text-vibrant">
              <Github size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-white/55">
          © {currentYear} Lumora Labs. Made with Love in Australia.
        </div>

        <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </footer>
  )
}
