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
  title: "Self Drive Rental - Unlimited Mileage Car Rental | Uragon Transport Services",
  description:
    "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace with 24hrs rental.",
  keywords: "self drive rental, car rental Bicol, unlimited mileage, self drive car rental Philippines, Bicol car rental",
}

const serviceData = {
  title: "Self Drive Rental",
  subtitle: "Drive yourself with unlimited mileage",
  description:
    "Rent a car and explore Bicol at your own pace with our self-drive rental service. Enjoy unlimited mileage within the declared province and the freedom to create your own itinerary. Perfect for couples, families, and groups who want to discover the beauty of Bicol on their own terms.",
  image: "/toyota-vios-sedan-car-rental.jpg",
  features: [
    {
      title: "Unlimited Mileage",
      description: "Drive as much as you want within the declared province with no additional mileage charges. Explore every corner of Bicol without worrying about distance limits.",
    },
    {
      title: "24-Hour Rental",
      description: "Full 24-hour rental periods give you maximum flexibility to plan your day. Pick up in the morning and return the next day at the same time.",
    },
    {
      title: "Comprehensive Insurance",
      description: "All our vehicles come with comprehensive insurance coverage, giving you peace of mind while exploring Bicol's roads and destinations.",
    },
    {
      title: "Same Gas Level Policy",
      description: "Return the vehicle with the same fuel level as when you received it. No need to worry about refueling to a specific amount.",
    },
    {
      title: "Well-Maintained Fleet",
      description: "Our fleet of Toyota, Mitsubishi, and Nissan vehicles are regularly maintained and inspected to ensure safety and reliability.",
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Get help whenever you need it with our 24/7 roadside assistance service. We're here to support you throughout your journey.",
    },
  ],
  inclusions: [
    "Comprehensive vehicle insurance",
    "24/7 roadside assistance",
    "Unlimited mileage within declared province",
    "Well-maintained vehicle",
    "Basic vehicle documentation",
    "Emergency contact support",
  ],
  exclusions: [
    "Fuel costs",
    "Toll fees",
    "Parking fees",
    "Traffic violations and fines",
    "Driver services",
    "Additional accessories",
  ],
  pricing: [
    {
      route: "Hatchback (Wigo) - 4 Seaters",
      sedan: "₱1,800",
      suv: "₱1,800",
      van: "₱1,800",
    },
    {
      route: "Sedan (Vios/Mirage G4) - 5 Seaters",
      sedan: "₱2,000",
      suv: "₱2,000",
      van: "₱2,000",
    },
    {
      route: "SUV (Avanza/Rush) - 7-8 Seaters",
      sedan: "₱3,000",
      suv: "₱3,000",
      van: "₱3,000",
    },
    {
      route: "SUV (Innova) - 8-9 Seaters",
      sedan: "₱3,500",
      suv: "₱3,500",
      van: "₱3,500",
    },
  ],
  faqs: [
    {
      question: "What documents do I need for self-drive rental?",
      answer:
        "You need a valid driver's license, a valid ID, and a credit card for security deposit. International visitors can use their international driving permit along with their passport.",
    },
    {
      question: "What is the minimum age requirement?",
      answer:
        "You must be at least 21 years old with a valid driver's license to rent a vehicle. Drivers under 25 may be subject to additional fees.",
    },
    {
      question: "Can I drive outside the declared province?",
      answer:
        "Our unlimited mileage policy applies only within the declared province. Driving outside the province may incur additional charges and requires prior approval.",
    },
    {
      question: "What happens if the vehicle breaks down?",
      answer:
        "We provide 24/7 roadside assistance. If the vehicle cannot be repaired on-site, we will arrange for a replacement vehicle or alternative transportation at no extra cost.",
    },
    {
      question: "Can I add an additional driver?",
      answer:
        "Yes, you can add an additional driver for a small fee. The additional driver must also meet our age and license requirements and be present during vehicle pickup.",
    },
  ],
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Self-drive car rental in Bicol gives you complete freedom to explore the region at your own pace. Perfect for families, couples, and business travelers who want to discover Bicol's attractions without being tied to tour schedules.",
      "Our unlimited mileage policy within the declared province means you can visit multiple destinations without worrying about distance charges. This makes our service ideal for exploring all six provinces of Bicol: Albay, Camarines Norte, Camarines Sur, Catanduanes, Masbate, and Sorsogon.",
    ],
    benefits: [
      "Enjoy complete flexibility to start your day whenever you want and modify your itinerary on the go. With unlimited mileage, you can explore from Legazpi to Catanduanes without additional costs.",
      "Save money compared to hiring a driver or using multiple transportation modes. Our comprehensive insurance and 24/7 roadside assistance provide peace of mind throughout your journey.",
    ],
    process: [
      "Book online through our website or contact us via phone, WhatsApp, or email. We'll help you choose the right vehicle based on your group size and travel plans.",
      "Bring a valid driver's license, ID, and credit card for the security deposit. International visitors need an international driving permit and passport.",
    ],
    areas: [
      "Our service covers all six provinces of Bicol Region, including popular destinations like Mayon Volcano, Caramoan Islands, and Donsol whale shark watching.",
      "Travel to Catanduanes requires a ferry crossing, and some remote areas may have limited fuel stations. We provide route guidance and emergency support.",
    ],
    tips: [
      "Book in advance during peak seasons (March to May) and holidays to secure your preferred vehicle. Research destinations and plan your route before your trip.",
      "Pack for Bicol's tropical climate and bring sun protection. Consider seasonal weather - dry season (November to April) offers the best conditions for outdoor activities.",
    ],
  },
}

export default function SelfDrivePage() {
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
                <BreadcrumbPage>Self Drive Rental</BreadcrumbPage>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">About Self Drive Rental</h2>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Self Drive Rental?</h2>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">How Self Drive Rental Works</h2>
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
