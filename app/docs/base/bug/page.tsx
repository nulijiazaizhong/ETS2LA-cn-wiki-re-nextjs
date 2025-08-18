'use client'

import { Typography } from '@/components/Typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageZoom from '@/components/ImageZoom'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function BugPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'ffmpeg-failed', level: 2, text: '1. ffmpeg下载失败' },
      { id: 'plugin-failed', level: 2, text: '2. 插件无法加载' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">问题总结</Typography>
      <Typography variant="p">
        这里总结了可能遇到的问题以及解决方案。这些问题主要出现在
        <a href="/docs/base/usage/basic">基础使用</a>
        过程中的安装和初次配置阶段，本文档将对此进行详细说明。
      </Typography>

      <Typography variant="h2" id="ffmpeg-failed">1.ffmpeg下载失败</Typography>

      <Typography variant="p">
        如果你在安装完成之后勾选了打开ETS2LA的话你有很大概率会在
        <strong>控制台</strong>
        中看到下面这张图中的内容，这时不要紧张和害怕，有解决办法的
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721084316.png"
        alt="Error message"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p>
          同样，该问题通常在
          <a href="/docs/base/usage/basic#ffmpeg-download-failed">基础使用-消除错误信息-ffmpeg</a>
          过程中出现。
        </p>
      </div>

      <Typography variant="h3" id="plugin-load-failed">2.插件无法加载</Typography>

      <Tabs defaultValue="reason" className="not-prose">
        <TabsList>
          <TabsTrigger value="reason">原因</TabsTrigger>
          <TabsTrigger value="way">办法</TabsTrigger>
        </TabsList>
        <TabsContent value="reason">
          <p>
            因为FFmpeg是从
            <a href="https://www.gyan.dev" target="_blank" rel="noopener noreferrer">
              www.gyan.dev
            </a>
            位于国外的服务器上下载，加上
            <a href="https://www.gyan.dev" target="_blank" rel="noopener noreferrer">
              www.gyan.dev
            </a>
            的服务器回国路线不行，所以会出现断开连接的情况也就进而导致了下载失败，ETS2LA的控制台报错
          </p>
        </TabsContent>
        <TabsContent value="way">
          <p>
            从
            <a href="http://files.ets2la.cn/#/?code=L09E9" target="_blank" rel="noopener noreferrer">
              国内镜像站
            </a>
            下载ffmpeg，然后放到ETS2LA的安装目录下，然后重启ETS2LA即可
          </p>
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="plugin-failed">2.插件无法加载</Typography>

      <Typography variant="p">
        该问题同样主要出现在
        <a href="/docs/base/usage/basic#error-fixing">基础使用</a>
        的初次配置阶段。如果你遇到了图片显示的问题，可以前往设置-全局设置-变量，将缓慢加载勾选上
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/186c815e84e60793a4bc1b89a4010a74.png"
        alt="Slow loading"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p>
          同样，该问题通常在
          <a href="/docs/base/usage/basic#plugin-load-failed">基础使用-消除错误信息-插件无法加载</a>
          过程中出现。
        </p>
      </div>

    </div>
  );
}
