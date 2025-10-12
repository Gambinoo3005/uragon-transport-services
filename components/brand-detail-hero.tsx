import { DetailHero } from "@/components/ui/hero-components"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface BrandData {
  name: string
  subtitle: string
  description: string
  image: string
}

interface BrandDetailHeroProps {
  brand: BrandData
}

export function BrandDetailHero({ brand }: BrandDetailHeroProps) {
  return (
    <DetailHero
      title={`${brand.name} Vehicles`}
      subtitle={brand.subtitle}
      description={brand.description}
      image={brand.image}
      imageAlt={`${brand.name} vehicles`}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Phone className="h-4 w-4 mr-2" />
          Book Now
        </Button>
        <Button size="lg" variant="outline" className="bg-transparent">
          <MessageCircle className="h-4 w-4 mr-2" />
          Get Quote
        </Button>
      </div>
    </DetailHero>
  )
}
