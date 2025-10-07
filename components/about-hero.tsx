export function AboutHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-primary">Uragon</span> Transport Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            A locally founded car rental company based in Malilipot, Albay, serving travelers, families, 
            and businesses across the Bicol Region.
          </p>
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 mb-8">
            <p className="text-xl font-bold text-primary italic">
              "Unlock your journey, travel anywhere."
            </p>
            <p className="text-sm text-muted-foreground mt-2">Our guiding line</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Vehicles</div>
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
