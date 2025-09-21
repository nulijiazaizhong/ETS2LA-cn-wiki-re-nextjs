'use client'

import { Typography } from '@/components/Typography'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'
import ImageZoom from '@/components/ImageZoom'

export default function CrashesPage() {
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
      <Typography variant="h1">崩溃</Typography>
      <Typography variant="p">
        本页面总结了可能遇到的崩溃问题及解决方案。
      </Typography>

      <Typography variant="h2" id="game">游戏</Typography>
      <Typography variant="h3" id="game-crash">崩溃/卡死</Typography>
      <Typography variant="p">
        尽管 ETS2LA 导致您的游戏崩溃的可能性极小，但我们仍然可以执行一些故障排除步骤，看看我们是否可以找出问题所在。
        转到 <code>设置-SDK</code>，尝试卸载并重新安装SDK。
        如果重新进入游戏，游戏可以正常运行，那么就是SDK导致的问题。
      </Typography>
      
      <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 my-4">
        <div className="font-bold">注意</div>
        <p>
          当游戏出现重大更新时，建议重新安装一遍SDK，如果你很长时间没有使用 ETS2LA，那么我们也建议你在使用ETS2LA之前重新安装一下SDK。
        </p>
      </div>
      
      <Typography variant="h2" id="ets2la">ETS2LA</Typography>
      

      <Typography variant="h3" id="ModuleNotFoundError">1. 缺少必要的Python子模块</Typography>
      <Typography variant="p">
        如果在
        <strong>控制台</strong>
        中看到下面这张图中的内容，意味着 ETS2LA 缺少启动所需的 Python 子模块。
        这通常发生在安装或更新失败后。要修复该错误，只需在 ETS2LA 安装目录中打开`activate.bat`文件并依次运行以下代码即可。
      </Typography>
      
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>
          cd app{"\n"}
          pip install -r requirements.txt{"\n"}
          {"\n"}
          如果上面的命令卡住/失败，可尝试使用下面的命令{"\n"}
          pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple{"\n"}
        </code>
      </pre>
      
      <Typography variant="p">
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250908191734.png"
        alt="Error message"
        width={800}
        height={400} />
        
      <Typography variant="h3" id="地图插件运行循环中出错">2. 地图插件运行循环中出错</Typography>

      <Typography variant="p">
        如果在
        <strong>控制台</strong>
        中看到下面这张图中的内容，意味着您的内存或 Windows 虚拟内存出现问题，您应该搜索“如何增加页面文件大小”来获取帮助。我建议页面文件大小约为 16 到 32GB
      
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/386004a97e028bd0ebf4dcde22690e34.png"
        alt="Error message"
        width={800}
        height={400} />
        
        <Typography variant="p">
          如果以上方法都无法解决您的问题，请通过 <a href="https://ets2la.com/discord" target="_blank" rel="noopener noreferrer">Discord</a>或者<a href="https://kook.vip/VZaUPP" target="_blank" rel="noopener noreferrer">kook</a>联系我们。
      </Typography>
    </div>
  )
}