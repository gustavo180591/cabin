"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1200&width=1920&query=cabin in forest nature landscape)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance leading-tight">
          Tu refugio en la naturaleza, todo el año
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
          Cabañas totalmente equipadas para descansar, desconectarte y disfrutar
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
            onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
          >
            Consultar disponibilidad
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <a href="https://wa.me/549" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="text-lg bg-white/90 hover:bg-white text-foreground">
              Hablar por WhatsApp
            </Button>
          </a>
        </div>

        <p className="text-white/80 text-sm md:text-base">Ideal para parejas y familias · A 45 minutos de la ciudad</p>
      </div>
    </section>
  )
}
