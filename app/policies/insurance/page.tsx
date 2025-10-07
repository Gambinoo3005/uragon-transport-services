import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Info,
  DollarSign,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Insurance Coverage | Uragon Transport Services | Car Rental Insurance",
  description:
    "Learn about our comprehensive insurance coverage for car rentals. Basic insurance included, additional coverage available for peace of mind.",
  keywords: "car rental insurance, rental car coverage, vehicle insurance, Bicol car rental insurance",
}

const insuranceCoverage = [
  {
    title: "Basic Insurance (Included)",
    description: "Comprehensive coverage included in all rentals",
    details: [
      "Third-party liability coverage",
      "Comprehensive vehicle coverage",
      "Personal accident insurance for driver and passengers",
      "Theft and fire protection",
      "Natural disaster coverage"
    ],
    icon: Shield,
    included: true
  },
  {
    title: "Collision Damage Waiver",
    description: "Protection against collision damage",
    details: [
      "Covers damage from collisions",
      "Reduces financial responsibility",
      "Available as add-on coverage",
      "Covers most accident scenarios",
      "Peace of mind for drivers"
    ],
    icon: CheckCircle,
    included: false
  },
  {
    title: "Personal Effects Coverage",
    description: "Protection for personal belongings",
    details: [
      "Covers personal items in vehicle",
      "Limited coverage amount",
      "Exclusions apply",
      "Additional premium required",
      "Subject to deductible"
    ],
    icon: Users,
    included: false
  },
  {
    title: "Zero Deductible Option",
    description: "Eliminate out-of-pocket expenses",
    details: [
      "No deductible for covered claims",
      "Full coverage for accidents",
      "Additional premium required",
      "Peace of mind protection",
      "Recommended for peace of mind"
    ],
    icon: DollarSign,
    included: false
  }
]

const whatIsCovered = [
  "Vehicle damage from accidents",
  "Third-party property damage",
  "Third-party bodily injury",
  "Theft of the rental vehicle",
  "Fire damage to the vehicle",
  "Natural disaster damage",
  "Personal accident for driver and passengers",
  "Legal liability protection"
]

const whatIsNotCovered = [
  "Personal belongings in the vehicle",
  "Damage from reckless driving",
  "Damage from driving under the influence",
  "Damage from off-road use",
  "Damage from racing or competitive driving",
  "Damage from towing without permission",
  "Damage from commercial use",
  "Wear and tear or mechanical failure"
]

const claimsProcess = [
  "Report incident immediately to our office",
  "Contact local police if required",
  "Do not admit fault at the scene",
  "Gather witness information and photos",
  "Complete incident report form",
  "Submit all required documentation",
  "Claims processed within 30 days",
  "Deductible applies unless waived"
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <Badge className="bg-green-600">Comprehensive Coverage</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Insurance Coverage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive insurance coverage is included with all our rentals. 
              Additional coverage options are available for enhanced protection and peace of mind.
            </p>
          </div>
        </section>

        {/* Insurance Coverage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Insurance Options</h2>
              <p className="text-lg text-muted-foreground">
                Choose the coverage that best fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {insuranceCoverage.map((coverage, index) => (
                <Card key={index} className={coverage.included ? "border-green-200 bg-green-50/50" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <coverage.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{coverage.title}</CardTitle>
                          <CardDescription>{coverage.description}</CardDescription>
                        </div>
                      </div>
                      {coverage.included && (
                        <Badge className="bg-green-600">Included</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {coverage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
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

        {/* What's Covered */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What's Covered</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive protection for your rental experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Coverage Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatIsCovered.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Not Covered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What's Not Covered</h2>
              <p className="text-lg text-muted-foreground">
                Important exclusions to be aware of
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-orange-800">Exclusions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatIsNotCovered.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-orange-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Claims Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Claims Process</h2>
              <p className="text-lg text-muted-foreground">
                What to do in case of an incident
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Claims Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {claimsProcess.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-blue-800">Important Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-blue-700">
                    <p>
                      <strong>Deductible applies</strong> to most claims unless you purchase 
                      additional coverage. The deductible amount varies by vehicle type and 
                      coverage level.
                    </p>
                    <p>
                      <strong>Additional coverage</strong> can be purchased at the time of 
                      rental to reduce or eliminate deductibles and provide enhanced protection.
                    </p>
                    <p>
                      <strong>Contact us immediately</strong> in case of any incident. 
                      Our 24/7 emergency hotline is available for assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
