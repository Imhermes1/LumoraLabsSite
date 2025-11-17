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
      label: 'Macro',
      href: '/macro',
      description: 'Meet your AI nutrition coach',
    },
    {
      label: 'About Lumora',
      href: '/about-us',
      description: 'Our purpose and principles',
    },
    {
      label: 'Apps',
      href: '/apps',
      description: 'Explore Micro & Macro',
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
    <section className="relative isolate overflow-hidden pt-2 sm:pt-6 pb-16 bg-off-white">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero header */}
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative h-[7.5rem] w-[7.5rem] sm:h-[8.75rem] sm:w-[8.75rem] lg:h-[10rem] lg:w-[10rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Image
              src="/images/lumoralabs_logo.png"
              alt="Lumora Labs Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </motion.div>

          <motion.h1
            className="text-balance text-4xl font-semibold leading-tight text-near-black sm:text-5xl lg:text-[3.5rem]"
            variants={itemVariants}
          >
            <span>Deliberate.</span>{' '}
            <span>Refined.</span>{' '}
            <span>Unmistakably ours.</span>
          </motion.h1>

          <motion.p
            className="max-w-4xl text-pretty text-lg text-grey sm:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Our purpose is to shape serene digital experiences that help you feel centered, capable, and clear. Meet Macro—an AI nutritionist designed with the same intention, turning daily routines into moments that feel effortless.
          </motion.p>
        </motion.div>

        {/* V1.1.0 Major Release Highlight */}
        <ParallaxSection offset={30}>
          <motion.div
            className="bevel-card p-10 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Minimal accent line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] bg-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 space-y-6">
                {/* Version badge - clean, no icons */}
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-grey-subtle bg-white px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-near-black">
                    V1.1.0 Now Available
                  </span>
                </motion.div>

                <div>
                  <motion.h2
                    className="text-3xl font-semibold text-near-black sm:text-4xl lg:text-5xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    The nutrition coach that knows your day better than a diary.
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-base leading-relaxed text-grey sm:text-lg max-w-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Effortless meal logging, symptom tracking, and personalised guidance—wrapped in a calm, considered interface. <span className="font-semibold text-near-black">Major update</span> with enhanced AI capabilities and smoother performance.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row sm:items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/macro"
                      className="bevel-button bg-accent hover:bg-accent-hover text-white group"
                    >
                      <span>Explore Macro</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="https://apps.apple.com/us/app/macro/id6753906481"
                      className="inline-flex items-center gap-2"
                      aria-label="Download Macro on the App Store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the App Store"
                        width={160}
                        height={48}
                        className="h-12 w-auto"
                        priority
                      />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* What's new in v1.1.0 */}
                <motion.div
                  className="pt-4 border-t border-grey-subtle"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-grey-light mb-3">What's New</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      'Enhanced AI meal recognition',
                      'Faster sync performance',
                      'Improved symptom insights',
                      'Refined UI animations'
                    ].map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-grey"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="h-1 w-1 rounded-full bg-near-black" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-off-white border border-grey-subtle lg:h-80 lg:w-96"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/macrologoNB.png"
                    alt="Macro logo"
                    width={240}
                    height={240}
                    className="h-auto w-full max-w-[14rem]"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ParallaxSection>

        {/* Quick Links Section */}
        <ParallaxSection offset={40}>
          <AnimatedCard delay={0.2} className="bevel-card p-8">
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey-light">Explore</p>
              <h2 className="text-3xl font-semibold text-near-black leading-tight">
                Buttons and swipes, not menus and clutter. Choose where the light takes you.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link, idx) => (
                <AnimatedCard key={link.label} delay={0.3 + idx * 0.1} hoverScale={1.03}>
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
          </AnimatedCard>
        </ParallaxSection>

        {/* Design Philosophy Section */}
        <ParallaxSection offset={50}>
          <AnimatedCard delay={0.3} className="bevel-card p-8">
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey-light">Design</p>
              <h2 className="text-3xl font-semibold text-near-black leading-tight">
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
          </AnimatedCard>
        </ParallaxSection>
      </motion.div>
    </section>
  )
}
