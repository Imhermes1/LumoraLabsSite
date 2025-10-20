import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, ChefHat } from 'lucide-react'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Apps - Lumora Labs',
  description:
    'Discover Micro and Macro, the calm and intelligent apps crafted by Lumora Labs to organise your day and nourish your wellbeing.',
}

export default function AppsPage() {
  return (
    <PageShell>
      <header className="mb-20 text-center">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
          Our <span className="gradient-text">Apps</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Explore how Micro and Macro keep your day organised and your wellbeing on track—calm, intelligent experiences from Lumora Labs.
        </p>
      </header>

      <main className="flex flex-col gap-16">
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="page-chip mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
                <ChefHat size={16} /> Macro
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Smarter nutrition, without the overwhelm
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                Your personal nutritionist in your pocket. Chat with AI for advice on meals, symptoms, and goals. Log nutrition via photo analysis, barcode scanning, voice, or chat.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="page-card-subtle rounded-2xl p-5 text-left">
                  <h3 className="text-sm font-semibold text-gray-900">AI Nutrition Coach</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Get instant personalised advice 24/7. Discuss meals, symptoms, and fitness goals naturally with your AI nutritionist.
                  </p>
                </div>
                <div className="page-card-subtle rounded-2xl p-5 text-left">
                  <h3 className="text-sm font-semibold text-gray-900">Effortless Meal Logging</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Photo analysis, barcode scanning, voice logging, or natural chat. Multiple ways to track what matters.
                  </p>
                </div>
              </div>

              <Link
                href="/macro"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lumora-pink hover:text-lumora-purple transition-colors"
              >
                Explore Macro →
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lumora-pink/20 via-transparent to-lumora-purple/20 blur-3xl" />
              <div className="page-panel relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-4">
                <Image
                  src="/images/macro1.png"
                  alt="Macro app - AI nutrition tracking"
                  width={1200}
                  height={600}
                  className="h-auto w-full rounded-2xl object-cover shadow-[0_18px_40px_-22px_rgba(125,59,180,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="page-surface rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="page-chip mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
                <Calendar size={16} /> Micro
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Your day, beautifully orchestrated
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                Micro blends <span className="text-vibrant">calendars</span>, <span className="text-vibrant">reminders</span>, and
                <span className="text-vibrant"> habit loops</span> into a single purposeful interface. It layers gentle prompts and calm rhythm over your week so planning, prioritising, and reflecting feel effortless.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="page-card-subtle rounded-2xl p-5 text-left">
                  <h3 className="text-sm font-semibold text-gray-900">Seamless integrations</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Syncs with Apple Calendar and Reminders today, with Google and Android integrations on the horizon.
                  </p>
                </div>
                <div className="page-card-subtle rounded-2xl p-5 text-left">
                  <h3 className="text-sm font-semibold text-gray-900">Habits that stick</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Add intentional prompts to your schedule so routines become steady progress rather than pressure.
                  </p>
                </div>
              </div>

              <Link
                href="/micro"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lumora-purple hover:text-lumora-pink transition-colors"
              >
                Explore Micro →
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lumora-purple/20 via-transparent to-lumora-pink/20 blur-3xl" />
              <div className="page-panel relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-4">
                <Image
                  src="/images/microprev.PNG"
                  alt="Micro app - Daily planner and calendar"
                  width={1200}
                  height={600}
                  className="h-auto w-full rounded-2xl object-cover shadow-[0_18px_40px_-22px_rgba(80,110,200,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
