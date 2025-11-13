import { Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                ER
              </div>
              <span className="font-bold text-lg">Cabañas El Refugio</span>
            </div>
            <p className="text-sm text-primary-foreground/70">Tu refugio en la naturaleza, todo el año.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#cabanas"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Nuestras Cabañas
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Tarifas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+543755123456"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +54 (3755) 123-456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@cabanasrefugio.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@cabanasrefugio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/70">Lunes a Viernes 9-18hs</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© {currentYear} Cabañas El Refugio. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
