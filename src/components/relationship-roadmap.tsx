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
    title: `${new Date().getDate()} ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`,
    date: "March 2025",
    description: "The days we spend together",
  },
]

export default function RelationshipRoadmap() {
  return (
    <section
      id="roadmap"
      className="from-background via-accent/5 to-background bg-linear-to-b px-4 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary mb-2 font-semibold">📍 Our Journey</p>
          <h2 className="font-display text-foreground text-5xl">Relationship Roadmap</h2>
          <p className="text-foreground/70 mt-4 text-lg">
            Milestones of our high school love story
          </p>
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
                className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot and line */}
                <div className="hidden shrink-0 flex-col items-center md:flex">
                  <motion.div
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
                    className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br text-white shadow-lg"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  {i < milestones.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      transition={{ delay: i * 0.2 + 0.6, duration: 0.8 }}
                      className="from-primary via-accent to-secondary mt-4 w-1 bg-linear-to-b"
                    ></motion.div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border-primary/20 flex-1 rounded-2xl border-2 p-6 shadow-lg transition-shadow hover:shadow-xl md:p-8"
                >
                  <div className="mb-4 flex items-center gap-3 md:hidden">
                    <div className="from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-foreground text-lg font-semibold">{milestone.title}</h3>
                  </div>
                  <h3 className="font-display text-foreground mb-2 hidden text-2xl md:block">
                    {milestone.title}
                  </h3>
                  <p className="text-accent mb-2 font-semibold">{milestone.date}</p>
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
