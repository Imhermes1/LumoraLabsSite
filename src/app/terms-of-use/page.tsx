'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageShell from '@/components/PageShell'

export default function TermsOfUse() {
  return (
    <PageShell containerClassName="max-w-5xl">
      <header className="mb-8">
        <Link
          href="/"
          className="mb-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="text-center text-4xl font-semibold text-near-black sm:text-5xl">
          Terms of Use
        </h1>
      </header>

      <div className="bevel-card overflow-hidden rounded-3xl">
        <iframe
          src="https://lukef.craft.me/NNW98ExBcgbDRv"
          className="w-full h-[80vh] border-0"
          title="Terms of Use"
        />
      </div>
    </PageShell>
  )
}
