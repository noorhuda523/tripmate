'use client'

import { useState } from 'react'
import { Check, Hotel, Plane, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const options = {
  stays: [{ name: 'The Cove Nusa Dua', detail: 'Bali · Oceanfront stay', price: 184, image: '/images/dest-bali.png' }, { name: 'Azure House', detail: 'Amalfi · Boutique villa', price: 242, image: '/images/dest-amalfi.png' }],
  flights: [{ name: 'OceanAir 402', detail: 'SFO → Tokyo · 11h 20m', price: 680, image: '/images/dest-tokyo.png' }, { name: 'Skyline 88', detail: 'LAX → Santorini · 14h 05m', price: 792, image: '/images/dest-santorini.png' }],
  activities: [{ name: 'Sunrise temple walk', detail: 'Kyoto · 3 hours', price: 48, image: '/images/dest-kyoto.png' }, { name: 'Alpine lake kayak', detail: 'Swiss Alps · Half day', price: 76, image: '/images/dest-alps.png' }],
}

export default function BookingsPage() {
  const [tab, setTab] = useState<keyof typeof options>('stays')
  const [selected, setSelected] = useState<string | null>(null)
  const items = options[tab]
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex-1 px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Plan the details</p><h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">Build the trip around the moments.</h1><p className="mt-5 max-w-2xl text-lg text-muted-foreground">Explore illustrative stays, flights, and activities. This frontend demo simulates selection and confirmation only.</p><div className="mt-10 flex gap-2 overflow-x-auto">{([['stays', Hotel, 'Stays'], ['flights', Plane, 'Flights'], ['activities', Sparkles, 'Activities']] as const).map(([key, Icon, label]) => <button key={key} onClick={() => { setTab(key); setSelected(null) }} className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tab === key ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary/15'}`}><Icon className="h-4 w-4" />{label}</button>)}</div><div className="mt-8 grid gap-5 lg:grid-cols-2">{items.map((item) => <article key={item.name} onClick={() => setSelected(item.name)} className={`group grid cursor-pointer grid-cols-[120px_1fr_auto] gap-4 rounded-3xl border bg-card p-3 transition-all hover:-translate-y-1 hover:shadow-xl ${selected === item.name ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}><img src={item.image} alt="" className="h-32 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105" /><div className="py-2"><h2 className="font-display text-xl font-bold">{item.name}</h2><p className="mt-1 text-sm text-muted-foreground">{item.detail}</p><p className="mt-6 text-sm font-semibold text-primary">${item.price}<span className="font-normal text-muted-foreground"> / traveler</span></p></div><div className="flex items-center">{selected === item.name ? <Check className="h-6 w-6 text-primary" /> : <span className="h-3 w-3 rounded-full bg-secondary transition group-hover:bg-primary" />}</div></article>)}</div>{selected && <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-primary/30 bg-primary/10 p-6 sm:flex-row sm:items-center"><div><p className="font-semibold">{selected} selected</p><p className="mt-1 text-sm text-muted-foreground">Demo selection saved locally for this session. No payment or reservation was made.</p></div><Button onClick={() => setSelected(null)} className="rounded-full">Confirm demo selection</Button></div>}</div></main><SiteFooter /></div>
}
