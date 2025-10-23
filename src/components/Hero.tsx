'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Compass,
  SunMedium,
  Wand2,
  Zap
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Hero() {

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
        icon: SunMedium,
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
      label: 'Privacy',
      href: '/privacy-policy',
      description: 'How we handle data',
    },
  ]


  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-20 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[68rem] bg-gradient-to-br from-lumora-pink/10 via-lumora-purple/10 to-transparent opacity-40" />
      </div>

      <div className="absolute inset-y-0 right-[-12rem] top-20 -z-10 hidden lg:block">
        <div className="h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-lumora-purple/08 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="relative h-[7.5rem] w-[7.5rem] sm:h-[8.75rem] sm:w-[8.75rem] lg:h-[10rem] lg:w-[10rem] animate-fade-in">
            <Image
              src="/images/lumoralabs_logo.png"
              alt="Lumora Labs Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-gray-800 sm:text-5xl lg:text-[3.5rem]">
            <span className="text-vibrant">Deliberate.</span> <span className="text-vibrant">Refined.</span> <span className="text-vibrant">Unmistakably ours.</span>
          </h1>
          <p className="max-w-4xl text-pretty text-lg text-black sm:text-xl">
            Our purpose is to shape serene digital experiences that help you feel centered, capable, and clear. We achieve this by ensuring every interaction is a delicate blend of simplicity and surprise, making your progress feel truly effortless.
          </p>

        </div>

        <RevealOnScroll>
          <div className="rounded-3xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center gap-3 text-gray-600 sm:justify-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white">
                  <Compass className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium uppercase tracking-[0.3em]">Explore</p>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Buttons and swipes, not menus and clutter. Choose where the light takes you.
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group rounded-2xl border border-gray-200/60 bg-white/40 p-4 transition-all duration-300 hover:border-gray-300/80 hover:bg-white/60 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        <span className="text-vibrant">{link.label}</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-600">{link.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-700" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="rounded-3xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center gap-3 text-gray-600 sm:justify-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white">
                  <Wand2 className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium uppercase tracking-[0.3em]">Design</p>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Purposeful, calming interfaces that feel beautifully simple and move exactly how they should.
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlightItems.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-gray-200/60 bg-white/40 p-4 transition-all duration-300 hover:border-gray-300/80 hover:bg-white/60 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lumora-pink via-lumora-purple to-lumora-blue text-white transition-transform duration-300 group-hover:rotate-12">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-lg font-semibold text-vibrant">{title}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

    </section>
  )
}
