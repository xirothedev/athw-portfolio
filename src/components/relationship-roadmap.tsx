"use client"
import { motion } from "motion/react"
import { Heart, MessageCircle, Calendar, Sparkles } from "lucide-react"

const milestones = [
  {
    icon: MessageCircle,
    title: "First Message",
    date: "13 April 2025",
    description: "A simple hello that changed everything",
  },
  {
    icon: Heart,
    title: "First Date",
    date: "15 April 2025",
    description: "Coffee and conversations after school",
  },
  {
    icon: Calendar,
    title: "First Meet",
    date: "September 8, 2025",
    description: "The day we first met ✨",
  },
  {
    icon: Sparkles,
    title: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
    date: "March 2024",
    description: "The days we spend together",
  },
]

export default function RelationshipRoadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 bg-linear-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">📍 Our Journey</p>
          <h2 className="font-display text-5xl text-foreground">Relationship Roadmap</h2>
          <p className="text-foreground/70 text-lg mt-4">Milestones of our high school love story</p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, i) => {
            const Icon = milestone.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex gap-8 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot and line */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <motion.div
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                    className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  {i < milestones.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      transition={{ delay: i * 0.2 + 0.6, duration: 0.8 }}
                      className="w-1 bg-linear-to-b from-primary via-accent to-secondary mt-4"
                    ></motion.div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{milestone.title}</h3>
                  </div>
                  <h3 className="hidden md:block font-display text-2xl text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-accent font-semibold mb-2">{milestone.date}</p>
                  <p className="text-foreground/70">{milestone.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
