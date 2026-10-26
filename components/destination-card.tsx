import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Destination } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

export function DestinationCard({ destination }: { destination: Destination }) {
  const plannerHref = `/planner?destination=${encodeURIComponent(`${destination.name}, ${destination.country}`)}`

  return (
    <Link
      href={plannerHref}
      aria-label={`Plan a trip to ${destination.name}, ${destination.country}`}
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image || '/placeholder.svg'}
          alt={`${destination.name}, ${destination.country}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground hover:bg-background/90">
          {destination.tag}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground">{destination.name}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {destination.country}
        </p>
        <div className="mt-4 border-t border-border pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
            Plan a trip
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
