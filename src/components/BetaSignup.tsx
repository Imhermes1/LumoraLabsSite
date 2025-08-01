'use client'

import { useState, useEffect } from 'react'
import { Users, Star, Gift, ArrowRight } from 'lucide-react'
import BetaSignupModal from './BetaSignupModal'

export default function BetaSignup() {
  const [totalBetaSignups, setTotalBetaSignups] = useState(38)
  const [alphaTesterCount, setAlphaTesterCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const totalSlots = 100
  const alphaTesterSlots = 25
  const alphaTesterSpotsRemaining = Math.max(0, alphaTesterSlots - alphaTesterCount)

  const openBetaSignup = () => {
    setIsModalOpen(true)
  }

  // Fetch real data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/notion')
        const data = await response.json()
        if (data.success) {
          setTotalBetaSignups(data.count)
          setAlphaTesterCount(data.alphaTesterCount)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const progressPercentage = (totalBetaSignups / totalSlots) * 100

  return (
    <section id="beta" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="gradient-text">Beta Program</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join us in building the future of beautifully simple digital experiences.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-white">Beta Program Status</h3>
              <span className="text-lumora-pink font-bold text-lg">
                {totalBetaSignups}/{totalSlots} spots filled
              </span>
            </div>

            <div className="glass rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-lumora-pink to-lumora-purple transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <p className="text-center text-white/70 text-sm mt-2">
              {totalSlots - totalBetaSignups} spots remaining
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-lumora-pink/20 rounded-xl flex items-center justify-center">
                <Star className="text-lumora-pink" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Exclusive Early Access</h3>
              <p className="text-white/70 text-sm">
                Be the first to experience extraordinary features before public launch
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-lumora-purple/20 rounded-xl flex items-center justify-center">
                <Users className="text-lumora-purple" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Direct Influence</h3>
              <p className="text-white/70 text-sm">
                Your feedback directly shapes product development and feature roadmap
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-deep-purple/20 rounded-xl flex items-center justify-center">
                <Gift className="text-deep-purple" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Lifetime Benefits</h3>
              <p className="text-white/70 text-sm">
                50% discount on premium features for life, exclusive community access
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="glass rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-3">Beta Requirements:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-white/70 text-sm">• iOS 18+ or Android 13+</p>
                <p className="text-white/70 text-sm">• 2-3 hours per week testing</p>
                <p className="text-white/70 text-sm">• Weekly feedback sessions</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/70 text-sm">• NDA agreement required</p>
                <p className="text-white/70 text-sm">• Active community participation</p>
                <p className="text-white/70 text-sm">• Bug reports and suggestions</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openBetaSignup}
              className="group bg-gradient-to-r from-lumora-pink via-lumora-purple to-deep-purple rounded-full px-8 py-4 text-white font-bold text-lg hover:shadow-xl hover:shadow-lumora-purple/30 transition-all duration-300 inline-flex items-center"
            >
              Join Beta Program Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>

            <p className="text-white/60 text-sm mt-4">
              Secure your spot in the future of app innovation
            </p>
            
            {/* Privacy Notice */}
            <div className="mt-6 p-4 glass rounded-xl">
              <p className="text-white/60 text-xs text-center">
                Your data is securely stored in Notion and used solely for beta program management. 
                We respect your privacy and will never share your information with third parties.
              </p>
            </div>
          </div>
        </div>



        {/* Beta Signup Modal */}
        <BetaSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
