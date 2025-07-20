'use client'

import { useState } from 'react'
import { Zap, Database, Mic2, MapPin, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'GPT-4 AI Integration',
    description: 'Advanced natural language processing optimized for Australian accents and food culture'
  },
  {
    icon: Database,
    title: 'AUSNUT Database',
    description: "Australia's official food composition database for superior local accuracy"
  },
  {
    icon: MapPin,
    title: 'Local Brand Recognition',
    description: 'Recognizes 50+ Australian brands including Woolworths, Coles, McDonald's Australia',
  },
  {
    icon: Mic2,
    title: 'Voice-First Interface',
    description: 'Natural speech recognition with Australian accent optimization'
  },
  {
    icon: TrendingUp,
    title: 'Personalized AI Coaching',
    description: 'Contextual nutrition advice that learns your preferences and goals'
  }
]

export default function CoreTrack() {
  const [betaCount, setBetaCount] = useState(20)

  const openBetaSignup = () => {
    window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')
  }

  return (
    <div className="relative">
      {/* Background gradient specific to CoreTrack */}
      <div className="absolute inset-0 bg-gradient-to-br from-positive/10 via-calm/10 to-focused/10 rounded-3xl"></div>

      <div className="relative z-10 glass-strong rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column - App Preview */}
          <div className="relative order-2 md:order-1">
            <div className="glass-strong rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* Placeholder for app screenshot */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 glass rounded-3xl flex items-center justify-center">
                  <Zap size={48} className="text-positive animate-pulse" />
                </div>
                <p className="text-white/70 text-sm">
                  App screenshot placeholder
                  <br />
                  <span className="text-white/50 text-xs">Upload your Core Track app images here</span>
                </p>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl p-3">
              <p className="text-positive text-sm font-semibold">🥗 Woolworths Chicken</p>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3">
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
                The first AI-powered nutrition app built for Australians
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Combines GPT-4 AI with Australia's official AUSNUT food database to deliver 95% accurate 
                nutrition tracking through natural voice conversations. Finally, an app that understands 
                Australian food culture.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="glass rounded-2xl p-4 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-positive/20 rounded-lg">
                        <IconComponent size={20} className="text-positive" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                        <p className="text-white/70 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Beta CTA */}
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-white/70 mb-2">Core Track Beta Program</p>
              <div className="text-2xl font-bold text-positive mb-2">
                {betaCount}/50 <span className="text-lg text-white/60">spots filled</span>
              </div>
              <button
                onClick={openBetaSignup}
                className="w-full bg-gradient-to-r from-positive to-calm rounded-full py-3 px-6 text-white font-semibold hover:shadow-lg hover:shadow-positive/25 transition-all duration-300"
              >
                Join Core Track Beta
              </button>
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4">Market Opportunity:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-positive mb-1">$2.4B</div>
              <p className="text-white/70 text-sm">Australian Health Market</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-calm mb-1">8.2%</div>
              <p className="text-white/70 text-sm">Annual Growth Rate</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-focused mb-1">2.3M</div>
              <p className="text-white/70 text-sm">Target Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
