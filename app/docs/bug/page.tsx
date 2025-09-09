'use client'

import { Typography } from '@/components/Typography'
import Link from 'next/link'

export default function BugPage() {
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
      </ul>
    </div>
  )
}
