import type { Metadata } from "next"
import Link from "next/link"
import { Github, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "License & Copyright",
  description: "License and copyright information for this portfolio",
}

export default function LicenseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-none">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <Link
            href="https://github.com/xirothedev/athw-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            <Github className="w-5 h-5" />
            View Source Code on GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

