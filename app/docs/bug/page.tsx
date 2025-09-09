'use client'

import { Typography } from '@/components/Typography'
import Link from 'next/link'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function BugPage() {
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
      <Typography variant="h1">问题总结</Typography>
      <Typography variant="p">
        这里总结了使用过程中可能遇到的问题。请从左侧导航栏选择具体的子页面查看。
      </Typography>
      <ul>
        <li>
          <Link href="/docs/bug/Unable-start">无法启动相关问题</Link>
        </li>
        <li>
          <Link href="/docs/bug/Not-working">不工作</Link>
        </li>
        <li>
          <Link href="/docs/bug/crashes">崩溃</Link>
        </li>
      </ul>
    </div>
  )
}
