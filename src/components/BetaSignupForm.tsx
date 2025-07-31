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
  const [debugInfo, setDebugInfo] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({})
  const [showBetaWarning, setShowBetaWarning] = useState(false)
  const [isAlphaTester, setIsAlphaTester] = useState(false)

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
        // Clear field error when they make a selection
        setFieldErrors(prev => ({ ...prev, appInvites: '' }))
      } else if (name === 'disclaimer') {
        setFormData(prev => ({
          ...prev,
          disclaimer: checkbox.checked
        }))
        // Clear field error when they check disclaimer
        setFieldErrors(prev => ({ ...prev, disclaimer: '' }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
      // Clear field error when they type
      setFieldErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      betaTestInvites: value
    }))
    
    // Show warning if they select "No" to beta invites
    if (value === 'No') {
      setShowBetaWarning(true)
    } else {
      setShowBetaWarning(false)
    }
    
    // Clear field error when they make a selection
    setFieldErrors(prev => ({ ...prev, betaTestInvites: '' }))
  }

  // Function to check if form is valid
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      (formData.googleEmail.trim() !== '' || formData.appleIdEmail.trim() !== '') &&
      formData.betaTestInvites === 'Yes' && // Must be "Yes" for TestFlight
      (formData.appInvites.macro || formData.appInvites.moodo) &&
      formData.disclaimer
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    setFieldErrors({})

    // Validate required fields with specific error messages
    const errors: {[key: string]: string} = {}
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required'
    }

    if (!formData.googleEmail.trim() && !formData.appleIdEmail.trim()) {
      errors.email = 'Please provide either a Google Email or Apple ID Email'
    }

    if (!formData.betaTestInvites) {
      errors.betaTestInvites = 'Please select whether you agree to receive Beta Test Invites'
    } else if (formData.betaTestInvites === 'No') {
      errors.betaTestInvites = 'You must agree to receive Beta Test Invites to participate in the TestFlight beta program'
    }

    if (!formData.appInvites.macro && !formData.appInvites.moodo) {
      errors.appInvites = 'Please select at least one app invite'
    }

    if (!formData.disclaimer) {
      errors.disclaimer = 'You must agree to the disclaimer'
    }

    // If there are validation errors, show them and stop submission
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setSubmitStatus('error')
      setErrorMessage('Please fix the errors above')
      setIsSubmitting(false)
      return
    }

    try {
      const formDataToSend = {
        name: formData.fullName,
        email: formData.googleEmail || formData.appleIdEmail,
        betaTestInvites: formData.betaTestInvites,
        appInvites: formData.appInvites,
        disclaimer: formData.disclaimer
      }
      
      console.log('Submitting form data:', formDataToSend)
      setDebugInfo(`Submitting form data: ${JSON.stringify(formDataToSend, null, 2)}`)

      const response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          googleEmail: formData.googleEmail,
          appleIdEmail: formData.appleIdEmail,
          betaTestInvites: formData.betaTestInvites,
          appInvites: formData.appInvites,
          disclaimer: formData.disclaimer
        }),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)
      
      setDebugInfo(prev => prev + `\n\nResponse status: ${response.status}\nResponse data: ${JSON.stringify(data, null, 2)}`)

      if (response.ok) {
        setSubmitStatus('success')
        setIsAlphaTester(data.isAlphaTester || false)
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
      setDebugInfo(prev => prev + `\n\nError: ${error}`)
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
        
        {isAlphaTester ? (
          <>
            <div className="mb-4 p-4 bg-gradient-to-r from-lumora-pink/20 to-lumora-purple/20 rounded-2xl border border-lumora-pink/30">
              <div className="flex items-center justify-center mb-2">
                <span className="text-lumora-pink font-bold text-2xl mr-2">α</span>
                <h3 className="text-white font-bold text-xl">Alpha Tester Status Unlocked!</h3>
              </div>
              <p className="text-lumora-pink font-semibold text-sm">You're one of the first 25!</p>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">
              Welcome to the Alpha! 🎉
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Congratulations! You've secured Alpha Tester status with exclusive benefits:
            </p>
            <div className="space-y-2 mb-6 text-left max-w-sm mx-auto">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-lumora-pink rounded-full"></div>
                <span className="text-white/80 text-sm">50% discount at launch</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-lumora-purple rounded-full"></div>
                <span className="text-white/80 text-sm">Priority early access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-deep-purple rounded-full"></div>
                <span className="text-white/80 text-sm">Direct support channel</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-white font-semibold text-xl mb-2">
              Welcome to the Beta! 🎉
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Thank you for joining our exclusive beta program. We'll be in touch soon with your early access details.
            </p>
          </>
        )}
        
        <button
          onClick={() => window.location.href = '/'}
          className="glass-strong rounded-full px-6 py-3 text-white font-semibold hover:bg-lumora-purple/30 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-white/70 text-sm">
          Join our exclusive beta program and be among the first to experience our innovative apps. Help us shape the future of mobile technology while gaining early access to cutting-edge features and personalized experiences.
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
            className={`w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
              fieldErrors.fullName 
                ? 'focus:ring-red-500/50 border border-red-500/30' 
                : 'focus:ring-lumora-purple/50'
            }`}
            placeholder="Respondent's answer"
          />
          {fieldErrors.fullName && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.fullName}</p>
          )}
        </div>

        {/* Email Fields */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Email Address *
          </label>
          <p className="text-white/50 text-xs mb-3">Please provide at least one email address</p>
          
          {/* Google Email */}
          <div className="mb-3">
            <input
              type="email"
              id="googleEmail"
              name="googleEmail"
              value={formData.googleEmail}
              onChange={handleInputChange}
              className={`w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                fieldErrors.email 
                  ? 'focus:ring-red-500/50 border border-red-500/30' 
                  : 'focus:ring-lumora-purple/50'
              }`}
              placeholder="Google Email (optional)"
            />
          </div>

          {/* Apple ID Email */}
          <div>
            <input
              type="email"
              id="appleIdEmail"
              name="appleIdEmail"
              value={formData.appleIdEmail}
              onChange={handleInputChange}
              className={`w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                fieldErrors.email 
                  ? 'focus:ring-red-500/50 border border-red-500/30' 
                  : 'focus:ring-lumora-purple/50'
              }`}
              placeholder="Apple ID Email (optional)"
            />
          </div>
          
          {fieldErrors.email && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* Beta Test Invites */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            I agree to receive Beta Test Invites *
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
          {fieldErrors.betaTestInvites && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.betaTestInvites}</p>
          )}
        </div>

        {/* Beta Warning */}
        {showBetaWarning && (
          <div className="glass rounded-xl p-4 border border-red-500/30">
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-red-400" size={20} />
              <p className="text-red-400 text-sm">
                <strong>Important:</strong> TestFlight beta access requires email invitations. If you don't agree to receive beta invites, you cannot participate in the beta program.
              </p>
            </div>
          </div>
        )}

        {/* App Invites */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            App Invites *
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
          {fieldErrors.appInvites && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.appInvites}</p>
          )}
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
          {fieldErrors.disclaimer && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.disclaimer}</p>
          )}
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

        {/* Debug Information */}
        {debugInfo && (
          <div className="glass rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-blue-400 text-sm font-semibold">Debug Information:</h4>
              <button
                type="button"
                onClick={() => setDebugInfo('')}
                className="text-blue-400 hover:text-blue-300 text-xs"
              >
                Clear Debug
              </button>
            </div>
            <pre className="text-blue-300 text-xs whitespace-pre-wrap overflow-x-auto">
              {debugInfo}
            </pre>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
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