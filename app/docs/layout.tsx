'use client'

import {
  TableOfContentsProvider,
  useTableOfContents,
} from '@/contexts/TableOfContentsContext'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Typography } from '@/components/Typography'
import React, { useEffect, useRef, useState } from 'react'
import {
  expandAllFeature,
  hotkeysCoreFeature,
  searchFeature,
  selectionFeature,
  syncDataLoaderFeature,
  TreeState,
} from '@headless-tree/core'
import { useTree } from '@headless-tree/react'
import {
  CircleXIcon,
  FileIcon,
  FilterIcon,
  FolderIcon,
  FolderOpenIcon,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tree, TreeItem, TreeItemLabel } from '@/components/tree'
import { useRouter } from 'next/navigation'

interface NavItem {
  name: string
  children?: string[]
  path?: string
}

const navItems: Record<string, NavItem> = {
  root: {
    name: 'Documentation',
    children: ['intro', 'base', 'bug', 'advanced', 'develop'],
  },
  intro: {
    name: '简介',
    path: '/docs/Introduction',
  },
  base: {
    name: '基础',
    path: '/docs/base',
    children: ['prepare', 'install', 'usage'],
  },
  prepare: { name: '准备工作', path: '/docs/base/prepare' },
  install: { name: '安装', path: '/docs/base/install' },
  usage: {
    name: '使用',
    path: '/docs/base/usage',
    children: ['usage-basic', 'usage-plugins', 'usage-pages'],
  },
  'usage-basic': {
    name: '基础使用',
    path: '/docs/base/usage/basic',
  },
  'usage-plugins': {
    name: '插件介绍',
    path: '/docs/base/usage/plugins',
  },
  'usage-pages': {
    name: '页面介绍',
    path: '/docs/base/usage/pages',
  },
  bug: {
    name: '问题总结',
    path: '/docs/bug',
    children: [
      'unable-install',
      'unable-start',
      'not-working',
      'game-crashes',
      'remote-connection',
    ],
  },
  'unable-install': {
    name: '无法安装',
    path: '/docs/bug/Unable-install',
  },
  'unable-start': {
    name: '无法启动',
    path: '/docs/bug/Unable-start',
  },
  'not-working': {
    name: '不工作',
    path: '/docs/bug/Not-working',
  },
  'game-crashes': {
    name: '崩溃',
    path: '/docs/bug/crashes',
  },
  'remote-connection': {
    name: '远程连接',
    path: '/docs/bug/Remote-connection',
  },
  advanced: {
    name: '进阶',
    path: '/docs/advanced',
    children: ['firefox', 'third'],
  },
  firefox: {
    name: '浏览器',
    path: '/docs/advanced/firefox',
  },
  third: {
    name: '第三方软件',
    path: '/docs/advanced/third',
  },
  develop: {
    name: '开发',
    path: '/docs/develop',
    children: ['map-data-extraction', 'plugins-development'],
  },
  'map-data-extraction': {
    name: '地图数据提取',
    path: '/docs/develop/map-data-extraction',
  },
  'plugins-development': {
    name: '插件开发',
    path: '/docs/develop/plugins-development',
  },
}

const indent = 20

function SidebarNav() {
  const router = useRouter()
  const initialExpandedItems = ['base', 'usage', 'bug']
  const [state, setState] = useState<Partial<TreeState<NavItem>>>({})
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const tree = useTree<NavItem>({
    state,
    setState,
    initialState: {
      expandedItems: initialExpandedItems,
    },
    indent,
    rootItemId: 'root',
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => navItems[itemId],
      getChildren: (itemId) => navItems[itemId].children ?? [],
    },
    features: [
      syncDataLoaderFeature,
      hotkeysCoreFeature,
      selectionFeature,
      searchFeature,
      expandAllFeature,
    ],
  })

  useEffect(() => {
    if (state.selectedItems && state.selectedItems.length > 0) {
      const selectedId = state.selectedItems[0]
      const itemData = navItems[selectedId]
      if (itemData && itemData.path) {
        router.push(itemData.path)
      }
    }
  }, [state.selectedItems, router])

  const handleClearSearch = () => {
    setSearchValue('')
    const searchProps = tree.getSearchInputElementProps()
    if (searchProps.onChange) {
      const syntheticEvent = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>
      searchProps.onChange(syntheticEvent)
    }
    setState((prevState) => ({
      ...prevState,
      expandedItems: initialExpandedItems,
    }))
    setFilteredItems([])
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.value = ''
    }
  }

  const [filteredItems, setFilteredItems] = useState<string[]>([])

  const shouldShowItem = (itemId: string) => {
    if (!searchValue || searchValue.length === 0) return true
    return filteredItems.includes(itemId)
  }

  useEffect(() => {
    if (!searchValue || searchValue.length === 0) {
      setFilteredItems([])
      return
    }
    const allItems = tree.getItems()
    const directMatches = allItems
      .filter((item) =>
        item.getItemName().toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((item) => item.getId())
    const parentIds = new Set<string>()
    directMatches.forEach((matchId) => {
      let item = tree.getItems().find((i) => i.getId() === matchId)
      while (item?.getParent && item.getParent()) {
        const parent = item.getParent()
        if (parent) {
          parentIds.add(parent.getId())
          item = parent
        } else {
          break
        }
      }
    })
    const childrenIds = new Set<string>()
    directMatches.forEach((matchId) => {
      const item = tree.getItems().find((i) => i.getId() === matchId)
      if (item && item.isFolder()) {
        const getDescendants = (itemId: string) => {
          const children = navItems[itemId]?.children || []
          children.forEach((childId) => {
            childrenIds.add(childId)
            if (navItems[childId]?.children?.length) {
              getDescendants(childId)
            }
          })
        }
        getDescendants(item.getId())
      }
    })
    setFilteredItems([
      ...directMatches,
      ...Array.from(parentIds),
      ...Array.from(childrenIds),
    ])
    const currentExpandedItems = tree.getState().expandedItems || []
    const folderIdsToExpand = allItems
      .filter((item) => item.isFolder())
      .map((item) => item.getId())
    setState((prevState) => ({
      ...prevState,
      expandedItems: [
        ...new Set([...currentExpandedItems, ...folderIdsToExpand]),
      ],
    }))
  }, [searchValue, tree])

  return (
    <div className="flex h-full flex-col gap-2 *:nth-2:grow">
      <div className="relative">
        <Input
          ref={inputRef}
          className="peer ps-9"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value
            setSearchValue(value)
            const searchProps = tree.getSearchInputElementProps()
            if (searchProps.onChange) {
              searchProps.onChange(e)
            }
            if (value.length > 0) {
              tree.expandAll()
            } else {
              setState((prevState) => ({
                ...prevState,
                expandedItems: initialExpandedItems,
              }))
              setFilteredItems([])
            }
          }}
          onBlur={(e) => {
            e.preventDefault()
            if (searchValue && searchValue.length > 0) {
              const searchProps = tree.getSearchInputElementProps()
              if (searchProps.onChange) {
                const syntheticEvent = {
                  target: { value: searchValue },
                } as React.ChangeEvent<HTMLInputElement>
                searchProps.onChange(syntheticEvent)
              }
            }
          }}
          type="search"
          placeholder="Filter items..."
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <FilterIcon className="size-4" aria-hidden="true" />
        </div>
        {searchValue && (
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear search"
            onClick={handleClearSearch}
          >
            <CircleXIcon className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <Tree indent={indent} tree={tree}>
        {searchValue && filteredItems.length === 0 ? (
          <p className="px-3 py-4 text-center text-sm">
            No items found for ”{searchValue}“
          </p>
        ) : (
          tree.getItems().map((item) => {
            const isVisible = shouldShowItem(item.getId())
            if (!isVisible) return null
            return (
              <TreeItem
                key={item.getId()}
                item={item}
                className="data-[visible=false]:hidden"
              >
                <TreeItemLabel>
                  <span className="flex items-center gap-2">
                    {item.isFolder() ? (
                      item.isExpanded() ? (
                        <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                      ) : (
                        <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                      )
                    ) : (
                      <FileIcon className="text-muted-foreground pointer-events-none size-4" />
                    )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            )
          })
        )}
      </Tree>
    </div>
  )
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
      <div className="relative flex flex-row flex-grow">
        <aside
          className="
        w-64 flex-shrink-0
        sticky top-0 h-screen
        border-r
        lg:block
      "
        >
          <LeftSidebar />
        </aside>

        <main className="flex-grow">
          <div className="prose dark:prose-invert max-w-none p-8">
            {children}
          </div>
        </main>

        <aside
          className="
        w-64 flex-shrink-0
        sticky top-0 h-screen
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
