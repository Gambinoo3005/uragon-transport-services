import { Star, Quote } from "lucide-react"

export function SocialProof() {
  const testimonials = [
    {
      text: "Smooth booking, spotless unit, and hassle-free pick-up. Roadside assistance gave extra peace of mind.",
      author: "Maria Santos",
      location: "Legazpi City"
    },
    {
      text: "Friendly team and fair rates. Will book again for our next Bicol tour!",
      author: "John Dela Cruz", 
      location: "Daraga"
    }
  ]


  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Travelers Choose Us for <span className="text-primary">Car Rental in Bicol</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl shadow-lg">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
