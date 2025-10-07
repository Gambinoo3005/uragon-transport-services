import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCTABanner } from "@/components/booking-cta-banner"
import { StickyBookButton } from "@/components/sticky-book-button"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogNewsletter } from "@/components/blog-newsletter"

export const metadata: Metadata = {
  title: "Travel Blog | Car Rental Tips & Bicol Travel Guides | Uragon Transport Services",
  description:
    "Discover the best of Bicol with our travel guides, car rental tips, and local insights. Plan your perfect trip with expert advice from Uragon Transport Services.",
  keywords: "Bicol travel guide, car rental tips, Philippines travel, Mayon Volcano, Legazpi travel, Albay tourism, self drive rental",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
        <BlogNewsletter />
        <BookingCTABanner />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  )
}
