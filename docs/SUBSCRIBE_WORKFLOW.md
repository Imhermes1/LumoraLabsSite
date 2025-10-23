Subscribe + Email Workflow (Supabase + Resend + PostHog + Notion)

This document describes a minimal, practical implementation to capture user signups from the About page (single click / one-field form), confirm opt-in, record events for analytics, and send release/beta announcement emails. It uses the stack you already mentioned: Supabase, Resend, PostHog, and Notion (optional sync).

Contents
- Goals
- Recommended stack
- Database schema (Supabase)
- Environment variables
- API routes (subscribe, confirm, unsubscribe)
- Client snippet (one-click signup)
- Sending announcement emails (server-side batching)
- PostHog and Notion sync
- Security & compliance notes
- Alternatives and scaling notes

Goals
- Let a visitor click a single CTA "Get updates" and register an email (fast, no auth required).
- Use double opt-in (confirmation email) to ensure consent and quality of addresses.
- Store subscribers in Supabase (single source of truth).
- Use Resend to deliver emails.
- Track interactions in PostHog.
- Optionally sync new subscribers to Notion for manual review.

Recommended stack
- Supabase: store subscribers, query recipients for campaigns.
- Resend: send transactional emails, templates, good deliverability.
- PostHog: track signup and confirmation funnel events.
- Notion: optional manual CRM (sync from Supabase via automation).

1) Supabase table
Run this SQL in Supabase SQL editor (uses pgcrypto extension for gen_random_uuid() — Supabase has it enabled by default):

```sql
CREATE TABLE public.subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  subscribed boolean DEFAULT true,
  confirmation_token text,
  confirmed boolean DEFAULT false,
  unsubscribed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  metadata jsonb
);

CREATE INDEX ON public.subscribers (confirmed, unsubscribed);
```

Fields explained
- confirmation_token: random token for double opt-in and unsubscribe links.
- confirmed / unsubscribed: boolean states for filtering target recipients.
- metadata: store source, utm params, PostHog distinct id if needed.

2) Environment variables (example names)
- NEXT_PUBLIC_SITE_URL=https://your-site.com
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY (server-only; never expose to client)
- RESEND_API_KEY
- POSTHOG_API_KEY (or POSTHOG_PROJECT_API_KEY for server-side ingestion)
- NOTION_TOKEN and NOTION_DB_ID (if you plan to sync to Notion)

3) Subscribe API route (server)
- Endpoint: POST /api/subscribe
- Responsibilities:
  - Validate email (basic check)
  - Upsert subscriber row in Supabase with new confirmation_token
  - Send confirmation email via Resend (include confirmation link)
  - Track event to PostHog

Minimal Node/Next.js (server) example (TypeScript-like):

```ts
// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import fetch from 'node-fetch'
import { v4 as uuidv4 } from 'uuid'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email, name, source } = req.body
  if (!email) return res.status(400).json({ error: 'email required' })

  const token = uuidv4()

  await supabase.from('subscribers').upsert({
    email: email.toLowerCase(),
    name: name || null,
    confirmation_token: token,
    confirmed: false,
    unsubscribed: false,
    metadata: { source }
  }, { onConflict: 'email' })

  // Send confirmation via Resend
  const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/confirm?token=${token}`
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Lumora Labs <lumos@yourdomain.com>',
      to: email,
      subject: 'Confirm your Lumora updates',
      html: `<p>Thanks — click to confirm: <a href="${confirmUrl}">Confirm subscription</a></p>`
    })
  })

  // Log to PostHog (server-side capture)
  try {
    await fetch('https://app.posthog.com/capture/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: process.env.POSTHOG_API_KEY, event: 'signup_clicked', properties: { email, source } })
    })
  } catch (e) { console.warn('posthog failed', e) }

  return res.status(200).json({ ok: true })
}
```

Notes
- Use a service-role Supabase key only on server-side routes.
- Keep confirmation email simple; include clear unsubscribe link too.

4) Confirm & Unsubscribe endpoints
- /api/confirm?token=... — mark confirmed=true and set confirmed_at.
- /api/unsubscribe?token=... — set unsubscribed=true and unsubscribed_at.

Example confirm flow:
```ts
// pages/api/confirm.ts
const { data } = await supabase
  .from('subscribers')
  .update({ confirmed: true, confirmed_at: new Date().toISOString() })
  .eq('confirmation_token', token)
```

Unsubscribe flow similar — include token in every email's footer as `https://your-site.com/api/unsubscribe?token=...`.

5) Client: one-click signup (About page)
- Use the existing "Get updates" button to open a small modal or inline email field.
- Minimal snippet (React):

```tsx
async function subscribe(email) {
  const r = await fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email, source: 'about-page' }) })
  if (r.ok) { /* show check UI: "Check your email to confirm" */ }
}
```

6) Sending release announcement emails (server-side)
- Admin script: query Supabase for confirmed && not unsubscribed. Send via Resend in small batches.
- Example (Node):

```js
const BATCH = 100
const subs = await supabase.from('subscribers').select('email,name').eq('confirmed', true).is('unsubscribed', false)
for (let i = 0; i < subs.length; i += BATCH) {
  const batch = subs.slice(i, i+BATCH)
  await Promise.all(batch.map(s => sendEmail(s)))
  // consider a small delay to avoid rate limits
  await sleep(500)
}
```

Resend send example (Node/fetch):
```js
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ from: 'Lumora Labs <lumos@yourdomain.com>', to: s.email, subject: 'We released a new app', html: '<p>...</p>' })
})
```

7) PostHog tracking
- Track: `signup_clicked`, `confirmation_completed`, `announcement_sent` (server-side) and UI events client-side.
- Use server-side PostHog for confirmations (to avoid client blocking and to protect keys).

8) Notion sync (optional)
- For manual review, add a cron or DB trigger to push new confirmed subscribers to a Notion database (use Notion API or Zapier/Make).
- Keep Notion as a read-only mirror for team ops — don't rely on Notion as the source of truth.

9) Security & compliance
- Use double opt-in to prevent spam and unwanted messages.
- Store consent timestamp and IP (if needed for compliance).
- Add unsubscribe links to all emails.
- Keep keys in env vars and use server-only keys for Supabase service role.
- Rate-limit your /api/subscribe endpoint to avoid automated abuse.

10) Alternatives / when to change
- For very large newsletters (10k+ recipients) consider a dedicated newsletter/campaign provider (e.g., Mailchimp, Brevo, Customer.io, Postmark/Postal services) or Resend's campaign tools.
- If you want forms & hosted landing pages, use ConvertKit/EmailOctopus/ConvertKit.

Testing locally
- Set env vars in your .env.local (Supabase, Resend, PostHog)
- Use ngrok or preview deploy to test mailto links and confirmation flows.

Next steps I can implement for you
- Add the Next.js API routes (`/api/subscribe`, `/api/confirm`, `/api/unsubscribe`) to this repo and a small React form in the About page (I can use existing CTA modal). I will wire to Resend/Supabase and include PostHog calls.
- Or add a minimal embeddable form that posts directly to a serverless function.

Which option do you want me to build in this repo: the full subscribe+confirm+admin send flow (server routes + client) or just an embeddable form + sample serverless endpoint?"