import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María y Juan",
    date: "Octubre 2024",
    rating: 5,
    text: "Fue la luna de miel que siempre soñamos. Limpieza impecable, atención excelente y un descanso total. Volvemos seguro.",
  },
  {
    name: "Patricia García",
    date: "Agosto 2024",
    rating: 5,
    text: "Las cabañas son hermosas, el entorno es espectacular y los dueños muy atentos. Perfecto para familias. Nuestros hijos disfrutaron mucho.",
  },
  {
    name: "Carlos López",
    date: "Julio 2024",
    rating: 5,
    text: "Desconexión total garantizada. Las instalaciones están bien cuidadas, la piscina es magnífica y las parrillas son excelentes para disfrutar en grupo.",
  },
  {
    name: "Ana y Pablo",
    date: "Setiembre 2024",
    rating: 5,
    text: "Un verdadero refugio en la naturaleza. Nos encantó todo: las vistas, el silencio, la calidez del lugar. Recomendamos sin dudarlo.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Opiniones de Huéspedes</h2>
          <p className="text-lg text-foreground/60">Lo que dicen quienes ya nos visitaron</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/60">{testimonial.date}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="text-foreground/70 italic">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-foreground mb-2">4.9 / 5.0</p>
          <p className="text-foreground/60">Basado en 47 reseñas verificadas</p>
        </div>
      </div>
    </section>
  )
}
