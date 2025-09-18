'use client'

import { useState, useEffect } from 'react'
import { X, Wand2, Crown, Users, Zap, Gift, Star } from 'lucide-react'

interface AlphaRevealModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenBetaSignup: () => void
  onOpenRegularBetaSignup: () => void
  prefectsStatus?: {
    isFull: boolean
    currentCount: number
    maxSpots: number
    adminOverride?: boolean
  } | null
}

export default function AlphaRevealModal({ isOpen, onClose, onOpenBetaSignup, onOpenRegularBetaSignup, prefectsStatus }: AlphaRevealModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl">
        <div className="absolute inset-x-12 top-0 -translate-y-1/2 h-48 rounded-full bg-gradient-to-r from-lumora-pink/25 via-lumora-purple/25 to-transparent blur-3xl" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(18,21,30,0.92)] shadow-[0_32px_90px_-40px_rgba(10,13,24,0.85)]">
          <div className="absolute inset-x-8 top-0 h-48 bg-gradient-to-br from-lumora-purple/20 via-transparent to-transparent blur-3xl" />

          <div className="relative flex max-h-[90vh] flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 border-b border-white/5 px-8 py-7">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  <Wand2 className="h-3.5 w-3.5 text-vibrant" />
                  Prefects Program
                </span>
                <h2 className="text-3xl font-bold text-white sm:text-[2.5rem]">
                  Revelio opens the <span className="text-vibrant">Prefects circle</span>
                </h2>
                <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                  The charm uncovers a private cohort of visionaries who help shape Lumora Labs before the rest of the world catches on.
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
                <div className="space-y-7">
                  <div className="rounded-3xl border border-white/10 bg-[rgba(24,28,36,0.65)] p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.65)]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/60 bg-yellow-500/10">
                          <Crown className="h-6 w-6 text-yellow-400" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">The Prefects Oath</h3>
                          <p className="text-sm text-white/60">Only twenty-five spots, each reserved for someone who moves in step with the light.</p>
                        </div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
                        {prefectsStatus ? (
                          <span>
                            {prefectsStatus.currentCount}/{prefectsStatus.maxSpots} claimed
                          </span>
                        ) : (
                          'Limited availability'
                        )}
                      </div>
                    </div>
                    <p className="mt-5 text-sm text-white/80">
                      <span className="font-semibold text-vibrant">
                        “Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.”
                      </span>
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[{
                      title: 'Early Access',
                      description: 'Be amongst the first to experience and influence every luminous release.',
                      icon: (
                        <span className="text-emerald-300">
                          <Zap className="h-5 w-5" />
                        </span>
                      ),
                      accent: 'from-emerald-400/25 to-lumora-blue/20'
                    }, {
                      title: 'Meaningful Impact',
                      description: "Every insight adjusts the product roadmap, ensuring Lumora stays human-led.",
                      icon: (
                        <span className="text-sky-300">
                          <Users className="h-5 w-5" />
                        </span>
                      ),
                      accent: 'from-sky-400/25 to-lumora-purple/20'
                    }, {
                      title: 'Prefects Privileges',
                      description: 'Special drops, gratitude perks, and early recognition as the circle grows.',
                      icon: (
                        <span className="text-pink-300">
                          <Gift className="h-5 w-5" />
                        </span>
                      ),
                      accent: 'from-lumora-pink/25 to-lumora-purple/20'
                    }, {
                      title: 'Legacy of Light',
                      description: 'Your name, etched as one of the first who believed in luminous software.',
                      icon: (
                        <span className="text-amber-300">
                          <Star className="h-5 w-5" />
                        </span>
                      ),
                      accent: 'from-amber-400/25 to-orange-400/20'
                    }].map((item) => (
                      <div
                        key={item.title}
                        className="group rounded-2xl border border-white/10 bg-[rgba(24,28,36,0.55)] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-[rgba(30,36,45,0.7)]"
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${item.accent}`}>
                            {item.icon}
                          </span>
                          <div>
                            <h4 className="text-base font-semibold text-white">{item.title}</h4>
                            <p className="mt-1 text-sm text-white/65">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-[rgba(24,28,36,0.65)] p-6 shadow-[0_20px_55px_-35px_rgba(15,23,42,0.65)]">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        {prefectsStatus?.isFull
                          ? 'All Prefect seats are currently filled'
                          : 'Reserve your prefect seat before the circle closes'}
                      </h3>
                      <p className="text-sm text-white/65">
                        {prefectsStatus?.isFull
                          ? 'Join the broader beta to keep the luminous insights flowing. We will reach out when a seat reopens.'
                          : 'Once all twenty-five are spoken for, the spell seals. Claim your place while the light is warm.'}
                      </p>
                      {prefectsStatus?.adminOverride && (
                        <div className="rounded-2xl border border-yellow-400/40 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-200">
                          Admin override active
                        </div>
                      )}
                    </div>
                    <div className="mt-6 space-y-3">
                      {prefectsStatus?.isFull ? (
                        <>
                          <button
                            disabled
                            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/50"
                          >
                            <Wand2 className="h-4 w-4" />
                            Prefects Program Full
                          </button>
                          <button
                            onClick={() => {
                              onClose()
                              onOpenRegularBetaSignup()
                            }}
                            className="flex w-full items-center justify-center gap-2 rounded-full border border-lumora-purple/60 bg-gradient-to-r from-lumora-purple/30 to-lumora-pink/20 px-6 py-3 text-base font-semibold text-white transition hover:shadow-[0_0_25px_rgba(179,64,217,0.45)]"
                          >
                            <span className="text-lg">✨</span>
                            Join the beta instead
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            onClose()
                            onOpenBetaSignup()
                          }}
                          className="flex w-full items-center justify-center gap-2 rounded-full border border-lumora-purple/60 bg-gradient-to-r from-lumora-purple/40 via-lumora-pink/30 to-lumora-blue/30 px-6 py-3 text-base font-semibold text-white transition hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                        >
                          <Wand2 className="h-4 w-4" />
                          Join the Prefects Program
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
