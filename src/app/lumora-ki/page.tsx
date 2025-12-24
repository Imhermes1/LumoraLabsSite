'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, RefreshCw, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function LumoraKiPage() {
    return (
        <PageShell>
            <header className="mb-12 text-center">
                <Link
                    href="/"
                    className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
                <motion.p
                    className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-grey"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Life Energy
                </motion.p>
                <motion.h1
                    className="text-4xl font-semibold text-near-black sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Lumora Ki
                </motion.h1>
                <motion.p
                    className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    The living energy that flows through every app, every feature, and every experience in the Lumora ecosystem.
                </motion.p>
            </header>

            <main className="flex flex-col gap-12">
                {/* Hero Visual */}
                <RevealOnScroll>
                    <section className="relative overflow-hidden rounded-3xl bg-slate-900 py-8 text-center md:py-12 lg:py-16">
                        {/* Background Image - full bleed */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/ki_spirit_blue.png"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-slate-900/30" />
                        </div>

                        <div className="relative px-6 flex flex-col items-center">
                            {/* Floating Mascot */}
                            <motion.div
                                className="relative h-48 w-48 mb-4"
                                animate={{
                                    y: [0, -15, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/images/lumora_ki.svg"
                                    alt="Lumora Ki Spirit"
                                    fill
                                    className="object-contain mix-blend-screen scale-125"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full -z-10" />
                            </motion.div>

                            <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                One energy.
                            </h2>
                            <p
                                className="mt-4 text-2xl font-medium text-blue-300 sm:text-3xl md:text-4xl"
                                style={{ textShadow: '0.5px 0.5px 0 #000, -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000' }}
                            >
                                Every app. Connected.
                            </p>
                            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                                Most companies build in silos—separate systems, separate everything. Lumora Ki is different. One powerful life force that lets every Lumora app share data, sync instantly, and grow stronger together.
                            </p>
                        </div>
                    </section>
                </RevealOnScroll>

                {/* Architecture */}
                <RevealOnScroll>
                    <section className="bevel-card p-8 md:p-12 relative overflow-hidden">
                        {/* Subtle background glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_50%)]" />

                        <div className="relative z-10 mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-grey">
                                Architecture
                            </p>
                            <h2 className="text-2xl font-semibold text-near-black sm:text-3xl">
                                Built for scale, designed for flow
                            </h2>
                        </div>

                        <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="group">
                                <div className="mb-3 h-1 w-12 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-base font-semibold text-near-black">Unified Energy</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    One source of truth across all apps. Your data flows together, not in silos.
                                </p>
                            </div>

                            <div className="group">
                                <div className="mb-3 h-1 w-12 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-base font-semibold text-near-black">Global Reach</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Deployed worldwide for instant responses, no matter where you are.
                                </p>
                            </div>

                            <div className="group">
                                <div className="mb-3 h-1 w-12 rounded-full bg-purple-500 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-base font-semibold text-near-black">Real-Time Sync</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Changes propagate instantly across all devices and apps.
                                </p>
                            </div>

                            <div className="group">
                                <div className="mb-3 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-base font-semibold text-near-black">Privacy First</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Enterprise-grade security. Your data is encrypted and yours alone.
                                </p>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>

                {/* Intelligence */}
                <RevealOnScroll>
                    <section className="bevel-card p-6 md:p-10 relative overflow-hidden">
                        <div className="relative z-10 mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-grey">
                                Intelligence
                            </p>
                            <h2 className="text-2xl font-semibold text-near-black sm:text-3xl">
                                Lumora Ki learns and improves
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-grey">
                                This isn't static infrastructure. Lumora Ki continuously learns from patterns, refining its understanding and improving every interaction.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-3">
                            <div>
                                <div className="mb-3 text-4xl font-light text-emerald-500">01</div>
                                <h3 className="text-base font-semibold text-near-black">Adaptive</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Learns your preferences and patterns over time
                                </p>
                            </div>

                            <div>
                                <div className="mb-3 text-4xl font-light text-blue-500">02</div>
                                <h3 className="text-base font-semibold text-near-black">Evolving</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Continuously updated with new capabilities
                                </p>
                            </div>

                            <div>
                                <div className="mb-3 text-4xl font-light text-purple-500">03</div>
                                <h3 className="text-base font-semibold text-near-black">Stronger</h3>
                                <p className="mt-2 text-sm leading-relaxed text-grey">
                                    Every interaction makes the system smarter
                                </p>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>

                {/* Future */}
                <RevealOnScroll>
                    <section className="bevel-card relative overflow-hidden p-8 text-center md:p-12 group">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/alexander-grey-uk-no6Yv91g-unsplash.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Frosted overlay - reduces on hover */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-[1] transition-all duration-500 group-hover:bg-white/30 group-hover:backdrop-blur-none" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-black/60">
                                Vision
                            </p>
                            <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                This is just the beginning
                            </h2>
                            <p className="mt-6 text-base leading-relaxed text-black/80">
                                Lumora Ki isn't just infrastructure—it's a <span className="font-bold text-black">living force</span> that grows with you. A world where your apps don't just coexist, they <span className="font-bold text-black">collaborate</span>. Where insights from your health inform your daily schedule. Where every piece of your digital life works in <span className="font-bold text-black">harmony</span>—and gets stronger every day.
                            </p>
                        </div>
                    </section>
                </RevealOnScroll>

                {/* CTA */}
                <RevealOnScroll>
                    <section className="bevel-card relative overflow-hidden p-8 pb-16 text-center md:p-12 md:pb-20 min-h-[300px] flex items-center justify-center group">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/ki_hero.png"
                                alt=""
                                fill
                                className="object-cover scale-x-150 scale-y-125"
                                style={{ objectPosition: 'center 40%' }}
                            />
                        </div>
                        {/* Frosted overlay - reduces on hover */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-[1] transition-all duration-500 group-hover:bg-white/30 group-hover:backdrop-blur-none" />

                        <div className="relative z-10 w-full flex flex-col items-center text-center mt-8">
                            <h2 className="text-3xl font-bold text-black md:text-4xl">
                                Feel the energy
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-base text-black/80">
                                Download Macro or Micro and experience the power of Lumora Ki for yourself.
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/apps"
                                    className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 shadow-lg"
                                >
                                    <span>Explore Our Apps</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>
            </main>
        </PageShell >
    )
}
