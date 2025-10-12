import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Bridal Service - Wedding Transportation Bicol | Uragon Transport Services",
  description:
    "Special wedding transportation service with elegant vehicles and professional drivers for your special day. Make your wedding day perfect with our bridal service.",
  keywords: "bridal service, wedding transportation, wedding car rental Bicol, bridal car, wedding day transport, elegant wedding vehicles",
}

const serviceData = {
  hero: {
    eyebrow: "Wedding transport",
    title: "Arrive in style with a dedicated bridal fleet",
    description:
      "Make your wedding day seamless with elegant vehicles, formally dressed chauffeurs, and a coordination team that keeps every transfer on schedule.",
    primaryAction: {
      label: "Plan your wedding ride",
      href: "/contact"
    },
    secondaryAction: {
      label: "View vehicle gallery",
      href: "/fleet"
    }
  },
  overview: [
    "Our bridal service provides elegant transportation solutions for your wedding day, ensuring you arrive in style and on time. Perfect for couples who want reliable, professional support for their celebration.",
    "We combine experienced chauffeurs, well-maintained vehicles, and flexible scheduling so your ceremony, reception, and photo sessions flow without stress."
  ],
  signatureHighlights: [
    "Choose from sedans, SUVs, and vans that are detailed and styled specifically for weddings.",
    "Professional chauffeurs in formal attire who coordinate with your planner and entourage.",
    "Flexible routing that covers preparations, ceremony, reception, and photo shoots.",
    "Complimentary waiting buffers and real-time timeline monitoring throughout the day.",
    "Backup vehicle and support hotline on standby for absolute peace of mind."
  ],
  packages: [
    {
      name: "Wedding Day Package (8 hours)",
      price: "from ₱4,000",
      description:
        "Covers the entire event—from preparation venue to reception—with chauffeur, fuel, ribbons, and contingency support. Upgrade to SUV or van for larger entourages."
    },
    {
      name: "Ceremony Focus (4 hours)",
      price: "from ₱2,500",
      description:
        "Perfect for quick transfers from the prep venue to the church and onward to the reception entrance photo moment."
    },
    {
      name: "Reception Transfer (4 hours)",
      price: "from ₱2,500",
      description:
        "Ensures smooth movement between venues for the couple and entourage with planned stops for pictorials."
    },
    {
      name: "Photo Shoot Add-on",
      price: "from ₱2,000",
      description:
        "Extend coverage for prenuptial sessions or additional portrait locations scheduled before or after the big day."
    }
  ],
  logistics: {
    coverage: [
      "Serving churches, hotels, resorts, and private venues across Legazpi, Naga, and the greater Bicol Region.",
      "Familiar with coastal resorts, garden ceremonies, and mountain retreats—routes are scouted ahead of time.",
      "Coordinate multiple vehicles for bridal party, family, and VIP guests as needed."
    ],
    timeline: [
      "Pre-event coordination includes pickup times, alternate routes, and décor instructions.",
      "On-the-day updates are shared between driver, planner, and point person to manage adjustments in real time.",
      "Backup plans are ready for weather or traffic, including alternate staging points and shelter options."
    ]
  },
  preparation: [
    "Reserve your preferred vehicle at least 2–3 months ahead, especially during peak wedding months.",
    "Share the full timeline, venue addresses, and key contact numbers one week before the event.",
    "Provide decoration instructions or hand off décor to our team during the styling schedule.",
    "Assign a point person who can approve changes and settle any add-ons on the wedding day."
  ],
  faqs: [
    {
      question: "How far in advance should I book bridal service?",
      answer:
        "We recommend booking at least 2-3 months in advance, especially for peak wedding seasons (December to May). This ensures vehicle availability and allows time for customization.",
    },
    {
      question: "Can you provide vehicle decoration?",
      answer:
        "We provide basic vehicle decoration as part of our service. For elaborate decorations, we can recommend professional decorators or provide custom decoration for an additional fee.",
    },
    {
      question: "What if the wedding runs behind schedule?",
      answer:
        "We understand that weddings can run behind schedule. We include complimentary waiting time and will work with your timeline to ensure all transportation needs are met.",
    },
    {
      question: "Do you have backup vehicles available?",
      answer:
        "Yes, we maintain backup vehicles for all bridal service bookings to ensure your wedding day transportation is never compromised by unexpected vehicle issues.",
    },
    {
      question: "Can the driver assist with wedding day logistics?",
      answer:
        "Our professional drivers are experienced with wedding day logistics and can assist with timing, coordination with other vendors, and ensuring smooth transitions between venues.",
    },
  ],
}

export default function BridalServicePage() {
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
            title="Signature bridal experience"
            description="Everything is choreographed so you can focus on the celebration."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.signatureHighlights.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Curated packages"
            description="Rates include chauffeur, fuel, ribbons, and coordination support."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.packages.map((pkg, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{pkg.name}</p>
                <p className="text-2xl font-semibold text-foreground">{pkg.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Need a bespoke route or additional vehicles?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Talk to our coordinators
            </Link>{' '}
            for a tailored quote.
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Wedding day logistics"
            description="We cover every detail so transfers stay effortless even when timelines shift."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Coverage & venues</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.logistics.coverage.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Timeline support</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.logistics.timeline.map((item, index) => (
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
            title="How to prepare"
            description="A few quick steps keep your wedding transportation smooth and stress-free."
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
