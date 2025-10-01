import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/policies">Policies</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cancellation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <X className="h-8 w-8 text-primary" />
              <Badge className="bg-blue-600">Flexible Policy</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cancellation Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that plans can change. Our flexible cancellation policy allows 
              you to cancel or modify your booking with minimal fees when done in advance.
            </p>
          </div>
        </section>

        {/* Cancellation Terms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cancellation Terms</h2>
              <p className="text-lg text-muted-foreground">
                Cancellation fees based on timing of your request
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cancellationTerms.map((term, index) => (
                <Card key={index} className={`${term.color === 'green' ? 'border-green-200 bg-green-50/50' : term.color === 'orange' ? 'border-orange-200 bg-orange-50/50' : 'border-red-200 bg-red-50/50'}`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <term.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{term.period}</CardTitle>
                    <CardDescription className="text-lg font-semibold">{term.policy}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {term.details.map((detail, detailIndex) => (
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

        {/* Modification Policy */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Modification Policy</h2>
              <p className="text-lg text-muted-foreground">
                Change your booking details without cancellation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {modificationPolicy.map((policy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{policy.title}</CardTitle>
                    <CardDescription>{policy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {policy.details.map((detail, detailIndex) => (
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

        {/* Refund Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Refund Process</h2>
              <p className="text-lg text-muted-foreground">
                How refunds are processed after cancellation
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Refund Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {refundProcess.map((step, index) => (
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

        {/* Exceptions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Emergency Exceptions</h2>
              <p className="text-lg text-muted-foreground">
                Special circumstances where cancellation fees may be waived
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Special Circumstances</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exceptions.map((exception, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-700">{exception}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Emergency exceptions require proper documentation 
                      and are subject to management approval. Contact us immediately if you 
                      believe your situation qualifies for an exception.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need to Cancel or Modify?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to cancel or modify your booking
              </p>
            </div>

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
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
