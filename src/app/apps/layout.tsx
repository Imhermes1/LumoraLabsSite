import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Apps - Macro & Micro | Lumora Labs',
    description: 'Explore Lumora Labs apps. Macro for AI-powered nutrition tracking and Micro for productivity, habits, and daily planning.',
    keywords: 'Lumora apps, Macro app, Micro app, iOS apps, productivity apps, nutrition apps, Australian apps',
    openGraph: {
        title: 'Our Apps - Macro & Micro',
        description: 'Explore Lumora Labs apps. Macro for nutrition, Micro for productivity.',
        images: ['/images/lumoralabs_logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Apps - Macro & Micro',
        description: 'Explore Lumora Labs apps. Macro for nutrition, Micro for productivity.',
        images: ['/images/lumoralabs_logo.png'],
    },
}

export default function AppsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
