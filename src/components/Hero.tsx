'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedCard from '@/components/AnimatedCard'

export default function Hero() {

  const highlightItems: Array<{
    title: string
    description: string
  }> = [
      {
        title: 'Clarity First',
        description: 'Interfaces stripped back to the essentials so every action feels immediate and intentional.',
      },
      {
        title: 'Light-Led Interactions',
        description: 'Moments of delight guide people through the flow without overwhelming the senses.',
      },
      {
        title: 'Practical Magic',
        description: 'Purposeful features shaped with craft, so the technology fades and the outcome shines.',
      },
      {
        title: 'Future Fluent',
        description: 'A design language ready for new platforms while feeling familiar on day one.',
      },
    ]

  const quickLinks = [
    {
      label: 'Lumora Ki',
      href: '/lumora-ki',
      description: 'The living energy powering our entire ecosystem',
    },
    {
      label: 'About Lumora Labs',
      href: '/about-us',
      description: 'Our purpose and principles',
    },
    {
      label: 'Apps',
      href: '/apps',
      description: 'Seamlessly connected experiences',
    },
    {
      label: 'Privacy',
      href: '/privacy-policy',
      description: 'How we handle data',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  }

  return (
    <section className="relative isolate overflow-hidden pt-1 sm:pt-4 pb-10 bg-[#fafafa]">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-7 px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero header */}
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative h-[8rem] w-[8rem] sm:h-[9rem] sm:w-[9rem] lg:h-[10rem] lg:w-[10rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {/* Ambient Aura/Energy Glow */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="h-2/3 w-2/3 rounded-full bg-emerald-400/5 blur-[50px]" />
              <div className="absolute h-1/2 w-1/2 rounded-full bg-blue-400/5 blur-[30px] translate-x-2" />
            </div>

            <div className="relative z-10 h-full w-full">
              <Image
                src="/images/lumoralabs_logo.png"
                alt="Lumora Labs Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-balance text-3xl font-semibold leading-tight text-near-black sm:text-4xl lg:text-[2.75rem]"
            variants={itemVariants}
          >
            <span>Pure Energy.</span>{' '}
            <span>Refined Craft.</span>
          </motion.h1>

          <motion.p
            className="max-w-4xl text-pretty text-lg text-grey sm:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Our purpose is to shape a digital environment where every touch, every thought, and every day is elevated by a living force. Through the unified architecture of Lumora Ki, we create an ecosystem that is as powerful as it is serene.
          </motion.p>
        </motion.div>

        <ParallaxSection offset={15}>
          <motion.div
            className="bevel-card relative overflow-hidden group min-h-[400px] flex items-center"
            variants={itemVariants}
          >
            {/* Blended Background Container */}
            <div className="absolute inset-0 flex pointer-events-none opacity-70 transition-opacity duration-700 group-hover:opacity-90">
              <div className="relative w-1/2 h-full">
                <Image
                  src="/images/macro_nutrition.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-r from-transparent via-white/60 to-white/90" />
              </div>
              <div className="relative w-1/2 h-full">
                <Image
                  src="/images/macro_workout.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-l from-transparent via-white/60 to-white/90" />
              </div>
            </div>

            {/* Frosted Overlay - reduced for image clarity */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/50 backdrop-blur-[0.5px]" />

            <div className="relative z-10 w-full p-8 lg:p-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 space-y-6">
                {/* Version badge */}
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-grey-subtle bg-white/80 backdrop-blur-md px-4 py-2 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-near-black">
                    NEW UPDATE 1.2.3
                  </span>
                </motion.div>

                <div className="max-w-2xl">
                  <motion.h2
                    className="text-2xl font-semibold text-near-black sm:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Macro 1.2.3: Rebuilt for Performance.
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-sm leading-relaxed text-slate sm:text-base lg:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    A major architectural leap. Experience our official <span className="text-near-black font-medium">ChatGPT App integration</span> and the new <span className="text-near-black font-medium">Lumora Ki</span>—all wrapped in Apple’s <span className="text-near-black font-medium">Liquid Glass</span> aesthetic. From smart meal generation and interactive water logging to our new <span className="text-near-black font-medium">Apple Watch companion</span>, Macro now layers deep intelligence over your life. Hardened with OAuth 2.1 for total privacy and refactored for near-zero latency.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/macro"
                      className="bevel-button bg-accent/90 hover:bg-accent text-white group py-3 px-8 text-base shadow-lg backdrop-blur-sm"
                    >
                      <span>Explore Macro</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="https://apps.apple.com/us/app/macro/id6753906481"
                      className="inline-flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the App Store"
                        width={140}
                        height={44}
                        className="h-11 w-auto"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Visual Anchor on the right side */}
              <div className="hidden lg:flex items-center justify-center pl-12 border-l border-grey-subtle/30">
                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/50 shadow-2xl">
                  <Image
                    src="/images/macrologoNB.png"
                    alt="Macro"
                    width={80}
                    height={80}
                    className="h-20 w-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </ParallaxSection>

        {/* Quick Links Section */}
        <ParallaxSection offset={40}>
          <AnimatedCard delay={0.2} className="bevel-card p-6 relative overflow-hidden">
            {/* Soft Blue Corner Tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_50%)]" />

            <div className="relative z-10">
              <div className="flex flex-col gap-4 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey-light">Explore</p>
                <h2 className="text-2xl font-semibold text-near-black leading-tight">
                  Where would you like to go? Every path reveals something new.
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link, idx) => (
                  <AnimatedCard
                    key={link.label}
                    delay={0.3 + idx * 0.1}
                    hoverScale={1.03}
                  >
                    <Link
                      href={link.href}
                      className="group block rounded-2xl border border-grey-subtle bg-white p-5 transition-all duration-500 hover:border-grey-lighter hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-near-black">
                            {link.label}
                          </p>
                          <p className="mt-1.5 text-sm text-grey leading-relaxed">{link.description}</p>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <ArrowRight className="h-4 w-4 flex-shrink-0 text-grey-light transition-colors duration-200 group-hover:text-near-black" />
                        </motion.div>
                      </div>
                    </Link>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </ParallaxSection>

        {/* Design Philosophy Section */}
        <ParallaxSection offset={50}>
          <AnimatedCard delay={0.3} className="bevel-card p-6 relative overflow-hidden">
            {/* Soft Emerald Corner Tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />

            <div className="relative z-10">
              <div className="flex flex-col gap-4 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey-light">Design</p>
                <h2 className="text-2xl font-semibold text-near-black leading-tight">
                  Purposeful, calming interfaces that feel beautifully simple and move exactly how they should.
                </h2>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {highlightItems.map(({ title, description }, idx) => (
                  <AnimatedCard key={title} delay={0.4 + idx * 0.1} hoverScale={1.03}>
                    <div className="group rounded-2xl border border-grey-subtle bg-white p-6 transition-all duration-500 hover:border-grey-lighter hover:shadow-lg">
                      <span className="text-lg font-semibold text-near-black">{title}</span>
                      <p className="mt-3 text-sm text-grey leading-relaxed">{description}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </ParallaxSection>
      </motion.div>
    </section>
  )
}
