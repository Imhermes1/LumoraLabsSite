import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN || '',
})

// You'll need to replace this with your actual database ID
export const DATABASE_ID = 'your-database-id-here'

export interface BetaSignup {
  id: string
  name: string
  email: string
  phone?: string
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
      phone: page.properties.Phone?.phone_number || '',
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
        Phone: {
          phone_number: signupData.phone || '',
        },
        Device: {
          select: {
            name: signupData.device || 'Not specified',
          },
        },
        Experience: {
          rich_text: [
            {
              text: {
                content: signupData.experience || '',
              },
            },
          ],
        },
        Expectations: {
          rich_text: [
            {
              text: {
                content: signupData.expectations || '',
              },
            },
          ],
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

    return response.id
  } catch (error) {
    console.error('Error creating beta signup:', error)
    return null
  }
} 