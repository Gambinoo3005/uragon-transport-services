"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real experiences from travelers who chose Uragon Tours for their Bicol adventures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <p className="text-lg text-foreground mb-6 leading-relaxed text-pretty">
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
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
