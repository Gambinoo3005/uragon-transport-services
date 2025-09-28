export function BlogHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Travel <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Discover the best of Bicol with our travel guides, car rental tips, and local insights. Plan your perfect
            trip with expert advice from locals who know the region best.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Local</div>
              <div className="text-sm text-muted-foreground">Insights</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Travel</div>
              <div className="text-sm text-muted-foreground">Guides</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Tips</div>
              <div className="text-sm text-muted-foreground">& Tricks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
