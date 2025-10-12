"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid, VehicleGrid as VehicleGridComponent } from "@/components/ui/content-grid"
import { Users, Settings, Fuel, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { getAllVehicles } from "@/lib/vehicles"

const vehicles = getAllVehicles()

// Function to get hex color values for vehicle colors
const getColorValue = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    'Silver': '#C0C0C0',
    'Orange': '#FF8C00',
    'Blackish Red': '#8B0000',
    'Super Red': '#DC143C',
    'Blue': '#0066CC',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Gray': '#808080',
    'Red': '#FF0000'
  }
  return colorMap[colorName] || '#CCCCCC' // Default gray if color not found
}

// Function to group vehicles by model and year
const groupVehiclesByModel = () => {
  const grouped: { [key: string]: any[] } = {}
  
  vehicles.forEach(vehicle => {
    const key = `${vehicle.brand}-${vehicle.model}-${vehicle.year}-${vehicle.transmission}`
    if (!grouped[key]) {
      grouped[key] = []
    }
    grouped[key].push(vehicle)
  })
  
  return Object.values(grouped).map(group => ({
    ...group[0], // Use first vehicle as base
    colorVariants: group.map(v => ({
      id: v.id,
      color: v.color,
      image: v.images[0]
    }))
  }))
}

export function VehicleGrid() {
  const [pricingMode, setPricingMode] = useState<'24hr' | '12hr'>('24hr')
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: number }>({})
  
  const groupedVehicles = groupVehiclesByModel()

  const filterControls = (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">Pricing:</span>
      <div className="flex bg-muted rounded-lg p-1">
        <Button
          variant={pricingMode === '24hr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setPricingMode('24hr')}
          className="h-8 px-2 sm:px-3 text-xs sm:text-sm"
        >
          24hrs
        </Button>
        <Button
          variant={pricingMode === '12hr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setPricingMode('12hr')}
          className="h-8 px-2 sm:px-3 text-xs sm:text-sm"
        >
          12hrs
        </Button>
      </div>
    </div>
  )

  const vehicleComponents = groupedVehicles.map((vehicle) => {
    const currentColorIndex = selectedColors[vehicle.id] || 0
    const currentVariant = vehicle.colorVariants[currentColorIndex]
    
    return (
      <div key={vehicle.id} className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
        {/* Image Carousel */}
        <div className="relative aspect-video bg-muted/50 overflow-hidden">
          <img
            src={currentVariant.image || "/placeholder.svg"}
            alt={`${vehicle.name} - ${vehicle.category} for rent in Bicol`}
            className="w-full h-full object-cover"
          />
          
          {/* Carousel Navigation - Only show on hover */}
          {vehicle.colorVariants.length > 1 && (
            <>
              <button
                onClick={() => setSelectedColors(prev => ({
                  ...prev,
                  [vehicle.id]: currentColorIndex > 0 ? currentColorIndex - 1 : vehicle.colorVariants.length - 1
                }))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setSelectedColors(prev => ({
                  ...prev,
                  [vehicle.id]: currentColorIndex < vehicle.colorVariants.length - 1 ? currentColorIndex + 1 : 0
                }))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
        
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground">{vehicle.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs md:text-sm text-muted-foreground">Available Colors:</span>
                <div className="flex gap-1">
                  {vehicle.colorVariants.map((variant, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 md:w-5 md:h-5 rounded transition-all cursor-pointer ${
                        index === currentColorIndex 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      style={{ 
                        backgroundColor: getColorValue(variant.color),
                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                      onClick={() => setSelectedColors(prev => ({
                        ...prev,
                        [vehicle.id]: index
                      }))}
                      title={variant.color}
                    />
                  ))}
                </div>
              </div>
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
              {vehicle.features.slice(0, 4).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
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
              <div className="text-2xl font-bold text-primary">
                {pricingMode === '24hr' ? vehicle.pricePerDay : vehicle.pricePer12hr}
              </div>
              <div className="text-sm text-muted-foreground">
                {pricingMode === '24hr' ? 'per 24 hours' : 'per 12 hours'}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{vehicle.type}</div>
            </div>
            <Link href={`/fleet/${currentVariant.id}`}>
              <Button variant="outline" size="sm" className="bg-transparent">
                View Details
              </Button>
            </Link>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Request to Book
          </Button>
        </div>
      </div>
    )
  })

  return (
    <SectionContainer background="default">
      <VehicleGridComponent 
        variant="vehicle"
        showFilters={true}
        filterControls={filterControls}
        gap="md"
      >
        {vehicleComponents}
      </VehicleGridComponent>
    </SectionContainer>
  )
}
