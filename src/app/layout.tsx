import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LazyCountdownOverlay } from '@/components/LazyModals'

// Use system fonts as fallback when Google Fonts fail to load
const fontClass = 'font-sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://lumoralabs.com'),
  title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
  description: "Lumora Labs creates the world's most elegantly crafted and intuitively powerful apps for Apple and Android. Join our beta program.",  
  keywords: 'Lumora Labs, MooDo, Macro, iOS apps, Apple ecosystem, AI nutrition, mood management, productivity, mental health, Australian nutrition app',
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
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#B340D9',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set target date to 24 hours from 12:00 PM Melbourne time
  const now = new Date()
  const melbourneTime = new Date(now.toLocaleString("en-US", {timeZone: "Australia/Melbourne"}))
  const targetDate = new Date(melbourneTime)
  targetDate.setHours(12, 0, 0, 0) // Set to 12:00 PM
  targetDate.setDate(targetDate.getDate() + 1) // Add 24 hours
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/Lumora-Labs-Logo-transparent.png" />
        <link rel="apple-touch-icon" href="/images/Lumora-Labs-Logo-transparent.png" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/Lumora-Labs-Logo-transparent.png" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={cn(fontClass, 'antialiased')}>
        {/* Countdown Overlay - Load First with Bulletproof Protection */}
        <LazyCountdownOverlay
          targetDate={targetDate}
          isVisible={true}
        />
        
        <div className="min-h-screen">
          {children}
        </div>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
