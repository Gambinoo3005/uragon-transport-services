"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "travel-guides", name: "Travel Guides", count: 8 },
  { id: "car-rental-tips", name: "Car Rental Tips", count: 6 },
  { id: "local-attractions", name: "Local Attractions", count: 5 },
  { id: "food-culture", name: "Food & Culture", count: 5 },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
