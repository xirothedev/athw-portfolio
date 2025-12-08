"use client"
import { motion } from "motion/react"
import HeroSection from "@/components/hero-section"
import ThroughMyEyesGallery from "@/components/through-my-eyes"
import MyBoyCard from "@/components/my-boy-card"
import RelationshipRoadmap from "@/components/relationship-roadmap"
import TraitsShowcase from "@/components/traits-showcase"
import WishlistPromises from "@/components/wishlist-promises"
import Navigation from "@/components/navigation"
import FloatingDoodles from "@/components/floating-doodles"
import Footer from "@/components/footer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <motion.main variants={container} initial="hidden" animate="show" className="relative w-full overflow-x-hidden">
      <FloatingDoodles />
      <Navigation />
      <HeroSection />
      <ThroughMyEyesGallery />
      <MyBoyCard />
      <RelationshipRoadmap />
      <TraitsShowcase />
      <WishlistPromises />
      <Footer />
    </motion.main>
  )
}
