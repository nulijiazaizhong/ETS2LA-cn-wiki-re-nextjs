import Image from 'next/image';
import Link from 'next/link';
import ImageZoom from '@/components/ImageZoom';

export default function AboutPage() {
  return (
    <main className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="prose dark:prose-invert max-w-7.45xl">
        <h1 className="text-5xl font-bold">关于</h1>
        
        <h2 className="mt-8 text-3xl font-semibold">重新定义您的虚拟货运旅程</h2>
        <p>
          欢迎来到ETS2LA的世界！我们是一个致力于为SCS Software开发的卡车模拟游戏带来尖端自动驾驶技术的开源项目。<sup>12</sup> 无论您是《欧洲卡车模拟2》(Euro Truck Simulator 2) 的老司机，还是《美国卡车模拟》(American Truck Simulator) 的新玩家，ETS2LA都将为您带来前所未有的驾驶体验。
        </p>

        <h2 className="mt-8 text-3xl font-semibold">我们的使命</h2>
        <h3 className="mt-6 text-2xl font-semibold">创新与探索</h3>
        <p>
          我们相信，游戏的世界拥有无限可能。我们的核心使命是突破《欧洲卡车模拟2》和《美国卡车模拟》的界限，通过引入先进的辅助驾驶功能，为玩家提供一种全新的、更轻松的探索虚拟世界的方式。
        </p>
        <h3 className="mt-6 text-2xl font-semibold">自由与免费</h3>
        <p>
          ETS2LA是一个完全免费的开源项目，并且将永远如此。<sup>3</sup> 我们致力于为整个社区提供价值，让每一位玩家都能享受到技术带来的乐趣。
        </p>

        <h2 className="mt-8 text-3xl font-semibold">核心技术</h2>
        <p>
          ETS2LA不仅仅是一个简单的模组，它是一套复杂的、基于插件的自适应巡航和车道保持系统。
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>数据驱动决策:</strong> 与依赖视觉识别的传统方案不同，ETS2LA通过插件直接从游戏中提取关键的路况和地图数据。 这使得它能够在各种天气和光线条件（甚至是完全的黑夜）下，精准地处理复杂的交通状况，如环岛、交通信号灯和无保护转弯。
          </li>
          <li>
            <strong>现代化的用户界面:</strong> 我们从现实世界的自动驾驶方案中汲取灵感，为您打造了一个美观、现代且功能强大的用户界面。<sup>1</sup> 您可以轻松地在第二块屏幕或平板电脑上显示实时路况和车辆状态。
          </li>
          <li>
            <strong>持续进化:</strong> ETS2LA 2.0版本标志着我们向全自动驾驶迈出了重要一步，实现了从出发点到目的地的自动导航。 但我们的脚步从未停止，开发团队仍在不断修复错误、添加新功能。
          </li>
        </ul>

        <h2 className="mt-8 text-3xl font-semibold">我们的团队</h2>
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4">
          “我们是ETS2LA的开发者，很高兴认识你。”
        </blockquote>
        <p>
          我们不是一家公司，而是一群由充满热情的程序员、卡车模拟爱好者和技术宅组成的全球性开源社区。<sup>6</sup> 我们在GitHub上协作，利用业余时间贡献代码和创意，共同推动这个项目的成长。我们相信，开放和协作是创造卓越产品的最佳方式。
        </p>

        <h2 className="mt-8 text-3xl font-semibold">加入我们的旅程</h2>
        <p>
          无论您是想体验最新的Beta版本，报告一个BUG，还是想和开发者及其他玩家直接交流，我们的Discord社区都是您的最佳去处。
        </p>
        <div className="flex items-center gap-4 my-4">
          <Link href="https://ets2la.com/discord" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/imgs/discord.png" alt="Discord" width={128} height={40} className="rounded-md" />
          </Link>
        </div>
        <p>
          同时我们也有专门对应中国用户的社区——云湖
        </p>
        <div className="flex items-center gap-4 my-4">
          <Link href="https://yhfx.jwznb.com/share?key=QttDhwXmNE3Q&ts=1754577012" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/imgs/yunhu.png" alt="云湖社区" width={128} height={40} className="rounded-md" />
          </Link>
        </div>

        <h2 className="mt-8 text-3xl font-semibold">支持我们 (Support Us)</h2>
        <p>
          我们非常感谢社区对ETS2LA项目的关注和喜爱。如果您希望支持我们的工作，可以通过以下几种方式：
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>积极反馈:</strong> 在使用中发现任何问题，请通过Discord或GitHub告诉我们。这是帮助我们改进产品的最重要方式。</li>
          <li><strong>贡献代码:</strong> 如果您具备开发能力（项目后端主要使用Python），我们非常欢迎您Fork我们的GitHub仓库并提交您的代码贡献！</li>
          <li><strong>支持开发者:</strong> 虽然项目本身是免费的，但开发工作需要投入大量时间和精力。如果您愿意，可以通过Ko-fi请我们喝杯咖啡，这将是对我们工作的巨大鼓励。</li>
          <li><strong>支持国内镜像站：</strong>为了改善国内玩家的使用体验，热心的社区成员为我们搭建了国内镜像站。维护镜像站需要持续的服务器和带宽开销。如果您从中获得了便利，我们鼓励您考虑支持镜像站的运营者，以帮助他们分担这份成本，确保国内玩家能够持续获得高速、稳定的服务。</li>
        </ul>
        
        <div className="my-4">
          <ImageZoom src="/imgs/support.png" alt="赞助我们的国内镜像站" width={250} height={125} />
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 my-4">
          <Link href="https://ko-fi.com/tumppi066" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
            在Ko-fi上支持我们
          </Link>
          <Link href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
            访问我们的GitHub仓库
          </Link>
        </div>
      </div>
    </main>
  );
}
