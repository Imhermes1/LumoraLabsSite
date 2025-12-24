import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Micro - Your Life Utility App | Lumora Labs',
    description: 'Your all-in-one life tool. Calendar, reminders, habits, journaling, and contacts—all powered by Lumora Ki. Coming to iOS, Mac & iPad.',
    keywords: 'productivity app, habit tracker, calendar app, reminder app, journaling, iOS productivity, task manager, daily planner',
    openGraph: {
        title: 'Micro - Your Life Utility App',
        description: 'Your all-in-one life tool. Calendar, reminders, habits, journaling, and contacts—all powered by Lumora Ki.',
        images: ['/images/Gemini_Generated_Image_3ozbgc3ozbgc3ozb.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Micro - Your Life Utility App',
        description: 'Your all-in-one life tool. Calendar, reminders, habits, journaling, and contacts.',
        images: ['/images/Gemini_Generated_Image_3ozbgc3ozbgc3ozb.png'],
    },
}

export default function MicroLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
