import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { FeatureListBlock, InclusionExclusionBlock } from "@/components/ui/content-blocks"

interface BrandFeature {
  title: string
  description: string
}

interface BrandData {
  name: string
  features: BrandFeature[]
  inclusions: string[]
  exclusions: string[]
}

interface BrandFeaturesProps {
  brand: BrandData
}

export function BrandFeatures({ brand }: BrandFeaturesProps) {
  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Brand Features"
        description={`Everything you need to know about ${brand.name} vehicles in our fleet.`}
        maxWidth="2xl"
      />

      {/* Features Grid */}
      <div className="mb-16">
        <FeatureListBlock 
          features={brand.features}
          variant="default"
          columns={3}
        />
      </div>

      {/* Inclusions & Exclusions */}
      <InclusionExclusionBlock 
        inclusions={brand.inclusions}
        exclusions={brand.exclusions}
        variant="default"
        showIcons={true}
      />
    </SectionContainer>
  )
}
