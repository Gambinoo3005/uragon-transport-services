import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { FeatureListBlock, InclusionExclusionBlock } from "@/components/ui/content-blocks"
import { Vehicle } from "@/lib/vehicles"

interface VehicleFeaturesProps {
  vehicle: Vehicle
}

export function VehicleFeatures({ vehicle }: VehicleFeaturesProps) {
  // Transform vehicle features to match FeatureListBlock format
  const features = vehicle.features.map(feature => ({
    title: feature,
    description: `This ${vehicle.name} comes equipped with ${feature.toLowerCase()}, ensuring a comfortable and reliable driving experience throughout your Bicol journey.`
  }))

  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Vehicle Features"
        description={`Everything you need to know about the ${vehicle.name} for your Bicol adventure.`}
        maxWidth="2xl"
      />

      {/* Features Grid */}
      <div className="mb-16">
        <FeatureListBlock 
          features={features}
          variant="default"
          columns={3}
        />
      </div>

      {/* Inclusions & Exclusions */}
      <InclusionExclusionBlock 
        inclusions={vehicle.inclusions}
        exclusions={vehicle.exclusions}
        variant="default"
        showIcons={true}
      />
    </SectionContainer>
  )
}
