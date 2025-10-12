import { PageHero } from "@/components/ui/hero-components"

type LocationsHeroProps = {
  totalLocations: number
  highlightAreas?: string[]
}

export function LocationsHero({ totalLocations, highlightAreas = [] }: LocationsHeroProps) {
  const highlightSummary =
    highlightAreas.length > 0
      ? highlightAreas.length === 1
        ? highlightAreas[0]
        : `${highlightAreas.slice(0, -1).join(", ")} & ${highlightAreas.slice(-1)}`
      : ""

  return (
    <PageHero
      title="Service Locations"
      highlight="Locations"
      description="Wherever your trip takes you in Bicol, our on-ground team is ready to deliver clean, well-maintained vehicles with professional support. Book in advance and we'll meet you right where you need us."
      stats={[
        { number: `${totalLocations}+`, label: "Active Hubs" },
        { number: "45 min", label: "Avg. Response" },
        { number: "24/7", label: "Dispatch Support" },
        { number: "Full", label: highlightSummary ? `${highlightSummary} Coverage` : "Bicol Coverage" }
      ]}
    />
  )
}

