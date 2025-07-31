# Notion API Integration Setup

This guide will help you set up the Notion database integration for the Lumora Labs beta signup system.

## Prerequisites

- A Notion account
- The Notion API token (you'll need to provide your own)

## Step 1: Create a Notion Database

1. Go to [notion.so](https://notion.so) and create a new page
2. Type `/database` and select "Table - Full page"
3. Name your database "Beta Signups" or similar

## Step 2: Configure Database Properties

Add the following properties to your database:

### Required Properties:
- **Name** (Title) - The primary title field
- **Email** (Email) - User's email address
- **Status** (Select) - Options: "New", "Contacted", "Approved", "Rejected"
- **Signup Date** (Date) - When the user signed up

### Optional Properties:
- **Phone** (Phone) - User's phone number
- **Device** (Select) - Options: "iPhone", "iPad", "Android Phone", "Android Tablet", "Mac", "Windows", "Multiple", "Not specified"
- **Experience** (Text) - User's experience with productivity apps
- **Expectations** (Text) - What they hope to achieve

## Step 3: Get Your Database ID

1. Open your database in Notion
2. Look at the URL in your browser
3. The database ID is the part after the last `/` and before the `?`
   - Example: `https://www.notion.so/workspace/your-database-id?v=...`
   - Copy the `your-database-id` part

## Step 4: Update the Configuration

1. Open `src/lib/notion.ts`
2. Replace `'your-database-id-here'` with your actual database ID:

```typescript
export const DATABASE_ID = 'your-actual-database-id'
```

3. Also update the same in `src/app/api/notion/route.ts` if needed.

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Go to your website and try submitting a beta signup
3. Check your Notion database to see if the entry was created

## Step 6: Environment Variables (Optional)

For better security in production, you can move the API token to environment variables:

1. Create a `.env.local` file in your project root
2. Add: `NOTION_API_TOKEN=your-notion-api-token-here`
3. The code already uses `process.env.NOTION_API_TOKEN`

## Troubleshooting

### Common Issues:

1. **"Invalid database ID" error**
   - Make sure you copied the correct database ID
   - Ensure the database is shared with your integration

2. **"Unauthorized" error**
   - Check that your API token is correct
   - Ensure the integration has access to the database

3. **"Property not found" error**
   - Verify that all required properties exist in your database
   - Check that property names match exactly (case-sensitive)

### Database Sharing:

Make sure your Notion database is shared with your integration:
1. Click "Share" in the top right of your database
2. Click "Invite" and search for your integration name
3. Give it "Can edit" permissions

## API Endpoints

- `POST /api/notion` - Submit a new beta signup
- `GET /api/notion` - Get all beta signups (for admin use)

## Features

- ✅ Real-time beta signup count display
- ✅ Custom form with validation
- ✅ Automatic Notion database integration
- ✅ Success/error handling
- ✅ Progress bar showing signup progress
- ✅ Responsive design

## Security Notes

- The API token is currently hardcoded for development
- For production, use environment variables
- Consider implementing rate limiting
- Add proper error handling for production use 