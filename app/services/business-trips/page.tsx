import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Business Trips - Corporate Transportation Bicol | Uragon Transport Services",
  description:
    "Professional transportation for business trips, corporate meetings, and business travel in Bicol. Reliable service for executives and business professionals.",
  keywords: "business trips, corporate transportation, executive car service, business travel Bicol, professional driver, corporate meetings",
}

const serviceData = {
  hero: {
    eyebrow: "Corporate travel",
    title: "Reliable transport for executive schedules",
    description:
      "From airport arrivals to boardroom shuttles, keep every business commitment on time with chauffeurs who know Bicol's routes and corporate protocols.",
    primaryAction: {
      label: "Book business transport",
      href: "/contact"
    },
    secondaryAction: {
      label: "Set up a corporate account",
      href: "/contact"
    }
  },
  overview: [
    "Our business trip service supports executives, field teams, and visiting clients throughout Bicol with punctual, discreet transportation.",
    "Drivers arrive early, vehicles are presentation-ready, and itineraries are coordinated so you can focus on meetings and negotiations."
  ],
  valuePoints: [
    "Professionally trained chauffeurs who understand corporate etiquette and confidentiality.",
    "Clean, executive-grade sedans, SUVs, and vans with stable Wi-Fi hotspot options on request.",
    "Flexible scheduling with standby and multi-day assignments handled by a dedicated coordinator.",
    "Airport meet-and-greet services at Legazpi and Naga with luggage assistance.",
    "Centralized billing, receipts, and monthly reports for procurement or finance teams."
  ],
  offerings: [
    {
      name: "Half-day standby (4 hours)",
      price: "from ₱2,000",
      description:
        "Ideal for short client visits or on-site inspections within the city. Includes 30-minute complimentary buffer time."
    },
    {
      name: "Full-day coverage (8 hours)",
      price: "from ₱3,500",
      description:
        "A single vehicle and driver on call for back-to-back meetings, plant visits, or conferences. Extendable by the hour."
    },
    {
      name: "Airport concierge",
      price: "from ₱1,500",
      description:
        "Coordinated airport pick-up or drop-off with signage, luggage handling, and real-time flight monitoring."
    },
    {
      name: "Multi-day corporate retainer",
      price: "custom pricing",
      description:
        "Bundle rates for recurring visits, roadshows, or executive deployments across provinces. Includes vehicle rotation and relief drivers."
    }
  ],
  travelLogistics: {
    destinations: [
      "Coverage across Legazpi, Naga, Sorsogon, and other business hubs in Bicol.",
      "Inter-city routes planned with vetted stops for meals, rest, and refueling.",
      "VIP handling available for visiting executives, ambassadors, and investor groups."
    ],
    scheduling: [
      "Dedicated coordinator monitors traffic, weather, and schedule shifts to adjust routes in real time.",
      "Drivers briefed with agenda notes, contact persons, and access requirements before dispatch.",
      "After-hours and weekend coverage available with advance notice."
    ]
  },
  corporateSupport: [
    "Consolidated invoices with cost centers and trip references for finance reconciliation.",
    "Signed NDAs for teams handling sensitive site visits or negotiations.",
    "Standby support line for sudden extensions, additional vehicles, or alternative routing."
  ],
  preparation: [
    "Share meeting schedules, venue security requirements, and key contacts at least 24 hours ahead.",
    "Provide flight numbers for airport assignments so we can adjust for delays in real time.",
    "Let us know if you need Wi-Fi, bottled water, or other onboard amenities prepared.",
    "Assign an internal coordinator for multi-vehicle deployments to streamline communications."
  ],
  faqs: [
    {
      question: "Do you provide corporate billing and invoicing?",
      answer:
        "Yes, we offer corporate billing arrangements with monthly invoicing for regular business clients. Contact us to discuss corporate account setup and special rates.",
    },
    {
      question: "Can you accommodate last-minute business travel requests?",
      answer:
        "We do our best to accommodate last-minute requests, but we recommend booking in advance to ensure vehicle and driver availability for your business needs.",
    },
    {
      question: "Are your drivers experienced with business travel requirements?",
      answer:
        "Yes, our drivers are experienced with business travel needs including punctuality, discretion, and professional service. They understand the importance of timely arrivals for meetings and appointments.",
    },
    {
      question: "Do you provide vehicles suitable for business meetings?",
      answer:
        "All our vehicles are well-maintained, clean, and professional in appearance. We can provide sedans, SUVs, or vans based on your group size and comfort requirements.",
    },
    {
      question: "Can you handle multi-city business trips?",
      answer:
        "Yes, we can provide transportation for business trips that involve multiple cities or provinces in Bicol. We'll work with your schedule and provide comfortable transportation throughout your business travel.",
    },
  ],
}

export default function BusinessTripsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceLandingHero
          eyebrow={serviceData.hero.eyebrow}
          title={serviceData.hero.title}
          description={serviceData.hero.description}
          primaryAction={serviceData.hero.primaryAction}
          secondaryAction={serviceData.hero.secondaryAction}
        />

        <SectionContainer background="default" padding="xl">
          <div className="max-w-3xl mx-auto space-y-6">
            {serviceData.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Why executives ride with Uragon"
            description="Organized support that keeps investors, teams, and VIP guests moving without delays."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.valuePoints.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Service tiers"
            description="Pick the coverage window that fits your agenda."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.offerings.map((offer, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{offer.name}</p>
                <p className="text-2xl font-semibold text-foreground">{offer.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{offer.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Planning a regional roadshow?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Coordinate a custom itinerary
            </Link>
            .
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Travel logistics"
            description="Coverage extends beyond city centers with proactive schedule management."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Destinations & scope</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.travelLogistics.destinations.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Scheduling support</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.travelLogistics.scheduling.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Corporate support"
            description="Tools and processes that make procurement and compliance easier."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-3">
            {serviceData.corporateSupport.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Prep checklist"
            description="Send these details ahead so we can execute flawlessly."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.preparation.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <ServiceFAQ service={serviceData} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
