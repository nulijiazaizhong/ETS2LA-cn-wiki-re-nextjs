'use client'

import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Folder } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: '准备工作',
    href: '/docs/base/prepare',
    description: '完成安装ETS2LA之前的准备工作',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '安装',
    href: '/docs/base/install',
    description: '手把手教你安装ETS2LA',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '使用',
    href: '/docs/base/usage',
    description: '3 个项目 | 介绍如何使用ETS2LA',
    icon: <Folder className="w-6 h-6" />,
  },
  {
    title: '问题总结',
    href: '/docs/base/bug',
    description: '总结了可能遇到的问题以及解决方案',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function BasePage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">基础</Typography>
      <Typography variant="p">
        该章节将会教你从下载-安装-配置等全流程的教你使用ETS2LA.
      </Typography>

      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link href={article.href} key={article.href} className="no-underline">
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {article.icon}
                  <CardTitle className="m-0">{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
