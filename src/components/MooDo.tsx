'use client'

import { useState } from 'react'
import { Brain, Mic, Cloud, TrendingUp, Heart } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Mood-Driven Task Prioritization',
    description: 'Tasks automatically filtered and sorted based on your current emotional state'
  },
  {
    icon: Brain,
    title: 'Emotional Intelligence',
    description: 'Daily mood check-ins with pattern recognition and adaptive UI theming'
  },
  {
    icon: Mic,
    title: 'Voice Integration',
    description: 'Natural voice check-ins that extract tasks and mood insights conversationally'
  },
  {
    icon: Cloud,
    title: 'Seamless Sync',
    description: 'CloudKit integration for real-time updates across iPhone, iPad, and Mac'
  },
  {
    icon: TrendingUp,
    title: 'Smart Analytics',
    description: 'Mood-task correlation insights and productivity patterns based on emotional states'
  }
]

export default function MooDo() {
  const [betaCount, setBetaCount] = useState(20)

  const openBetaSignup = () => {
    window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')
  }

  return (
    <div className="relative">
      {/* Background gradient specific to MooDo */}
      <div className="absolute inset-0 bg-gradient-to-br from-lumora-pink/10 via-lumora-purple/10 to-deep-purple/10 rounded-3xl"></div>

      <div className="relative z-10 glass-strong rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column - Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Moo<span className="gradient-text">Do</span>
              </h2>
              <p className="text-xl md:text-2xl text-lumora-pink font-semibold mb-4">
                Work with your emotions, not against them
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Revolutionary task management app that adapts to your emotional state in real-time. 
                Unlike traditional productivity tools, MooDo uses advanced AI to optimize your workflow 
                based on how you're feeling.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="glass rounded-2xl p-4 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-lumora-pink/20 rounded-lg">
                        <IconComponent size={20} className="text-lumora-pink" />
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
              <p className="text-white/70 mb-2">MooDo Beta Program</p>
              <div className="text-2xl font-bold text-lumora-pink mb-2">
                {betaCount}/50 <span className="text-lg text-white/60">spots filled</span>
              </div>
              <button
                onClick={openBetaSignup}
                className="w-full bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full py-3 px-6 text-white font-semibold hover:shadow-lg hover:shadow-lumora-purple/25 transition-all duration-300"
              >
                Join MooDo Beta
              </button>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* Placeholder for app screenshot */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 glass rounded-3xl flex items-center justify-center">
                  <Heart size={48} className="text-lumora-pink animate-pulse" />
                </div>
                <p className="text-white/70 text-sm">
                  App screenshot placeholder
                  <br />
                  <span className="text-white/50 text-xs">Upload your MooDo app images here</span>
                </p>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl p-3">
              <p className="text-lumora-pink text-sm font-semibold">😊 Positive Mode</p>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3">
              <p className="text-calm text-sm font-semibold">🎯 5 tasks optimized</p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-white font-semibold mb-4">Perfect for:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Mental Health Professionals',
              'Creative Professionals', 
              'Busy Professionals',
              'Students & Academics',
              'Remote Workers'
            ].map((audience, index) => (
              <span key={index} className="glass rounded-full px-4 py-2 text-white/80 text-sm">
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
