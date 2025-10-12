import { DetailHero } from "@/components/ui/hero-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Settings, Fuel, Star, Phone, MessageCircle } from "lucide-react"
import { Vehicle } from "@/lib/vehicles"

interface VehicleDetailHeroProps {
  vehicle: Vehicle
}

export function VehicleDetailHero({ vehicle }: VehicleDetailHeroProps) {
  const subtitle = vehicle.brand && vehicle.model && vehicle.year 
    ? `${vehicle.brand} ${vehicle.model} • ${vehicle.year}`
    : undefined

  const badge = vehicle.popular ? "Popular Choice" : undefined

  return (
    <DetailHero
      title={vehicle.name}
      subtitle={subtitle}
      description={vehicle.description}
      badge={badge}
      image={vehicle.images[0] || "/placeholder.svg"}
      imageAlt={`${vehicle.name} - ${vehicle.category} for rent in Bicol`}
    >
      <div className="space-y-6">
        {/* Rating */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{vehicle.rating}</span>
            <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
          </div>
          <Badge variant="secondary">{vehicle.category}</Badge>
        </div>

        {/* Available Colors */}
        {vehicle.colors && vehicle.colors.length > 0 && (
          <div>
            <div className="text-sm font-medium text-foreground mb-2">Available Colors:</div>
            <div className="flex flex-wrap gap-2">
              {vehicle.colors.map((color, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Quick Specs */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
            <div className="font-medium">{vehicle.seats} Seats</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Settings className="h-5 w-5 mx-auto mb-2 text-primary" />
            <div className="font-medium">{vehicle.transmission}</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Fuel className="h-5 w-5 mx-auto mb-2 text-primary" />
            <div className="font-medium">{vehicle.fuel}</div>
          </div>
        </div>

        {/* Action Buttons */}
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
    </DetailHero>
  )
}
