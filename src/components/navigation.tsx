"use client"
import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function Navigation() {
  const navItems = [
    { label: "Our Story", href: "#hero" },
    { label: "Through My Eyes", href: "#gallery" },
    { label: "My Boy", href: "#about" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Her Traits", href: "#traits" },
    { label: "Wishes", href: "#wishlist" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary/30 border-accent/20 sticky top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="font-display text-foreground flex items-center gap-2 text-2xl"
        >
          <Heart className="fill-primary h-6 w-6" />
          <span>My Muse</span>
        </motion.div>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
