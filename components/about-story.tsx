export function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground text-pretty">
                <p>
                  Uragon Transport Services was established on January 22, 2025, by business owners Jerome Brofas Sombra and Mia Angela Ramos. We recognized the need for reliable and affordable car rental services in the Bicol region with a focus on unlimited mileage and exceptional customer service.
                </p>
                <p>
                  What sets us apart is our commitment to offering affordable rates with unlimited mileage for self drive rentals. We ensure safe, secure and clean units for every client's convenience. Our comprehensive car insurance coverage and 24/7 road assistance provide peace of mind for all our customers.
                </p>
                <p>
                  Today, we operate a modern fleet of Toyota, Mitsubishi, and Nissan vehicles including sedans, SUVs, MPVs, and vans. Our services include self drive, with driver, pick up-drop off, delivery, bridal service, tours, and business trips. We're committed to helping you unlock your journey and travel anywhere.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="/uragon-tours-founder-story.jpg"
                alt="Uragon Tours founder with first rental car"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
