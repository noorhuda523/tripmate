import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ItineraryView } from '@/components/itinerary/itinerary-view'

export default function ItineraryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ItineraryView />
      </main>
      <SiteFooter />
    </div>
  )
}
