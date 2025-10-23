import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Heart, Zap, Users, Star, ShieldCheck } from 'lucide-react'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'About Us - Lumora Labs',
  description: 'Learn about Lumora Labs, where light meets innovation. We create the world\'s most elegantly crafted and intuitively powerful apps for Apple and Android.',
  keywords: 'Lumora Labs, about us, mobile apps, iOS, Android, innovation, Melbourne, Australia',
}

export default function AboutUsPage() {
  return (
    <PageShell containerClassName="max-w-7xl">
      <header className="mb-8">
        <Link
          href="/"
          className="mb-4 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="gradient-text">Lumora Labs</span>
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Where light meets innovation. We create the world's most elegantly crafted and intuitively powerful apps for Apple and Android.
          </p>
        </div>
      </header>

      <RevealOnScroll>
        <section className="py-8">
          <div className="page-surface rounded-3xl p-4 md:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  At Lumora Labs, technology exists to enhance your life, not complicate it. Every interface, flow, and feature is crafted so you feel calm, capable, and centered from the very first interaction.
                </p>
                <p className="mt-2 text-lg leading-relaxed text-gray-600">
                  Based in Melbourne, Australia, Lumora Labs is run as a tightly focused studio. I design, develop, and refine each product with a clear intention: bring purposeful clarity to your everyday wellbeing.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lumora-pink/25 via-transparent to-lumora-purple/25 blur-2xl" />
                <div className="page-panel relative rounded-2xl p-4 text-center">
                  <Heart className="mx-auto mb-4 text-lumora-pink" size={48} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Crafted with care
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Every detail matters. From the micro-animations you feel to the copy you read, Lumora Labs products are shaped to support your flow and lighten your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-8">
          <h2 className="text-center text-3xl font-semibold text-gray-900 md:text-4xl">
            Our Values
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="page-card-subtle rounded-3xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-pink/25 to-lumora-purple/20">
                <Zap className="text-lumora-pink" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We explore new horizons with intention, blending emerging technology with timeless design principles.
              </p>
            </div>

            <div className="page-card-subtle rounded-3xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-purple/25 to-lumora-pink/20">
                <Users className="text-lumora-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Human empathy</h3>
              <p className="mt-2 text-gray-600">
                Every decision starts with people. We design experiences that are intuitive, accessible, and genuinely supportive.
              </p>
            </div>

            <div className="page-card-subtle rounded-3xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-lumora-purple/25 to-lumora-pink/20">
                <Star className="text-lumora-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We obsess over the subtleties—from motion and typography to architecture—so everything feels effortless and quietly confident.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-8">
          <div className="page-surface rounded-3xl p-4 md:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                  Security &amp; Privacy
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  We treat your data with the utmost care. Data is minimised by design, stored securely, and encrypted at rest and in transit. We never sell your data — it belongs to you. Where possible, processing happens on-device to preserve privacy and reduce exposure.
                </p>
                <p className="mt-2 text-lg leading-relaxed text-gray-600">
                  For users who connect health services (e.g. Apple Health), we follow platform guidelines and only request the permissions necessary to deliver features you opt into.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lumora-purple/25 via-transparent to-lumora-pink/25 blur-2xl" />
                <div className="page-panel relative rounded-2xl p-4 text-center">
                  <ShieldCheck className="mx-auto mb-3 text-lumora-purple" size={40} />
                  <h3 className="text-xl font-semibold text-gray-900">Privacy-first by design</h3>
                  <p className="mt-2 text-gray-600">Secure defaults, clear consent flows, and strong encryption are core to how we build products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-8">
          <div className="page-surface rounded-3xl p-4 md:p-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Join the revolution
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Want to be notified when new apps or betas are released? Sign up to get email updates about releases, betas, and important product announcements.
            </p>
            <a
              href="mailto:lumos@lumoralabs.io?subject=Subscribe%20to%20Lumora%20updates"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lumora-pink to-lumora-purple px-5 py-2 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(125,59,180,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-20px_rgba(125,59,180,0.55)]"
            >
              Get updates
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </PageShell>
  )
}
