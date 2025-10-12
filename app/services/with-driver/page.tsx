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
  title: "With Driver Service - Professional Driver Car Rental | Uragon Transport Services",
  description:
    "Professional driver service for your convenience. Perfect for business trips, tours, and when you prefer to sit back and relax while exploring Bicol.",
  keywords: "with driver service, professional driver, driver car rental Bicol, business trips, tour driver, chauffeur service Philippines",
}

const serviceData = {
  title: "With Driver Service",
  subtitle: "Professional drivers for your convenience",
  description:
    "Sit back and relax while our professional drivers take you to your destinations. Perfect for business trips, family tours, and when you want to enjoy the scenery without worrying about navigation or driving.",
  image: "/toyota-innova-mpv-car-rental.jpg",
  features: [
    {
      title: "Professional Drivers",
      description: "Experienced, licensed drivers with extensive knowledge of Bicol's roads and destinations.",
    },
    {
      title: "Local Knowledge",
      description: "Our drivers know the best routes, shortcuts, and hidden gems throughout the Bicol region.",
    },
    {
      title: "Business Trips",
      description: "Reliable service for corporate meetings, airport transfers, and business appointments.",
    },
    {
      title: "Tour Guide Services",
      description: "Drivers can provide basic tour information and recommendations for local attractions.",
    },
    {
      title: "Flexible Scheduling",
      description: "Available for half-day, full-day, or multi-day trips with flexible pickup and drop-off times.",
    },
    {
      title: "Safety First",
      description: "All drivers are background-checked, drug-tested, and trained in defensive driving techniques.",
    },
  ],
  inclusions: [
    "Professional licensed driver",
    "Vehicle fuel and toll fees",
    "Driver's meals and accommodation (for multi-day trips)",
    "Comprehensive vehicle insurance",
    "24/7 customer support",
    "Flexible scheduling",
  ],
  exclusions: [
    "Driver's gratuity (optional)",
    "Additional stops beyond agreed itinerary",
    "Waiting time beyond 1 hour",
    "Personal expenses",
    "Entrance fees to attractions",
    "Meals for passengers",
  ],
  pricing: [
    {
      route: "L300 12-Seaters",
      sedan: "₱3,000",
      suv: "₱3,000",
      van: "₱3,000",
    },
    {
      route: "Half Day (4 hours)",
      sedan: "₱1,500",
      suv: "₱2,000",
      van: "₱2,500",
    },
    {
      route: "Full Day (8 hours)",
      sedan: "₱2,500",
      suv: "₱3,000",
      van: "₱3,500",
    },
    {
      route: "Multi-day (per day)",
      sedan: "₱2,000",
      suv: "₱2,500",
      van: "₱3,000",
    },
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
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our with driver service provides professional chauffeur services for business travelers, families, and tourists who prefer to relax and enjoy their journey. Perfect for those who want to focus on their destination rather than navigation.",
      "All our drivers are experienced professionals with extensive knowledge of Bicol's roads, attractions, and best routes. They can provide local insights and recommendations to enhance your travel experience.",
    ],
    benefits: [
      "Enjoy stress-free travel while our professional drivers handle navigation, traffic, and parking. Focus on your business meetings, family time, or sightseeing without worrying about driving.",
      "Save time and energy by having a local expert who knows the best routes, shortcuts, and can help you avoid traffic congestion and road construction delays.",
    ],
    process: [
      "Book your with driver service online or contact us directly. Specify your pickup location, destination, and preferred schedule. We'll assign a professional driver to your trip.",
      "Provide your contact details and any special requirements. Our driver will contact you before the scheduled pickup time to confirm details and provide their contact information.",
    ],
    areas: [
      "Our with driver service covers all of Bicol Region, including inter-provincial trips between Albay, Camarines Norte, Camarines Sur, Catanduanes, Masbate, and Sorsogon.",
      "We can also provide airport transfers to and from Legazpi and Naga airports, as well as long-distance trips to Manila or other regions with advance notice.",
    ],
    tips: [
      "Book in advance for business trips and special occasions to ensure driver availability. Provide detailed itinerary and special requirements when booking.",
      "Communicate your preferences and any specific needs to your driver at the start of the trip. Don't hesitate to ask for recommendations on local attractions and dining options.",
    ],
  },
}

export default function WithDriverPage() {
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
              title="About With Driver Service"
              description={serviceData.content.introduction.join(' ')}
              variant="default"
            />

            {/* Benefits */}
            <ContentCard
              type="feature"
              title="Why Choose With Driver Service?"
              description={serviceData.content.benefits.join(' ')}
              variant="default"
            />

            {/* How It Works */}
            <ContentCard
              type="feature"
              title="How With Driver Service Works"
              description={serviceData.content.process.join(' ')}
              variant="default"
            />

            {/* Service Areas */}
            <ContentCard
              type="feature"
              title="Service Areas"
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
