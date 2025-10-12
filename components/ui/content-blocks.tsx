import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote, Check, X, LucideIcon } from 'lucide-react'

// Base props for all content blocks
interface BaseContentBlockProps {
  className?: string
}

// Inclusion/Exclusion List Props
interface InclusionExclusionProps extends BaseContentBlockProps {
  inclusions: string[]
  exclusions: string[]
  variant?: 'default' | 'compact'
  showIcons?: boolean
}

// Stats Grid Props
interface StatsGridProps extends BaseContentBlockProps {
  stats: Array<{
    icon: LucideIcon
    number: string
    label: string
    description: string
  }>
  variant?: 'default' | 'compact' | 'hero'
  columns?: 2 | 3 | 4
}

// Feature List Props
interface FeatureListProps extends BaseContentBlockProps {
  features: Array<{
    title: string
    description: string
  }>
  variant?: 'default' | 'compact'
  columns?: 1 | 2 | 3
}

// Testimonial Carousel Props
interface TestimonialCarouselProps extends BaseContentBlockProps {
  testimonials: Array<{
    id: number
    name: string
    location: string
    rating: number
    text: string
    service: string
    image?: string
  }>
  variant?: 'default' | 'compact'
  showNavigation?: boolean
  showDots?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

// Testimonial Grid Props
interface TestimonialGridProps extends BaseContentBlockProps {
  testimonials: Array<{
    text: string
    author: string
    location: string
    rating?: number
  }>
  variant?: 'default' | 'compact'
  columns?: 1 | 2 | 3
}

// Union type for all content blocks
type ContentBlockProps = 
  | ({ type: 'inclusion-exclusion' } & InclusionExclusionProps)
  | ({ type: 'stats-grid' } & StatsGridProps)
  | ({ type: 'feature-list' } & FeatureListProps)
  | ({ type: 'testimonial-carousel' } & TestimonialCarouselProps)
  | ({ type: 'testimonial-grid' } & TestimonialGridProps)

export function ContentBlock(props: ContentBlockProps) {
  const { type, ...rest } = props

  switch (type) {
    case 'inclusion-exclusion':
      return <InclusionExclusionBlock {...(rest as InclusionExclusionProps)} />
    case 'stats-grid':
      return <StatsGridBlock {...(rest as StatsGridProps)} />
    case 'feature-list':
      return <FeatureListBlock {...(rest as FeatureListProps)} />
    case 'testimonial-carousel':
      return <TestimonialCarouselBlock {...(rest as TestimonialCarouselProps)} />
    case 'testimonial-grid':
      return <TestimonialGridBlock {...(rest as TestimonialGridProps)} />
    default:
      return null
  }
}

// Inclusion/Exclusion Block Component
function InclusionExclusionBlock({ 
  inclusions, 
  exclusions, 
  variant = 'default',
  showIcons = true,
  className 
}: InclusionExclusionProps) {
  const gridCols = variant === 'compact' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'
  const cardPadding = variant === 'compact' ? 'p-4' : 'p-6'
  const titleSize = variant === 'compact' ? 'text-xl' : 'text-2xl'
  const iconSize = variant === 'compact' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <div className={cn('grid', gridCols, 'gap-8', className)}>
      <Card>
        <CardContent className={cardPadding}>
          <h3 className={cn(titleSize, 'font-semibold mb-6 text-green-600')}>What's Included</h3>
          <div className="space-y-3">
            {inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-center space-x-3">
                {showIcons && <Check className={cn(iconSize, 'text-green-600 flex-shrink-0')} />}
                <span className="text-foreground">{inclusion}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className={cardPadding}>
          <h3 className={cn(titleSize, 'font-semibold mb-6 text-red-600')}>Not Included</h3>
          <div className="space-y-3">
            {exclusions.map((exclusion, index) => (
              <div key={index} className="flex items-center space-x-3">
                {showIcons && <X className={cn(iconSize, 'text-red-600 flex-shrink-0')} />}
                <span className="text-foreground">{exclusion}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Stats Grid Block Component
function StatsGridBlock({ 
  stats, 
  variant = 'default',
  columns = 4,
  className 
}: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns]

  const iconSize = variant === 'hero' ? 'h-12 w-12' : variant === 'compact' ? 'h-8 w-8' : 'h-10 w-10'
  const iconContainerSize = variant === 'hero' ? 'w-24 h-24' : variant === 'compact' ? 'w-16 h-16' : 'w-20 h-20'
  const numberSize = variant === 'hero' ? 'text-5xl' : variant === 'compact' ? 'text-3xl' : 'text-4xl'
  const labelSize = variant === 'hero' ? 'text-xl' : variant === 'compact' ? 'text-base' : 'text-lg'
  const descriptionSize = variant === 'hero' ? 'text-lg' : variant === 'compact' ? 'text-sm' : 'text-base'

  return (
    <div className={cn('grid', gridCols, 'gap-8', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={cn(
            'bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6',
            iconContainerSize
          )}>
            <stat.icon className={cn(iconSize, 'text-primary')} />
          </div>
          <div className={cn(numberSize, 'font-bold text-foreground mb-2')}>{stat.number}</div>
          <div className={cn(labelSize, 'font-semibold text-foreground mb-2')}>{stat.label}</div>
          <div className={cn(descriptionSize, 'text-muted-foreground')}>{stat.description}</div>
        </div>
      ))}
    </div>
  )
}

// Feature List Block Component
function FeatureListBlock({ 
  features, 
  variant = 'default',
  columns = 3,
  className 
}: FeatureListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[columns]

  const cardPadding = variant === 'compact' ? 'p-4' : 'p-6'
  const titleSize = variant === 'compact' ? 'text-lg' : 'text-xl'

  return (
    <div className={cn('grid', gridCols, 'gap-6', className)}>
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className={cardPadding}>
            <h3 className={cn(titleSize, 'font-semibold text-foreground mb-3')}>
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Testimonial Carousel Block Component
function TestimonialCarouselBlock({ 
  testimonials, 
  variant = 'default',
  showNavigation = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(nextTestimonial, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval])

  const cardPadding = variant === 'compact' ? 'p-6 lg:p-8' : 'p-8 lg:p-12'
  const textSize = variant === 'compact' ? 'text-base' : 'text-lg'

  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      <div className="relative">
        <Card className="overflow-hidden">
          <CardContent className={cardPadding}>
            <div className="flex items-start space-x-4">
              <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <p className={cn(textSize, 'text-foreground mb-6 leading-relaxed text-pretty')}>
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    <div className="text-sm text-primary font-medium mt-1">
                      {testimonials[currentIndex].service}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        {showNavigation && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {showDots && (
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-colors',
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    )}
                  />
                ))}
              </div>
            )}

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

// Testimonial Grid Block Component
function TestimonialGridBlock({ 
  testimonials, 
  variant = 'default',
  columns = 2,
  className 
}: TestimonialGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[columns]

  const cardPadding = variant === 'compact' ? 'p-6' : 'p-8'
  const textSize = variant === 'compact' ? 'text-base' : 'text-lg'

  return (
    <div className={cn('grid', gridCols, 'gap-8', className)}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-background p-8 rounded-2xl shadow-lg">
          <Quote className="h-8 w-8 text-primary mb-4" />
          <p className={cn(textSize, 'text-muted-foreground mb-6 leading-relaxed')}>
            "{testimonial.text}"
          </p>
          <div className="flex items-center gap-2">
            {testimonial.rating && (
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            )}
            <div>
              <div className="font-semibold text-foreground">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.location}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Export individual block components
export { InclusionExclusionBlock, StatsGridBlock, FeatureListBlock, TestimonialCarouselBlock, TestimonialGridBlock }
