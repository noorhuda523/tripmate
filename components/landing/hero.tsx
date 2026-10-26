'use client'

import Link from 'next/link'
import { CalendarDays, ChevronRight, MapPin, Search, Sparkles, Star, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#0d0d2d] text-white">
      <div className="absolute inset-0 -z-20 bg-[url('/images/santorini-sunset.png')] bg-cover bg-[center_right] bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0b2c_0%,rgba(11,11,44,0.97)_27%,rgba(23,17,67,0.72)_55%,rgba(25,12,49,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,8,31,0.72)_0%,rgba(12,10,45,0.1)_33%,rgba(10,9,40,0.84)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:py-20">
        <div className="w-full max-w-[690px] animate-in fade-in slide-in-from-left-5 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-950/40 px-4 py-2 text-sm font-semibold text-violet-100 shadow-lg shadow-violet-950/20 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-violet-300" />
            AI-powered travel planner
          </div>

          <h1 className="mt-7 max-w-[660px] font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[78px]">
            Plan Your Perfect
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
              Trip with AI
            </span>
          </h1>

          <p className="mt-7 max-w-[590px] text-lg leading-8 text-indigo-100/80 sm:text-xl">
            Tell TripMate where you dream of going. In seconds, get a personalized day-by-day itinerary complete with maps, weather, and a budget that fits.
          </p>

          <form action="/planner" className="mt-8 flex max-w-[660px] flex-col gap-2 rounded-full border border-violet-300/50 bg-[#221b5e]/70 p-2 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:flex-row">
            <div className="flex min-h-14 flex-1 items-center gap-3 px-5">
              <Search className="h-6 w-6 shrink-0 text-violet-300" />
              <input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-indigo-200/70"
              />
            </div>
            <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 text-base font-bold text-white shadow-lg shadow-fuchsia-950/30 transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200">
              Start Planning
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
            <div className="flex items-center gap-3 border-r border-white/15 pr-6">
              <MapPin className="h-7 w-7 text-violet-400" />
              <div><p className="font-display text-2xl font-bold">180+</p><p className="text-sm text-indigo-200/75">Destinations</p></div>
            </div>
            <div className="flex items-center gap-3 border-r border-white/15 pr-6">
              <CalendarDays className="h-7 w-7 text-violet-400" />
              <div><p className="font-display text-2xl font-bold">50k+</p><p className="text-sm text-indigo-200/75">Trips planned</p></div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-7 w-7 fill-violet-400 text-violet-400" />
              <div><p className="font-display text-2xl font-bold">4.9</p><p className="text-sm text-indigo-200/75">Rating</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-10 hidden animate-in fade-in slide-in-from-right-4 duration-1000 lg:block">
        <div className="rounded-full border border-violet-300/35 bg-[#171442]/75 px-5 py-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" /><div><p className="text-xs text-violet-200">5-day itinerary</p><p className="font-semibold">Ready in 12s</p></div><Zap className="h-5 w-5 text-violet-300" /></div>
        </div>
      </div>

      <Link href="/planner?destination=Santorini%2C%20Greece" className="absolute bottom-20 right-[5%] hidden rounded-full border border-violet-300/40 bg-[#181542]/80 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-violet-200 lg:flex lg:items-center lg:gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/80"><MapPin className="h-5 w-5" /></span>
        <span><span className="block text-xs text-violet-200">Next stop</span><span className="font-semibold">Santorini, Greece</span></span>
        <ChevronRight className="ml-4 h-5 w-5 text-violet-300" />
      </Link>

      <div className="pointer-events-none absolute -bottom-1 left-[-5%] h-24 w-[110%] rounded-[50%_50%_0_0] border-t border-violet-500/60 bg-[#101036]/90 shadow-[0_-20px_80px_rgba(85,47,190,0.28)]" />
    </section>
  )
}
