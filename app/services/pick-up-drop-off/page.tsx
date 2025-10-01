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
  title: "Pick Up & Drop Off Service - Convenient Transportation | Uragon Transport Services",
  description:
    "Convenient pick up and drop off service to your preferred location. Available for all our vehicles with reliable timing and professional service.",
  keywords: "pickup dropoff service, car rental pickup, drop off service Bicol, convenient transportation, airport pickup, hotel pickup",
}

const serviceData = {
  title: "Pick Up & Drop Off",
  subtitle: "Convenient service to your preferred location",
  description:
    "Save time and hassle with our convenient pick up and drop off service. We'll collect your rental vehicle from your location and return it when you're done, making your car rental experience seamless and stress-free.",
  image: "/honda-city-sedan-car-rental.jpg",
  features: [
    {
      title: "Flexible Locations",
      description: "We can pick up and drop off at hotels, airports, homes, offices, or any convenient location within our service area.",
    },
    {
      title: "All Vehicles Available",
      description: "Pick up and drop off service is available for all our vehicle types - sedans, SUVs, MPVs, and vans.",
    },
    {
      title: "Convenient Service",
      description: "No need to travel to our office. We bring the vehicle to you and collect it when you're finished.",
    },
    {
      title: "Reliable Timing",
      description: "We arrive on time as scheduled, ensuring your plans aren't disrupted by delays or waiting.",
    },
    {
      title: "Professional Staff",
      description: "Our delivery team is professional, courteous, and will handle all vehicle documentation and handover procedures.",
    },
    {
      title: "Same Day Service",
      description: "Available for same-day bookings with advance notice, perfect for last-minute travel needs.",
    },
  ],
  inclusions: [
    "Vehicle delivery to your location",
    "Vehicle collection from your location",
    "Professional delivery staff",
    "Vehicle documentation handover",
    "Basic vehicle orientation",
    "Flexible scheduling",
  ],
  exclusions: [
    "Delivery outside service area",
    "Same-day delivery without advance notice",
    "Vehicle cleaning or detailing",
    "Fuel refilling service",
    "Personal driver service",
    "Extended waiting time",
  ],
  pricing: [
    {
      route: "Within Legazpi City",
      sedan: "₱500",
      suv: "₱500",
      van: "₱500",
    },
    {
      route: "Within Naga City",
      sedan: "₱500",
      suv: "₱500",
      van: "₱500",
    },
    {
      route: "Legazpi to Naga (or vice versa)",
      sedan: "₱1,000",
      suv: "₱1,000",
      van: "₱1,000",
    },
    {
      route: "Other Bicol Areas",
      sedan: "₱800",
      suv: "₱800",
      van: "₱800",
    },
  ],
  faqs: [
    {
      question: "How far in advance should I book pick up and drop off service?",
      answer:
        "We recommend booking at least 24 hours in advance for guaranteed service. Same-day service may be available with advance notice, subject to availability.",
    },
    {
      question: "What areas do you cover for pick up and drop off?",
      answer:
        "We cover Legazpi City, Naga City, and surrounding areas. For other locations in Bicol, please contact us to confirm availability and pricing.",
    },
    {
      question: "Can you pick up from the airport?",
      answer:
        "Yes, we can pick up from Legazpi Airport and Naga Airport. We'll meet you at the arrivals area with your rental vehicle ready to go.",
    },
    {
      question: "What if I need to extend my rental period?",
      answer:
        "Contact us as soon as possible to extend your rental. We'll arrange for the new drop-off time and update your rental agreement accordingly.",
    },
    {
      question: "Do you provide the same pick up and drop off service for all vehicle types?",
      answer:
        "Yes, our pick up and drop off service is available for all our vehicles including sedans, SUVs, MPVs, and vans. Pricing may vary by location.",
    },
  ],
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Our pick up and drop off service eliminates the need to visit our office, bringing convenience directly to your doorstep. Perfect for busy travelers, business professionals, and anyone who values their time.",
      "Whether you're staying at a hotel, arriving at the airport, or need the vehicle delivered to your home or office, we'll handle the logistics so you can focus on your trip.",
    ],
    benefits: [
      "Save valuable time by having your rental vehicle delivered directly to your location. No need to navigate to our office or wait in line for vehicle pickup.",
      "Enjoy seamless service with professional staff who handle all documentation and vehicle orientation at your preferred location, ensuring a smooth rental experience.",
    ],
    process: [
      "Book your rental with pick up and drop off service online or by phone. Specify your preferred pickup location, date, and time. We'll confirm the delivery details with you.",
      "Our delivery team will arrive at your specified location with the vehicle, complete all necessary paperwork, and provide a brief orientation on the vehicle's features and policies.",
    ],
    areas: [
      "We provide pick up and drop off service within Legazpi City, Naga City, and surrounding areas. Service is also available to and from Legazpi and Naga airports.",
      "For locations outside our standard service area, please contact us for availability and custom pricing. We may be able to accommodate special requests with advance notice.",
    ],
    tips: [
      "Book your pick up and drop off service when making your rental reservation to ensure availability. Provide accurate location details and contact information for smooth delivery.",
      "Be available at the scheduled pickup time to complete documentation and vehicle orientation. Have your driver's license and ID ready for verification.",
    ],
  },
}

export default function PickupDropoffPage() {
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
                <BreadcrumbPage>Pick Up & Drop Off</BreadcrumbPage>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">About Pick Up & Drop Off Service</h2>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Pick Up & Drop Off Service?</h2>
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
                  <h2 className="text-3xl font-bold text-foreground mb-6">How Pick Up & Drop Off Works</h2>
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
