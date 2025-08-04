'use client'

import { TreeView, type TreeDataItem } from '@/components/tree-view'
import { File, Folder } from 'lucide-react'
import { Typography } from '@/components/Typography'
import { useRouter } from 'next/navigation'
import {
  TableOfContentsProvider,
  useTableOfContents,
} from '@/contexts/TableOfContentsContext'
import { ScrollArea } from '@/components/ui/scroll-area'

function SidebarNav() {
  const router = useRouter()

  const treeData: TreeDataItem[] = [
    {
      id: '0',
      name: '简介',
      icon: File,
      onClick: () => router.push('/docs/Introduction'),
    },
    {
      id: '1',
      name: '基础',
      icon: Folder,
      onClick: () => router.push('/docs/base'),
      children: [
        {
          id: '1-1',
          name: '准备工作',
          icon: File,
          onClick: () => router.push('/docs/base/prepare'),
        },
        {
          id: '1-2',
          name: '安装',
          icon: File,
          onClick: () => router.push('/docs/base/install'),
        },
        {
          id: '1-3',
          name: '使用',
          icon: Folder,
          onClick: () => router.push('/docs/base/usage'),
          children: [
            {
              id: '1-3-1',
              name: '基础使用',
              icon: File,
              onClick: () => router.push('/docs/base/usage/basic'),
            },
            {
              id: '1-3-2',
              name: '插件介绍',
              icon: File,
              onClick: () => router.push('/docs/base/usage/plugins'),
            },
            {
              id: '1-3-3',
              name: '页面介绍',
              icon: File,
              onClick: () => router.push('/docs/base/usage/pages'),
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '功能',
      icon: Folder,
      children: [
        {
          id: '2-1',
          name: '插件',
          icon: File,
        },
      ],
    },
  ]

  return <TreeView data={treeData} initialSelectedItemId="0" />
}

function LeftSidebar() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <Typography variant="h4" className="mb-4">
          文档导航
        </Typography>
        <SidebarNav />
      </div>
    </ScrollArea>
  )
}

function RightSidebar() {
  const { toc } = useTableOfContents()

  if (toc.length === 0) {
    return null
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <Typography variant="h4" className="mb-4">
          本页目录
        </Typography>
        <ul className="space-y-2 text-sm">
          {toc.map((item) => (
            <li
              key={item.id}
              style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
            >
              <a
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  )
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TableOfContentsProvider>
      <div className="relative flex flex-row min-h-screen">
        <aside
          className="
        w-64 flex-shrink-0
        sticky top-0
        h-screen
        border-r
        hidden lg:block
      "
        >
          <LeftSidebar />
        </aside>

        <main className="flex-grow">{children}</main>

        <aside
          className="
        w-64 flex-shrink-0
        sticky top-0
        h-screen
        border-l
        hidden xl:block
      "
        >
          <RightSidebar />
        </aside>
      </div>
    </TableOfContentsProvider>
  )
}
