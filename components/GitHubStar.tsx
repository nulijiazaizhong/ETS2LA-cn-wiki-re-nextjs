'use client'

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function GitHubStar() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          'https://api.github.com/repos/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist'
        )
        if (response.ok) {
          const data = await response.json()
          setStars(data.stargazers_count)
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error)
      }
    }

    fetchStars()
  }, [])

  const formatStars = (num: number | null) => {
    if (num === null) return ''
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <Link
      href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium"
    >
      <Image
        src="/svg/github.svg"
        alt="GitHub"
        width={20}
        height={20}
        className={theme === 'dark' ? 'dark:invert' : ''}
      />
      {stars !== null && <span>{formatStars(stars)}</span>}
    </Link>
  )
}
