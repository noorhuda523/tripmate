'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Bookmark,
  CloudSun,
  MapPin,
  Share2,
  Sun,
  Thermometer,
  Users,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sampleItinerary } from '@/lib/data'
import { cn } from '@/lib/utils'

const weatherIcon: Record<string, typeof Sun> = {
  Sunny: Sun,
  'Partly Cloudy': CloudSun,
}

export function ItineraryView() {
  const [activeDay, setActiveDay] = useState(1)
  const day = sampleItinerary.days.find((d) => d.day === activeDay) ?? sampleItinerary.days[0]
  const WeatherIcon = weatherIcon[day.weather.condition] ?? CloudSun

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
      {/* Header */}
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#241044] via-[#5B21B6] to-[#8B5CF6] text-primary-foreground shadow-2xl shadow-primary/20">
        <div className="relative">
          <div className="relative h-44 w-full sm:h-52">
            <Image
              src="/images/dest-bali.png"
              alt={sampleItinerary.destination}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                AI generated itinerary
              </span>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {sampleItinerary.headline}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-primary-foreground/85">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {sampleItinerary.destination}
                </span>
                <span>{sampleItinerary.dates}</span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> {sampleItinerary.travelers} travelers
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="rounded-full bg-background/95 text-foreground hover:bg-background"
              >
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button className="rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                <Bookmark className="h-4 w-4" /> Save trip
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Left: days */}
        <div>
          {/* Day selector */}
          <div className="flex flex-wrap gap-2">
            {sampleItinerary.days.map((d) => (
              <button
                key={d.day}
                type="button"
                onClick={() => setActiveDay(d.day)}
                className={cn(
                  'rounded-2xl border px-4 py-3 text-left transition-colors',
                  activeDay === d.day
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary/40',
                )}
              >
                <span
                  className={cn(
                    'text-xs font-medium',
                    activeDay === d.day ? 'text-primary-foreground/75' : 'text-muted-foreground',
                  )}
                >
                  Day {d.day}
                </span>
                <span className="block font-display text-sm font-bold">{d.location}</span>
              </button>
            ))}
          </div>

          {/* Day detail */}
          <article className="mt-5 overflow-hidden tm-surface">
            <div className="relative h-48 w-full">
              <Image
                src={day.image || '/placeholder.svg'}
                alt={day.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
                <WeatherIcon className="h-4 w-4 text-primary" />
                {day.weather.condition}
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Thermometer className="h-3.5 w-3.5" />
                  {day.weather.high}° / {day.weather.low}°
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary">Day {day.day}</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                    {day.title}
                  </h2>
                </div>
                <div className="shrink-0 rounded-2xl bg-secondary px-4 py-2 text-right">
                  <p className="text-xs text-muted-foreground">Day budget</p>
                  <p className="font-display text-lg font-bold text-foreground">
                    ${day.dayBudget}
                  </p>
                </div>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{day.summary}</p>

              {/* Timeline */}
              <ol className="mt-6 space-y-1">
                {day.activities.map((activity, i) => (
                  <li key={activity.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                        {activity.time}
                      </span>
                      {i < day.activities.length - 1 && (
                        <span className="my-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-display font-bold text-foreground">{activity.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{activity.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>

        {/* Right: map + budget */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden tm-surface">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/map-placeholder.png"
                alt={`Map of ${sampleItinerary.destination}`}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
              {[
                { top: '28%', left: '34%' },
                { top: '52%', left: '58%' },
                { top: '70%', left: '40%' },
              ].map((pos, i) => (
                <span
                  key={i}
                  style={{ top: pos.top, left: pos.left }}
                  className={cn(
                    'absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-lg ring-4 ring-background',
                    i + 1 === activeDay
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-primary text-primary-foreground',
                  )}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" /> {day.location}
              </p>
              <button className="text-sm font-medium text-primary hover:underline">
                Open map
              </button>
            </div>
          </div>

          <div className="tm-surface p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Wallet className="h-5 w-5 text-primary" /> Budget estimate
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Accommodation', value: 1680 },
                { label: 'Activities', value: 1120 },
                { label: 'Food & Dining', value: 940 },
                { label: 'Transport', value: 1136 },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-medium text-foreground">${row.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="font-display font-bold text-foreground">Total</span>
              <span className="font-display text-xl font-bold text-primary">
                ${sampleItinerary.totalBudget.toLocaleString()}
              </span>
            </div>
          </div>

          <Button asChild variant="outline" className="w-full rounded-full">
            <Link href="/planner">Adjust preferences</Link>
          </Button>
        </aside>
      </div>
    </div>
  )
}
