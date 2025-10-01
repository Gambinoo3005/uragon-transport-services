"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPin, Clock, Users, MessageSquare } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    service: "",
    passengers: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  // Handle URL parameters to pre-fill form
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const prefilledData = {
        pickup: urlParams.get('pickup') || "",
        destination: urlParams.get('destination') || "",
        service: urlParams.get('service') || "",
        passengers: urlParams.get('passengers') || "",
        name: urlParams.get('name') || "",
        phone: urlParams.get('phone') || "",
        email: urlParams.get('email') || "",
        message: ""
      }
      
      if (urlParams.get('date')) {
        setDate(new Date(urlParams.get('date')!))
      }
      
      setFormData(prefilledData)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking form submitted:", { ...formData, date })
    // Here you would typically send the data to your backend or email service
    alert("Thank you for your booking request! We'll contact you within 15 minutes with your personalized quote.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Book Your Ride</CardTitle>
        <p className="text-muted-foreground text-center">
          Fill out the form below and we'll get back to you with a personalized quote
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pickup Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Pickup Location *
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
                Destination *
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
                Service Type *
              </label>
              <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self-drive">Self Drive Rental</SelectItem>
                  <SelectItem value="with-driver">With Driver Service</SelectItem>
                  <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                  <SelectItem value="pickup-dropoff">Pick Up & Drop Off</SelectItem>
                  <SelectItem value="delivery">Delivery Service</SelectItem>
                  <SelectItem value="bridal">Bridal Service</SelectItem>
                  <SelectItem value="tours">Tour Packages</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Passengers *
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
                  <SelectItem value="6">6 Passengers</SelectItem>
                  <SelectItem value="7">7 Passengers</SelectItem>
                  <SelectItem value="8">8 Passengers</SelectItem>
                  <SelectItem value="9+">9+ Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-primary" />
                Travel Date *
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
                Full Name *
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
                Phone Number *
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
                Email Address *
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Additional Message
              </label>
              <Textarea
                placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Get Instant Quote
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll contact you within 15 minutes with your personalized quote
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
