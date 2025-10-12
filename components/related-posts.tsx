import { RelatedPosts as RelatedPostsComponent } from "@/components/ui/blog-components"

const relatedPosts = [
  {
    id: 1,
    slug: "car-rental-safety-tips-bicol",
    title: "10 Essential Car Rental Safety Tips for Bicol Roads",
    excerpt: "Stay safe on Bicol roads with these essential car rental tips. From weather considerations to local driving customs.",
    category: "Car Rental Tips",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/bicol-road-safety-tips.jpg",
  },
  {
    id: 2,
    slug: "hidden-beaches-camarines-sur",
    title: "Hidden Beaches in Camarines Sur You Must Visit",
    excerpt: "Explore pristine beaches away from the crowds. Our local guide to the most beautiful hidden beaches in Camarines Sur.",
    category: "Local Attractions",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/camarines-sur-hidden-beaches.jpg",
  },
  {
    id: 3,
    slug: "budget-travel-guide-albay",
    title: "Budget Travel Guide to Albay: Maximum Fun, Minimum Cost",
    excerpt: "Experience Albay without breaking the bank. Our complete budget travel guide with money-saving tips and free attractions.",
    category: "Travel Guides",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/budget-travel-albay.jpg",
  },
]

type Props = {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: Props) {
  const filteredPosts = relatedPosts.filter((post) => post.slug !== currentSlug)

  return (
    <RelatedPostsComponent
      posts={filteredPosts}
      title="Related Articles"
      maxPosts={3}
      variant="default"
      background="muted"
    />
  )
}
