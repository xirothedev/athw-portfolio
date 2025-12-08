"use client"
import { motion } from "motion/react"
import { Heart, Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-linear-to-t from-primary/10 to-background border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-foreground/70">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <p className="text-sm">
              Made with love by{" "}
              <a
                href="https://www.xirothedev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                xirothedev
              </a>
            </p>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} xirothedev. All rights reserved.
            </p>
            <Link
              href="/license"
              className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-primary transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              Source Code & License
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

