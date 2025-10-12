"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"
import { cn } from "@/lib/utils"
import { Phone, MessageCircle, Calendar as CalendarIcon, Clock, MapPin, User, Mail, Users } from "lucide-react"
import { format } from "date-fns"
import { 
  validateForm, 
  isFormValid, 
  sanitizeFormData, 
  validateDate,
  DEFAULT_VALIDATION_RULES,
  type ValidationErrors 
} from "@/lib/form-validation"

// ============================================================================
// CONTACT FORM COMPONENT
// ============================================================================

interface ContactFormProps {
  title?: string
  description?: string
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  showHeader?: boolean
  variant?: 'contact' | 'booking'
  prefilledData?: {
    pickup?: string
    destination?: string
    service?: string
    passengers?: string
    name?: string
    phone?: string
    email?: string
    date?: string
  }
  onSubmit?: (data: any) => void
  className?: string
}

export function ContactForm({
  title = "Get in Touch",
  description = "Ready to book your car rental? Contact us today for the best rates and service in Bicol.",
  background = 'default',
  maxWidth = '2xl',
  showHeader = true,
  variant = 'contact',
  prefilledData = {},
  onSubmit,
  className
}: ContactFormProps) {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: prefilledData.name || '',
    email: prefilledData.email || '',
    phone: prefilledData.phone || '',
    subject: '',
    message: '',
    // Booking-specific fields
    pickup: prefilledData.pickup || '',
    destination: prefilledData.destination || '',
    service: prefilledData.service || '',
    passengers: prefilledData.passengers || ''
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle URL parameters to pre-fill form
  useEffect(() => {
    if (typeof window !== 'undefined' && variant === 'booking') {
      const urlParams = new URLSearchParams(window.location.search)
      const urlData = {
        pickup: urlParams.get('pickup') || '',
        destination: urlParams.get('destination') || '',
        service: urlParams.get('service') || '',
        passengers: urlParams.get('passengers') || '',
        name: urlParams.get('name') || '',
        phone: urlParams.get('phone') || '',
        email: urlParams.get('email') || ''
      }
      
      if (urlParams.get('date')) {
        setDate(new Date(urlParams.get('date')!))
      }
      
      setFormData(prev => ({
        ...prev,
        ...urlData
      }))
    }
  }, [variant])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form
      const validationRules = variant === 'booking' 
        ? { ...DEFAULT_VALIDATION_RULES, pickup: DEFAULT_VALIDATION_RULES.pickup, destination: DEFAULT_VALIDATION_RULES.destination, service: DEFAULT_VALIDATION_RULES.service, passengers: DEFAULT_VALIDATION_RULES.passengers }
        : DEFAULT_VALIDATION_RULES

      const formErrors = validateForm(formData, validationRules)
      
      // Validate date for booking forms
      if (variant === 'booking') {
        const dateError = validateDate(date)
        if (dateError) {
          formErrors.date = dateError
        }
      }

      setErrors(formErrors)

      if (isFormValid(formErrors)) {
        // Sanitize form data
        const sanitizedData = sanitizeFormData(formData)
        const submitData = { ...sanitizedData, date }
        
        if (onSubmit) {
          await onSubmit(submitData)
        } else {
          // Default behavior
          if (variant === 'booking') {
            alert("Thank you for your booking request! We'll contact you within 15 minutes with your personalized quote.")
          } else {
            alert("Thank you for your message! We'll get back to you soon.")
          }
        }
        
        console.log('Form submitted:', submitData)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
  }

  const getFieldError = (field: string): string | null => {
    return touched[field] && errors[field] ? errors[field] : null
  }

  const getFieldClassName = (field: string): string => {
    const hasError = touched[field] && errors[field]
    return hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
  }

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }

  const formContent = (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {variant === 'booking' ? 'Book Your Ride' : 'Contact Us'}
        </CardTitle>
        <p className="text-muted-foreground text-center">
          {variant === 'booking' 
            ? "Fill out the form below and we'll get back to you with a personalized quote"
            : "Ready to book your car rental? Contact us today for the best rates and service in Bicol."
          }
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Booking-specific fields */}
            {variant === 'booking' && (
              <>
                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label htmlFor="pickup" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pickup Location *
                  </Label>
                  <Input
                    id="pickup"
                    name="pickup"
                    type="text"
                    placeholder="Enter pickup address"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <Label htmlFor="destination" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Destination *
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Service Type *
                  </Label>
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
                  <Label htmlFor="passengers" className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Passengers *
                  </Label>
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
                  <Label className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    Travel Date *
                  </Label>
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
              </>
            )}

            {/* Common fields */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn("pl-10", getFieldClassName('name'))}
                  required
                />
              </div>
              {getFieldError('name') && (
                <p className="text-sm text-red-500">{getFieldError('name')}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+63 915 923 4867"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Contact-specific fields */}
            {variant === 'contact' && (
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Message field */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                {variant === 'booking' ? 'Additional Message' : 'Message *'}
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  placeholder={variant === 'booking' 
                    ? "Tell us about your travel plans, special requirements, or any questions you have..."
                    : "Tell us how we can help you..."
                  }
                  value={formData.message}
                  onChange={handleChange}
                  className="pl-10"
                  rows={4}
                  required={variant === 'contact'}
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting 
                ? 'Submitting...' 
                : variant === 'booking' 
                  ? 'Get Instant Quote' 
                  : 'Send Message'
              }
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {variant === 'booking' 
                ? "We'll contact you within 15 minutes with your personalized quote"
                : "We'll get back to you within 24 hours"
              }
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )

  if (showHeader) {
    return (
      <SectionContainer background={background} className={className}>
        <SectionHeader
          title={title}
          description={description}
          maxWidth={maxWidth}
        />
        <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
          {formContent}
        </div>
      </SectionContainer>
    )
  }

  return (
    <div className={cn(backgroundClasses[background], className)}>
      <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
        {formContent}
      </div>
    </div>
  )
}

// ============================================================================
// BOOKING FORM COMPONENT (Quick Booking)
// ============================================================================

interface BookingFormProps {
  title?: string
  description?: string
  background?: 'default' | 'muted' | 'muted/30'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  showHeader?: boolean
  redirectToContact?: boolean
  onSubmit?: (data: any) => void
  className?: string
}

export function BookingForm({
  title = "Quick Booking",
  description = "Get your quote in seconds. Fill out the form below and we'll get back to you immediately.",
  background = 'muted/30',
  maxWidth = '4xl',
  showHeader = true,
  redirectToContact = true,
  onSubmit,
  className
}: BookingFormProps) {
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
    
    if (onSubmit) {
      onSubmit({ ...formData, date })
    } else if (redirectToContact) {
      // Redirect to contact page with pre-filled data
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
    } else {
      alert("Thank you for your booking request! We'll contact you within 15 minutes with your personalized quote.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    'muted/30': 'bg-muted/30'
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }

  const formContent = (
    <div className="bg-background rounded-2xl shadow-xl p-8 border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup Location */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Pickup Location
            </Label>
            <Input
              name="pickup"
              placeholder="Enter pickup address"
              value={formData.pickup}
              onChange={handleChange}
              required
            />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Destination
            </Label>
            <Input
              name="destination"
              placeholder="Enter destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Service Type
            </Label>
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
            <Label className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Passengers
            </Label>
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
            <Label className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-primary" />
              Travel Date
            </Label>
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
            <Label>Full Name</Label>
            <Input
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input
              name="phone"
              placeholder="+63 915 923 4867"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2 md:col-span-2">
            <Label>Email Address</Label>
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <Button
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Get Instant Quote
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            We'll contact you within 15 minutes with your personalized quote
          </p>
        </div>
      </form>
    </div>
  )

  if (showHeader) {
    return (
      <SectionContainer background={background} className={className}>
        <SectionHeader
          title={title}
          description={description}
          maxWidth={maxWidth}
        />
        <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
          {formContent}
        </div>
      </SectionContainer>
    )
  }

  return (
    <div className={cn(backgroundClasses[background], className)}>
      <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
        {formContent}
      </div>
    </div>
  )
}