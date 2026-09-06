'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#destinations', label: 'Explore' },
  { href: '/planner', label: 'Planner' },
  { href: '/trips', label: 'My Trips' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
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
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="rounded-full font-medium">
            Login
          </Button>
          <Button asChild className="rounded-full font-semibold">
            <Link href="/planner">Start Planning</Link>
          </Button>
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
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/planner" onClick={() => setOpen(false)}>
                  Start Planning
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
