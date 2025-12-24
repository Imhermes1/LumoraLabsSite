import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'


// Use system fonts as fallback when Google Fonts fail to load
const fontClass = 'font-sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://lumoralabs.com'),
  title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
  description: "Lumora Labs creates the world's most elegantly crafted and intuitively powerful apps for Apple and Android.",
  keywords: 'Lumora Labs, Macro, Micro, iOS apps, Apple ecosystem, AI nutrition, productivity, mental health, Australian nutrition app',
  authors: [{ name: 'Luke Fornieri' }],
  creator: 'Luke Fornieri',
  publisher: 'Lumora Labs',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://lumoralabs.com',
    title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
    description: 'Elegantly crafted apps for Apple and Android. Macro for Australian nutrition tracking and Micro for daily planning.',
    siteName: 'Lumora Labs',
    images: [
      {
        url: '/images/lumoralabs_logo.png',
        width: 512,
        height: 512,
        alt: 'Lumora Labs - Where Light Meets Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumora Labs - Crafting the Future of Extraordinary Apps',
    description: 'Elegantly crafted AI-powered apps for Apple ecosystem.',
    images: ['/images/lumoralabs_logo.png'],
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/lumoralabs_logo.png" />
        <link rel="apple-touch-icon" href="/images/lumoralabs_logo.png" />

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/lumoralabs_logo.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const isProd = ${process.env.NODE_ENV === 'production'};
              if ('serviceWorker' in navigator) {
                if (isProd) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js')
                      .then(function(registration) {
                        console.log('SW registered: ', registration);
                      })
                      .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                      });
                  });
                } else {
                  navigator.serviceWorker.getRegistrations()
                    .then(function(registrations) {
                      registrations.forEach(function(registration) {
                        registration.unregister();
                      });
                    })
                    .catch(function(error) {
                      console.log('SW unregister failed: ', error);
                    });
                }
              }
            `,
          }}
        />
      </head>
      <body className={cn(fontClass, 'antialiased')}>
        <div className="min-h-screen">
          {children}
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
