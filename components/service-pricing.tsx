import { PricingTable } from "@/components/ui/pricing-component"

interface PricingRow {
  route: string
  sedan: string
  suv: string
  van: string
}

interface ServiceData {
  pricing: PricingRow[]
}

interface ServicePricingProps {
  service: ServiceData
}

export function ServicePricing({ service }: ServicePricingProps) {
  const columns = [
    { key: 'route', label: 'Route', align: 'left' as const },
    { key: 'sedan', label: 'Sedan (1-4 pax)', align: 'center' as const },
    { key: 'suv', label: 'SUV (1-6 pax)', align: 'center' as const },
    { key: 'van', label: 'Van (1-10 pax)', align: 'center' as const }
  ]

  return (
    <PricingTable
      title="Pricing"
      description="Transparent, fixed rates with no hidden fees. Prices include fuel, tolls, and basic waiting time."
      columns={columns}
      rows={service.pricing}
      variant="route"
      background="muted/30"
      maxWidth="4xl"
      showDisclaimer={true}
      disclaimer="Prices include fuel, tolls, and 1 hour waiting time. Additional waiting time: ₱200 per hour. Extra stops: ₱300 per stop. Night surcharge (10PM-6AM): +20%. Holiday surcharge: +30%."
      showCTA={true}
      ctaText="Book Your Transfer"
      ctaHref="/contact"
    />
  )
}
