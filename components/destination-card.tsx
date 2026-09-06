import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import type { Destination } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
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
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
          <Star className="h-3.5 w-3.5 fill-current" />
          {destination.rating}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">{destination.name}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {destination.country}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">From</p>
            <p className="font-display text-lg font-bold text-foreground">
              ${destination.priceFrom.toLocaleString()}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">{destination.reviews.toLocaleString()} reviews</p>
        </div>
      </div>
    </article>
  )
}
