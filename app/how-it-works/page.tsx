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
  Search, 
  Calendar, 
  CreditCard, 
  Car, 
  MapPin, 
  Clock,
  CheckCircle,
  Phone,
  MessageCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Uragon Transport Services | Easy Car Rental Process",
  description:
    "Learn how easy it is to rent a car with Uragon Transport Services. Simple 4-step process: Browse, Book, Pay, and Drive. Get your car rental in minutes.",
  keywords: "how to rent a car, car rental process, easy booking, Bicol car rental, self drive rental process",
}

const steps = [
  {
    step: 1,
    title: "Browse & Select",
    description: "Choose from our wide selection of well-maintained vehicles",
    icon: Search,
    details: [
      "Browse our fleet of Toyota, Mitsubishi, and Nissan vehicles",
      "Filter by vehicle type, capacity, and features",
      "Compare rates and features",
      "Read vehicle descriptions and specifications"
    ]
  },
  {
    step: 2,
    title: "Book Your Vehicle",
    description: "Reserve your preferred vehicle with our easy booking system",
    icon: Calendar,
    details: [
      "Select your rental dates and pickup location",
      "Choose between self-drive or with-driver service",
      "Add any additional services or accessories",
      "Review your booking details"
    ]
  },
  {
    step: 3,
    title: "Complete Payment",
    description: "Secure payment processing with multiple payment options",
    icon: CreditCard,
    details: [
      "Pay online with credit card, debit card, or digital wallet",
      "Bank transfer options available",
      "Cash payment accepted for local customers",
      "Receive instant booking confirmation"
    ]
  },
  {
    step: 4,
    title: "Pick Up & Drive",
    description: "Collect your vehicle and start your journey",
    icon: Car,
    details: [
      "Pick up your vehicle at the designated location",
      "Complete vehicle inspection and documentation",
      "Receive keys and start your adventure",
      "Enjoy unlimited mileage and 24/7 support"
    ]
  }
]

const requirements = [
  {
    title: "Valid Driver's License",
    description: "Philippine driver's license or international driving permit",
    icon: CheckCircle
  },
  {
    title: "Valid ID",
    description: "Government-issued ID (passport, SSS, TIN, etc.)",
    icon: CheckCircle
  },
  {
    title: "Credit Card",
    description: "For security deposit (amount varies by vehicle type)",
    icon: CheckCircle
  },
  {
    title: "Minimum Age",
    description: "21 years old for most vehicles, 25 for premium vehicles",
    icon: CheckCircle
  }
]

const pickupOptions = [
  {
    location: "Legazpi City Office",
    address: "123 Rizal Street, Legazpi City, Albay",
    hours: "6:00 AM - 8:00 PM",
    icon: MapPin
  },
  {
    location: "Legazpi Airport",
    address: "Legazpi Airport Terminal, Legazpi City",
    hours: "5:00 AM - 10:00 PM",
    icon: MapPin
  },
  {
    location: "Naga City",
    address: "456 Magsaysay Avenue, Naga City, Camarines Sur",
    hours: "7:00 AM - 7:00 PM",
    icon: MapPin
  }
]

export default function HowItWorksPage() {
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
                <BreadcrumbPage>How It Works</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Renting a car with Uragon Transport Services is simple and straightforward. 
              Follow our easy 4-step process to get on the road in minutes.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple 4-Step Process</h2>
              <p className="text-lg text-muted-foreground">
                From browsing to driving, we've made car rental as easy as possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={step.step} className="relative text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                      {step.step}
                    </Badge>
                  </div>
                  <CardHeader className="pt-8">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What You Need</h2>
              <p className="text-lg text-muted-foreground">
                Make sure you have these requirements before booking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((requirement, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <requirement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{requirement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pickup Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Pickup Locations</h2>
              <p className="text-lg text-muted-foreground">
                Choose the most convenient pickup location for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pickupOptions.map((location, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <location.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{location.location}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">{location.address}</p>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Help?</h2>
              <p className="text-lg text-muted-foreground">
                Our customer support team is here to assist you every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>
                    Call us for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+639159234867" 
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    +63 915 923 4867
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available 24/7 for emergencies
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Chat with us online for quick answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Available Monday to Friday<br />
                    8:00 AM - 6:00 PM
                  </p>
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
