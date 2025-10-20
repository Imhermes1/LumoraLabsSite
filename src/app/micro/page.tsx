import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import PageShell from '@/components/PageShell'

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
          Your Day, <span className="gradient-text">Beautifully Orchestrated</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Blend calendars, reminders, and habit loops into a single purposeful interface. Plan, prioritise, and reflect with gentle prompts and calm rhythm.
        </p>
      </header>

      <main className="flex flex-col gap-12">
        {/* Hero Image */}
        <section className="relative mb-8">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lumora-purple/20 via-transparent to-lumora-pink/20 blur-3xl" />
          <div className="page-panel relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-8">
            <Image
              src="/images/microprev.PNG"
              alt="Micro app - Calendar and planning"
              width={1200}
              height={600}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </section>

        {/* Main Description */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Planning That Feels Effortless
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Micro blends calendars, reminders, and habit loops into a single purposeful interface. It layers gentle prompts and calm rhythm over your week so planning, prioritising, and reflecting feel effortless—not overwhelming.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Seamless Integrations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Micro works with your existing tools, not against them.
          </p>

          <div className="mt-8 overflow-x-auto pb-4 -mx-8 md:-mx-12 px-8 md:px-12">
            <div className="flex gap-4 min-w-min">
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Syncs with Apple Calendar and Reminders today</p>
                </div>
              </div>
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Google and Android integrations on the horizon</p>
                </div>
              </div>
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Your data stays yours—secure and private</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habits Section */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Habits That Stick
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Build routines that become steady progress, not pressure. Micro's intelligent prompting system helps you stay consistent without feeling intrusive.
          </p>

          <div className="mt-8 overflow-x-auto pb-4 -mx-8 md:-mx-12 px-8 md:px-12">
            <div className="flex gap-4 min-w-min">
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Add intentional prompts to your schedule</p>
                </div>
              </div>
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Track habit completion and progress</p>
                </div>
              </div>
              <div className="page-card-subtle flex-shrink-0 w-72 rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700">Celebrate wins and stay motivated</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Features */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Purposeful Planning
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            More than just a calendar. Micro helps you see your week, prioritise what matters, and reflect on what you've accomplished.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="page-card-subtle rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-base font-semibold text-gray-900">Weekly View</h3>
              <p className="mt-3 text-sm text-gray-600">
                See your entire week at a glance. Understand your rhythm and spot opportunities for balance.
              </p>
            </div>
            <div className="page-card-subtle rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-base font-semibold text-gray-900">Daily Focus</h3>
              <p className="mt-3 text-sm text-gray-600">
                Focus on today's priorities without distraction. Gentle reminders keep you on track.
              </p>
            </div>
            <div className="page-card-subtle rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-base font-semibold text-gray-900">Smart Notifications</h3>
              <p className="mt-3 text-sm text-gray-600">
                Get reminded at the right time, in the right way. Never miss what matters.
              </p>
            </div>
            <div className="page-card-subtle rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-base font-semibold text-gray-900">Reflection Time</h3>
              <p className="mt-3 text-sm text-gray-600">
                Built-in moments to reflect on your week and celebrate progress made.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="page-surface rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Why Choose Micro?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Most calendar apps just store events. Micro helps you live intentionally—with calm, rhythm, and purpose woven into every interaction.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-r from-lumora-purple/5 to-transparent">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink mt-2 flex-shrink-0" />
              <p className="text-gray-700">Designed for your wellbeing, not engagement metrics</p>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-r from-lumora-purple/5 to-transparent">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink mt-2 flex-shrink-0" />
              <p className="text-gray-700">Beautiful, intuitive interface that gets out of your way</p>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-r from-lumora-purple/5 to-transparent">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink mt-2 flex-shrink-0" />
              <p className="text-gray-700">Works with Apple Calendar and Reminders seamlessly</p>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-r from-lumora-purple/5 to-transparent">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-lumora-purple to-lumora-pink mt-2 flex-shrink-0" />
              <p className="text-gray-700">Your data is encrypted and stays completely private</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-surface rounded-3xl p-8 md:p-12 text-center">
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
        </section>
      </main>
    </PageShell>
  )
}
