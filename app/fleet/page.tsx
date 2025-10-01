import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { FleetHero } from "@/components/fleet-hero"
import { VehicleGrid } from "@/components/vehicle-grid"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Fleet</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <FleetHero />
        <VehicleGrid />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
