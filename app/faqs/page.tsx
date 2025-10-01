import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Phone, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Uragon Transport Services | Car Rental FAQ",
  description:
    "Find answers to common questions about car rental with Uragon Transport Services. Learn about booking, requirements, rates, and more.",
  keywords: "car rental FAQ, frequently asked questions, Bicol car rental questions, self drive rental FAQ",
}

const faqCategories = [
  {
    category: "Booking & Reservation",
    icon: "📅",
    questions: [
      {
        question: "How far in advance should I book a car?",
        answer: "We recommend booking at least 24-48 hours in advance, especially during peak seasons or holidays. However, we also accept same-day bookings subject to vehicle availability."
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer: "Yes, you can modify or cancel your reservation up to 24 hours before your scheduled pickup time without any penalty. Cancellations made within 24 hours may be subject to a cancellation fee."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards (Visa, Mastercard, American Express), debit cards, bank transfers, and cash payments for local customers. Online payments are processed securely through our payment gateway."
      },
      {
        question: "Do you offer long-term rentals?",
        answer: "Yes, we offer weekly and monthly rental packages with discounted rates. Contact us for custom long-term rental arrangements and special pricing."
      }
    ]
  },
  {
    category: "Requirements & Documents",
    icon: "📋",
    questions: [
      {
        question: "What documents do I need to rent a car?",
        answer: "You need a valid driver's license (Philippine or international), a valid government-issued ID, and a credit card for the security deposit. Additional documents may be required for certain vehicle categories."
      },
      {
        question: "Can I rent a car if I'm under 25?",
        answer: "Yes, drivers aged 21-24 can rent economy and compact vehicles. However, a young driver surcharge may apply. Drivers must be at least 25 years old for SUVs and premium vehicles."
      },
      {
        question: "Do you accept international driver's licenses?",
        answer: "Yes, we accept valid international driving permits along with your passport. The international permit must be valid for the duration of your rental period."
      },
      {
        question: "What is the security deposit amount?",
        answer: "Security deposits range from ₱5,000 for economy cars to ₱15,000 for vans. The exact amount depends on the vehicle category and is held on your credit card during the rental period."
      }
    ]
  },
  {
    category: "Vehicle & Driving",
    icon: "🚗",
    questions: [
      {
        question: "What is included in the rental rate?",
        answer: "Our rates include unlimited mileage, basic insurance coverage, 24/7 roadside assistance, and free delivery within Legazpi City. Fuel is not included for self-drive rentals."
      },
      {
        question: "Can I drive the car outside of Bicol?",
        answer: "Yes, our vehicles can be driven within Luzon. For inter-island travel or specific restricted areas, please contact us in advance as additional permissions or insurance may be required."
      },
      {
        question: "What happens if the car breaks down?",
        answer: "We provide 24/7 roadside assistance. If the vehicle breaks down due to mechanical issues, we will provide a replacement vehicle or arrange for repairs at no additional cost to you."
      },
      {
        question: "Can I add an additional driver?",
        answer: "Yes, you can add additional drivers for a small fee. All additional drivers must meet the same age and license requirements and be present during vehicle pickup."
      }
    ]
  },
  {
    category: "Insurance & Coverage",
    icon: "🛡️",
    questions: [
      {
        question: "What insurance coverage is included?",
        answer: "Basic insurance coverage is included in all rentals, covering third-party liability and comprehensive coverage for the vehicle. Personal accident insurance is also included for the driver and passengers."
      },
      {
        question: "What is not covered by insurance?",
        answer: "Insurance does not cover personal belongings, damage from reckless driving, driving under the influence, or damage from off-road use. A deductible may apply for certain claims."
      },
      {
        question: "Can I purchase additional insurance?",
        answer: "Yes, we offer additional insurance options including zero-deductible coverage and enhanced personal accident insurance. Contact us for details and pricing."
      },
      {
        question: "What should I do in case of an accident?",
        answer: "In case of an accident, immediately contact the police and our 24/7 emergency hotline. Do not admit fault and gather as much information as possible, including photos and witness details."
      }
    ]
  },
  {
    category: "Rates & Payment",
    icon: "💰",
    questions: [
      {
        question: "Are there any hidden fees?",
        answer: "No, we believe in transparent pricing. All fees are clearly stated during the booking process. Additional charges may apply for late returns, excessive cleaning, or damage to the vehicle."
      },
      {
        question: "Do you offer discounts for long-term rentals?",
        answer: "Yes, we offer significant discounts for weekly and monthly rentals. The longer the rental period, the better the rate. Contact us for custom pricing for extended rentals."
      },
      {
        question: "When is the security deposit refunded?",
        answer: "The security deposit is released from your credit card within 3-5 business days after the vehicle is returned in good condition. Any additional charges will be deducted before the refund."
      },
      {
        question: "Can I pay in installments?",
        answer: "For long-term rentals, we may offer installment payment options. Contact us to discuss payment arrangements for rentals longer than one month."
      }
    ]
  },
  {
    category: "Pickup & Return",
    icon: "📍",
    questions: [
      {
        question: "Where can I pick up and return the vehicle?",
        answer: "You can pick up and return vehicles at our main office in Legazpi City, Legazpi Airport, or our Naga City location. Free delivery is available within Legazpi City for rentals of 3 days or more."
      },
      {
        question: "What are your operating hours?",
        answer: "Our main office is open from 6:00 AM to 8:00 PM daily. Airport pickup is available from 5:00 AM to 10:00 PM. After-hours pickup can be arranged for an additional fee."
      },
      {
        question: "What happens if I return the car late?",
        answer: "Late returns are subject to additional charges. We provide a 1-hour grace period, after which hourly charges apply. Please contact us if you anticipate being late."
      },
      {
        question: "Can I return the car to a different location?",
        answer: "One-way rentals are available between our locations for an additional fee. Contact us in advance to arrange a different return location."
      }
    ]
  }
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FAQs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about renting a car with Uragon Transport Services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground">
                Our customer support team is here to help you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>
                    Speak directly with our customer service team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+639159234867" 
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    +63 915 923 4867
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available 24/7 for emergencies<br />
                    Regular support: 8:00 AM - 8:00 PM
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Chat with us online for quick answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Available Monday to Friday<br />
                    8:00 AM - 6:00 PM
                  </p>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-blue-800">Quick Tips for First-Time Renters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Book in advance to secure your preferred vehicle and get better rates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Inspect the vehicle thoroughly before driving away and report any existing damage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Keep our emergency contact number handy during your rental period</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Return the vehicle with the same fuel level as when you received it</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Read the rental agreement carefully and ask questions if anything is unclear</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
