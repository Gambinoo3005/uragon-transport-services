import { PageHero } from "@/components/ui/hero-components"

export function AboutHero() {
  return (
    <PageHero
      title="About Uragon Transport Services"
      highlight="Uragon"
      description="A locally founded car rental company based in Malilipot, Albay, serving travelers, families, and businesses across the Bicol Region."
      stats={[
        { number: "2025", label: "Founded" },
        { number: "12+", label: "Vehicles" },
        { number: "100%", label: "Insured" },
        { number: "24/7", label: "Support" }
      ]}
      className="relative"
    >
      <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 mb-8">
        <p className="text-xl font-bold text-primary italic">
          "Unlock your journey, travel anywhere."
        </p>
        <p className="text-sm text-muted-foreground mt-2">Our guiding line</p>
      </div>
    </PageHero>
  )
}
