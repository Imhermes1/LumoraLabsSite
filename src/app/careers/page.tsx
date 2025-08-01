import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, Zap, Star, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - Coming Soon - Lumora Labs',
  description: 'Join our team at Lumora Labs. We\'re always looking for talented individuals who share our passion for innovation and excellence.',
  keywords: 'Lumora Labs, careers, jobs, employment, Melbourne, Australia, mobile apps, iOS, Android',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="mb-8">
              <Clock className="text-lumora-pink mx-auto mb-4" size={64} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers - <span className="gradient-text">Coming Soon</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're building an amazing team to revolutionize mobile technology. 
              Stay tuned for exciting opportunities to join Lumora Labs.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Join Our Mission
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  At Lumora Labs, we're passionate about creating technology that enhances people's lives. 
                  We're looking for talented individuals who share our vision and want to make a difference.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Based in Melbourne, Australia, we offer a collaborative environment where innovation 
                  thrives and every team member has the opportunity to shape the future of mobile technology.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <Users className="text-lumora-purple mx-auto mb-4" size={48} />
                    <h3 className="text-white font-semibold text-xl mb-2">Amazing Team</h3>
                    <p className="text-white/70">
                      Work with passionate designers, developers, and innovators who are committed 
                      to excellence and pushing boundaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What We're Looking For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-lumora-pink" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Innovators</h3>
              <p className="text-white/70">
                People who think outside the box and aren't afraid to challenge the status quo. 
                We value creativity and fresh perspectives.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-purple/20 to-deep-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-lumora-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Collaborators</h3>
              <p className="text-white/70">
                Team players who thrive in collaborative environments and believe that the best 
                solutions come from working together.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-purple/20 to-lumora-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-deep-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Excellence Seekers</h3>
              <p className="text-white/70">
                Individuals who are passionate about quality and don't settle for good enough. 
                We believe every detail matters.
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
              Get Notified
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know when we open positions. Join our beta program to stay connected 
              and get early access to career opportunities.
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
  )
} 