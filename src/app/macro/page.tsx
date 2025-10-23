import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChefHat } from 'lucide-react'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Macro - AI Nutrition Coach | Lumora Labs',
  description:
    'Your personal nutritionist in your pocket. Chat with AI for advice on meals, symptoms, and goals. Log nutrition via photo analysis, barcode scanning, voice, or chat.',
  keywords:
    'macro, macros, calorie tracker, nutrition, weight loss, fitness, AI nutrition coach, AI meal planner, nutrition tracking, health app, meal logging, AI nutritionist',
  openGraph: {
    title: 'Macro - AI Nutrition Coach',
    description:
      'Your personal nutritionist in your pocket. Log meals in seconds with AI-powered analysis.',
    images: [
      {
        url: '/images/macro1.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

interface Feature {
  title: string
  description: string
  items: string[]
}

const features: Feature[] = [
  {
    title: 'Chat with Your AI Nutritionist',
    description:
      'Get instant, personalised nutrition advice 24/7. Discuss meals, symptoms, and fitness goals naturally. Receive expert guidance without expensive appointments.',
    items: [
      'Instant personalised advice 24/7',
      'Natural conversation flow',
      'No costly appointments needed',
      'Symptom logging and pattern detection',
      'Food-symptom correlation tracking',
    ],
  },
  {
    title: 'Effortless Meal Tracking',
    description:
      'Multiple ways to log meals—whatever works for you. From snapping photos to speaking naturally.',
    items: [
      'Photo Analysis: AI analyses nutrition instantly',
      'Barcode Scanning: Accurate packaged food data',
      'Voice Logging: Speak your meals',
      'Natural Chat: Tell your AI nutritionist what you ate',
    ],
  },
  {
    title: 'Smart Goal Management',
    description:
      'Personalised recommendations that adapt to your progress and unique needs.',
    items: [
      'Personalised macro and calorie recommendations',
      'Track protein, carbs, fat, and fibre',
      'Intelligent goal adjustments',
      'Daily, weekly, and monthly trends',
    ],
  },
  {
    title: 'Apple Health Integration',
    description:
      'Seamless sync with your health ecosystem for comprehensive tracking.',
    items: [
      'Sync weight, heart rate, and workout data',
      'Connect smart scales like Renpho',
      'Write nutrition data back to Apple Health',
      'Comprehensive health tracking in one place',
    ],
  },
  {
    title: 'Powerful Features',
    description: 'Everything you need for smarter nutrition tracking.',
    items: [
      'Symptom logging with pattern detection',
      'Track water intake and hydration goals',
      'Detailed nutrition breakdown for every meal',
      'Beautiful, intuitive interface',
      'Secure data with Apple encryption',
    ],
  },
  {
    title: 'Why Choose Macro?',
    description:
      'Unlike traditional calorie counters, Macro combines convenience with expertise.',
    items: [
      'AI-powered automated tracking',
      'Personal nutritionist guidance included',
      'Fraction of traditional nutritionist costs',
      'Adapts to your unique health goals',
      'Focus on feeling good, not counting',
      'Privacy-focused, secure data storage',
    ],
  },
]

export default function MacroPage() {
  return (
    <PageShell>
      <header className="mb-20 text-center">
        <Link
          href="/apps"
          className="mb-8 inline-flex items-center text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Apps
        </Link>
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lumora-pink/10 to-lumora-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
          <ChefHat size={16} className="text-lumora-pink" /> Macro
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
          Your Personal <span className="gradient-text">Nutritionist</span> in Your Pocket
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Chat with AI for advice on meals, symptoms, and goals. Log nutrition via photo analysis, barcode scanning, voice, or chat.
        </p>
      </header>

      <main className="flex flex-col gap-12">
        {/* Main Description */}
        <RevealOnScroll>
          <section className="page-surface rounded-3xl p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr,auto]">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                  Transform Your Fitness Journey with AI-Powered Nutrition Tracking
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Macro is your intelligent fitness and nutrition companion that makes tracking effortless. Get personalised guidance from your AI nutritionist, log meals in seconds, and reach your health goals faster—all at a fraction of traditional nutritionist costs.
                </p>
              </div>
              <div className="mx-auto w-[12.5rem] h-[13.75rem] flex items-center justify-center">
                <Image
                  src="/images/Macrowebsite/1.svg"
                  alt="Macro app - AI nutrition tracking"
                  width={200}
                  height={220}
                  className="w-full h-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Features with Side Scrolling Cards */}
        <section className="space-y-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index}>
              {index === 5 ? (
                // Special styling for "Why Choose Macro?"
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-lumora-pink/10 via-lumora-purple/5 to-lumora-pink/10 border border-lumora-purple/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-lumora-pink/5 to-lumora-purple/5 blur-3xl" />
                  <div className="relative text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                      <span className="gradient-text">{feature.title}</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">{feature.description}</p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {feature.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="page-card-subtle rounded-2xl p-6 text-center border border-lumora-purple/10 bg-white/60 animate-fade-in hover:scale-105 transition-transform duration-300"
                          style={{
                            animationDelay: `${itemIndex * 100}ms`,
                            opacity: 0,
                            animationFillMode: 'forwards'
                          }}
                        >
                          <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-gradient-to-r from-lumora-pink to-lumora-purple" />
                          <p className="font-medium text-gray-900">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="page-surface rounded-3xl p-6 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{feature.title}</h2>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">{feature.description}</p>

                      {/* Responsive cards grid (no horizontal scroll) */}
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        {feature.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="page-card-subtle rounded-2xl p-4 border border-gray-200/50 animate-fade-in"
                            style={{
                              animationDelay: `${itemIndex * 100}ms`,
                              opacity: 0,
                              animationFillMode: 'forwards'
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-pink to-lumora-purple flex-shrink-0" />
                              <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {index < 4 && (
                      <div className="mx-auto w-[12.5rem] h-[13.75rem] flex items-center justify-center">
                        <Image
                          src={
                            index === 0 ? '/images/Macrowebsite/3.svg' :
                            index === 1 ? '/images/Macrowebsite/2.svg' :
                            index === 2 ? '/images/Macrowebsite/4.svg' :
                            '/images/Apple_Health_badge_US-UK_blk_sRGB.svg'
                          }
                          alt={`Macro - ${feature.title}`}
                          width={200}
                          height={220}
                          className={index === 3 ? 'max-w-full max-h-full object-contain' : 'w-full h-full rounded-2xl object-cover'}
                        />
                      </div>
                    )}
                    {index === 4 && (
                      <div className="mx-auto">
                        <div className="w-[12.5rem] h-[13.75rem] flex items-center justify-center mx-auto">
                          <Image
                            src="/images/osarodion-amenze-lyKYUOdvsEs-unsplash.jpg"
                            alt="Macro - Powerful Features"
                            width={200}
                            height={220}
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-500 text-center">
                          Photo by <a href="https://unsplash.com/@slimmanny12?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-lumora-purple" target="_blank" rel="noopener noreferrer">Osarodion Amenze</a> on <a href="https://unsplash.com/photos/woman-in-white-tank-top-and-white-pants-doing-exercise-lyKYUOdvsEs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline hover:text-lumora-purple" target="_blank" rel="noopener noreferrer">Unsplash</a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </RevealOnScroll>
          ))}
        </section>

        {/* CTA Section */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Stop Counting, Start Living
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Stop manually entering every meal. Stop paying for expensive nutritionist appointments. Start your smarter fitness journey with Macro today.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lumora-pink to-lumora-purple px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(125,59,180,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-20px_rgba(125,59,180,0.55)]"
            >
              Download Macro
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
