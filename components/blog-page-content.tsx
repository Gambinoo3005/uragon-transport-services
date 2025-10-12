"use client"

import { useMemo, useState } from "react"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"
import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
  count: number
}

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

interface BlogPageContentProps {
  categories: Category[]
  posts: BlogPost[]
}

export function BlogPageContent({ categories, posts }: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const { featuredPost, supportingPosts, latestPosts } = useMemo(() => {
    const filtered = selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory)

    if (filtered.length === 0) {
      return {
        featuredPost: posts[0],
        supportingPosts: posts.slice(1, 3),
        latestPosts: posts.slice(3),
      }
    }

    const [first, ...rest] = filtered
    return {
      featuredPost: first,
      supportingPosts: rest.slice(0, 2),
      latestPosts: rest.slice(2),
    }
  }, [posts, selectedCategory])

  return (
    <>
      <SectionContainer background="default" padding="xl">
        <SectionHeader
          title="Browse by Category"
          description="Dive into curated guides, road-trip tips, foodie finds, and stories from the Bicol region."
          maxWidth="4xl"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full px-4"
            >
              {category.name} · {category.count}
            </Button>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="muted/30" padding="xl">
        <SectionHeader
          title="Featured & Editor Picks"
          description="Start with our latest in-depth guide, then explore quick reads picked by the team."
          maxWidth="4xl"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[featuredPost, ...supportingPosts]
            .filter((post): post is NonNullable<typeof featuredPost> => Boolean(post))
            .map((post, index) => (
              <ContentCard
                key={post.id}
                type="image"
                image={post.image}
                imageAlt={post.title}
                title={post.title}
                description={post.excerpt}
                badges={[post.category]}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                href={`/blog/${post.slug}`}
                className={index === 0 ? "shadow-md" : "shadow-sm"}
              />
            ))}
        </div>
      </SectionContainer>

      <SectionContainer background="default" padding="xl">
        <SectionHeader
          title="Latest Stories"
          description="Keep exploring with fresh takes on destinations, safety, and smart budgeting."
          maxWidth="4xl"
        />

        <StandardGrid variant="3col" gap="lg">
          {latestPosts.map((post) => (
            <ContentCard
              key={post.id}
              type="image"
              image={post.image}
              imageAlt={post.title}
              title={post.title}
              description={post.excerpt}
              badges={[post.category]}
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              href={`/blog/${post.slug}`}
            />
          ))}
        </StandardGrid>
      </SectionContainer>
    </>
  )
}
