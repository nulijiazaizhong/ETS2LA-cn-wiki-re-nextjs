'use client'

import { Typography } from '@/components/Typography'
import Image from 'next/image'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function PluginsPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'basic-mode', level: 2, text: '基础模式' },
      { id: 'advanced-mode', level: 2, text: '高级模式' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">插件介绍</Typography>
      <Typography variant="p">
        这篇文章会以<strong>表格</strong>
        的形式来介绍ETS2LA`插件管理`页面中的所有插件实现的功能，
      </Typography>

      <Typography variant="h2" id="basic-mode">基础模式</Typography>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>作用</th>
            <th>是否可选</th>
            <th>反作用</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>转向控制</td>
            <td>使得车辆可以自动转向</td>
            <td>✔</td>
            <td>无法自动转向</td>
            <td></td>
          </tr>
          <tr>
            <td>速度控制</td>
            <td>使得车辆可以自动加减速</td>
            <td>✔</td>
            <td>无法自动加减速</td>
            <td></td>
          </tr>
          <tr>
            <td>环境可视化</td>
            <td>能够在环境可视化页面查看信息</td>
            <td>✔</td>
            <td>无法在环境可视化中查看信息</td>
            <td></td>
          </tr>
          <tr>
            <td>HUD</td>
            <td>在游戏上层显示信息</td>
            <td>✔</td>
            <td>无法在游戏上层显示</td>
            <td>AR插件为基础</td>
          </tr>
          <tr>
            <td>文本转语音</td>
            <td>提示信息使用语音播报</td>
            <td>✔</td>
            <td>提示信息无法语音播报</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250730100942.png"
        alt="Basic Mode Plugins"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="advanced-mode">高级模式</Typography>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>作用</th>
            <th>是否可选</th>
            <th>反作用</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>自适应巡航控制系统</td>
            <td>根据道路信息自动控制加减速</td>
            <td>✔</td>
            <td>无法自动控制加减速</td>
            <td></td>
          </tr>
          <tr>
            <td>导航</td>
            <td>获取游戏内导航信息</td>
            <td>❌</td>
            <td>无法获取游戏导航信息，上述插件失效</td>
            <td>这是必开插件</td>
          </tr>
          <tr>
            <td>地图</td>
            <td>提供转向和导航功能</td>
            <td>❌</td>
            <td>无法获取游戏信息，基础功能失效</td>
            <td>这是必开插件</td>
          </tr>
          <tr>
            <td>可视化</td>
            <td>能够在环境可视化页面查看信息</td>
            <td>✔</td>
            <td>无法在环境可视化中查看信息</td>
            <td></td>
          </tr>
          <tr>
            <td>HUD</td>
            <td>在游戏上层显示信息</td>
            <td>✔</td>
            <td>无法在游戏上层显示</td>
            <td>AR插件为基础</td>
          </tr>
          <tr>
            <td>AR</td>
            <td>添加覆层，为其余插件做基础</td>
            <td>✔</td>
            <td>没有覆层，无法显示多余信息</td>
            <td>HUD之类的插件失效</td>
          </tr>
          <tr>
            <td>TTS（文本转语音）</td>
            <td>提示信息使用语音播报</td>
            <td>✔</td>
            <td>提示信息无法语音播报</td>
            <td></td>
          </tr>
          <tr>
            <td>Discord Rich Presence</td>
            <td>在Discord上显示ETS2LA状态</td>
            <td>✔</td>
            <td>Discord上不显示ETS2LA状态</td>
            <td>需网络支持</td>
          </tr>
        </tbody>
      </table>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250730101016.png"
        alt="Advanced Mode Plugins"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p className="font-bold">信息</p>
        <p>
          Discord Rich Presence 插件仅支持Discord客户端在打开的情况下显示，网页不支持
        </p>
      </div>
    </div>
  )
}
