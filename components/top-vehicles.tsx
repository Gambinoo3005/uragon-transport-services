"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, Fuel } from "lucide-react"
import { useState } from "react"

const vehicles = [
  {
    id: 1,
    name: "Toyota Vios AT 2025",
    category: "Sedan",
    image: "/toyota-vios-sedan-car-rental.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱2,000",
    pricePer12hr: "₱1,500",
    features: ["Modern Interior", "Bluetooth Connectivity", "Safety Features", "Air Conditioning", "GPS Navigation"],
    colors: ["Blackish Red", "Super Red", "Blue"],
    type: "Self Drive",
  },
  {
    id: 2,
    name: "Toyota Innova AT 2024",
    category: "SUV",
    image: "/toyota-innova-mpv-car-rental.jpg",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "₱3,500",
    pricePer12hr: "₱3,000",
    features: ["8-Seat Capacity", "Diesel Engine", "Spacious Interior", "USB Charging", "Luggage Space"],
    colors: ["White"],
    type: "Self Drive",
  },
  {
    id: 3,
    name: "Toyota Rush AT 2025",
    category: "SUV",
    image: "/toyota-fortuner-suv-car-rental.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    pricePerDay: "₱3,000",
    pricePer12hr: "₱2,500",
    features: ["4WD Capability", "Premium Interior", "Advanced Safety", "Hill Assist", "7-Seat SUV"],
    colors: ["White"],
    type: "Self Drive",
  },
  {
    id: 4,
    name: "L300 Carry MT 2024",
    category: "Van",
    image: "/hyundai-h350-van-car-rental.jpg",
    seats: 12,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: "₱3,000",
    pricePer12hr: "₱2,500",
    features: ["12-Seat Capacity", "Large Cargo Space", "Durable Design", "Power Steering", "Diesel Engine"],
    colors: ["White"],
    type: "With Driver",
  },
]

export function TopVehicles() {
  const [pricingMode, setPricingMode] = useState<'24hr' | '12hr'>('24hr')

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Top Vehicles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-6">
            Choose from our carefully maintained fleet of modern vehicles, perfect for any journey across Bicol.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-muted-foreground">Pricing:</span>
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={pricingMode === '24hr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPricingMode('24hr')}
                className="h-8 px-3"
              >
                24hrs
              </Button>
              <Button
                variant={pricingMode === '12hr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPricingMode('12hr')}
                className="h-8 px-3"
              >
                12hrs
              </Button>
            </div>
          </div>
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
                  <div className="text-2xl font-bold text-primary">
                    {pricingMode === '24hr' ? vehicle.pricePerDay : vehicle.pricePer12hr}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pricingMode === '24hr' ? 'per 24 hours' : 'per 12 hours'}
                  </div>
                  {vehicle.type && <div className="text-xs text-muted-foreground mt-1">{vehicle.type}</div>}
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
