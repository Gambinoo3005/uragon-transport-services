export function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Ready to explore Bicol? Contact us for car rental bookings, questions, or travel advice. We're here to help make your
            journey unforgettable with our reliable vehicles and unlimited mileage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">7AM-7PM</div>
              <div className="text-sm text-muted-foreground">Business Hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Fast</div>
              <div className="text-sm text-muted-foreground">Booking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
