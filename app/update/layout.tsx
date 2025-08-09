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
  //有更新的日期
  const updateDates = ['2025-08-04', '2025-08-08','2025-08-09']

  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const dateString = formatDate(selectedDate)
      if (updateDates.includes(dateString)) {
        setDate(selectedDate)
        const element = document.getElementById(dateString)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <Typography variant="h4" className="mb-4">
          更新日历
        </Typography>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
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
      <div className="relative flex flex-row min-h-screen">
        <aside className="w-80 flex-shrink-0 border-r hidden lg:block sticky top-16 h-[calc(100vh-4rem)]">
          <LeftSidebar />
        </aside>

        <main className="flex-grow overflow-y-auto">{children}</main>

        <aside className="w-64 flex-shrink-0 border-l hidden xl:block sticky top-16 h-[calc(100vh-4rem)]">
          <RightSidebar />
        </aside>
      </div>
    </TableOfContentsProvider>
  )
}
