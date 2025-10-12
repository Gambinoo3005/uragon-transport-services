import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Fuel, 
  Gauge, 
  Shield, 
  X,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rental Policies | Uragon Transport Services | Terms & Conditions",
  description:
    "View our comprehensive rental policies including fuel policy, mileage policy, insurance coverage, and cancellation terms. Transparent and fair policies for all customers.",
  keywords: "car rental policies, fuel policy, mileage policy, insurance, cancellation policy, rental terms",
}

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
              <Link key={index} href={`/policies/${policy.slug}`}>
                <ContentCard
                  type="icon"
                  icon={policy.icon}
                  title={policy.name}
                  description={policy.description}
                  variant="centered"
                  href={`/policies/${policy.slug}`}
                  buttonText="Read More"
                />
              </Link>
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* General Terms */}
        <SectionContainer background="muted/50" padding="xl">
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

        {/* Contact Information */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Questions About Our Policies?"
            description="Our customer service team is here to help clarify any policy questions"
            maxWidth="2xl"
          />

          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <a 
                href="tel:+639159234867" 
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                +63 915 923 4867
              </a>
            </div>
            <p className="text-muted-foreground">
              Call us for clarification on any policy or to discuss your specific rental needs
            </p>
          </div>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
