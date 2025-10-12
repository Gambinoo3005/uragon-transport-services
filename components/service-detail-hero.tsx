import { DetailHero } from "@/components/ui/hero-components"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface ServiceData {
  title: string
  subtitle: string
  description: string
  image: string
}

interface ServiceDetailHeroProps {
  service: ServiceData
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <DetailHero
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      image={service.image}
      imageAlt={service.title}
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
