# ICCI Website

Official web application for the **Indian Chamber of Construction Industry (ICCI)**.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Fetches dynamic content, SEO, and assets directly from the **ICCI CMS** (`icci-cms`).

---

## Features

- **Public Website Pages**:
  - **Home** (`/`): Dynamic hero slider, key highlights, Chamber introduction, objectives, industry representation, core initiatives, leadership overview, membership overview, latest news stories, and enquiry block.
  - **About Us** (`/about`): Narrative story, focus areas, mission & vision statements, leadership preview, and state chapter directory.
  - **Initiatives** (`/initiatives`): Core initiatives, objectives grid, and represented stakeholder disciplines.
  - **Leadership** (`/leadership`): Interactive leadership roster, tier breakdowns for National President, Vice Presidents, Secretariat, and Executive Committee with profile modals.
  - **Membership** (`/membership`): Benefits checklist, category tiers, application steps, and enquiry form (`#join`).
  - **Events** (`/events`): Dynamic upcoming events spotlight and past events archive.
  - **News & Articles** (`/news` & `/news/[slug]`): Filterable news browser, sidebar categories, full article reading view, and related stories.
  - **Contact Us** (`/contact`): Secretariat address, phone, email, Google Maps embed, and contact form.
- **Dynamic SEO & Metadata**:
  - Global metadata, Open Graph cards, Google Search Console verification, and Schema.org JSON-LD from the CMS.
  - Per-page SEO meta titles, meta descriptions, target keywords, canonical URLs, and `noindex` rules.
  - CMS-controlled heading hierarchy (`<h1>`–`<h6>`).
  - Dynamic XML Sitemap (`/sitemap.xml`) and `robots.txt` (`/robots.txt`).
- **Interactive Forms**:
  - General contact enquiries and membership applications.
  - Submissions are securely forwarded to the CMS inbox and trigger email alerts.
- **Performance & Cache Revalidation**:
  - Next.js server-side caching (`force-cache`) with on-demand cache tag revalidation (`/api/revalidate`).
  - Fast page loads with instant UI updates when changes are saved in the CMS.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Google Fonts (Poppins)

---

## Getting Started

### 1. Prerequisites

- **Node.js** 18.18.0 or higher
- **npm** 9 or higher
- **ICCI CMS** running locally (default: `http://localhost:3001`) or deployed

### 2. Installation

```bash
# Clone the repository and enter the directory
cd icci

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Configure the environment variables:

```env
# CMS API endpoint
CMS_URL="http://localhost:3001"

# Shared secret for authenticating revalidation webhooks and form submissions
CMS_SHARED_SECRET="your-shared-secret-here"

# Public canonical website URL (used for canonical tags and sitemaps)
NEXT_PUBLIC_SITE_URL="https://icci.co.in"
```

### 4. Running the Application

```bash
# Start the development server on port 3000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on port `3000` |
| `npm run build` | Builds the optimized production bundle |
| `npm run start` | Runs the built application in production mode |
| `npm run lint` | Runs ESLint code quality checks |

---

## Architecture & CMS Integration

The website functions as a headless consumer of the ICCI CMS:

- **CMS Client** (`lib/cms.ts`): Makes typed server-side requests to the CMS API (`/api/...`) with automatic tag caching and configurable timeout protection.
- **Typed Content Fetchers** (`lib/content.ts`): Dedupes requests per render pass and exports typed helpers:
  - `getSite()`: Global site settings, header/footer copy, and social links.
  - `getPage(slug)`: Page sections and SEO metadata.
  - `getLeaders()`: Office bearers and executive committee members.
  - `getNews()`: Published articles and news items.
  - `getEvents()`: Upcoming and past event records.
  - `getNav()`: Navigation menu links, hierarchical dropdowns, and CTA action buttons.
- **On-Demand Revalidation** (`app/api/revalidate/route.ts`): Receives webhook calls from the CMS whenever content is updated and invalidates matching cache tags (`site`, `page:<slug>`, `leaders`, `news`, `events`).

---

## License

Private and proprietary. Designed and maintained for the Indian Chamber of Construction Industry.
