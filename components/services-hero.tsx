export function ServicesHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            From self drive rentals to complete tour packages, we provide comprehensive transportation solutions across
            Bicol. Professional service, competitive rates, and unlimited mileage for your convenience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Main Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">7AM-7PM</div>
              <div className="text-sm text-muted-foreground">Business Hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Unlimited</div>
              <div className="text-sm text-muted-foreground">Mileage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
