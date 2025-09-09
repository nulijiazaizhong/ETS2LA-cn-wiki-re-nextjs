'use client'

import { Typography } from '@/components/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

const articles = [
  {
    title: '地图数据提取',
    href: '/docs/advanced/map-data-extraction',
    description: '提取自己喜欢的地图数据',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '插件开发',
    href: '/docs/advanced/plugins-development',
    description: '手把手教你开发ETS2LA插件',
    icon: <FileText className="w-6 h-6" />,
  },
]

export default function AdvancedPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6')
    );

    const toc = headingElements.map((heading) => {
      const level = parseInt(heading.tagName.substring(1), 10);
      return {
        id: heading.id,
        level: level,
        text: heading.textContent || '',
      };
    });

    setToc(toc);
  }, [setToc]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">进阶</Typography>
      <Typography variant="p">
        该章节将会教你如何提取自己想到的地图数据以及如何开发自己的插件来扩展ETS2LA的功能。
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
