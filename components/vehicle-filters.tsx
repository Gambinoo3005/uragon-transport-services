"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, X } from "lucide-react"

export function VehicleFilters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: "",
    transmission: "",
    seats: "",
    priceRange: "",
  })

  const categories = ["All Categories", "Sedan", "SUV", "MPV", "Van"]
  const transmissions = ["All Transmissions", "Automatic", "Manual"]
  const seatOptions = ["All Seats", "2-5 Seats", "6-8 Seats", "9+ Seats"]
  const priceRanges = ["All Prices", "₱2,000-₱3,000", "₱3,000-₱4,000", "₱4,000-₱5,000", "₱5,000+"]

  const clearFilters = () => {
    setFilters({
      category: "",
      transmission: "",
      seats: "",
      priceRange: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some((filter) => filter !== "")

  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full justify-between bg-transparent"
          >
            <span className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </span>
            {hasActiveFilters && (
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Active</span>
            )}
          </Button>
        </div>

        {/* Filter Panel */}
        <Card className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
                <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={filters.transmission}
                  onValueChange={(value) => setFilters({ ...filters, transmission: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map((transmission) => (
                      <SelectItem key={transmission} value={transmission}>
                        {transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filters.seats} onValueChange={(value) => setFilters({ ...filters, seats: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seats" />
                  </SelectTrigger>
                  <SelectContent>
                    {seatOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
