const teamMembers = [
  {
    name: "Mia Angela Ramos",
    role: "Co-Founder & CEO",
    image: "/placeholder-user.jpg",
    description:
      "Mia co-founded Uragon Transport Services with a vision to provide reliable and affordable car rental services in the Bicol region. Her leadership and passion for customer satisfaction drive our commitment to excellence.",
  },
  {
    name: "Jerome Brofas Sombra",
    role: "Co-Founder & Operations Director",
    image: "/placeholder-user.jpg",
    description:
      "Jerome brings his expertise in business operations and operational efficiency to Uragon Transport Services. He ensures that every client receives exceptional service and that our fleet operates at the highest standards.",
  },
]

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Meet Our Founders</h2>
            <p className="text-xl text-muted-foreground text-pretty">Built by Bicolanos for Bicolanos—and for guests discovering the region</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-8">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-background"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{member.name}</h3>
                <div className="text-primary font-medium mb-6 text-lg">{member.role}</div>
                <p className="text-muted-foreground text-base text-pretty leading-relaxed max-w-sm mx-auto">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
