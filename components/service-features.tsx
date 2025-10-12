import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { FeatureListBlock, InclusionExclusionBlock } from "@/components/ui/content-blocks"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceData {
  features: ServiceFeature[]
  inclusions: string[]
  exclusions: string[]
}

interface ServiceFeaturesProps {
  service: ServiceData
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Service Features"
        description="Everything you need for a smooth and comfortable transfer experience."
        maxWidth="2xl"
      />

      {/* Features Grid */}
      <div className="mb-16">
        <FeatureListBlock 
          features={service.features}
          variant="default"
          columns={3}
        />
      </div>

      {/* Inclusions & Exclusions */}
      <InclusionExclusionBlock 
        inclusions={service.inclusions}
        exclusions={service.exclusions}
        variant="default"
        showIcons={true}
      />
    </SectionContainer>
  )
}
