import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-[-26rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[72rem] bg-gradient-to-br from-lumora-pink/15 via-white/0 to-lumora-purple/10 opacity-70" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mt-10 glass-strong rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-600">Terms of service content will be added here.</p>
        </div>
      </div>
    </div>
  )
}
