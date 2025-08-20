import { Typography } from '@/components/Typography';
import ImageZoom from '@/components/ImageZoom';

export default function FirefoxPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">浏览器查看</Typography>
      <Typography variant="h2">简介</Typography>
      <Typography variant="p">
        如果你只是想在别的设备上查看环境可视化内部的话，那么该方法非常适合你。
      </Typography>
      <Typography variant="h2">准备工作</Typography>
      <Typography variant="p">
        一台其他设备（不管是手机还是平板，当然平板更好，更方便操作）。
      </Typography>
      <Typography variant="p">
        火狐浏览器（非必须，你仍然可以使用设备上自带的浏览器，但是你需要确保他不会将http协议自动转换为https，否则你仍然需要使用火狐/firefox浏览器）。
      </Typography>
      <Typography variant="h2">开始</Typography>
      <ol>
        <li>
          <Typography variant="p">
            在你的电脑上打开ETS2LA并启用可视化插件。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            进入游戏并确保游戏处于驾驶中而非菜单页面。
          </Typography>
        </li>
        <li>
          <Typography variant="p">
            打开ETS2LA的设置-可视化-其他设备，你应该能看到这样的页面，如果不是，请确保你已在设置中开启可视化插件。
          </Typography>
          <ImageZoom src="https://tc.ets2la.cn/d/img/7/20250819090706.png" alt="ETS2LA 可视化设置" width={800} height={450} />
        </li>
        <li>
          <Typography variant="p">
            在其他设备访问{' '}
            <a href="http://visualization.ets2la.com" target="_blank" rel="noopener noreferrer">
              http://visualization.ets2la.com
            </a>{' '}
            或者{' '}
            <a href="http://visualization.ets2la.cn" target="_blank" rel="noopener noreferrer">
              http://visualization.ets2la.cn
            </a>{' '}
            这两个网站中的任意一个，你看到的应该是这样的页面。
          </Typography>
          <ImageZoom src="https://tc.ets2la.cn/d/img/7/72b22c7914f28c2502e254303365f352.jpeg" alt="可视化连接页面" width={800} height={450} />
          <Typography variant="p">
            不要慌张，将从ETS2LA设置中看到的ip信息（192.168开头的，我这里是192.168.3.8:37522）填入到方框中（保留开头的ws://），然后点击
            `Retry Connection`，即可通过手机/平板查看环境可视化内部，像这样。
          </Typography>
          <ImageZoom src="https://tc.ets2la.cn/d/img/7/20250819091206.png" alt="连接成功" width={800} height={450} />
        </li>
      </ol>
    </div>
  );
}
