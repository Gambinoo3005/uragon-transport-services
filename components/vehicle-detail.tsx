"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Users, Settings, Fuel, Star, Check, X, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react"
import { FeatureListBlock, InclusionExclusionBlock, StatsGridBlock } from "@/components/ui/content-blocks"

interface Vehicle {
  id: string
  name: string
  category: string
  images: string[]
  seats: number
  transmission: string
  fuel: string
  pricePerDay: string
  pricePer12hr?: string
  rating: number
  reviews: number
  description: string
  features: string[]
  inclusions: string[]
  exclusions: string[]
  specifications: {
    engine: string
    fuelCapacity: string
    luggage: string
    doors: number
    aircon: string
  }
  type?: string
  brand?: string
  model?: string
  year?: string
  colors?: string[]
  popular?: boolean
}

interface VehicleDetailProps {
  vehicle: Vehicle
}

export function VehicleDetail({ vehicle }: VehicleDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [pricingMode, setPricingMode] = useState<'24hr' | '12hr'>('24hr')

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              />
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {vehicle.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${vehicle.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{vehicle.name}</h1>
                  {vehicle.brand && vehicle.model && vehicle.year && (
                    <div className="text-sm text-muted-foreground mt-1">
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
              <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Quick Specs */}
            <StatsGridBlock
              stats={[
                {
                  icon: Users,
                  number: vehicle.seats.toString(),
                  label: "Seats",
                  description: "Passenger capacity"
                },
                {
                  icon: Settings,
                  number: vehicle.transmission,
                  label: "Transmission",
                  description: "Drive type"
                },
                {
                  icon: Fuel,
                  number: vehicle.fuel,
                  label: "Fuel Type",
                  description: "Engine fuel"
                }
              ]}
              variant="compact"
              columns={3}
            />

            {/* Pricing */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {pricingMode === '24hr' ? vehicle.pricePerDay : (vehicle.pricePer12hr || 'Contact us')}
                    </div>
                    <div className="text-muted-foreground">
                      {pricingMode === '24hr' ? 'per 24 hours' : 'per 12 hours'}
                    </div>
                    {vehicle.type && <div className="text-sm text-muted-foreground mt-1">{vehicle.type}</div>}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Weekly Rate</div>
                    <div className="font-semibold">Contact for pricing</div>
                  </div>
                </div>
                
                {/* Pricing Toggle */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex bg-muted rounded-lg p-1">
                    <Button
                      variant={pricingMode === '24hr' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setPricingMode('24hr')}
                      className="h-8 px-4"
                    >
                      24hrs
                    </Button>
                    <Button
                      variant={pricingMode === '12hr' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setPricingMode('12hr')}
                      className="h-8 px-4"
                    >
                      12hrs
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                    Request to Book
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
            <TabsTrigger value="specifications">Specs</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <FeatureListBlock
              features={vehicle.features.map(feature => ({
                title: feature,
                description: ""
              }))}
              variant="default"
              columns={2}
              showIcons={true}
            />
          </TabsContent>

          <TabsContent value="inclusions" className="mt-6">
            <InclusionExclusionBlock
              inclusions={vehicle.inclusions}
              exclusions={vehicle.exclusions}
              variant="default"
              showIcons={true}
            />
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Engine:</span>
                      <span className="font-medium">{vehicle.specifications.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fuel Capacity:</span>
                      <span className="font-medium">{vehicle.specifications.fuelCapacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Doors:</span>
                      <span className="font-medium">{vehicle.specifications.doors}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Luggage Capacity:</span>
                      <span className="font-medium">{vehicle.specifications.luggage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Air Conditioning:</span>
                      <span className="font-medium">{vehicle.specifications.aircon}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Pricing Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Duration</th>
                        <th className="text-right py-2">Rate</th>
                        <th className="text-right py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">12 Hours</td>
                        <td className="text-right py-2">{vehicle.pricePer12hr || 'Contact us'}</td>
                        <td className="text-right py-2 font-medium">{vehicle.pricePer12hr || 'Contact us'}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">24 Hours</td>
                        <td className="text-right py-2">{vehicle.pricePerDay}</td>
                        <td className="text-right py-2 font-medium">{vehicle.pricePerDay}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">3 Days</td>
                        <td className="text-right py-2">{vehicle.pricePerDay}/day</td>
                        <td className="text-right py-2 font-medium">
                          ₱
                          {(
                            Number.parseInt(vehicle.pricePerDay.replace("₱", "").replace(",", "")) * 3
                          ).toLocaleString()}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">1 Week</td>
                        <td className="text-right py-2">Special Rate</td>
                        <td className="text-right py-2 font-medium text-primary">Contact Us</td>
                      </tr>
                      <tr>
                        <td className="py-2">1 Month</td>
                        <td className="text-right py-2">Special Rate</td>
                        <td className="text-right py-2 font-medium text-primary">Contact Us</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    * Prices may vary during peak seasons and holidays. Contact us for the most current rates and
                    special offers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Full Screen Gallery Dialog */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{vehicle.name} - Gallery</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-[4/3]">
              <img
                src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
