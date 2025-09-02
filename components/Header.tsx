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
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import GitHubStar from "./GitHubStar"
import { useTheme } from "next-themes"
import ImageZoom from "./ImageZoom"

export default function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [serverStatus, setServerStatus] = useState("loading")
  const [lastChecked, setLastChecked] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    
    // 检查服务器状态
    const checkServerStatus = async () => {
      try {
        // 使用 fetch 获取徽章状态
        const response = await fetch('https://uptime.ets2la.cn/api/badge/ets2la/status')
        if (response.ok) {
          // 如果能成功获取徽章，说明服务器在线
          setServerStatus("up")
        } else {
          setServerStatus("down")
        }
      } catch (error) {
        // 如果发生错误，设置为 down
        setServerStatus("down")
      }
      
      // 更新最后检查时间
      setLastChecked(new Date())
    }
    
    // 立即检查一次
    checkServerStatus()
    
    // 设置定时器，每分钟检查一次
    const intervalId = setInterval(checkServerStatus, 60000)
    
    // 清理函数
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 border-b shadow-sm">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">
                <Image
                  src="/imgs/ets2la-cn.ico"
                  alt="Home"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
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
              <Link href="/status">服务器状态</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/author">作者</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/sponsors">赞助名单</Link>
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
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="https://uptime.ets2la.cn/status/ets2la" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm">
                  <div className={`w-2 h-2 rounded-full ${serverStatus === "up" ? "bg-green-500" : serverStatus === "down" ? "bg-red-500" : "bg-gray-500"}`} />
                  国内镜像服务状态
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <p>最新更新时间：{lastChecked.toLocaleString('zh-CN')}</p>
              </HoverCardContent>
            </HoverCard>
            <ThemeToggle />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Image
                    src="/svg/alipay.svg"
                    alt="Sponsor"
                    width={24}
                    height={24}
                    className={`h-6 w-6 ${
                      resolvedTheme === "dark" ? "invert" : ""
                    }`}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">赞助</h4>
                    <p className="text-sm text-muted-foreground">
                      您的支持可以帮助我们更好的更新
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-1 items-center gap-4">
                      <span className="col-span-1">赞助项目 (Tumppi066)</span>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Link
                            href="https://ko-fi.com/Tumppi066"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-1"
                          >
                            <div className="flex flex-col items-center gap-2">
                              <Image
                                src="/imgs/ko-fi.png"
                                alt="Ko-fi"
                                width={200}
                                height={50}
                              />
                              <p className="text-sm text-muted-foreground">
                                Ko-fi
                              </p>
                            </div>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <p>在 Ko-fi 上赞助原作者 Tumppi066</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                      <span className="col-span-1">
                        赞助镜像 (晚安)
                      </span>
                      <div className="grid grid-cols-2 items-start gap-4">
                        <HoverCard>
                          <HoverCardTrigger>
                            <div className="flex flex-col items-center gap-2">
                              <ImageZoom
                                src="/imgs/support.png"
                                alt="Support QR Code"
                                width={80}
                                height={80}
                              />
                              <p className="text-sm text-muted-foreground">
                                扫码赞助(点击放大)
                              </p>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            <p>扫描二维码赞助镜像提供者</p>
                          </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Link
                              href="https://afdian.com/a/wanan855694144"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col items-center gap-2"
                            >
                              <Image
                                src="/imgs/afdian.png"
                                alt="Afdian"
                                width={80}
                                height={80}
                              />
                              <p className="text-sm text-muted-foreground">
                                爱发电
                              </p>
                            </Link>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            <p>在爱发电上赞助镜像提供者</p>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                      <span className="col-span-1">额外说明</span>
                      <p className="text-sm text-muted-foreground">
                        如果你无法打开ko-fi，你也可以赞助镜像提供者由镜像提供者转赠作者，此情况只能使用扫码支付并直接在备注中填写邮箱为回执联系方式（最低3欧，换算汇率为26人民币左右；可多付不可少付）
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <GitHubStar />
            <Link
              href="https://ets2la.com/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/discord.svg"
                alt="Discord"
                width={20}
                height={20}
                className={`h-5 w-5 ${
                  resolvedTheme === "dark" ? "invert" : ""
                }`}
              />
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
