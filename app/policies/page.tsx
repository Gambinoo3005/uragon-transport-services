"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
import { FileText, Fuel, Gauge, Shield, X } from "lucide-react"

const policies = [
  {
    name: "Fuel Policy",
    slug: "fuel-policy",
    description: "Understanding fuel requirements and charges",
    icon: Fuel,
    summary: "Return vehicle with same fuel level as received",
    important: true
  },
  {
    name: "Mileage Policy",
    slug: "mileage-policy",
    description: "Unlimited mileage for self-drive rentals",
    icon: Gauge,
    summary: "No mileage restrictions for most vehicles",
    important: true
  },
  {
    name: "Insurance",
    slug: "insurance",
    description: "Comprehensive insurance coverage details",
    icon: Shield,
    summary: "Basic insurance included, additional coverage available",
    important: true
  },
  {
    name: "Cancellation",
    slug: "cancellation",
    description: "Cancellation and modification policies",
    icon: X,
    summary: "Free cancellation up to 24 hours before pickup",
    important: false
  }
]

const generalTerms = [
  {
    title: "Rental Requirements",
    items: [
      "Valid driver's license (Philippine or international)",
      "Valid government-issued ID",
      "Credit card for security deposit",
      "Minimum age: 21 years (25 for premium vehicles)"
    ]
  },
  {
    title: "Vehicle Condition",
    items: [
      "Vehicle must be returned in same condition as received",
      "Report any damage immediately",
      "No smoking in vehicles",
      "No pets allowed without prior approval"
    ]
  },
  {
    title: "Usage Restrictions",
    items: [
      "No off-road driving",
      "No towing without permission",
      "No commercial passenger transport",
      "No racing or competitive driving"
    ]
  },
  {
    title: "Payment Terms",
    items: [
      "Full payment required at booking",
      "Security deposit held on credit card",
      "Additional charges for damages or violations",
      "Refunds processed within 3-5 business days"
    ]
  }
]

export default function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="Rental Policies"
          highlight="Policies"
          description="Our transparent and fair policies ensure a smooth rental experience. Please review our terms and conditions before booking your vehicle."
        />

        {/* Policy Cards */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Our Policies"
            description="Click on any policy to read the complete details"
            maxWidth="4xl"
          />

          <StandardGrid variant="4col" gap="md">
            {policies.map((policy, index) => (
              <ContentCard
                key={index}
                type="icon"
                icon={policy.icon}
                title={policy.name}
                description={policy.description}
                variant="centered"
                href={`/policies/${policy.slug}`}
                buttonText="Read More"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* General Terms */}
        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="General Terms & Conditions"
            description="Important information about your rental agreement"
            maxWidth="4xl"
          />

          <StandardGrid variant="2col" gap="lg">
            {generalTerms.map((term, index) => (
              <ContentCard
                key={index}
                type="feature"
                title={term.title}
                description={term.items.join(' • ')}
                variant="default"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Important Notes */}
        <SectionContainer background="default" padding="xl">
          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Important Notes"
              description="All policies are subject to change without notice. Customers are responsible for reading and understanding all policies. Violation of policies may result in additional charges or rental termination. Contact us if you have any questions about our policies."
              variant="default"
            />
          </div>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
