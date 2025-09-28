import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const relatedPosts = [
  {
    slug: "car-rental-safety-tips-bicol",
    title: "10 Essential Car Rental Safety Tips for Bicol Roads",
    category: "Car Rental Tips",
    image: "/bicol-road-safety-tips.jpg",
  },
  {
    slug: "hidden-beaches-camarines-sur",
    title: "Hidden Beaches in Camarines Sur You Must Visit",
    category: "Local Attractions",
    image: "/camarines-sur-hidden-beaches.jpg",
  },
  {
    slug: "budget-travel-guide-albay",
    title: "Budget Travel Guide to Albay: Maximum Fun, Minimum Cost",
    category: "Travel Guides",
    image: "/budget-travel-albay.jpg",
  },
]

type Props = {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: Props) {
  const filteredPosts = relatedPosts.filter((post) => post.slug !== currentSlug)

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
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
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
