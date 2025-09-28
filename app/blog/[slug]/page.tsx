import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { BlogPostHeader } from "@/components/blog-post-header"
import { BlogPostContent } from "@/components/blog-post-content"
import { BlogPostSidebar } from "@/components/blog-post-sidebar"
import { RelatedPosts } from "@/components/related-posts"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// This would typically come from a CMS or database
const blogPosts = {
  "ultimate-guide-mayon-volcano-tour": {
    title: "Ultimate Guide to Mayon Volcano Tours: Best Routes and Tips",
    excerpt:
      "Discover the perfect cone-shaped volcano with our comprehensive guide to Mayon Volcano tours, including the best viewing spots and travel tips.",
    content: `
      <p>Mayon Volcano, with its perfect cone shape, is one of the Philippines' most iconic landmarks and a must-visit destination in Bicol. Standing at 2,463 meters tall, this active stratovolcano offers breathtaking views and unforgettable experiences for travelers.</p>
      
      <h2>Best Viewing Spots</h2>
      <p>The most popular viewing spots include Cagsawa Ruins, Lignon Hill, and Daraga Church. Each offers unique perspectives of the volcano and surrounding landscape.</p>
      
      <h2>Tour Options</h2>
      <p>Choose from ATV tours, hiking expeditions, or scenic drives. Our car rental service makes it easy to explore multiple viewpoints at your own pace.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The dry season from December to May offers the clearest views. Early morning and late afternoon provide the best lighting for photography.</p>
      
      <h2>Safety Considerations</h2>
      <p>Always check the volcano's alert level before visiting. Our local guides stay updated on current conditions and can recommend the safest routes.</p>
    `,
    category: "Travel Guides",
    author: "Maria Santos",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/mayon-volcano-tour-guide.jpg",
    tags: ["Mayon Volcano", "Bicol Tourism", "Travel Guide", "Philippines"],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found | Uragon Tours Blog",
    }
  }

  return {
    title: `${post.title} | Uragon Tours Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <BlogPostHeader post={post} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <BlogPostContent content={post.content} />
              </div>
              <div className="lg:col-span-1">
                <BlogPostSidebar />
              </div>
            </div>
          </div>
        </div>
        <RelatedPosts currentSlug={params.slug} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
