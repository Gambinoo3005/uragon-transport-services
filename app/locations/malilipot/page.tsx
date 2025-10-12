import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Droplets, Mountain, Church } from "lucide-react"

export const metadata: Metadata = {
  title: "Malilipot Car Rental | Uragon Transport Services | Hot Springs Tours",
  description:
    "Car rental services in Malilipot, Albay. Visit hot springs, Quitinday Green Hills, and Joroan Church. Professional drivers and reliable vehicles available.",
  keywords: "Malilipot car rental, hot springs tours, Quitinday Green Hills, Joroan Church, Bicol car rental",
}

const locationData = {
  hero: {
    location: "Malilipot",
    tagline: "Therapeutic escapes in nature's embrace",
    description:
      "A peaceful town known for its natural hot springs and beautiful landscapes. Escape the city and immerse yourself in the therapeutic waters, rolling green hills, and historic charm that Malilipot offers to weary travelers seeking relaxation.",
    badge: "Wellness Destination",
    primaryAction: {
      label: "Book your wellness trip",
      href: "/contact"
    },
    secondaryAction: {
      label: "See our fleet",
      href: "/fleet"
    }
  },
  overview: [
    "Malilipot is Albay's hidden gem for wellness and nature lovers. Famous for its natural hot springs that bubble up from volcanic sources, this tranquil town offers the perfect respite from the bustle of city life.",
    "Beyond its therapeutic waters, Malilipot surprises visitors with rolling green hills, historic churches, and warm local hospitality. Our transportation services make it easy to discover this peaceful corner of Bicol."
  ],
  attractions: [
    {
      title: "Malilipot Hot Springs",
      description: "Natural hot springs sourced from volcanic activity, offering therapeutic mineral-rich waters perfect for relaxation and rejuvenation. The pools are surrounded by lush greenery, creating a serene environment for unwinding.",
      distance: "15 km from Legazpi",
      duration: "2-3 hours",
      highlights: ["Therapeutic mineral waters", "Natural volcanic heat", "Poolside relaxation areas", "Local massage services"]
    },
    {
      title: "Quitinday Green Hills",
      description: "Rolling hills covered in vibrant green grass, offering panoramic views of the surrounding countryside and Mayon Volcano in the distance. A photographer's dream and a peaceful spot for picnics and nature walks.",
      distance: "18 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["360-degree views", "Instagram-worthy landscapes", "Picnic areas", "Sunset viewing spot"]
    },
    {
      title: "Joroan Church (San Isidro Labrador Parish)",
      description: "A beautiful historic church with Spanish colonial architecture and intricate details. The church grounds offer a peaceful atmosphere for reflection and a glimpse into Bicol's rich religious heritage.",
      distance: "12 km from Legazpi",
      duration: "30-45 minutes",
      highlights: ["Spanish colonial architecture", "Historic religious site", "Peaceful church grounds", "Cultural heritage"]
    }
  ],
  services: [
    {
      name: "Hot Springs Wellness Tour",
      icon: Droplets,
      description: "Relaxing day trip to Malilipot's natural hot springs with flexible soak time and optional massage services",
      duration: "4 hours",
      price: "From ₱1,800",
      includes: ["Professional driver", "Entrance fees covered", "Wait time for bathing", "Towel and amenity storage"]
    },
    {
      name: "Nature & Scenery Tour",
      icon: Mountain,
      description: "Explore Quitinday Green Hills and surrounding natural landscapes with photo stops and picnic time",
      duration: "3 hours",
      price: "From ₱1,500",
      includes: ["Professional driver", "Photo stop coordination", "Picnic area access", "Nature guide recommendations"]
    },
    {
      name: "Heritage & Wellness Combo",
      icon: Church,
      description: "Combined tour of Joroan Church and hot springs, blending cultural heritage with natural relaxation",
      duration: "5 hours",
      price: "From ₱2,200",
      includes: ["Professional driver", "Multiple stop coordination", "Cultural insights", "Flexible scheduling"]
    }
  ],
  wellnessTips: [
    "Visit hot springs early morning (6-9 AM) or late afternoon (3-6 PM) to avoid midday heat",
    "Bring swimwear, towels, and a change of clothes for hot spring visits",
    "Soak for 15-20 minutes at a time, with breaks to avoid overheating",
    "Stay hydrated—bring water bottles for before and after bathing",
    "Combine hot springs with Quitinday Hills for a full wellness day",
    "Book weekday visits for quieter, more relaxing experiences"
  ],
  localInsights: [
    "Malilipot's hot springs are naturally heated by volcanic activity from Mayon",
    "The town is known for producing quality abaca (Manila hemp) fiber",
    "Local eateries near the hot springs serve traditional Bicolano comfort food",
    "Quitinday Green Hills is best visited during the dry season (November-May)",
    "Joroan Church hosts an annual fiesta celebrating San Isidro Labrador each May"
  ]
}

export default function MalilipotPage() {
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
            title="Natural & cultural attractions"
            description="Discover the therapeutic and scenic beauty of Malilipot"
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
            title="Our Malilipot tour services"
            description="Relaxing and therapeutic transportation experiences"
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
            title="Hot springs wellness tips"
            description="Make the most of your therapeutic experience"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {locationData.wellnessTips.map((tip, index) => (
              <li key={index} className="text-base text-muted-foreground leading-relaxed">
                {tip}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Local insights"
            description="Get to know Malilipot beyond the tourist spots"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-4 max-w-3xl">
            {locationData.localInsights.map((insight, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {insight}
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
