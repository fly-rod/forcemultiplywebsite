# Force Multiply Consulting Website

A modern, professional consulting website built with Next.js 14 and TypeScript. Features a multi-page layout with services showcase, about page, and contact form.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Responsive Design** - works on all devices
- **Professional Styling** with CSS modules
- **SEO Optimized** with Next.js metadata
- **Fast Performance** with static generation
- **Contact Form** with validation
- **Services Showcase** with detailed offerings
- **Easy Deployment** to Vercel

## Pages

1. **Home** - Hero section with value propositions
2. **Services** - Comprehensive service offerings
3. **About** - Company mission, values, and differentiators
4. **Contact** - Contact form with service selection

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd force-multiply-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js - click "Deploy"
6. Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy from the project directory:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? **force-multiply-website** (or your choice)
   - Directory? **./** (press Enter)
   - Override settings? **No** (press Enter)

4. For production deployment:
```bash
vercel --prod
```

### Environment Variables (Optional)

If you add a backend API for the contact form, add these in Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables (e.g., `API_URL`, `EMAIL_SERVICE_KEY`)

## Customization

### Update Company Information

- Edit content in `app/*/page.tsx` files
- Update metadata in `app/layout.tsx`
- Modify services in `app/services/page.tsx`

### Change Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... */
}
```

### Connect Contact Form to Backend

The contact form currently simulates submission. To connect a real backend:

1. Create an API route: `app/api/contact/route.ts`
2. Update the `handleSubmit` function in `app/contact/page.tsx`
3. Use services like:
   - [EmailJS](https://www.emailjs.com/)
   - [SendGrid](https://sendgrid.com/)
   - [Resend](https://resend.com/)
   - Custom API endpoint

Example API route:
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email or save to database

  return NextResponse.json({ success: true });
}
```

## Project Structure

```
force-multiply-website/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── services/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── components/
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── Navigation.tsx
│   └── Navigation.module.css
├── public/
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Build for Production

```bash
npm run build
npm start
```

## License

Private - All Rights Reserved

## Support

For issues or questions, please contact your development team.
# forcemultiplywebsite
