import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'

export default function Support() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-[-26rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[72rem] bg-gradient-to-br from-lumora-pink/15 via-white/0 to-lumora-purple/10 opacity-70" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mt-10 glass-strong rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Customer Support
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Need help with Macro or Micro? We're here to assist you.
          </p>
          <div className="glass rounded-2xl p-6 inline-block">
            <div className="flex items-center gap-3">
              <Mail className="text-lumora-pink" size={24} />
              <div>
                <p className="text-gray-900 font-semibold">Email Support</p>
                <a href="mailto:lumos@lumoralabs.io" className="text-lumora-pink hover:text-lumora-purple transition-colors">
                  lumos@lumoralabs.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
