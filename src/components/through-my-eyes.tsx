"use client"
import { motion } from "motion/react"
import { Camera } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    quote: "You are my today and all of my tomorrows.",
    image: "/gallary/gallary-1.jpg",
  },
  {
    quote: "In your smile, I see something more beautiful than the stars.",
    image: "/gallary/gallary-2.png",
  },
  {
    quote: "Every moment with you is a memory I want to keep forever.",
    image: "/gallary/gallary-3.jpg",
  },
  {
    quote: "You are the reason I believe in love.",
    image: "/gallary/gallary-4.jpg",
  },
  {
    quote: "Being with you feels like home.",
    image: "/gallary/gallary-5.jpg",
  },
  {
    quote: "You make my heart skip a beat, every single day.",
    image: "/gallary/gallary-6.jpg",
  },
]

export default function ThroughMyEyesGallery() {
  return (
    <section id="gallery" className="from-background to-primary/10 bg-linear-to-b px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-accent mb-2 flex items-center justify-center gap-2 font-semibold">
            <Camera className="h-5 w-5" />
            Through My Eyes
          </p>
          <h2 className="font-display text-foreground mb-4 text-5xl">A Gallery of Her</h2>
          <p className="text-foreground/70 mx-auto max-w-2xl text-lg">
            Moments I&apos;ve captured of the girl who makes my heart skip. Each photo tells a story
            of why she&apos;s so special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl"
            >
              <div className="bg-secondary relative h-80 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  width={0}
                  height={0}
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.quote}
                  sizes="100vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Quote info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <p className="font-display text-foreground text-center text-lg italic">
                  &quot;{photo.quote}&quot;
                </p>
                <p className="text-accent mt-2 text-center text-sm font-medium">
                  📸 Captured by Me
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
