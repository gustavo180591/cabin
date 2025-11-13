import Header from "@/components/header"
import Hero from "@/components/hero"
import Cabanas from "@/components/cabanas"
import Services from "@/components/services"
import Experience from "@/components/experience"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ReservationForm from "@/components/reservation-form"
import Location from "@/components/location"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Cabanas />
        <Services />
        <Experience />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ReservationForm />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
