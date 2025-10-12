import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { ServiceLandingHero } from "@/components/service-landing-hero"
import { ServiceFAQ } from "@/components/service-faq"
import { SectionContainer, SectionHeader } from "@/components/ui/content-grid"

export const metadata = {
  title: "Self Drive Rental - Unlimited Mileage Car Rental | Uragon Transport Services",
  description:
    "Rent a car and drive yourself with unlimited mileage within declared province. Perfect for exploring Bicol at your own pace with 24hrs rental.",
  keywords: "self drive rental, car rental Bicol, unlimited mileage, self drive car rental Philippines, Bicol car rental",
}

const serviceData = {
  hero: {
    eyebrow: "Self-Drive Rentals",
    title: "Freedom to explore Bicol on your own terms",
    description:
      "Choose the car that fits your trip, enjoy unlimited mileage within your declared province, and drive with confidence thanks to insured units and responsive local support.",
    primaryAction: {
      label: "Book your self-drive",
      href: "/contact"
    },
    secondaryAction: {
      label: "Browse vehicle options",
      href: "/fleet"
    }
  },
  inclusions: [
    "Unlimited mileage within your declared province",
    "Comprehensive insurance with documented participation fees",
    "24/7 roadside assistance and emergency hotline",
    "Clean, sanitized vehicle with updated registration and OR/CR",
    "Flexible pick-up from Legazpi hub or door-to-door delivery",
    "Dedicated support via phone, chat, or email throughout your trip"
  ],
  vehicleOptions: [
    {
      category: "Hatchbacks",
      description: "Compact units like Toyota Wigo—easy to park, fuel-efficient, and perfect for city drives or solo travelers."
    },
    {
      category: "Sedans",
      description: "Toyota Vios and Mitsubishi Mirage G4—comfortable cabins with large trunks for weekend bags and airport runs."
    },
    {
      category: "MPVs & SUVs",
      description: "Toyota Avanza, Rush, and Innova—ideal for families and barkadas needing extra space for luggage and passengers."
    },
    {
      category: "Passenger Vans",
      description: "Mitsubishi L300 and similar vans—built for group road trips, retreats, and equipment-heavy assignments."
    }
  ],
  pickupDelivery: {
    overview: [
      "Start your rental from our Legazpi City hub or request a door-to-door handover anywhere in Metro Legazpi, Daraga, Sto. Domingo, and neighboring towns.",
      "Provincial drop-offs and ferry transfers can be arranged with advance notice so we can line up logistics and support."
    ],
    options: [
      {
        title: "Hub Pick-up",
        detail: "Visit our Legazpi hub daily from 6:00 AM to 9:00 PM. We run through the checklist, fuel level, and emergency contacts before you leave."
      },
      {
        title: "Door-to-Door Delivery",
        detail: "Schedule delivery at least 6 hours ahead. Our team confirms the exact time and shares the assigned coordinator’s contact details."
      }
    ],
    cutoffs: [
      {
        title: "Same-day requests",
        detail: "Cut-off at 3:00 PM subject to vehicle availability. We’ll notify you immediately if the preferred unit is still on the road."
      },
      {
        title: "Airport handovers",
        detail: "Book 12 hours before your flight arrival for Legazpi and Naga airports so we can secure gate passes and staging."
      }
    ]
  },
  rates: {
    overview:
      "All rates already include unlimited mileage within your declared province, comprehensive insurance, and round-the-clock assistance.",
    tiers: [
      {
        title: "Daily (24 hours)",
        price: "from ₱1,800",
        detail: "Great for quick errands, business runs, and weekend escapes. Extendable by the hour or by the day."
      },
      {
        title: "Weekly (5-7 days)",
        price: "from ₱11,500",
        detail: "Save up to 10% versus daily rates when you keep the vehicle for an entire week."
      },
      {
        title: "Monthly (28-30 days)",
        price: "from ₱36,000",
        detail: "Ideal for extended assignments. Includes complimentary maintenance checks and unit swap when needed."
      }
    ],
    promos: [
      "Weekend Getaway: Pick up Friday after 12 NN and return Monday before 10 AM to enjoy 5% off the total rate.",
      "Road Trip Bundle: Rentals of 7 days and up get one additional driver registered at no extra cost.",
      "Corporate Partner Perks: Ask about fleet pricing when booking three or more vehicles in a single month."
    ]
  },
  requirements: [
    "Valid driver's license (primary renter and any additional driver) with at least one year of driving experience.",
    "Government-issued ID that matches the renter's current address.",
    "Security deposit of ₱5,000 via cash or bank transfer, refundable within three business days after vehicle return.",
    "Signed rental agreement and joint vehicle inspection before release.",
    "Emergency contact details and intended travel provinces for support coordination."
  ],
  faqs: [
    {
      question: "How much is the security deposit and when is it returned?",
      answer:
        "Self-drive rentals require a ₱5,000 security deposit secured via cash or bank transfer at least 24 hours before pick-up. The deposit is released within three business days after the vehicle is returned in good condition and all toll or traffic notices (if any) are cleared."
    },
    {
      question: "What insurance coverage is included with the vehicle?",
      answer:
        "All units carry comprehensive insurance with CTPL coverage. In the event of damage, you only shoulder the participation fee stated in your contract while mechanical failures are handled by our team. Roadside assistance is available 24/7 anywhere within your declared province."
    },
    {
      question: "Can I drive outside my declared province?",
      answer:
        "Unlimited mileage applies within the province you declared during booking. Out-of-province trips are possible with prior approval so we can log your route, update the insurance, and brief you on any additional charges or requirements."
    }
  ],
  // Additional content for SEO - Concise, focused information
  content: {
    introduction: [
      "Self-drive car rental with Uragon lets you design the itinerary that fits your family, friends, or business schedule. Head to Mayon viewpoints at sunrise, chase Bicol's food trails, or blend remote work with weekend adventures without waiting on anyone else.",
      "Each unit is detailed, inspected, and prepped with safety equipment before release. We also provide direct contact numbers so you can reach our coordinators quickly for extensions, support, or travel tips."
    ],
    vehicleOverview:
      "Pick from hatchbacks, sedans, MPVs, SUVs, and vans—each maintained on a strict schedule and equipped with updated documentation for smooth checkpoints and port clearances.",
    pickupDeliveryOverview:
      "We coordinate handovers around your itinerary. Whether you prefer a quick hub pick-up or a doorstep delivery, our team ensures the vehicle is fueled, documented, and ready to roll.",
    ratesOverview:
      "Transparent pricing keeps your budgeting simple. Daily, weekly, and monthly tiers all include unlimited mileage within your declared province plus round-the-clock assistance.",
    requirementsNotes: [
      "Send digital copies of your IDs ahead of time to speed up verification and avoid delays at release.",
      "For corporate accounts or multiple vehicles, let us know your billing requirements so we can prepare paperwork in advance."
    ]
  }
}

export default function SelfDrivePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceLandingHero
          eyebrow={serviceData.hero.eyebrow}
          title={serviceData.hero.title}
          description={serviceData.hero.description}
          primaryAction={serviceData.hero.primaryAction}
          secondaryAction={serviceData.hero.secondaryAction}
        />

        <SectionContainer background="default" padding="xl">
          <div className="max-w-3xl mx-auto space-y-6">
            {serviceData.content.introduction.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="What's included in every self-drive rental"
            description="Every booking already covers the essentials so you can focus on the road ahead."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.inclusions.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Vehicle options for every type of trip"
            description={serviceData.content.vehicleOverview}
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceData.vehicleOptions.map((option, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{option.category}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/fleet" className="text-primary font-semibold">
              Browse the complete fleet
            </Link>
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Pick-up and delivery options"
            description={serviceData.content.pickupDeliveryOverview}
            centered={false}
            maxWidth="3xl"
          />
          <div className="space-y-4">
            {serviceData.pickupDelivery.overview.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {serviceData.pickupDelivery.options.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-border/60 pt-6">
            <h3 className="text-lg font-semibold text-foreground">Cut-off times & reminders</h3>
            <ul className="mt-4 space-y-3">
              {serviceData.pickupDelivery.cutoffs.map((item, index) => (
                <li key={index} className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{item.title}:</span> {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Rates and savings"
            description={serviceData.rates.overview}
            centered={false}
            maxWidth="3xl"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {serviceData.rates.tiers.map((tier, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{tier.title}</p>
                <p className="text-2xl font-semibold text-foreground">{tier.price}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{tier.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground">Current promos</h3>
            <ul className="mt-4 space-y-3">
              {serviceData.rates.promos.map((promo, index) => (
                <li key={index} className="text-base text-muted-foreground leading-relaxed">
                  {promo}
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Rental requirements"
            description="Prepare these documents and details ahead of time to make vehicle release quick and easy."
            centered={false}
            maxWidth="3xl"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceData.requirements.map((item, index) => (
              <li key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            {serviceData.content.requirementsNotes.map((note, index) => (
              <p key={index} className="text-base text-muted-foreground leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </SectionContainer>

        <ServiceFAQ service={serviceData} />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
