"use client"
import { motion } from "motion/react"
import { Heart, Smile } from "lucide-react"
import Image from "next/image"

export default function MyBoyCard() {
  return (
    <section id="about" className="from-primary/10 to-background bg-linear-to-b px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-accent mb-2 font-semibold">💫 The Boy</p>
          <h2 className="font-display text-foreground text-5xl">Who Loves Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          {/* Decorative background */}
          <div className="from-accent to-secondary absolute inset-0 rounded-3xl bg-linear-to-br opacity-30 blur-xl transition-opacity group-hover:opacity-50"></div>

          {/* Main card */}
          <div className="bg-card border-primary/30 relative rounded-3xl border-2 p-8 shadow-2xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Profile image */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative mx-auto h-64 w-64">
                <div className="from-accent to-primary absolute inset-0 overflow-hidden rounded-3xl bg-linear-to-br shadow-xl">
                  <Image
                    width={0}
                    height={0}
                    src="/xiro-image.png"
                    alt="Xiro"
                    className="h-full w-full object-cover"
                    sizes="100vw"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="border-primary/50 absolute -inset-4 rounded-3xl border-2 border-dashed"
                ></motion.div>
              </motion.div>

              {/* Info section */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-foreground mb-2 text-4xl">Xiro</h3>
                  <p className="text-accent text-lg font-semibold">Software Developer</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="text-primary mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">Code Wizard</p>
                      <p className="text-foreground/60">
                        Building beautiful websites and apps for us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smile className="text-secondary mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">Tech Support</p>
                      <p className="text-foreground/60">Fixing all my tech problems with a smile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-accent mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold">Gift Giver</p>
                      <p className="text-foreground/60">Always giving me so many special gifts</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="from-primary to-secondary text-foreground w-full rounded-full bg-linear-to-r px-6 py-3 font-semibold"
                >
                  💕 My Favorite Person
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
