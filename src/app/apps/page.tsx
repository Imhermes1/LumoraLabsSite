'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function AppsPage() {
  return (
    <PageShell>
      <header className="mb-16 text-center">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-semibold text-near-black sm:text-5xl md:text-6xl">
          Our Apps
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey sm:text-xl">
          Calm, intelligent experiences crafted to organise your day and nourish your wellbeing.
        </p>
      </header>

      <main>
        <RevealOnScroll>
          <div className="grid gap-8 md:grid-cols-2 h-[600px]">
            {/* Macro Card */}
            <Link href="/macro" className="bevel-card relative overflow-hidden group cursor-pointer">
              <Image
                src="/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"
                alt="Fitness"
                fill
                className="object-cover transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-10 w-full">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/60 mb-3">Nutrition & Fitness</p>
                <h2 className="text-4xl font-bold text-white mb-4">Macro</h2>
                <p className="text-white/80 max-w-sm mb-6">
                  Your personal AI nutritionist. Log meals with photos, voice, or chat. Get instant advice on goals and symptoms.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Explore Macro <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Micro Card */}
            <Link href="/micro" className="bevel-card relative overflow-hidden group cursor-pointer">
              <Image
                src="/images/walling-XLqiL-rz4V8-unsplash.jpg"
                alt="Productivity"
                fill
                className="object-cover object-top transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-10 w-full">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/60 mb-3">Productivity & Focus</p>
                <h2 className="text-4xl font-bold text-white mb-4">Micro</h2>
                <p className="text-white/80 max-w-sm mb-6">
                  Your day, beautifully orchestrated. Calendars, reminders, and habits in one calm, purposeful interface.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Explore Micro <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </RevealOnScroll>
      </main>
    </PageShell>
  )
}
