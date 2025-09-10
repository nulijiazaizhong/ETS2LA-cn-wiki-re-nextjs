'use client'

import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: '无法安装',
    href: '/docs/bug/Unable-install',
    description: '解决ETS2LA安装过程中遇到的各种问题',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '无法启动',
    href: '/docs/bug/Unable-start',
    description: '解决ETS2LA启动失败的问题',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '不工作',
    href: '/docs/bug/Not-working',
    description: '解决ETS2LA运行但功能不正常的问题',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '崩溃',
    href: '/docs/bug/crashes',
    description: '解决ETS2LA运行时崩溃的问题',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '远程连接',
    href: '/docs/bug/Remote-connection',
    description: '解决远程连接相关的问题',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function BugPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">问题总结</Typography>
      <Typography variant="p">
        该章节总结了使用ETS2LA过程中可能遇到的各种问题及其解决方案。请根据您遇到的具体问题选择相应的章节查看。
      </Typography>

      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <p className="font-bold">提示</p>
        </div>
        <p className="mt-2">
          在查看问题解决方案之前，请确保您已经按照基础章节正确安装和配置了ETS2LA。大部分问题都是由于安装不完整或配置错误导致的。
        </p>
      </div>

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