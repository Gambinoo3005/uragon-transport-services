import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { BlogPageContent } from "@/components/blog-page-content"

export const metadata: Metadata = {
  title: "Travel Blog | Car Rental Tips & Bicol Travel Guides | Uragon Transport Services",
  description:
    "Discover the best of Bicol with our travel guides, car rental tips, and local insights. Plan your perfect trip with expert advice from Uragon Transport Services.",
  keywords: "Bicol travel guide, car rental tips, Philippines travel, Mayon Volcano, Legazpi travel, Albay tourism, self drive rental",
}

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "travel-guides", name: "Travel Guides", count: 8 },
  { id: "car-rental-tips", name: "Car Rental Tips", count: 6 },
  { id: "local-attractions", name: "Local Attractions", count: 5 },
  { id: "food-culture", name: "Food & Culture", count: 5 },
]

const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-mayon-volcano-tour",
    title: "Ultimate Guide to Mayon Volcano Tours: Best Routes and Tips",
    excerpt:
      "Discover the perfect cone-shaped volcano with our comprehensive guide to Mayon Volcano tours, including the best viewing spots and travel tips.",
    category: "Travel Guides",
    author: "Maria Santos",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/mayon-volcano-tour-guide.jpg",
  },
  {
    id: 2,
    slug: "car-rental-safety-tips-bicol",
    title: "10 Essential Car Rental Safety Tips for Bicol Roads",
    excerpt:
      "Stay safe on Bicol roads with these essential car rental tips. From weather considerations to local driving customs.",
    category: "Car Rental Tips",
    author: "Juan Dela Cruz",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/bicol-road-safety-tips.jpg",
  },
  {
    id: 3,
    slug: "hidden-beaches-camarines-sur",
    title: "Hidden Beaches in Camarines Sur You Must Visit",
    excerpt:
      "Explore pristine beaches away from the crowds. Our local guide to the most beautiful hidden beaches in Camarines Sur.",
    category: "Local Attractions",
    author: "Ana Reyes",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/camarines-sur-hidden-beaches.jpg",
  },
  {
    id: 4,
    slug: "bicol-express-food-trail",
    title: "Bicol Express Food Trail: Best Local Eateries",
    excerpt:
      "Embark on a culinary journey through Bicol's best local eateries. From authentic Bicol Express to hidden gems.",
    category: "Food & Culture",
    author: "Carlos Mendoza",
    date: "2024-01-08",
    readTime: "5 min read",
    image: "/bicol-express-food-trail.jpg",
  },
  {
    id: 5,
    slug: "budget-travel-albay",
    title: "Budget Travel Guide to Albay Province",
    excerpt:
      "Explore Albay on a budget with our comprehensive guide. Discover affordable accommodations, food, and activities.",
    category: "Travel Guides",
    author: "Lisa Garcia",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/budget-travel-albay.jpg",
  },
  {
    id: 6,
    slug: "choosing-rental-car-bicol",
    title: "How to Choose the Right Rental Car for Bicol Travel",
    excerpt:
      "Make the right choice for your Bicol adventure. Our guide helps you select the perfect vehicle for your needs.",
    category: "Car Rental Tips",
    author: "Miguel Torres",
    date: "2024-01-03",
    readTime: "6 min read",
    image: "/choosing-rental-car-bicol.jpg",
  },
]
export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Travel Blog"
          highlight="Blog"
          description="Discover the best of Bicol with our travel guides, car rental tips, and local insights. Plan your perfect trip with expert advice from locals who know the region best."
        />

        <BlogPageContent categories={categories} posts={blogPosts} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
