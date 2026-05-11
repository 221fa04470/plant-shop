# GreenLeaf - Plant Store

A pixel-perfect, responsive product listing page for a plant e-commerce store built with **Next.js 14** and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (custom config)
- **Language**: JavaScript
- **Fonts**: Playfair Display (headings) + DM Sans (body)

## Sections

1. **Navbar** — Logo, navigation links, search, cart icon with badge, user icon, responsive mobile hamburger drawer
2. **Hero Banner** — Headline, subtext, CTA buttons, hero image with floating badges, stats strip
3. **Trending Plants** — 3 featured plant cards with image, name, description, and price
4. **Top Selling Plants** — 8-card product grid with wishlist, quick-add hover effect, rating, and pricing
5. **O₂ Plants** — Full-width featured section with benefits grid and dual CTAs
6. **Customer Reviews** — 6 testimonial cards with rating, review, plant tag, and author
7. **Footer** — Brand info, social links, quick links, newsletter subscribe form

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd plant-shop

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Deployment

Deployed on **Vercel** — the recommended platform for Next.js apps.

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Deploy (zero config needed for Next.js)

## Project Structure

```
plant-shop/
├── app/
│   ├── globals.css       # Tailwind base + custom styles
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main page (assembles all sections)
├── components/
│   ├── Navbar.js         # Sticky nav with mobile drawer
│   ├── HeroBanner.js     # Hero section
│   ├── TrendingPlants.js # Trending cards section
│   ├── TopSelling.js     # Product grid section
│   ├── PlantCard.js      # Reusable plant product card
│   ├── O2Plants.js       # Featured O₂ plants section
│   ├── CustomerReviews.js# Reviews section
│   ├── TestimonialCard.js# Reusable review card
│   ├── SectionTitle.js   # Reusable section heading
│   ├── Button.js         # Reusable button component
│   └── Footer.js         # Footer with newsletter
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Responsive Breakpoints

| Breakpoint | Width      |
|------------|------------|
| Mobile     | 320px–639px |
| Tablet     | 640px–1023px |
| Desktop    | 1024px–1440px+ |

## Features

- ✅ Fully responsive (320px–1440px)
- ✅ Semantic HTML with accessibility (alt text, ARIA labels, focus indicators)
- ✅ Keyboard-navigable
- ✅ Hover transitions and animations
- ✅ Mobile hamburger navigation drawer
- ✅ Wishlist toggle on product cards
- ✅ Quick-add hover effect on product cards
- ✅ Newsletter subscription form
- ✅ Optimized images via Next.js Image component
