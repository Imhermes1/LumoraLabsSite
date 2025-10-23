import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Micro - Smart Calendar & Planning | Lumora Labs',
  description:
    'Your day, beautifully orchestrated. Blend calendars, reminders, and habit loops into a single purposeful interface with gentle prompts and calm rhythm.',
  keywords:
    'calendar app, task planner, habit tracker, daily planner, productivity, time management, reminders, scheduling, digital calendar',
  openGraph: {
    title: 'Micro - Smart Calendar & Planning',
    description:
      'Your day, beautifully orchestrated. Plan, prioritise, and reflect with purpose.',
    images: [
      {
        url: '/images/microprev.PNG',
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
    title: 'Seamless Integrations',
    description:
      'Micro works with your existing tools, not against them.',
    items: [
      'Syncs with Apple Calendar and Reminders today',
      'Google and Android integrations on the horizon',
      'Your data stays yours—secure and private',
    ],
  },
  {
    title: 'Habits That Stick',
    description:
      'Build routines that become steady progress, not pressure. Micro\'s intelligent prompting system helps you stay consistent without feeling intrusive.',
    items: [
      'Add intentional prompts to your schedule',
      'Track habit completion and progress',
      'Celebrate wins and stay motivated',
    ],
  },
  {
    title: 'Purposeful Planning',
    description:
      'More than just a calendar. Micro helps you see your week, prioritise what matters, and reflect on what you\'ve accomplished.',
    items: [
      'See your entire week at a glance',
      'Focus on today\'s priorities without distraction',
      'Get reminded at the right time, in the right way',
      'Built-in moments to reflect on your week',
    ],
  },
  {
    title: 'Why Choose Micro?',
    description:
      'Most calendar apps just store events. Micro helps you live intentionally—with calm, rhythm, and purpose woven into every interaction.',
    items: [
      'Designed for your wellbeing, not engagement metrics',
      'Beautiful, intuitive interface that gets out of your way',
      'Works with Apple Calendar and Reminders seamlessly',
      'Your data is encrypted and stays completely private',
      'Focus on living, not just scheduling',
      'Gentle prompts that respect your time',
    ],
  },
]

export default function MicroPage() {
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
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lumora-purple/10 to-lumora-pink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
          <Calendar size={16} className="text-lumora-purple" /> Micro
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
          Your Day,<br /><span className="gradient-text">Beautifully Orchestrated</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Blend calendars, reminders, and habit loops into a single purposeful interface. Plan, prioritise, and reflect with gentle prompts and calm rhythm.
        </p>
      </header>

      <main className="flex flex-col gap-12">
        {/* Main Description */}
        <RevealOnScroll>
          <section className="page-surface rounded-3xl p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr,auto]">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                  Planning That Feels Effortless
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Micro blends calendars, reminders, and habit loops into a single purposeful interface. It layers gentle prompts and calm rhythm over your week so planning, prioritising, and reflecting feel effortless—not overwhelming.
                </p>
              </div>
              <div className="mx-auto w-[12.5rem] h-[13.75rem] flex items-start justify-center overflow-hidden rounded-2xl">
                <Image
                  src="/images/microprev.PNG"
                  alt="Micro app - Calendar and planning"
                  width={200}
                  height={220}
                  className="w-full rounded-2xl object-cover -mt-6"
                  priority
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Features */}
        <section className="space-y-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index}>
              {index === 3 ? (
                // Special styling for "Why Choose Micro?"
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-lumora-purple/10 via-lumora-pink/5 to-lumora-purple/10 border border-lumora-pink/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-lumora-purple/5 to-lumora-pink/5 blur-3xl" />
                  <div className="relative text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                      <span className="gradient-text">{feature.title}</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">{feature.description}</p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {feature.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="page-card-subtle rounded-2xl p-6 text-center border border-lumora-pink/10 bg-white/60 animate-fade-in hover:scale-105 transition-transform duration-300"
                          style={{
                            animationDelay: `${itemIndex * 100}ms`,
                            opacity: 0,
                            animationFillMode: 'forwards'
                          }}
                        >
                          <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink" />
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

                      {/* Responsive cards grid */}
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
                              <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                              <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mx-auto w-[12.5rem] h-[13.75rem] flex items-center justify-center bg-gradient-to-br from-lumora-purple/10 to-lumora-pink/10 rounded-2xl border-2 border-dashed border-lumora-purple/30">
                      <p className="text-sm font-semibold text-lumora-purple">Coming Soon</p>
                    </div>
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
              Bring Calm to Your Calendar
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Stop feeling rushed. Start planning with purpose. Experience the difference when your calendar supports your wellbeing.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(125,59,180,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-20px_rgba(125,59,180,0.55)]"
            >
              Download Micro
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
