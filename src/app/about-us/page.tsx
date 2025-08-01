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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Lumora Labs</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Where light meets innovation. We create the world's most elegantly crafted and 
              intuitively powerful apps for Apple and Android.
            </p>
          </div>
        </div>
      </div>

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
                <div className="absolute inset-0 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
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
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-lumora-pink" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Innovation</h3>
              <p className="text-white/70">
                We constantly push the boundaries of what's possible, exploring new technologies 
                and approaches to solve real-world problems.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-purple/20 to-deep-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-lumora-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">User-First</h3>
              <p className="text-white/70">
                Every decision we make starts with the user. We believe in creating experiences 
                that are intuitive, accessible, and genuinely helpful.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
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
                  <h3 className="text-white font-semibold text-xl">MooDo</h3>
                  <p className="text-white/60 text-sm">Smart Tasks based on your mental health</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Transformative task management that adapts to your emotional rhythm. 
                Work with your emotions, not against them. MooDo understands that your 
                productivity is deeply connected to your mental well-being.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-positive/20 rounded-2xl flex items-center justify-center mr-4">
                  <Smartphone className="text-positive" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl">Macro</h3>
                  <p className="text-white/60 text-sm">AI Calorie Tracker & Nutritionist Coach</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Powered by GPT-4, delivering precise nutrition tracking built for the way 
                Australians eat. Macro combines cutting-edge AI with deep nutritional 
                knowledge to help you achieve your health goals.
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
  )
} 