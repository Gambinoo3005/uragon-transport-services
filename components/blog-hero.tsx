import { PageHero } from "@/components/ui/hero-components"

export function BlogHero() {
  return (
    <PageHero
      title="Travel Blog"
      highlight="Blog"
      description="Discover the best of Bicol with our travel guides, car rental tips, and local insights. Plan your perfect trip with expert advice from locals who know the region best."
      stats={[
        { number: "10+", label: "Articles" },
        { number: "Local", label: "Insights" },
        { number: "Travel", label: "Guides" },
        { number: "Tips", label: "& Tricks" }
      ]}
    />
  )
}
