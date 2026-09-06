import { MessageSquareText, Route, Plane } from 'lucide-react'

const steps = [
  {
    icon: MessageSquareText,
    title: 'Describe your trip',
    detail:
      'Tell TripMate your destination, dates, travel style, and interests in plain language.',
  },
  {
    icon: Route,
    title: 'Get your itinerary',
    detail:
      'Our AI builds a day-by-day plan with activities, maps, weather, and a clear budget.',
  },
  {
    icon: Plane,
    title: 'Book and go',
    detail:
      'Fine-tune anything, save it to My Trips, and set off on a journey made just for you.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-primary">How it works</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            From idea to itinerary in three steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-border bg-background p-7"
            >
              <span className="font-display text-sm font-bold text-muted-foreground">
                0{i + 1}
              </span>
              <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
