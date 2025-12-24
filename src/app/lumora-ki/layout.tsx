import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lumora Ki - The Living Energy Behind Our Apps | Lumora Labs',
    description: 'Lumora Ki is the unified intelligence that powers every Lumora app. One energy, every app, connected. Real-time sync, adaptive learning, and privacy-first.',
    keywords: 'Lumora Ki, AI platform, unified apps, cross-app sync, intelligent ecosystem, privacy-first, real-time sync',
    openGraph: {
        title: 'Lumora Ki - The Living Energy Behind Our Apps',
        description: 'One energy, every app, connected. The unified intelligence that powers the Lumora ecosystem.',
        images: ['/images/ki_spirit_blue.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lumora Ki - The Living Energy Behind Our Apps',
        description: 'One energy, every app, connected. The unified intelligence that powers the Lumora ecosystem.',
        images: ['/images/ki_spirit_blue.png'],
    },
}

export default function LumoraKiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
