import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Delivery Service - Cargo & Package Delivery Bicol | Uragon Transport Services",
  description:
    "Reliable delivery service for packages, cargo, and goods throughout Bicol. Professional delivery service with tracking and secure handling of your items.",
  keywords: "delivery service, package delivery, cargo delivery, courier service Bicol, goods delivery, reliable delivery",
}

const serviceData = {
  hero: {
    eyebrow: "Delivery logistics",
    title: "Secure, on-time delivery across Bicol",
    description:
      "Move documents, parcels, and bulk cargo with professional handlers, insured coverage, and real-time updates from dispatch to drop-off.",
    primaryAction: {
      label: "Schedule a delivery",
      href: "/contact"
    },
    secondaryAction: {
      label: "Request bulk rates",
      href: "/contact"
    }
  },
  overview: [
    "Our delivery service provides fast, secure transport for documents, parcels, and cargo throughout the Bicol Region.",
    "Each booking includes careful handling, documentation, and status updates so you and your recipients stay informed."
  ],
  serviceHighlights: [
    "Trained couriers handle everything from sealed envelopes to multi-box shipments.",
    "GPS monitoring and status pings keep you updated until the package is signed for.",
    "Dedicated dispatch support for scheduling, special handling, and delivery confirmations.",
    "Insurance coverage for declared value items with optional upgrades for high-value cargo.",
    "Proof of delivery with recipient signature and photo documentation when required."
  ],
  deliveryPrograms: [
    {
      name: "Metro runs",
      price: "from ₱200",
      description:
        "Same-day or next-day deliveries within Legazpi, Daraga, Sto. Domingo, and Metro Naga. Perfect for documents and light parcels."
    },
    {
      name: "City-to-city",
      price: "from ₱500",
      description:
        "Scheduled routes between major Bicol hubs with guaranteed next-day arrival and dispatch notifications."
    },
    {
      name: "Regional coverage",
      price: "from ₱400",
      description:
        "Deliveries to towns and barangays across Albay, Camarines Sur, Camarines Norte, Sorsogon, and Masbate using vans or L300 units."
    },
    {
      name: "Custom logistics",
      price: "quote based",
      description:
        "Project-based or recurring deliveries with volume pricing, dedicated vehicles, and warehouse-to-branch routing."
    }
  ],
  handlingMatrix: {
    accepted: [
      "Sealed documents, legal papers, and government filings",
      "E-commerce parcels and retail stocks",
      "Non-hazardous equipment, spare parts, and packaged goods",
      "Temperature-stable food products with insulated packaging"
    ],
    restricted: [
      "Hazardous chemicals or biological materials",
      "Perishables requiring cold chain unless pre-arranged",
      "Cash, jewelry, or high-value electronics without prior declaration",
      "International or cross-border shipments"
    ]
  },
  scheduling: [
    "Book at least 6 hours ahead for same-day metro runs; earlier for provincial routes to secure a slot.",
    "Provide exact pickup/drop-off points, contact persons, and special instructions for building access.",
    "Packages should be sealed and labeled with sender and recipient details before pickup.",
    "Bulk deliveries can be consolidated at our Legazpi hub for sorting and staging."
  ],
  trackingSupport: [
    "SMS and email updates at pickup, in-transit, and delivery milestones.",
    "Direct line to dispatch for rerouting, additional stops, or urgent inquiries.",
    "Signed proof of delivery and photo confirmation stored for 30 days.",
    "Dashboard access available for enterprise accounts with recurring deliveries."
  ],
  faqs: [
    {
      question: "What types of items can you deliver?",
      answer:
        "We can deliver documents, packages, small cargo, and general goods. We cannot handle hazardous materials, perishable goods requiring special handling, or cash and valuable items.",
    },
    {
      question: "How fast is your delivery service?",
      answer:
        "We offer same-day delivery for local areas with advance notice, and next-day delivery for most locations in Bicol. Delivery time depends on the destination and package size.",
    },
    {
      question: "Do you provide delivery confirmation?",
      answer:
        "Yes, we provide delivery confirmation with recipient signature and contact information. You'll receive updates on your delivery status throughout the process.",
    },
    {
      question: "What if the recipient is not available?",
      answer:
        "If the recipient is not available, we'll attempt delivery again or contact you to arrange an alternative delivery time or location.",
    },
    {
      question: "Is there insurance coverage for delivered items?",
      answer:
        "Yes, we provide basic insurance coverage for delivered items. For valuable items, additional insurance may be required and should be discussed when booking the delivery.",
    },
  ],
}

export default function DeliveryPage() {
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
            title="Why businesses trust our delivery team"
            description="Secure handling, transparent updates, and reliable coverage for every run."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.serviceHighlights.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Delivery programs"
            description="Pick the schedule and coverage that match your logistics needs."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.deliveryPrograms.map((program, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{program.name}</p>
                <p className="text-2xl font-semibold text-foreground">{program.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Need daily milk-run deliveries or dedicated vehicles?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Talk to our logistics team
            </Link>
            .
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Handling guidelines"
            description="Know what we can safely transport and what requires special clearance."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Accepted items</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.handlingMatrix.accepted.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Restricted & requires clearance</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.handlingMatrix.restricted.map((item, index) => (
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
            title="Scheduling checklist"
            description="Prepare these details before booking to keep dispatch smooth."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.scheduling.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Tracking & support"
            description="Stay informed from pick-up to proof of delivery."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-3">
            {serviceData.trackingSupport.map((item, index) => (
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
