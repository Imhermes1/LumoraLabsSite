import { NextRequest, NextResponse } from 'next/server'
import { createBetaSignup, getBetaSignups } from '@/lib/notion'

export async function POST(request: NextRequest) {
  try {
    console.log('API route called')
    const body = await request.json()
    console.log('Request body:', body)
    
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

    console.log('Environment check:', {
      hasToken: !!process.env.NOTION_API_TOKEN,
      tokenLength: process.env.NOTION_API_TOKEN?.length,
      hasDatabaseId: !!process.env.NOTION_DATABASE_ID,
      databaseId: process.env.NOTION_DATABASE_ID,
      databaseIdLength: process.env.NOTION_DATABASE_ID?.length,
      allEnvVars: Object.keys(process.env).filter(key => key.includes('NOTION'))
    })

    // Validate required fields
    if (!name || !email) {
      console.log('Validation failed: missing name or email')
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    if (!betaTestInvites) {
      console.log('Validation failed: missing beta test invites')
      return NextResponse.json(
        { error: 'Beta test invites agreement is required' },
        { status: 400 }
      )
    }

    if (!appInvites || (!appInvites.macro && !appInvites.moodo)) {
      console.log('Validation failed: missing app invites')
      return NextResponse.json(
        { error: 'At least one app invite must be selected' },
        { status: 400 }
      )
    }

    if (!disclaimer) {
      console.log('Validation failed: missing disclaimer')
      return NextResponse.json(
        { error: 'Disclaimer agreement is required' },
        { status: 400 }
      )
    }

    console.log('All validation passed, creating signup...')

    // Test Notion API connection first
    try {
      console.log('Testing Notion API connection...')
      const { notion } = await import('@/lib/notion')
      const testResponse = await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID || '22b2ce9d9bf180a3868fd7a68da60bf0'
      })
      console.log('Notion API connection successful, database ID:', testResponse.id)
    } catch (testError: any) {
      console.error('Notion API connection test failed:', testError?.message)
      return NextResponse.json(
        { error: 'Notion API connection failed', details: testError?.message },
        { status: 500 }
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
      console.log('createBetaSignup returned null/undefined')
      return NextResponse.json(
        { error: 'Failed to create beta signup - function returned null' },
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
  } catch (error: any) {
    console.error('Notion API error:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      body: error?.body
    })
    return NextResponse.json(
      { error: 'Failed to submit beta signup', details: error?.message },
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