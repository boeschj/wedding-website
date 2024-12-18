'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Places To Stay', href: '/places-to-stay' },
  { name: 'RSVP', href: '/rsvp' },
  { name: 'Photos', href: '/photos' },
  { name: 'Details', href: '/details' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="w-full border-b border-[#E2E8F0] bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center">
          <div className="flex">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                      : 'border-transparent text-[var(--color-text-light)] hover:border-[var(--color-primary)] hover:text-[var(--color-text)]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

