"use client"

import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { TestimonialCarouselBlock } from "@/components/ui/content-blocks"

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Manila",
    rating: 5,
    text: "Excellent service from start to finish! The driver was punctual, professional, and knew all the best routes around Bicol. Our Mayon Volcano tour was unforgettable.",
    service: "Tour Package",
  },
  {
    id: 2,
    name: "John Rodriguez",
    location: "Cebu",
    rating: 5,
    text: "Booked a Toyota Innova for our family vacation. The car was clean, well-maintained, and perfect for our group of 6. Great value for money!",
    service: "Daily Rental",
  },
  {
    id: 3,
    name: "Sarah Chen",
    location: "Singapore",
    rating: 5,
    text: "Airport transfer was seamless. Driver was waiting with a sign, helped with luggage, and got us to our hotel safely. Will definitely use again!",
    service: "Airport Transfer",
  },
  {
    id: 4,
    name: "Miguel Torres",
    location: "Davao",
    rating: 5,
    text: "Professional chauffeur service for our business meetings in Legazpi. Driver was courteous, punctual, and the vehicle was immaculate.",
    service: "Chauffeur Service",
  },
]

export function TestimonialsSection() {
  return (
    <SectionContainer background="muted/30">
      <SectionHeader
        title="What Our Customers Say"
        description="Real experiences from travelers who chose Uragon Tours for their Bicol adventures."
        maxWidth="2xl"
      />

      <TestimonialCarouselBlock 
        testimonials={testimonials}
        variant="default"
        showNavigation={true}
        showDots={true}
        autoPlay={false}
      />
    </SectionContainer>
  )
}
