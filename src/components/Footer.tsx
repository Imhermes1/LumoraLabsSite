'use client'

import Link from 'next/link'
import { Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pb-12 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-gray-100/20 via-transparent to-transparent" />

      <div className="max-w-6xl px-6 sm:px-8 lg:px-10 mx-auto">

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="max-w-md text-sm leading-relaxed text-gray-600">
              Lumora Labs creates quietly confident experiences that bring light to everyday wellbeing. We are based in Melbourne and build for people everywhere.
            </p>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <MapPin size={16} className="text-gray-500" />
              Melbourne, Australia
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Mail size={16} className="text-gray-500" />
              <a
                href="mailto:lumos@lumoralabs.io"
                className="transition hover:text-vibrant"
              >
                lumos@lumoralabs.io
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-600">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/about-us" className="transition hover:text-vibrant">
                <span className="text-vibrant">About us</span>
              </Link>
              <Link href="/press-kit" className="transition hover:text-vibrant">
                <span className="text-vibrant">Press kit</span>
              </Link>
              <Link href="mailto:lumos@lumoralabs.io" className="transition hover:text-vibrant">
                <span className="text-vibrant">Contact</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-600">Product</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
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

        <div className="mt-14 flex flex-col gap-6 border-t border-gray-200/50 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
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
          <div className="flex gap-4 text-gray-500">
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

        <div className="mt-6 text-center text-xs text-gray-400">
          © <span suppressHydrationWarning>{currentYear}</span> Lumora Labs. Made with Love in Australia.
        </div>

      </div>
    </footer>
  )
}
