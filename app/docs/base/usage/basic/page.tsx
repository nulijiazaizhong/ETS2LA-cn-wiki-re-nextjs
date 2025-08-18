'use client'

import { Typography } from '@/components/Typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageZoom from '@/components/ImageZoom'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function BasicUsagePage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'error-fixing', level: 2, text: '1. 消除错误提示' },
      { id: 'onboarding', level: 2, text: '2. 新手引导' },
      { id: 'page-usage', level: 2, text: '3. 页面使用' },
      { id: 'basic-usage', level: 2, text: '4. 基础使用' },
      { id: 'updating', level: 2, text: '5. 更新' },
      { id: 'conclusion', level: 2, text: '6. 结束语' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <div className="prose dark:prose-invert max-w-none">
      
      <Typography variant="h1">基础使用</Typography>

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p>
          前面的文章我们已经成功的完成了ETS2LA的安装，接下来我们就来学习一下怎样使用ETS2LA。
        </p>
      </div>

      <Typography variant="h2" id="error-fixing">1.消除错误提示</Typography>

      <Typography variant="h3">1.ffmpeg下载失败</Typography>

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

      <Typography variant="h3">2.插件无法加载</Typography>

      <Typography variant="p">
        如果你遇到了图片显示的问题，可以前往设置-全局设置-变量，将缓慢加载勾选上
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/186c815e84e60793a4bc1b89a4010a74.png"
        alt="Slow loading"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="onboarding">2.新手引导</Typography>

      <Typography variant="h3">1.免责声明</Typography>

      <Typography variant="p">
        软件刚打开时会看到这样的页面，点击`i understanded`即可，当然如果想赞助开发者Tumppi066也可以点击左边的咖啡☕图标，赞助不支持
        <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
          Paypal
        </a>
        ,只支持外币卡(visa)
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/c6180860-d5bc-4989-9099-9fce3e5a9986.png"
        alt="Disclaimer"
        width={800}
        height={400}
      />

      <Typography variant="h3">2.欢迎</Typography>

      <Typography variant="p">上一步完成之后会进入欢迎页面，点击`Continue`即可</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721084532.png"
        alt="Welcome"
        width={800}
        height={400}
      />

      <Typography variant="h3">3.语言选择</Typography>

      <Typography variant="p">
        点击左右侧的`Englisj`，鼠标滚轮往下，找到`Chinese(simplified)`，点击`Chinese(simplified)`即可使用简体中文，然后点击`继续`
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721084750.png"
        alt="Language selection"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>语言修改在当前页面不生效，后续页面才会生效</p>
      </div>

      <Typography variant="h3">4.SDK安装</Typography>

      <Typography variant="p">根据自己需求安装对应的SDK</Typography>

      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-bold">警告</p>
        <p>安装SDK时不要启用游戏，会提示安装失败并且让你关闭游戏的</p>
      </div>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721085547.png"
        alt="SDK Installation"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <Tabs defaultValue="tip" className="not-prose">
          <TabsList>
            <TabsTrigger value="tip">提示</TabsTrigger>
            <TabsTrigger value="warning">⚠️警告</TabsTrigger>
          </TabsList>
          <TabsContent value="tip">
            <p>本步骤不安装SDK无法进行下一步骤</p>
            <p>鼠标放置到🟦框上可以看到SDK文件名以及安装情况</p>
            <ImageZoom
              src="https://tc.ets2la.cn/d/img/7/20250721085857.png"
              alt="SDK Info"
              width={600}
              height={300}
            />
          </TabsContent>
          <TabsContent value="warning">
            <p>
              如果出现无法安装SDK的情况，在`~ETS2LA\app\ETS2LA\Assets\DLLs`
              路径下找到适合你当前游戏版本的文件夹，将文件夹里面的内容全部复制到欧卡根目录下的`bin\win_x64\plugins`文件夹中
            </p>
            <p>示例：</p>
            <p>
              我将ETS2LA安装在G盘根目录，ETS2LA在安装时会默认创建ETS2LA文件夹，所以我的SDK存放路径就是`G:\ETS2LA\app\ETS2LA\Assets\DLLs`，现在我需要安装1.55版本的SDK，路径就是`G:\ETS2LA\app\ETS2LA\Assets\DLLs\1.55`
            </p>
            <p>
              我将steam安装在E盘Game文件夹下，同时steam在安装是也创建了名为steam的文件夹，所以我的游戏根目录就是
              `F:\Game\steam\steamapps\common\Euro Truck Simulator 2`\（可在steam中右键选择`管理-浏览本地文件`）然后我只需要在后面加上`bin\win_x64\plugins`即是我需要粘贴到的文件路径，完整路径就是`F:\Game\steam\steamapps\common\Euro Truck Simulator 2\bin\win_x64\plugins`
            </p>
            <p><strong>复制路径</strong></p>
            <ImageZoom
              src="https://tc.ets2la.cn/d/img/7/20250721091739.png"
              alt="Copy Path"
              width={800}
              height={400}
            />
            <p><strong>粘贴路径</strong></p>
            <ImageZoom
              src="https://tc.ets2la.cn/d/img/7/20250721091849.png"
              alt="Paste Path"
              width={800}
              height={400}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Typography variant="h3">5.插件</Typography>

      <Typography variant="p">
        插件推荐使用`高级插件模式`，基础模式容易出现无法启动插件的问题
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721092028.png"
        alt="Plugin Mode"
        width={800}
        height={400}
      />

      <Typography variant="p">基础模式和高级模式的区别可查看该内容</Typography>

      <Typography variant="h3">6.高优先级模式</Typography>

      <Typography variant="p">勾选上，然后点击`继续`即可</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250730121254.png"
        alt="High Priority Mode"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>该功能相当于手动在任务管理器中手动设置ETS2LA的优先级</p>
      </div>

      <Typography variant="h3">7.数据加载</Typography>

      <Typography variant="p">上一步完成之后你会看到这样的界面，稍作等待即可</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721135229.png"
        alt="Data Loading"
        width={800}
        height={400}
      />

      <Typography variant="h3">8.地图数据</Typography>

      <Typography variant="p">
        点击`Select option...`，在弹出的下拉框中选择你需要的地图，然后点击`继续`即可
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721135524.png"
        alt="Map Data"
        width={800}
        height={400}
      />

      <Typography variant="h3">9.窗口调整</Typography>

      <Typography variant="p">
        ETS2LA不支持通过拖动边缘来调整窗口大小，只能通过设置中的串口大小来调整
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721135643.png"
        alt="Window Adjustment"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>使用`ctrl+滚轮`可以调整缩放</p>
      </div>

      <Typography variant="h3">10.窗口控制</Typography>

      <Typography variant="p">
        红色🟥按钮的为关闭；黄色🟨按钮的为最小化；绿色🟩按钮左键为指定，右键为设置透明度
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/d0fc5e3f-f88d-4bea-93d4-bb30fd029ca0.png"
        alt="Window Controls"
        width={800}
        height={400}
      />

      <Typography variant="h3">11.完成</Typography>

      <Typography variant="p">
        看到此页面说明你完成了新手引导，点击`完成`现在可以开始使用ETS2LA了
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721140831.png"
        alt="Setup Complete"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="page-usage">3.页面使用</Typography>

      <Typography variant="p">
        完成新手引导后你会看到这样的页面（图1），将鼠标放置到靠近左侧边框的位置鼠标样式会改变，点击即可打开ETS2LA的侧边栏，打开侧边栏之后应该是这样的（图2）
      </Typography>

      <Typography variant="p">图1</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721141043.png"
        alt="Page Usage 1"
        width={800}
        height={400}
      />

      <Typography variant="p">图2</Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721141256.png"
        alt="Page Usage 2"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="basic-usage">4.基础使用</Typography>

      <Typography variant="h3">1.按键更改</Typography>

      <Typography variant="p">
        原因：使用相同的按键容易触发<strong>只加速不转向/只转向不加速</strong>的bug
      </Typography>

      <Typography variant="p">
        在启用ETS2LA之前为了防止出现
        <strong>只加速不转向/只转向不加速</strong>
        的情况我们要先去修改一下按键设置；先点击`设置`，然后选择`控制`，在
        <strong>切换速度控制</strong>和<strong>切换转向</strong>
        中的选择任意一个，点击后面的铅笔✏️按钮，然后按键盘上你想要的按键即可，
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721181730.png"
        alt="Keybinds 1"
        width={800}
        height={400}
      />

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721182124.png"
        alt="Keybinds 2"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-bold">警告</p>
        <p>此处的按键不要和游戏内的按键冲突，否则会导致按键冲突</p>
      </div>

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p className="font-bold">信息</p>
        <p>
          当然，如过你非常希望使用相同的按键来控制加减速和转向的话也是有解决办法的，勾选`设置-全局设置-变量`中的回退到旧的加速方法，这在一定程度上可以解决使用相同按键带来的bug，但是并不保证每个人都有效，所以最简单直接的方法还是修改按键
        </p>
        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250722133325.png"
          alt="Old throttle method"
          width={800}
          height={400}
        />
      </div>

      <Typography variant="h3">2.插件管理</Typography>

      <Typography variant="p">
        按键修改完成之后我们来到插件管理页面；先来看绿色🟩方框里面的内容，能够看到每个插件的右上角都会有一个`已启用/禁用`的小字显示当前插件的状态（待应用）；接着我们目光转向红色🟥方框，这个按钮是控制整个插件的启用与禁用；接着再看黄色🟨方框的部分，当按下红色🟥方框的按钮之后，绿色🟩方框中显示`已启用`的插件名称就会出现在黄色🟨方框中，简单模式下整体就是这么一个逻辑。
      </Typography>

      <Typography variant="p">
        选择好需要的插件，确保插件右上角为`已启用`之后，点击`启用插件`，稍作等待，等待
        <strong>控制台</strong>
        无输出即可完成插件的启用；下图所示的三个插件是必须要启用的，否则ETS2LA的基础功能会收到影响
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721235159.png"
        alt="Plugin Management"
        width={800}
        height={400}
      />

      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <p className="font-bold">信息</p>
        <p>
          简单模式下只能选择绿色🟩方框中的插件来启用和禁用，绿色方框中没有的插件无法选择，如需另外的插件，请切换至
          <a href="/docs/usage/pages">高级模式</a>
          ；如想使用的功能没有插件，可前往
          <a href="/docs/developer/plugin-creation">插件开发</a>
        </p>
      </div>

      <Typography variant="h3">3.启动游戏</Typography>

      <Typography variant="p">
        完成上面的步骤之后，接下来就可以启用游戏，并在游戏中做一些准备了
      </Typography>

      <Typography variant="h3">4.游戏准备</Typography>

      <Typography variant="p">
        进入到游戏之后，先查看有没有导航路线，如果没有，则接一趟货或者手动在地图上标点；然后将车开到路上（不在货场、修理站、火车站、港口即可）
      </Typography>

      <Typography variant="h3">5.启动ETS2LA</Typography>

      <Typography variant="p">
        然后按键盘上你当初设置的按键即可启用ETS2LA；
      </Typography>

      <Typography variant="p">
        比如以下是我的按键设置，那么我想启动ETS2LA的时候就需要按下`+`和`-`这两个按键，其中按键`+`控制的是
        <strong>自动加减速</strong>，按键`-`控制的是<strong>自动转向</strong>
        ，如果想关闭ETS2LA，只需要再次按下这两个按键即可
      </Typography>

      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250722005007.png"
        alt="My Keybinds"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="updating">5.更新</Typography>

      <Tabs defaultValue="software" className="not-prose">
        <TabsList>
          <TabsTrigger value="software">软件内</TabsTrigger>
          <TabsTrigger value="un-software">软件外</TabsTrigger>
        </TabsList>
        <TabsContent value="software">
          <Tabs defaultValue="up">
            <TabsList>
              <TabsTrigger value="up">检查到更新</TabsTrigger>
              <TabsTrigger value="down">未检查到更新</TabsTrigger>
            </TabsList>
            <TabsContent value="up">
              <p>
                点击软件左上角的`可用更新`，然后在加载出来的页面点击`重启并应用更新`
              </p>
              <ImageZoom
                src="https://tc.ets2la.cn/d/img/7/20250731110219.png"
                alt="Update available"
                width={800}
                height={400}
              />
            </TabsContent>
            <TabsContent value="down">
              <p>
                在概览处下滑至页面最下方，你可以看见一个`强制更新`的选项，点击`强制更新`选项后面的`更新`即可触发更新进程
              </p>
              <ImageZoom
                src="https://tc.ets2la.cn/d/img/7/20250731110532.png"
                alt="Force update"
                width={800}
                height={400}
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="un-software">
          <Tabs defaultValue="click">
            <TabsList>
              <TabsTrigger value="click">鼠标点击</TabsTrigger>
              <TabsTrigger value="cmd">控制台</TabsTrigger>
            </TabsList>
            <TabsContent value="click">
              <p>
                打开你的ETS2LA安装目录（如果不知道并且在桌面创建了快捷方式的可以右键`打开文件所在位置`），然后进入到`app`文件夹内，找到`update.bat`这个文件并双击运行即可触发更新进程
              </p>
              <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
                <p className="font-bold">提示</p>
                <p>运行`update.bat`时不要运行ETS2LA，否则可能会出错</p>
              </div>
            </TabsContent>
            <TabsContent value="cmd">
              <p>
                打开你的ETS2LA安装目录（如果不知道并且在桌面创建了快捷方式的可以右键`打开文件所在位置`），你会看到有个`activate.bat`的文件，双击`activate.bat`并在弹出的对话框里面依次输入以下内容
              </p>
              <pre>
                <code>
                  {`cd app      # 进入app目录
update      # 运行update.bat程序`}
                </code>
              </pre>
              <p>即可触发更新程序</p>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="conclusion">6.结束语</Typography>

      <Typography variant="p">
        以上就是关于ETS2LA的基础使用教程，如果你想使用`插件管理`中的`高级模式`的话，可以前往
        <a href="/docs/usage/pages">页面介绍</a>
        查看；如果你想知道每个插件的作用的话可以前往
        <a href="/docs/usage/plugins">插件介绍</a>
      </Typography>
    </div>
  )
}
