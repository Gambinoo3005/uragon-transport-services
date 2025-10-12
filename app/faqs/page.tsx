import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { HelpCircle, Phone, MessageCircle, Clock, MapPin, Shield, CreditCard, Car, Users, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Uragon Transport Services | Car Rental FAQ Bicol",
  description:
    "Get answers to all your car rental questions. Learn about booking, requirements, rates, policies, and services for Uragon Transport Services in Bicol.",
  keywords: "car rental FAQ Bicol, Uragon Transport FAQ, car rental questions Albay, self drive rental FAQ Philippines, car rental requirements Bicol",
}

const faqCategories = [
  {
    category: "Booking & Availability",
    icon: <Clock className="h-6 w-6" />,
    questions: [
      {
        question: "How do I book a car?",
        answer: "Call or text 0915 923 4867 between 7:00 AM–7:00 PM to check availability and reserve. A minimum ₱1,000 reservation fee confirms your booking. Same-day confirmations are processed during operating hours."
      },
      {
        question: "What are your operating hours?",
        answer: "We're open daily, 7:00 AM–7:00 PM."
      },
      {
        question: "How far in advance should I reserve?",
        answer: "As early as possible—especially for weekends, holidays, and long drives—so we can secure your preferred unit and schedule. (Tip: Monthly and weekly bookings often unlock bigger savings.)"
      },
      {
        question: "Can I get same-day rental?",
        answer: "Yes, subject to vehicle availability and requirement verification during operating hours (7:00 AM–7:00 PM)."
      }
    ]
  },
  {
    category: "Requirements (Self-Drive)",
    icon: <HelpCircle className="h-6 w-6" />,
    questions: [
      {
        question: "What are the rental requirements?",
        answer: "For self-drive, prepare: Valid Driver's License, 1 Government-issued ID, Selfie with ID, LTO Portal login, Proof of billing, Reservation fee (minimum ₱1,000, non-refundable). All items must match the renter's identity."
      },
      {
        question: "Do you allow additional drivers?",
        answer: "Yes—additional drivers must also meet the same ID and license requirements."
      }
    ]
  },
  {
    category: "Rates, Deposits & Payments",
    icon: <CreditCard className="h-6 w-6" />,
    questions: [
      {
        question: "How are rates computed?",
        answer: "Rates are on a 24-hour basis per rental day. Add-ons (with-driver, delivery, tours, bridal) are quoted separately."
      },
      {
        question: "What discounts do you offer?",
        answer: "Up to 30% off for monthly rentals, 10% off for weekly rentals, 5% off for 3-day rentals, Promo: 6+1 (rent 6 days, get 1 day free). Available on qualified bookings; ask us for a tailored quote."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept cash, bank transfer, and online payment."
      },
      {
        question: "Is the reservation fee refundable?",
        answer: "The reservation fee is non-refundable. One-time reschedule is allowed at least 1 day before the original travel date; same-day reschedules are not allowed."
      }
    ]
  },
  {
    category: "Vehicles & Coverage",
    icon: <Car className="h-6 w-6" />,
    questions: [
      {
        question: "What vehicles are available?",
        answer: "A well-maintained fleet including Toyota Wigo (AT/MT), Vios (AT), Avanza (AT/MT), Innova (AT), Rush (AT), Mitsubishi Xpander (AT), Mirage G4 (AT), L300 Carry (MT), Nissan Navara 4x4 (AT)—with various model years and colors. Ask us for the latest availability."
      },
      {
        question: "Are your vehicles insured?",
        answer: "Yes. All units have comprehensive insurance, and we provide 24/7 roadside assistance. A replacement unit is provided in case of accident or breakdown (subject to availability and terms)."
      },
      {
        question: "Is there a mileage limit?",
        answer: "Unlimited mileage applies within your declared province/destination. Please declare your travel route upon booking."
      },
      {
        question: "Which areas do you serve?",
        answer: "We service the Bicol Region and also support out-of-town rentals outside Bicol. Pickup/drop-off and delivery options are available (quoted separately)."
      }
    ]
  },
  {
    category: "Pick-Up, Drop-Off, Delivery & With-Driver",
    icon: <MapPin className="h-6 w-6" />,
    questions: [
      {
        question: "Where is your base location?",
        answer: "136 Purok 2, Sta. Teresa, Malilipot, Albay 4510."
      },
      {
        question: "Do you offer pick-up and drop-off?",
        answer: "Yes, we offer pick-up & drop-off and vehicle delivery. Fees depend on distance and schedule."
      },
      {
        question: "Can I hire a driver instead of self-drive?",
        answer: "Absolutely. Choose with-driver service for convenience (ideal for long trips, events, and business travel)."
      }
    ]
  },
  {
    category: "Policies: Fuel, Cancellations, Extensions",
    icon: <Shield className="h-6 w-6" />,
    questions: [
      {
        question: "What is your fuel policy?",
        answer: "Return the vehicle with the same fuel level as when released."
      },
      {
        question: "Can I cancel or reschedule?",
        answer: "Reservation fee: non-refundable. One-time reschedule: allowed if requested ≥ 1 day before your original travel date. Same-day reschedules: not allowed. For urgent changes, contact us ASAP to explore options."
      },
      {
        question: "How do I extend my rental?",
        answer: "Message or call us before your end time to request an extension. Approval depends on unit availability and updated billing on a 24-hour basis."
      }
    ]
  },
  {
    category: "Special Services (Weddings, Tours, Corporate)",
    icon: <Users className="h-6 w-6" />,
    questions: [
      {
        question: "Do you have wedding/bridal packages?",
        answer: "Yes—bridal service and wedding packages can be customized to your route, timings, and décor requests."
      },
      {
        question: "Do you offer tour assistance?",
        answer: "Yes—we provide tour assistance and local/out-of-town tours. Tell us your itinerary (Bicol or beyond) and we'll recommend the right vehicle and driver option."
      },
      {
        question: "Can you support corporate or long-term use?",
        answer: "Yes—corporate and monthly rentals are available and may qualify for up to 30% savings."
      }
    ]
  },
  {
    category: "Safety, Support & Emergencies",
    icon: <AlertTriangle className="h-6 w-6" />,
    questions: [
      {
        question: "What if the car breaks down or I have an accident?",
        answer: "Contact us immediately. We provide 24/7 roadside assistance and, when applicable, a replacement unit. Follow insurance instructions provided during vehicle release."
      },
      {
        question: "What if I'm delayed returning the vehicle?",
        answer: "Please inform us right away. Late returns without notice may incur additional charges and affect the next renter's schedule."
      }
    ]
  },
  {
    category: "Company & Contact",
    icon: <Phone className="h-6 w-6" />,
    questions: [
      {
        question: "Who owns Uragon Transport Services?",
        answer: "Owned and operated by Jerome Brofas Sombra and Mia Angela Ramos."
      },
      {
        question: "How can I contact you?",
        answer: "Call or text 0915 923 4867 (daily, 7:00 AM–7:00 PM). You can also arrange vehicle delivery, pick-up & drop-off, or with-driver service via this number."
      }
    ]
  }
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I book a car?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call or text 0915 923 4867 between 7:00 AM–7:00 PM to check availability and reserve. A minimum ₱1,000 reservation fee confirms your booking. Same-day confirmations are processed during operating hours."
                }
              },
              {
                "@type": "Question",
                "name": "What are the rental requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Valid Driver's License, 1 Government ID, selfie with ID, LTO Portal login, proof of billing, and a non-refundable reservation fee."
                }
              },
              {
                "@type": "Question",
                "name": "What discounts do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Up to 30% off for monthly rentals, 10% off for weekly rentals, 5% off for 3-day rentals, and a 6+1 promo (rent 6 days, get 1 day free)."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a mileage limit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlimited mileage within your declared province or destination."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer pick-up, drop-off, and delivery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer pick-up & drop-off and vehicle delivery; fees depend on distance and schedule."
                }
              },
              {
                "@type": "Question",
                "name": "What is your fuel policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Return the vehicle with the same fuel level as when released."
                }
              },
              {
                "@type": "Question",
                "name": "Can I reschedule or cancel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reservation fees are non-refundable. One-time reschedule is allowed at least 1 day before the original travel date; same-day reschedules are not allowed."
                }
              },
              {
                "@type": "Question",
                "name": "Are your vehicles insured and do you provide roadside assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All units have comprehensive insurance. We provide 24/7 roadside assistance and a replacement unit in case of accident or breakdown (subject to availability and terms)."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve the Bicol Region and also support out-of-town rentals outside Bicol."
                }
              },
              {
                "@type": "Question",
                "name": "Who owns Uragon Transport Services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jerome Brofas Sombra and Mia Angela Ramos."
                }
              }
            ]
          })
        }}
      />
      
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero
          title="Frequently Asked Questions"
          highlight="Questions"
          description="Welcome! Below are the most common questions about booking, requirements, rates, policies, destinations, and support for Uragon Transport Services."
        />

        {/* FAQ Categories */}
        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Answers by Category"
            description="Browse the most common questions about booking, requirements, pricing, policies, and more."
            maxWidth="4xl"
          />

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6 px-6">
                        <span className="font-bold text-lg">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed px-6 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* Quick Tips Section */}
        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Quick Tips Before You Drive"
            description="Keep these reminders in mind so your booking, release, and return go smoothly."
            maxWidth="4xl"
          />

          <StandardGrid variant="3col" gap="lg">
            <div className="text-center bg-background rounded-2xl p-6 shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Required Documents</h4>
              <p className="text-sm text-muted-foreground">Bring all required IDs and ensure names match your booking.</p>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Declare Destination</h4>
              <p className="text-sm text-muted-foreground">Declare your destination to enjoy unlimited mileage within that province/route.</p>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Fuel Policy</h4>
              <p className="text-sm text-muted-foreground">Refuel to the same level before returning.</p>
            </div>
            <div className="text-center bg-background rounded-2xl p-6 shadow-sm md:col-span-2 lg:col-span-3">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Operating Hours</h4>
              <p className="text-sm text-muted-foreground">For smooth confirmations, complete requirements and settle the reservation fee during operating hours (7:00 AM–7:00 PM).</p>
            </div>
          </StandardGrid>
        </SectionContainer>

        {/* Custom FAQ CTA */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Need something else?</h3>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                If your question isn't covered here, message us at 0915 923 4867 and we'll help you plan the best option for your trip in the Bicol Region—from quick city errands to out-of-town adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+639159234867"
                  className="inline-flex items-center justify-center bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg font-semibold rounded-md transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 0915 923 4867
                </a>
                <a 
                  href="sms:+639159234867"
                  className="inline-flex items-center justify-center bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg font-semibold rounded-md transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Text Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
