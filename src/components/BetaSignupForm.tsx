'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  fullName: string
  googleEmail: string
  appleIdEmail: string
  betaTestInvites: string
  appInvites: {
    macro: boolean
    moodo: boolean
  }
  disclaimer: boolean
}

interface BetaSignupFormProps {
  onSuccess?: () => void
}

export default function BetaSignupForm({ onSuccess }: BetaSignupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    googleEmail: '',
    appleIdEmail: '',
    betaTestInvites: '',
    appInvites: {
      macro: false,
      moodo: false
    },
    disclaimer: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      if (name === 'macro' || name === 'moodo') {
        setFormData(prev => ({
          ...prev,
          appInvites: {
            ...prev.appInvites,
            [name]: checkbox.checked
          }
        }))
      } else if (name === 'disclaimer') {
        setFormData(prev => ({
          ...prev,
          disclaimer: checkbox.checked
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      betaTestInvites: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Validate required fields
    if (!formData.fullName) {
      setSubmitStatus('error')
      setErrorMessage('Full Name is required')
      setIsSubmitting(false)
      return
    }

    if (!formData.googleEmail && !formData.appleIdEmail) {
      setSubmitStatus('error')
      setErrorMessage('Please provide either a Google Email or Apple ID Email')
      setIsSubmitting(false)
      return
    }

    if (!formData.betaTestInvites) {
      setSubmitStatus('error')
      setErrorMessage('Please select whether you agree to receive Beta Test Invites')
      setIsSubmitting(false)
      return
    }

    if (!formData.appInvites.macro && !formData.appInvites.moodo) {
      setSubmitStatus('error')
      setErrorMessage('Please select at least one app invite')
      setIsSubmitting(false)
      return
    }

    if (!formData.disclaimer) {
      setSubmitStatus('error')
      setErrorMessage('You must agree to the disclaimer')
      setIsSubmitting(false)
      return
    }

    try {
      console.log('Submitting form data:', {
        name: formData.fullName,
        email: formData.googleEmail || formData.appleIdEmail,
        betaTestInvites: formData.betaTestInvites,
        appInvites: formData.appInvites,
        disclaimer: formData.disclaimer
      })

      const response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.googleEmail || formData.appleIdEmail,
          phone: '',
          device: '',
          experience: '',
          expectations: '',
          betaTestInvites: formData.betaTestInvites,
          appInvites: formData.appInvites,
          disclaimer: formData.disclaimer
        }),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          googleEmail: '',
          appleIdEmail: '',
          betaTestInvites: '',
          appInvites: {
            macro: false,
            moodo: false
          },
          disclaimer: false
        })
        if (onSuccess) {
          onSuccess()
        }
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-positive/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-positive" size={32} />
        </div>
        <h3 className="text-white font-semibold text-xl mb-2">
          Welcome to the Beta! 🎉
        </h3>
        <p className="text-white/70 text-sm mb-6">
          Thank you for joining our exclusive beta program. We'll be in touch soon with your early access details.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="glass-strong rounded-full px-6 py-3 text-white font-semibold hover:bg-lumora-purple/30 transition-all duration-300"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-white font-semibold text-lg mb-2">
          Sign up for the beta
        </h3>
        <p className="text-white/70 text-sm">
          Shape the next generation of apps
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-white/80 text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="Respondent's answer"
          />
        </div>

        {/* Google Email */}
        <div>
          <label htmlFor="googleEmail" className="block text-white/80 text-sm font-medium mb-2">
            Google Email
          </label>
          <input
            type="email"
            id="googleEmail"
            name="googleEmail"
            value={formData.googleEmail}
            onChange={handleInputChange}
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="Respondent's answer"
          />
        </div>

        {/* Apple ID Email */}
        <div>
          <label htmlFor="appleIdEmail" className="block text-white/80 text-sm font-medium mb-2">
            Apple ID Email
          </label>
          <input
            type="email"
            id="appleIdEmail"
            name="appleIdEmail"
            value={formData.appleIdEmail}
            onChange={handleInputChange}
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="Respondent's answer"
          />
        </div>

        {/* Beta Test Invites */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            I agree to receive Beta Test Invites
          </label>
          <p className="text-white/50 text-xs mb-3">(Respondents can select up to 1)</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="betaTestInvites"
                value="Yes"
                checked={formData.betaTestInvites === 'Yes'}
                onChange={() => handleRadioChange('Yes')}
                className="w-4 h-4 text-lumora-purple bg-white/10 border-white/30 focus:ring-lumora-purple/50"
              />
              <span className="text-white/70 text-sm">Yes</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="betaTestInvites"
                value="No"
                checked={formData.betaTestInvites === 'No'}
                onChange={() => handleRadioChange('No')}
                className="w-4 h-4 text-lumora-purple bg-white/10 border-white/30 focus:ring-lumora-purple/50"
              />
              <span className="text-white/70 text-sm">No</span>
            </label>
          </div>
        </div>

        {/* App Invites */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            App Invites
          </label>
          <p className="text-white/50 text-xs mb-3">(Respondents can select as many as they like)</p>
          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="macro"
                checked={formData.appInvites.macro}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-lumora-purple bg-white/10 border-white/30 rounded focus:ring-lumora-purple/50 focus:ring-2"
              />
              <span className="text-white/70 text-sm">
                Macro - AI Calorie Tracker & Nutritionist Coach with 95+% Accuracy
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="moodo"
                checked={formData.appInvites.moodo}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-lumora-purple bg-white/10 border-white/30 rounded focus:ring-lumora-purple/50 focus:ring-2"
              />
              <span className="text-white/70 text-sm">
                MooDo - Smart Tasks based on your mental health
              </span>
            </label>
          </div>
        </div>

        {/* Disclaimer */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Disclaimer *
          </label>
          <div className="glass rounded-xl p-4 mb-3">
            <p className="text-white/70 text-sm leading-relaxed">
              Beta access requires iOS 18+ or Android 13+ with compatible device. Limited availability subject to device compatibility, testing requirements, active participation commitment, and program terms. Beta software is in active development and may contain bugs, performance issues, and incomplete features.
            </p>
          </div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="disclaimer"
              checked={formData.disclaimer}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-lumora-purple bg-white/10 border-white/30 rounded focus:ring-lumora-purple/50 focus:ring-2"
            />
            <span className="text-white/70 text-sm">Agree</span>
          </label>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="glass rounded-xl p-4 border border-red-500/30">
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-red-400" size={20} />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full glass-strong rounded-xl px-6 py-4 text-white font-semibold text-lg hover:bg-lumora-purple/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
} 