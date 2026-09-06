import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PlannerForm } from '@/components/planner/planner-form'

export default function PlannerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-medium text-primary">Trip Planner</p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Tell us about your dream trip
            </h1>
            <p className="mt-3 text-muted-foreground text-pretty">
              Fill in a few details and TripMate&apos;s AI will craft a personalized day-by-day
              itinerary tailored to your style, interests, and budget.
            </p>
          </div>
          <PlannerForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
