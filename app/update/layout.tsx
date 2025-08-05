'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
  TableOfContentsProvider,
  useTableOfContents,
} from '@/contexts/TableOfContentsContext'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Typography } from '@/components/Typography'

function LeftSidebar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <Typography variant="h4" className="mb-4">
          更新日历
        </Typography>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
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

export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TableOfContentsProvider>
      <div className="relative flex flex-row flex-grow">
        <aside
          className="
        w-80 flex-shrink-0
        sticky top-0
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
