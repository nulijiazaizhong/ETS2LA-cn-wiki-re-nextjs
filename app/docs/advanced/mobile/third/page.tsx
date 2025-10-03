'use client';

import { Typography } from '@/components/Typography';
import ImageZoom from '@/components/ImageZoom';
import { useTableOfContents } from '@/contexts/TableOfContentsContext';
import { useEffect } from 'react';

const Admonition = ({
  type,
  title,
  children,
}: {
  type: 'warning' | 'info' | 'tip';
  title: string;
  children: React.ReactNode;
}) => {
  const colors = {
    warning: 'border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30',
    info: 'border-blue-500 bg-blue-100 dark:bg-blue-900/30',
    tip: 'border-green-500 bg-green-100 dark:bg-green-900/30',
  };
  return (
    <div className={`p-4 my-4 border-l-4 rounded-r-lg ${colors[type]}`}>
      <Typography variant="p" className="font-bold">
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default function ThirdPartyPage() {
  const { setToc } = useTableOfContents();
  const deviceId = '{2bb2012d-f11f-5f14-9f7c-7b8561770d7d}';

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('.prose h2, .prose h3, .prose h4')
    );
    const toc = headings.map((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      heading.id = id;
      return {
        id,
        level: parseInt(heading.tagName.substring(1)),
        text: heading.textContent || '',
      };
    });
    setToc(toc);
  }, [setToc]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">第三方方案查看</Typography>
      <Typography variant="p">
        如果你需要的是视频教程，请前往：
        <a
          href="https://www.bilibili.com/video/BV13i421U7zf?vd_source=6e30ea925d226d7994766112a1fd08e6"
          target="_blank"
          rel="noopener noreferrer"
        >
          几乎无延迟的无线副屏？sunshine+moonlight最强串流！【保姆级教学】
        </a>
        查看，本教程也是使用的该方案，只是做了精简。
      </Typography>

      <Typography variant="h2">1. 准备工作</Typography>
      <Typography variant="h3">软件</Typography>
      <Typography variant="p">
        下载并安装以下软件，其中Sunshine和ParsecVDisplay为PC端软件，moonlight为手机/平板端设备；安卓和HarmonyOS用户下载moolight需要使用谷歌商店或者F-Droid；苹果用户可直接在
        app store 中搜索到，HarmonyOS Next
        用户可直接在应用商店里面直接搜索 <code>moonlight</code> 即可安装。
      </Typography>
      <ol>
        <li>
          <a
            href="https://github.com/LizardByte/Sunshine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sunshine
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nomi-san/parsec-vdd"
            target="_blank"
            rel="noopener noreferrer"
          >
            ParsecVDisplay
          </a>
        </li>
        <li>
          <a
            href="https://moonlight-stream.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            moonlight
          </a>
        </li>
      </ol>

      <Typography variant="h3">镜像下载</Typography>
      <ol>
        <li>
          <a
            href="https://download.ets2la.cn/s/LODfBw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sunshine
          </a>
        </li>
        <li>
          <a
            href="https://download.ets2la.cn/s/KXw9tq"
            target="_blank"
            rel="noopener noreferrer"
          >
            ParsecVDisplay
          </a>
        </li>
        <li>
          <a
            href="https://download.ets2la.cn/s/hPb3aO"
            target="_blank"
            rel="noopener noreferrer"
          >
            moonlight
          </a>
        </li>
      </ol>

      <Typography variant="h2">2. 配置</Typography>
      <Typography variant="h3">1. Sunshine</Typography>
      <Typography variant="h4">1. 创建账号</Typography>
      <Typography variant="p">
        安装完Sunshine之后，我们打开浏览器并在地址栏中输入{' '}
        <code>https://localhost:47990</code>{' '}
        或者右键任务栏中Sunshine的图标，并选择 <code>Open Sunshine</code>{' '}
        即可在浏览器中看到Sunshine的欢迎页面。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250820231853.png"
        alt="Sunshine welcome page"
        width={800}
        height={450}
      />
      <Typography variant="p">
        我们在 <code>Username</code> 中输入用户名，在{' '}
        <code>Password</code> 和 <code>Confirm password</code>{' '}
        中输入密码，再点击 <code>login</code> 即可进入到Sunshine的主页。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250820232104.png"
        alt="Sunshine home page"
        width={800}
        height={450}
      />

      <Typography variant="h4">2. 修改语言</Typography>
      <Typography variant="p">
        点击顶部的 <code>Configuration</code> ，在{' '}
        <code>General</code> 选项卡中点击 <code>Locale</code>{' '}
        ，下拉找到 <code>简体中文</code> ，然后点击🟦的{' '}
        <code>Save</code> 保存设置，最后再点击🟩的{' '}
        <code>Apply</code> 或在任务栏中右键Sunshine的图标并选择{' '}
        <code>restart</code> 之后按住 <code>Ctrl+Shift+R</code>
        来刷新页面。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250820232550.png"
        alt="Sunshine language settings"
        width={800}
        height={450}
      />

      <Typography variant="h3">2. Moonlight</Typography>
      <Typography variant="h4">1. 连接</Typography>
      <Typography variant="p">
        要想使用Moonliht连接上Sunshine，我们需要先知道电脑的局域网ip地址是多少，最简单粗暴的方式就是通过查看
        Windows任务管理器中以太网/Wi-Fi中显示的ipv4
        地址后面的内容即可得到，如图：
      </Typography>
      <Typography variant="p">Windows 11</Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821042234.png"
        alt="Windows 11 IP address"
        width={800}
        height={450}
      />
      <Typography variant="p">Windows 10</Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821052705.png"
        alt="Windows 10 IP address"
        width={800}
        height={450}
      />

      <Admonition type="warning" title="注意">
        <Typography variant="p">
          这里Windows 10
          的截图是使用的虚拟机，所以显示的网卡型号不是正常型号；
          如果你和我一样，安装了虚拟机或者有虚拟网卡的话，请下载一些东西，让网卡处于活跃状态，这样可以更好/快的辨认出来。
        </Typography>
      </Admonition>

      <Typography variant="h4">2. 添加</Typography>
      <Admonition type="info" title="说明">
        <Typography variant="p">
          这里以 HarmonyNext
          系统中的为例（应用商店显示的开发者为
          李快，我没找到相关链接，所以就不添加链接了），布局方面可能有所不同，但功能都是相同的。
        </Typography>
      </Admonition>
      <Typography variant="p">
        打开软件之后点击右上角的 ➕
        按钮，在输入框中输入上一步获取到的ip地址信息，点击后面🟦的✔按钮，当我们输入完成之后会在软件的主页面上显示出你电脑的设备名称。
      </Typography>

      <Typography variant="h4">3. 配对</Typography>
      <Typography variant="p">
        点击电脑的设备名称，会提示 <code>配对新设备</code>{' '}
        让我们输入PIN码，这时我们回到Sunshine的网页，点击顶部的PIN码
        ，我们输入设备上显示的PIN码以及
        Moonlight中显示的设备名称。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821051133.png"
        alt="Sunshine PIN input"
        width={800}
        height={450}
      />
      <Typography variant="p">
        然后点击🟦的 <code>发送按钮</code> ，然后就会出现{' '}
        <code>成功，请检查 Moonlight 以继续</code> 的字样。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/b5f87552c618d6a2bcea0af1e9ab73a8.png"
        alt="Sunshine pairing success"
        width={800}
        height={450}
      />
      <Typography variant="p">
        这时，我们手机/平板的Moonlight 上就会显示 <code>DESKTOP</code> 和{' '}
        <code>STEAM</code> 的图标，点击 <code>DESKTOP</code>{' '}
        即可映射电脑屏幕。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/dea8df36a3280384d23b67e194679a9a_720.jpg"
        alt="Moonlight desktop icon"
        width={800}
        height={450}
      />

      <Typography variant="h3">3. ParsecVDisplay</Typography>
      <Typography variant="p">
        先简单介绍一下， ParsecVDisplay 是用来创建虚拟屏幕的软件。
      </Typography>
      <Typography variant="h4">1. 创建虚拟屏幕</Typography>
      <Typography variant="p">软件刚安装完打开是这样子的：</Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821053152.png"
        alt="ParsecVDisplay initial screen"
        width={800}
        height={450}
      />
      <Typography variant="p">
        我们点击 <code>ADD DISPLAY</code> ，即可创建一个屏幕出来，像这样：
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821053330.png"
        alt="ParsecVDisplay with new display"
        width={800}
        height={450}
      />
      <Typography variant="p">
        我们可以右键创建出来的屏幕，在 <code>Resolution</code>{' '}
        中选择屏幕大小，在 <code>Refresh rate</code> 中选择屏幕刷新率；
        注意：这里需要记录一下 第二行的值，后面我们会用上，我这里的就是{' '}
        <code>\\.\DISPLAY5</code>
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821053508.png"
        alt="ParsecVDisplay settings"
        width={800}
        height={450}
      />

      <Admonition type="tip" title="提示">
        <Typography variant="p">
          如果没有适合的屏幕分辨率，可以点击下方的 <code>CUSTOM</code>{' '}
          来手动设置屏幕分辨率以及刷新率。
        </Typography>
        <ImageZoom
          src="https://tc.ets2la.cn/d/img/7/20250821053809.png"
          alt="ParsecVDisplay custom resolution"
          width={800}
          height={450}
        />
      </Admonition>

      <Typography variant="h4">2. 获取屏幕 device_id 信息</Typography>
      <Typography variant="p">
        在配置好 ParsecVDisplay 之后，我们回到 Sunshine
        中，选择最上方的故障排除，点击重启 Sunshine；
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821054238.png"
        alt="Sunshine troubleshooting"
        width={800}
        height={450}
      />
      <Typography variant="p">
        然后我们把目光移向
        日志，将之前在 ParsecVDisplay 中记录的第二行的值中的数字部分复制到查找框中，像这样：
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821054921.png"
        alt="Sunshine log search"
        width={800}
        height={450}
      />
      <Typography variant="p">
        然后我们将 搜索到的 “5” 上面那一行{' '}
        <code>
          “device_id”: &#123;2bb2012d-f11f-5f14-9f7c-7b8561770d7d&#125;
        </code>{' '}
        中的冒号后面的引号中间的内容复制下来，我这里就是{' '}
        <code>{deviceId}</code>
      </Typography>

      <Typography variant="h4">3. 添加到 Sunshine</Typography>
      <Typography variant="p">
        点击 Sunshine 顶部中的 <code>配置</code> ，再选择{' '}
        <code>Audio/Vedio</code> ，将上面复制的{' '}
        <code>device_id</code> 的值填入到 <code>输出名称中</code>{' '}
        ，点击保存，然后再点击应用，等待 Sunshine 完成重启。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821055554.png"
        alt="Sunshine output name setting"
        width={800}
        height={450}
      />

      <Typography variant="h2">3. 使用显示</Typography>
      <Typography variant="p">
        在手机/平板端中点击 Moonlight 中的 <code>DESKTOP</code>{' '}
        就可以看到显示了电脑屏幕上的内容，我们打开设置，选择屏幕，就可以看到我们现在有两个屏幕了。
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250821055923.png"
        alt="Windows display settings with two screens"
        width={800}
        height={450}
      />
      <Typography variant="p">
        这个位置显示的 位置就是我们屏幕的位置；
        例如：我的2号屏幕在我的左手边，那么我只要把鼠标往左边移动就可以进入到左边的屏幕；在选中的情况下进行拖动就可以调整位置。
      </Typography>

      <Typography variant="h2">4. 结束</Typography>
      <Typography variant="p">
        好了，以上就是使用第三方工具来显示 ETS2LA其他页面内容的方法了；台式机也是同样适用该方法的，毕竟这是最省钱的方法。
      </Typography>
    </div>
  );
}
