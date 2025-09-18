'use client'

import dynamic from 'next/dynamic'

// Lazy load modals to improve initial page load performance
// Export directly without wrapper components to avoid webpack issues
export const LazyBetaSignupModal = dynamic(() => import('./BetaSignupModal'), {
  ssr: false,
  loading: () => null
})

export const LazyAlphaRevealModal = dynamic(() => import('./AlphaRevealModal'), {
  ssr: false,
  loading: () => null
})

export const LazyComingSoonModal = dynamic(() => import('./ComingSoonModal'), {
  ssr: false,
  loading: () => null
})