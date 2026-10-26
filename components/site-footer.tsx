import Link from 'next/link'
import { Compass } from 'lucide-react'

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Trip Planner', href: '/planner' },
      { label: 'AI Itinerary', href: '/itinerary' },
      { label: 'Interactive Maps', href: '/itinerary' },
      { label: 'My Trips', href: '/trips' },
      { label: 'Booking demo', href: '/bookings' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Sign in', href: '/auth' },
      { label: 'Profile', href: '/profile' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/15 bg-card/80 shadow-[0_-20px_60px_-50px_var(--primary)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Compass className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">TripMate</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your AI travel companion. Plan smarter, travel further, and turn every trip into a
              perfectly crafted journey.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li><span className="text-sm text-muted-foreground">Privacy Policy <span className="text-xs">(coming soon)</span></span></li>
              <li><span className="text-sm text-muted-foreground">Terms of Service <span className="text-xs">(coming soon)</span></span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TripMate. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Crafted for travelers, powered by AI.</p>
        </div>
      </div>
    </footer>
  )
}
