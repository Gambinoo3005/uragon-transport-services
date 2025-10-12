import { BlogCategories as BlogCategoriesComponent } from "@/components/ui/blog-components"

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "travel-guides", name: "Travel Guides", count: 8 },
  { id: "car-rental-tips", name: "Car Rental Tips", count: 6 },
  { id: "local-attractions", name: "Local Attractions", count: 5 },
  { id: "food-culture", name: "Food & Culture", count: 5 },
]

export function BlogCategories() {
  return (
    <BlogCategoriesComponent
      categories={categories}
      activeCategory="all"
      variant="default"
      background="default"
    />
  )
}
