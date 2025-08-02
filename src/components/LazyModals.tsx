'use client'

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Lazy load modals to improve initial page load performance
const BetaSignupModal = dynamic(() => import('./BetaSignupModal'), {
  ssr: false,
  loading: () => null
})

const AlphaRevealModal = dynamic(() => import('./AlphaRevealModal'), {
  ssr: false,
  loading: () => null
})

const ComingSoonModal = dynamic(() => import('./ComingSoonModal'), {
  ssr: false,
  loading: () => null
})

const CountdownOverlay = dynamic(() => import('./CountdownOverlay'), {
  ssr: false,
  loading: () => null
})

type BetaSignupModalProps = ComponentProps<typeof import('./BetaSignupModal').default>
type AlphaRevealModalProps = ComponentProps<typeof import('./AlphaRevealModal').default>
type ComingSoonModalProps = ComponentProps<typeof import('./ComingSoonModal').default>
type CountdownOverlayProps = ComponentProps<typeof import('./CountdownOverlay').default>

export const LazyBetaSignupModal = (props: BetaSignupModalProps) => (
  <BetaSignupModal {...props} />
)

export const LazyAlphaRevealModal = (props: AlphaRevealModalProps) => (
  <AlphaRevealModal {...props} />
)

export const LazyComingSoonModal = (props: ComingSoonModalProps) => (
  <ComingSoonModal {...props} />
)

export const LazyCountdownOverlay = (props: CountdownOverlayProps) => (
  <CountdownOverlay {...props} />
)