import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const cabanas = [
  {
    id: 1,
    name: "Cabaña para 2",
    capacity: "Hasta 2 personas",
    badge: "Ideal parejas",
    amenities: ["Cocina equipada", "Aire acondicionado", "Parrilla", "WiFi", "Cochera"],
    image: "/cozy-cabin-bedroom-for-couple.jpg",
  },
  {
    id: 2,
    name: "Cabaña Familiar",
    capacity: "Hasta 4 personas",
    badge: "Más elegida",
    amenities: ["Cocina equipada", "Aire acondicionado", "Parrilla", "WiFi", "Cochera"],
    image: "/family-cabin-living-room.jpg",
  },
  {
    id: 3,
    name: "Cabaña Premium",
    capacity: "Hasta 6 personas",
    badge: "Lujo",
    amenities: ["Cocina equipada", "Aire acondicionado", "Parrilla", "WiFi", "Cochera"],
    image: "/luxury-cabin-with-hot-tub.jpg",
  },
]

export default function Cabanas() {
  return (
    <section id="cabanas" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Las Cabañas</h2>
          <p className="text-lg text-foreground/60">Descubre nuestras opciones diseñadas para tu comodidad</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cabanas.map((cabana) => (
            <Card key={cabana.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={cabana.image || "/placeholder.svg"}
                  alt={cabana.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {cabana.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{cabana.badge}</Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{cabana.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{cabana.capacity}</p>

                <div className="mb-6 space-y-2">
                  {cabana.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {amenity}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Ver detalles</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
