import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
  description: "Lumora Labs creates the world's most elegantly crafted and intuitively powerful apps for Apple and Android. Join our beta program.",  keywords: 'Lumora Labs, MooDo, Macro, iOS apps, Apple ecosystem, AI nutrition, mood management, productivity, mental health, Australian nutrition app',
  authors: [{ name: 'Luke Fornieri' }],
  creator: 'Luke Fornieri',
  publisher: 'Lumora Labs',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://lumoralabs.com',
    title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
    description: 'Elegantly crafted apps for Apple and Android. MooDo for mood-based task management and Macro for Australian nutrition tracking.',
    siteName: 'Lumora Labs',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumora Labs - Where Light Meets Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
    description: 'Elegantly crafted AI-powered apps for Apple ecosystem. Join our exclusive beta program.',
    images: ['/images/twitter-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#B340D9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn(inter.className, 'antialiased')}>
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
