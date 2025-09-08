'use client'

import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: '浏览器',
    href: '/docs/advanced/firefox',
    description: '使用自带方案在其他设备查看环境可视化',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '第三方',
    href: '/docs/advanced/third',
    description: '通过安装第三方软件在其他设备查看环境可视化',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function AdvancedPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">进阶</Typography>
      <Typography variant="p">
        该章节将会教你如何如何使用手机/平板查看ETS2LA的页面。
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {articles.map((article) => (
          <Link href={article.href} key={article.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {article.icon}
                  <CardTitle>{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
