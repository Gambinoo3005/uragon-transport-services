import { PageHero } from "@/components/ui/hero-components"

export function FleetHero() {
  return (
    <PageHero
      title="Our Fleet"
      highlight="Fleet"
      description="Choose from our extensive collection of modern, well-maintained vehicles. From compact sedans to spacious vans, we have the perfect ride for your Bicol adventure."
      stats={[
        { number: "50+", label: "Vehicles" },
        { number: "4", label: "Categories" },
        { number: "100%", label: "Insured" },
        { number: "24/7", label: "Support" }
      ]}
    />
  )
}
