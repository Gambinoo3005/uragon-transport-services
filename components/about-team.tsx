const teamMembers = [
  {
    name: "Juan Uragon",
    role: "Founder & CEO",
    image: "/team-juan-uragon.jpg",
    description:
      "Juan founded Uragon Tours with a vision to provide reliable car rentals in Bicol. A local expert with 15+ years in tourism.",
  },
  {
    name: "Maria Uragon",
    role: "Operations Manager",
    image: "/team-maria-uragon.jpg",
    description:
      "Maria ensures smooth operations and exceptional customer service. She handles bookings and customer relations.",
  },
  {
    name: "Carlos Santos",
    role: "Fleet Manager",
    image: "/team-carlos-santos.jpg",
    description:
      "Carlos maintains our fleet to the highest standards. His expertise ensures every vehicle is safe and reliable.",
  },
  {
    name: "Ana Reyes",
    role: "Customer Service Lead",
    image: "/team-ana-reyes.jpg",
    description:
      "Ana leads our customer service team, ensuring every traveler has an exceptional experience with Uragon Tours.",
  },
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground text-pretty">The passionate people behind Uragon Tours</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground text-sm text-pretty">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
