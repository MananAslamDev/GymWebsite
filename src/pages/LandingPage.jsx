"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TransformSection from "@/components/transform-section"
import ServicesSection from "@/components/services-section"
import GymSection from "@/components/gym-section"
import LocationSection from "@/components/location-section"
import MerchandiseSection from "@/components/merchandise-section"
import MembershipSection from "@/components/membership-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TransformSection />
        <ServicesSection />
        <GymSection />
        <LocationSection />
        <MerchandiseSection />
        <MembershipSection />
      </main>
      <Footer />
    </div>
  )
}
