"use client"
import { motion } from "motion/react"
import { Heart, ArrowDown } from "lucide-react"
import Image from "next/image"

function TypingText({ text, className }: { text: string; className?: string }) {
  const letters = text.split("")

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 1 + index * 0.15,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="from-background via-primary/20 to-background relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b px-4 py-20"
    >
      {/* Decorative circles */}
      <div className="bg-accent/30 absolute top-20 right-10 h-40 w-40 rounded-full blur-3xl"></div>
      <div className="bg-secondary/30 absolute bottom-20 left-10 h-40 w-40 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
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
              className="text-accent text-lg font-semibold"
            >
              ✨ Hi there!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-foreground text-5xl leading-tight md:text-6xl"
            >
              I&apos;m{" "}
              <span className="drop-shadow-md" style={{ color: "oklch(0.65 0.12 350)" }}>
                <TypingText text="Katii~" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-foreground/80 text-2xl font-light md:text-3xl"
            >
              The main character of Xiro&apos;s heart.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-foreground/70 max-w-sm text-lg"
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
              onClick={() =>
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-foreground hover:bg-secondary flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-colors"
            >
              <Heart className="h-5 w-5" />
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
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Decorative frame */}
            <div className="from-primary to-secondary absolute inset-0 rounded-3xl bg-linear-to-br shadow-2xl"></div>
            <div className="bg-background absolute inset-2 overflow-hidden rounded-3xl">
              <Image
                width={0}
                height={0}
                src="/hero-image.jpeg"
                alt="Katii - Main Character"
                className="h-full w-full object-cover"
                sizes="100vw"
              />
            </div>

            {/* Floating hearts */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-10 -right-10"
            >
              <Heart className="text-primary fill-primary h-12 w-12" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-10 -left-10"
            >
              <Heart className="text-accent fill-accent h-8 w-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="text-accent h-6 w-6" />
      </motion.div>
    </section>
  )
}
