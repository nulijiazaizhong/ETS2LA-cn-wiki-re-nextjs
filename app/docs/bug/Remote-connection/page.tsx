import { Typography } from '@/components/Typography';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Typography variant="h1">远程连接</Typography>
      <Typography variant="h2">可视化</Typography>
      <Typography>
        您可以使用外部设备（如平板电脑）连接到本地计算机上运行的 ETS2LA 实例
      </Typography>
      <ol className="list-decimal pl-6">
        <li>确保您的计算机和外部设备都连接到同一网络</li>
        <li>确保在 ETS2LA 中启用了<code>可视化</code>插件</li>
        <li>
          在设备的浏览器中打开&nbsp;
          <Link href="http://visualization.ets2la.com">http://visualization.ets2la.com</Link> 或 <Link href="https://visualization.ets2la.cn">https://visualization.ets2la.cn</Link>
          <br />
          <strong>注意 HTTP 协议，不支持 HTTPS。</strong>&nbsp;您将需要一个允许纯 HTTP 连接（如 Firefox）的浏览器
        </li>
        <li>按红色的<code>Remote Connection</code>按钮连接到您的 PC</li>
      </ol>
      <Typography>
        如果以上步骤不起作用，您可以按照以下故障排除步骤作
      </Typography>
      <ol className="list-decimal pl-6">
        <li>
          确保您的计算机可以访问&nbsp;
          <Link href="http://ets2la.local:37520">http://ets2la.local:37520</Link>
          <br />
          打开页面应显示 ETS2LA 版本
        </li>
        <li>
          确保您的设备可以访问&nbsp;
          <Link href="http://ets2la.local:37520">http://ets2la.local:37520</Link>
          <br />
          如果不能，则问题出在您的设备和计算机之间。在这种情况下，我们无能为力，因为网络环境不是统一的
        </li>
        <li>
          尝试手动键入计算机的 IP 地址，而不是按 <code>Remote Connection</code> 按钮
          <br />
          此 IP 地址在&nbsp;<code>可视化</code>&nbsp;插件设置中提供，您也可以通过在终端中运行&nbsp;<code>ipconfig</code>&nbsp;来找到它
        </li>
      </ol>
      <Typography variant="h2">网络前端</Typography>
      <Typography>
        您还可以从外部设备控制计算机上的 ETS2LA 实例。这确实有一些限制，但大多数设置应该可用
      </Typography>
      <ol className="list-decimal pl-6">
        <li>确保您的计算机和设备都连接到同一网络</li>
        <li>
          在设备的浏览器中打开&nbsp;
          <Link href="http://app.ets2la.com">http://app.ets2la.com</Link>
          <br />
          <strong>注意 HTTP 协议，不支持 HTTPS。</strong>&nbsp;您将需要一个允许纯 HTTP 连接（如 Firefox）的浏览器
        </li>
        <li>如果可以，该页面将自动连接到 ETS2LA 实例</li>
      </ol>
      <Typography>
        如果以上步骤不起作用，您可以按照以下故障排除步骤作
        <br />
        按照上述<code>可视化</code>部分中的步骤 1 和 2 进行操作
        <br />
        WebUI 无法手动选择 IP 地址。如果您无法访问 WebUI，请在 Discord 上联系我们
      </Typography>
    </>
  );
}
