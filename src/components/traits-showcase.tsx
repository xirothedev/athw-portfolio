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
    <section id="traits" className="py-20 px-4 bg-linear-to-b from-background to-primary/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 flex items-center justify-center gap-2">
            <Star className="w-5 h-5" />
            Things I Love About Her
          </p>
          <h2 className="font-display text-5xl text-foreground">Her Traits & Talents</h2>
          <p className="text-foreground/70 text-lg mt-4">These are just some reasons why she&apos;s amazing</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {traits.map((trait, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.05 }} className="group">
              <div className="bg-card border-2 border-accent/20 rounded-2xl p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{trait.name}</h3>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="hidden group-hover:block"
                  >
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${trait.level}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-linear-to-r ${trait.color}`}
                  ></motion.div>
                </div>

                <p className="text-right text-sm text-foreground/70 mt-2 font-semibold">{trait.level}%</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
