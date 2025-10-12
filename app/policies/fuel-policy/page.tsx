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
  Fuel, 
  AlertCircle, 
  CheckCircle, 
  Info,
  DollarSign,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fuel Policy | Uragon Transport Services | Car Rental Fuel Terms",
  description:
    "Learn about our fuel policy for car rentals. Understand fuel requirements, charges, and what to expect when returning your rental vehicle.",
  keywords: "car rental fuel policy, fuel charges, rental car fuel, Bicol car rental fuel terms",
}

const fuelPolicyPoints = [
  {
    title: "Fuel Level at Pickup",
    description: "All vehicles are provided with a full tank of fuel",
    details: [
      "Vehicle will have full tank at pickup",
      "Fuel level will be recorded on rental agreement",
      "Customer is responsible for fuel consumption during rental",
      "No fuel charges at pickup"
    ],
    icon: CheckCircle
  },
  {
    title: "Fuel Level at Return",
    description: "Vehicle must be returned with the same fuel level as received",
    details: [
      "Return vehicle with full tank if received with full tank",
      "Fuel level will be checked upon return",
      "Customer responsible for refueling before return",
      "Fuel charges apply if returned with less fuel"
    ],
    icon: AlertCircle
  },
  {
    title: "Fuel Charges",
    description: "Additional charges for insufficient fuel level",
    details: [
      "₱80 per liter for missing fuel",
      "₱200 service fee for refueling",
      "Charges based on current fuel prices",
      "Payment required before vehicle return"
    ],
    icon: DollarSign
  },
  {
    title: "Refueling Options",
    description: "Convenient options for refueling your vehicle",
    details: [
      "Self-refuel at any gas station",
      "We can refuel for you (additional service fee)",
      "Gas stations available near our office",
      "24/7 gas stations in Legazpi City"
    ],
    icon: Info
  }
]

const fuelTips = [
  "Plan your refueling stops before returning the vehicle",
  "Keep fuel receipts as proof of refueling",
  "Allow extra time for refueling before return",
  "Check fuel level before starting your return journey",
  "Gas stations near our office: Shell, Petron, Caltex"
]

const exceptions = [
  "With-driver service includes fuel in the rate",
  "Long-term rentals may have different fuel arrangements",
  "Corporate accounts may have special fuel terms",
  "Emergency situations may have different policies"
]

export default function FuelPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="Fuel Policy"
          highlight="Fuel"
          description="Understanding our fuel policy is essential for a smooth rental experience. Please review these terms to avoid additional charges."
          badge="Important Policy"
        />

        {/* Policy Details */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Fuel Policy Details"
            description="Complete information about fuel requirements and charges"
            maxWidth="4xl"
          />

          <StandardGrid variant="2col" gap="lg">
            {fuelPolicyPoints.map((point, index) => (
              <ContentCard
                key={index}
                type="icon"
                icon={point.icon}
                title={point.title}
                description={`${point.description}: ${point.details.join(' • ')}`}
                variant="default"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Fuel Tips */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Fuel Tips"
            description="Helpful tips to avoid fuel charges and ensure smooth return"
            maxWidth="4xl"
          />

          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Best Practices for Fuel Management"
              description={fuelTips.join(' • ')}
              variant="default"
            />
          </div>
        </SectionContainer>

        {/* Exceptions */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Policy Exceptions"
            description="Special cases where fuel policy may differ"
            maxWidth="4xl"
          />

          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Special Cases"
              description={exceptions.join(' • ')}
              variant="default"
            />
          </div>
        </SectionContainer>

        {/* Important Notice */}
        <SectionContainer background="muted/50" padding="xl">
          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Important Notice"
              description="Fuel charges are non-negotiable and must be paid before vehicle return. We recommend refueling at gas stations near our office to avoid service fees. Current fuel prices are subject to market rates and may change without notice. Charges are calculated based on the fuel price at the time of return. Contact us immediately if you have any questions about fuel policy or need assistance with refueling."
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
