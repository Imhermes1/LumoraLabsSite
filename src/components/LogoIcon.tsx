import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

export default function LogoIcon({ 
  size = 'md', 
  className,
  href,
  onClick
}: LogoIconProps) {
  const IconContent = (
    <div className={cn(
      'relative transition-transform duration-200 hover:scale-105',
      sizeClasses[size],
      onClick && 'cursor-pointer',
      className
    )}>
      <Image
        src="/images/Lumora-Labs-Logo-transparent.png"
        alt="Lumora Labs"
        fill
        className="object-contain drop-shadow-sm"
        priority
        sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, 48px"
      />
    </div>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="focus:outline-none">
        {IconContent}
      </button>
    )
  }

  if (href) {
    return (
      <Link href={href} className="focus:outline-none">
        {IconContent}
      </Link>
    )
  }

  return IconContent
} 