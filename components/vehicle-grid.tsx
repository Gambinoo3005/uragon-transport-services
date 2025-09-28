import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Settings, Fuel, Star, Shield } from "lucide-react"
import Link from "next/link"

const vehicles = [
  {
    id: "toyota-wigo-at-2025",
    name: "Toyota Wigo AT 2025",
    category: "Hatchback",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,000",
    rating: 4.8,
    reviews: 45,
    features: ["Fuel Efficient", "Compact Design", "Easy Parking", "Air Conditioning"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["Silver"],
  },
  {
    id: "toyota-wigo-mt-2019",
    name: "Toyota Wigo MT 2019",
    category: "Hatchback",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Gasoline",
    pricePerDay: "₱1,800",
    rating: 4.7,
    reviews: 38,
    features: ["Fuel Efficient", "Compact Design", "Easy Parking", "Air Conditioning"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["Orange"],
  },
  {
    id: "toyota-vios-at-2025",
    name: "Toyota Vios AT 2025",
    category: "Sedan",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,500",
    rating: 4.9,
    reviews: 124,
    features: ["Air Conditioning", "Modern Interior", "Safety Features", "Bluetooth"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: true,
    colors: ["Blackish Red", "Super Red", "Blue"],
  },
  {
    id: "toyota-vios-at-2026",
    name: "Toyota Vios AT 2026",
    category: "Sedan",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,600",
    rating: 4.9,
    reviews: 67,
    features: ["Air Conditioning", "Modern Interior", "Safety Features", "Bluetooth"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: true,
    colors: ["Silver"],
  },
  {
    id: "toyota-avanza-at-2023",
    name: "Toyota Avanza AT 2023",
    category: "MPV",
    image: "/toyota-innova-mpv-car-rental.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱3,000",
    rating: 4.8,
    reviews: 89,
    features: ["Spacious Interior", "Air Conditioning", "USB Charging", "Luggage Space"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["Silver"],
  },
  {
    id: "toyota-avanza-mt-2024",
    name: "Toyota Avanza MT 2024",
    category: "MPV",
    image: "/toyota-innova-mpv-car-rental.jpg",
    seats: 7,
    transmission: "Manual",
    fuel: "Gasoline",
    pricePerDay: "₱2,800",
    rating: 4.7,
    reviews: 56,
    features: ["Spacious Interior", "Air Conditioning", "USB Charging", "Luggage Space"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["Black"],
  },
  {
    id: "toyota-innova-at-2024",
    name: "Toyota Innova AT 2024",
    category: "MPV",
    image: "/toyota-innova-mpv-car-rental.jpg",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "₱3,500",
    rating: 4.9,
    reviews: 156,
    features: ["Spacious Interior", "Air Conditioning", "USB Charging", "Luggage Space"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: true,
    colors: ["White"],
  },
  {
    id: "toyota-rush-at-2025",
    name: "Toyota Rush AT 2025",
    category: "SUV",
    image: "/toyota-fortuner-suv-car-rental.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱4,000",
    rating: 4.8,
    reviews: 73,
    features: ["4WD Capability", "Premium Interior", "Safety Features", "Hill Assist"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["White"],
  },
  {
    id: "mitsubishi-xpander-at-2024",
    name: "Mitsubishi Xpander AT 2024",
    category: "MPV",
    image: "/mitsubishi-montero-suv-car-rental.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱3,200",
    rating: 4.7,
    reviews: 92,
    features: ["Spacious Interior", "Modern Design", "Safety Features", "Air Conditioning"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["White"],
  },
  {
    id: "nissan-navara-4x4-at-2025",
    name: "Nissan Navara 4x4 AT 2025",
    category: "Pickup",
    image: "/toyota-fortuner-suv-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "₱4,500",
    rating: 4.9,
    reviews: 45,
    features: ["4WD Capability", "Cargo Space", "Towing Capacity", "Premium Interior"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: true,
    colors: ["Gray"],
  },
  {
    id: "mitsubishi-mirage-g4-at-2024",
    name: "Mitsubishi Mirage G4 AT 2024",
    category: "Sedan",
    image: "/honda-city-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,200",
    rating: 4.6,
    reviews: 34,
    features: ["Fuel Efficient", "Compact Design", "Air Conditioning", "Modern Interior"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["Red"],
  },
  {
    id: "l300-carry-mt-2024",
    name: "L300 Carry MT 2024",
    category: "Van",
    image: "/hyundai-h350-van-car-rental.jpg",
    seats: 12,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: "₱3,800",
    rating: 4.5,
    reviews: 28,
    features: ["Large Capacity", "Cargo Space", "Durable Design", "Power Steering"],
    inclusions: ["Comprehensive Insurance", "24/7 Road Assistance", "Unlimited Mileage"],
    popular: false,
    colors: ["White"],
  },
]

export function VehicleGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Available Vehicles</h2>
            <p className="text-muted-foreground">{vehicles.length} vehicles found</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={`${vehicle.name} - ${vehicle.category} for rent in Bicol`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {vehicle.popular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Popular</Badge>
                )}
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                  {vehicle.category}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{vehicle.name}</h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{vehicle.rating}</span>
                    <span className="text-muted-foreground">({vehicle.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.seats} seats</span>
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

                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium text-foreground">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {vehicle.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{vehicle.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm font-medium text-foreground">Included:</div>
                  <div className="space-y-1">
                    {vehicle.inclusions.slice(0, 2).map((inclusion, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <Shield className="h-3 w-3 mr-2 text-primary" />
                        {inclusion}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{vehicle.pricePerDay}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                  <Link href={`/fleet/${vehicle.id}`}>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      View Details
                    </Button>
                  </Link>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request to Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need help choosing the right vehicle?</p>
          <Button variant="outline" size="lg" className="bg-transparent">
            Contact Our Fleet Experts
          </Button>
        </div>
      </div>
    </section>
  )
}
