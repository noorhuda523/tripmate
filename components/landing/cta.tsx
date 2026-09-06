import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            Your next adventure is one prompt away
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Join thousands of travelers who let TripMate handle the planning, so they can focus on
            the journey.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/planner">Start planning for free</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
