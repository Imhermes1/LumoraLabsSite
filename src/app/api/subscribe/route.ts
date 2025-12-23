import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // You can either add them to a contact list (Audiences) 
        // or just send yourself an email notification
        const data = await resend.emails.send({
            from: 'Lumora Labs <onboarding@resend.dev>', // Update this to your verified domain once ready
            to: 'lumos@lumoralabs.io',
            subject: 'New Subscription: Lumora Labs',
            html: `<p>New subscriber: <strong>${email}</strong> has joined the Lumora ecosystem.</p>`
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
