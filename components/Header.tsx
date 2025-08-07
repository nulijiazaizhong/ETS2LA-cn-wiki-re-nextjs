"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { MountainIcon } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./ui/button"
import GitHubStar from "./GitHubStar"
import { useTheme } from "next-themes"

export default function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
              <Link href="/author">作者</Link>
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
        {mounted && (
          <>
            <ThemeToggle />
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">赞助镜像</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <Image
                  src="/imgs/support.png"
                  alt="Support"
                  width={200}
                  height={200}
                />
              </HoverCardContent>
            </HoverCard>
            <GitHubStar />
            <Link
              href="https://ets2la.com/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/discord.svg"
                alt="Discord"
                width={20}
                height={20}
                className={`h-5 w-5 ${
                  resolvedTheme === "dark" ? "invert" : ""
                }`}
              />
            </Link>
            <Link
              href="https://ko-fi.com/Tumppi066"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/ko-fi.svg"
                alt="Ko-fi"
                width={24}
                height={24}
                className={`h-6 w-6 ${
                  resolvedTheme === "dark" ? "invert" : ""
                }`}
              />
              <span className="ml-2">赞助</span>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
