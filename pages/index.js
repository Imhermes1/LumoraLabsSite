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

        {/* Hero Section */}
        <section className="hero">
          <div className="hero__background"></div>
          <div className="container">
            <div className="hero__content">
              <h1 className="hero__title">Building the Future of Apps</h1>
              <p className="hero__subtitle">At Lumora Labs, we believe technology should feel effortless. Our apps are designed exclusively for Apple, combining elegant design with peak performance. Android coming soon.</p>
              <div className="hero__actions">
                <a href="#apps" className="btn btn--primary btn--lg">Explore Our Apps</a>
                <button onClick={() => window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')} className="btn btn--outline btn--lg">Join Beta Program</button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="company-overview">
          <div className="container">
            <div className="glass-panel">
              <h2>The Future of App Development</h2>
              <p>At Lumora Labs, we believe that technology should be elegant, intuitive, and deeply human. We’re pioneering the next generation of mobile experiences with apps that don’t just function flawlessly, they feel magical.</p>
              <div className="company-stats">
                <div className="stat">
                  <h3>Apple First</h3>
                  <p>Exclusively designed for iOS ecosystem</p>
                </div>
                <div className="stat">
                  <h3>AI Powered</h3>
                  <p>Cutting-edge artificial intelligence</p>
                </div>
                <div className="stat">
                  <h3>Human Centered</h3>
                  <p>Crafted with empathy and care</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MooDo App Showcase */}
        <section id="apps" className="featured-apps">
          <div className="container">
            <h2 className="section-title">Our Elegantly Crafted Apps</h2>
            <div className="app-showcase moodo">
              <div className="app-showcase__content">
                <div className="app-showcase__text">
                  <h3>MooDo</h3>
                  <p className="app-tagline">Work with your emotions, not against them</p>
                  <p className="app-description">
                    MooDo is an intuitive task manager that adapts to your emotional state in real-time. Using advanced AI, MooDo understands how you feel and fine-tunes your workflow for deeper focus and better flow.
                  </p>
                  <div className="app-features">
                    <div className="feature-card">
                      <h4>🎯 Mood-Driven Task Prioritisation</h4>
                      <p>AI-powered recommendations that match tasks to your emotional state</p>
                    </div>
                    <div className="feature-card">
                      <h4>🧠 Emotional Intelligence</h4>
                      <p>Daily mood tracking with pattern recognition and insights</p>
                    </div>
                    <div className="feature-card">
                      <h4>🎤 Voice Integration</h4>
                      <p>Natural voice check-ins and conversational task creation</p>
                    </div>
                    <div className="feature-card">
                      <h4>☁️ Seamless Sync</h4>
                      <p>CloudKit integration across iPhone, iPad, and Mac</p>
                    </div>
                  </div>
                  <div className="target-audience">
                    <h4>Perfect for:</h4>
                    <div className="audience-tags">
                      <span className="tag">Mental Health Professionals</span>
                      <span className="tag">Creative Professionals</span>
                      <span className="tag">Remote Workers</span>
                      <span className="tag">Students</span>
                    </div>
                  </div>
                  <div className="beta-signup-inline">
                    <p>MooDo Beta Testers: <span className="counter" id="moodo-counter">20</span> / 50</p>
                    <div className="progress-bar">
                      <div className="progress-fill moodo-progress" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="app-showcase__image">
                  <div className="app-mockup moodo-mockup">
                    <div className="mockup-screen">
                      <div className="mood-interface">
                        <div className="mood-selector">
                          <div className="mood-option active" data-mood="positive">😊</div>
                          <div className="mood-option" data-mood="calm">😌</div>
                          <div className="mood-option" data-mood="focused">🎯</div>
                          <div className="mood-option" data-mood="creative">💡</div>
                          <div className="mood-option" data-mood="stressed">😰</div>
                        </div>
                        <div className="task-list">
                          <div className="task-item">
                            <span className="task-emoji">📝</span>
                            <span>Write blog post</span>
                            <span className="task-mood positive">Positive</span>
                          </div>
                          <div className="task-item">
                            <span className="task-emoji">📱</span>
                            <span>Call mum</span>
                            <span className="task-mood positive">Positive</span>
                          </div>
                          <div className="task-item">
                            <span className="task-emoji">🎨</span>
                            <span>Design mockup</span>
                            <span className="task-mood creative">Creative</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Call to Action */}
        <section className="beta-signup-section">
          <div className="container">
            <div className="glass-panel beta-panel">
              <h2>Be First. Be Essential.</h2>
              <p>Join our Beta Program and help shape the future of digital wellbeing and AI-powered productivity. Be part of a movement building tools with meaning.</p>
              <button onClick={() => window.open('https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105', '_blank')} className="btn btn--primary btn--lg">
                Join the Beta
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Lumora Labs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
