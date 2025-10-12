import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata: Metadata = {
  title: "Contact Us | Book Your Car Rental in Bicol | Uragon Transport Services",
  description:
    "Contact Uragon Transport Services for car rentals in Bicol. Call +63 915 923 4867, visit our Malilipot office, or book online. Available 7:00 AM - 7:00 PM for your convenience.",
  keywords: "contact Uragon Transport Services, Bicol car rental booking, Malilipot office, phone booking, online reservation, self drive rental",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="We’re Here to Help"
            description="Send us your trip details and we’ll respond within operating hours with options tailored to your needs."
            maxWidth="3xl"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo />
            </div>
          </div>
        </SectionContainer>
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
