# Deployment Instructions

## 🚀 Deploying to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free)
- Repository pushed to GitHub

### Step-by-Step Deployment

1. **Push to GitHub**
   \```bash
   git init
   git add .
   git commit -m "Initial commit: Lumora Labs Next.js website"
   git branch -M main
   git remote add origin https://github.com/yourusername/lumora-labs-website.git
   git push -u origin main
   \```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)
   - **Install Command**: `npm install` (auto-configured)

4. **Environment Variables** (Optional)
   Add in Vercel dashboard if needed:
   - `NEXT_PUBLIC_SITE_URL`: Your domain URL
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID (when ready)

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get your live URL (e.g., `lumora-labs-website.vercel.app`)

### Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capabilities in Vercel dashboard

### Custom Domain Setup
1. Add domain in Vercel project settings
2. Configure DNS records as instructed
3. SSL certificate automatically provisioned

## 📊 Performance Monitoring

### Vercel Analytics
- Built-in Core Web Vitals monitoring
- Real user metrics
- Performance insights

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🔧 Production Optimizations

The website is pre-configured with:
- Image optimization
- Automatic code splitting  
- Static generation where possible
- Optimized bundle sizes
- Security headers
- SEO meta tags

## 🌍 Alternative Deployment Options

### Netlify
\```bash
npm run build
# Deploy the .next folder
\```

### AWS Amplify
\```bash
# Add amplify.yml configuration
npm run build
\```

### Self-Hosted
\```bash
npm run build
npm start
\```

## 📈 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Confirm beta signup links work
- [ ] Check Lighthouse performance scores
- [ ] Verify SEO meta tags
- [ ] Test accessibility with screen reader
- [ ] Confirm analytics integration (when added)
- [ ] Set up monitoring alerts

## 🔗 Useful Links

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Domain Configuration**: https://vercel.com/docs/custom-domains
- **Performance Optimization**: https://nextjs.org/docs/advanced-features/measuring-performance
