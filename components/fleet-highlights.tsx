"use client"

import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Button } from "@/components/ui/button"
import { Car, Users, Fuel, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function FleetHighlights() {
  const vehicles = [
    {
      id: "vios",
      name: "Toyota Vios",
      type: "Reliable daily driver",
      transmission: "AT",
      capacity: "4-5 passengers",
      fuel: "Multiple colors available",
      colorVariants: [
        { color: "Blackish Red", image: "/vehicles/Toyota Vios AT 2025 Blackish Red.webp" },
        { color: "Super Red", image: "/vehicles/Toyota Vios AT 2025 Super Red.png" },
        { color: "Blue", image: "/vehicles/Toyota Vios AT 2025 Blue.png" },
        { color: "Silver", image: "/vehicles/Toyota Vios AT 2025 Silver.png" }
      ]
    },
    {
      id: "innova",
      name: "Toyota Innova",
      type: "Comfortable MPV for long drives",
      transmission: "AT",
      capacity: "7-8 passengers",
      fuel: "Premium comfort",
      colorVariants: [
        { color: "White", image: "/vehicles/Toyota Innova AT 2024 White.webp" }
      ]
    },
    {
      id: "avanza",
      name: "Toyota Avanza",
      type: "7-seater for family or barkada",
      transmission: "AT/MT",
      capacity: "7 passengers",
      fuel: "Spacious interior",
      colorVariants: [
        { color: "Silver", image: "/vehicles/Toyota Avanza AT 2023 Silver.webp" },
        { color: "Black", image: "/vehicles/Toyota Avanza MT 2024 Black.png" }
      ]
    },
    {
      id: "wigo",
      name: "Toyota Wigo",
      type: "Compact, fuel-efficient city runner",
      transmission: "AT/MT",
      capacity: "4-5 passengers",
      fuel: "Fuel-efficient",
      colorVariants: [
        { color: "Silver", image: "/vehicles/Toyota Wigo AT 2025.png" },
        { color: "Orange", image: "/vehicles/Toyota Wigo MT 2019 Orange.png" }
      ]
    }
  ]

  const [selectedColors, setSelectedColors] = useState<{ [key: string]: number }>({})

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

  return (
    <SectionContainer background="default">
      <SectionHeader
        title="Our Most Popular Cars for Every Journey"
        description="From city errands to out-of-town tours—we have the perfect vehicle for every trip"
        highlight="Cars for Every Journey"
        maxWidth="4xl"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
        {vehicles.map((vehicle, index) => {
          const currentColorIndex = selectedColors[vehicle.id] || 0
          const currentVariant = vehicle.colorVariants[currentColorIndex]
          
          return (
            <div key={index} className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-muted/50 overflow-hidden">
                <img 
                  src={currentVariant.image} 
                  alt={`${vehicle.name} - ${vehicle.type}`}
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
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {vehicle.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  {vehicle.type}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Available Colors:</span>
                    <div className="flex gap-1">
                      {vehicle.colorVariants.map((variant, colorIndex) => (
                        <div
                          key={colorIndex}
                          className={`w-5 h-5 rounded transition-all cursor-pointer ${
                            colorIndex === currentColorIndex 
                              ? 'scale-110' 
                              : 'hover:scale-105'
                          }`}
                          style={{ 
                            backgroundColor: getColorValue(variant.color),
                            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                          }}
                          onClick={() => setSelectedColors(prev => ({
                            ...prev,
                            [vehicle.id]: colorIndex
                          }))}
                          title={variant.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <Link href="/fleet">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            See Full Fleet & Specs
          </Button>
        </Link>
      </div>
    </SectionContainer>
  )
}
