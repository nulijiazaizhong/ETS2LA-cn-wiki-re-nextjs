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
      { id: 'WebView2', level: 2, text: '1. WebView2 丢失' },
      { id: 'ffmpeg-failed', level: 2, text: '2. ffmpeg下载失败' },
      { id: 'plugin-load-failed', level: 2, text: '3. 插件无法加载' },
      { id: '「MemoryError」', level: 2, text: '4. 地图插件运行循环中错' },
      { id: 'ModuleNotFoundError No module named', level: 2, text: '5. ModuleNotFoundError No module named 「...」' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <>
      <div className="prose dark:prose-invert max-w-none">
        <Typography variant="h1">问题总结</Typography>
        <Typography variant="p">
          这里总结了可能遇到的问题以及解决方案。这些问题主要出现在
          <a href="/docs/base/usage/basic">基础使用</a>
          过程中的安装和初次配置阶段，本文档将对此进行详细说明。
        </Typography>

        <Typography variant="h3" id="WebView2">1.WebView2 丢失</Typography>

        <Typography variant="p">
          如果你在出现了下面这张图中的内容，
        </Typography>

        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/9c1f13f62c16eabef0dc002a30777943.png"
          alt="Error message"
          width={800}
          height={400} />

        <Tabs defaultValue="reason" className="not-prose">
          <TabsList>
            <TabsTrigger value="reason">原因</TabsTrigger>
            <TabsTrigger value="way">办法</TabsTrigger>
          </TabsList>
          <TabsContent value="reason">
            <p>
              因为系统缺少Microsoft Edge WebView2 Runtime组件导致的，ETS2LA使用WebView2来渲染界面，如果没有这个组件的话就会出现上图中的内容
            </p>
          </TabsContent>
          <TabsContent value="way">
            <p>
              从
              <a href="https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download" target="_blank" rel="noopener noreferrer">
                Microsoft Edge WebView2下载页面
              </a>
              下载并安装WebView2 Runtime组件，然后重启ETS2LA即可
              <ImageZoom
                src="https://tc.ets2la.cn/d/img/7/20250828165606.png"
                alt="WebView2 download page"
                width={800}
                height={400} />
            </p>
          </TabsContent>
        </Tabs>

        <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
          <p>
            同样，该问题也可在
            <a href="/docs/base/usage/basic#WebView2">基础使用-消除错误信息-WebView2</a>
            中找到。
          </p>
        </div>

        <Typography variant="h2" id="ffmpeg-failed">2.ffmpeg下载失败</Typography>

        <Typography variant="p">
          如果你在安装完成之后勾选了打开ETS2LA的话你有很大概率会在
          <strong>控制台</strong>
          中看到下面这张图中的内容，这时不要紧张和害怕，有解决办法的
        </Typography>

        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250721084316.png"
          alt="Error message"
          width={800}
          height={400} />

        <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
          <p>
            同样，该问题通常在
            <a href="/docs/base/usage/basic#ffmpeg-download-failed">基础使用-消除错误信息-ffmpeg</a>
            过程中出现。
          </p>
        </div>

        <Typography variant="h3" id="plugin-load-failed">3.插件无法加载</Typography>

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

        <Typography variant="p">
          该问题同样主要出现在
          <a href="/docs/base/usage/basic#error-fixing">基础使用</a>
          的初次配置阶段。如果你遇到了图片显示的问题，可以前往设置-全局设置-变量，将缓慢加载勾选上
        </Typography>

        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/186c815e84e60793a4bc1b89a4010a74.png"
          alt="Slow loading"
          width={800}
          height={400} />

        <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
          <p>
            同样，该问题通常在
            <a href="/docs/base/usage/basic#plugin-load-failed">基础使用-消除错误信息-插件无法加载</a>
            过程中出现。
          </p>
        </div>

        <Typography variant="h2" id="「MemoryError」">4.地图插件运行循环中错</Typography>

        <Typography variant="p">
          如果在
          <strong>控制台</strong>
          中看到下面这张图中的内容，这时不要紧张和害怕，有解决办法的
          「MemoryError」表示您的内存或 Windows 虚拟内存出现问题，您应该搜索“如何增加页面文件大小”来获取帮助。我建议页面文件大小约为 16 到 32GB
        </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/386004a97e028bd0ebf4dcde22690e34.png"
        alt="Error message"
        width={800}
        height={400} />
      <Typography variant="h2" id="ModuleNotFoundError No module named">5.ModuleNotFoundError No module named 「...」</Typography>

        <Typography variant="p">
          如果在
          <strong>控制台</strong>
          中看到下面这张图中的内容，这时不要紧张和害怕，有解决办法的
          此错误意味着 ETS2LA 缺少启动所需的 Python 子模块。
          这通常发生在安装或更新失败后。要修复该错误，只需在 ETS2LA 安装目录中打开文件后运行以下代码即可。
          activate.bat
          cd app                                                                                           
          pip install -r requirements.txt

        </Typography>

        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250908191734.png"
          alt="Error message"
          width={800}
          height={400} />
      </div>
  </>
  )
}
