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
  title: "Business Trips - Corporate Transportation Bicol | Uragon Transport Services",
  description:
    "Professional transportation for business trips, corporate meetings, and business travel in Bicol. Reliable service for executives and business professionals.",
  keywords: "business trips, corporate transportation, executive car service, business travel Bicol, professional driver, corporate meetings",
}

const serviceData = {
  title: "Business Trips",
  subtitle: "Professional transportation for business travel",
  description:
    "Reliable, professional transportation service for business trips, corporate meetings, and executive travel throughout Bicol. Our experienced drivers and well-maintained vehicles ensure you arrive on time and in comfort for all your business needs.",
  image: "/toyota-vios-sedan-car-rental.jpg",
  features: [
    {
      title: "Professional Service",
      description: "Experienced drivers with professional demeanor, punctuality, and discretion for all your business transportation needs.",
    },
    {
      title: "Executive Comfort",
      description: "Well-maintained, comfortable vehicles with air conditioning, clean interiors, and professional appearance for business meetings.",
    },
    {
      title: "Flexible Scheduling",
      description: "Accommodate your business schedule with flexible pickup times, waiting periods, and multi-day service for extended business trips.",
    },
    {
      title: "Airport Transfers",
      description: "Reliable airport pickup and drop-off service for business travelers arriving at Legazpi and Naga airports.",
    },
    {
      title: "Multi-City Travel",
      description: "Inter-provincial business travel between different cities and provinces in Bicol with professional drivers and comfortable vehicles.",
    },
    {
      title: "Corporate Accounts",
      description: "Special rates and billing arrangements for corporate clients with regular business transportation needs.",
    },
  ],
  inclusions: [
    "Professional driver",
    "Comfortable business vehicle",
    "Flexible scheduling",
    "Airport transfers",
    "Waiting time included",
    "Corporate billing options",
  ],
  exclusions: [
    "Meals and refreshments",
    "Accommodation",
    "Personal expenses",
    "Extended waiting beyond schedule",
    "Non-business related stops",
    "Gratuity for driver",
  ],
  pricing: [
    {
      route: "Half Day Business Service (4 hours)",
      sedan: "₱2,000",
      suv: "₱2,500",
      van: "₱3,000",
    },
    {
      route: "Full Day Business Service (8 hours)",
      sedan: "₱3,500",
      suv: "₱4,000",
      van: "₱4,500",
    },
    {
      route: "Airport Transfer",
      sedan: "₱1,500",
      suv: "₱2,000",
      van: "₱2,500",
    },
    {
      route: "Multi-Day Corporate Rate",
      sedan: "₱3,000",
      suv: "₱3,500",
      van: "₱4,000",
    },
  ],
  faqs: [
    {
      question: "Do you provide corporate billing and invoicing?",
      answer:
        "Yes, we offer corporate billing arrangements with monthly invoicing for regular business clients. Contact us to discuss corporate account setup and special rates.",
    },
    {
      question: "Can you accommodate last-minute business travel requests?",
      answer:
        "We do our best to accommodate last-minute requests, but we recommend booking in advance to ensure vehicle and driver availability for your business needs.",
    },
    {
      question: "Are your drivers experienced with business travel requirements?",
      answer:
        "Yes, our drivers are experienced with business travel needs including punctuality, discretion, and professional service. They understand the importance of timely arrivals for meetings and appointments.",
    },
    {
      question: "Do you provide vehicles suitable for business meetings?",
      answer:
        "All our vehicles are well-maintained, clean, and professional in appearance. We can provide sedans, SUVs, or vans based on your group size and comfort requirements.",
    },
    {
      question: "Can you handle multi-city business trips?",
      answer:
        "Yes, we can provide transportation for business trips that involve multiple cities or provinces in Bicol. We'll work with your schedule and provide comfortable transportation throughout your business travel.",
    },
  ],
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our business trip service provides reliable, professional transportation for corporate meetings, executive travel, and business activities throughout Bicol. Perfect for business professionals who need punctual, comfortable, and discreet transportation.",
      "We understand the importance of business travel and provide experienced drivers, well-maintained vehicles, and flexible scheduling to accommodate your corporate needs and ensure you arrive on time for all business appointments.",
    ],
    benefits: [
      "Focus on your business meetings and presentations while we handle all transportation logistics. Our professional drivers ensure punctual arrivals and comfortable travel between business locations.",
      "Save time and reduce stress with reliable transportation that accommodates your business schedule. We provide flexible pickup times, waiting periods, and can handle last-minute changes to your itinerary.",
    ],
    process: [
      "Book your business transportation service online or contact us directly. Provide your business travel details including dates, times, locations, and any special requirements for your corporate needs.",
      "Our professional driver will arrive on time at your specified location, handle your luggage if needed, and provide comfortable transportation to your business destinations throughout your trip.",
    ],
    areas: [
      "Our business trip service covers all of Bicol Region, including major business centers in Legazpi, Naga, and other cities. We also provide airport transfers to and from Legazpi and Naga airports.",
      "We can accommodate inter-provincial business travel and multi-city trips throughout Bicol. Contact us to discuss transportation for your specific business travel requirements and destinations.",
    ],
    tips: [
      "Book your business transportation in advance to ensure availability, especially for important meetings or during peak business travel periods. Provide detailed schedules and any special requirements when booking.",
      "Communicate any changes to your business schedule as soon as possible. Our drivers are experienced with business travel and will work with you to accommodate schedule adjustments and ensure punctual service.",
    ],
  },
}

export default function BusinessTripsPage() {
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
              title="About Business Trips Service"
              description={serviceData.content.introduction.join(' ')}
              variant="default"
            />

            {/* Benefits */}
            <ContentCard
              type="feature"
              title="Why Choose Our Business Trips Service?"
              description={serviceData.content.benefits.join(' ')}
              variant="default"
            />

            {/* How It Works */}
            <ContentCard
              type="feature"
              title="How Business Trips Service Works"
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
