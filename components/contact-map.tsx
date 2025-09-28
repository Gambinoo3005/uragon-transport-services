import { MapPin } from "lucide-react"

export function ContactMap() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground text-pretty">
              Located in Malilipot, Albay, we're easy to find and always ready to welcome you.
            </p>
          </div>

          <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">136 Purok 2 Sta. Teresa, Malilipot, Albay 4510</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
