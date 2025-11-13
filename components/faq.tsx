"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cuál es el horario de check-in y check-out?",
    answer:
      "El check-in es a partir de las 15:00 y el check-out hasta las 10:00. Podemos gestionar horarios especiales según disponibilidad. Consulta con nosotros para coordinar.",
  },
  {
    question: "¿Se aceptan mascotas?",
    answer:
      "Sí, aceptamos mascotas. Hay un cargo adicional de $500 por mascota por noche. Las mascotas deben estar vacunadas y sanas.",
  },
  {
    question: "¿La piscina está habilitada todo el año?",
    answer:
      "La piscina funciona de noviembre a marzo (temporada de calor). Fuera de esa temporada suele estar cubierta, pero contáctanos para consultar.",
  },
  {
    question: "¿Cómo se realiza la reserva?",
    answer:
      "Puedes hacer la reserva completando el formulario en nuestra web, enviándonos un WhatsApp o llamando directamente. Te confirmaremos disponibilidad y tarifas en 24 horas.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, tarjeta de crédito y débito (con recargo del 3%), y efectivo. Se requiere un adelanto del 30% para confirmar la reserva.",
  },
  {
    question: "¿Hay servicio de limpieza durante la estadía?",
    answer:
      "Se ofrece un servicio de limpieza básico diario. La limpieza profunda se realiza al final de la estadía. Servicios adicionales se pueden solicitar con costo extra.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-foreground/60">Resolvemos tus dudas antes de reservar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-muted transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && <div className="px-6 pb-6 bg-muted/30 text-foreground/70">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
