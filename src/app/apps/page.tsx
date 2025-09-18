import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, ChefHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apps - Lumora Labs',
  description: 'Discover Micro and Macro, the calm and intelligent apps crafted by Lumora Labs to organise your day and nourish your wellbeing.',
}

const imagePlaceholder = (
  <div className="flex h-56 items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/5 text-white/50">
    <span className="text-sm uppercase tracking-[0.3em]">Image Coming Soon</span>
  </div>
)

export default function AppsPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[70rem] bg-gradient-to-br from-lumora-pink/20 via-lumora-purple/20 to-transparent opacity-70" />
      </div>
      <div className="absolute inset-y-0 left-[-12rem] top-32 -z-10 hidden lg:block">
        <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-lumora-purple/15 via-transparent to-transparent blur-3xl" />
      </div>

      <header className="mx-auto mb-20 max-w-6xl px-6 sm:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Our <span className="gradient-text">Apps</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Explore how Micro and Macro keep your day organised and your wellbeing on track—calm, intelligent experiences from Lumora Labs.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-8">
        <section className="rounded-3xl border border-black/12 bg-[rgba(24,28,36,0.1)] p-8 md:p-12 backdrop-blur-xl shadow-[0_26px_64px_-35px_rgba(15,23,42,0.6)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                <ChefHat size={16} /> Macro
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Smarter nutrition, without the overwhelm
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Macro pairs <span className="text-vibrant">intuitive logging</span> with an AI coach that speaks your language. It suggests
                <span className="text-vibrant">balanced meals</span>, adapts shopping lists to your preferences, and highlights
                <span className="text-vibrant">meaningful progress</span> in a way that keeps you motivated—not meticulous.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-5 text-white/80">
                  <h3 className="text-sm font-semibold text-white">Guided meal ideas</h3>
                  <p className="mt-2 text-sm">
                    Quick suggestions that respect your dietary goals, sensitivities, and the groceries you actually buy.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-5 text-white/80">
                  <h3 className="text-sm font-semibold text-white">Effortless tracking</h3>
                  <p className="mt-2 text-sm">
                    Log by search, barcode, or AI-assisted prompts. Macro handles the details so you can focus on feeling good.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lumora-pink/15 via-lumora-purple/15 to-transparent blur-3xl" />
              <div className="relative w-full max-w-[85%] sm:max-w-[70%] lg:max-w-[55%] overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                <Image
                  src="/images/Macro_Screenshot_home.png"
                  alt="Macro app home screen"
                  width={828}
                  height={1792}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-black/12 bg-[rgba(24,28,36,0.1)] p-8 md:p-12 backdrop-blur-xl shadow-[0_26px_64px_-35px_rgba(15,23,42,0.6)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                <Calendar size={16} /> Micro
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Your day, beautifully orchestrated
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Micro blends <span className="text-vibrant">calendars</span>, <span className="text-vibrant">reminders</span>, and
                <span className="text-vibrant">habit loops</span> into a single purposeful interface. It preserves the reliability of the
                services you already trust while layering gentle nudges and calm rhythm over your week. Plan, prioritise, and reflect without
                bouncing between apps.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-5 text-white/80">
                  <h3 className="text-sm font-semibold text-white">Seamless integrations</h3>
                  <p className="mt-2 text-sm">
                    Syncs with Apple Calendar and Reminders today, with Google and Android integrations on the horizon.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-5 text-white/80">
                  <h3 className="text-sm font-semibold text-white">Habits that stick</h3>
                  <p className="mt-2 text-sm">
                    Layer intentional prompts over your schedule so daily routines become effortless, not overwhelming.
                  </p>
                </div>
              </div>
            </div>
            {imagePlaceholder}
          </div>
        </section>
      </main>
    </div>
  )
}
