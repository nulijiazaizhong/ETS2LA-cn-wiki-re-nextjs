'use client'

import { Typography } from '@/components/Typography'
import Image from 'next/image'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function InstallPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'run-installer', level: 2, text: '1. 运行安装程序' },
      { id: 'select-language', level: 2, text: '2. 选择程序语言' },
      { id: 'start-install', level: 2, text: '3. 开始安装' },
      { id: 'accept-license', level: 2, text: '4. 接受许可证协议' },
      { id: 'anti-fraud', level: 2, text: '5. 防诈骗提示' },
      { id: 'install-location', level: 2, text: '6. 选择安装位置' },
      { id: 'download-source', level: 2, text: '7. 选择下载源' },
      { id: 'create-shortcut', level: 2, text: '8. 创建快捷方式' },
      { id: 'installing', level: 2, text: '9. 正在安装' },
      { id: 'complete', level: 2, text: '10. 安装完成' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">安装</Typography>
      <Typography variant="p">本章节将教你安装ETS2LA。</Typography>

      <Typography variant="h2" id="run-installer">1.运行安装程序</Typography>
      <Typography variant="p">
        双击运行刚才下载的安装程序，期间会跳出以下提示，直接点击`更多信息`，展开之后选择`仍要运行`即可
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084016.png"
        alt="Run installer"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="select-language">2.选择程序语言</Typography>
      <Typography variant="p">
        在完成上一步之后会来到选择语言的界面，选择`Simplified Chinese`并点击OK即可
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084028.png"
        alt="Select language"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="start-install">3.开始安装</Typography>
      <Typography variant="p">在安装程序引导页面点击下一步</Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084056.png"
        alt="Start installation"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="accept-license">4.接受许可证协议</Typography>
      <Typography variant="p">在许可证协议页面点击`我接受`</Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084122.png"
        alt="Accept license"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="anti-fraud">5.防诈骗提示</Typography>
      <Typography variant="p">
        在防诈骗页面勾选`我已知晓，如果我为本安装程序付费，那就是被骗了`，然后点击下一步
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084136.png"
        alt="Anti-fraud notice"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="install-location">6.选择安装位置</Typography>
      <Typography variant="p">
        在安装位置页面点击`浏览`，选择你要安装的位置，然后点击下一步
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084151.png"
        alt="Choose install location"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-yellow-500 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-300">
        <p className="font-bold">警告</p>
        <p>
          请不要使用中文路径；如果你的windows用户名是中文，则不要安装至c盘，且建议您将windows的用户名更改为英文之后再安装
        </p>
        <p>
          使用中文路径的话软件100%是安装不上的；使用非英文用户名的话，安装程序会有概率安装失败
        </p>
      </div>

      <Typography variant="h2" id="download-source">7.选择下载源</Typography>
      <Typography variant="p">
        国内用户选择`GitLab`并勾选`Aliyun PyPi Mirror`，然后点击下一步
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084211.png"
        alt="Select download source"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>
          如果你能连接到GitHub则使用GitHub，使用GitHub而无法下载的用户请自觉不要询问为什么无法下载，由于GitHub特性，使用GitHub下载源默认你知道怎样稳定链接到GitHub
        </p>
      </div>

      <Typography variant="h2" id="create-shortcut">8.创建快捷方式</Typography>
      <Typography variant="p">
        根据自己的需要选择创建对应的快捷方式，然后点击安装
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084226.png"
        alt="Create shortcuts"
        width={800}
        height={400}
      />

      <Typography variant="h2" id="installing">9.正在安装</Typography>
      <Typography variant="p">
        在正在安装页面，安装程序会下载python依赖，下载源码，安装依赖，该过程需要一段时间，请耐心等待
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084245.png"
        alt="Installing"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>
          正在安装用时不一，具体用时根据您的电脑配置和网络环境而决定，电脑配置好、网络畅通的可能5分钟不到就完成了，电脑配置不高、网络不通畅的可能需要30分钟或以上
        </p>
      </div>

      <Typography variant="h2" id="complete">10.安装完成</Typography>
      <Typography variant="p">
        根据自身需要选择是否启用ETS2LA或打开ETS2LA官网，然后点击完成
      </Typography>
      <Image
        src="https://tc.ets2la.cn/d/img/7/20250721084258.png"
        alt="Installation complete"
        width={800}
        height={400}
      />
      <div className="not-prose my-4 rounded-lg border border-l-4 border-green-500 bg-green-500/10 p-4 text-green-700 dark:text-green-300">
        <p className="font-bold">提示</p>
        <p>
          这边建议取消勾选ETS2LA，因为在启动ETS2LA时会下载一些文件，如果你的网络不好，可能会卡在下载文件上，导致每次启动都会出现警告
        </p>
      </div>
    </div>
  )
}
