import { PageHero } from "@/components/ui/hero-components"

export function BrandsHero() {
  return (
    <PageHero
      title="Our Vehicle Brands"
      highlight="Vehicle Brands"
      description="Choose from our premium fleet of Toyota, Mitsubishi, and other trusted vehicle brands. All vehicles are well-maintained, fully insured, and perfect for exploring Bicol with unlimited mileage."
      stats={[
        { number: "3", label: "Trusted Brands" },
        { number: "12+", label: "Vehicle Models" },
        { number: "100%", label: "Insured" },
        { number: "24/7", label: "Support" }
      ]}
    />
  )
}
