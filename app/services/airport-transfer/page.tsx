import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServicePricing } from "@/components/service-pricing"
import { ServiceFAQ } from "@/components/service-faq"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: "Airport Transfer Service - Legazpi & Naga | Uragon Tours",
  description:
    "Reliable airport transfers from Legazpi and Naga airports. Fixed rates, flight monitoring, meet-and-greet service. Book your transfer today.",
  keywords: "Legazpi airport transfer, Naga airport transfer, Bicol airport shuttle, reliable airport transport",
}

const serviceData = {
  title: "Airport Transfer",
  subtitle: "Reliable transfers to/from Legazpi and Naga airports",
  description:
    "Start your Bicol adventure stress-free with our professional airport transfer service. We monitor your flight, provide meet-and-greet service, and ensure you reach your destination safely and on time.",
  image: "/airport-transfer-service-bicol.jpg",
  features: [
    {
      title: "Flight Monitoring",
      description: "We track your flight status and adjust pickup times accordingly for delays or early arrivals.",
    },
    {
      title: "Meet & Greet Service",
      description: "Our driver will be waiting with a personalized sign at the arrivals area.",
    },
    {
      title: "Fixed Rates",
      description: "No surge pricing or hidden fees. You know the exact cost upfront.",
    },
    {
      title: "24/7 Availability",
      description: "Available round-the-clock for early morning and late night flights.",
    },
    {
      title: "Luggage Assistance",
      description: "Our drivers help with loading and unloading your luggage.",
    },
    {
      title: "Multiple Airports",
      description: "Service available from both Legazpi and Naga airports.",
    },
  ],
  inclusions: [
    "Professional driver",
    "Flight monitoring",
    "Meet and greet service",
    "Luggage assistance",
    "Fuel and toll fees",
    "Vehicle insurance",
  ],
  exclusions: ["Waiting time beyond 1 hour", "Additional stops (extra charge applies)", "Gratuity (optional)"],
  pricing: [
    {
      route: "Legazpi Airport to Legazpi City",
      sedan: "₱1,500",
      suv: "₱2,000",
      van: "₱2,500",
    },
    {
      route: "Legazpi Airport to Daraga",
      sedan: "₱1,200",
      suv: "₱1,700",
      van: "₱2,200",
    },
    {
      route: "Naga Airport to Naga City",
      sedan: "₱1,800",
      suv: "₱2,300",
      van: "₱2,800",
    },
    {
      route: "Legazpi to Naga (or vice versa)",
      sedan: "₱4,500",
      suv: "₱5,500",
      van: "₱6,500",
    },
  ],
  faqs: [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 24 hours in advance, but we can accommodate last-minute bookings subject to availability. For peak seasons and holidays, earlier booking is advised.",
    },
    {
      question: "What if my flight is delayed?",
      answer:
        "We monitor all flights and automatically adjust pickup times for delays. There's no additional charge for flight delays up to 1 hour. Beyond that, standard waiting time charges apply.",
    },
    {
      question: "Can you make stops along the way?",
      answer:
        "Yes, we can make additional stops for an extra fee. Common stops include grocery stores, restaurants, or other hotels. Please inform us when booking.",
    },
    {
      question: "Do you provide child seats?",
      answer:
        "Yes, we can provide child seats upon request at no additional charge. Please specify the age/weight of the child when booking so we can prepare the appropriate seat.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "Free cancellation up to 12 hours before pickup time. Cancellations within 12 hours are subject to a 50% charge. No-shows are charged the full amount.",
    },
  ],
}

export default function AirportTransferPage() {
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
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Airport Transfer</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ServiceDetailHero service={serviceData} />
        <ServiceFeatures service={serviceData} />
        <ServicePricing service={serviceData} />
        <ServiceFAQ service={serviceData} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
