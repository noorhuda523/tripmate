'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DestinationCard } from '@/components/destination-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { destinations } from '@/lib/data'

export default function ExplorePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...Array.from(new Set(destinations.map((item) => item.tag)))]
  const filtered = useMemo(() => destinations.filter((item) => {
    const matchesQuery = `${item.name} ${item.country}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All' || item.tag === category)
  }), [query, category])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_right,theme(colors.primary/20),transparent_40%),linear-gradient(135deg,theme(colors.card),theme(colors.secondary))] px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explore the world</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-7xl">Find a place that feels like you.</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">Browse destination inspiration, then let TripMate shape it into a personal itinerary.</p>
            <div className="mt-10 flex max-w-2xl flex-col gap-3 rounded-3xl border border-border bg-background/80 p-3 shadow-xl backdrop-blur sm:flex-row">
              <div className="flex flex-1 items-center gap-3 px-3"><Search className="h-5 w-5 text-primary" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations or countries" className="w-full bg-transparent py-3 outline-none" /></div>
              <div className="flex items-center gap-2 overflow-x-auto"><SlidersHorizontal className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${category === item ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary/15'}`}>{item}</button>)}</div>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between"><div><p className="text-sm text-muted-foreground">{filtered.length} destinations</p><h2 className="font-display text-3xl font-bold">Curated for your next chapter</h2></div></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((destination, index) => <ScrollReveal key={destination.slug} delay={index * 60}><DestinationCard destination={destination} /></ScrollReveal>)}</div>{filtered.length === 0 && <div className="rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground">No destinations match that search yet.</div>}</div></section>
      </main>
      <SiteFooter />
    </div>
  )
}
