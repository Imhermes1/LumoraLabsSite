'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hoverScale?: number
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hoverScale = 1.02
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      whileHover={{
        scale: hoverScale,
        y: -4,
        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
