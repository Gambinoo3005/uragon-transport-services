import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesFAQ } from "@/components/services-faq"

export const metadata: Metadata = {
  title: "Car Rental Services in Albay | Uragon Transport Services",
  description:
    "Flexible vehicle solutions in Albay: Self-drive rentals, chauffeur service, airport transfers, vehicle delivery, bridal cars, private tours & business trips. Reliable units, straightforward policies, friendly support.",
  keywords: "car rental Albay, self drive rental Bicol, chauffeur service, airport transfer, vehicle delivery, bridal car service, private tours Mayon, business trips",
}


export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesFAQ />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
