'use client'

import { Typography } from '@/components/Typography'
import ImageZoom from '@/components/ImageZoom'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'

export default function PluginsPage() {
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
  }, [setToc])

  return (
    <>
      <Typography variant="h1">插件介绍</Typography>
      <Typography variant="p">
        这篇文章会以<strong>表格</strong>
        的形式来介绍ETS2LA`插件管理`页面中的所有插件实现的功能，
      </Typography>

      <Typography variant="h2" id="basic-mode">基础模式</Typography>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名称</TableHead>
            <TableHead>作用</TableHead>
            <TableHead>是否可选</TableHead>
            <TableHead>反作用</TableHead>
            <TableHead>备注</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>转向控制</TableCell>
            <TableCell>使得车辆可以自动转向</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法自动转向</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>速度控制</TableCell>
            <TableCell>使得车辆可以自动加减速</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法自动加减速</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>环境可视化</TableCell>
            <TableCell>能够在环境可视化页面查看信息</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法在环境可视化中查看信息</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HUD</TableCell>
            <TableCell>在游戏上层显示信息</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法在游戏上层显示</TableCell>
            <TableCell>AR插件为基础</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>文本转语音</TableCell>
            <TableCell>提示信息使用语音播报</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>提示信息无法语音播报</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="my-6">
        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250730100942.png"
          alt="Basic Mode Plugins"
          width={800}
          height={400}
        />
      </div>

      <Typography variant="h2" id="advanced-mode">高级模式</Typography>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名称</TableHead>
            <TableHead>作用</TableHead>
            <TableHead>是否可选</TableHead>
            <TableHead>反作用</TableHead>
            <TableHead>备注</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>自适应巡航控制系统</TableCell>
            <TableCell>根据道路信息自动控制加减速</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法自动控制加减速</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>导航</TableCell>
            <TableCell>获取游戏内导航信息</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>无法获取游戏导航信息，上述插件失效</TableCell>
            <TableCell>这是必开插件</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>地图</TableCell>
            <TableCell>提供转向和导航功能</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>无法获取游戏信息，基础功能失效</TableCell>
            <TableCell>这是必开插件</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>可视化</TableCell>
            <TableCell>能够在环境可视化页面查看信息</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法在环境可视化中查看信息</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>HUD</TableCell>
            <TableCell>在游戏上层显示信息</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>无法在游戏上层显示</TableCell>
            <TableCell>AR插件为基础</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>AR</TableCell>
            <TableCell>添加覆层，为其余插件做基础</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>没有覆层，无法显示多余信息</TableCell>
            <TableCell>HUD之类的插件失效</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TTS（文本转语音）</TableCell>
            <TableCell>提示信息使用语音播报</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>提示信息无法语音播报</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Discord Rich Presence</TableCell>
            <TableCell>在Discord上显示ETS2LA状态</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>Discord上不显示ETS2LA状态</TableCell>
            <TableCell>需网络支持</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="my-6">
        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250730101016.png"
          alt="Advanced Mode Plugins"
          width={800}
          height={400}
        />
      </div>

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p className="font-bold">信息</p>
        <p>
          Discord Rich Presence 插件仅支持Discord客户端在打开的情况下显示，网页不支持
        </p>
      </div>
    </>
  )
}
