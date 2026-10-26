import Link from 'next/link'
import { MapPin, Search, Sparkles, Star, Play } from 'lucide-react'
import { GlobeScene } from '@/components/landing/globe-scene'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
            AI-powered trip planning
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Plan Your Perfect Trip with AI
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Tell TripMate where you dream of going. In seconds, get a personalized day-by-day
            itinerary complete with maps, weather, and a budget that fits.
          </p>

          <div className="mt-8 w-full max-w-md rounded-2xl border border-border bg-card p-2 shadow-lg">
            <form className="flex flex-col gap-2 sm:flex-row" action="/planner">
              <div className="flex flex-1 items-center gap-2 rounded-xl px-3">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  name="destination"
                  placeholder="Where do you want to go?"
                  className="h-11 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-xl font-semibold">
                Start Planning
              </Button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <p className="font-display text-2xl font-bold text-foreground">180+</p>
              <p className="text-sm text-muted-foreground">Destinations</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">50k+</p>
              <p className="text-sm text-muted-foreground">Trips planned</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <p className="font-display text-2xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-primary shadow-2xl sm:aspect-[5/5]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-coast.png"
              aria-label="Aerial travel footage over a tropical coastline"
            >
              <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
            <GlobeScene />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-primary/80 px-3 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
              <Play className="h-3.5 w-3.5 fill-current" /> Live travel preview
            </div>
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 pr-5 shadow-xl backdrop-blur-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Next stop</p>
              <p className="font-display text-sm font-bold text-foreground">Bali, Indonesia</p>
            </div>
          </div>

          <div className="absolute right-4 top-4 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">5-day itinerary</p>
            <p className="font-display text-sm font-bold text-foreground">Ready in 12s</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
}
