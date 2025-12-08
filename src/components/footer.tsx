"use client"
import { motion } from "motion/react"
import { Heart, Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="from-primary/10 to-background border-primary/20 border-t bg-linear-to-t px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <div className="text-foreground/70 flex items-center justify-center gap-2">
            <Heart className="text-primary fill-primary h-4 w-4" />
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
            <Heart className="text-primary fill-primary h-4 w-4" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="text-foreground/50 text-xs">
              © {new Date().getFullYear()} xirothedev. All rights reserved.
            </p>
            <Link
              href="/license"
              className="text-foreground/70 hover:text-primary inline-flex items-center gap-1.5 text-xs transition-colors"
            >
              <Code className="h-3.5 w-3.5" />
              Source Code & License
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
