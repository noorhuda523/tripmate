import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/landing/hero'
import { PopularDestinations } from '@/components/landing/popular-destinations'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { CTA } from '@/components/landing/cta'
import { StayExperiences } from '@/components/landing/stay-experiences'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PopularDestinations />
        <StayExperiences />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
