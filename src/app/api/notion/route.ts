import { NextRequest, NextResponse } from 'next/server'
import { createBetaSignup, getBetaSignups } from '@/lib/notion'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      device, 
      experience, 
      expectations,
      betaTestInvites,
      appInvites,
      disclaimer
    } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    if (!betaTestInvites) {
      return NextResponse.json(
        { error: 'Beta test invites agreement is required' },
        { status: 400 }
      )
    }

    if (!appInvites || (!appInvites.macro && !appInvites.moodo)) {
      return NextResponse.json(
        { error: 'At least one app invite must be selected' },
        { status: 400 }
      )
    }

    if (!disclaimer) {
      return NextResponse.json(
        { error: 'Disclaimer agreement is required' },
        { status: 400 }
      )
    }

    // Create a new beta signup using our utility function
    const signupId = await createBetaSignup({
      name,
      email,
      phone: phone || '',
      device: device || '',
      experience: experience || '',
      expectations: expectations || '',
      status: 'New',
    })

    if (!signupId) {
      return NextResponse.json(
        { error: 'Failed to create beta signup' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Beta signup successful!',
        id: signupId 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit beta signup' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Get all beta signups using our utility function
    const signups = await getBetaSignups()

    return NextResponse.json({
      success: true,
      count: signups.length,
      entries: signups,
    })
  } catch (error) {
    console.error('Notion API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch beta signups' },
      { status: 500 }
    )
  }
} 