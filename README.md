# senshi-landing

> **SenshiGuard** - Marketing Website & Public Landing Page

`senshi-landing` is the high-converting public marketing website for SenshiGuard and its security product suite.

---

## 🎯 Key Responsibilities
- **Product Showcase**: Interactive previews of deep cloud scanning, 1-click cleaner, and WAF firewall.
- **Competitor Comparisons**: Performance & feature matrices (e.g., Senshi vs MalCare, Wordfence, Sucuri).
- **Pricing & Tier Calculator**: Interactive subscription tiers (Freelancers, Agencies, Enterprises).
- **ROI & Malware Speed Calculators**: Showcases zero server load benefits.
- **Lead Capture & Sign-up Onboarding**: Seamless registration flow connecting to `platform-api`.

---

## 🛠 Tech Stack
- **Framework**: Next.js 14/15 (App Router) / Astro / React
- **Styling**: Tailwind CSS + Framer Motion (rich animations)
- **SEO & Analytics**: OpenGraph, Schema.org structured data, Plausible / PostHog analytics
- **Deploy Target**: Vercel / Cloudflare Pages

---

## 📁 Suggested Directory Structure
```
senshi-landing/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx          # Hero, Features, Social Proof, Testimonials
│   │   ├── pricing/          # Pricing tables & FAQ
│   │   ├── compare/          # Competitor comparison pages
│   │   ├── enterprise/       # Agency & Enterprise solutions
│   │   └── contact/          # Sales inquiry forms
│   └── layout.tsx
├── components/
│   ├── Hero.tsx
│   ├── FeatureCarousel.tsx
│   ├── LiveScannerDemo.tsx
│   └── PricingCalculator.tsx
├── public/                   # Images, badges, partner logos
└── README.md
```

---

## 🚀 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/SenshiGuard/senshi-landing.git
   cd senshi-landing
   ```
2. Install dependencies & run:
   ```bash
   npm install
   npm run dev
   ```
