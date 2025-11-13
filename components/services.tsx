import { Wifi, Droplets, Flame, Car, Bed, PawPrint } from "lucide-react"

const services = [
  {
    icon: Wifi,
    title: "WiFi en todo el complejo",
    description: "Conexión rápida y confiable",
  },
  {
    icon: Droplets,
    title: "Piscina al aire libre",
    description: "Disponible en temporada",
  },
  {
    icon: Flame,
    title: "Parrillas individuales",
    description: "Asados para disfrutar",
  },
  {
    icon: Car,
    title: "Estacionamiento incluido",
    description: "Dentro del predio",
  },
  {
    icon: Bed,
    title: "Ropa de cama y toallas",
    description: "Limpias y de calidad",
  },
  {
    icon: PawPrint,
    title: "Aceptamos mascotas",
    description: "Tu compañero es bienvenido",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Servicios y Comodidades</h2>
          <p className="text-lg text-foreground/60">Todo lo que necesitas para una estadía perfecta</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/60">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
