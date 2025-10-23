"use client"

import React, { useEffect, useRef } from 'react'

export default function RevealOnScroll({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        // once visible, unobserve to avoid toggling
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={`reveal ${className}`.trim()}>
            {children}
        </div>
    )
}
