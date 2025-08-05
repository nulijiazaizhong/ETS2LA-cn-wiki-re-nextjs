'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageZoom from '@/components/ImageZoom'
import { Typography } from '@/components/Typography'
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function PreparePage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const toc = [
      { id: 'install-cpp', level: 2, text: '1. 下载并安装C++ runtime' },
      { id: 'install-nodejs', level: 2, text: '2. 下载并安装Node.js' },
      { id: 'download-ets2la', level: 2, text: '3. 下载ETS2LA安装文件' },
    ]
    setToc(toc)
  }, [setToc])

  return (
    <div className="prose dark:prose-invert max-w-none p-8">
      <Typography variant="h1">准备工作</Typography>
      <Typography variant="p">
        本章节将教您如何完成安装ETS2LA之前的准备工作。
      </Typography>

      <Typography variant="h2" id="install-cpp">
        1.下载并安装C++ runtime
      </Typography>
      <Typography variant="p">
        <strong>1. 下载C++ runtime</strong>
      </Typography>
      <Typography variant="p">
        使用
        <a
          href="https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          微软官方链接
        </a>
        下载C++ runtime
      </Typography>
      <ImageZoom
        src="https://tc.ets2la.cn/d/img/7/20250721083818.png"
        alt="Download C++ runtime"
        width={800}
        height={400}
      />

      <Typography variant="p">
        <strong>2. 安装C++ runtime</strong>
      </Typography>
      <Typography variant="p">
        双击下载下来的文件，会出现以下两种结果，根据自己情况选择。
      </Typography>
      <Tabs defaultValue="not-installed" className="not-prose">
        <TabsList>
          <TabsTrigger value="not-installed">未安装</TabsTrigger>
          <TabsTrigger value="installed">已安装</TabsTrigger>
        </TabsList>
        <TabsContent value="not-installed">
          <p>勾选`我同意许可条款和条件`，点击`安装`即可。</p>
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250721083842.png"
            alt="Install C++ runtime"
            width={600}
            height={400}
          />
        </TabsContent>
        <TabsContent value="installed">
          <p>如果安装了则会出现以下页面，直接点击`关闭`即可</p>
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250721083908.png"
            alt="C++ runtime already installed"
            width={600}
            height={400}
          />
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="install-nodejs">
        2.下载并安装Node.js
      </Typography>
      <Tabs defaultValue="newbie" className="not-prose">
        <TabsList>
          <TabsTrigger value="newbie">初学者</TabsTrigger>
          <TabsTrigger value="master">进阶玩家</TabsTrigger>
        </TabsList>
        <TabsContent value="newbie">
          <p>
            前往
            <a
              href="https://nodejs.org/en/download/"
              target="_blank"
              rel="noopener noreferrer"
            >
              官网
            </a>
            下载安装包，安装时一路NEXT即可；
          </p>
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250721083921.png"
            alt="Node.js website"
            width={800}
            height={400}
          />
          <p>
            如
            <a
              href="https://nodejs.org/en/download/"
              target="_blank"
              rel="noopener noreferrer"
            >
              官网
            </a>
            速度过慢，可访问
            <a
              href="https://nodejs.cn/download/"
              target="_blank"
              rel="noopener noreferrer"
            >
              nodejs中文网
            </a>
            下载安装包
          </p>
          <ImageZoom
            src="https://tc.ets2la.cn/d/img/7/20250721083940.png"
            alt="Node.js China mirror"
            width={800}
            height={400}
          />
          <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
            <p className="font-bold">提示</p>
            <p>仍在使用Windows 8及更低版本系统的用户不建议尝试使用ETS2LA</p>
          </div>
        </TabsContent>
        <TabsContent value="master">
          <p>推荐使用NVM管理多个版本的node</p>
          <div className="not-prose my-4 rounded-lg border border-l-4 border-blue-500 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
            <p className="font-bold">提示</p>
            <p>
              NVM只能管理安装到其安装目录下的node版本，对于使用安装包安装的node，NVM无法管理且会锁定node版本，这时使用nvm命令切换版本是无效的
            </p>
            <p>
              NVM下载地址：
              <a
                href="https://github.com/coreybutler/nvm-windows/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{' '}
              |{' '}
              <a
                href="https://nvm.uihtm.com/doc/download-nvm.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                nvm中文网
              </a>
            </p>
            <p>NVM常用命令</p>
            <pre>
              <code>
                {`nvm install 版本号    #安装指定版本的nodejs
nvm use 版本号        #切换nodejs版本`}
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>

      <Typography variant="h2" id="download-ets2la">
        3.下载ETS2LA安装文件
      </Typography>
      <Tabs defaultValue="github" className="not-prose">
        <TabsList>
          <TabsTrigger value="github">官方</TabsTrigger>
          <TabsTrigger value="mirror">镜像</TabsTrigger>
        </TabsList>
        <TabsContent value="github">
          <p>
            前往
            <a
              href="https://ets2la.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              官方
            </a>
            安装程序在
            <a
              href="https://github.com/ETS2LA/installer/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub上的发布页
            </a>
            ,找到最新的安装包并下载即可。
          </p>
        </TabsContent>
        <TabsContent value="mirror">
          <p>
            前往
            <a
              href="https://downloads.ets2la.cn/installer"
              target="_blank"
              rel="noopener noreferrer"
            >
              镜像
            </a>
            下载站并下载括号内日期最近的文件。
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
