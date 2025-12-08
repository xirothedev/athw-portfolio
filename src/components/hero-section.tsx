"use client"
import { motion } from "motion/react"
import { Heart, ArrowDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-linear-to-b from-background via-primary/20 to-background flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-accent font-semibold text-lg"
            >
              ✨ Hi there!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl text-foreground leading-tight"
            >
              I&apos;m <span className="text-primary">Katii</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-foreground/80 font-light"
            >
              The main character of Xiro&apos;s heart.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-foreground/70 text-lg max-w-sm"
          >
            Class of 2025 • Dreamer • Foodie • Forever optimistic
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 192, 203, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              <Heart className="w-5 h-5" />
              See Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Decorative frame */}
            <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-3xl shadow-2xl"></div>
            <div className="absolute inset-2 bg-background rounded-3xl overflow-hidden">
              <Image
                width={0}
                height={0}
                src="/hero-image.jpeg"
                alt="Katii - Main Character"
                className="w-full h-full object-cover"
                sizes="100vw"
              />
            </div>

            {/* Floating hearts */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-10 -right-10"
            >
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-10 -left-10"
            >
              <Heart className="w-8 h-8 text-accent fill-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-accent" />
      </motion.div>
    </section>
  )
}
