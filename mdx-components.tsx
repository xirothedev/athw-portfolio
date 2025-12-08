import Link from "next/link"
import type { ReactNode, ComponentPropsWithoutRef } from "react"

type MDXComponents = {
  [key: string]: React.ComponentType<ComponentPropsWithoutRef<any>>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <h1 className="font-display text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0" {...(props as Record<string, unknown>)}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <h2 className="font-display text-3xl font-semibold text-foreground mb-4 mt-8" {...(props as Record<string, unknown>)}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <h3 className="font-display text-2xl font-semibold text-foreground mb-3 mt-6" {...(props as Record<string, unknown>)}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <h4 className="font-display text-xl font-semibold text-foreground mb-2 mt-4" {...(props as Record<string, unknown>)}>
        {children}
      </h4>
    ),
    p: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <p className="text-foreground/80 mb-4 leading-relaxed" {...(props as Record<string, unknown>)}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }: { href?: string; children?: ReactNode;[key: string]: unknown }) => {
      if (href?.startsWith("/")) {
        return (
          <Link href={href} className="text-primary hover:text-accent underline transition-colors" {...(props as Record<string, unknown>)}>
            {children}
          </Link>
        )
      }
      if (href?.startsWith("http")) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent underline transition-colors" {...(props as Record<string, unknown>)}>
            {children}
          </a>
        )
      }
      return (
        <a href={href} className="text-primary hover:text-accent underline transition-colors" {...(props as Record<string, unknown>)}>
          {children}
        </a>
      )
    },
    ul: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/80" {...(props as Record<string, unknown>)}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/80" {...(props as Record<string, unknown>)}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <li className="text-foreground/80" {...(props as Record<string, unknown>)}>
        {children}
      </li>
    ),
    code: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...(props as Record<string, unknown>)}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...(props as Record<string, unknown>)}>
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }: { children?: ReactNode;[key: string]: unknown }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-4" {...(props as Record<string, unknown>)}>
        {children}
      </blockquote>
    ),
    ...components,
  }
}

