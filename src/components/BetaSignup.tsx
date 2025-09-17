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

        <div className="rounded-3xl border border-black/12 bg-[rgba(24,28,36,0.1)] p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-xl shadow-[0_26px_64px_-35px_rgba(15,23,42,0.6)]">

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-white">Beta Program Status</h3>
              <span className="text-lumora-pink font-bold text-lg">
                {totalBetaSignups}/{totalSlots} spots filled
              </span>
            </div>

            <div className="rounded-full h-3 overflow-hidden border border-black/20 bg-[rgba(24,28,36,0.25)]">
              <div 
                className="h-full bg-gradient-to-r from-lumora-pink to-lumora-purple transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <p className="text-center text-white/70 text-sm mt-2">
              {totalSlots - totalBetaSignups} spots remaining
            </p>
          </div>

          {/* App Cards */}
          <div className="grid gap-6 mb-8">
            <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 md:p-8 backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-positive/40 bg-positive/15 flex items-center justify-center">
                    <Star className="text-positive" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Macro</h3>
                    <p className="text-white/60 text-sm">Smarter nutrition with an AI coach</p>
                  </div>
                </div>
                <span className="text-positive text-sm font-semibold">22/50 filled</span>
              </div>
              <p className="mt-4 text-sm text-white/70">
                Macro suggests <span className="text-vibrant">balanced meals</span>, adapts grocery lists to your preferences, and highlights
                progress in a way that keeps you motivated—not meticulous.
              </p>
            </div>

            <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 md:p-8 backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-lumora-pink/40 bg-lumora-pink/15 flex items-center justify-center">
                    <Gift className="text-lumora-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Micro</h3>
                    <p className="text-white/60 text-sm">Calendars, tasks, and habits working as one</p>
                  </div>
                </div>
                <span className="text-lumora-pink text-sm font-semibold">16/50 filled</span>
              </div>
              <p className="mt-4 text-sm text-white/70">
                Micro layers <span className="text-vibrant">gentle prompts</span> and <span className="text-vibrant">clarity</span> over the services you already trust,
                helping you plan, prioritise, and reflect without bouncing between apps.
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-3xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-6 mb-8 backdrop-blur-xl shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)]">
            <h3 className="text-white font-semibold mb-3">Beta requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-white/70">
              <ul className="space-y-2">
                <li>• iOS 18+ or Android 13+</li>
                <li>• 2-3 hours per week testing</li>
                <li>• Weekly feedback sessions</li>
              </ul>
              <ul className="space-y-2">
                <li>• NDA agreement required</li>
                <li>• Active community participation</li>
                <li>• Bug reports and suggestions</li>
              </ul>
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
            <div className="mt-6 rounded-2xl border border-black/15 bg-[rgba(24,28,36,0.12)] p-4">
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
