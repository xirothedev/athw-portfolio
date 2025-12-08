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
      className="sticky top-0 z-50 backdrop-blur-md bg-primary/30 border-b border-accent/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 font-display text-2xl text-foreground"
        >
          <Heart className="w-6 h-6 fill-primary" />
          <span>My Muse</span>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
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
