import * as React from 'react'
import { cn } from '@/lib/utils'

// Base grid props
interface BaseGridProps {
  children: React.ReactNode
  className?: string
}

// Standard grid variants
interface StandardGridProps extends BaseGridProps {
  variant: '2col' | '3col' | '4col'
  gap?: 'sm' | 'md' | 'lg'
}

// Featured grid props (for mixed layouts)
interface FeaturedGridProps extends BaseGridProps {
  variant: 'featured'
  featuredItem?: React.ReactNode
  regularItems: React.ReactNode[]
  gap?: 'sm' | 'md' | 'lg'
}

// Blog grid props (for blog-specific layouts)
interface BlogGridProps extends BaseGridProps {
  variant: 'blog'
  featuredPost?: React.ReactNode
  regularPosts: React.ReactNode[]
  gap?: 'sm' | 'md' | 'lg'
}

// Vehicle grid props (for vehicle-specific layouts)
interface VehicleGridProps extends BaseGridProps {
  variant: 'vehicle'
  children: React.ReactNode
  gap?: 'sm' | 'md' | 'lg'
  showFilters?: boolean
  filterControls?: React.ReactNode
}

// Location grid props (for location-specific layouts)
interface LocationGridProps extends BaseGridProps {
  variant: 'location'
  children: React.ReactNode
  gap?: 'sm' | 'md' | 'lg'
  showFilters?: boolean
  filterControls?: React.ReactNode
}

// Union type for all grid variants
type ContentGridProps = 
  | StandardGridProps
  | FeaturedGridProps
  | BlogGridProps
  | VehicleGridProps
  | LocationGridProps

// Gap size mappings
const gapSizes = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
} as const

// Grid class mappings
const gridClasses = {
  '2col': 'grid grid-cols-1 md:grid-cols-2',
  '3col': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  '4col': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  'featured': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  'blog': 'grid md:grid-cols-2 lg:grid-cols-3',
  'vehicle': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  'location': 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
} as const

export function ContentGrid(props: ContentGridProps) {
  const { variant, gap = 'md', className, ...rest } = props

  const gapClass = gapSizes[gap]
  const baseGridClass = gridClasses[variant]

  switch (variant) {
    case '2col':
    case '3col':
    case '4col':
      return (
        <div className={cn(baseGridClass, gapClass, className)}>
          {props.children}
        </div>
      )

    case 'featured':
      const { featuredItem, regularItems } = props as FeaturedGridProps
      return (
        <div className={cn(baseGridClass, gapClass, className)}>
          {featuredItem && (
            <div className="md:col-span-2 lg:col-span-1">
              {featuredItem}
            </div>
          )}
          {regularItems.map((item, index) => (
            <div key={index}>
              {item}
            </div>
          ))}
        </div>
      )

    case 'blog':
      const { featuredPost, regularPosts } = props as BlogGridProps
      return (
        <div className={className}>
          {featuredPost && (
            <div className="mb-12">
              {featuredPost}
            </div>
          )}
          <div className={cn(baseGridClass, gapClass)}>
            {regularPosts.map((post, index) => (
              <div key={index}>
                {post}
              </div>
            ))}
          </div>
        </div>
      )

    case 'vehicle':
      const { showFilters, filterControls } = props as VehicleGridProps
      return (
        <div className={className}>
          {showFilters && filterControls && (
            <div className="flex justify-center items-center mb-6 md:mb-8 px-4">
              {filterControls}
            </div>
          )}
          <div className={cn(baseGridClass, gapClass)}>
            {props.children}
          </div>
        </div>
      )

    case 'location':
      const { showFilters: showLocationFilters, filterControls: locationFilterControls } = props as LocationGridProps
      return (
        <div className={className}>
          {showLocationFilters && locationFilterControls && (
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              {locationFilterControls}
            </div>
          )}
          <div className={cn(baseGridClass, gapClass)}>
            {props.children}
          </div>
        </div>
      )

    default:
      return null
  }
}

// Specialized grid components for common use cases
export function StandardGrid({ 
  variant, 
  children, 
  gap = 'md', 
  className 
}: StandardGridProps) {
  return (
    <ContentGrid variant={variant} gap={gap} className={className}>
      {children}
    </ContentGrid>
  )
}

export function FeaturedGrid({ 
  featuredItem, 
  regularItems, 
  gap = 'md', 
  className 
}: FeaturedGridProps) {
  return (
    <ContentGrid 
      variant="featured" 
      featuredItem={featuredItem} 
      regularItems={regularItems} 
      gap={gap} 
      className={className}
    />
  )
}

export function BlogGrid({ 
  featuredPost, 
  regularPosts, 
  gap = 'lg', 
  className 
}: BlogGridProps) {
  return (
    <ContentGrid 
      variant="blog" 
      featuredPost={featuredPost} 
      regularPosts={regularPosts} 
      gap={gap} 
      className={className}
    />
  )
}

export function VehicleGrid({ 
  children, 
  gap = 'md', 
  showFilters = false, 
  filterControls, 
  className 
}: VehicleGridProps) {
  return (
    <ContentGrid 
      variant="vehicle" 
      gap={gap} 
      showFilters={showFilters} 
      filterControls={filterControls} 
      className={className}
    >
      {children}
    </ContentGrid>
  )
}

export function LocationGrid({ 
  children, 
  gap = 'lg', 
  showFilters = false, 
  filterControls, 
  className 
}: LocationGridProps) {
  return (
    <ContentGrid 
      variant="location" 
      gap={gap} 
      showFilters={showFilters} 
      filterControls={filterControls} 
      className={className}
    >
      {children}
    </ContentGrid>
  )
}

// Container component for consistent section layouts
interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'muted/30' | 'gradient'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
} as const

const paddingClasses = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20'
} as const

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  'muted/30': 'bg-muted/30',
  gradient: 'bg-gradient-to-br from-background to-muted'
} as const

export function SectionContainer({ 
  children, 
  className, 
  maxWidth = '6xl', 
  padding = 'lg',
  background = 'default'
}: SectionContainerProps) {
  return (
    <section className={cn(paddingClasses[padding], backgroundClasses[background])}>
      <div className="container mx-auto px-4">
        <div className={cn(maxWidthClasses[maxWidth], 'mx-auto', className)}>
          {children}
        </div>
      </div>
    </section>
  )
}

// Section header component for consistent headers
interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
  highlight?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className, 
  centered = true,
  highlight,
  maxWidth = '3xl'
}: SectionHeaderProps) {
  const headerContent = (
    <>
      {subtitle && (
        <p className="text-xl text-primary mb-6 font-medium">{subtitle}</p>
      )}
      <h2 className={cn(
        "text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance",
        centered && "text-center"
      )}>
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-primary">{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={cn(
          "text-xl text-muted-foreground text-pretty",
          centered && "text-center",
          maxWidthClasses[maxWidth] && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </>
  )

  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      {headerContent}
    </div>
  )
}
