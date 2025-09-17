import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Heart, Smartphone, Zap, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Lumora Labs',
  description: 'Learn about Lumora Labs, where light meets innovation. We create the world\'s most elegantly crafted and intuitively powerful apps for Apple and Android.',
  keywords: 'Lumora Labs, about us, mobile apps, iOS, Android, innovation, Melbourne, Australia',
}

export default function AboutUsPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[70rem] bg-gradient-to-br from-lumora-pink/20 via-lumora-purple/20 to-transparent opacity-70" />
      </div>
      <div className="absolute inset-y-0 right-[-12rem] top-16 -z-10 hidden lg:block">
        <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-lumora-purple/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              About <span className="gradient-text">Lumora Labs</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Where light meets innovation. We create the world's most elegantly crafted and intuitively powerful apps for Apple and Android.
            </p>
          </div>
        </header>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  At Lumora Labs, we believe technology should enhance your life, not complicate it. 
                  We're passionate about creating apps that are not just functional, but truly 
                  delightful to use.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Based in Melbourne, Australia, we're a team of designers, developers, and 
                  innovators who are committed to pushing the boundaries of what's possible 
                  in mobile technology.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lumora-pink/30 to-lumora-purple/25 rounded-2xl blur-xl"></div>
                <div className="relative rounded-2xl border border-black/60 bg-slate-950/80 p-8 backdrop-blur-xl">
                  <div className="text-center">
                    <Heart className="text-lumora-pink mx-auto mb-4" size={48} />
                    <h3 className="text-white font-semibold text-xl mb-2">Crafted with Love</h3>
                    <p className="text-white/70">
                      Every pixel, every interaction, every feature is thoughtfully designed 
                      to bring joy to your daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center border-black/60">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-lumora-pink" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Innovation</h3>
              <p className="text-white/70">
                We constantly push the boundaries of what's possible, exploring new technologies 
                and approaches to solve real-world problems.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center border-black/60">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-purple/20 to-deep-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-lumora-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">User-First</h3>
              <p className="text-white/70">
                Every decision we make starts with the user. We believe in creating experiences 
                that are intuitive, accessible, and genuinely helpful.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center border-black/60">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-purple/20 to-lumora-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-deep-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Excellence</h3>
              <p className="text-white/70">
                We don't settle for good enough. Every detail matters, from the code we write 
                to the pixels we place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Apps
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-lumora-pink/20 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="text-lumora-pink" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl">Micro</h3>
                  <p className="text-white/60 text-sm">Apple Calendar & Reminders, reimagined</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Micro brings your Apple Calendar, Reminders, and daily habits into one intuitive space. 
                It layers gentle guidance and wellbeing prompts over the native apps you already trust, 
                so planning the week, tracking routines, and staying accountable feels effortless.
              </p>
              <p className="mt-4 text-white/50 text-sm">
                <em>MooDo is now open-source. We’re sharing its ideas with the community while investing our product craft in Micro.</em>
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-positive/20 rounded-2xl flex items-center justify-center mr-4">
                  <Smartphone className="text-positive" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl">Macro</h3>
                  <p className="text-white/60 text-sm">Smart nutrition tracking with an AI coach</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Macro helps you understand what to eat next. Its AI coach suggests balanced meals, 
                builds practical grocery lists, and adapts to your goals and dietary preferences. 
                Track macros with ease, get bite-sized guidance, and make healthier choices without 
                overthinking every meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Revolution
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be among the first to experience our innovative apps. Join our exclusive 
              beta program and help shape the future of mobile technology.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full px-8 py-4 text-white font-semibold hover:shadow-lg hover:shadow-lumora-purple/25 transition-all duration-300"
            >
              Join Beta Program
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
