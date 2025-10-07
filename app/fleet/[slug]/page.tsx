import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { VehicleDetailHero } from "@/components/vehicle-detail-hero"
import { VehicleFeatures } from "@/components/vehicle-features"
import { VehiclePricing } from "@/components/vehicle-pricing"
import { VehicleFAQ } from "@/components/vehicle-faq"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { vehicles, getVehicleById, getVehicleIds } from "@/lib/vehicles"

interface VehiclePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: VehiclePageProps) {
  const vehicle = getVehicleById(params.slug)

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Uragon Tours",
    }
  }

  return {
    title: `${vehicle.name} - ${vehicle.category} Rental | Uragon Tours`,
    description: `Rent the ${vehicle.name} for ${vehicle.pricePerDay}/day. ${vehicle.description}`,
    keywords: `${vehicle.name} rental Bicol, ${vehicle.category} rental, car rental Legazpi Naga`,
  }
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = getVehicleById(params.slug)

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VehicleDetailHero vehicle={vehicle} />
        <VehicleFeatures vehicle={vehicle} />
        
        {/* Additional Content Section for SEO */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* About Vehicle */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">About the {vehicle.name}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      The {vehicle.name} is a {vehicle.category.toLowerCase()} that combines {vehicle.brand}'s legendary reliability with modern features perfect for exploring Bicol. 
                      With its {vehicle.specifications.engine} engine and {vehicle.transmission.toLowerCase()} transmission, this vehicle offers an ideal balance of performance and efficiency.
                    </p>
                    <p className="text-pretty">
                      Perfect for {vehicle.seats === 4 ? 'couples and small families' : vehicle.seats <= 5 ? 'families and small groups' : 'larger groups and families'}, 
                      the {vehicle.name} provides comfortable seating for up to {vehicle.seats} passengers and ample space for luggage. 
                      Whether you're exploring the urban centers of Legazpi and Naga or venturing into the scenic routes around Mayon Volcano, this vehicle delivers reliable performance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose This Vehicle */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose the {vehicle.name}?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      The {vehicle.name} stands out for its {vehicle.features.slice(0, 2).join(' and ').toLowerCase()}, making it an excellent choice for Bicol exploration. 
                      Its {vehicle.specifications.engine} engine provides {vehicle.fuel.toLowerCase()} efficiency while maintaining reliable performance across diverse terrain.
                    </p>
                    <p className="text-pretty">
                      With a {vehicle.specifications.fuelCapacity} fuel capacity and {vehicle.specifications.luggage.toLowerCase()} luggage space, 
                      you can travel comfortably without frequent stops. The vehicle's {vehicle.specifications.aircon} ensures a pleasant journey regardless of Bicol's tropical climate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* How Rental Works */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">How {vehicle.name} Rental Works</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      Booking the {vehicle.name} is simple and straightforward. Contact us via phone, WhatsApp, or email to check availability and reserve your preferred dates. 
                      We'll help you choose the perfect rental period based on your Bicol itinerary.
                    </p>
                    <p className="text-pretty">
                      On pickup day, bring a valid driver's license, ID, and credit card for the security deposit. 
                      We'll provide a thorough vehicle inspection and handover all necessary documentation. 
                      International visitors need an international driving permit and passport.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Service Areas</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      The {vehicle.name} is perfect for exploring all six provinces of Bicol Region. From the smooth highways connecting major cities to the winding roads leading to Mayon Volcano and Caramoan Islands, 
                      this {vehicle.category.toLowerCase()} handles Bicol's diverse terrain with ease.
                    </p>
                    <p className="text-pretty">
                      Popular destinations accessible with the {vehicle.name} include Legazpi City, Naga City, Caramoan Islands, Donsol whale shark watching, and the scenic routes around Mayon Volcano. 
                      The vehicle's {vehicle.specifications.engine} engine and reliable transmission make it suitable for both city driving and rural exploration.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tips & Recommendations */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Tips & Recommendations</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      Book your {vehicle.name} rental in advance during peak seasons (March to May) and holidays to secure availability. 
                      This {vehicle.category.toLowerCase()} is particularly popular for {vehicle.seats <= 5 ? 'family trips and couples' : 'group adventures and family outings'}.
                    </p>
                    <p className="text-pretty">
                      Plan your Bicol itinerary considering the vehicle's {vehicle.specifications.fuelCapacity} fuel capacity. 
                      While fuel stations are readily available in major cities, some remote areas may have limited options. 
                      Pack for Bicol's tropical climate and bring sun protection for your journey.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        <VehiclePricing vehicle={vehicle} />
        <VehicleFAQ vehicle={vehicle} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}

export async function generateStaticParams() {
  return getVehicleIds().map((slug) => ({
    slug,
  }))
}
