import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Hero } from "@/components/hero"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { KeyUSPs } from "@/components/key-usps"
import { FleetHighlights } from "@/components/fleet-highlights"
import { RatesTeaser } from "@/components/rates-teaser"
import { HowItWorks } from "@/components/how-it-works"
import { ServiceAreas } from "@/components/service-areas"
import { SocialProof } from "@/components/social-proof"
import { FAQsPreview } from "@/components/faqs-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickBookingForm />
        <KeyUSPs />
        <FleetHighlights />
        <RatesTeaser />
        <HowItWorks />
        <ServiceAreas />
        <SocialProof />
        <FAQsPreview />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
