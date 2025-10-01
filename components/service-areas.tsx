import { MapPin, Navigation } from "lucide-react"

export function ServiceAreas() {
  const popularHubs = [
    "Legazpi", "Daraga", "Tabaco", "Ligao", "Tiwi", "Malilipot", 
    "Camalig", "Guinobatan", "Sto. Domingo", "Polangui", "Bacacay"
  ]

  const otherProvinces = [
    "Sorsogon", "CamSur", "Catanduanes", "Masbate"
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Albay and the <span className="text-primary">Entire Bicol Region</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We serve Albay and the entire Bicol Region, plus out-of-town trips on request
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Hubs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Popular Hubs
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {popularHubs.map((hub, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg text-center hover:bg-muted/50 transition-colors">
                    <span className="text-foreground font-medium">{hub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Provinces */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Navigation className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Out-of-Town Routes
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Need to rent a car for routes to other provinces? We've got you covered:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {otherProvinces.map((province, index) => (
                    <div key={index} className="p-3 bg-primary/10 rounded-lg text-center">
                      <span className="text-primary font-semibold">{province}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Contact us for custom routes and special arrangements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
