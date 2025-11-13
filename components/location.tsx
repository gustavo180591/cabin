import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Ubicación</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-foreground/60">
                    Ruta Provincial 8, km 45
                    <br />
                    Provincia de Misiones, Argentina
                  </p>
                  <p className="text-sm text-foreground/50 mt-2">A 45 minutos de Oberá · Acceso pavimentado</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <a href="tel:+543755123456" className="text-primary hover:underline">
                    +54 (3755) 123-456
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@cabanasrefugio.com" className="text-primary hover:underline">
                    info@cabanasrefugio.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horarios de atención</h3>
                  <p className="text-foreground/60">
                    Lunes a Viernes: 9:00 - 18:00
                    <br />
                    Sábados, Domingos y Feriados: 10:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Abrir en Google Maps
            </Button>
          </div>

          {/* Map / Image */}
          <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
            <img src="/map-showing-location-coordinates.jpg" alt="Mapa de ubicación" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Cabañas El Refugio</p>
              <p className="text-xs text-foreground/60">Misiones, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
