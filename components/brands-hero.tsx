export function BrandsHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Vehicle Brands</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Choose from our premium fleet of Toyota, Mitsubishi, and other trusted vehicle brands. All vehicles are
            well-maintained, fully insured, and perfect for exploring Bicol with unlimited mileage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Trusted Brands</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Vehicle Models</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
