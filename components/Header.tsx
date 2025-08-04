"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MountainIcon, GitForkIcon } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 border-b shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Home</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs/Introduction">文档</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/update">更新日志</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">关于</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:underline"
        >
          <GitForkIcon className="h-5 w-5" />
          <span>GitHub</span>
        </Link>
      </div>
    </header>
  )
}
