import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Settings, Fuel, Star, Phone, MessageCircle } from "lucide-react"
import { Vehicle } from "@/lib/vehicles"

interface VehicleDetailHeroProps {
  vehicle: Vehicle
}

export function VehicleDetailHero({ vehicle }: VehicleDetailHeroProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">{vehicle.name}</h1>
                {vehicle.brand && vehicle.model && vehicle.year && (
                  <div className="text-sm text-muted-foreground mb-2">
                    {vehicle.brand} {vehicle.model} • {vehicle.year}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end space-y-2">
                <Badge variant="secondary">{vehicle.category}</Badge>
                {vehicle.popular && (
                  <Badge className="bg-primary text-primary-foreground">Popular Choice</Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{vehicle.rating}</span>
                <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
              </div>
            </div>

            {vehicle.colors && vehicle.colors.length > 0 && (
              <div className="mb-4">
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

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">{vehicle.description}</p>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-4 mb-8">
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
              src={vehicle.images[0] || "/placeholder.svg"}
              alt={`${vehicle.name} - ${vehicle.category} for rent in Bicol`}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
