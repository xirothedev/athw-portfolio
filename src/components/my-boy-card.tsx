"use client"
import { motion } from "motion/react"
import { Heart, Smile } from "lucide-react"
import Image from "next/image"

export default function MyBoyCard() {
  return (
    <section id="about" className="py-20 px-4 bg-linear-to-b from-primary/10 to-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold mb-2">💫 The Boy</p>
          <h2 className="font-display text-5xl text-foreground">Who Loves Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="relative group"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-linear-to-br from-accent to-secondary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

          {/* Main card */}
          <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile image */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative mx-auto w-64 h-64">
                <div className="absolute inset-0 bg-linear-to-br from-accent to-primary rounded-3xl shadow-xl overflow-hidden">
                  <Image width={0} height={0} src="/xiro-image.png" alt="Xiro" className="w-full h-full object-cover" sizes="100vw" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-primary/50 rounded-3xl"
                ></motion.div>
              </motion.div>

              {/* Info section */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-4xl text-foreground mb-2">Xiro</h3>
                  <p className="text-accent font-semibold text-lg">Software Developer</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Code Wizard</p>
                      <p className="text-foreground/60">Building beautiful websites and apps for us</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smile className="w-5 h-5 text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Tech Support</p>
                      <p className="text-foreground/60">Fixing all my tech problems with a smile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Official ATM</p>
                      <p className="text-foreground/60">Always funding my bubble tea adventures</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-linear-to-r from-primary to-secondary text-foreground rounded-full font-semibold"
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
