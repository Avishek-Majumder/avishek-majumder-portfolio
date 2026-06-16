# Avishek Majumder | AI Researcher, Computer Vision Specialist & Prompt Engineer

A premium, production-ready, highly polished academic and engineering portfolio web application built for **Avishek Majumder** (AI Researcher, Computer Vision Specialist & Prompt / Agentic AI Engineer). Designed specifically for static export and seamless, instantaneous deployment on Vercel, Netlify, or similar modern hosting platforms with zero backend footprint.

---

## 🚀 Architectural Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (blazing-fast, standard client-side architecture)
- **Language**: [TypeScript](https://www.typescript.lang/) (strict type-safe interface guidelines)
- **Design & Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (engineered utility variables and pristine spacing rules)
- **Fluid Motion**: [Motion](https://motion.dev/) (elegant fade-in-on-scroll structural entries)
- **Icon Elements**: [Lucide React](https://lucide.dev/) (consistent, sleek modern vector systems)
- **SEO & Socials**: Custom reusable `<SEO />` components setting compliant Open Graph & Meta values per section viewport.

---

## 🎨 Creative UI/UX Features

### 🌓 1. Dual Palette Theme Persistence
The visual theme uses a robust, fluid class-based approach:
- **Automatic Sync**: Detects and respects the visiting system's `prefers-color-scheme` on initial load.
- **Durable Persistence**: Toggles class attributes on the root `<html>` element and caches selections securely via `localStorage`.
- **Contrast Control**: Colors and shadows have been custom mapped to ensure rich contrast on both slate-dark and ivory-light canvases.

### 🔍 2. Instant Deep Index Searching
- **Live Text-Matching**: Fully integrated high-performance text filtering and highlighting engine.
- **Surgical Highlighting**: Typing keywords in the navbar fires direct partial-text evaluations, highlighting matches within component titles, tags, descriptions, roles, and scholarly details using the specialized `<HighlightText />` component.
- **Empty State Fallbacks**: Stretches elegantly to handle zero-match cases with contextual notices per section.

### 📄 3. Academic Integrity & Publishing Linkages
- **Clickable Title Anchors**: Publication entries are direct links to publishers/DOIs using secure layout properties (`target="_blank" rel="noopener noreferrer"`).
- **English Fluency Metrics**: Includes standard visual indicators summarizing verified IELTS band scores (Overall Band: **7.5**).
- **Academic Services**: Summarizes active journal and conference review roles (such as IEEE Transactions on Artificial Intelligence).

### 🖨️ 4. Print-to-PDF Resume Compilation
Includes a tailored CSS media query directly inside `src/index.css`:
- **Document-Ready styling**: Automatically strips down primary floating buttons, search bars, navigation tabs, and dark backings.
- **Clean Academic CV**: When invoking a standard browser print command (`Ctrl+P` or `Cmd+P`), compiles the entire portfolio as a clean, high-contrast, dual-column CV document.

---

## 📂 Configuration & Content Updates

This portfolio is completely static-driven and serverless. All academic data, projects, publications, and profiles are declared inside clean TypeScript files located in `/src/data/`:

### 🧑‍💻 1. Updating Profile Information (`/src/data/profile.ts`)
Modify this file to update your main description, affiliations, thesis titles, IELTS scores, certifications, or direct mailing coordinates.

### 📄 2. Updating Publications (`/src/data/publications.ts`)
This file holds a flat array of structures tracking your papers. Each entry supports attributes like:
- `id`: Unique identifier (e.g., `pub-snasrnet-under-review`)
- `title`: Complete title of the work
- `authors`: Full authorship listing
- `venue`: Hosting journal or conference
- `paperUrl` / `doiUrl`: Links pointing to the PDF draft or publisher page
- `isFirstAuthor`: Boldly marks first-author designations

### 🌐 3. Updating Social Links (`/src/data/socialLinks.ts`)
Used to feed the Navbar and the Contact sections. Update these objects to replace LinkedIn, GitHub, ORCID, WhatsApp, or Google Scholar URLs.

---

## 📷 Handling the Profile Photo Locally

To use your custom high-quality image on your public portfolio, you have two simple options:

### Option A: External Cloud Hosting (Default)
Currently, `/src/data/profile.ts` loads the profile image directly from a public Google Drive attachment:
```typescript
photo: "https://lh3.googleusercontent.com/d/1HZSIaZF41DgnhgCy6V4_iZ7DobUKFVxu"
```

### Option B: Local Asset File (Recommended for Production Release)
For absolute safety against content-delivery blocks (CORS/referrers), load the picture locally:
1. Download your profile photo.
2. Put the file inside `/public/images/avishek-majumder.jpg`. (Create the `images` folder in `public` if it doesn't exist).
3. Open `/src/data/profile.ts` and modify the `photo` field to:
   ```typescript
   photo: "/images/avishek-majumder.jpg"
   ```
This will bundle and deliver the asset locally with sub-millisecond response rates! If there is an image load failure, the app automatically transitions to a visually beautiful **AM (Avishek Majumder)** fallback initials gradient.

---

## 🛠️ Local Development Setup

Ensure you have [Node.js (v18+)](https://nodejs.org/) installed on your workspace.

```bash
# 1. Install all dependencies
npm install

# 2. Spin up the fast local development server with Hot Module Replacement
npm run dev

# 3. Compile optimization tests and verify type-integrity
npm run lint
```

---

## 📤 Production Build & Deployment Guidelines

This application compiles to full client-side HTML, CSS, and JS. It requires **no backend server** and **no Google Cloud setups** - making it completely secure, extremely fast, and completely free to host on static CDNs.

### Vite Build Script
To create production-ready static assets, run:
```bash
npm run build
```
This generates optimized assets inside the `/dist/` folder, which is ready to be loaded by any static web hosting provider.

### 1. Deploying on Vercel
Vercel reads configuration settings automatically. To deploy:
- **Framework Preset**: select **Vite** or auto-detect
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Configuration Fallbacks**: An optimal `vercel.json` rewrite file is already configured in this repository root to map smooth SPA redirections properly.

### 2. Deploying on Netlify
Netlify serves static directories directly. To deploy:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Configuration Fallbacks**: An optimal `_redirects` routing file is pre-configured inside `/public` to enable proper SPA page refreshing on custom servers.

---

## ✅ Production Readiness QA Checklist

Before compiling your final export:
- [x] **No Hosting Warnings**: Confirmed that any AI-generated notice boxes, Amber-status placeholders, or "static development constraint" notes are completely absent.
- [x] **Strict Section Sorting**: Verified "Education & Scientific Credibility" lands right below "Professional Experience" inside `src/App.tsx`.
- [x] **Limit Featured Papers**: Verified the Showcase component shows only the designated 4 publications.
- [x] **Responsive Grid Columns**: Confirmed stat cards and publication bento blocks auto-adjust gracefully on small (320px) screens up to massive (1920px) screens.
- [x] **Search Compliance**: Ensured pressing Enter or clicking the Search glass icon executes index searches and initiates smooth scrolls.
- [x] **Contact URLs**: Verified `mailto:avishekmajumderpciu@gmail.com` and `https://wa.me/8801518496669` links operate correctly with `target="_blank" rel="noopener noreferrer"`.
