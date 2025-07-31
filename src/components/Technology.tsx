'use client'

import { Smartphone, Brain, Cloud, Lock, Zap, Cpu } from 'lucide-react'

const technologies = [
  {
    icon: Smartphone,
    title: 'SwiftUI & UIKit',
    description: 'Native iOS development for optimal performance and elegant Apple ecosystem integration',
    color: 'lumora-pink'
  },
  {
    icon: Brain,
    title: 'GPT-4 AI Integration',
    description: 'Sophisticated AI for emotional intelligence and intuitive Australian nutrition understanding',
    color: 'lumora-purple'
  },
  {
    icon: Cpu,
    title: 'Core ML Processing',
    description: 'On-device machine learning for privacy and instant performance',
    color: 'deep-purple'
  },
  {
    icon: Cloud,
    title: 'CloudKit Sync',
    description: 'Effortless synchronisation across iPhone, iPad, and Mac devices',
    color: 'positive'
  },
  {
    icon: Zap,
    title: 'Advanced Speech Recognition',
    description: 'Intelligent language processing optimised for voice-first interactions',
    color: 'calm'
  },
  {
    icon: Lock,
    title: 'Privacy-First Architecture',
    description: 'End-to-end encryption with zero unnecessary data collection',
    color: 'focused'
  }
]

const architectureFeatures = [
  'MVVM with Combine reactive programming',
  'Modular, scalable codebase architecture',
  'Offline-first with cloud synchronisation',
  'Full accessibility and VoiceOver support',
  'Multi-language localisation framework',
  'Comprehensive testing suite (XCTest, XCUITest)'
]

export default function Technology() {
  return (
    <section id="technology" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Built with the latest technologies to deliver extraordinary experiences that Apple users expect. 
            Every component is elegantly crafted for performance, privacy, and seamless integration.
          </p>
        </div>

        {/* Core Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div key={index} className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 mb-4 bg-${tech.color}/20 rounded-xl flex items-center justify-center`}>
                  <IconComponent className={`text-${tech.color}`} size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{tech.title}</h3>
                <p className="text-white/70">{tech.description}</p>
              </div>
            )
          })}
        </div>

        {/* Architecture & Development Practices */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Development Architecture</h3>
            <div className="space-y-3">
              {architectureFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lumora-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">AI Innovation</h3>
            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <h4 className="text-lumora-pink font-semibold mb-2">MooDo AI</h4>
                <p className="text-white/70 text-sm">
                  Emotional intelligence algorithms that learn from user behaviour patterns 
                  to optimise task recommendations and workflow adaptations.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="text-positive font-semibold mb-2">Macro AI</h4>
                <p className="text-white/70 text-sm">
                  Sophisticated natural language processing trained on Australian food culture, 
                  integrated with AUSNUT database for extraordinary local accuracy.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="text-calm font-semibold mb-2">Privacy AI</h4>
                <p className="text-white/70 text-sm">
                  On-device processing ensures your personal data never leaves your device 
                  while still providing intelligent, personalised experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apple Ecosystem Integration */}
        <div className="mt-16 glass-strong rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Apple Ecosystem Excellence</h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-6">
            Elegantly designed for Apple's ecosystem with intuitive integration across devices. 
            Experience effortless handoff, universal clipboard, and native Apple features 
            that make our apps feel like natural extensions of your Apple devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['iPhone', 'iPad', 'Mac', 'Apple Watch*', 'Apple TV*'].map((device, index) => (
              <span 
                key={index} 
                className={`glass rounded-full px-4 py-2 text-white/80 ${
                  device.includes('*') ? 'text-white/50' : ''
                }`}
              >
                {device}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-3">* Coming in future updates</p>
        </div>
      </div>
    </section>
  )
}
