import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN || '',
})

// Your Notion database ID
export const DATABASE_ID = process.env.NOTION_DATABASE_ID || '22b2ce9d9bf180a3868fd7a68da60bf0'

export interface BetaSignup {
  id: string
  fullName: string
  appleIdEmail?: string
  googleEmail?: string
  betaTestInvites?: string
  appInvites?: string
  disclaimer?: boolean
  submissionTime: string
}

export async function getBetaSignups(): Promise<BetaSignup[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: 'Submission time',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      fullName: page.properties['Full Name']?.title?.[0]?.text?.content || '',
      appleIdEmail: page.properties['Apple ID Email']?.email || '',
      googleEmail: page.properties['Google Email']?.email || '',
      betaTestInvites: page.properties['I agree to receive Beta Test Invites']?.multi_select?.[0]?.name || '',
      appInvites: page.properties['App Invites ']?.multi_select?.[0]?.name || '',
      disclaimer: page.properties['Disclaimer']?.checkbox || false,
      submissionTime: page.properties['Submission time']?.date?.start || '',
      alphaTester: page.properties['Alpha Tester']?.rich_text?.[0]?.text?.content || 'No',
    }))
  } catch (error) {
    console.error('Error fetching beta signups:', error)
    return []
  }
}

export async function getAlphaTesterCount(): Promise<number> {
  try {
    const signups = await getBetaSignups()
    return signups.filter(signup => signup.alphaTester === 'Yes').length
  } catch (error) {
    console.error('Error getting alpha tester count:', error)
    return 0
  }
}

export async function createBetaSignup(signupData: {
  fullName: string
  appleIdEmail?: string
  googleEmail?: string
  betaTestInvites?: string
  appInvites?: {
    macro: boolean
    moodo: boolean
  }
  disclaimer?: boolean
}): Promise<{ id: string | null; isAlphaTester: boolean }> {
  try {
    console.log('Creating beta signup with data:', signupData)
    console.log('Environment check in createBetaSignup:', {
      hasToken: !!process.env.NOTION_API_TOKEN,
      tokenLength: process.env.NOTION_API_TOKEN?.length,
      databaseId: DATABASE_ID,
      databaseIdLength: DATABASE_ID.length
    })

    // Check current signup count to determine Alpha Tester status
    const currentSignups = await getBetaSignups()
    const isAlphaTester = currentSignups.length < 25

    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        'Full Name': {
          title: [
            {
              text: {
                content: signupData.fullName,
              },
            },
          ],
        },
        'Apple ID Email': signupData.appleIdEmail ? {
          email: signupData.appleIdEmail,
        } : {
          email: null,
        },
        'Google Email': signupData.googleEmail ? {
          email: signupData.googleEmail,
        } : {
          email: null,
        },
        'I agree to receive Beta Test Invites': signupData.betaTestInvites ? {
          multi_select: [
            {
              name: signupData.betaTestInvites,
            },
          ],
        } : {
          multi_select: [],
        },
        'App Invites ': {
          multi_select: [
            ...(signupData.appInvites?.macro ? [{ name: 'Macro' }] : []),
            ...(signupData.appInvites?.moodo ? [{ name: 'MooDo' }] : []),
          ],
        },
        'Disclaimer': {
          checkbox: signupData.disclaimer || false,
        },
        'Submission time': {
          date: {
            start: new Date().toISOString(),
          },
        },
        'Alpha Tester': {
          rich_text: [
            {
              text: {
                content: isAlphaTester ? 'Yes' : 'No',
              },
            },
          ],
        },
      },
    })

    console.log('Successfully created beta signup with ID:', response.id)
    console.log('Alpha Tester status:', isAlphaTester)
    return { id: response.id, isAlphaTester }
  } catch (error: any) {
    console.error('Error creating beta signup:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      body: error?.body
    })
    return { id: null, isAlphaTester: false }
  }
}