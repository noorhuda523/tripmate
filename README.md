# TripMate AI Travel Planner

TripMate is a frontend-only AI travel planning experience for creating personalized trips. It helps travelers explore destinations, configure trip preferences, review itinerary ideas, visualize locations, estimate expenses, and save plans for later.

**Live Demo:** [tripmate-dusky.vercel.app](https://tripmate-dusky.vercel.app)

> **Scope note:** TripMate does not currently connect to booking providers, payment processors, authentication services, or a database. Hotel, flight, stay, and experience booking interactions are frontend demonstrations powered by mock data and do not create real reservations or charges.

## Key Features

- **AI-inspired itinerary planning** with destination, dates, traveler count, budget, travel style, and interest inputs.
- **Explore destinations** with curated destination cards and travel-style categories.
- **Day-by-day itinerary view** with activities, weather context, route/map presentation, and expense estimates.
- **Interactive maps** using a visual route/map presentation for itinerary locations.
- **Estimated trip budgets** for planning purposes, including daily and category-level estimates.
- **My Trips dashboard** for browsing upcoming, planning, and completed trip concepts.
- **Frontend booking demonstrations** for hotels, flights, stays, and experiences using mock catalog data only.
- **Light and dark mode** with a persisted browser theme preference and purple/violet styling in both themes.
- **Responsive UI** optimized for desktop, tablet, and mobile layouts.
- **Scroll-triggered reveals and hover transitions** across landing-page sections, cards, controls, and navigation.
- **Accessible interactions** with semantic links, keyboard-friendly controls, labels, focus states, and responsive navigation.

## Screenshots

The repository does not currently include committed application screenshots. The live interface can be viewed at:

- [TripMate live demo](https://tripmate-dusky.vercel.app)

The project includes generated travel imagery under [`public/images`](./public/images), including the Santorini sunset hero background and destination visuals.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) with CSS variables and custom design tokens
- [shadcn/ui](https://ui.shadcn.com/) components using the Base Nova style
- [Lucide React](https://lucide.dev/) for interface icons
- [Three.js](https://threejs.org/) and React Three Fiber dependencies are installed for frontend motion/visual experiments; the current reference-matched hero does not render the removed wireframe globe
- [Vercel Analytics](https://vercel.com/analytics) in production builds
- `next/font` with Inter and Space Grotesk
- `pnpm` lockfile and workspace configuration

## Design and Interaction

TripMate uses a cinematic purple/violet travel aesthetic inspired by the current landing-page reference: deep navy surfaces, violet gradients, magenta accents, glass-like cards, rounded controls, soft borders, and layered shadows.

The shared design system lives primarily in [`app/globals.css`](./app/globals.css), including reusable visual utilities such as:

- `.tm-surface` for glassy card and panel surfaces
- `.tm-pill` for compact highlighted labels
- `.tm-gradient-button` for primary gradient actions
- `.tm-page-hero` for secondary page hero sections

Light and dark themes use the same purple visual language while adapting contrast and surface colors. The theme toggle stores the selected mode in the browser under `tripmate-theme` and falls back to the system preference on first load.

Scroll reveal behavior is implemented in [`components/scroll-reveal.tsx`](./components/scroll-reveal.tsx) with `IntersectionObserver`, so sections animate into view without requiring an animation package.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page with hero, destinations, features, process overview, stays/experiences, and CTA |
| `/explore` | Destination discovery and filtering surface |
| `/planner` | Trip preference form and planning summary |
| `/itinerary` | Sample day-by-day itinerary, map, weather, activities, and budget view |
| `/trips` | Saved trip concepts and trip status dashboard |
| `/bookings` | Frontend-only booking demonstration for stays, flights, and experiences |
| `/pricing` | Frontend pricing presentation |
| `/auth` | Frontend login/sign-up presentation; no real authentication is connected |
| `/profile` | Frontend profile presentation |

## Installation

### Requirements

- Node.js 20 or newer recommended
- pnpm recommended because the repository includes `pnpm-lock.yaml` and `pnpm-workspace.yaml`

### Install dependencies

```bash
pnpm install
```

### Start local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app uses Next.js Fast Refresh, so changes to app and component files appear automatically during development.

## Project Structure

```text
tripmate/
├── app/
│   ├── auth/              # Frontend auth presentation
│   ├── bookings/          # Booking demonstration route
│   ├── explore/           # Destination discovery route
│   ├── itinerary/         # Itinerary route
│   ├── planner/           # Trip planning route
│   ├── pricing/           # Pricing presentation route
│   ├── profile/           # Profile presentation route
│   ├── trips/             # Saved trips route
│   ├── globals.css        # Shared tokens, themes, utilities, and base styles
│   ├── layout.tsx         # Root layout, fonts, metadata, and analytics
│   └── page.tsx           # Landing page
├── components/
│   ├── landing/           # Landing-page sections
│   ├── itinerary/         # Itinerary UI
│   ├── planner/           # Planner form and controls
│   ├── trips/             # My Trips dashboard
│   ├── ui/                # shadcn/base UI primitives
│   ├── scroll-reveal.tsx  # IntersectionObserver reveal animation
│   ├── site-header.tsx    # Responsive navigation
│   ├── site-footer.tsx    # Footer navigation and legal placeholders
│   └── theme-toggle.tsx   # Light/dark mode control
├── lib/
│   ├── data.ts            # Mock destinations and frontend planning data
│   └── utils.ts           # Shared class-name utility
├── public/
│   ├── images/            # Hero, destination, and map imagery
│   └── *.png, *.svg       # App icons and static assets
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Available Scripts

```bash
pnpm dev       # Start the Next.js development server
pnpm build     # Create a production build
pnpm start     # Start the production server after building
```

The project is configured with `next.config.mjs` to use unoptimized images for the current frontend deployment setup. TypeScript build errors are currently ignored by the Next.js configuration.

## Deployment

The project is designed for deployment on Vercel.

### Deploy with Vercel

1. Import the repository into Vercel or connect the existing Vercel project.
2. Use the default Next.js framework detection.
3. Install dependencies with `pnpm install`.
4. Build with `pnpm build`.
5. Serve the production output with `pnpm start` when running locally or in a compatible host environment.

The current live deployment is available at [tripmate-dusky.vercel.app](https://tripmate-dusky.vercel.app).

No database, server actions, API routes, payment keys, booking credentials, or authentication environment variables are required for the current frontend-only experience.

## Product Scope

TripMate is currently a realistic frontend prototype for AI-assisted travel planning. It is not a travel marketplace or transaction system. Booking cards, pricing, login, saved trips, and confirmation-style interactions are visual product demonstrations using local/mock data until production integrations are intentionally added.
