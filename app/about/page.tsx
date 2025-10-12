import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { PageHero } from "@/components/ui/hero-components"
import { SectionContainer, SectionHeader, StandardGrid } from "@/components/ui/content-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContentCard } from "@/components/ui/content-card"
import { Shield, Eye, Heart, CheckCircle, Clock, DollarSign, Users, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Uragon Transport Services | Unlock your journey, travel anywhere",
  description:
    "Learn about Uragon Transport Services, your trusted car rental partner in Bicol. We offer affordable rates with unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.",
  keywords: "Uragon Transport Services, Bicol car rental company, self drive rental, unlimited mileage, affordable car rental, Philippines",
}

const storyDescription = `Uragon was founded by Jerome Brofas Sombra and Mia Angela Ramos—Bicolanos who believed car rental should feel straightforward and neighborly. From day one, they set a simple standard: well-maintained, insured vehicles and service that treats every customer like a local friend.

Starting in Malilipot, they built the company through word-of-mouth—serving airport runs, family trips, corporate errands, and special occasions—growing one smooth, stress-free journey at a time.`

const values = [
  {
    icon: Shield,
    title: "Reliability, First and Always",
    description: "Every vehicle is prepared with care; every booking is handled with clarity.",
  },
  {
    icon: Eye,
    title: "Transparency in Every Step",
    description: "Clear rates, clear rules, no surprises.",
  },
  {
    icon: CheckCircle,
    title: "Safety as a Habit",
    description: "Preventive maintenance, insured units, and responsible guidance for every trip.",
  },
  {
    icon: Heart,
    title: "Local Pride, Local Care",
    description: "We're part of the community we serve—rooted in Bicol, supporting local livelihoods.",
  },
  {
    icon: Clock,
    title: "Responsiveness That Matters",
    description: "Quick answers, helpful options, and calm solutions when plans change.",
  },
  {
    icon: DollarSign,
    title: "Value Without Compromise",
    description: "Fair pricing and flexible arrangements that respect your time and budget.",
  },
]

const promisePoints = [
  "Insured, well-maintained vehicles ready for Bicol's roads",
  "Straightforward policies with honest, friendly support",
  "Local expertise to help you navigate every route and schedule"
]

const teamMembers = [
  {
    name: "Mia Angela Ramos",
    role: "Co-Founder & CEO",
    image: "/placeholder-user.jpg",
    bio: "Mia co-founded Uragon Transport Services with a vision to provide reliable and affordable car rental services in the Bicol region. Her leadership and passion for customer satisfaction drive our commitment to excellence.",
  },
  {
    name: "Jerome Brofas Sombra",
    role: "Co-Founder & Operations Director",
    image: "/placeholder-user.jpg",
    bio: "Jerome brings his expertise in business operations and operational efficiency to Uragon Transport Services. He ensures that every client receives exceptional service and that our fleet operates at the highest standards.",
  },
]

const milestones = [
  "Founded in Malilipot, Albay and proudly serving the Bicol Region",
  "Built on referrals from families, OFWs, corporate teams, and event planners",
  "Focused on stress-free rentals—from airport runs to custom tours"
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="About Uragon Transport Services"
          highlight="Uragon"
          description="A locally founded car rental company based in Malilipot, Albay—serving travelers, families, and businesses across the Bicol Region."
        />

        <SectionContainer background="default" padding="xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] items-start">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary">Built by Bicolanos</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{storyDescription}</p>
              <ul className="space-y-3">
                {milestones.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <p className="text-xl font-bold text-primary italic">"Unlock your journey, travel anywhere."</p>
                <p className="text-sm text-muted-foreground mt-2">Our guiding line since day one</p>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border/40 shadow-sm">
                <img
                  src="/mayon_hero.jpg"
                  alt="Bicol region landscape with Mayon Volcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Mission & Vision"
            description="A clear promise to the community we serve and the travelers we support."
            maxWidth="4xl"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver safe, seamless, and transparent mobility across Bicol by providing well-maintained vehicles, straightforward policies, and responsive support—so customers can focus on the journey, not the logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted mobility partner in the Bicol Region, known for dependable vehicles, genuine local service, and a customer experience that sets the benchmark for provincial car rentals in the Philippines.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="What We Stand For"
            description="These principles guide every decision we make and every interaction we have with our customers."
            maxWidth="3xl"
          />

          <StandardGrid variant="3col" gap="lg">
            {values.map((value) => (
              <ContentCard
                key={value.title}
                type="benefit"
                icon={value.icon}
                title={value.title}
                description={value.description}
                variant="default"
                className="text-center p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              />
            ))}
          </StandardGrid>
        </SectionContainer>

        <SectionContainer background="muted/30" padding="xl">
          <SectionHeader
            title="Our Promise"
            description="When you book with Uragon, you get more than a vehicle—you get a steady partner for your trip."
            maxWidth="4xl"
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr] items-start">
            <Card className="p-8 shadow-md">
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We'll keep the details simple, the car dependable, and the support human. Expect honest communication, responsive coordination, and a team that treats every traveler like family.
                </p>
                <p>
                  Whether you need a vehicle for a quick city errand, a week-long business trip, or a once-in-a-lifetime celebration, we're here to make every step feel effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl">What that means day-to-day</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {promisePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-primary-foreground/90">
                      <CheckCircle className="h-5 w-5 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>

        <SectionContainer background="default" padding="xl">
          <SectionHeader
            title="Meet Our Founders"
            description="Built by Bicolanos for Bicolanos—and for guests discovering the region."
            maxWidth="4xl"
          />

          <StandardGrid variant="2col" gap="lg">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border border-border/40 shadow-sm">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </StandardGrid>
        </SectionContainer>

        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
