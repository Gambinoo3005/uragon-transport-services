import { TeamSection } from "@/components/ui/section-components"

const teamMembers = [
  {
    name: "Mia Angela Ramos",
    role: "Co-Founder & CEO",
    image: "/placeholder-user.jpg",
    bio:
      "Mia co-founded Uragon Transport Services with a vision to provide reliable and affordable car rental services in the Bicol region. Her leadership and passion for customer satisfaction drive our commitment to excellence.",
  },
  {
    name: "Jerome Brofas Sombra",
    role: "Co-Founder & Operations Director",
    image: "/placeholder-user.jpg",
    bio:
      "Jerome brings his expertise in business operations and operational efficiency to Uragon Transport Services. He ensures that every client receives exceptional service and that our fleet operates at the highest standards.",
  },
]

export function AboutTeam() {
  return (
    <TeamSection
      title="Meet Our Founders"
      description="Built by Bicolanos for Bicolanos—and for guests discovering the region"
      members={teamMembers}
      background="default"
      maxWidth="6xl"
    />
  )
}
