# Elevate Home Offers

A Next.js 14 website for Elevate Home Offers — a cash home-buying company serving Austin, TX and 12 surrounding cities.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for [Vercel](https://vercel.com). Connect your GitHub repo to Vercel and it will auto-deploy on every push to `main`.

## TODO Before Launch

- [ ] **Phone number** — Replace all `[PHONE]` placeholders with real number (search the codebase for `[PHONE]`)
- [ ] **Email address** — Replace all `[EMAIL]` placeholders (search for `[EMAIL]`)
- [ ] **Real logos** — Replace `/public/logo-blue.png` and `/public/logo-white.png` with actual logo files
- [ ] **Google Analytics** — Set `NEXT_PUBLIC_GA_ID` environment variable in Vercel dashboard (e.g., `G-XXXXXXXXXX`)
- [ ] **CRM integration** — Uncomment and configure the CRM webhook in `/app/api/lead/route.ts`
- [ ] **Office address** — Add real street address to footer and contact page
- [ ] **Team photos** — Add real team member photos to `/app/about/page.tsx`
- [ ] **OG image** — Add `/public/og-image.jpg` (1200x630px) for social sharing previews
- [ ] **Google Business Profile** — Link to actual Google reviews widget on `/app/reviews/page.tsx`

## Adding a New Location Page

1. Open `/lib/locations.ts`
2. Add a new `Location` object to the `locations` array with all required fields
3. The dynamic route `/app/sell-my-house-fast/[city]/page.tsx` handles rendering automatically
4. The new city will appear in the Header dropdown, Footer, AreasServed component, and sitemap

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NOTIFICATION_EMAIL=your@email.com
HUBSPOT_API_KEY=your_hubspot_key
```

## Project Structure

```
/app              # Next.js App Router pages
/components       # Reusable React components
/lib              # Shared data (locations, SEO helpers)
/content/blog     # Blog post content (TypeScript objects)
/public           # Static assets (logos, images)
```
