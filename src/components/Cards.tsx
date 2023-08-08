'use client'
import { ElementType } from 'react'
import { useRouter } from 'next/navigation'

interface CardProps {
  icon: ElementType
  title?: string
  buttonText: string
  subtitle?: string
  onClick?: () => void
}

export function Cards({
  title,
  buttonText,
  subtitle,
  icon: Icon,
  onClick,
}: CardProps) {
  return (
    <div className="max-w-sm mx-auto mt-8 bg-pink-500 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-zinc-50 flex items-center">
          <Icon className="text-white text-4xl mr-4" />
          <h1>{title}</h1>
        </div>
        <p className="text-zinc-50 font-bold text-base shadow-md">
          {' '}
          {subtitle}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button
          className="bg-zinc-50 text-gray-950 font-bold py-2 px-4 rounded-full shadow-md"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
