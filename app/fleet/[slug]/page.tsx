import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { VehicleDetailHero } from "@/components/vehicle-detail-hero"
import { VehicleFeatures } from "@/components/vehicle-features"
import { VehiclePricing } from "@/components/vehicle-pricing"
import { VehicleFAQ } from "@/components/vehicle-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
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
        <SectionContainer background="default" padding="xl">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* About Vehicle */}
            <ContentCard
              type="feature"
              title={`About the ${vehicle.name}`}
              description={`The ${vehicle.name} is a ${vehicle.category.toLowerCase()} that combines ${vehicle.brand}'s legendary reliability with modern features perfect for exploring Bicol. With its ${vehicle.specifications.engine} engine and ${vehicle.transmission.toLowerCase()} transmission, this vehicle offers an ideal balance of performance and efficiency. Perfect for ${vehicle.seats === 4 ? 'couples and small families' : vehicle.seats <= 5 ? 'families and small groups' : 'larger groups and families'}, the ${vehicle.name} provides comfortable seating for up to ${vehicle.seats} passengers and ample space for luggage.`}
              variant="default"
            />

            {/* Why Choose This Vehicle */}
            <ContentCard
              type="feature"
              title={`Why Choose the ${vehicle.name}?`}
              description={`The ${vehicle.name} stands out for its ${vehicle.features.slice(0, 2).join(' and ').toLowerCase()}, making it an excellent choice for Bicol exploration. Its ${vehicle.specifications.engine} engine provides ${vehicle.fuel.toLowerCase()} efficiency while maintaining reliable performance across diverse terrain. With a ${vehicle.specifications.fuelCapacity} fuel capacity and ${vehicle.specifications.luggage.toLowerCase()} luggage space, you can travel comfortably without frequent stops.`}
              variant="default"
            />

            {/* How Rental Works */}
            <ContentCard
              type="feature"
              title={`How ${vehicle.name} Rental Works`}
              description={`Booking the ${vehicle.name} is simple and straightforward. Contact us via phone, WhatsApp, or email to check availability and reserve your preferred dates. We'll help you choose the perfect rental period based on your Bicol itinerary. On pickup day, bring a valid driver's license, ID, and credit card for the security deposit. We'll provide a thorough vehicle inspection and handover all necessary documentation.`}
              variant="default"
            />

            {/* Service Areas */}
            <ContentCard
              type="feature"
              title="Service Areas"
              description={`The ${vehicle.name} is perfect for exploring all six provinces of Bicol Region. From the smooth highways connecting major cities to the winding roads leading to Mayon Volcano and Caramoan Islands, this ${vehicle.category.toLowerCase()} handles Bicol's diverse terrain with ease. Popular destinations accessible with the ${vehicle.name} include Legazpi City, Naga City, Caramoan Islands, Donsol whale shark watching, and the scenic routes around Mayon Volcano.`}
              variant="default"
            />

            {/* Tips & Recommendations */}
            <ContentCard
              type="feature"
              title="Tips & Recommendations"
              description={`Book your ${vehicle.name} rental in advance during peak seasons (March to May) and holidays to secure availability. This ${vehicle.category.toLowerCase()} is particularly popular for ${vehicle.seats <= 5 ? 'family trips and couples' : 'group adventures and family outings'}. Plan your Bicol itinerary considering the vehicle's ${vehicle.specifications.fuelCapacity} fuel capacity. While fuel stations are readily available in major cities, some remote areas may have limited options.`}
              variant="default"
            />

          </div>
        </SectionContainer>

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
