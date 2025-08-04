'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { TreeView, type TreeDataItem } from '@/components/tree-view'
import { File, Folder } from 'lucide-react'
import { Typography } from '@/components/Typography'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  TableOfContentsProvider,
  useTableOfContents,
} from '@/contexts/TableOfContentsContext'

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
          onClick: () => router.push('/docs'),
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

function DynamicTableOfContents() {
  const { toc } = useTableOfContents()

  if (toc.length === 0) {
    return null
  }

  return (
    <div className="p-4">
      <Typography variant="h4">本页目录</Typography>
      <ul className="mt-4 space-y-2">
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
            <a
              href={`#${item.id}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TableOfContentsProvider>
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel defaultSize={20}>
          <SidebarNav />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="p-6 h-full overflow-y-auto">{children}</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20}>
          <DynamicTableOfContents />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TableOfContentsProvider>
  )
}
