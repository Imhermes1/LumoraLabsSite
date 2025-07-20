import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num)
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    const navHeight = 80 // Navigation height
    const targetPosition = element.offsetTop - navHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}
