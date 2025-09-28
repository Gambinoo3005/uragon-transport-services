import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Hero } from "@/components/hero"
import { QuickBookingForm } from "@/components/quick-booking-form"
import { TopVehicles } from "@/components/top-vehicles"
import { PopularServices } from "@/components/popular-services"
import { TrustSignals } from "@/components/trust-signals"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { HeroStats } from "@/components/hero-stats"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickBookingForm />
        <HeroStats />
        <TopVehicles />
        <PopularServices />
        <TrustSignals />
        <TestimonialsSection />
        <FAQSection />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
