"use client"

import Link from "next/link"
import { MapPin, Clock, Navigation, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionContainer, SectionHeader, LocationGrid as LocationGridComponent } from "@/components/ui/content-grid"
import { useMemo, useState } from "react"

export type Location = {
  name: string
  slug: string
  description: string
  image: string
  features: string[]
  popular?: boolean
  distance: string
  operatingHours: string
}

type LocationGridProps = {
  locations: Location[]
}

type FilterOption = "all" | "featured"

export function LocationGrid({ locations }: LocationGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all")

  const filteredLocations = useMemo(() => {
    if (activeFilter === "featured") {
      return locations.filter((location) => location.popular)
    }
    return locations
  }, [activeFilter, locations])

  const filterControls = (
    <>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-3">Where We Can Meet You</h2>
        <p className="text-lg text-muted-foreground">
          Choose the hub that&apos;s closest to your pickup. Each location is staffed by local coordinators who know
          the routes, landmarks, and service shortcuts across Bicol.
        </p>
      </div>

      <div className="bg-muted rounded-full p-1 inline-flex w-fit self-start md:self-auto">
        <Button
          variant={activeFilter === "all" ? "default" : "ghost"}
          size="sm"
          className="px-4"
          onClick={() => setActiveFilter("all")}
        >
          All Locations
        </Button>
        <Button
          variant={activeFilter === "featured" ? "default" : "ghost"}
          size="sm"
          className="px-4"
          onClick={() => setActiveFilter("featured")}
        >
          Featured
        </Button>
      </div>
    </>
  )

  const locationComponents = filteredLocations.map((location) => (
    <Link
      key={location.slug}
      href={`/locations/${location.slug}`}
      className="group bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-border/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={location.image || "/placeholder.svg"}
          alt={`${location.name} car rental hub`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {location.popular ? (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-sm flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" />
            Popular
          </Badge>
        ) : null}
      </div>

      <Card className="border-none shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {location.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">{location.description}</p>
        </CardHeader>
        <CardContent className="pt-0 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Navigation className="h-4 w-4 text-primary" />
              {location.distance}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {location.operatingHours}
            </span>
          </div>

          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Local Highlights</div>
            <div className="flex flex-wrap gap-2">
              {location.features.slice(0, 4).map((feature) => (
                <Badge key={feature} variant="secondary" className="text-xs font-medium">
                  {feature}
                </Badge>
              ))}
              {location.features.length > 4 ? (
                <Badge variant="outline" className="text-xs font-medium">
                  +{location.features.length - 4} more
                </Badge>
              ) : null}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm font-semibold text-primary">View location guide</div>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Learn more >
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  ))

  return (
    <SectionContainer background="default">
      <LocationGridComponent 
        showFilters={true}
        filterControls={filterControls}
        gap="lg"
      >
        {locationComponents}
      </LocationGridComponent>

      {filteredLocations.length === 0 ? (
        <div className="mt-12 text-center text-muted-foreground">
          No locations match this filter yet. Try switching back to all locations.
        </div>
      ) : null}
    </SectionContainer>
  )
}
