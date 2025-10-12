import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Mountain, Camera, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Albay Car Rental | Uragon Transport Services | Mayon Volcano Tours",
  description:
    "Explore Albay with our car rental services. Visit Mayon Volcano, Cagsawa Ruins, and other attractions. Professional drivers and well-maintained vehicles available.",
  keywords: "Albay car rental, Mayon Volcano tours, Cagsawa Ruins, Bicol car rental, Albay transportation",
}

const locationData = {
  hero: {
    location: "Albay Province",
    tagline: "Where nature's perfect cone meets adventure",
    description:
      "Discover the beauty of Albay province, home to the majestic Mayon Volcano—the world's most perfectly shaped cone. From historic ruins to pristine nature parks, our car rental services make exploring this breathtaking province effortless and memorable.",
    badge: "Popular Destination",
    primaryAction: {
      label: "Book your Albay tour",
      href: "/contact"
    },
    secondaryAction: {
      label: "View available vehicles",
      href: "/fleet"
    }
  },
  overview: [
    "Albay province is synonymous with the majestic Mayon Volcano, whose near-perfect cone has captivated travelers for centuries. Beyond the volcano, Albay offers historic church ruins, scenic nature parks, peaceful lakes, and a rich cultural heritage waiting to be explored.",
    "Our transportation services are designed for both first-time visitors and returning travelers who want to experience Albay's natural wonders, taste authentic Bicolano cuisine, and capture stunning photographs at every turn."
  ],
  attractions: [
    {
      title: "Mayon Volcano",
      description: "The world's most perfect cone volcano and Albay's crown jewel. Stand in awe of its symmetrical beauty, explore the lava flow trails, and capture once-in-a-lifetime photos from multiple viewpoints around the province.",
      distance: "15 km from Legazpi",
      duration: "Half to full day tour",
      highlights: ["Multiple viewpoints", "Lava flow trails", "ATV rides available", "Photography paradise"]
    },
    {
      title: "Cagsawa Ruins",
      description: "Historic church ruins buried by Mayon's 1814 eruption, now a powerful symbol of resilience. The bell tower stands against the backdrop of Mayon Volcano, creating one of the Philippines' most iconic views.",
      distance: "8 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Historical landmark", "Iconic Mayon backdrop", "Souvenir shops", "Local snacks and refreshments"]
    },
    {
      title: "Lignon Hill Nature Park",
      description: "Panoramic hilltop park offering 360-degree views of Mayon Volcano, Legazpi City, and the Albay Gulf. Perfect for sunrise or sunset visits, with walking trails, gardens, and an optional zipline for thrill-seekers.",
      distance: "5 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Panoramic views", "Nature trails", "Zipline adventure", "Cafe and viewing deck"]
    },
    {
      title: "Daraga Church (Our Lady of the Gate)",
      description: "18th-century Baroque church built on a hill, showcasing stunning Spanish colonial architecture and intricate stonework. The elevated location provides sweeping views of Mayon and the surrounding countryside.",
      distance: "8 km from Legazpi",
      duration: "30-45 minutes",
      highlights: ["Colonial architecture", "Religious heritage", "Elevated viewpoint", "Historic stonework"]
    },
    {
      title: "Sumlang Lake",
      description: "A peaceful lake nestled at the foot of Mayon Volcano. Enjoy serene boat rides, photograph the volcano's reflection on calm mornings, and savor fresh seafood at lakeside eateries.",
      distance: "12 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Peaceful lake setting", "Boat rides", "Mayon reflection photos", "Lakeside dining"]
    },
    {
      title: "Hoyop-Hoyopan Cave",
      description: "A natural limestone cave with impressive rock formations, underground chambers, and a rich history. An easy hike for families and a refreshing break from the tropical heat.",
      distance: "20 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Limestone formations", "Cool underground chambers", "Guided cave tours", "Family-friendly"]
    }
  ],
  services: [
    {
      name: "Mayon Volcano Tour",
      icon: Mountain,
      description: "Full-day comprehensive tour of Mayon Volcano and its surrounding attractions including Cagsawa Ruins, viewpoints, and lava trails",
      duration: "8 hours",
      price: "From ₱2,500",
      includes: ["Professional driver-guide", "Fuel and toll fees", "All entrance fees included", "Flexible photo and rest stops"]
    },
    {
      name: "Albay Heritage & Nature Tour",
      icon: Camera,
      description: "Explore Albay's cultural and natural landmarks including Daraga Church, Lignon Hill, and Sumlang Lake with expert commentary",
      duration: "4-6 hours",
      price: "From ₱1,800",
      includes: ["Professional driver", "Fuel and tolls", "Cultural and historical insights", "Multiple attraction stops"]
    },
    {
      name: "Group & Family Tours",
      icon: Users,
      description: "Customized itineraries for families and groups with spacious vehicles, flexible schedules, and kid-friendly stops",
      duration: "Flexible",
      price: "From ₱2,000",
      includes: ["Spacious MPV or van", "Customizable itinerary", "Group discounts available", "Child-friendly routing"]
    }
  ],
  travelTips: [
    "Best time to visit is early morning (6-9 AM) for clear Mayon views before clouds form",
    "Bring sunscreen, hats, and comfortable walking shoes for outdoor attractions",
    "Try local Bicolano dishes like Bicol Express and laing at roadside eateries",
    "Allow extra time for photo stops—Mayon's beauty deserves your full attention",
    "Book multi-day tours for a more relaxed pace and deeper exploration"
  ],
  vehicleRecommendations: [
    {
      type: "Sedan (Toyota Vios)",
      bestFor: "Couples and small groups (2-4 people)",
      price: "₱1,500/day",
      note: "Comfortable for city tours and paved routes"
    },
    {
      type: "MPV (Toyota Innova)",
      bestFor: "Families and groups (5-7 people)",
      price: "₱2,000/day",
      note: "Spacious interior, ideal for full-day tours with luggage"
    },
    {
      type: "SUV (Toyota Fortuner)",
      bestFor: "Adventure seekers and off-road trails",
      price: "₱2,500/day",
      note: "High ground clearance for lava trails and rugged terrain"
    }
  ]
}

export default function AlbayPage() {
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
            title="Must-visit attractions in Albay"
            description="Explore the best that Albay has to offer with our reliable transportation"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            title="Our Albay tour services"
            description="Choose from our curated tour packages or customize your own itinerary"
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
            title="Recommended vehicles for Albay tours"
            description="Choose the perfect vehicle for your adventure based on group size and terrain"
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {locationData.vehicleRecommendations.map((vehicle, index) => (
              <div key={index} className="space-y-3 p-6 bg-background rounded-lg border">
                <h3 className="text-lg font-semibold text-foreground">{vehicle.type}</h3>
                <p className="text-xl font-bold text-primary">{vehicle.price}</p>
                <p className="text-sm text-muted-foreground">{vehicle.bestFor}</p>
                <p className="text-sm text-muted-foreground italic">{vehicle.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/fleet" className="text-primary font-semibold">
              View complete fleet specifications
            </Link>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Travel tips for Albay"
            description="Make the most of your Albay adventure with these local insights"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-4 max-w-3xl">
            {locationData.travelTips.map((tip, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {tip}
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
