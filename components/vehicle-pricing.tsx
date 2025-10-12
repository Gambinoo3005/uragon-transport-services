import { PricingTable } from "@/components/ui/pricing-component"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { InclusionExclusionBlock } from "@/components/ui/content-blocks"
import { Vehicle } from "@/lib/vehicles"

interface VehiclePricingProps {
  vehicle: Vehicle
}

export function VehiclePricing({ vehicle }: VehiclePricingProps) {
  const pricingRows = [
    {
      duration: "12 Hours",
      rate: vehicle.pricePer12hr || 'Contact us',
      total: vehicle.pricePer12hr || 'Contact us'
    },
    {
      duration: "24 Hours",
      rate: vehicle.pricePerDay,
      total: vehicle.pricePerDay
    },
    {
      duration: "3 Days",
      rate: `${vehicle.pricePerDay}/day`,
      total: `₱${(parseInt(vehicle.pricePerDay.replace("₱", "").replace(",", "")) * 3).toLocaleString()}`
    },
    {
      duration: "1 Week",
      rate: "Special Rate",
      total: "Contact Us"
    },
    {
      duration: "1 Month",
      rate: "Special Rate",
      total: "Contact Us"
    }
  ]

  const columns = [
    { key: 'duration', label: 'Duration', align: 'left' as const },
    { key: 'rate', label: 'Rate', align: 'left' as const },
    { key: 'total', label: 'Total', align: 'right' as const }
  ]

  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title={`${vehicle.name} Pricing`}
        description={`Competitive rates for the ${vehicle.name}. All prices include comprehensive insurance and unlimited mileage within the declared province.`}
        maxWidth="4xl"
      />

      <PricingTable
        columns={columns}
        rows={pricingRows}
        variant="duration"
        background="default"
        maxWidth="4xl"
        showDisclaimer={true}
        disclaimer="Prices may vary during peak seasons and holidays. Contact us for the most current rates and special offers. Weekly and monthly rentals available with special pricing."
        showCTA={false}
        className="py-0"
      />
      
      <div className="mt-6">
        <InclusionExclusionBlock 
          inclusions={vehicle.inclusions}
          exclusions={vehicle.exclusions}
          variant="compact"
          showIcons={false}
        />
      </div>
    </SectionContainer>
  )
}
