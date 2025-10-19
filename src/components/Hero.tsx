'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Compass,
  Sparkles,
  SunMedium,
  Wand2,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { LazyComingSoonModal } from './LazyModals'

export default function Hero() {
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const [comingSoonSection, setComingSoonSection] = useState<'apps' | 'technology'>('apps')

  const highlightItems: Array<{
    title: string
    description: string
    icon: LucideIcon
  }> = [
      {
        title: 'Clarity First',
        description: 'Interfaces stripped back to the essentials so every action feels immediate and intentional.',
        icon: SunMedium,
      },
      {
        title: 'Light-Led Interactions',
        description: 'Moments of delight guide people through the flow without overwhelming the senses.',
        icon: Sparkles,
      },
      {
        title: 'Practical Magic',
        description: 'Purposeful features shaped with craft, so the technology fades and the outcome shines.',
        icon: Wand2,
      },
      {
        title: 'Future Fluent',
        description: 'A design language ready for new platforms while feeling familiar on day one.',
        icon: Compass,
      },
    ]

  const quickLinks = [
    {
      label: 'About Lumora',
      href: '/about-us',
      description: 'Our purpose and principles',
    },
    {
      label: 'Apps',
      href: '/apps',
      description: 'Explore Micro & Macro',
    },
    {
      label: 'Press Kit',
      href: '/press-kit',
      description: 'Brand assets & story',
    },
    {
      label: 'Privacy',
      href: '/privacy-policy',
      description: 'How we handle data',
    },
  ]

  const openComingSoon = (section: 'apps' | 'technology') => {
    setComingSoonSection(section)
    setIsComingSoonModalOpen(true)
  }

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-20 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[68rem] bg-gradient-to-br from-lumora-pink/25 via-lumora-purple/25 to-transparent opacity-70" />
      </div>

      <div className="absolute inset-y-0 right-[-12rem] top-20 -z-10 hidden lg:block">
        <div className="h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-lumora-purple/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <div className="relative h-[7.5rem] w-[7.5rem] sm:h-[8.75rem] sm:w-[8.75rem] lg:h-[10rem] lg:w-[10rem]">
            <Image
              src="/images/lumoralabs_logo.png"
              alt="Lumora Labs Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Clean, <span className="text-vibrant">vibrant</span> software crafted with <span className="text-vibrant">light</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg text-white/80 sm:text-xl">
            Our purpose is to shape serene digital experiences that help you feel <span className="text-vibrant">centered</span>, <span className="text-vibrant">capable</span>, and <span className="text-vibrant">clear</span>.
            We achieve this by ensuring every interaction is a delicate blend of <span className="text-vibrant">simplicity</span> and <span className="text-vibrant">surprise</span>, making your progress feel truly <span className="text-vibrant">effortless</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openComingSoon('technology')}
              className="inline-flex items-center justify-center rounded-full border border-black/60 bg-slate-950/70 px-6 py-3 text-base font-medium text-white transition duration-200 hover:border-black hover:bg-slate-900/80"
            >
              <span className="text-vibrant">Lumora roadmap</span>
              <Sparkles className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-[rgba(24,28,36,0.08)] p-8 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center gap-3 text-white/70 sm:justify-start">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white">
                <Compass className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium uppercase tracking-[0.3em]">Explore</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Buttons and swipes, not menus and clutter. Choose where the light takes you.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group rounded-2xl border border-black/12 bg-[rgba(24,28,36,0.1)] p-5 transition duration-200 hover:border-black/25 hover:bg-[rgba(24,28,36,0.18)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      <span className="text-vibrant">{link.label}</span>
                    </p>
                    <p className="mt-2 text-sm text-white/70">{link.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-[rgba(24,28,36,0.08)] p-8 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center gap-3 text-white/70 sm:justify-start">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium uppercase tracking-[0.3em]">Design</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Purposeful, calming interfaces that feel beautifully simple and move exactly how they should.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {highlightItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl border border-black/12 bg-[rgba(24,28,36,0.1)] p-5 transition duration-200 hover:border-black/25 hover:bg-[rgba(24,28,36,0.18)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-base font-semibold text-vibrant">{title}</span>
                </div>
                <p className="mt-3 text-sm text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isComingSoonModalOpen && (
        <LazyComingSoonModal
          isOpen={isComingSoonModalOpen}
          onClose={() => setIsComingSoonModalOpen(false)}
          section={comingSoonSection}
        />
      )}
    </section>
  )
}
