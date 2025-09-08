'use client'

import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: '基础使用',
    href: '/docs/base/usage/basic',
    description: '前面的文章我们已经成功的完成了ETS2LA的安装，接下来我们就来...',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '插件介绍',
    href: '/docs/base/usage/plugins',
    description: '这篇文章会以表格的形式来介绍ETS2LA插件管理页面中的所有插件...',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '页面介绍',
    href: '/docs/base/usage/pages',
    description: '尽可能详细的介绍每个页面/每个按钮的作用',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function UsagePage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">使用</Typography>
      <Typography variant="p">
        该章节将会从基本使用-页面介绍-插件介绍-设置带你使用ETS2LA.
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
