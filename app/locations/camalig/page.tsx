import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Mountain, Wheat, Trees } from "lucide-react"

export const metadata: Metadata = {
  title: "Camalig Car Rental | Uragon Transport Services | Mayon Base Tours",
  description:
    "Car rental services in Camalig, Albay. Gateway to Mayon Volcano with rich agricultural heritage. Professional drivers and reliable vehicles available.",
  keywords: "Camalig car rental, Mayon Volcano base, agricultural tours, volcano trekking, Bicol car rental",
}

const locationData = {
  hero: {
    location: "Camalig",
    tagline: "Where agriculture meets adventure",
    description:
      "Gateway to Mayon Volcano with rich agricultural heritage, Camalig offers a unique blend of adventure and rural charm. Perfect for those seeking authentic Bicolano experiences, volcano exploration, and a glimpse into the region's farming traditions.",
    badge: "Adventure & Agro",
    primaryAction: {
      label: "Book your adventure",
      href: "/contact"
    },
    secondaryAction: {
      label: "View vehicles",
      href: "/fleet"
    }
  },
  overview: [
    "Camalig is Albay's gateway to Mayon Volcano's trekking routes and a thriving agricultural hub known for pili nuts, abaca, and coconut plantations. This quiet municipality offers visitors a chance to experience both the thrill of volcano exploration and the tranquility of rural Bicol life.",
    "Our transportation services connect you to Mayon's base camps for trekking adventures, agricultural farms for agro-tourism experiences, and traditional communities where Bicolano culture thrives."
  ],
  attractions: [
    {
      title: "Mayon Volcano Base Camp",
      description: "The primary access point for Mayon Volcano trekking and adventure activities. This base camp serves as the starting point for guided climbs, ATV rides on lava trails, and nature walks through the volcano's lush lower slopes. Our drivers coordinate with local guides to ensure safe and memorable experiences.",
      distance: "20 km from Legazpi",
      duration: "2-3 hours minimum",
      highlights: ["Volcano trekking access", "ATV lava trail rides", "Guided nature walks", "Adventure activity coordination"]
    },
    {
      title: "Pili Nut & Agricultural Farms",
      description: "Camalig is famous for pili nut production—Bicol's signature crop. Visit working farms to see pili harvesting, processing, and taste fresh pili products. Many farms also grow abaca (Manila hemp), coconut, and other tropical crops, offering authentic agro-tourism experiences.",
      distance: "15-25 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Pili nut farms", "Farm-to-table experiences", "Agricultural heritage", "Fresh local produce"]
    },
    {
      title: "Traditional Bicolano Villages",
      description: "Experience authentic rural Bicol life in traditional farming communities. Visit local homes, see traditional crafts, taste homemade Bicolano dishes, and learn about the agricultural lifestyle that has sustained these communities for generations.",
      distance: "18-30 km from Legazpi",
      duration: "Half day",
      highlights: ["Cultural immersion", "Traditional crafts", "Authentic cuisine", "Community interactions"]
    }
  ],
  services: [
    {
      name: "Volcano Adventure Transfer",
      icon: Mountain,
      description: "Transport to Mayon Volcano base camp for trekking, ATV rides, and adventure activities with local guide coordination",
      duration: "4-6 hours",
      price: "From ₱2,000",
      includes: ["Professional driver", "Base camp access", "Guide coordination", "Safety equipment space"]
    },
    {
      name: "Agricultural Tour",
      icon: Wheat,
      description: "Explore working farms, pili nut plantations, and agricultural heritage sites with farm visits and tastings",
      duration: "3-4 hours",
      price: "From ₱1,500",
      includes: ["Professional driver", "Farm visits", "Tasting experiences", "Local guide arrangements"]
    },
    {
      name: "Rural Community Tour",
      icon: Trees,
      description: "Visit traditional Bicolano villages for cultural immersion, craft demonstrations, and authentic home-cooked meals",
      duration: "4-5 hours",
      price: "From ₱1,800",
      includes: ["Professional driver", "Community visits", "Cultural insights", "Meal arrangements"]
    }
  ],
  adventureTips: [
    "Mayon trekking requires permits—book 3-5 days ahead through local tourism offices",
    "Wear closed-toe shoes and bring sunscreen for volcano base camp visits",
    "Early morning departures (5-7 AM) offer the best weather for volcano activities",
    "ATV rides on lava trails are available for non-hikers seeking adventure",
    "Bring extra water and snacks—limited facilities near base camp areas"
  ],
  agroTourismHighlights: [
    "Pili nut harvesting season: August to November (best time for farm tours)",
    "Learn traditional pili processing methods from local farmers",
    "Purchase fresh pili nuts, candies, and oil directly from producers",
    "Abaca (Manila hemp) plantations offer insights into fiber production",
    "Coconut farms demonstrate toddy tapping and vinegar production",
    "Many farms offer farm-to-table lunches with fresh Bicolano dishes"
  ]
}

export default function CamaligPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LocationLandingHero
          location={locationData.hero.location}
          tagline={locationData.hero.tagline}
          description={locationData.hero.description}
          badge={locationData.hero.badge}
          primaryAction={locationData.hero.primaryAction}
          secondaryAction={locationData.hero.secondaryAction}
        />

        <SectionContainer background="default" padding="xl">
          <div className="max-w-3xl mx-auto space-y-6">
            {locationData.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Rural & adventure attractions"
            description="Discover the agricultural heritage and adventure opportunities of Camalig"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {locationData.attractions.map((attraction, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{attraction.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {attraction.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{attraction.distance}</span>
                  <span>•</span>
                  <span>{attraction.duration}</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {attraction.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Our Camalig tour services"
            description="Adventure and cultural transportation experiences"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {locationData.services.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">{service.duration}</p>
                    <p className="text-xl font-semibold text-foreground">{service.price}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2 border-t border-border/60">
                  <p className="text-sm font-medium text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Volcano adventure tips"
            description="Prepare for your Mayon base camp experience"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {locationData.adventureTips.map((tip, index) => (
              <li key={index} className="text-base text-muted-foreground leading-relaxed">
                {tip}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Agro-tourism highlights"
            description="Experience Camalig's agricultural heritage"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {locationData.agroTourismHighlights.map((highlight, index) => (
              <li key={index} className="text-base text-muted-foreground leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
