import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomepageCTABanner } from "@/components/homepage-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Hero } from "@/components/hero"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { KeyUSPs } from "@/components/key-usps"
import { FleetHighlights } from "@/components/fleet-highlights"
import { LoyaltyCard } from "@/components/loyalty-card"
import { ServicesSection } from "@/components/services-section"
import { PromosSection } from "@/components/promos-section"
import { HowItWorks } from "@/components/how-it-works"
import { RequirementsSection } from "@/components/requirements-section"
import { PoliciesSection } from "@/components/policies-section"
import { SafetySupportSection } from "@/components/safety-support-section"
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
        <LoyaltyCard />
        <ServicesSection />
        <PromosSection />
        <HowItWorks />
        <RequirementsSection />
        <PoliciesSection />
        <SafetySupportSection />
        <FAQsPreview />
        <HomepageCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
