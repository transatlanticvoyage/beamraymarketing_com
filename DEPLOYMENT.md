# BeamRay Marketing - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account with access to `transatlanticvoyage/beamraymarketing_com`
- Vercel account (free at vercel.com)
- Domain access for DNS configuration

## Step-by-Step Deployment

### 1. Import Project to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select or paste: `https://github.com/transatlanticvoyage/beamraymarketing_com`
4. Click "Import"

### 2. Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as is)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### 3. Environment Variables

In Vercel dashboard, go to Settings → Environment Variables and add:

```
NEXT_PUBLIC_SITE_URL = https://beamraymarketing.com
NEXT_PUBLIC_SITE_NAME = BeamRay Marketing
CONTACT_EMAIL = info@beamraymarketing.com
```

### 4. Deploy

Click "Deploy" - Vercel will:
1. Clone the repository
2. Install dependencies
3. Build the project
4. Deploy to a `.vercel.app` URL

### 5. Custom Domain Setup

After successful deployment:

1. Go to Settings → Domains
2. Add `beamraymarketing.com`
3. Choose configuration:
   - **Option A - Nameservers** (Recommended):
     - Change nameservers at your registrar to:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   
   - **Option B - A/CNAME Records**:
     - Add A record: `@` → `76.76.21.21`
     - Add CNAME: `www` → `cname.vercel-dns.com`

4. Wait for DNS propagation (5-30 minutes)
5. Vercel will automatically provision SSL certificate

## 📝 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check contact form functionality
- [ ] Verify SSL certificate is active
- [ ] Test page load speeds
- [ ] Set up monitoring/analytics

## 🔄 Continuous Deployment

Every push to `main` branch will trigger automatic deployment:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel will automatically build and deploy changes.

## 🛠️ Useful Commands

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
```

### Vercel CLI (Optional)
```bash
npm i -g vercel      # Install Vercel CLI
vercel               # Deploy from terminal
vercel --prod        # Deploy to production
```

## 🔍 Monitoring

- **Deployment Status:** [Vercel Dashboard](https://vercel.com/dashboard)
- **Analytics:** Add Google Analytics ID in environment variables
- **Performance:** Check Core Web Vitals in Vercel Analytics

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify domain settings in Vercel dashboard
- Ensure nameservers or A/CNAME records are correct

### Environment Variables Not Working
- Rebuild deployment after adding variables
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Check variable names match exactly

## 📧 Support

- Vercel Support: https://vercel.com/support
- GitHub Issues: https://github.com/transatlanticvoyage/beamraymarketing_com/issues
- Contact: Kyle Campbell via Facebook