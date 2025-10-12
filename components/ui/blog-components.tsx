"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContentCard } from "@/components/ui/content-card"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import Link from "next/link"

// ============================================================================
// BLOG CATEGORIES COMPONENT
// ============================================================================

interface BlogCategory {
  id: string
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: BlogCategory[]
  activeCategory?: string
  onCategoryChange?: (categoryId: string) => void
  variant?: 'default' | 'compact'
  background?: 'default' | 'muted' | 'muted/30'
  className?: string
}

export function BlogCategories({
  categories,
  activeCategory = "all",
  onCategoryChange,
  variant = 'default',
  background = 'default',
  className
}: BlogCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory)

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className={cn(
      'py-12 border-b',
      backgroundClasses[background],
      className
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          'flex flex-wrap gap-3',
          variant === 'compact' ? 'justify-start' : 'justify-center'
        )}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="rounded-full"
              size={variant === 'compact' ? 'sm' : 'default'}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// BLOG CONTENT COMPONENT
// ============================================================================

interface BlogContentProps {
  content: string
  className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
  return (
    <article className={cn("prose prose-lg max-w-none", className)}>
      <div 
        dangerouslySetInnerHTML={{ __html: content }} 
        className="text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
      />
    </article>
  )
}

// ============================================================================
// RELATED POSTS COMPONENT
// ============================================================================

interface RelatedPost {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  title?: string
  maxPosts?: number
  variant?: 'default' | 'compact'
  background?: 'default' | 'muted' | 'muted/30'
  className?: string
}

export function RelatedPosts({
  posts,
  title = "Related Articles",
  maxPosts = 3,
  variant = 'default',
  background = 'default',
  className
}: RelatedPostsProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const displayPosts = posts.slice(0, maxPosts)

  return (
    <div className={cn(
      'py-16',
      backgroundClasses[background],
      className
    )}>
      <SectionContainer>
        <SectionHeader
          title={title}
          maxWidth="2xl"
        />

        <div className={cn(
          'grid gap-6',
          variant === 'compact' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        )}>
          {displayPosts.map((post) => (
            <ContentCard
              key={post.id}
              type="image"
              image={post.image || "/placeholder.svg"}
              imageAlt={post.title}
              title={post.title}
              description={post.excerpt}
              href={`/blog/${post.slug}`}
              badges={[post.category]}
              author="Uragon Team"
              date={post.date}
              readTime={post.readTime}
              variant={variant === 'compact' ? 'compact' : 'default'}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}

// ============================================================================
// BLOG SECTION COMPONENT (Combines Grid + Categories + Related)
// ============================================================================

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
  featured?: boolean
}

interface BlogSectionProps {
  title?: string
  description?: string
  posts: BlogPost[]
  categories: BlogCategory[]
  relatedPosts?: RelatedPost[]
  showCategories?: boolean
  showRelated?: boolean
  maxPosts?: number
  background?: 'default' | 'muted' | 'muted/30'
  className?: string
}

export function BlogSection({
  title = "Latest Articles",
  description,
  posts,
  categories,
  relatedPosts = [],
  showCategories = true,
  showRelated = true,
  maxPosts = 6,
  background = 'default',
  className
}: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())

  const displayPosts = filteredPosts.slice(0, maxPosts)
  const featuredPost = displayPosts.find(post => post.featured)
  const regularPosts = displayPosts.filter(post => !post.featured)

  const featuredPostComponent = featuredPost ? (
    <ContentCard
      type="image"
      image={featuredPost.image || "/placeholder.svg"}
      imageAlt={featuredPost.title}
      title={featuredPost.title}
      description={featuredPost.excerpt}
      href={`/blog/${featuredPost.slug}`}
      badges={[featuredPost.category]}
      author={featuredPost.author}
      date={featuredPost.date}
      readTime={featuredPost.readTime}
      variant="horizontal"
      className="md:col-span-2"
    />
  ) : null

  const regularPostComponents = regularPosts.map((post) => (
    <ContentCard
      key={post.id}
      type="image"
      image={post.image || "/placeholder.svg"}
      imageAlt={post.title}
      title={post.title}
      description={post.excerpt}
      href={`/blog/${post.slug}`}
      badges={[post.category]}
      author={post.author}
      date={post.date}
      readTime={post.readTime}
    />
  ))

  return (
    <div className={cn('py-16', className)}>
      <SectionContainer background={background}>
        <SectionHeader
          title={title}
          description={description}
          maxWidth="2xl"
        />

        {showCategories && (
          <BlogCategories
            categories={categories}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            variant="default"
            background="default"
            className="mb-12"
          />
        )}

        {featuredPostComponent && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Featured Article</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPostComponent}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPostComponents}
          </div>
        </div>

        {showRelated && relatedPosts.length > 0 && (
          <RelatedPosts
            posts={relatedPosts}
            title="Related Articles"
            maxPosts={3}
            variant="default"
            background="default"
            className="mt-16"
          />
        )}
      </SectionContainer>
    </div>
  )
}
