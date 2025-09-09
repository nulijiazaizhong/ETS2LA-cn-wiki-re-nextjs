'use client'

import { Typography } from '@/components/Typography'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'
import ImageZoom from '@/components/ImageZoom'

export default function NotWorkingPage() {
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
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">不工作</Typography>
      <Typography variant="p">
        本页面总结了插件或功能不工作时可能遇到的问题。
      </Typography>

      <Typography variant="h2" id="visual-page-not-connecting">1. 可视化页面不连接，仅显示连接页</Typography>
      <ImageZoom src="https://tc.ets2la.cn/d/img/7/20250909212736.png" alt="Visual page not connecting" width={800} height={400} />
      <Typography variant="p">
        确保已启用`可视化`插件。如果您使用的是基本模式，则启用的插件将列在插件管理器页面的左侧。如果您尝试通过远程设备进行连接，请检查`远程连接`问题页面。
      </Typography>

      <Typography variant="h2" id="ets2la-not-steering">2. ETS2LA 不自动控制转向</Typography>
      <ol>
        <li>
          <Typography variant="p">
            确保 `地图（Map）` 插件已启用。如果您发现地图插件未启用/根本不可见，请尝试在 `设置-全局-变量`中启用 `缓慢加载（Slow Loading）` 选项。您还应该将<a href="https://www.bing.com/search?go=%E6%90%9C%E7%B4%A2&q=%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E8%AE%BE%E7%BD%AE%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98" target="_blank" rel="noopener noreferrer">页面文件</a>大小增加到至少 8GB 到 16GB。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            确保您为您的模组/游戏选择了正确的数据。例如，如果您在 ProMods 上玩游戏，则需要在`设置-地图-数据`中选择 ProMods 数据。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            确保您已在游戏内地图中选择了一条路线。ETS2LA 在没有导航路线的情况下无法工作。您可以通过单击游戏中的地图来选择路线。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            确保可视化页面显示灰线。此灰线表示 Map 当前已找到要遵循的路线。如果您没有看到灰线，请按照控制台中警告中的说明进行作。通常这包括向前行驶 10-20 秒，之后应该会出现灰线。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            确保您确实启用了转向。默认情况下，用于启用转向的键绑定是键盘上的 `N` 键。您可以在设置中更改此设置。当 Map 应该转向时，线路将变为蓝色，ETS2LA 将完全接管转向控制。
          </Typography>
        </li>
      </ol>
      <Typography variant="p">
        线是蓝色的，但仍然没有转向？你在这里没有弄清楚你的问题吗？请通过 <a href="https://ets2la.com/discord" target="_blank" rel="noopener noreferrer">Discord</a>或者<a href="https://yhfx.jwznb.com/share?key=3gn9gaH3qMps&ts=1754318808" target="_blank" rel="noopener noreferrer">云湖</a>联系我们。
      </Typography>

      <Typography variant="h2" id="ets2la-not-controlling-speed">3. ETS2LA 不自动控制速度</Typography>
      <ol>
        <li>
          <Typography variant="p">
            确保已启用`自适应巡航控制系统`插件。如果您发现地图插件未启用/根本不可见，请尝试在 `设置-全局-变量`中启用 `缓慢加载（Slow Loading）` 选项。您还应该将<a href="https://www.bing.com/search?go=%E6%90%9C%E7%B4%A2&q=%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E8%AE%BE%E7%BD%AE%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98" target="_blank" rel="noopener noreferrer">页面文件</a>大小增加到至少 8GB 到 16GB。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            确保您确实启用了速度控制。默认情况下，用于启用速度控制的键绑定是键盘上的 `N` 键。您可以在设置中更改此设置。当自适应巡航控制应该控制速度时，右上角的速度将变为蓝色，ETS2LA 将完全接管速度控制。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            尝试启用/禁用回退控制模式。ETS2LA 有两种控制速度的模式。当主模式失败时，可以使用回退模式。这可以在`设置-全局-变量`将`回退到旧的加速方法` 选项勾选上。
          </Typography>
        </li>
      </ol>
      <Typography variant="p">
        线是蓝色的，但仍然没有控制速度？你在这里没有弄清楚你的问题吗？请通过 <a href="https://ets2la.com/discord" target="_blank" rel="noopener noreferrer">Discord</a>或者<a href="https://yhfx.jwznb.com/share?key=3gn9gaH3qMps&ts=1754318808" target="_blank" rel="noopener noreferrer">云湖</a>联系我们。
      </Typography>
    </div>
  )
}
