'use client'

import { Typography } from '@/components/Typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageZoom from '@/components/ImageZoom'
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
  <>
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">无法启动</Typography>
      <Typography variant="p">
        这里总结了可能遇到的问题以及解决方案。
      </Typography>

      <Typography variant="h2" id="WebView2">1.WebView2 丢失</Typography>

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
            位于国外的服务器上下载，加上其
            <a href="https://www.gyan.dev" target="_blank" rel="noopener noreferrer">
              www.gyan.dev
            </a>
            到国内的网络连接不稳定、经常中断，导致下载失败，因此你才会在ETS2LA的控制台中看到报错信息。
          </p>
        </TabsContent>
        <TabsContent value="way">
          <p>
            从
            <a href="https://downloads.ets2la.cn/download?code=oLP5Wnrf" target="_blank" rel="noopener noreferrer">
              国内镜像站
            </a>
            下载ffmpeg，然后放到ETS2LA的安装目录下，然后重启ETS2LA即可
          </p>
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="plugin-load-failed">3.插件无法加载</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/186c815e84e60793a4bc1b89a4010a74.png"
        alt="Slow loading"
        width={800}
        height={400} />

      <Tabs defaultValue="reason" className="not-prose">
        <TabsList>
          <TabsTrigger value="reason">原因</TabsTrigger>
          <TabsTrigger value="way">办法</TabsTrigger>
        </TabsList>
        <TabsContent value="reason">
          <p>
            插件加载失败通常是由于系统资源不足或启动过程中的时序问题导致的。
          </p>
        </TabsContent>
        <TabsContent value="way">
          <p>
            在 <strong>设置-全局设置-变量</strong> 中勾选上 <strong>缓慢启动</strong>，如已勾选上 <strong>缓慢启动</strong> 后仍然无法加载插件，请设置 <strong>32~64GB</strong> 的虚拟内存
          </p>
        </TabsContent>
      </Tabs>

    </div>
  </>
)
}
