import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "With Driver Service - Professional Driver Car Rental | Uragon Transport Services",
  description:
    "Professional driver service for your convenience. Perfect for business trips, tours, and when you prefer to sit back and relax while exploring Bicol.",
  keywords: "with driver service, professional driver, driver car rental Bicol, business trips, tour driver, chauffeur service Philippines",
}

const serviceData = {
  hero: {
    eyebrow: "With driver",
    title: "Professional chauffeurs, wherever Bicol takes you",
    description:
      "Ride with licensed drivers who know the routes, manage your itinerary, and keep every stop on schedule for business, tours, or family trips.",
    primaryAction: {
      label: "Reserve a driver",
      href: "/contact"
    },
    secondaryAction: {
      label: "Browse vehicle lineup",
      href: "/fleet"
    }
  },
  overview: [
    "Our with-driver service pairs you with vetted, locally knowledgeable chauffeurs so your group can focus on the experience and not the road.",
    "Ideal for business delegations, tourists, and families who need punctual transfers, flexible stops, and on-call assistance throughout the trip."
  ],
  driverAssurances: [
    "All drivers are professionally licensed, background-checked, and trained in defensive driving.",
    "Local experts who know the best routes, rest stops, and safety considerations across Bicol.",
    "Chauffeurs arrive in uniform with updated itineraries and contact details for coordination.",
    "24/7 operations center ready to support itinerary changes, emergencies, or replacement vehicles.",
    "Insurance coverage, fuel, tolls, and basic driver meals already included in every booking."
  ],
  serviceOptions: [
    {
      name: "Half-day deployment (4 hours)",
      price: "from ₱1,500",
      description:
        "Best for airport runs, client meetings, or city tours with a flexible 30-minute buffer for unexpected delays."
    },
    {
      name: "Full-day coverage (8 hours)",
      price: "from ₱2,500",
      description:
        "Complete day of chauffeured service for itineraries with multiple stops, dining breaks, and meetings. Extendable by the hour."
    },
    {
      name: "Multi-day driver",
      price: "from ₱2,000/day",
      description:
        "Dedicated driver assigned for out-of-town tours or work trips, including coordination for lodging and per diem."
    },
    {
      name: "L300 & coaster support",
      price: "from ₱3,000",
      description:
        "Ideal for large groups or equipment-heavy trips—includes assistance with loading and convoy coordination."
    }
  ],
  coverageDetails: {
    areas: [
      "Servicing Legazpi, Naga, Sorsogon, Masbate, and nearby cities with advance scheduling.",
      "Airport transfers for Legazpi and Naga with meet-and-greet signage upon request.",
      "Cross-region trips to Manila and Southern Luzon available with prior coordination."
    ],
    inclusions: [
      "Fuel, tolls, and basic parking fees",
      "Driver meals and accommodations for multi-day assignments",
      "Coordinated routing and itinerary management with your point person"
    ],
    addOns: [
      "Accredited tour guides for heritage and cultural briefings",
      "Simultaneous deployment of multiple vehicle classes",
      "Onboard Wi-Fi, coolers, and other amenities upon request"
    ]
  },
  preparation: [
    "Share passenger list, pickup points, and time-sensitive commitments at least 24 hours ahead.",
    "Provide preferred contact method for real-time updates during the trip.",
    "Confirm accommodation arrangements for the driver when traveling overnight.",
    "Advise of special requirements such as child seats, luggage volume, or assistance for senior passengers."
  ],
  etiquette: [
    "Allow a 15-minute window at each stop for route adjustments and rest breaks.",
    "Notify the coordinator immediately for itinerary extensions to secure approvals and updated rates.",
    "Settle incidental expenses (parking beyond standard, entrance fees) directly at the site.",
    "Tipping is optional but appreciated for exceptional service."
  ],
  faqs: [
    {
      question: "What qualifications do your drivers have?",
      answer:
        "All our drivers are professionally licensed, background-checked, and have extensive experience driving in Bicol. They undergo regular training and are knowledgeable about local destinations and routes.",
    },
    {
      question: "Can the driver speak English?",
      answer:
        "Yes, our drivers can communicate in English and Filipino. They can provide basic tour information and assist with directions and recommendations.",
    },
    {
      question: "What if I need to make additional stops?",
      answer:
        "Additional stops can be arranged for a small extra fee. Please inform us in advance or discuss with your driver during the trip.",
    },
    {
      question: "Is the driver's accommodation included for overnight trips?",
      answer:
        "Yes, for multi-day trips, the driver's accommodation and meals are included in the service. This ensures your driver is well-rested and ready for the next day's journey.",
    },
    {
      question: "Can I request a specific driver?",
      answer:
        "While we cannot guarantee a specific driver, we can note your preferences and do our best to match you with a driver that meets your requirements.",
    },
  ],
}

export default function WithDriverPage() {
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
            title="Driver assurances"
            description="Ride with chauffeurs who prioritize safety, discretion, and time management."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.driverAssurances.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Service options"
            description="Choose the deployment that fits your agenda and group size."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.serviceOptions.map((option, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{option.name}</p>
                <p className="text-2xl font-semibold text-foreground">{option.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Planning a multi-vehicle convoy?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Coordinate with our team
            </Link>
            .
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Coverage & inclusions"
            description="Support that keeps every kilometer comfortable and on schedule."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Where we go</h3>
              <ul className="space-y-3">
                {serviceData.coverageDetails.areas.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Included as standard</h3>
              <ul className="space-y-3">
                {serviceData.coverageDetails.inclusions.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Helpful add-ons</h3>
              <ul className="space-y-3">
                {serviceData.coverageDetails.addOns.map((item, index) => (
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
            title="Before the trip"
            description="Share these details so we can prepare the perfect driver assignment."
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

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="On-the-road etiquette"
            description="Simple guidelines that keep the journey comfortable for everyone."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.etiquette.map((item, index) => (
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
