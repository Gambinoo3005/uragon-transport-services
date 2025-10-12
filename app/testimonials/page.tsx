import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      location: "Legazpi, Albay",
      rating: 5,
      text: "Uragon Transport Services made our family vacation to Bicol absolutely perfect! The self-drive rental was clean, reliable, and the unlimited mileage policy was perfect for exploring. We felt safe throughout our journey.",
      image: "/placeholder-user.jpg",
      service: "Self Drive Rental"
    },
    {
      id: 2,
      name: "John Rodriguez",
      location: "Naga, Camarines Sur",
      rating: 5,
      text: "Excellent service for our business trip! The with driver service was seamless and the driver was very accommodating with our schedule changes. Highly recommend for professional transportation needs.",
      image: "/placeholder-user.jpg",
      service: "With Driver Service"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "Sorsogon City",
      rating: 5,
      text: "We rented a car for a week to explore Bicol and it was the best decision! The vehicle was in perfect condition, comprehensive insurance gave us peace of mind, and the team was incredibly helpful with recommendations for local attractions.",
      image: "/placeholder-user.jpg",
      service: "Weekly Car Rental"
    },
    {
      id: 4,
      name: "Michael Chen",
      location: "Iriga, Camarines Sur",
      rating: 5,
      text: "Outstanding service from start to finish. The booking process was easy, the car was clean and reliable, and the customer service team was responsive to all our questions. Will definitely use again!",
      image: "/placeholder-user.jpg",
      service: "Daily Rental"
    },
    {
      id: 5,
      name: "Ana Dela Cruz",
      location: "Tabaco, Albay",
      rating: 5,
      text: "Uragon Transport Services helped us organize a group tour to Mayon Volcano and Caramoan. Everything was perfectly planned and executed. Our group of 12 had an amazing time thanks to their excellent service and reliable vehicles.",
      image: "/placeholder-user.jpg",
      service: "Tour Package"
    },
    {
      id: 6,
      name: "Robert Wilson",
      location: "Daet, Camarines Norte",
      rating: 5,
      text: "Professional, reliable, and affordable. The driver was knowledgeable about the area and made our trip enjoyable. The vehicle was comfortable and well-maintained with comprehensive insurance. Five stars!",
      image: "/placeholder-user.jpg",
      service: "With Driver Service"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Customer Testimonials"
          highlight="Testimonials"
          description="Don’t just take our word for it. Hear from travelers, families, and teams who rely on Uragon Transport Services across Bicol."
        />

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Stories from the Road"
            description="Real feedback from customers who booked self-drive rentals, with-driver services, and curated tours."
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-4 border-t">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StandardGrid>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
