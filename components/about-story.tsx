export function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground text-pretty">
                <p>
                  Uragon was founded by Jerome Brofas Sombra and Mia Angela Ramos—Bicolanos who believed car rental should feel straightforward and neighborly. From day one, they set a simple standard: well-maintained, insured vehicles and service that treats every customer like a local friend.
                </p>
                <p>
                  Starting in Malilipot, they built the company through word-of-mouth—serving airport runs, family trips, corporate errands, and special occasions—growing one smooth, stress-free journey at a time.
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why "Uragon"?</h3>
                <p className="text-muted-foreground text-pretty">
                  In Bicolano, <span className="font-semibold text-foreground">uragon</span> celebrates excellence, grit, and skill. 
                  It's the standard we hold ourselves to—on the road, in our service, and in how we take care of people.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="/mayon_hero.jpg"
                alt="Bicol region landscape with Mayon Volcano"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
