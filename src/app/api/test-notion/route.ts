import { NextResponse } from 'next/server'
import { notion } from '@/lib/notion'

const CONTACT_DATABASE_ID = process.env.NOTION_CONTACT_DATABASE_ID || ''

export async function GET() {
  try {
    console.log('Testing Notion connection...')
    console.log('Database ID:', CONTACT_DATABASE_ID)
    
    if (!CONTACT_DATABASE_ID) {
      return NextResponse.json(
        { error: 'No database ID configured' },
        { status: 400 }
      )
    }

    // Clean the database ID
    const cleanDatabaseId = CONTACT_DATABASE_ID.replace(/-/g, '')
    console.log('Clean Database ID:', cleanDatabaseId)

    // Ensure the database ID is properly formatted without any hyphens
    const finalDatabaseId = cleanDatabaseId.replace(/[^a-f0-9]/g, '')
    console.log('Final Database ID being sent to Notion:', finalDatabaseId)

    // Try to retrieve the database
    const database = await notion.databases.retrieve({
      database_id: finalDatabaseId,
    })

    console.log('Database retrieved successfully:', database)
    
    return NextResponse.json({
      success: true,
      database: {
        id: database.id,
        properties: Object.keys(database.properties)
      }
    })

  } catch (error: any) {
    console.error('Notion test error:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      body: error?.body
    })
    
    return NextResponse.json({
      error: 'Database access failed',
      details: error?.message,
      code: error?.code,
      status: error?.status
    }, { status: 500 })
  }
} 