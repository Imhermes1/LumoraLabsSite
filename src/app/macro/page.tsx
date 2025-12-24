'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, Flame, Droplets, Pill, Drumstick, TrendingUp, Camera, Barcode, Search, Utensils, Apple, Zap, Target, Calendar, Award, Mic, BookOpen, Eye, Activity, PieChart, Clock, BarChart3, Timer, Brain, FileText, Sparkles, Sun, Heart, MessageCircle, Moon, BatteryCharging, Dumbbell, AlertTriangle, Lightbulb } from 'lucide-react'
import Footer from '@/components/Footer'

// Screenshot paths (5 screenshots)
const screenshots = [
  '/images/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202025-12-04%20at%2019.54.00-portrait.png',
  '/images/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202025-12-04%20at%2019.54.28-portrait.png',
  '/images/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202025-12-04%20at%2019.57.55-portrait.png',
  '/images/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202025-12-04%20at%2019.58.12-portrait.png',
  '/images/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202025-12-24%20at%2010.00.28-portrait.png',
]

// Feature content for each screenshot - each has colorful cards with icons
const features = [
  {
    title: 'Track Your Nutrition',
    description: 'See your daily progress at a glance. Monitor calories, protein, carbs, and fat—plus log hydration and supplements.',
    cards: [
      { title: 'Calories', value: '1,847 / 2,100', position: 'top-left', icon: 'Flame', color: 'orange' },
      { title: 'Protein', value: '142g / 200g', position: 'top-right', icon: 'Drumstick', color: 'red' },
      { title: 'Hydration', value: '1.8L / 2.5L', position: 'mid-left', icon: 'Droplets', color: 'blue' },
      { title: 'Weekly Trend', value: '↑ 12% vs last week', position: 'mid-right', icon: 'TrendingUp', color: 'emerald' },
      { title: 'Supplements', value: 'Creatine • BCAA • Vit C', position: 'bottom-left', icon: 'Pill', color: 'purple' },
      { title: 'Chicken & Broccoli', value: '320 kcal • 42g protein', position: 'bottom-right', icon: 'Utensils', color: 'green' },
    ],
  },
  {
    title: 'Effortless Meal Logging',
    description: 'Multiple ways to log your food—speak, scan, snap, or pick from your saved meals.',
    cards: [
      { title: 'Speak', value: 'Voice log your meals instantly', position: 'top-left', icon: 'Mic', color: 'green' },
      { title: 'Vision', value: 'AI-powered food recognition', position: 'top-right', icon: 'Eye', color: 'pink' },
      { title: 'My Meals', value: 'Quick access to saved favorites', position: 'mid-left', icon: 'BookOpen', color: 'purple' },
      { title: 'Barcode', value: 'Scan any packaged food', position: 'mid-right', icon: 'Barcode', color: 'slate' },
      { title: 'Gallery', value: 'Import from your photos', position: 'bottom-left', icon: 'Camera', color: 'amber' },
      { title: 'Search', value: '4.5 million+ foods in database', position: 'bottom-right', icon: 'Search', color: 'blue' },
    ],
  },
  {
    title: 'Smart Insights & Analytics',
    description: 'Track your progress with powerful metrics and understand your nutrition patterns.',
    cards: [
      { title: 'Nutrition Score', value: 'Overall health rating', position: 'top-left', icon: 'Activity', color: 'emerald' },
      { title: 'Calorie Accuracy', value: 'Days within ±5% of goal', position: 'top-right', icon: 'Target', color: 'orange' },
      { title: 'Macro Balance', value: 'Protein/carb/fat split', position: 'mid-left', icon: 'PieChart', color: 'purple' },
      { title: 'Logging Consistency', value: 'Track your streak', position: 'mid-right', icon: 'Timer', color: 'cyan' },
      { title: 'Weekly Progress', value: 'Visualize your week', position: 'bottom-left', icon: 'BarChart3', color: 'blue' },
      { title: 'Meal Timing', value: 'When you eat matters', position: 'bottom-right', icon: 'Clock', color: 'amber' },
    ],
  },
  {
    title: 'AI Powered by Lumora Ki',
    description: 'A context-aware assistant that understands your health journey and takes action for you.',
    cards: [
      { title: 'Log How You Feel', value: 'Track mood & energy levels', position: 'top-left', icon: 'Heart', color: 'pink' },
      { title: 'Daily Debrief', value: 'AI summary of your day', position: 'top-right', icon: 'Sun', color: 'amber' },
      { title: 'PDF Analysis', value: 'Scan documents & labels', position: 'mid-left', icon: 'FileText', color: 'blue' },
      { title: 'Context Aware', value: 'Knows your full health picture', position: 'mid-right', icon: 'Brain', color: 'purple' },
      { title: 'Tool Calling', value: 'Takes actions on your behalf', position: 'bottom-left', icon: 'Sparkles', color: 'emerald' },
      { title: 'Ki Integration', value: 'Powered by Lumora Ki', position: 'bottom-right', icon: 'Zap', color: 'violet' },
    ],
  },
  {
    title: 'Complete Wellness Tracking',
    description: 'Monitor your recovery, sleep quality, daily strain, and stress levels all in one place.',
    cards: [
      { title: 'Recovery Score', value: 'How ready you are today', position: 'top-left', icon: 'BatteryCharging', color: 'emerald' },
      { title: 'Sleep Quality', value: 'Deep, REM & restoration', position: 'top-right', icon: 'Moon', color: 'indigo' },
      { title: 'Daily Strain', value: 'Activity & exertion load', position: 'mid-left', icon: 'Dumbbell', color: 'orange' },
      { title: 'Sleep Debt', value: 'Track what you owe', position: 'mid-right', icon: 'AlertTriangle', color: 'amber' },
      { title: 'Stress Monitor', value: 'HRV-based insights', position: 'bottom-left', icon: 'Activity', color: 'red' },
      { title: 'Smart Tips', value: 'Personalized guidance', position: 'bottom-right', icon: 'Lightbulb', color: 'cyan' },
    ],
  },
]

export default function MacroPage() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showCards, setShowCards] = useState(false) // Simple toggle for all cards

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return

      const rect = stickyRef.current.getBoundingClientRect()
      const sectionHeight = stickyRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far we've scrolled through the sticky section
      const scrollProgress = Math.max(0, -rect.top) / (sectionHeight - viewportHeight)

      // Each image gets 2 scroll states (1 for just image, 1 for all cards)
      const statesPerImage = 2
      const totalStates = screenshots.length * statesPerImage
      const currentState = scrollProgress * totalStates

      // Which image are we on?
      const newIndex = Math.min(
        screenshots.length - 1,
        Math.floor(currentState / statesPerImage)
      )

      // Show all cards after first scroll state for this image
      const stateWithinImage = currentState - (newIndex * statesPerImage)
      const cardsVisible = stateWithinImage >= 0.5

      setActiveIndex(newIndex)
      setShowCards(cardsVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white">
      <main className="min-h-screen bg-white text-black">
        {/* Header - Centered Back Button */}
        <div className="pt-8 pb-4">
          <Link
            href="/apps"
            className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-black/70 hover:text-black transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Apps
          </Link>
        </div>

        {/* Hero Section - Full Screen with Large Logo */}
        <section className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 px-6 relative">
          {/* Background gradient orb */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-500/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Welcome to - TOP */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-black text-center mb-4"
          >
            Welcome to
          </motion.p>

          {/* MACRO - MIDDLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-10 tracking-tight"
          >
            MACRO
          </motion.h1>

          {/* Large App Icon - BOTTOM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Image
              src="/images/macrologoNB.png"
              alt="Macro"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[3rem] shadow-2xl shadow-emerald-500/20"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-black/40 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-black/40" />
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky Screenshots Section - 5 images x 2 states each */}
        <section ref={stickyRef} className="relative h-[1000vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30">
            {/* Dynamic Section Header */}
            <div className="text-center mb-8 h-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute left-0 right-0 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{ top: 'calc(50% - 380px)' }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-black/50 max-w-xl mx-auto">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Phone with floating cards container */}
            <div className="relative">

              {/* Floating cards that all slide out together for each screenshot */}
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className={`${activeIndex === featureIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {feature.cards.map((card, cardIndex) => {
                    // Position classes - closer on mobile, further out on desktop
                    const positionClasses: Record<string, string> = {
                      'top-left': '-left-28 top-2 md:-left-72 md:top-4',
                      'top-right': '-right-28 top-6 md:-right-72 md:top-8',
                      'mid-left': '-left-32 top-1/2 -translate-y-1/2 md:-left-80',
                      'mid-right': '-right-32 top-1/2 -translate-y-1/2 md:-right-80',
                      'bottom-left': '-left-28 bottom-20 md:-left-72 md:bottom-24',
                      'bottom-right': '-right-28 bottom-16 md:-right-72 md:bottom-20',
                    }
                    const slideFrom: Record<string, string> = {
                      'top-left': 'translateX(100px)',
                      'top-right': 'translateX(-100px)',
                      'mid-left': 'translateX(100px) translateY(-50%)',
                      'mid-right': 'translateX(-100px) translateY(-50%)',
                      'bottom-left': 'translateX(100px)',
                      'bottom-right': 'translateX(-100px)',
                    }
                    const slideToTransform: Record<string, string> = {
                      'top-left': 'translateX(0)',
                      'top-right': 'translateX(0)',
                      'mid-left': 'translateX(0) translateY(-50%)',
                      'mid-right': 'translateX(0) translateY(-50%)',
                      'bottom-left': 'translateX(0)',
                      'bottom-right': 'translateX(0)',
                    }
                    const colorClasses: Record<string, string> = {
                      orange: 'text-orange-500 bg-orange-50 border-orange-200',
                      red: 'text-red-500 bg-red-50 border-red-200',
                      blue: 'text-blue-500 bg-blue-50 border-blue-200',
                      purple: 'text-purple-500 bg-purple-50 border-purple-200',
                      green: 'text-green-500 bg-green-50 border-green-200',
                      emerald: 'text-emerald-500 bg-emerald-50 border-emerald-200',
                      violet: 'text-violet-500 bg-violet-50 border-violet-200',
                      slate: 'text-slate-500 bg-slate-50 border-slate-200',
                      amber: 'text-amber-500 bg-amber-50 border-amber-200',
                      yellow: 'text-yellow-500 bg-yellow-50 border-yellow-200',
                      cyan: 'text-cyan-500 bg-cyan-50 border-cyan-200',
                      pink: 'text-pink-500 bg-pink-50 border-pink-200',
                      indigo: 'text-indigo-500 bg-indigo-50 border-indigo-200',
                    }
                    const iconMap: Record<string, React.ElementType> = {
                      Flame, Droplets, Pill, Drumstick, TrendingUp, Camera, Barcode, Search, Utensils, Apple, Zap, Target, Calendar, Award, Mic, BookOpen, Eye, Activity, PieChart, Clock, BarChart3, Timer, Brain, FileText, Sparkles, Sun, Heart, MessageCircle, Moon, BatteryCharging, Dumbbell, AlertTriangle, Lightbulb
                    }

                    // All cards appear at once based on showCards
                    const isCardVisible = activeIndex === featureIndex && showCards
                    const IconComponent = iconMap[card.icon || 'Flame']
                    const cardColor = colorClasses[card.color || 'slate']

                    return (
                      <div
                        key={cardIndex}
                        className={`absolute z-10 transition-all duration-500 ${positionClasses[card.position] || positionClasses['top-left']}`}
                        style={{
                          transform: isCardVisible ? (slideToTransform[card.position] || 'translateX(0)') : (slideFrom[card.position] || 'translateX(100px)'),
                          opacity: isCardVisible ? 1 : 0
                        }}
                      >
                        <div className={`rounded-2xl shadow-xl border p-4 min-w-[140px] ${cardColor}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cardColor.split(' ')[1]} shadow-sm`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <p className="text-base font-semibold text-black">{card.title}</p>
                          </div>
                          <p className="text-black/60 text-sm">{card.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}

              {/* Screenshot - 10% smaller */}
              <div className="relative w-[250px] h-[520px] md:w-[290px] md:h-[590px] rounded-[2.25rem] overflow-hidden">
                {screenshots.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                      src={src}
                      alt={`Macro app screenshot ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="text-center">
            <Image
              src="/images/macrologoNB.png"
              alt="Macro"
              width={80}
              height={80}
              className="w-16 h-16 rounded-2xl mx-auto mb-8 shadow-lg shadow-emerald-500/20"
            />

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Start your journey
            </h2>
            <p className="text-lg text-black/50 mb-10 max-w-md mx-auto">
              Download Macro today and take control of your nutrition.
            </p>

            <Link
              href="https://apps.apple.com/us/app/macro/id6753906481"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/90 transition-all hover:scale-105 shadow-lg"
            >
              Download on the App Store
            </Link>

            <p className="text-black/40 text-sm mt-6">
              Free to download • Premium features available
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div >
  )
}
