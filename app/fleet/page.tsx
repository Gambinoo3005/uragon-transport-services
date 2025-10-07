import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { FleetHero } from "@/components/fleet-hero"
import { VehicleGrid } from "@/components/vehicle-grid"

export const metadata = {
  title: "Our Fleet - Modern Car Rentals | Uragon Transport Services",
  description:
    "Browse our extensive fleet of Toyota, Mitsubishi, and Nissan vehicles. All vehicles are well-maintained, insured, and perfect for exploring Bicol with unlimited mileage.",
  keywords: "car rental fleet Bicol, Toyota rental, Mitsubishi rental, Nissan rental, unlimited mileage, self drive rental",
}

export default function FleetPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FleetHero />
        <VehicleGrid />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
