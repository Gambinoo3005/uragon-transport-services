# 📚 Component Usage Guide

## Quick Reference

This guide provides quick reference examples for all unified design system components.

## 🧩 Core Components

### ContentCard

#### Icon Card
```typescript
import { ContentCard } from "@/components/ui/content-card"
import { Car } from "lucide-react"

<ContentCard
  type="icon"
  icon={Car}
  title="Self Drive"
  description="Rent a car and drive yourself around Bicol"
  variant="centered"
/>
```

#### Image Card
```typescript
<ContentCard
  type="image"
  image="/toyota-vios.jpg"
  title="Toyota Vios"
  description="Reliable sedan perfect for city driving"
  href="/fleet/toyota-vios"
  variant="default"
/>
```

#### Feature Card
```typescript
<ContentCard
  type="feature"
  icon={Shield}
  title="Comprehensive Insurance"
  description="Full coverage included with every rental"
  features={["Liability coverage", "Collision protection", "24/7 support"]}
  variant="horizontal"
/>
```

#### Testimonial Card
```typescript
<ContentCard
  type="testimonial"
  name="Maria Santos"
  location="Manila"
  rating={5}
  text="Excellent service from start to finish!"
  service="Tour Package"
  variant="default"
/>
```

### ContentGrid

#### Section Container
```typescript
import { SectionContainer } from "@/components/ui/content-grid"

<SectionContainer background="muted/30" className="py-16">
  {/* Section content */}
</SectionContainer>
```

#### Section Header
```typescript
import { SectionHeader } from "@/components/ui/content-grid"

<SectionHeader
  title="Our Services"
  description="Comprehensive transportation solutions for all your needs"
  highlight="Services"
  centered={true}
  maxWidth="4xl"
/>
```

#### Standard Grid
```typescript
import { StandardGrid } from "@/components/ui/content-grid"

<StandardGrid variant="3col" gap="lg">
  {services.map((service) => (
    <ContentCard key={service.id} {...service} />
  ))}
</StandardGrid>
```

#### Featured Grid
```typescript
import { FeaturedGrid } from "@/components/ui/content-grid"

<FeaturedGrid
  featuredItem={<FeaturedServiceCard />}
  items={regularServices}
  gap="md"
/>
```

## 📐 Layout Components

### Hero Components

#### Page Hero
```typescript
import { PageHero } from "@/components/ui/hero-components"

<PageHero
  title="Welcome to Uragon Transport"
  subtitle="Your Journey Starts Here"
  description="Reliable transportation services across Bicol Region"
  highlight="Uragon"
  background="gradient"
  stats={[
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Vehicles" },
    { number: "6", label: "Service Areas" },
    { number: "24/7", label: "Support" }
  ]}
>
  <Button size="lg">Get Started</Button>
</PageHero>
```

#### Full Screen Hero
```typescript
import { FullScreenHero } from "@/components/ui/hero-components"

<FullScreenHero
  title="Explore Bicol with Confidence"
  description="Premium car rental services for your next adventure"
  backgroundImage="/bicol-landscape.jpg"
  buttons={[
    { text: "Book Now", href: "/contact", variant: "default" },
    { text: "View Fleet", href: "/fleet", variant: "outline" }
  ]}
/>
```

#### Detail Hero
```typescript
import { DetailHero } from "@/components/ui/hero-components"

<DetailHero
  title="Toyota Vios 2025"
  description="Reliable sedan perfect for city driving and short trips"
  image="/toyota-vios-hero.jpg"
  features={["Automatic Transmission", "Air Conditioning", "4 Seats"]}
  buttons={[
    { text: "Book This Vehicle", href: "/contact", variant: "default" },
    { text: "View Details", href: "#details", variant: "outline" }
  ]}
/>
```

### CTA Banner
```typescript
import { CTABanner } from "@/components/ui/cta-banner"

<CTABanner
  title="Ready to Book Your Next Trip?"
  description="Get instant quotes and book your vehicle in minutes"
  buttons={[
    { text: "Book Now", href: "/contact", variant: "default" },
    { text: "Call Us", href: "tel:+639159234867", variant: "outline" }
  ]}
  background="primary"
/>
```

## 📝 Content Components

### Content Blocks

#### Inclusion/Exclusion Block
```typescript
import { InclusionExclusionBlock } from "@/components/ui/content-blocks"

<InclusionExclusionBlock
  inclusions={[
    "Unlimited mileage within declared province",
    "Comprehensive insurance coverage",
    "24/7 roadside assistance",
    "Free pickup and delivery"
  ]}
  exclusions={[
    "Fuel costs",
    "Toll fees",
    "Traffic violations",
    "Driver services (self-drive only)"
  ]}
  variant="default"
  showIcons={true}
/>
```

#### Stats Grid Block
```typescript
import { StatsGridBlock } from "@/components/ui/content-blocks"

<StatsGridBlock
  stats={[
    { number: "500+", label: "Happy Customers", description: "Satisfied clients" },
    { number: "50+", label: "Vehicles", description: "Fleet size" },
    { number: "6", label: "Service Areas", description: "Coverage areas" },
    { number: "24/7", label: "Support", description: "Always available" }
  ]}
  variant="cards"
  columns={4}
/>
```

#### Feature List Block
```typescript
import { FeatureListBlock } from "@/components/ui/content-blocks"

<FeatureListBlock
  features={[
    { icon: "Shield", title: "Comprehensive Insurance", description: "Full coverage included" },
    { icon: "Clock", title: "24/7 Support", description: "Always here to help" },
    { icon: "MapPin", title: "Wide Coverage", description: "Service across Bicol" },
    { icon: "Car", title: "Well-Maintained Fleet", description: "Regular maintenance" }
  ]}
  variant="grid"
  columns={2}
  showIcons={true}
/>
```

#### Testimonial Carousel
```typescript
import { TestimonialCarouselBlock } from "@/components/ui/content-blocks"

<TestimonialCarouselBlock
  testimonials={[
    {
      id: 1,
      name: "Maria Santos",
      location: "Manila",
      rating: 5,
      text: "Excellent service from start to finish!",
      service: "Tour Package"
    }
    // ... more testimonials
  ]}
  variant="default"
  showNavigation={true}
  showDots={true}
  autoPlay={true}
/>
```

### Section Components

#### Story Section
```typescript
import { StorySection } from "@/components/ui/section-components"

<StorySection
  title="Our Story"
  description="Founded by Jerome Brofas Sombra and Mia Angela Ramos, Uragon Transport started with a simple vision: to provide reliable, neighborly car rental services in Bicol."
  image="/company-story.jpg"
  imageAlt="Uragon Transport founders"
  reverse={false}
  background="default"
  maxWidth="6xl"
/>
```

#### Mission Vision Section
```typescript
import { MissionVisionSection } from "@/components/ui/section-components"
import { Target, Eye } from "lucide-react"

<MissionVisionSection
  mission={{
    title: "Mission",
    description: "To deliver safe, seamless, and transparent mobility across Bicol by providing well-maintained vehicles, straightforward policies, and responsive support.",
    icon: Target
  }}
  vision={{
    title: "Vision",
    description: "To be the most trusted mobility partner in the Bicol Region, known for dependable vehicles, genuine local service, and exceptional customer experience.",
    icon: Eye
  }}
  background="muted"
  maxWidth="6xl"
/>
```

#### Team Section
```typescript
import { TeamSection } from "@/components/ui/section-components"

<TeamSection
  title="Meet Our Team"
  description="The people behind Uragon Transport's success"
  members={[
    {
      name: "Jerome Brofas Sombra",
      role: "Co-Founder & CEO",
      image: "/jerome.jpg",
      bio: "Passionate about providing reliable transportation services to the Bicol community."
    }
    // ... more team members
  ]}
  background="muted/30"
  maxWidth="6xl"
/>
```

## 📋 Form Components

### Contact Form
```typescript
import { ContactForm } from "@/components/ui/form-components"

<ContactForm
  title="Get in Touch"
  description="Ready to book your car rental? Contact us today for the best rates and service in Bicol."
  variant="contact"
  background="default"
  maxWidth="2xl"
  showHeader={true}
/>
```

### Booking Form
```typescript
import { BookingForm } from "@/components/ui/form-components"

<BookingForm
  title="Quick Booking"
  description="Get your quote in seconds. Fill out the form below and we'll get back to you immediately."
  background="muted/30"
  maxWidth="4xl"
  redirectToContact={true}
/>
```

## 🧭 Navigation Components

### Site Header
```typescript
import { SiteHeader } from "@/components/ui/navigation-components"
import { Facebook, MessageCircle } from "lucide-react"

const navigation = [
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Self Drive", href: "/services/self-drive" },
      { name: "With Driver", href: "/services/with-driver" }
      // ... more services
    ]
  }
  // ... more navigation items
]

const contactInfo = {
  phone: "+63 915 923 4867",
  hours: "7:00 AM–7:00 PM daily",
  location: "Malilipot, Albay"
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/uragontransport",
    icon: Facebook
  },
  {
    name: "Messenger",
    href: "https://m.me/uragontransport",
    icon: MessageCircle
  }
]

<SiteHeader
  logo={{
    src: "/uragon_logo.jpg",
    alt: "Uragon Transport Services Logo",
    text: "Uragon Transport"
  }}
  navigation={navigation}
  contactInfo={contactInfo}
  socialLinks={socialLinks}
  bookNowHref="/contact"
  bookNowText="Book Now"
/>
```

### Site Footer
```typescript
import { SiteFooter } from "@/components/ui/navigation-components"

const companyInfo = {
  name: "Uragon Transport",
  description: "Unlock your journey, travel anywhere. We offer affordable rates with unlimited mileage for self drive rentals.",
  logo: {
    src: "/uragon_logo.jpg",
    alt: "Uragon Transport Services Logo"
  }
}

const quickLinks = [
  { name: "Our Fleet", href: "/fleet" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" }
]

const services = [
  { name: "Self Drive", href: "/services/self-drive" },
  { name: "With Driver", href: "/services/with-driver" },
  { name: "Airport Transfer", href: "/services/airport-transfer" },
  { name: "Tour Packages", href: "/services/tours" }
]

const contactInfo = {
  address: {
    street: "136 Purok 2 Sta. Teresa",
    city: "Malilipot, Albay 4510",
    country: "Philippines"
  },
  phone: "+63 915 923 4867",
  email: "info@uragontransport.com",
  hours: "Mon-Sun: 7:00 AM - 7:00 PM",
  additional: "24/7 Road Assistance"
}

<SiteFooter
  companyInfo={companyInfo}
  quickLinks={quickLinks}
  services={services}
  contactInfo={contactInfo}
  socialLinks={socialLinks}
  legalLinks={legalLinks}
  copyright="© 2025 Uragon Transport Services. All rights reserved."
/>
```

## 🪟 Modal Components

### Modal System
```typescript
import { useModal, DetailModal } from "@/components/ui/modal-components"
import { Car } from "lucide-react"

function MyComponent() {
  const { open, setOpen } = useModal()

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        View Details
      </Button>
      
      <DetailModal
        open={open}
        onOpenChange={setOpen}
        title="Vehicle Details"
        description="Complete information about this vehicle"
        icon={<Car className="w-6 h-6" />}
        size="lg"
      >
        <VehicleDetails />
      </DetailModal>
    </>
  )
}
```

### Confirmation Modal
```typescript
import { ConfirmationModal } from "@/components/ui/modal-components"

<ConfirmationModal
  open={showConfirm}
  onOpenChange={setShowConfirm}
  title="Confirm Booking"
  description="Are you sure you want to book this vehicle?"
  confirmText="Yes, Book Now"
  cancelText="Cancel"
  onConfirm={handleBooking}
  variant="destructive"
/>
```

## ✨ Animation Components

### Animated Container
```typescript
import { AnimatedContainer } from "@/components/ui/animation-components"

<AnimatedContainer
  animation="fadeInUp"
  delay={200}
  duration={600}
  className="mb-8"
>
  <ContentCard type="icon" {...cardProps} />
</AnimatedContainer>
```

### Hover Effect
```typescript
import { HoverEffect } from "@/components/ui/animation-components"

<HoverEffect
  scale={1.05}
  shadow="lg"
  className="transition-all duration-300"
>
  <ContentCard type="image" {...cardProps} />
</HoverEffect>
```

### Staggered Animation
```typescript
import { StaggeredAnimation } from "@/components/ui/animation-components"

<StaggeredAnimation
  animation="fadeInUp"
  stagger={100}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {services.map((service, index) => (
    <ContentCard key={service.id} type="icon" {...service} />
  ))}
</StaggeredAnimation>
```

## 🔄 Loading Components

### Loading States
```typescript
import { LoadingSpinner, LoadingCard, LoadingButton } from "@/components/ui/loading-components"

// Spinner
<LoadingSpinner size="lg" variant="primary" />

// Card Skeleton
<LoadingCard variant="image" />

// Button with Loading
<LoadingButton
  loading={isSubmitting}
  loadingText="Submitting..."
  onClick={handleSubmit}
>
  Submit Form
</LoadingButton>
```

### Loading Overlay
```typescript
import { LoadingOverlay } from "@/components/ui/loading-components"

<LoadingOverlay
  loading={isLoading}
  text="Loading vehicles..."
  variant="spinner"
/>
```

## 🛠️ Utility Components

### Sticky Book Button
```typescript
import { StickyBookButton } from "@/components/ui/utility-components"

<StickyBookButton
  text="Book Now"
  href="/contact"
  variant="floating"
  position="bottom-right"
  className="md:hidden"
/>
```

### Hero Stats
```typescript
import { HeroStats } from "@/components/ui/utility-components"

<HeroStats
  stats={[
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Vehicles" },
    { number: "6", label: "Service Areas" },
    { number: "24/7", label: "Support" }
  ]}
  variant="cards"
  background="muted"
/>
```

### Top Vehicles
```typescript
import { TopVehicles } from "@/components/ui/utility-components"

<TopVehicles
  title="Most Popular Vehicles"
  description="Our customers' favorite choices"
  vehicles={popularVehicles}
  maxItems={3}
  background="default"
/>
```

## 🎨 Styling Patterns

### Background Variants
```typescript
// Available background options
background="default"     // White background
background="muted"       // Light gray background
background="muted/30"    // Light gray with opacity
background="gradient"    // Gradient background
background="primary"     // Primary color background
```

### Max Width Options
```typescript
// Available max width options
maxWidth="sm"    // 384px
maxWidth="md"    // 448px
maxWidth="lg"    // 512px
maxWidth="xl"    // 576px
maxWidth="2xl"   // 672px
maxWidth="3xl"   // 768px
maxWidth="4xl"   // 896px
maxWidth="5xl"   // 1024px
maxWidth="6xl"   // 1152px
maxWidth="7xl"   // 1280px
```

### Grid Variants
```typescript
// Standard Grid variants
variant="1col"   // Single column
variant="2col"   // Two columns
variant="3col"   // Three columns
variant="4col"   // Four columns

// Grid gap options
gap="sm"         // Small gap
gap="md"         // Medium gap
gap="lg"         // Large gap
gap="xl"         // Extra large gap
```

## 🔧 Common Patterns

### Complete Section Example
```typescript
import { 
  SectionContainer, 
  SectionHeader, 
  StandardGrid 
} from "@/components/ui/content-grid"
import { ContentCard } from "@/components/ui/content-card"

export function ServicesSection() {
  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="Our Services"
        description="Comprehensive transportation solutions for all your needs"
        highlight="Services"
        maxWidth="4xl"
      />
      
      <StandardGrid variant="3col" gap="lg">
        {services.map((service) => (
          <ContentCard
            key={service.id}
            type="icon"
            icon={service.icon}
            title={service.title}
            description={service.description}
            variant="centered"
          />
        ))}
      </StandardGrid>
    </SectionContainer>
  )
}
```

### Form with Validation
```typescript
import { ContactForm } from "@/components/ui/form-components"

export function BookingPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <ContactForm
        variant="booking"
        title="Book Your Vehicle"
        description="Fill out the form below and we'll get back to you with a personalized quote"
        background="default"
        maxWidth="2xl"
        showHeader={true}
      />
    </div>
  )
}
```

### Modal with Content
```typescript
import { useModal, DetailModal } from "@/components/ui/modal-components"

export function VehicleCard({ vehicle }) {
  const { open, setOpen } = useModal()

  return (
    <>
      <ContentCard
        type="image"
        image={vehicle.image}
        title={vehicle.name}
        description={vehicle.description}
        onClick={() => setOpen(true)}
      />
      
      <DetailModal
        open={open}
        onOpenChange={setOpen}
        title={vehicle.name}
        description="Complete vehicle information"
        size="lg"
      >
        <VehicleDetails vehicle={vehicle} />
      </DetailModal>
    </>
  )
}
```

---

This guide provides comprehensive examples for all unified design system components. Use these patterns to maintain consistency and leverage the full power of the design system.
