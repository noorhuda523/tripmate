import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TripsBoard } from '@/components/trips/trips-board'

export default function TripsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <TripsBoard />
      </main>
      <SiteFooter />
    </div>
  )
}
