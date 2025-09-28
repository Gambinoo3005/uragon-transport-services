import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, Fuel } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "Toyota Vios AT 2025",
    category: "Sedan",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,500",
    features: ["Air Conditioning", "Unlimited Mileage", "Comprehensive Insurance"],
    colors: ["Blackish Red", "Super Red", "Blue"],
  },
  {
    id: 2,
    name: "Toyota Innova AT 2024",
    category: "MPV",
    image: "/toyota-innova-mpv-car-rental.jpg",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "₱3,500",
    features: ["Spacious Interior", "Unlimited Mileage", "24/7 Road Assistance"],
    colors: ["White"],
  },
  {
    id: 3,
    name: "Toyota Rush AT 2025",
    category: "SUV",
    image: "/toyota-fortuner-suv-car-rental.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱4,000",
    features: ["4WD Capability", "Unlimited Mileage", "Safety Features"],
    colors: ["White"],
  },
  {
    id: 4,
    name: "Nissan Navara 4x4 AT 2025",
    category: "Pickup",
    image: "/toyota-fortuner-suv-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "₱4,500",
    features: ["4WD Capability", "Unlimited Mileage", "Cargo Space"],
    colors: ["Gray"],
  },
]

export function TopVehicles() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Top Vehicles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our carefully maintained fleet of modern vehicles, perfect for any journey across Bicol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={`${vehicle.name} - ${vehicle.category} for rent`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">{vehicle.name}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{vehicle.category}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.seats}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-4 w-4" />
                    <span>{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-2xl font-bold text-primary">{vehicle.pricePerDay}</div>
                  <div className="text-sm text-muted-foreground">per day</div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request to Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  )
}
