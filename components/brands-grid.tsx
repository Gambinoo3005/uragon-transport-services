import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Truck, Users, Star } from "lucide-react"
import Link from "next/link"
import { getAllVehicles } from "@/lib/vehicles"

// Group vehicles by brand
const vehicles = getAllVehicles()
const brandsData = vehicles.reduce((acc, vehicle) => {
  const brand = vehicle.brand || 'Other'
  if (!acc[brand]) {
    acc[brand] = {
      name: brand,
      vehicles: [],
      totalVehicles: 0,
      categories: new Set(),
      priceRange: { min: Infinity, max: 0 },
      rating: 0,
      totalReviews: 0,
    }
  }
  
  acc[brand].vehicles.push(vehicle)
  acc[brand].totalVehicles++
  acc[brand].categories.add(vehicle.category)
  
  // Calculate price range
  const price = parseInt(vehicle.pricePerDay.replace('₱', '').replace(',', ''))
  acc[brand].priceRange.min = Math.min(acc[brand].priceRange.min, price)
  acc[brand].priceRange.max = Math.max(acc[brand].priceRange.max, price)
  
  // Calculate average rating
  acc[brand].rating += vehicle.rating
  acc[brand].totalReviews += vehicle.reviews
}, {} as Record<string, any>)

// Convert to array and calculate averages
const brands = Object.values(brandsData).map((brand: any) => ({
  ...brand,
  categories: Array.from(brand.categories),
  averageRating: brand.rating / brand.totalVehicles,
  priceRange: brand.priceRange.min === Infinity ? { min: 0, max: 0 } : brand.priceRange,
  slug: brand.name.toLowerCase().replace(/\s+/g, '-'),
  icon: brand.name === 'Toyota' ? Car : brand.name === 'Mitsubishi' ? Truck : Users,
  description: getBrandDescription(brand.name),
  features: getBrandFeatures(brand.name),
  popular: brand.name === 'Toyota' || brand.name === 'Mitsubishi',
}))

function getBrandDescription(brand: string): string {
  const descriptions = {
    'Toyota': 'Reliable, fuel-efficient vehicles perfect for city driving and long-distance travel. Known for durability and low maintenance costs.',
    'Mitsubishi': 'Robust and versatile vehicles ideal for both urban and rural driving. Excellent for family trips and cargo transport.',
    'Other': 'Specialized vehicles for specific needs including large capacity vans and commercial transport solutions.'
  }
  return descriptions[brand as keyof typeof descriptions] || descriptions.Other
}

function getBrandFeatures(brand: string): string[] {
  const features = {
    'Toyota': ['Fuel Efficient', 'Reliable Engine', 'Low Maintenance', 'Resale Value'],
    'Mitsubishi': ['Durable Design', 'Versatile Use', 'Family Friendly', 'Cargo Space'],
    'Other': ['Specialized Use', 'Large Capacity', 'Commercial Grade', 'Professional Service']
  }
  return features[brand as keyof typeof features] || features.Other
}

export function BrandsGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted Vehicle Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each brand in our fleet is carefully selected for reliability, performance, and value. Choose the perfect
            vehicle brand for your Bicol adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => {
            const IconComponent = brand.icon
            return (
              <Card key={brand.slug} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={`/${brand.slug}-brand-showcase.jpg` || "/placeholder.svg"}
                    alt={`${brand.name} vehicles - Uragon Tours`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {brand.popular && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Popular</Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">{brand.name}</h3>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-bold text-primary">₱{brand.priceRange.min.toLocaleString()}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{brand.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Vehicles Available:</span>
                      <span className="font-medium">{brand.totalVehicles}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Average Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                        <span className="font-medium">{brand.averageRating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Categories:</span>
                      <span className="font-medium">{brand.categories.join(', ')}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-medium text-foreground">Key Features:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {brand.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/brands/${brand.slug}`} className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Vehicles
                      </Button>
                    </Link>
                    <Button variant="outline" className="bg-transparent">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
