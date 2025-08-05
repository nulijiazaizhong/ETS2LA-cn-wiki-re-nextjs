"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeSwitcher } from "@/components/ui/kibo-ui/theme-switcher"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <ThemeSwitcher
      defaultValue={theme as 'light' | 'dark' | 'system'}
      onChange={(value) => {
        if (value)
          setTheme(value as 'light' | 'dark' | 'system')
      }}
    />
  )
}
