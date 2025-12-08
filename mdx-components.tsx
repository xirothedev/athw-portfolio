import Link from "next/link"
import type { ReactNode, ComponentPropsWithoutRef, ElementType } from "react"

type MDXComponents = {
  [key: string]: React.ComponentType<ComponentPropsWithoutRef<ElementType>>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <h1
        className="font-display text-foreground mt-8 mb-6 text-4xl font-bold first:mt-0"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <h2
        className="font-display text-foreground mt-8 mb-4 text-3xl font-semibold"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <h3
        className="font-display text-foreground mt-6 mb-3 text-2xl font-semibold"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <h4
        className="font-display text-foreground mt-4 mb-2 text-xl font-semibold"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <p
        className="text-foreground/80 mb-4 leading-relaxed"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </p>
    ),
    a: ({
      href,
      children,
      ...props
    }: {
      href?: string
      children?: ReactNode
      [key: string]: unknown
    }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={href}
            className="text-primary hover:text-accent underline transition-colors"
            {...(props as Record<string, unknown>)}
          >
            {children}
          </Link>
        )
      }
      if (href?.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent underline transition-colors"
            {...(props as Record<string, unknown>)}
          >
            {children}
          </a>
        )
      }
      return (
        <a
          href={href}
          className="text-primary hover:text-accent underline transition-colors"
          {...(props as Record<string, unknown>)}
        >
          {children}
        </a>
      )
    },
    ul: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <ul
        className="text-foreground/80 mb-4 list-inside list-disc space-y-2"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <ol
        className="text-foreground/80 mb-4 list-inside list-decimal space-y-2"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <li className="text-foreground/80" {...(props as Record<string, unknown>)}>
        {children}
      </li>
    ),
    code: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <code
        className="bg-muted text-foreground rounded px-1.5 py-0.5 font-mono text-sm"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <pre
        className="bg-muted mb-4 overflow-x-auto rounded-lg p-4"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => (
      <blockquote
        className="border-primary text-foreground/70 my-4 border-l-4 pl-4 italic"
        {...(props as Record<string, unknown>)}
      >
        {children}
      </blockquote>
    ),
    ...components,
  }
}
