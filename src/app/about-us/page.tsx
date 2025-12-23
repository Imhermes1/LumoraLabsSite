'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Heart, Zap, Users, Star, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function AboutUsPage() {
  return (
    <PageShell containerClassName="max-w-7xl">
      <header className="mb-12">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="text-center">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-grey"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The Studio
          </motion.p>
          <h1 className="text-4xl font-semibold text-near-black sm:text-5xl md:text-6xl">
            About Lumora Labs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey sm:text-xl">
            Where light meets innovation. We create the world's most elegantly crafted and intuitively powerful apps for the Apple ecosystem.
          </p>
        </div>
      </header>

      <RevealOnScroll>
        <section className="py-8">
          <div className="bevel-card relative overflow-hidden p-8 md:p-12">
            {/* Soft Ambient Tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_60%)]" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-near-black md:text-4xl">
                  Our Mission
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-lg leading-relaxed text-grey">
                    At Lumora Labs, technology exists to enhance your life, not complicate it. Every interface, flow, and feature is crafted so you feel calm, capable, and centered from the very first interaction.
                  </p>
                  <p className="text-lg leading-relaxed text-grey">
                    Based in Melbourne, Australia, Lumora Labs is run as a tightly focused studio. I design, develop, and refine each product with a clear intention: bring purposeful clarity to your everyday wellbeing.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 bg-blue-400/10 blur-[60px] rounded-full" />
                  <Image
                    src="/images/lumora_ki.svg"
                    alt="Lumora Ki Spirit"
                    fill
                    className="object-contain opacity-80 mix-blend-multiply transition-transform duration-1000 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <div className="grid gap-8 py-12">
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 h-[500px]">
            <div className="bevel-card relative overflow-hidden group">
              <Image
                src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
                alt="Nutrition"
                fill
                className="object-cover transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-2">Intelligent Nutrition</h3>
                <p className="text-white/80 max-w-xs">Data-driven fueling for the body, curated by the mind.</p>
              </div>
            </div>
            <div className="bevel-card relative overflow-hidden group">
              <Image
                src="/images/macro_workout.jpg"
                alt="Fitness"
                fill
                className="object-cover transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-2">Elegance in Motion</h3>
                <p className="text-white/80 max-w-xs">Performance tracked with precision, moved with grace.</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <section className="py-20">
          <div className="bevel-card relative overflow-hidden p-12 md:p-20 flex flex-col items-center">
            {/* Immersive Values Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/sushil-ghimire-5UbIqV58CW8-unsplash.jpg"
                alt="Fitness and Focus"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-near-black/60 via-near-black/40 to-near-black/60" />
            </div>

            <div className="relative z-10 text-center mb-16">
              <motion.p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Our Core Principles
              </motion.p>
              <h2 className="text-4xl font-semibold text-white md:text-5xl">Philosophy of Focus</h2>
            </div>

            <div className="relative z-10 grid gap-8 md:grid-cols-3 w-full">
              <div className="bevel-card p-10 text-center bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl group transition-all duration-500 hover:bg-white/15">
                <h3 className="text-2xl font-semibold text-white">Innovation</h3>
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  Exploring the edge of AI and motion to create tools that feel like magic.
                </p>
              </div>

              <div className="bevel-card p-10 text-center bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl group transition-all duration-500 hover:bg-white/15">
                <h3 className="text-2xl font-semibold text-white">Human Empathy</h3>
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  We build for the person as they are, not just the data they generate.
                </p>
              </div>

              <div className="bevel-card p-10 text-center bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl group transition-all duration-500 hover:bg-white/15">
                <h3 className="text-2xl font-semibold text-white">The Purest Craft</h3>
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  Obsessively refining typography until everything is silent confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-12">
          <div className="bevel-card relative overflow-hidden flex items-center min-h-[550px]">
            {/* Background Image - The 'Body' / Health Aspect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg"
                alt="Health & Spirit"
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 w-full grid items-center gap-12 lg:grid-cols-2">
              <div className="hidden lg:block" /> {/* Space for background focus */}

              <div className="p-8 md:p-16">
                <h2 className="text-4xl font-semibold text-near-black md:text-5xl leading-tight">
                  Security as a Sanctuary
                </h2>
                <div className="mt-8 space-y-6">
                  <p className="text-xl leading-relaxed text-grey">
                    We treat your data like our own—with the utmost reverence. Secured by design, encrypted by default, and minimized to only what is essential.
                  </p>
                  <p className="text-xl leading-relaxed text-grey">
                    Privacy isn't a feature; it's the foundation of a mindful life. We build sanctuaries for your data so you can focus on building a better version of yourself.
                  </p>
                </div>

                <div className="mt-12 inline-flex items-center gap-4 p-6 glass rounded-2xl border border-white/40 shadow-xl bg-white/20 backdrop-blur-md">
                  <ShieldCheck className="text-near-black" size={40} />
                  <div>
                    <h3 className="text-xl font-bold text-near-black leading-none">Privacy-First</h3>
                    <p className="mt-2 text-sm text-grey">On-device processing. No data selling. Total control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-8">
          <div className="bevel-card p-12 text-center bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)]">
            <h2 className="text-3xl font-semibold text-near-black md:text-4xl">
              Stay in the light
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-grey">
              Want to be notified when new apps or betas are released? Join our community for updates on the Lumora ecosystem.
            </p>

            <SubscribeForm />
          </div>
        </section>
      </RevealOnScroll>
    </PageShell>
  )
}

function SubscribeForm() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-10 inline-flex flex-col items-center gap-2"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <ShieldCheck size={24} />
        </div>
        <p className="text-near-black font-semibold">You're on the list.</p>
        <p className="text-sm text-grey">Watch your inbox for a touch of light.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full flex-1 rounded-full border border-grey-subtle bg-white px-6 py-4 text-near-black shadow-sm outline-none transition-all focus:border-near-black focus:ring-1 focus:ring-near-black"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bevel-button w-full bg-near-black text-white hover:bg-black py-4 px-8 text-base shadow-xl sm:w-auto disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
