'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/planner', label: 'Planner' },
  { href: '/bookings', label: 'Book demo' },
  { href: '/trips', label: 'My Trips' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/80 shadow-[0_10px_40px_-30px_var(--primary)] backdrop-blur-xl dark:bg-[#0c0820]/85">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            TripMate
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0]) && link.href !== '/'
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  active
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground dark:text-indigo-100/75 dark:hover:bg-white/10 dark:hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link href="/auth" className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Login</Link>
          <Link href="/planner" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Start Planning</Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle />
              <Link href="/auth" onClick={() => setOpen(false)} className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium">Login</Link>
              <Link href="/planner" onClick={() => setOpen(false)} className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">Start Planning</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
