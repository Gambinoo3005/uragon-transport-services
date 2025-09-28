import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Uragon Transport Services - Unlock your journey, travel anywhere",
  description:
    "We offer affordable rates. Unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.",
  generator: "v0.app",
  keywords: "car rental Bicol, Legazpi airport transfer, Naga car rental, Bicol tour packages, chauffeur service, self drive rental, bridal service, tour packages",
  openGraph: {
    title: "Uragon Transport Services - Unlock your journey, travel anywhere",
    description:
      "We offer affordable rates. Unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uragon Transport Services - Unlock your journey, travel anywhere",
    description:
      "We offer affordable rates. Unlimited mileage for self drive rentals. Safe, secure and clean units for every clients' convenience.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
