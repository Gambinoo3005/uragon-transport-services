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
  X, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  DollarSign,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cancellation Policy | Uragon Transport Services | Car Rental Cancellation",
  description:
    "Learn about our cancellation policy for car rentals. Free cancellation up to 24 hours before pickup. Flexible terms for your convenience.",
  keywords: "car rental cancellation, booking cancellation, rental refund policy, Bicol car rental cancellation",
}

const cancellationTerms = [
  {
    period: "24+ Hours Before Pickup",
    policy: "Free Cancellation",
    details: [
      "Full refund of rental amount",
      "No cancellation fees",
      "Instant refund processing",
      "Can be done online or by phone"
    ],
    icon: CheckCircle,
    color: "green"
  },
  {
    period: "12-24 Hours Before Pickup",
    policy: "Partial Refund",
    details: [
      "75% refund of rental amount",
      "25% cancellation fee applies",
      "Refund processed within 3-5 days",
      "Contact us to cancel"
    ],
    icon: AlertCircle,
    color: "orange"
  },
  {
    period: "Less than 12 Hours",
    policy: "No Refund",
    details: [
      "No refund for last-minute cancellations",
      "Full rental amount forfeited",
      "Emergency exceptions may apply",
      "Contact us for special circumstances"
    ],
    icon: X,
    color: "red"
  }
]

const modificationPolicy = [
  {
    title: "Date Changes",
    description: "Modify your rental dates",
    details: [
      "Free date changes up to 24 hours before pickup",
      "Subject to vehicle availability",
      "Price differences may apply",
      "Contact us to modify dates"
    ]
  },
  {
    title: "Vehicle Changes",
    description: "Upgrade or downgrade your vehicle",
    details: [
      "Free vehicle changes up to 24 hours before pickup",
      "Price differences will be adjusted",
      "Subject to vehicle availability",
      "Contact us to change vehicle"
    ]
  },
  {
    title: "Pickup Location Changes",
    description: "Change your pickup location",
    details: [
      "Free location changes up to 24 hours before pickup",
      "Subject to availability at new location",
      "Additional charges may apply for remote locations",
      "Contact us to change location"
    ]
  }
]

const refundProcess = [
  "Cancellation request submitted",
  "Request processed within 24 hours",
  "Refund amount calculated based on policy",
  "Refund processed to original payment method",
  "Refund appears in 3-5 business days",
  "Confirmation email sent"
]

const exceptions = [
  "Medical emergencies with documentation",
  "Flight cancellations or delays",
  "Natural disasters or severe weather",
  "Government travel restrictions",
  "Death in immediate family"
]

export default function CancellationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="Cancellation Policy"
          highlight="Cancellation"
          description="We understand that plans can change. Our flexible cancellation policy allows you to cancel or modify your booking with minimal fees when done in advance."
          badge="Flexible Policy"
        />

        {/* Cancellation Terms */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Cancellation Terms"
            description="Cancellation fees based on timing of your request"
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {cancellationTerms.map((term, index) => (
              <ContentCard
                key={index}
                type="icon"
                icon={term.icon}
                title={term.period}
                description={`${term.policy}: ${term.details.join(' • ')}`}
                variant="centered"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Modification Policy */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Modification Policy"
            description="Change your booking details without cancellation"
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {modificationPolicy.map((policy, index) => (
              <ContentCard
                key={index}
                type="feature"
                title={policy.title}
                description={`${policy.description}: ${policy.details.join(' • ')}`}
                variant="default"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        {/* Refund Process */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Refund Process"
            description="How refunds are processed after cancellation"
            maxWidth="4xl"
          />

          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Step-by-Step Refund Process"
              description={refundProcess.join(' → ')}
              variant="default"
            />
          </div>
        </SectionContainer>

        {/* Exceptions */}
        <SectionContainer background="muted/50" padding="xl">
          <SectionHeader
            title="Emergency Exceptions"
            description="Special circumstances where cancellation fees may be waived"
            maxWidth="4xl"
          />

          <div className="max-w-4xl mx-auto">
            <ContentCard
              type="feature"
              title="Special Circumstances"
              description={`${exceptions.join(' • ')} Note: Emergency exceptions require proper documentation and are subject to management approval. Contact us immediately if you believe your situation qualifies for an exception.`}
              variant="default"
            />
          </div>
        </SectionContainer>

        {/* Contact Information */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Need to Cancel or Modify?"
            description="Contact us to cancel or modify your booking"
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
            <p className="text-muted-foreground mb-8">
              Call us to cancel or modify your booking. Our customer service team is 
              available to assist you with any changes to your reservation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="text-sm">
                <Clock className="h-4 w-4 mr-1" />
                Available 24/7
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                Free cancellation up to 24 hours
              </Badge>
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
