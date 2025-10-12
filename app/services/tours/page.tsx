import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServicePricing } from "@/components/service-pricing"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"

export const metadata = {
  title: "Tour Packages - Bicol Sightseeing Tours | Uragon Transport Services",
  description:
    "Explore Bicol's beautiful destinations with our guided tour packages. Visit Mayon Volcano, Caramoan Islands, and other attractions with professional drivers and local knowledge.",
  keywords: "Bicol tours, Mayon Volcano tour, Caramoan tour, Bicol sightseeing, guided tours, tour packages Philippines",
}

const serviceData = {
  title: "Tour Packages",
  subtitle: "Explore Bicol's beautiful destinations",
  description:
    "Discover the best of Bicol with our guided tour packages. From the majestic Mayon Volcano to the pristine beaches of Caramoan, our experienced drivers will take you to the region's most beautiful and interesting destinations.",
  image: "/mayon_hero.jpg",
  features: [
    {
      title: "Guided Tours",
      description: "Professional drivers with local knowledge who can provide insights about Bicol's history, culture, and attractions.",
    },
    {
      title: "Popular Destinations",
      description: "Visit iconic locations like Mayon Volcano, Caramoan Islands, Cagsawa Ruins, and other must-see Bicol attractions.",
    },
    {
      title: "Flexible Itineraries",
      description: "Customize your tour based on your interests, time constraints, and group preferences for a personalized experience.",
    },
    {
      title: "All-Day Tours",
      description: "Full-day tour packages that include multiple destinations with comfortable transportation and professional service.",
    },
    {
      title: "Group Tours",
      description: "Perfect for families, friends, and corporate groups with vehicles that can accommodate different group sizes.",
    },
    {
      title: "Local Expertise",
      description: "Our drivers know the best routes, timing, and hidden gems to make your Bicol tour experience memorable and enjoyable.",
    },
  ],
  inclusions: [
    "Professional driver/guide",
    "Vehicle fuel and toll fees",
    "Flexible itinerary planning",
    "Local destination knowledge",
    "Comfortable transportation",
    "All-day service",
  ],
  exclusions: [
    "Entrance fees to attractions",
    "Meals and refreshments",
    "Accommodation",
    "Personal expenses",
    "Optional activities",
    "Gratuity for driver",
  ],
  pricing: [
    {
      route: "Mayon Volcano Tour (Full Day)",
      sedan: "₱3,500",
      suv: "₱4,000",
      van: "₱4,500",
    },
    {
      route: "Caramoan Islands Tour (Full Day)",
      sedan: "₱4,500",
      suv: "₱5,000",
      van: "₱5,500",
    },
    {
      route: "Bicol Heritage Tour (Full Day)",
      sedan: "₱3,000",
      suv: "₱3,500",
      van: "₱4,000",
    },
    {
      route: "Custom Tour (Per Day)",
      sedan: "₱3,000",
      suv: "₱3,500",
      van: "₱4,000",
    },
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
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our tour packages offer the perfect way to explore Bicol's most beautiful and interesting destinations with professional transportation and local expertise. Ideal for tourists, families, and groups who want to see the best of the region.",
      "From the iconic Mayon Volcano to the pristine beaches of Caramoan, our experienced drivers will take you to must-see attractions while providing insights about local history, culture, and hidden gems.",
    ],
    benefits: [
      "Enjoy stress-free sightseeing with professional drivers who know the best routes and timing for each destination. Focus on enjoying the sights while we handle all transportation logistics.",
      "Save time and energy by having a local expert plan your itinerary and navigate Bicol's roads. Our drivers can recommend the best photo spots, local restaurants, and timing for optimal experiences.",
    ],
    process: [
      "Choose from our popular tour packages or contact us to create a custom itinerary. Provide your group size, interests, and preferred destinations for a personalized tour experience.",
      "Meet your driver at the designated pickup location and enjoy a full day of sightseeing. Your driver will handle all transportation while you focus on exploring and enjoying Bicol's attractions.",
    ],
    areas: [
      "Our tour packages cover all major Bicol destinations including Albay (Mayon Volcano, Cagsawa Ruins), Camarines Sur (Caramoan, Naga City), and other provinces with popular attractions.",
      "We can arrange tours to beaches, historical sites, natural attractions, and cultural destinations throughout the Bicol Region. Custom tours can include multiple provinces in a single day.",
    ],
    tips: [
      "Book your tour in advance, especially during peak tourist seasons, to secure your preferred vehicle and ensure availability. Consider weather conditions when planning outdoor destinations.",
      "Bring comfortable walking shoes, sun protection, and a camera for your tour. Ask your driver for recommendations on local restaurants and the best times to visit each attraction.",
    ],
  },
}

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceDetailHero service={serviceData} />
        <ServiceFeatures service={serviceData} />
        
        {/* Additional Content Section for SEO */}
        <SectionContainer background="default" padding="xl">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <ContentCard
              type="feature"
              title="About Tour Packages"
              description={serviceData.content.introduction.join(' ')}
              variant="default"
            />

            {/* Benefits */}
            <ContentCard
              type="feature"
              title="Why Choose Our Tour Packages?"
              description={serviceData.content.benefits.join(' ')}
              variant="default"
            />

            {/* How It Works */}
            <ContentCard
              type="feature"
              title="How Tour Packages Work"
              description={serviceData.content.process.join(' ')}
              variant="default"
            />

            {/* Service Areas */}
            <ContentCard
              type="feature"
              title="Tour Destinations"
              description={serviceData.content.areas.join(' ')}
              variant="default"
            />

            {/* Tips & Recommendations */}
            <ContentCard
              type="feature"
              title="Tips & Recommendations"
              description={serviceData.content.tips.join(' ')}
              variant="default"
            />

          </div>
        </SectionContainer>

        <ServicePricing service={serviceData} />
        <ServiceFAQ service={serviceData} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
