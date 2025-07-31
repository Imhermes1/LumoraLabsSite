import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN || '',
})

// Your Notion database ID
export const DATABASE_ID = process.env.NOTION_DATABASE_ID || '22b2ce9d9bf180a3868fd7a68da60bf0'

export interface BetaSignup {
  id: string
  name: string
  email: string
  device?: string
  experience?: string
  expectations?: string
  status: string
  signupDate: string
}

export async function getBetaSignups(): Promise<BetaSignup[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: 'Signup Date',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      name: page.properties.Name?.title?.[0]?.text?.content || '',
      email: page.properties.Email?.email || '',
      device: page.properties.Device?.select?.name || '',
      experience: page.properties.Experience?.rich_text?.[0]?.text?.content || '',
      expectations: page.properties.Expectations?.rich_text?.[0]?.text?.content || '',
      status: page.properties.Status?.select?.name || 'New',
      signupDate: page.properties['Signup Date']?.date?.start || '',
    }))
  } catch (error) {
    console.error('Error fetching beta signups:', error)
    return []
  }
}

export async function createBetaSignup(signupData: Omit<BetaSignup, 'id' | 'signupDate'>): Promise<string | null> {
  try {
    console.log('Creating beta signup with data:', signupData)
    console.log('Environment check in createBetaSignup:', {
      hasToken: !!process.env.NOTION_API_TOKEN,
      tokenLength: process.env.NOTION_API_TOKEN?.length,
      databaseId: DATABASE_ID,
      databaseIdLength: DATABASE_ID.length
    })

    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: signupData.name,
              },
            },
          ],
        },
        Email: {
          email: signupData.email,
        },

        Device: signupData.device ? {
          select: {
            name: signupData.device,
          },
        } : {
          select: null,
        },
        Experience: {
          rich_text: signupData.experience ? [
            {
              text: {
                content: signupData.experience,
              },
            },
          ] : [],
        },
        Expectations: {
          rich_text: signupData.expectations ? [
            {
              text: {
                content: signupData.expectations,
              },
            },
          ] : [],
        },
        Status: {
          select: {
            name: signupData.status || 'New',
          },
        },
        'Signup Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    })

    console.log('Successfully created beta signup with ID:', response.id)
    return response.id
  } catch (error: any) {
    console.error('Error creating beta signup:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      body: error?.body
    })
    return null
  }
} 