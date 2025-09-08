'use client'

import { Typography } from '@/components/Typography'

export default function IntroductionPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">简介</Typography>
      <Typography variant="p">
        <a href="https://github.com/ETS2LA" target="_blank" rel="noopener noreferrer">
          ETS2LA
        </a>
        是一款<strong>开源免费</strong>的适用于欧卡2/美卡的辅助驾驶程序
      </Typography>
      <Typography variant="p">
        <strong>ETS2LA</strong>
        项目旨在最终将自动驾驶技术引入{' '}
        <strong>SCS Software 的卡车模拟器</strong>{' '}
        。本文档仍在编写中，并将随着项目进展进行更新。如有任何疑问，请在
        Discord 中提问。
      </Typography>

      <Typography variant="h2">特征</Typography>

      <Typography variant="h3">完全访问模拟器数据</Typography>
      <Typography variant="p">
        与许多其他应用程序一样，我们使用 ETS2
        目录中的遥测服务器来获取游戏中的实时数据。
        然而，与其他应用程序不同的是，
        我们可以访问游戏的道路和预制网络，从而构建真正的全自动驾驶体验，而无需计算成本高昂的视觉模型。现在，您无需加入多人游戏即可获得完美的电影级画面！
      </Typography>

      <Typography variant="h3">多语言支持</Typography>
      <Typography variant="p">
        我们提供了一个易于使用的翻译框架，可以将ETS2LA
        翻译成任何语言。任何人都可以使用，翻译状态完全由社区努力驱动！
      </Typography>

      <Typography variant="h3">无缝导航</Typography>
      <Typography variant="p">
        我们可以直接访问游戏内的导航路线。ETS2LA
        会带您到达目的地，无论它位于何处。此功能适用于任何地图模组，只要提取了该模组或模组组合的道路数据即可。
      </Typography>

      <Typography variant="h3">无需昂贵的 AI 模型</Typography>
      <Typography variant="p">
        ETS2LA
        完全由人工编写，完全不依赖人工智能。这意味着ETS2LA
        比许多同类程序更加轻量级，性能也更高效。我们还深度实现了多处理功能，确保每个插件都有独立的
        CPU 核心运行
      </Typography>

      <Typography variant="h3">丰富的开发经验</Typography>
      <Typography variant="p">
        ETS2LA
        包含一个易于使用的后端，任何人都可以为 ETS2LA
        创建美观实用的插件。您只需几行 Python
        代码即可定义完整的设置页面。我们还创建了一个强大的事件系统，让您可以监听游戏或应用程序中的任何事件或按键绑定。
      </Typography>

      <Typography variant="h3">美观而现代的用户界面</Typography>
      <Typography variant="p">
        基于 NextJS 和 shadcn，我们制作了一个易于使用且美观的界面，该界面受到现实世界自动驾驶解决方案的启发。
      </Typography>
    </div>
  )
}
