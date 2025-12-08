import type { Metadata } from "next"
import Link from "next/link"
import { Github, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "License & Copyright",
  description: "License and copyright information for this portfolio",
}

export default function LicenseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/"
          className="text-foreground/70 hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-none">{children}</div>

        <div className="border-primary/20 mt-12 border-t pt-8">
          <Link
            href="https://github.com/xirothedev/athw-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors"
          >
            <Github className="h-5 w-5" />
            View Source Code on GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
