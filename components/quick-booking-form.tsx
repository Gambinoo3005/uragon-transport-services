"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, Clock, Users } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function QuickBookingForm() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    service: "",
    passengers: "",
    name: "",
    phone: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - redirect to contact page with pre-filled data
    const params = new URLSearchParams({
      pickup: formData.pickup,
      destination: formData.destination,
      service: formData.service,
      passengers: formData.passengers,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: date ? format(date, "yyyy-MM-dd") : ""
    })
    window.location.href = `/contact?${params.toString()}`
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick <span className="text-primary">Booking</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get your quote in seconds. Fill out the form below and we'll get back to you immediately.
            </p>
          </div>

          <div className="bg-background rounded-2xl shadow-xl p-8 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pickup Location
                  </label>
                  <Input
                    placeholder="Enter pickup address"
                    value={formData.pickup}
                    onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                    required
                  />
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Destination
                  </label>
                  <Input
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    required
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Service Type
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                      <SelectItem value="daily-rental">Daily Rental</SelectItem>
                      <SelectItem value="chauffeur-service">Chauffeur Service</SelectItem>
                      <SelectItem value="tour-package">Tour Package</SelectItem>
                      <SelectItem value="group-transport">Group Transport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Passengers */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Passengers
                  </label>
                  <Select value={formData.passengers} onValueChange={(value) => setFormData({...formData, passengers: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Number of passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                      <SelectItem value="5">5 Passengers</SelectItem>
                      <SelectItem value="6+">6+ Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    Travel Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+63 915 923 4867"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  Get Instant Quote
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 15 minutes with your personalized quote
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

