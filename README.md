# ODR Group Website

A professional, modern Next.js website for ODR Group, LLC - a boutique consulting firm specializing in M&A, transformation, buy-side diligence, and post-acquisition integration.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel deployment

## Features

- Responsive design (mobile-friendly)
- Modern UI with professional color scheme (navy, slate gray, gold accents)
- Clean typography with serif fonts for headings and sans-serif for body text
- Interactive components (navigation, contact form)

## Pages

1. **Homepage** - Company overview and value proposition
2. **About** - Company mission, vision, timeline, and team
3. **Services** - Detailed service offerings with benefits
4. **Case Studies** - Example client success stories
5. **Contact** - Contact form and business information

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

To build the application for production:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Deployment

This website is ready to be deployed on Vercel. Simply push the code to a Git repository and connect it to Vercel for automatic deployments.

## Project Structure

- `app/` - Main application code using Next.js App Router
  - `page.tsx` - Homepage
  - `about/page.tsx` - About page
  - `services/page.tsx` - Services page
  - `case-studies/page.tsx` - Case Studies page
  - `contact/page.tsx` - Contact page
  - `components/` - Reusable UI components
  - `globals.css` - Global styles
- `public/` - Static assets
- `tailwind.config.js` - Tailwind CSS configuration

## Customization

To customize this website, you can:

1. Update the color scheme in `tailwind.config.js`
2. Replace placeholder content in each page file
3. Add actual images to the `public/images` directory
4. Update contact information in `app/contact/page.tsx` and `app/components/Footer.tsx` 