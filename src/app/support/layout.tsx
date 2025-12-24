import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Support - Lumora Labs',
    description: 'Get help with Lumora Labs apps. Support for Macro nutrition tracking and Micro productivity apps.',
    keywords: 'Lumora Labs support, help, contact, Macro support, Micro support, app help',
    openGraph: {
        title: 'Support - Lumora Labs',
        description: 'Get help with Lumora Labs apps.',
        images: ['/images/lumoralabs_logo.png'],
    },
}

export default function SupportLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
