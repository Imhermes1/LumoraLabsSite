import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - Lumora Labs | Melbourne, Australia',
    description: 'Lumora Labs creates quietly confident experiences that bring light to everyday wellbeing. Based in Melbourne, Australia. Founded by Luke Fornieri.',
    keywords: 'Lumora Labs, about us, Melbourne startup, Australian app development, Luke Fornieri, iOS development',
    openGraph: {
        title: 'About Us - Lumora Labs',
        description: 'Creating quietly confident experiences that bring light to everyday wellbeing. Based in Melbourne, Australia.',
        images: ['/images/lumoralabs_logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us - Lumora Labs',
        description: 'Creating quietly confident experiences that bring light to everyday wellbeing.',
        images: ['/images/lumoralabs_logo.png'],
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
