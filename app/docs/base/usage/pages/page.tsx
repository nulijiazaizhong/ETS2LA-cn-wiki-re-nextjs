'use client'

import { Typography } from '@/components/Typography'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageZoom from '@/components/ImageZoom'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function PagesPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'overview', level: 2, text: '1. 概览' },
      { id: 'visualization', level: 2, text: '2. 环境可视化' },
      { id: 'plugin-management', level: 2, text: '3. 插件管理' },
      { id: 'catalogue', level: 2, text: '4. Catalogue' },
      { id: 'performance', level: 2, text: '5. 性能' },
      { id: 'wiki', level: 2, text: '6. Wiki' },
      { id: 'roadmap', level: 2, text: '7. Roadmap' },
      { id: 'settings', level: 2, text: '8. 设置' },
      { id: 'login', level: 2, text: '9. 登录' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <>
      <Typography variant="h1">页面介绍</Typography>

      <Typography variant="h2" id="overview">1.概览</Typography>
      <Typography variant="p">
        ETS2LA的概览页面也就是ETS2LA的首页，这里会显示ETS2LA的介绍（红框内）、数据统计（黄框内）、开发者/贡献者（绿框内）、支持语言以及一些实用程序
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250801211503.png"
        alt="Overview"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>
          由于滚动截图会导致左侧的侧边栏显示问题，所以这里不演示其他的内容了，各位在这个页面可以使用鼠标滚轮向下滚动即可查看剩余内容
        </p>
      </div>
      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-bold">警告</p>
        <p>
          如果你看到了下面图片所显示的内容，请前往设置-SDK中重新安装一遍SDK
        </p>
        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250812110734.png"
          alt="SDK Warning"
          width={800}
          height={400}
        />
      </div>

      <Typography variant="h2" id="visualization">2.环境可视化</Typography>
      <Typography variant="p">
        环境可视化用于显示当前导航和路线信息；环境可视化分为左右两侧，左侧以车辆视角显示导航信息，右侧以地图视角显示导航信息。
      </Typography>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>位置</TableHead>
            <TableHead>视角</TableHead>
            <TableHead>显示内容</TableHead>
            <TableHead>性能消耗</TableHead>
            <TableHead>mod地图</TableHead>
            <TableHead>镜像</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>左侧</TableCell>
            <TableCell>车辆</TableCell>
            <TableCell>导航路线</TableCell>
            <TableCell>约400MB内存占用</TableCell>
            <TableCell>支持</TableCell>
            <TableCell>仅限中国大陆`非VPN/软路由`用户使用</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>右侧</TableCell>
            <TableCell>地图</TableCell>
            <TableCell>导航路线</TableCell>
            <TableCell>约200MB内存占用</TableCell>
            <TableCell>仅promods</TableCell>
            <TableCell>仅限中国大陆`非VPN/软路由`用户使用</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250802091353.png"
        alt="Environment Visualization"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
        <Tabs defaultValue="plugin" className="not-prose">
          <TabsList>
            <TabsTrigger value="plugin">插件未开启</TabsTrigger>
            <TabsTrigger value="network">网络问题</TabsTrigger>
          </TabsList>
          <TabsContent value="plugin">
            <p>如果出现下图所显示的情况，请前往插件管理开启`可视化`插件</p>
            <ImageZoom
              src="https://tc.ets2la.cn/d/img/7/20250802091955.png"
              alt="Plugin disabled"
              width={800}
              height={400}
            />
          </TabsContent>
          <TabsContent value="network">
            <p>
              如果出现了下图所示的任何一种情况，你需要检查你的网络问题，如果你使用的是`Goodnight
              Mirror`，那么你需要检查你是否开启了VPN或者软路由的规则是否有问题，如果你使用的是`offical`那么你应该检查你是否开启了VPN
            </p>
            <ImageZoom
              src="https://tc.ets2la.cn/d/img/7/20250802120628.png"
              alt="Network issue"
              width={800}
              height={400}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Typography variant="h2" id="plugin-management">3.插件管理</Typography>
      <Typography variant="p">
        插件管理页面的布局分为
        <a href="/docs/usage/plugins#基础模式">基础模式</a>和
        <a href="/docs/usage/plugins#高级模式">高级模式</a>
        两种页面布局，这里就不给各位讲基础和高级模式中插件多少之间的区别了，这个可以点击相对应的文字跳转查看，就给各位讲讲两个模式逻辑的区别；
      </Typography>
      <Typography variant="h3">基础模式</Typography>
      <Typography variant="p">
        基础模式分为三块，最左边上方的为启用和关闭插件的位置，左侧下方为已启用插件显示的位置，右边为整个插件可选择区；右边整个插件可选择区域又需要讲一下他的逻辑；在右边你会看到每个插件的右上角会显示`已启用`或`禁用`的文字，这里的就是关键所在，`已启用`的就表示已勾选上，只要点击左侧的`启用插件`就会启用，反之`禁用`则表示未勾选上，点击就会显示`已启用`；
      </Typography>
      <Typography variant="p">
        例如：我们看下面这张图片，这张图片就表示`转向控制、环境可视化、文本转语音`插件是选择上的，`速度控制、HUD`则是没有选择上的，这是如果点启用插件，下方就会显示除了基础插件之外我们勾选上的插件
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250802122325.png"
        alt="Basic Mode Logic"
        width={800}
        height={400}
      />

      <Typography variant="h3">高级模式</Typography>
      <Typography variant="p">
        反观高级模式的逻辑就很清晰，点击哪个插件就启用哪个插件，根本没有选择一说，这里简单举个例子，`自适应巡航控制系统、HUD`两个插件是勾选上的，现在再随机点击一个插件他就会在上方的运行插件中显示（我这里点了`下一代HUD`）
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250802122939.png"
        alt="Advanced Mode Logic"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="catalogue">4.Catalogue</Typography>
      <Typography variant="p">
        这个页面的主要是一些第三方作者开发的适用于ETS2LA的插件，页面会通过检索
        <a href="https://github.com/ETS2LA/plugins" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        上的文件来加载这个列表，点击最上方的刷新可以手动刷新`可用插件`的列表
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250802123233.png"
        alt="Catalogue"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-bold">警告</p>
        <p>
          ETS2LA官方不对这些插件的内容以及所引发的问题负责，一切均由用户自己负责
        </p>
        <p>
          由于该页面检索的是GitHub上的内容，所有有些用户可能会无法访问/显示，请不要着急，我们不提供任何方法来处理，需要您自行寻找解决方法
        </p>
      </div>
      <div className="not-prose my-4 rounded-lg border border-l-4 border-red-500 bg-red-500/10 p-4 text-red-700 dark:text-red-300">
        <p className="font-bold">危险</p>
        <p>
          小白用户不要轻易使用该页面的内容，因为自己随意使用该页面插件所造成的后果（如ETS2LA无法打开、游戏崩溃/卡死、电脑无法上网等问题）ETS2LA中国区管理组不负责，也没有任何义务帮你解决
        </p>
      </div>

      <Typography variant="h2" id="performance">5.性能</Typography>
      <Typography variant="p">
        你可以在该页面可以看到ETS2LA的性能占用情况，左侧的系统表示整个ETS2LA目前所占用的CPU和内存，而右侧的插件选项可以看到每个已启用插件的帧数以及延迟
      </Typography>
      <Tabs defaultValue="system" className="not-prose">
        <TabsList>
          <TabsTrigger value="system">系统</TabsTrigger>
          <TabsTrigger value="plugins">插件</TabsTrigger>
        </TabsList>
        <TabsContent value="system">
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250803075607.png"
            alt="System Performance"
            width={800}
            height={400}
          />
        </TabsContent>
        <TabsContent value="plugins">
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250803075702.png"
            alt="Plugin Performance"
            width={800}
            height={400}
          />
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="wiki">6.Wiki</Typography>
      <Typography variant="p">
        该页面显示的是网站
        <a href="https://ets2la.com" target="_blank" rel="noopener noreferrer">
          https://ets2la.com
        </a>
        上的内容，但是其不支持多语言，英语强大的可以看看
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803081720.png"
        alt="Wiki"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="roadmap">7.Roadmap</Typography>
      <Typography variant="p">
        该页面是ETS2LA项目位于GitHub上面的计划/代办，点击之后会跳转只GitHub页面，无法访问请各位自行解决
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803081748.png"
        alt="Roadmap"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="settings">8.设置</Typography>
      <Typography variant="p">
        所有有关ETS2LA的设置都在这个页面，这个页面也是一个比较重要的页面，接下来我们就来详细介绍介绍设置页面
      </Typography>

      <Typography variant="h3">1.全局设置</Typography>
      <Typography variant="h4">1.用户界面</Typography>
      <Typography variant="p">
        该位置的设置主要用来调整页面的大小、透明度的多少以及修改语言，ETS2LA无法通过拖动软件边框来实现大小的调整，只能通过设置里面进行调整
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803090822.png"
        alt="UI Settings"
        width={800}
        height={400}
      />
      <Typography variant="h4">2.音频</Typography>
      <Typography variant="p">
        在这里主要就是调整声音的大小以及软件启动声音的开关
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803090921.png"
        alt="Audio Settings"
        width={800}
        height={400}
      />
      <Typography variant="h4">3.变量</Typography>
      <Typography variant="p">
        这里主要就是一些插件问题的解决办法，比如加速缓慢可以将`回退到旧的加速方式`勾选上，在比如插件无法显示，就可以将`缓慢加载`勾选上
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250807101155.png"
        alt="Variable Settings"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-red-500 bg-red-500/10 p-4 text-red-700 dark:text-red-300">
        <p className="font-bold">危险</p>
        <p>在该页面做任何修改都需要先关闭ETS2LA再重新打开才能生效</p>
      </div>
      <Typography variant="h4">4.杂项</Typography>
      <Typography variant="p">
        这里就是一些修改项，各位可以自行查看每个修改项的作用
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250807101518.png"
        alt="Misc Settings"
        width={800}
        height={400}
      />

      <Typography variant="h3">2.控制</Typography>
      <Typography variant="p">
        这里是设置按键的地方，具体的
        <a href="/docs/usage/basic#1按键更改">基础使用</a>
        里面有将，可以看看这里只放个图片
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803091101.png"
        alt="Controls"
        width={800}
        height={400}
      />

      <Typography variant="h3">3.SDK</Typography>
      <Typography variant="p">
        ETS2LA整个程序都是基于SDK来运行，没有SDK就无法获得任何游戏内的行为，也无法发送任何行为到游戏内，这一步在
        <a href="/docs/usage/basic#4sdk安装">新手引导</a>
        里面已经有过了；如果你想要卸载ETS2LA你需要先卸载SDK然后再运行卸载程序
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803091126.png"
        alt="SDK"
        width={800}
        height={400}
      />
      <Typography variant="p">
        接下来就到了一些插件设置，修改插件设置要求插件在启动的状态下才能进行修改，否则不能进行修改
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803091200.png"
        alt="Plugin Settings"
        width={800}
        height={400}
      />

      <Typography variant="h3">4.NGHUD</Typography>
      <Typography variant="h4">位置</Typography>
      <Typography variant="p">
        通过自行调整修改X、Y、Z轴的偏移值来修改NGHUD在AR上的位置，同时也可以通过修改L、C、R值的信息来修改单个组件的大小；当然也可以设置NGHUD的背景
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803091300.png"
        alt="NGHUD Position"
        width={800}
        height={400}
      />

      <Typography variant="h4">元素</Typography>
      <Typography variant="h5">启用的组件</Typography>
      <Typography variant="p">
        在`启用的组件`中点击组件可已将组件禁用，如果下方显示的顺序不是你想到的，目前你只能通过取消组件再启用组件来修改顺序，当前仍然
        <strong>无法</strong>
        通过直接拖动组件名称来修改组件位置
      </Typography>
      <Typography variant="h5">可用的组件</Typography>
      <Typography variant="p">通过点击`启用`按钮来将其添加到排序上</Typography>
      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>
          媒体组件是通过windows api获取的，如果你的播放器不支持windows api，则媒体组件不会显示音乐/视频信息
        </p>
      </div>
      <Typography variant="h5">渲染器</Typography>
      <Typography variant="p">
        这里的所有选项都建议开启（如果你只有一个屏幕的话），其余按个人需求开启
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803091338.png"
        alt="NGHUD Renderer"
        width={800}
        height={400}
      />

      <Typography variant="h3">5.AR</Typography>
      <Typography variant="p">修改AR插件的设置</Typography>

      <Typography variant="h3">6.可视化</Typography>
      <Typography variant="p">
        可以在同一局域网下使用移动设备查看环境可视化左侧内容
      </Typography>

      <Typography variant="h3">7.自适应巡航控制系统</Typography>
      <Typography variant="p">
        可以修改ACC插件的一些设置，比如忽略红路灯、超过道路限速行使（在速度控制中调整速度偏移量即可）
      </Typography>

      <Typography variant="h3">8.HUD</Typography>
      <Typography variant="p">NGHUD已足够完善，所以不做过多介绍</Typography>

      <Typography variant="h3">9.TTS</Typography>
      <Typography variant="p">
        文本转语音，可以将ETS2LA的提示信息通过语音的方式播报出来，可以适当减缓因为看不到信息而造成的翻车
      </Typography>

      <Typography variant="h3">10.地图</Typography>
      <Typography variant="p">所有设置均已完成翻译及解释，就不详细讲了</Typography>

      <Typography variant="h2" id="login">9.登录</Typography>
      <Typography variant="p">
        点击设置下方的匿名皆可进行登录，目前ETS2LA仅支持通过Discord登录，其余不支持
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250803083713.png"
        alt="Login"
        width={800}
        height={400}
      />
    </>
  )
}
