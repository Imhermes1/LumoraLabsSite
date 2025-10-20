import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Camera, Clock, Download, FileText } from 'lucide-react'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Press Kit - Coming Soon - Lumora Labs',
  description:
    'Press resources, media assets, and company information for journalists and media outlets covering Lumora Labs.',
  keywords:
    'Lumora Labs, press kit, media, press release, assets, logos, screenshots, journalists',
}

export default function PressKitPage() {
  return (
    <PageShell containerClassName="max-w-7xl">
      <header className="mb-16 text-center">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mb-10 flex justify-center">
          <Clock className="text-lumora-pink" size={64} />
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
          Press Kit - <span className="gradient-text">Coming Soon</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          We&apos;re preparing comprehensive press resources for journalists and media outlets. Stay tuned for high-quality assets and company information.
        </p>
      </header>

      <section className="py-16">
        <div className="page-surface rounded-3xl p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                Media resources
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We&apos;re assembling everything journalists and media outlets need to cover Lumora Labs and our upcoming products. The press kit will carry the same calm, intentional design language you see across our brand.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Expect polished logos, product screenshots, company facts, and narrative guidance so you can tell our story accurately and beautifully.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lumora-pink/25 via-transparent to-lumora-purple/25 blur-2xl" />
              <div className="page-panel relative rounded-2xl p-8 text-center">
                <Camera className="mx-auto mb-4 text-lumora-purple" size={48} />
                <h3 className="text-xl font-semibold text-gray-900">
                  High-quality assets
                </h3>
                <p className="mt-3 text-gray-600">
                  Professional logos, screenshots, and hero imagery tailored for different media formats—available the moment the kit launches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-center text-3xl font-semibold text-gray-900 md:text-4xl">
          What&apos;s coming
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="page-card-subtle rounded-2xl p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-pink/25 to-lumora-purple/20">
              <Camera className="text-lumora-pink" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Visual assets</h3>
            <p className="mt-3 text-gray-600">
              Logos, screenshots, and branded imagery in multiple resolutions so your coverage always looks crisp and on-message.
            </p>
          </div>

          <div className="page-card-subtle rounded-2xl p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-purple/25 to-lumora-pink/20">
              <FileText className="text-lumora-purple" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Company info</h3>
            <p className="mt-3 text-gray-600">
              At-a-glance facts, team bios, and our founding principles to help you introduce Lumora Labs with clarity and context.
            </p>
          </div>

          <div className="page-card-subtle rounded-2xl p-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-purple/25 to-lumora-pink/20">
              <Download className="text-lumora-purple" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Press releases</h3>
            <p className="mt-3 text-gray-600">
              Official announcements and background on major milestones, product launches, and partnerships—ready to quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="page-surface rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Need press information now?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            If you&apos;re working on a story today, reach out—we&apos;ll provide the assets or statements you need while the full press kit is finalised.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lumora-pink to-lumora-purple px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(125,59,180,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-20px_rgba(125,59,180,0.55)]"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white/70 px-8 py-4 text-base font-semibold text-gray-700 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)] transition-colors duration-300 hover:border-lumora-purple/40 hover:text-lumora-purple"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
