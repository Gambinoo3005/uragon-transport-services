import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { MissionVision } from "@/components/mission-vision"
import { AboutValues } from "@/components/about-values"
import { AboutPromise } from "@/components/about-promise"
import { AboutTeam } from "@/components/about-team"

export const metadata: Metadata = {
  title: "About Us | Uragon Transport Services | Unlock your journey, travel anywhere",
  description:
    "Learn about Uragon Transport Services, your trusted car rental partner in Bicol. We offer affordable rates with unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.",
  keywords: "Uragon Transport Services, Bicol car rental company, self drive rental, unlimited mileage, affordable car rental, Philippines",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <MissionVision />
        <AboutValues />
        <AboutPromise />
        <AboutTeam />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
