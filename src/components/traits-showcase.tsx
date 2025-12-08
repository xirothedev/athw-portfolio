"use client"
import { motion } from "motion/react"
import { Star } from "lucide-react"

const traits = [
  { name: "Super Cute", level: 100, color: "from-primary to-pink-400" },
  { name: "Math Genius", level: 95, color: "from-accent to-blue-300" },
  { name: "Movie Critic", level: 90, color: "from-secondary to-purple-300" },
  { name: "Best Hugs", level: 100, color: "from-primary to-rose-300" },
  { name: "Smart & Kind", level: 100, color: "from-accent to-cyan-300" },
  { name: "Foodie Heart", level: 95, color: "from-secondary to-amber-300" },
]

export default function TraitsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="traits" className="from-background to-primary/10 bg-linear-to-b px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary mb-2 flex items-center justify-center gap-2 font-semibold">
            <Star className="h-5 w-5" />
            Things I Love About Her
          </p>
          <h2 className="font-display text-foreground text-5xl">Her Traits & Talents</h2>
          <p className="text-foreground/70 mt-4 text-lg">
            These are just some reasons why she&apos;s amazing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-card border-accent/20 hover:border-accent/50 rounded-2xl border-2 p-6 transition-colors">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-foreground text-lg font-semibold">{trait.name}</h3>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="hidden group-hover:block"
                  >
                    <Star className="text-primary fill-primary h-5 w-5" />
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="bg-muted h-3 w-full overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${trait.level}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-linear-to-r ${trait.color}`}
                  ></motion.div>
                </div>

                <p className="text-foreground/70 mt-2 text-right text-sm font-semibold">
                  {trait.level}%
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
