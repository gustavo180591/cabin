import { Button } from "@/components/ui/button"
import { MapPin, Compass } from "lucide-react"

const attractions = [
  { distance: "5 km", name: "Río del Valle" },
  { distance: "12 km", name: "Miradores Panorámicos" },
  { distance: "20 km", name: "Pueblos Históricos" },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Experiencia y Entorno</h2>
            <p className="text-lg text-foreground/60 mb-6 leading-relaxed">
              Ubicadas en el corazón de la naturaleza, nuestras cabañas te rodean de bosques frondosos, aire puro y
              vistas que te cautivan. El entorno es perfecto para desconectarte de la ciudad y conectar con lo que
              realmente importa.
            </p>

            <div className="mb-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Actividades cercanas:</h3>
              <ul className="space-y-3">
                {[
                  "Caminatas por senderos naturales",
                  "Pesca deportiva",
                  "Paseos en bicicleta",
                  "Cabalgatas",
                  "Avistamiento de fauna",
                ].map((activity) => (
                  <li key={activity} className="flex items-center gap-3 text-foreground/70">
                    <Compass className="w-5 h-5 text-accent flex-shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Atractivos cercanos:</h3>
              <div className="grid gap-3">
                {attractions.map((attraction) => (
                  <div key={attraction.name} className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{attraction.distance}</p>
                      <p className="text-sm text-foreground/60">{attraction.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Planificar tu estadía</Button>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
            <img
              src="/mountain-valley-landscape-sunset.jpg"
              alt="Entorno natural de Cabañas El Refugio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
