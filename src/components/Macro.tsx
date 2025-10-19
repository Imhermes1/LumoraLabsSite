'use client'

import { useState } from 'react'
import { ChefHat, Database, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: ChefHat,
    title: 'AI Meal Coach',
    description: 'Personalised meal plans and quick suggestions that fit your goals and schedule'
  },
  {
    icon: Database,
    title: 'AUSNUT Database',
    description: "Australia's official food composition database for precision local accuracy"
  },
  {
    icon: ShoppingBag,
    title: 'Smart Grocery Planning',
    description: 'Turn meal ideas into practical grocery lists with local brand recommendations'
  },
  {
    icon: Sparkles,
    title: 'Helpful Nudges',
    description: 'Guidance that adapts as you log meals, helping you make better choices over time'
  },
  {
    icon: TrendingUp,
    title: 'Progress You Can Feel',
    description: 'Track macros and see clear insights so you stay motivated without obsessing over numbers'
  }
]

export default function CoreTrack() {

  return (
    <div className="relative">
      {/* Background gradient specific to CoreTrack */}
      <div className="absolute inset-0 bg-gradient-to-br from-positive/10 via-calm/10 to-focused/10 rounded-3xl"></div>

      <div className="relative z-10 rounded-3xl bg-[rgba(24,28,36,0.85)] p-8 md:p-12 border border-positive/30 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.55)] backdrop-blur">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column - App Preview */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl bg-[rgba(24,28,36,0.75)] p-8 h-96 flex items-center justify-center border border-deep-purple/40 shadow-[0_18px_45px_-30px_rgba(56,64,74,0.65)]">
              {/* Placeholder for app screenshot */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-3xl flex items-center justify-center border border-positive/40 bg-[rgba(30,36,45,0.9)]">
                  <ChefHat size={48} className="text-positive animate-pulse" />
                </div>
                <p className="text-white/70 text-sm">
                  App screenshot placeholder
                  <br />
                  <span className="text-white/50 text-xs">Upload your Macro app images here</span>
                </p>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 rounded-2xl bg-[rgba(26,32,40,0.9)] p-3 border border-positive/40 shadow-[0_12px_24px_-18px_rgba(56,176,106,0.5)]">
              <p className="text-positive text-sm font-semibold">🥗 Woolworths Chicken</p>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[rgba(26,32,40,0.9)] p-3 border border-calm/40 shadow-[0_12px_24px_-18px_rgba(56,144,240,0.5)]">
              <p className="text-calm text-sm font-semibold">🎯 95% Accuracy</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Core <span className="gradient-text bg-gradient-to-r from-positive to-focused bg-clip-text text-transparent">Track</span>
              </h2>
              <p className="text-xl md:text-2xl text-positive font-semibold mb-4">
                The intelligent way to eat well, every day
              </p>
              <p className="text-white/85 text-lg leading-relaxed">
                Macro’s AI coach helps you decide what to eat next, prepare smarter meals, and stay on track.
                Log food in seconds, receive balanced meal ideas, and let personalised guidance do the heavy lifting.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-[rgba(26,30,38,0.8)] p-4 transition-all duration-300 hover:border-white/20 hover:bg-[rgba(30,36,45,0.85)]">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg border border-positive/40 bg-[rgba(20,25,32,0.9)]">
                        <IconComponent size={20} className="text-positive drop-shadow" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                        <p className="text-white/75 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4">Australian Market:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-positive/35 bg-[rgba(26,32,40,0.85)] p-4 text-center shadow-[0_16px_40px_-30px_rgba(56,176,106,0.55)]">
              <div className="text-2xl font-bold text-positive mb-1">$2.4B</div>
              <p className="text-white/70 text-sm">Australian Health Market</p>
            </div>
            <div className="rounded-2xl border border-calm/35 bg-[rgba(26,32,40,0.85)] p-4 text-center shadow-[0_16px_40px_-30px_rgba(56,144,240,0.55)]">
              <div className="text-2xl font-bold text-calm mb-1">8.2%</div>
              <p className="text-white/70 text-sm">Annual Growth Rate</p>
            </div>
            <div className="rounded-2xl border border-focused/35 bg-[rgba(26,32,40,0.85)] p-4 text-center shadow-[0_16px_40px_-30px_rgba(102,125,235,0.55)]">
              <div className="text-2xl font-bold text-focused mb-1">2.3M</div>
              <p className="text-white/70 text-sm">Target Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
