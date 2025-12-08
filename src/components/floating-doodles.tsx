"use client"
import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function FloatingDoodles() {
  const doodles = [
    { type: "heart", x: 10, y: 20, duration: 20 },
    { type: "sparkle", x: 80, y: 30, duration: 25 },
    { type: "heart", x: 70, y: 70, duration: 30 },
    { type: "sparkle", x: 20, y: 80, duration: 22 },
    { type: "heart", x: 50, y: 10, duration: 28 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {doodles.map((doodle, i) => (
        <motion.div
          key={i}
          className="doodle absolute"
          initial={{ x: `${doodle.x}%`, y: `${doodle.y}%` }}
          animate={{
            x: [`${doodle.x}%`, `${doodle.x + 20}%`, `${doodle.x}%`],
            y: [`${doodle.y}%`, `${doodle.y - 20}%`, `${doodle.y}%`],
          }}
          transition={{
            duration: doodle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {doodle.type === "heart" ? (
            <Heart className="text-primary/20 fill-primary/20 h-12 w-12" />
          ) : (
            <Sparkles className="text-accent/20 fill-accent/20 h-12 w-12" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
