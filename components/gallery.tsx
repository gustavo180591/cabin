"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    url: "/cabin-interior-bedroom.jpg",
    alt: "Interior de cabaña",
  },
  {
    url: "/swimming-pool-nature.jpg",
    alt: "Piscina del complejo",
  },
  {
    url: "/sunset-forest-landscape.jpg",
    alt: "Atardecer en la naturaleza",
  },
  {
    url: "/campfire-gathering-family.jpg",
    alt: "Fogón y reuniones",
  },
  {
    url: "/breakfast-outdoor-patio.jpg",
    alt: "Desayuno al aire libre",
  },
  {
    url: "/cabin-exterior-wooden.jpg",
    alt: "Exterior de cabaña",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galería</h2>
          <p className="text-lg text-foreground/60">Visualiza la belleza de nuestro complejo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Carousel for remaining images */}
        <div className="relative bg-background rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={images[currentIndex].url || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors z-10"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/40 hover:bg-primary/60"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
