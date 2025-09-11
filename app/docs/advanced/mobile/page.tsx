import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: '浏览器',
    href: '/docs/advanced/移动设置访问/firefox',
    description: '使用自带方案在其他设备查看环境可视化',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '第三方',
    href: '/docs/advanced/移动设置访问/third',
    description: '通过安装第三方软件在其他设备查看环境可视化',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function MobileSettingsAccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">移动设置访问</Typography>
      <Typography variant="p">
        本节介绍如何在移动设备上访问和配置ETS2LA-CN的相关设置。
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
      
      {children}
    </div>
  )
}