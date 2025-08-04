'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface TocItem {
  id: string
  level: number
  text: string
}

interface TableOfContentsContextType {
  toc: TocItem[]
  setToc: React.Dispatch<React.SetStateAction<TocItem[]>>
}

const TableOfContentsContext = createContext<TableOfContentsContextType | undefined>(
  undefined
)

export function TableOfContentsProvider({ children }: { children: ReactNode }) {
  const [toc, setToc] = useState<TocItem[]>([])
  return (
    <TableOfContentsContext.Provider value={{ toc, setToc }}>
      {children}
    </TableOfContentsContext.Provider>
  )
}

export function useTableOfContents() {
  const context = useContext(TableOfContentsContext)
  if (context === undefined) {
    throw new Error(
      'useTableOfContents must be used within a TableOfContentsProvider'
    )
  }
  return context
}
