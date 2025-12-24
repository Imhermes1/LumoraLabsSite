import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Macro - AI Nutrition & Calorie Tracking | Lumora Labs',
    description: 'Track your nutrition with AI. Log meals using photos, voice, or chat. Get instant advice on calories, macros, and health goals. Built for Australia.',
    keywords: 'nutrition app, calorie tracker, macro tracker, AI nutrition, Australian food database, meal logging, health app, iOS nutrition app',
    openGraph: {
        title: 'Macro - AI Nutrition & Calorie Tracking',
        description: 'Track your nutrition with AI. Log meals using photos, voice, or chat. Built for Australia.',
        images: ['/images/macrologoNB.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Macro - AI Nutrition & Calorie Tracking',
        description: 'Track your nutrition with AI. Log meals using photos, voice, or chat.',
        images: ['/images/macrologoNB.png'],
    },
}

export default function MacroLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
