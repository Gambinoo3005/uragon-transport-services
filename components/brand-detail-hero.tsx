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
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{brand.name} Vehicles</h1>
            <p className="text-xl text-primary mb-6 font-medium">{brand.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">{brand.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={brand.image || "/placeholder.svg"}
              alt={`${brand.name} vehicles`}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
