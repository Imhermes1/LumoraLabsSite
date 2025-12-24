'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import { ArrowLeft, ChevronDown, Calendar, CheckSquare, Clock, Bell, Repeat, Target, Brain, Sparkles, Layout, Command, Shield, Zap, Globe, Users } from 'lucide-react'
import Footer from '@/components/Footer'

// Screenshot paths - these show the mobile app
const mobileScreenshots = [
  '/images/IMG_3175.PNG',
  '/images/IMG_3176.PNG',
  '/images/IMG_3177.PNG',
  '/images/IMG_3178.PNG',
]

const features = [
  {
    id: 'unity',
    title: 'Your Daily Command Centre',
    category: 'The Basics',
    description: 'Everything that matters, in one place. Calendar, reminders, habits, journaling, memories, and contacts. Plus trip planning, home projects, and more. Powered by Lumora Ki.',
    icon: Layout,
    color: 'purple',
    image: mobileScreenshots[0]
  },
  {
    id: 'reminders',
    title: 'Reminders & Lists',
    category: 'Tasks',
    description: 'All your tasks, organized your way. See what\'s due, what\'s overdue, and what\'s coming up. Create custom lists for work, projects, or anything else.',
    icon: Brain,
    color: 'blue',
    image: mobileScreenshots[2]
  },
  {
    id: 'habits',
    title: 'Habits & Coaching',
    category: 'Consistency',
    description: 'Build habits that stick. Use AI to craft routines powered by your Lumora Ki data. Explore templates used by thousands, plus books and resources to guide your journey.',
    icon: Repeat,
    color: 'emerald',
    image: mobileScreenshots[3]
  },
  {
    id: 'connected',
    title: 'Your Life, Connected',
    category: 'Ecosystem',
    description: 'Journaling, planning, and contacts—all powered by Lumora Ki. Everything works together to help you stay on top of what matters most.',
    icon: Clock,
    color: 'amber',
    image: '/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg'
  }
]

export default function MicroPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        features.length - 1,
        Math.floor(latest * features.length)
      )
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

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

        {/* Hero Section - Matching Macro */}
        <section className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 px-6 relative text-center">
          {/* Background gradient orb */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Welcome to - TOP */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-black mb-4"
          >
            Welcome to
          </motion.p>

          {/* MICRO - MIDDLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-10 tracking-tight"
          >
            MICRO
          </motion.h1>

          {/* Large App Icon - BOTTOM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Image
              src="/images/Gemini_Generated_Image_3ozbgc3ozbgc3ozb.png"
              alt="Micro"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-20 flex flex-col items-center gap-2"
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

        {/* Feature Experience - Raycast Style Sticky */}
        <section ref={containerRef} className="relative h-[400vh] bg-zinc-50/50">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

              {/* Left Column: Descriptive Content */}
              <div className="relative h-[400px]">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="absolute inset-0 flex flex-col justify-center"
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : -20,
                      pointerEvents: activeIndex === index ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl bg-white border border-zinc-100 shadow-sm text-zinc-900`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                        {feature.category}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Visual Component */}
              <div className="relative aspect-[9/16] max-w-[320px] mx-auto w-full">
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.08)] border border-zinc-100 p-2">
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-zinc-50">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        className="absolute inset-0"
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover object-top"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bento Grid - Quick Capabilities */}
        <section className="relative h-[200vh]">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="py-16 px-6 max-w-7xl mx-auto w-full">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">The All-in-One Utility</h2>
                <p className="text-zinc-500">Every feature you need, nothing you don't.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 group hover:border-zinc-200 transition-colors">
                  <div className="p-3 bg-white w-fit rounded-2xl mb-6 shadow-sm border border-zinc-100">
                    <Command className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Command Center</h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">A central hub for your entire workflow. Search, schedule, and organize with a single glance. Built for everyone who values their time.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Apple Event Kit', 'Lumora Ki', 'Contacts', 'Habit Loops', 'Google (Soon)', 'Microsoft (Soon)'].map((item) => (
                      <div key={item} className="flex items-center gap-2 border border-zinc-200/50 bg-white/50 p-2 rounded-xl text-xs font-medium text-zinc-600">
                        <CheckSquare className="w-3.5 h-3.5 text-zinc-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm hover:border-zinc-200 transition-all group">
                  <div className="p-3 bg-zinc-50 w-fit rounded-2xl mb-6 border border-zinc-100 group-hover:bg-zinc-900 transition-colors">
                    <Shield className="w-6 h-6 text-zinc-900 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Epic Privacy</h3>
                  <p className="text-zinc-500 leading-relaxed">Your data belongs to you. End-to-end encryption means even we can't see your schedule. Secure, local, and private by design.</p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm hover:border-zinc-200 transition-all group">
                  <div className="p-3 bg-zinc-50 w-fit rounded-2xl mb-6 border border-zinc-100 group-hover:bg-zinc-900 transition-colors">
                    <Zap className="w-6 h-6 text-zinc-900 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">High Performance</h3>
                  <p className="text-zinc-500 leading-relaxed">Built natively for Apple devices. Zero lag, instant sync, and a seamless experience across iPhone, iPad, and Mac.</p>
                </div>

                <div className="md:col-span-2 p-8 rounded-[2rem] text-white overflow-hidden relative group">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/daniel-romero-Dc6D9YJ86pQ-unsplash.jpg"
                      alt="Mac and iPad"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Coming to Mac & iPad</h3>
                      <p className="text-zinc-300 max-w-sm">Bring the full power of Micro to your larger screens. A permanent companion for your high-performance professional work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-40 flex flex-col items-center text-center bg-white border-t border-zinc-100">
          <div className="relative mb-12">
            <Image
              src="/images/Gemini_Generated_Image_3ozbgc3ozbgc3ozb.png"
              alt="Micro Icon"
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Plan with purpose.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-lg mx-auto">
            Experience the productivity utility that professionals trust to keep their day in rhythm.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 font-semibold">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Coming to iOS, Mac & iPad
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
