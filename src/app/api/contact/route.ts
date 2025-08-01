import { NextRequest, NextResponse } from 'next/server'
import { notion } from '@/lib/notion'

// Contact database ID - you'll need to create this in Notion
const CONTACT_DATABASE_ID = process.env.NOTION_CONTACT_DATABASE_ID || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, priority, category } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // If no contact database is configured, just return success
    if (!CONTACT_DATABASE_ID) {
      console.log('Contact form submission (no database configured):', { name, email, message, priority, category })
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully (database not configured)' 
        },
        { status: 200 }
      )
    }

    // Create contact entry in Notion
    const response = await notion.pages.create({
      parent: {
        database_id: CONTACT_DATABASE_ID,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        'Email': {
          email: email,
        },
        'Message': {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        'Submission Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
        'Status': {
          select: {
            name: 'New',
          },
        },
        'Priority': {
          select: {
            name: priority || 'Medium',
          },
        },
        'Category': {
          select: {
            name: category || 'General Question',
          },
        },
      },
    })

    console.log('Contact form submitted successfully:', response.id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: response.id
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Contact form submission error:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      body: error?.body
    })
    
    return NextResponse.json(
      { error: 'Failed to submit contact form', details: error?.message },
      { status: 500 }
    )
  }
} 