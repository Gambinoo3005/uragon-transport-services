import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionContainer } from "@/components/ui/content-grid"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["136 Purok 2 Sta. Teresa", "Malilipot, Albay 4510, Philippines"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+63 915 923 4867", "Available for calls and WhatsApp"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@uragontransport.com", "bookings@uragontransport.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Sunday: 7:00 AM - 7:00 PM", "24/7 Road Assistance Available"],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
        <p className="text-muted-foreground text-pretty">
          We're always ready to help you with your car rental needs. Reach out through any of these channels for bookings, inquiries, or support.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}
