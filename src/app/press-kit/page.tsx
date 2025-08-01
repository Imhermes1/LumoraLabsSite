import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Camera, FileText, Download, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press Kit - Coming Soon - Lumora Labs',
  description: 'Press resources, media assets, and company information for journalists and media outlets covering Lumora Labs.',
  keywords: 'Lumora Labs, press kit, media, press release, assets, logos, screenshots, journalists',
}

export default function PressKitPage() {
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
              Press Kit - <span className="gradient-text">Coming Soon</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're preparing comprehensive press resources for journalists and media outlets. 
              Stay tuned for high-quality assets and company information.
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
                  Media Resources
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  We're working on creating a comprehensive press kit that will include everything 
                  journalists and media outlets need to cover Lumora Labs and our innovative apps.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our press kit will feature high-resolution logos, app screenshots, company information, 
                  and press releases to help tell our story accurately and beautifully.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <Camera className="text-lumora-purple mx-auto mb-4" size={48} />
                    <h3 className="text-white font-semibold text-xl mb-2">High-Quality Assets</h3>
                    <p className="text-white/70">
                      Professional logos, screenshots, and media assets that showcase our apps 
                      and brand in the best possible light.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What's Coming
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="text-lumora-pink" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Visual Assets</h3>
              <p className="text-white/70">
                High-resolution logos, app screenshots, and brand imagery in various formats 
                for different media needs.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lumora-purple/20 to-deep-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="text-lumora-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Company Info</h3>
              <p className="text-white/70">
                Comprehensive company information, team bios, and key facts about Lumora Labs 
                and our mission.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-purple/20 to-lumora-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="text-deep-purple" size={32} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Press Releases</h3>
              <p className="text-white/70">
                Official press releases, announcements, and media statements for major 
                company milestones and product launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Press Information Now?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              If you're a journalist or media outlet and need immediate access to press information, 
              please contact us directly. We're happy to provide what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about-us"
                className="inline-block bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full px-8 py-4 text-white font-semibold hover:shadow-lg hover:shadow-lumora-purple/25 transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="inline-block glass rounded-full px-8 py-4 text-white font-semibold hover:bg-lumora-purple/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 