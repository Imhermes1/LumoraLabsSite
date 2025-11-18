'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface MorphIconProps {
  icon: LucideIcon
  className?: string
  containerClassName?: string
}

export default function MorphIcon({ icon: Icon, className = '', containerClassName = '' }: MorphIconProps) {
  return (
    <motion.span
      className={`inline-flex items-center justify-center ${containerClassName}`}
      whileHover={{
        rotate: 12,
        scale: 1.1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{
        scale: 0.95,
        rotate: -12
      }}
    >
      <Icon className={className} />
    </motion.span>
  )
}
