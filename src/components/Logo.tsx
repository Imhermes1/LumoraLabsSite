import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  href?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10 sm:w-12 sm:h-12',
  lg: 'w-16 h-16 sm:w-20 sm:h-20',
  xl: 'w-24 h-24 sm:w-32 sm:h-32'
}

const textSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl sm:text-3xl',
  xl: 'text-3xl sm:text-4xl'
}

export default function Logo({ 
  size = 'md', 
  showText = true, 
  className,
  href = '/',
  onClick
}: LogoProps) {
  const LogoContent = (
    <div className={cn(
      'flex items-center space-x-3 group',
      onClick && 'cursor-pointer',
      className
    )}>
      <div className={cn(
        'relative transition-transform duration-200 group-hover:scale-105',
        sizeClasses[size]
      )}>
        <Image
          src="/images/Lumora_logo_new.png"
          alt="Lumora Labs"
          fill
          className="object-contain drop-shadow-sm"
          priority
          sizes="(max-width: 640px) 32px, (max-width: 768px) 48px, 64px"
        />
      </div>
      {showText && (
        <span className={cn(
          'font-bold text-white group-hover:text-lumora-purple/90 transition-colors duration-200',
          textSizes[size]
        )}>
          Lumora Labs
        </span>
      )}
    </div>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="focus:outline-none">
        {LogoContent}
      </button>
    )
  }

  if (href) {
    return (
      <Link href={href} className="focus:outline-none">
        {LogoContent}
      </Link>
    )
  }

  return LogoContent
} 
