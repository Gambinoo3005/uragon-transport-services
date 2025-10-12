import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { LocationLandingHero } from "@/components/location-landing-hero"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Church, Camera, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "Daraga Car Rental | Uragon Transport Services | Cagsawa Ruins Tours",
  description:
    "Car rental services in Daraga, Albay. Visit Cagsawa Ruins, Daraga Church, and enjoy stunning Mayon Volcano views. Professional drivers and reliable vehicles.",
  keywords: "Daraga car rental, Cagsawa Ruins tours, Daraga Church, Mayon Volcano views, Bicol car rental",
}

const locationData = {
  hero: {
    location: "Daraga",
    tagline: "Where history meets the perfect cone",
    description:
      "A historic town with stunning views of Mayon Volcano, Daraga is home to the famous Cagsawa Ruins and the majestic Daraga Church. This charming town offers the perfect blend of history, culture, and natural beauty—all framed by the world's most perfect volcano.",
    badge: "Heritage Town",
    primaryAction: {
      label: "Book heritage tour",
      href: "/contact"
    },
    secondaryAction: {
      label: "Browse vehicles",
      href: "/fleet"
    }
  },
  overview: [
    "Daraga is one of Albay's most historically significant towns, renowned for the iconic Cagsawa Ruins—the bell tower that survived Mayon's devastating 1814 eruption. Today, this resilient landmark stands as a powerful symbol of history and nature coexisting in dramatic fashion.",
    "Beyond Cagsawa, Daraga's 18th-century church, colonial architecture, and numerous Mayon viewpoints make it a must-visit for history enthusiasts and photographers seeking to capture the perfect volcano backdrop."
  ],
  attractions: [
    {
      title: "Cagsawa Ruins",
      description: "The bell tower of a Franciscan church buried by Mayon's 1814 eruption. This iconic landmark offers one of the Philippines' most photographed views—the ruins standing against Mayon's perfect cone. The site includes a small museum with artifacts and historical accounts of the eruption.",
      distance: "8 km from Legazpi",
      duration: "1-2 hours",
      highlights: ["Iconic historical landmark", "Perfect Mayon backdrop", "Small museum on-site", "Souvenir shops and local snacks"]
    },
    {
      title: "Daraga Church (Our Lady of the Gate)",
      description: "An 18th-century Baroque church perched atop a hill, showcasing stunning Spanish colonial architecture with intricate stone carvings and buttresses. The elevated location provides sweeping panoramic views of Mayon Volcano, Albay Gulf, and the surrounding countryside.",
      distance: "8 km from Legazpi",
      duration: "30-45 minutes",
      highlights: ["Spanish Baroque architecture", "Elevated hilltop location", "Panoramic Mayon views", "Religious and cultural heritage"]
    },
    {
      title: "Mayon Skyline View Deck",
      description: "One of the best vantage points for unobstructed views of Mayon Volcano. This viewpoint is popular among photographers during golden hour and offers clear sightlines for capturing the volcano's symmetrical beauty without crowds.",
      distance: "10 km from Legazpi",
      duration: "1 hour",
      highlights: ["Unobstructed Mayon views", "Photography hotspot", "Golden hour ideal", "Quiet observation area"]
    }
  ],
  services: [
    {
      name: "Cagsawa Ruins Tour",
      icon: Church,
      description: "Explore the historic ruins with professional commentary about the 1814 eruption and its impact on the region",
      duration: "2 hours",
      price: "From ₱1,200",
      includes: ["Professional driver", "Entrance fees included", "Historical insights", "Photo stop coordination"]
    },
    {
      name: "Daraga Heritage Tour",
      icon: Camera,
      description: "Visit Daraga Church and other colonial-era sites with cultural and architectural commentary",
      duration: "1.5 hours",
      price: "From ₱1,000",
      includes: ["Professional driver", "Cultural guide insights", "Multiple heritage stops", "Photo opportunities"]
    },
    {
      name: "Volcano Viewing Tour",
      icon: Mountain,
      description: "Best spots for Mayon Volcano photography including Cagsawa, Daraga Church, and the Skyline View Deck",
      duration: "3 hours",
      price: "From ₱1,800",
      includes: ["Professional driver", "Multiple viewpoints", "Golden hour timing", "Photography tips"]
    }
  ],
  historicalContext: [
    "Cagsawa Church was buried during Mayon's February 1, 1814 eruption, which claimed over 1,200 lives",
    "The bell tower survived as a haunting reminder of the disaster and has become a symbol of resilience",
    "Daraga Church was built on higher ground in the 18th century as protection from potential volcanic activity",
    "The town's name 'Daraga' comes from the Filipino word for 'maiden' or 'young lady'",
    "Spanish colonial influence is evident in the architecture, street layout, and religious traditions"
  ],
  photographyTips: [
    "Best light for Cagsawa Ruins: Early morning (6-8 AM) or late afternoon (4-6 PM)",
    "Bring wide-angle lens to capture both ruins and volcano in one frame",
    "Visit on clear mornings before clouds obscure Mayon's peak (usually by 10 AM)",
    "Daraga Church viewpoint is ideal for sunset shots over Albay Gulf",
    "Consider combining sites in a single tour for variety in your photo collection"
  ]
}

export default function DaragaPage() {
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
            title="Historic attractions & viewpoints"
            description="Explore the rich history and stunning views of Daraga"
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
            title="Our Daraga tour services"
            description="Historical and cultural transportation experiences"
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
            title="Historical context"
            description="Understanding Daraga's rich heritage"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="space-y-4 max-w-3xl">
            {locationData.historicalContext.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Photography tips"
            description="Capture the perfect shot of Daraga's landmarks"
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {locationData.photographyTips.map((tip, index) => (
              <li key={index} className="text-base text-muted-foreground leading-relaxed">
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
