# Lumora Labs Website

![Lumora Labs](https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/6bb54c3c-75a0-40d9-b472-6e30dc2cb268.png)

**Where Light Meets Innovation** ✨

A premium Next.js website for Lumora Labs, showcasing our beautiful AI-powered apps exclusively for Apple ecosystem (Android coming soon).

## 🌟 About Lumora Labs

Lumora Labs creates the world's most beautifully designed and best functioning apps, focusing on:
- **Wellness-first technology** that enhances mental health and productivity
- **Premium glassmorphism design** with Apple-quality aesthetics  
- **AI-powered solutions** that amplify human potential
- **Apple ecosystem exclusive** development with seamless device integration

### Our Apps

#### 🎯 MooDo - Mood-Based Task Management
*"Work with your emotions, not against them"*
- AI-powered mood recognition and task optimization
- Natural voice interaction and emotional intelligence
- Mental health-first approach to productivity
- Real-time adaptation to emotional states

#### 🥗 Core Track - AI Nutrition for Australians  
*"The first AI nutrition app built specifically for Australia"*
- GPT-4 AI with AUSNUT database integration
- Recognizes 50+ local brands (Woolworths, Coles, etc.)
- Voice-first interface with Australian accent optimization
- 95% accuracy vs competitors' 60-70%

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   \```bash
   git clone https://github.com/yourusername/lumora-labs-website.git
   cd lumora-labs-website
   \```

2. **Install dependencies**
   \```bash
   npm install
   # or
   yarn install
   \```

3. **Run the development server**
   \```bash
   npm run dev
   # or
   yarn dev
   \```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\```bash
npm run build
npm start
\```

## 🛠 Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Key Features
- **Responsive Design** - Mobile-first approach
- **Glassmorphism UI** - Premium visual effects with backdrop blur
- **Performance Optimized** - Image optimization, code splitting
- **SEO Ready** - Meta tags, Open Graph, Twitter Cards
- **Accessibility** - WCAG compliant, keyboard navigation
- **Type Safety** - Full TypeScript integration

### Architecture
- **App Router** - Next.js 13+ routing system
- **Server Components** - Optimal performance
- **Client Components** - Interactive functionality
- **Modular Design** - Reusable components
- **Custom Hooks** - Shared logic
- **Utility Functions** - Common operations

## 📁 Project Structure

\```
lumora-labs-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles import
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Hero.tsx          # Hero section
│   │   ├── MooDo.tsx         # MooDo app showcase
│   │   ├── CoreTrack.tsx     # Core Track app showcase
│   │   ├── BetaSignup.tsx    # Beta program signup
│   │   ├── Technology.tsx    # Technology section
│   │   ├── Footer.tsx        # Footer component
│   │   └── ui/               # Reusable UI components
│   ├── lib/                  # Utilities and helpers
│   │   └── utils.ts          # Common utility functions
│   └── styles/               # Global styles
│       └── globals.css       # Main stylesheet
├── public/                   # Static assets
│   └── images/               # Image assets
├── package.json              # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
\```

## 🎨 Design System

### Color Palette
\```css
/* Brand Colors */
--lumora-pink: #FA73A6     /* Primary brand color */
--lumora-purple: #B340D9   /* Secondary brand color */
--deep-purple: #8C26F2     /* Accent color */
--soft-pink: #D95ABF       /* Gradient transition */

/* Mood-Based Colors */
--positive: #38B06A        /* Success, growth, optimism */
--calm: #3890F0           /* Peace, stability, focus */
--focused: #667DEB        /* Concentration, clarity */
--stressed: #E84D3D       /* Urgency, attention */
--creative: #8F45AE       /* Innovation, imagination */
\```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Responsive Scale**: 14px mobile to 16px desktop base

### Glassmorphism Effects
- **Backdrop Blur**: 10px standard, 15px strong
- **Background**: rgba(255, 255, 255, 0.1) with gradients
- **Borders**: rgba(255, 255, 255, 0.2) subtle borders
- **Shadows**: Multi-layered for depth

## 📱 Beta Program Integration

### Current Status
- **MooDo Beta**: 20/50 participants
- **Core Track Beta**: 20/50 participants
- **Total Combined**: 40/100 spots filled

### Signup Process
- Direct integration with Notion signup page
- Real-time counter updates (configurable)
- Exclusive benefits messaging
- Requirements clearly stated

### Beta Benefits
- Exclusive early access to features
- Direct influence on product development  
- Lifetime 50% discount on premium features
- Access to exclusive beta community

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub Repository**
   - Import project in Vercel dashboard
   - Auto-deploys on push to main branch

2. **Environment Variables** (if needed)
   \```bash
   # Add in Vercel dashboard
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   \```

3. **Custom Domain** (optional)
   - Add your custom domain in Vercel settings
   - DNS configuration provided automatically

### Other Platforms
- **Netlify**: Works with build command `npm run build`
- **AWS Amplify**: Compatible with Next.js static export
- **Cloudflare Pages**: Supports Next.js applications

### Performance Optimizations
- Image optimization with Next.js Image component
- Automatic code splitting
- Bundle analysis available with `npm run analyze`
- SEO optimization with meta tags

## 🔧 Development

### Available Scripts
\```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
\```

### Development Guidelines
- **Components**: Use TypeScript for all components
- **Styling**: Tailwind classes with custom CSS for complex effects
- **Images**: Use Next.js Image component for optimization
- **Performance**: Monitor Core Web Vitals
- **Accessibility**: Test with screen readers and keyboard navigation

### Adding New Features
1. Create component in `/src/components/`
2. Add to main page or create new route
3. Update navigation if needed
4. Test on mobile and desktop
5. Verify accessibility compliance

## 📊 Analytics & Monitoring

### Recommended Tools
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics 4** - User behavior tracking
- **Hotjar** - User experience insights
- **Sentry** - Error tracking and monitoring

### Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Green ratings
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## 🎯 SEO Optimization

### Implemented Features
- Meta tags with Open Graph and Twitter Cards
- Structured data for rich snippets
- Optimized images with alt text
- Clean URL structure
- XML sitemap generation
- Robot.txt configuration

### Content Strategy
- Focus keywords: "Lumora Labs", "MooDo", "Core Track", "iOS apps", "Australian nutrition app"
- Regular content updates through blog (future)
- Social media integration
- Press coverage and backlinks

## 🔒 Security

### Best Practices Implemented
- **Headers**: Security headers in next.config.js
- **Dependencies**: Regular security audits
- **Data Privacy**: Minimal data collection
- **HTTPS**: Enforced in production
- **Content Security Policy**: Configured for safety

### Privacy Compliance
- GDPR compliant data handling
- Australian Privacy Act adherent
- Clear privacy policy
- User consent mechanisms
- Data retention policies

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Extended from Next.js config
- **Prettier**: Code formatting (recommended)
- **Conventional Commits**: Semantic commit messages

## 📞 Support

### Contact Information
- **Email**: luke@lumoralabs.com
- **Location**: Vermont South, VIC, Australia
- **Website**: [lumoralabs.com](https://lumoralabs.com)

### Beta Program
- **Signup**: [Join Beta Program](https://field-hearing-f91.notion.site/22b2ce9d9bf1803cb157ec370b405c9e?pvs=105)
- **Requirements**: iPhone 12+ with iOS 17+
- **Commitment**: 2-3 hours/week testing
- **Benefits**: Lifetime discounts and early access

### Documentation
- **Brand Guidelines**: Available in company documentation
- **API Documentation**: Coming with app releases
- **Technical Specs**: Detailed in codebase comments

## 📈 Roadmap

### Phase 1: Website Launch (Current)
- [x] Website development and deployment
- [x] Beta program integration
- [x] SEO optimization
- [ ] Analytics implementation
- [ ] Performance optimization

### Phase 2: App Launch (Q2 2025)
- [ ] iOS App Store submission
- [ ] Marketing campaign launch
- [ ] Press coverage and PR
- [ ] Partnership development

### Phase 3: Growth (Q3-Q4 2025)
- [ ] Android development
- [ ] International expansion
- [ ] Advanced features
- [ ] Enterprise partnerships

## 📄 License

Copyright © 2025 Lumora Labs. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited without explicit written permission from Lumora Labs.

---

**Built with ✨ by Lumora Labs**  
*Where Light Meets Innovation*
