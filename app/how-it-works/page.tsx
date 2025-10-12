import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SixStepProcess } from "@/components/six-step"
import { uragonSteps } from "@/lib/six-step-data"
import { 
  CheckCircle,
  Users,
  Fuel,
  RotateCcw,
  Banknote,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Uragon Transport Services | 6-Step Car Rental Process",
  description:
    "Renting with Uragon is quick, straightforward, and secure. From inquiry to drive-off and return - here's exactly what to expect in our 6-step process.",
  keywords: "how to rent a car, car rental process, easy booking, Bicol car rental, self drive rental process, with driver service",
}


const selfDriveRequirements = [
  { item: "Valid driver's license", icon: CheckCircle },
  { item: "1 government-issued ID", icon: CheckCircle },
  { item: "Selfie with ID", icon: CheckCircle },
  { item: "LTO Portal login", icon: CheckCircle },
  { item: "Proof of billing", icon: CheckCircle },
  { item: "Reservation fee confirmation", icon: CheckCircle }
]

const policies = [
  {
    title: "Rescheduling & Cancellation",
    icon: RotateCcw,
    details: [
      "Reservation fee is non-refundable",
      "One-time reschedule allowed ≥1 day before travel date",
      "Same-day reschedules are not allowed"
    ]
  },
  {
    title: "Fuel & Mileage",
    icon: Fuel,
    details: [
      "Return with the same fuel level as released",
      "Unlimited mileage within declared province/destination"
    ]
  },
  {
    title: "Insurance & Safety",
    icon: Shield,
    details: [
      "All units carry comprehensive insurance",
      "24/7 roadside assistance included",
      "Replacement unit for covered incidents"
    ]
  },
  {
    title: "Payment & Savings",
    icon: Banknote,
    details: [
      "24-hour billing per rental day",
      "5% off for 3-day rentals",
      "10% off for weekly rentals",
      "Up to 30% off for monthly rentals",
      "Promo: 6+1 day free on qualifying bookings"
    ]
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <PageHero
          title="How It Works"
          highlight="Works"
          description="Renting with Uragon Transport Services is quick, straightforward, and secure. Here's exactly what to expect—from inquiry to drive-off and return."
        />

        {/* Interactive 6-Step Process */}
        <SixStepProcess steps={uragonSteps} />

        {/* Self-Drive Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Self-Drive Requirements
                </h2>
                <p className="text-lg text-muted-foreground">
                  Required documents for self-drive rentals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selfDriveRequirements.map((requirement, index) => (
                  <Card key={index} className="text-center p-6">
                    <requirement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-medium text-foreground">{requirement.item}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">With-Driver Option</h3>
                    <p className="text-muted-foreground">
                      We'll assign a professional driver—no IDs or LTO login required from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Policies You Should Know
              </h2>
              <p className="text-lg text-muted-foreground">
                Important policies and terms for a smooth rental experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {policies.map((policy, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <policy.icon className="h-6 w-6 text-primary" />
                  </div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
