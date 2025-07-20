
import Head from 'next/head'
import { useEffect } from 'react'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/globals.css'

export default function Home() {
  useEffect(() => {
    // Insert converted JS logic here if needed
  }, [])

  return (
    <>
      <Head>
        <title>Lumora Labs - Building the Future of Beautiful Apps</title>
        <meta name="description" content="Lumora Labs creates the world's most beautifully designed and best functioning apps exclusively for Apple, with Android coming soon." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="app">
        {/* Theme toggle component */}
        <ThemeToggle />

        {/* CONTENT PLACEHOLDER - Your full JSX will go here */}
        <div className="container">
          <h1>Welcome to Lumora Labs</h1>
        </div>
      </div>
    </>
  )
}
