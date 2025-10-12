import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Tour Packages - Bicol Sightseeing Tours | Uragon Transport Services",
  description:
    "Explore Bicol's beautiful destinations with our guided tour packages. Visit Mayon Volcano, Caramoan Islands, and other attractions with professional drivers and local knowledge.",
  keywords: "Bicol tours, Mayon Volcano tour, Caramoan tour, Bicol sightseeing, guided tours, tour packages Philippines",
}

const serviceData = {
  hero: {
    eyebrow: "Tour experiences",
    title: "See Bicol's icons with a local tour driver and curated itinerary",
    description:
      "From Mayon sunrise to Caramoan island hops, travel with storytellers behind the wheel and routes optimized for every photo stop.",
    primaryAction: {
      label: "Plan your tour",
      href: "/contact"
    },
    secondaryAction: {
      label: "View vehicle options",
      href: "/fleet"
    }
  },
  overview: [
    "Uragon tour packages pair comfortable vehicles with driver-guides who have navigated Bicol's attractions for years.",
    "Whether you're a first-time visitor or returning with friends, we customize pacing, stops, and stories so every kilometer is memorable."
  ],
  highlights: [
    "Driver-guides who share history, legends, and local recommendations while keeping schedules on track.",
    "Flexible itineraries—swap destinations, add side trips, or extend hours on the fly.",
    "Coordinated timing for sunrise viewpoints, market stops, and off-peak attraction entries.",
    "Comfortable sedans, SUVs, and vans scaled to your group size, gear, and desired amenities.",
    "Logistics support for permits, ferry tickets, and destination-specific requirements."
  ],
  itineraries: [
    {
      name: "Mayon & Legazpi heritage",
      price: "from ₱3,500",
      description:
        "Cagsawa Ruins, Daraga Church, Lignon Hill, and foodie stops for sili ice cream and Bicol express—all in one scenic loop."
    },
    {
      name: "Caramoan island hopping",
      price: "from ₱5,000",
      description:
        "Vehicle plus boat coordination for sandbar hopping, limestone cliffs, and hidden coves with picnic lunch recommendations."
    },
    {
      name: "Bicol faith & culture",
      price: "from ₱3,200",
      description:
        "Naga basilicas, Peñafrancia shrine, and heritage houses—with time for pili pastries and local craft markets."
    },
    {
      name: "Custom adventure day",
      price: "build your route",
      description:
        "Combine waterfalls, farm tours, or hiking trails. Share your wishlist and we'll design the flow, permits, and meal stops."
    }
  ],
  destinations: {
    popular: [
      "Mayon Volcano viewpoints",
      "Cagsawa Ruins & Daraga Church",
      "Sumlang Lake bamboo rafts",
      "Caramoan's Matukad and Lahos islands",
      "Naga City's basilicas and river promenade"
    ],
    hiddenGems: [
      "Quinale Beach sunsets in Albay",
      "Kawa-kawa Hill gardens in Ligao",
      "Farm-to-table lunch spots in Camalig",
      "Halo-an falls and eco-parks off the usual routes",
      "Sorsogon whale shark and hot spring combos"
    ]
  },
  logistics: [
    "Entrance fees and meals are optional add-ons—we'll brief you on current rates for budgeting.",
    "Tours include fuel, tolls, driver meals, and standard parking fees unless otherwise noted.",
    "Assistance booking guides, resort day passes, and boat providers upon request.",
    "Multi-day itineraries include driver lodging coordination and vehicle staging for early departures."
  ],
  preparation: [
    "Share travel dates, group size, and must-see spots 48 hours before your tour to lock in availability.",
    "Tell us about mobility needs, dietary restrictions, or special occasions so we can plan accordingly.",
    "Pack comfortable clothing, sun protection, and cash for entrance fees and local snacks.",
    "Monitor weather advisories—our team will propose backup sites if conditions shift."
  ],
  faqs: [
    {
      question: "What destinations are included in your tour packages?",
      answer:
        "Our popular tour destinations include Mayon Volcano, Cagsawa Ruins, Caramoan Islands, Naga City heritage sites, and other iconic Bicol attractions. We can also create custom tours based on your interests.",
    },
    {
      question: "Can I customize my tour itinerary?",
      answer:
        "Yes, we offer flexible tour packages that can be customized based on your interests, time constraints, and group preferences. Contact us to discuss your specific tour requirements.",
    },
    {
      question: "Do you provide tour guides or just drivers?",
      answer:
        "Our drivers have local knowledge and can provide basic information about destinations. For detailed historical and cultural information, we recommend hiring a professional tour guide separately.",
    },
    {
      question: "What should I bring on a tour?",
      answer:
        "Bring comfortable clothing, sun protection, camera, water, and any personal items you might need. We'll provide recommendations based on your specific tour destinations.",
    },
    {
      question: "Are entrance fees included in the tour price?",
      answer:
        "Tour prices include transportation and driver service only. Entrance fees to attractions, meals, and other personal expenses are not included and should be budgeted separately.",
    },
  ],
}

export default function ToursPage() {
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
            title="Why tour with Uragon"
            description="Curated routes, storytelling drivers, and the flexibility to explore beyond the usual."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.highlights.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Signature itineraries"
            description="Pick a ready-made adventure or use these as inspiration for your own route."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.itineraries.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{item.name}</p>
                <p className="text-2xl font-semibold text-foreground">{item.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-muted-foreground leading-relaxed">
            Want something different?{' '}
            <Link href="/contact" className="text-primary font-semibold">
              Tell us your bucket list
            </Link>
            . We'll map it out."
          </p>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Destinations we love"
            description="Mix iconic stops with hidden gems for a balanced Bicol experience."
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Must-visit icons</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.destinations.popular.map((item, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Hidden-gem add-ons</h3>
              <ul className="mt-3 space-y-3">
                {serviceData.destinations.hiddenGems.map((item, index) => (
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
            title="Logistics & add-ons"
            description="Everything included—and the extras you can layer on."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-3">
            {serviceData.logistics.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Before travel"
            description="Share the details below so your tour day runs perfectly."
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
