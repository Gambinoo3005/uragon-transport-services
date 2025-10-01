import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServicePricing } from "@/components/service-pricing"
import { ServiceFAQ } from "@/components/service-faq"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: "Delivery Service - Cargo & Package Delivery Bicol | Uragon Transport Services",
  description:
    "Reliable delivery service for packages, cargo, and goods throughout Bicol. Professional delivery service with tracking and secure handling of your items.",
  keywords: "delivery service, package delivery, cargo delivery, courier service Bicol, goods delivery, reliable delivery",
}

const serviceData = {
  title: "Delivery Service",
  subtitle: "Reliable delivery for packages and cargo",
  description:
    "Fast, secure, and reliable delivery service for packages, documents, and cargo throughout Bicol. Our professional delivery team ensures your items reach their destination safely and on time.",
  image: "/hyundai-h350-van-car-rental.jpg",
  features: [
    {
      title: "Secure Handling",
      description: "Professional handling and secure transportation of your packages, documents, and cargo with proper care and attention.",
    },
    {
      title: "Fast Delivery",
      description: "Quick and efficient delivery service with same-day and next-day delivery options for urgent packages and documents.",
    },
    {
      title: "Package Tracking",
      description: "Track your delivery status with regular updates and confirmation when your package reaches its destination.",
    },
    {
      title: "Various Sizes",
      description: "Handle packages of different sizes from small documents to large cargo using appropriate vehicles for each delivery.",
    },
    {
      title: "Wide Coverage",
      description: "Delivery service covering all areas of Bicol Region with reliable transportation to cities, towns, and remote locations.",
    },
    {
      title: "Professional Service",
      description: "Experienced delivery team with proper documentation, receipt confirmation, and professional customer service.",
    },
  ],
  inclusions: [
    "Secure package handling",
    "Delivery confirmation",
    "Professional delivery staff",
    "Package tracking updates",
    "Receipt confirmation",
    "Insurance coverage",
  ],
  exclusions: [
    "Hazardous materials",
    "Perishable goods (special handling required)",
    "Cash or valuable items",
    "International deliveries",
    "Same-day delivery without advance notice",
    "Packaging materials",
  ],
  pricing: [
    {
      route: "Within Legazpi City",
      sedan: "₱200",
      suv: "₱300",
      van: "₱400",
    },
    {
      route: "Within Naga City",
      sedan: "₱200",
      suv: "₱300",
      van: "₱400",
    },
    {
      route: "Legazpi to Naga (or vice versa)",
      sedan: "₱500",
      suv: "₱600",
      van: "₱700",
    },
    {
      route: "Other Bicol Areas",
      sedan: "₱400",
      suv: "₱500",
      van: "₱600",
    },
  ],
  faqs: [
    {
      question: "What types of items can you deliver?",
      answer:
        "We can deliver documents, packages, small cargo, and general goods. We cannot handle hazardous materials, perishable goods requiring special handling, or cash and valuable items.",
    },
    {
      question: "How fast is your delivery service?",
      answer:
        "We offer same-day delivery for local areas with advance notice, and next-day delivery for most locations in Bicol. Delivery time depends on the destination and package size.",
    },
    {
      question: "Do you provide delivery confirmation?",
      answer:
        "Yes, we provide delivery confirmation with recipient signature and contact information. You'll receive updates on your delivery status throughout the process.",
    },
    {
      question: "What if the recipient is not available?",
      answer:
        "If the recipient is not available, we'll attempt delivery again or contact you to arrange an alternative delivery time or location.",
    },
    {
      question: "Is there insurance coverage for delivered items?",
      answer:
        "Yes, we provide basic insurance coverage for delivered items. For valuable items, additional insurance may be required and should be discussed when booking the delivery.",
    },
  ],
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our delivery service provides fast, secure, and reliable transportation for packages, documents, and cargo throughout Bicol. Perfect for businesses, individuals, and organizations that need dependable delivery solutions.",
      "We handle deliveries of various sizes using appropriate vehicles and provide professional service with tracking updates and delivery confirmation to ensure your items reach their destination safely.",
    ],
    benefits: [
      "Save time and effort by having us handle your delivery needs. Our professional team ensures secure handling and timely delivery of your packages and documents throughout Bicol.",
      "Enjoy peace of mind with delivery tracking, confirmation receipts, and insurance coverage. Focus on your business while we take care of getting your items to their destination.",
    ],
    process: [
      "Contact us to book your delivery service with package details, pickup and delivery locations, and preferred delivery time. We'll provide a quote and schedule your delivery.",
      "Our delivery team will collect your package, provide tracking information, and deliver it to the specified location with confirmation and receipt from the recipient.",
    ],
    areas: [
      "Our delivery service covers all of Bicol Region including Legazpi, Naga, and surrounding areas. We can deliver to cities, towns, and remote locations throughout the region.",
      "We provide same-day delivery for local areas and next-day delivery for most destinations in Bicol. Contact us to confirm delivery times for your specific location.",
    ],
    tips: [
      "Package your items securely and provide clear delivery instructions including recipient contact information. Book your delivery in advance to ensure timely service.",
      "Keep tracking information handy and communicate any special delivery requirements. Ensure the recipient is available at the delivery location or provide alternative arrangements.",
    ],
  },
}

export default function DeliveryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Delivery Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ServiceDetailHero service={serviceData} />
        <ServiceFeatures service={serviceData} />
        
        {/* Additional Content Section for SEO */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Introduction */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">About Delivery Service</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {serviceData.content.introduction.map((paragraph, index) => (
                      <p key={index} className="text-pretty">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Delivery Service?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {serviceData.content.benefits.map((paragraph, index) => (
                      <p key={index} className="text-pretty">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">How Delivery Service Works</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {serviceData.content.process.map((paragraph, index) => (
                      <p key={index} className="text-pretty">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Service Areas</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {serviceData.content.areas.map((paragraph, index) => (
                      <p key={index} className="text-pretty">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tips & Recommendations */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Tips & Recommendations</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {serviceData.content.tips.map((paragraph, index) => (
                      <p key={index} className="text-pretty">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        <ServicePricing service={serviceData} />
        <ServiceFAQ service={serviceData} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
