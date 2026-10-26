'use client'

import Image from 'next/image'
import { Check, Hotel, MapPinned, Star, Ticket, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const stays = [
  { name: 'The Ubud House', location: 'Ubud, Bali', image: '/images/dest-bali.png', rating: '4.9', price: '$128', detail: 'per night' },
  { name: 'Cliffside Santorini', location: 'Oia, Greece', image: '/images/dest-santorini.png', rating: '4.8', price: '$214', detail: 'per night' },
  { name: 'Kyoto Garden Stay', location: 'Higashiyama, Japan', image: '/images/dest-kyoto.png', rating: '4.9', price: '$176', detail: 'per night' },
]

const experiences = [
  { name: 'Sunrise rice terrace walk', place: 'Bali', price: '$34', icon: MapPinned },
  { name: 'Private island boat day', place: 'Santorini', price: '$82', icon: Ticket },
  { name: 'Tea ceremony & temple tour', place: 'Kyoto', price: '$56', icon: Hotel },
]

export function StayExperiences() {
  const [reserved, setReserved] = useState<string | null>(null)

  return (
    <section id="stays" className="border-y border-border bg-card/60 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trip add-ons</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Stay and explore, all in one plan.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Browse stays and experiences to shape your itinerary. Prices are estimates, and the frontend demo shows how a reservation handoff can work.</p>
          </div>
          <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">Planning preview</span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div className="mb-4 flex items-center justify-between"><h3 className="font-display text-xl font-bold text-foreground">Recommended stays</h3><span className="text-sm text-muted-foreground">Estimated nightly rates</span></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stays.map((stay) => (
                <article key={stay.name} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                  <div className="relative aspect-[1.3]"><Image src={stay.image} alt={stay.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" /></div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2"><h4 className="font-semibold text-foreground">{stay.name}</h4><span className="flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3.5 w-3.5 fill-accent text-accent" />{stay.rating}</span></div>
                    <p className="mt-1 text-sm text-muted-foreground">{stay.location}</p>
                    <div className="mt-4 flex items-end justify-between gap-2"><p><span className="font-display text-lg font-bold text-foreground">{stay.price}</span> <span className="text-xs text-muted-foreground">{stay.detail}</span></p><Button size="sm" variant="outline" onClick={() => setReserved(stay.name)}>{reserved === stay.name ? <><Check className="mr-1 h-3.5 w-3.5" />Reserved</> : 'Reserve'}</Button></div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between"><h3 className="font-display text-xl font-bold text-foreground">Experiences</h3><Ticket className="h-5 w-5 text-primary" /></div>
            <p className="mt-1 text-sm text-muted-foreground">Add memorable moments to your itinerary.</p>
            <div className="mt-5 space-y-3">
              {experiences.map((experience) => { const Icon = experience.icon; return <div key={experience.name} className="flex items-center gap-3 rounded-xl border border-border p-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-foreground">{experience.name}</p><p className="text-xs text-muted-foreground">{experience.place} · {experience.price} est.</p></div><Button size="sm" variant="ghost" onClick={() => setReserved(experience.name)}>{reserved === experience.name ? <Check className="h-4 w-4 text-primary" /> : '+'}<span className="sr-only">Add {experience.name}</span></Button></div> })}
            </div>
            {reserved && <div className="mt-5 flex items-center justify-between rounded-xl bg-accent/20 px-3 py-2 text-xs text-foreground"><span>Reservation saved for this demo</span><button onClick={() => setReserved(null)} aria-label="Clear selection"><X className="h-4 w-4" /></button></div>}
          </div>
        </div>
      </div>
    </section>
  )
}
