"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const menuItems = [
    { label: "Inicio", id: "hero" },
    { label: "Cabañas", id: "cabanas" },
    { label: "Servicios", id: "services" },
    { label: "Galería", id: "gallery" },
    { label: "Tarifas", id: "pricing" },
    { label: "Reservas", id: "reservation" },
    { label: "Ubicación", id: "location" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            ER
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">Cabañas El Refugio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-2">
          <Button variant="outline" onClick={() => scrollToSection("reservation")}>
            Reservar
          </Button>
          <a href="https://wa.me/549" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90">WhatsApp</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 space-y-2 border-t border-border">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() => scrollToSection("reservation")}
              >
                Reservar
              </Button>
              <a href="https://wa.me/549" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90">WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
