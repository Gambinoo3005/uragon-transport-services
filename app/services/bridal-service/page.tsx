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
  title: "Bridal Service - Wedding Transportation Bicol | Uragon Transport Services",
  description:
    "Special wedding transportation service with elegant vehicles and professional drivers for your special day. Make your wedding day perfect with our bridal service.",
  keywords: "bridal service, wedding transportation, wedding car rental Bicol, bridal car, wedding day transport, elegant wedding vehicles",
}

const serviceData = {
  title: "Bridal Service",
  subtitle: "Elegant transportation for your special day",
  description:
    "Make your wedding day perfect with our elegant bridal transportation service. We provide beautiful, well-maintained vehicles and professional drivers to ensure your special day runs smoothly and stress-free.",
  image: "/toyota-vios-sedan-car-rental.jpg",
  features: [
    {
      title: "Elegant Vehicles",
      description: "Beautiful, well-maintained vehicles perfect for your wedding day, including sedans, SUVs, and luxury options.",
    },
    {
      title: "Professional Drivers",
      description: "Experienced, courteous drivers dressed appropriately for your special occasion, ensuring punctuality and professionalism.",
    },
    {
      title: "Wedding Packages",
      description: "Complete wedding transportation packages including ceremony, reception, and photo shoot transportation.",
    },
    {
      title: "Special Occasions",
      description: "Available for weddings, anniversaries, proms, and other special celebrations that require elegant transportation.",
    },
    {
      title: "Flexible Scheduling",
      description: "Accommodate your wedding timeline with flexible pickup and drop-off times for all wedding day events.",
    },
    {
      title: "Stress-Free Service",
      description: "Let us handle the transportation logistics so you can focus on enjoying your special day without worries.",
    },
  ],
  inclusions: [
    "Elegant wedding vehicle",
    "Professional driver in formal attire",
    "Vehicle decoration (basic)",
    "Flexible wedding day schedule",
    "Complimentary waiting time",
    "Emergency backup vehicle",
  ],
  exclusions: [
    "Advanced vehicle decoration",
    "Flower arrangements",
    "Photography services",
    "Wedding planning services",
    "Extended waiting beyond schedule",
    "Additional stops not in itinerary",
  ],
  pricing: [
    {
      route: "Wedding Day Package (8 hours)",
      sedan: "₱4,000",
      suv: "₱5,000",
      van: "₱6,000",
    },
    {
      route: "Ceremony Only (4 hours)",
      sedan: "₱2,500",
      suv: "₱3,000",
      van: "₱3,500",
    },
    {
      route: "Reception Only (4 hours)",
      sedan: "₱2,500",
      suv: "₱3,000",
      van: "₱3,500",
    },
    {
      route: "Photo Shoot Transport",
      sedan: "₱2,000",
      suv: "₱2,500",
      van: "₱3,000",
    },
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
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our bridal service provides elegant transportation solutions for your wedding day, ensuring you arrive in style and on time. Perfect for couples who want reliable, professional service for their special celebration.",
      "We understand that your wedding day is one of the most important days of your life, which is why we provide experienced drivers, well-maintained vehicles, and flexible scheduling to accommodate your unique wedding timeline.",
    ],
    benefits: [
      "Enjoy peace of mind knowing that your wedding day transportation is handled by professionals. Our drivers are experienced with wedding logistics and will ensure punctual, stress-free service throughout your special day.",
      "Save time and energy by letting us handle all transportation details, from ceremony to reception. Focus on celebrating with your loved ones while we take care of getting you where you need to be.",
    ],
    process: [
      "Book your bridal service well in advance and provide your wedding day schedule, venues, and special requirements. We'll create a customized transportation plan for your special day.",
      "Meet with our team to finalize details, including pickup times, routes, and any special requests. We'll provide a detailed timeline and ensure all wedding day transportation runs smoothly.",
    ],
    areas: [
      "Our bridal service covers all of Bicol Region, including popular wedding venues in Legazpi, Naga, and surrounding areas. We're familiar with local churches, reception venues, and photo shoot locations.",
      "We can accommodate weddings in hotels, beach resorts, gardens, and other special venues throughout Bicol. Contact us to discuss transportation for your specific wedding location.",
    ],
    tips: [
      "Book early, especially for peak wedding seasons, to secure your preferred vehicle and ensure availability. Provide detailed wedding day schedules and venue information when booking.",
      "Consider your wedding party size and choose an appropriate vehicle. Plan for extra time between venues and communicate any special requirements or last-minute changes to your driver.",
    ],
  },
}

export default function BridalServicePage() {
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
              title="About Bridal Service"
              description={serviceData.content.introduction.join(' ')}
              variant="default"
            />

            {/* Benefits */}
            <ContentCard
              type="feature"
              title="Why Choose Our Bridal Service?"
              description={serviceData.content.benefits.join(' ')}
              variant="default"
            />

            {/* How It Works */}
            <ContentCard
              type="feature"
              title="How Bridal Service Works"
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
