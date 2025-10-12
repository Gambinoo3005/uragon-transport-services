"use client"

import { Target, Eye } from "lucide-react"
import { MissionVisionSection } from "@/components/ui/section-components"

export function MissionVision() {
  return (
    <MissionVisionSection
      mission={{
        title: "Mission",
        description: "To deliver safe, seamless, and transparent mobility across Bicol by providing well-maintained vehicles, straightforward policies, and responsive support—so customers can focus on the journey, not the logistics.",
        icon: Target
      }}
      vision={{
        title: "Vision",
        description: "To be the most trusted mobility partner in the Bicol Region, known for dependable vehicles, genuine local service, and a customer experience that sets the benchmark for provincial car rentals in the Philippines.",
        icon: Eye
      }}
      background="muted"
      maxWidth="6xl"
    />
  )
}
