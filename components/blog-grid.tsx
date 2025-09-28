import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

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
    featured: true,
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
    title: "The Ultimate Bicol Express Food Trail: Where to Find the Best",
    excerpt:
      "Taste authentic Bicol Express across the region. Our foodie guide to the best restaurants and local eateries.",
    category: "Food & Culture",
    author: "Chef Roberto",
    date: "2024-01-08",
    readTime: "5 min read",
    image: "/bicol-express-food-trail.jpg",
  },
  {
    id: 5,
    slug: "budget-travel-guide-albay",
    title: "Budget Travel Guide to Albay: Maximum Fun, Minimum Cost",
    excerpt:
      "Experience Albay without breaking the bank. Our complete budget travel guide with money-saving tips and free attractions.",
    category: "Travel Guides",
    author: "Lisa Garcia",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/budget-travel-albay.jpg",
  },
  {
    id: 6,
    slug: "choosing-right-rental-car-bicol",
    title: "Choosing the Right Rental Car for Your Bicol Adventure",
    excerpt: "SUV, sedan, or van? Learn which rental car type is perfect for your Bicol itinerary and group size.",
    category: "Car Rental Tips",
    author: "Mike Torres",
    date: "2024-01-03",
    readTime: "4 min read",
    image: "/choosing-rental-car-bicol.jpg",
  },
]

export function BlogGrid() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <h3 className="text-lg font-semibold text-foreground text-balance leading-tight">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
