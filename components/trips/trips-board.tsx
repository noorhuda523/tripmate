'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  CalendarDays,
  MapPin,
  Plus,
  Users,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { savedTrips, type SavedTrip } from '@/lib/data'
import { cn } from '@/lib/utils'

const filters = [
  { key: 'all', label: 'All trips' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'planning', label: 'Planning' },
  { key: 'completed', label: 'Completed' },
] as const

const statusStyles: Record<SavedTrip['status'], string> = {
  upcoming: 'bg-accent text-accent-foreground',
  planning: 'bg-secondary text-primary',
  completed: 'bg-muted text-muted-foreground',
}

export function TripsBoard() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all')

  const trips = useMemo(
    () => (filter === 'all' ? savedTrips : savedTrips.filter((t) => t.status === filter)),
    [filter],
  )

  const stats = useMemo(() => {
    const totalBudget = savedTrips.reduce((sum, t) => sum + t.budget, 0)
    const countries = new Set(savedTrips.map((t) => t.destination.split(', ')[1])).size
    const upcoming = savedTrips.filter((t) => t.status === 'upcoming').length
    return { total: savedTrips.length, totalBudget, countries, upcoming }
  }, [])

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium text-primary">My Trips</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your travel plans
          </h1>
        </div>
        <Button asChild size="lg" className="rounded-full font-semibold">
          <Link href="/planner">
            <Plus className="h-4 w-4" /> Plan new trip
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total trips', value: stats.total },
          { label: 'Upcoming', value: stats.upcoming },
          { label: 'Countries', value: stats.countries },
          { label: 'Total budget', value: `$${stats.totalBudget.toLocaleString()}` },
        ].map((stat) => (
          <div key={stat.label} className="tm-surface p-6">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              filter === f.key
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Trip list */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {trips.map((trip) => (
          <Link
            key={trip.id}
            href="/itinerary"
            className="group flex flex-col overflow-hidden tm-surface transition-all hover:-translate-y-0.5 hover:shadow-lg sm:flex-row"
          >
            <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-40">
              <Image
                src={trip.image || '/placeholder.svg'}
                alt={trip.title}
                fill
                sizes="(max-width: 640px) 100vw, 160px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{trip.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {trip.destination}
                  </p>
                </div>
                <span
                  className={cn(
                    'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold capitalize',
                    statusStyles[trip.status],
                  )}
                >
                  {trip.status}
                </span>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-4 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" /> {trip.days} days
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" /> {trip.travelers} travelers
                </span>
                <span className="col-span-2 flex items-center gap-1.5 font-medium text-foreground">
                  <Wallet className="h-4 w-4 text-primary" /> ${trip.budget.toLocaleString()}
                  <span className="font-normal text-muted-foreground">
                    · {trip.startDate} - {trip.endDate}
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {trips.length === 0 && (
        <div className="mt-6 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
          <p className="font-display text-lg font-bold text-foreground">No trips here yet</p>
          <p className="mt-1 text-muted-foreground">
            Start planning to see your {filter} trips appear.
          </p>
        </div>
      )}
    </div>
  )
}
