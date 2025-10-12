import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Pick Up & Drop Off Service - Convenient Transportation | Uragon Transport Services",
  description:
    "Convenient pick up and drop off service to your preferred location. Available for all our vehicles with reliable timing and professional service.",
  keywords: "pickup dropoff service, car rental pickup, drop off service Bicol, convenient transportation, airport pickup, hotel pickup",
}

const serviceData = {
  hero: {
    eyebrow: "Pick-up & drop-off",
    title: "We bring the vehicle to your doorstep and take it back when you're done",
    description:
      "Skip the commute to our hub. Schedule vehicle delivery and collection anywhere within our service zones with professional handovers and punctual timing.",
    primaryAction: {
      label: "Schedule pick-up",
      href: "/contact"
    },
    secondaryAction: {
      label: "Check coverage areas",
      href: "/contact"
    }
  },
  overview: [
    "Our pick-up and drop-off service gets you on the road faster by delivering the vehicle where you need it and collecting it once your trip wraps up.",
    "Each handover includes documentation checks, a quick vehicle briefing, and support contacts so extensions or adjustments are just a message away."
  ],
  benefits: [
    "Coverage for hotels, residences, offices, airports, and transport hubs across Metro Legazpi, Daraga, and Metro Naga.",
    "Available for every vehicle class—from compact hatchbacks to vans—so fleet mix never limits your plans.",
    "Coordinated logistics team confirms arrival windows and keeps you updated en route.",
    "Same-day requests accommodated when slots are open; priority given to bookings made 24 hours in advance.",
    "Return collection includes quick inspection and documentation so you can head to your next commitment immediately."
  ],
  coverage: {
    standard: [
      "Metro Legazpi, Daraga, Sto. Domingo, and nearby towns",
      "Metro Naga, Pili, and neighboring municipalities",
      "Legazpi Airport and Naga Airport arrival areas"
    ],
    extended: [
      "Provincial deliveries across Albay, Camarines Sur, Sorsogon, and Masbate",
      "Port handovers for ferry-bound routes (advance coordination required)",
      "Corporate accounts with recurring logistics needs"
    ]
  },
  process: [
    "Reserve your vehicle and specify preferred delivery and collection addresses plus time windows.",
    "Receive confirmation with assigned coordinator, driver details, and any required access instructions.",
    "Meet the team at the scheduled time for documentation, inspection, and a quick vehicle orientation.",
    "Enjoy your rental. When finished, hand over the keys and documents at the arranged drop-off slot."
  ],
  preparation: [
    "Ensure access to parking or a safe handover point at both pick-up and return locations.",
    "Have a valid ID, license, and payment confirmation ready for verification on delivery.",
    "Notify us at least 2 hours ahead for delivery time adjustments to avoid rescheduling fees.",
    "For airport arrivals, share flight details so we can monitor delays and stage the vehicle accordingly."
  ],
  faqs: [
    {
      question: "How far in advance should I book pick up and drop off service?",
      answer:
        "We recommend booking at least 24 hours in advance for guaranteed service. Same-day service may be available with advance notice, subject to availability.",
    },
    {
      question: "What areas do you cover for pick up and drop off?",
      answer:
        "We cover Legazpi City, Naga City, and surrounding areas. For other locations in Bicol, please contact us to confirm availability and pricing.",
    },
    {
      question: "Can you pick up from the airport?",
      answer:
        "Yes, we can pick up from Legazpi Airport and Naga Airport. We'll meet you at the arrivals area with your rental vehicle ready to go.",
    },
    {
      question: "What if I need to extend my rental period?",
      answer:
        "Contact us as soon as possible to extend your rental. We'll arrange for the new drop-off time and update your rental agreement accordingly.",
    },
    {
      question: "Do you provide the same pick up and drop off service for all vehicle types?",
      answer:
        "Yes, our pick up and drop off service is available for all our vehicles including sedans, SUVs, MPVs, and vans. Pricing may vary by location.",
    },
  ],
}

export default function PickupDropoffPage() {
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
            title="Why travelers love doorstep handovers"
            description="Designed for busy schedules, airport arrivals, and hassle-free returns."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.benefits.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Coverage map"
            description="Standard zones plus extended support when you need to go further."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Standard service areas</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.coverage.standard.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Extended & corporate support</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.coverage.extended.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Not sure if your location is covered?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Message our logistics desk
            </Link>
            .
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="How the handover works"
            description="Every vehicle release follows the same four-step playbook."
            centered={false}
            maxWidth="3xl"
          />
          <ol className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed list-decimal list-inside">
            {serviceData.process.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Before we arrive"
            description="Set everything up so delivery and collection take just a few minutes."
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
