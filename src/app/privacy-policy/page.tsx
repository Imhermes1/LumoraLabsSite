import React from 'react'
import { Metadata } from 'next'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy - Lumora Labs',
  description:
    "Privacy Policy for Lumora Labs. Learn how we collect, use, and protect your personal information.",
  keywords: 'privacy policy, data protection, GDPR, privacy, Lumora Labs',
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
