'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  CalendarDays,
  Check,
  MapPin,
  Sparkles,
  Users,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import { interestOptions, travelStyles } from '@/lib/data'

export function PlannerForm() {
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [budget, setBudget] = useState(3500)
  const [style, setStyle] = useState('Relaxed')
  const [interests, setInterests] = useState<string[]>(['Beaches', 'Food & Dining'])
  const [loading, setLoading] = useState(false)

  function toggleInterest(interest: string) {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => router.push('/itinerary'), 900)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <fieldset className="tm-surface p-6">
          <legend className="px-2 font-display text-lg font-bold text-foreground">
            Where &amp; when
          </legend>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="destination" className="mb-2 flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" /> Destination
              </Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Bali, Indonesia"
                className="h-11 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="start" className="mb-2 flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-primary" /> Start date
              </Label>
              <Input id="start" type="date" className="h-11 rounded-xl" />
            </div>

            <div>
              <Label htmlFor="end" className="mb-2 flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-primary" /> End date
              </Label>
              <Input id="end" type="date" className="h-11 rounded-xl" />
            </div>
          </div>
        </fieldset>

        <fieldset className="tm-surface p-6">
          <legend className="px-2 font-display text-lg font-bold text-foreground">
            Travelers &amp; budget
          </legend>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label className="mb-2 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" /> Travelers
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl text-lg"
                  onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                >
                  -
                </Button>
                <span className="w-10 text-center font-display text-xl font-bold text-foreground">
                  {travelers}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl text-lg"
                  onClick={() => setTravelers((t) => Math.min(12, t + 1))}
                >
                  +
                </Button>
              </div>
            </div>

            <div>
              <Label className="mb-2 flex items-center justify-between gap-1.5">
                <span className="flex items-center gap-1.5">
                  <Wallet className="h-4 w-4 text-primary" /> Budget
                </span>
                <span className="font-display font-bold text-foreground">
                  ${budget.toLocaleString()}
                </span>
              </Label>
              <Slider
                value={[budget]}
                min={500}
                max={15000}
                step={100}
                onValueChange={(v) => setBudget(v[0])}
                className="mt-4"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>$500</span>
                <span>$15,000</span>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="tm-surface p-6">
          <legend className="px-2 font-display text-lg font-bold text-foreground">
            Travel style
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {travelStyles.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStyle(s)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  style === s
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="tm-surface p-6">
          <legend className="px-2 font-display text-lg font-bold text-foreground">Interests</legend>
          <div className="flex flex-wrap gap-2.5">
            {interestOptions.map((interest) => {
              const active = interests.includes(interest)
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  {active && <Check className="h-3.5 w-3.5" />}
                  {interest}
                </button>
              )
            })}
          </div>
        </fieldset>
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="tm-surface p-6 shadow-sm">
          <h3 className="font-display text-lg font-bold text-foreground">Trip summary</h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted-foreground">Destination</dt>
              <dd className="font-medium text-foreground">{destination || 'Anywhere'}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted-foreground">Travelers</dt>
              <dd className="font-medium text-foreground">{travelers}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted-foreground">Budget</dt>
              <dd className="font-medium text-foreground">${budget.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted-foreground">Style</dt>
              <dd className="font-medium text-foreground">{style}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="shrink-0 text-muted-foreground">Interests</dt>
              <dd className="text-right font-medium text-foreground">
                {interests.length ? interests.join(', ') : 'Open to anything'}
              </dd>
            </div>
          </dl>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="mt-6 w-full rounded-full font-semibold"
          >
            {loading ? (
              'Building your trip...'
            ) : (
              <>
                <Sparkles className="h-4 w-4" /> Generate Itinerary
              </>
            )}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free to plan. No credit card required.
          </p>
        </div>
      </aside>
    </form>
  )
}
