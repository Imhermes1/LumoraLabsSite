import { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
  containerClassName?: string
}

export default function PageShell({ children, containerClassName = 'max-w-6xl' }: PageShellProps) {
  return (
    <div className={`mx-auto px-4 py-12 sm:px-6 lg:px-8 ${containerClassName}`}>
      {children}
    </div>
  )
}
