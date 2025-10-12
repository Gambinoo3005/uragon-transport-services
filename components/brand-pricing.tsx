import { PricingTable } from "@/components/ui/pricing-component"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { InclusionExclusionBlock } from "@/components/ui/content-blocks"
import { getAllVehicles } from "@/lib/vehicles"

interface BrandData {
  name: string
  slug: string
}

interface BrandPricingProps {
  brand: BrandData
}

export function BrandPricing({ brand }: BrandPricingProps) {
  // Get vehicles for this brand and create pricing table
  const allVehicles = getAllVehicles()
  const brandVehicles = allVehicles.filter(vehicle => 
    vehicle.brand?.toLowerCase() === brand.slug
  )

  // Group vehicles by category for pricing table
  const pricingData = brandVehicles.reduce((acc, vehicle) => {
    const category = vehicle.category
    if (!acc[category]) {
      acc[category] = {
        category,
        vehicles: [],
        priceRange: { min: Infinity, max: 0 }
      }
    }
    
    acc[category].vehicles.push(vehicle)
    const price = parseInt(vehicle.pricePerDay.replace('₱', '').replace(',', ''))
    acc[category].priceRange.min = Math.min(acc[category].priceRange.min, price)
    acc[category].priceRange.max = Math.max(acc[category].priceRange.max, price)
    
    return acc
  }, {} as Record<string, any>)

  const pricingRows = Object.values(pricingData).map((category: any) => ({
    category: category.category,
    priceRange: category.priceRange.min === category.priceRange.max 
      ? `₱${category.priceRange.min.toLocaleString()}`
      : `₱${category.priceRange.min.toLocaleString()} - ₱${category.priceRange.max.toLocaleString()}`,
    vehicles: category.vehicles.map((v: any) => v.name).join(', '),
    seats: `${Math.min(...category.vehicles.map((v: any) => v.seats))}-${Math.max(...category.vehicles.map((v: any) => v.seats))} seats`,
    transmission: [...new Set(category.vehicles.map((v: any) => v.transmission))].join(' / ')
  }))

  const inclusions = [
    "Comprehensive vehicle insurance",
    "24/7 roadside assistance",
    "Unlimited mileage within declared province",
    `Well-maintained ${brand.name} vehicles`,
    "Basic vehicle documentation",
    "Emergency contact support"
  ]

  const exclusions = [
    "Fuel costs",
    "Toll fees",
    "Parking fees",
    "Traffic violations and fines",
    "Driver services",
    "Additional accessories"
  ]

  const columns = [
    { key: 'category', label: 'Vehicle Category', align: 'left' as const },
    { key: 'vehicles', label: 'Available Models', align: 'left' as const },
    { key: 'seats', label: 'Seating', align: 'left' as const },
    { key: 'transmission', label: 'Transmission', align: 'left' as const },
    { key: 'priceRange', label: 'Daily Rate', align: 'right' as const }
  ]

  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title={`${brand.name} Vehicle Pricing`}
        description={`Competitive rates for all ${brand.name} vehicles in our fleet. All prices include comprehensive insurance and unlimited mileage within the declared province.`}
        maxWidth="4xl"
      />

      <PricingTable
        columns={columns}
        rows={pricingRows}
        variant="vehicle"
        background="default"
        maxWidth="4xl"
        showDisclaimer={true}
        disclaimer="Prices may vary during peak seasons and holidays. Contact us for the most current rates and special offers. Weekly and monthly rentals available with special pricing."
        showCTA={false}
        className="py-0"
      />

      <div className="mt-6">
        <InclusionExclusionBlock 
          inclusions={inclusions}
          exclusions={exclusions}
          variant="compact"
          showIcons={false}
        />
      </div>
    </SectionContainer>
  )
}
