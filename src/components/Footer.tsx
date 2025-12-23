'use client'

import Link from 'next/link'
import { Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pb-16 pt-24 bg-[#fafafa]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white via-transparent to-transparent" />

      <div className="max-w-6xl px-6 sm:px-8 lg:px-10 mx-auto">
        <div className="grid gap-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <Logo size="md" />
            <p className="max-w-md text-base leading-relaxed text-grey">
              Lumora Labs creates quietly confident experiences that bring light to everyday wellbeing. Based in Melbourne, Australia.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-grey text-sm">
                <MapPin size={16} className="text-grey-light" />
                Melbourne, Australia
              </div>
              <div className="flex items-center gap-3 text-grey text-sm group">
                <Mail size={16} className="text-grey-light group-hover:text-near-black transition-colors" />
                <a
                  href="mailto:lumos@lumoralabs.io"
                  className="transition-colors hover:text-near-black"
                >
                  lumos@lumoralabs.io
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-grey-light">Studio</h3>
            <div className="flex flex-col gap-2.5 text-sm text-grey">
              <Link href="/about-us" className="transition-colors hover:text-near-black">About us</Link>
              <Link href="/press-kit" className="transition-colors hover:text-near-black">Press kit</Link>
              <Link href="mailto:lumos@lumoralabs.io" className="transition-colors hover:text-near-black">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-grey-light">Apps</h3>
            <div className="flex flex-col gap-2.5 text-sm text-grey">
              <Link href="/apps" className="transition-colors hover:text-near-black">Explore Apps</Link>
              <Link href="/support" className="transition-colors hover:text-near-black">Support</Link>
              <Link href="/lumora-ki" className="transition-colors hover:text-near-black">Lumora Ki</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-grey-light">Legal</h3>
            <div className="flex flex-col gap-2.5 text-sm text-grey">
              <Link href="/privacy-policy" className="transition-colors hover:text-near-black">Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-near-black">Terms of Service</Link>
              <Link href="/cookies" className="transition-colors hover:text-near-black">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-grey-subtle/30 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 text-grey-light">
            <Link href="#" className="transition-colors hover:text-near-black">
              <Twitter size={20} />
            </Link>
            <Link href="https://github.com/lumoralabs" className="transition-colors hover:text-near-black">
              <Github size={20} />
            </Link>
            <Link href="#" className="transition-colors hover:text-near-black">
              <Linkedin size={20} />
            </Link>
          </div>

          <div className="text-sm text-grey-light">
            © <span suppressHydrationWarning>{currentYear}</span> Lumora Labs. Made with Love in Australia.
          </div>
        </div>
      </div>
    </footer>
  )
}
