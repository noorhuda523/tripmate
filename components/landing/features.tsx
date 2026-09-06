import Image from 'next/image'
import Link from 'next/link'
import { CalendarClock, CloudSun, Map, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Map,
    title: 'Interactive maps',
    detail: 'See every stop plotted on a live map with optimized routes between them.',
  },
  {
    icon: CloudSun,
    title: 'Weather-aware',
    detail: 'Daily forecasts baked into your plan so you always pack and prepare right.',
  },
  {
    icon: Wallet,
    title: 'Smart budgeting',
    detail: 'Transparent cost estimates per day and per activity, tuned to your budget.',
  },
  {
    icon: CalendarClock,
    title: 'Day-by-day plans',
    detail: 'A clear hour-by-hour schedule you can reorder and customize in a tap.',
  },
]

export function Features() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src="/images/dest-amalfi.png"
              alt="Colorful cliffside village on the Amalfi Coast"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-medium text-primary">Everything in one place</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            A complete travel companion, not just a list
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            TripMate combines the details that usually live in a dozen browser tabs into one
            beautiful, adaptive plan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8 rounded-full font-semibold">
            <Link href="/planner">Build my itinerary</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
