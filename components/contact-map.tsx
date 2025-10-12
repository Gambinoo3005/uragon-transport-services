import { MapPin } from "lucide-react"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { Card } from "@/components/ui/card"

export function ContactMap() {
  return (
    <SectionContainer background="muted" padding="lg">
      <SectionHeader
        title="Visit Our Office"
        description="Located in Malilipot, Albay, we're easy to find and always ready to welcome you."
        centered={true}
        maxWidth="4xl"
      />

      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden shadow-lg">
          <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map would be embedded here</p>
              <p className="text-sm text-muted-foreground mt-2">136 Purok 2 Sta. Teresa, Malilipot, Albay 4510</p>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}
