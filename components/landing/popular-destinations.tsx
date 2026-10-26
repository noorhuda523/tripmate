import { destinations } from '@/lib/data'
import { DestinationCard } from '@/components/destination-card'
import { ScrollReveal } from '@/components/scroll-reveal'

export function PopularDestinations() {
  return (
    <section id="destinations" className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-16 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-medium text-primary">Trending now</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Popular destinations
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground text-pretty">
            Get inspired by the places travelers love most, then let TripMate turn any of them into a
            complete plan.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <ScrollReveal key={destination.slug} delay={index * 70}>
              <DestinationCard destination={destination} />
            </ScrollReveal>
          ))}
      </div>
    </section>
  )
}
