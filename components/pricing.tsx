import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const seasons = [
  {
    season: "Temporada Baja",
    price: "$2,500",
    description: "Abril a Junio, Septiembre a Octubre",
    features: ["Ideal para parejas", "Descuentos especiales", "Grupos reducidos"],
  },
  {
    season: "Temporada Media",
    price: "$3,800",
    description: "Marzo, Julio, Noviembre",
    features: ["Mejor disponibilidad", "Clima agradable", "Actividades variadas"],
  },
  {
    season: "Temporada Alta",
    price: "$5,200",
    description: "Diciembre a Febrero, Feriados",
    features: ["Alta demanda", "Clima perfecto", "Experiencia completa"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tarifas y Promociones</h2>
          <p className="text-lg text-foreground/60">Precios diferenciados según la temporada</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {seasons.map((season) => (
            <Card key={season.season} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{season.season}</h3>
                <p className="text-sm text-foreground/60 mb-6">{season.description}</p>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-primary mb-2">{season.price}</p>
                  <p className="text-sm text-foreground/60">por noche (cabaña doble)</p>
                </div>

                <div className="space-y-4 mb-8">
                  {season.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Consultar tarifa</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿Necesitas más información?</h3>
          <p className="text-foreground/60 mb-6">
            Contáctanos para consultar tarifas especiales para grupos o estadías prolongadas.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Solicitar presupuesto personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
