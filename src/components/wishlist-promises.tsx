"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Heart, Check } from "lucide-react"

const wishes = [
  { title: "Pass Our Final Exams", description: "Graduate with flying colors", emoji: "📚" },
  { title: "University Together", description: "Go to the same college", emoji: "🎓" },
  { title: "Trip to Dalat", description: "Explore the beautiful mountains", emoji: "⛰️" },
  { title: "Watch Our Favorite Movie Series", description: "All movies back-to-back", emoji: "🎬" },
  { title: "Stargazing Night", description: "Under the stars, just us", emoji: "⭐" },
  { title: "Cook Dinner Together", description: "Learn to make our favorite dish", emoji: "🍳" },
  { title: "Meet Each Other&apos;s Families", description: "Big family dinner", emoji: "👨‍👩‍👧‍👦" },
  { title: "Travel Abroad", description: "Our dream vacation", emoji: "✈️" },
]

export default function WishlistPromises() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="wishlist" className="py-20 px-4 bg-linear-to-b from-primary/10 via-background to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            Our Dreams
          </p>
          <h2 className="font-display text-5xl text-foreground mb-4">Wishlist & Promises</h2>
          <p className="text-foreground/70 text-lg">Things we want to do together before graduation and beyond</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => toggleCheck(i)}
              className="group cursor-pointer"
            >
              <div
                className={`relative p-5 rounded-2xl border-2 transition-all ${checkedItems.includes(i)
                  ? "bg-primary/30 border-primary shadow-lg"
                  : "bg-card border-secondary/30 hover:border-secondary/50"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <AnimatePresence>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${checkedItems.includes(i)
                        ? "bg-primary border-primary"
                        : "border-secondary/50 group-hover:border-secondary"
                        }`}
                    >
                      {checkedItems.includes(i) && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{wish.emoji}</span>
                      <h3
                        className={`font-semibold ${checkedItems.includes(i) ? "line-through text-foreground/50" : "text-foreground"}`}
                      >
                        {wish.title}
                      </h3>
                    </div>
                    <p className={`text-sm ${checkedItems.includes(i) ? "text-foreground/40" : "text-foreground/60"}`}>
                      {wish.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-r from-primary/20 to-secondary/20 border-2 border-accent/30 rounded-2xl p-8">
            <p className="font-display text-2xl text-foreground mb-2">✨ Forever & Always ✨</p>
            <p className="text-foreground/70">
              No matter what, I promise to be by your side and support all your dreams. You&apos;re not just my
              girlfriend—you&apos;re my best friend, my inspiration, and the love of my life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
