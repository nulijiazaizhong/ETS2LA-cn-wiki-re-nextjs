'use client';

import { useEffect } from 'react';
import { Typography } from '@/components/Typography';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
  type BundledLanguage,
} from '@/components/ui/kibo-ui/code-block';
import ImageZoom from '@/components/ImageZoom';
import { useTableOfContents } from '@/contexts/TableOfContentsContext';

export default function Page() {
  const { setToc } = useTableOfContents();

  useEffect(() => {
    const tocItems = Array.from(document.querySelectorAll('h2')).map((h2) => ({
      id: h2.id,
      level: 2,
      text: h2.textContent || '',
    }));
    setToc(tocItems);
  }, [setToc]);

  return (
    <div>
      <Typography variant="h1">手动安装</Typography>

      <Typography variant="h2" id="install-git">1. 安装git</Typography>
      <Typography>
        从<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">git官网</a>下载并安装git，安装时默认一直 `next` 即可
      </Typography>

      <Typography variant="h2" id="install-uv">2. 安装 UV</Typography>
      <Typography>
        使用终端管理员运行以下命令
      </Typography>
      <CodeBlock defaultValue="powershell" data={[{ language: 'powershell', filename: 'PowerShell', code: 'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"' }]}>
        <CodeBlockHeader>
          <CodeBlockFilename value="powershell">PowerShell</CodeBlockFilename>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
      <Typography>
        当终端中出现下图所显示的内容时则表明完成安装
      </Typography>
      <ImageZoom src="https://tc.ets2la.cn/d/img/7/20250911093034.png" alt="UV 安装完成" width={700} height={250} />

      <Typography variant="h2" id="clone-repository">3. 克隆仓库</Typography>
      <Typography variant="list">
        <li>在无云端同步服务的文件夹下创建文件夹，文件夹名称使用纯英文</li>
        <li>进入到创建的文件夹内，右键选择 `在终端中打开`</li>
        <li>在打开的终端内执行以下命令</li>
      </Typography>
      <CodeBlock defaultValue="bash" data={[{ language: 'bash', filename: 'Bash', code: 'git clone https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist.git' }]}>
        <CodeBlockHeader>
          <CodeBlockFilename value="bash">Bash</CodeBlockFilename>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
      <Typography variant="list">
        <li>命令运行完成之后进入到 `Euro-Truck-Simulator-2-Lane-Assist` 文件夹内再输入 `uv sync` 安装依赖</li>
      </Typography>
      <CodeBlock defaultValue="bash" data={[{ language: 'bash', filename: 'Bash', code: 'uv sync' }]}>
        <CodeBlockHeader>
          <CodeBlockFilename value="bash">Bash</CodeBlockFilename>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
      <Typography variant="list">
        <li>依赖安装完成之后输入 `uv run main.py` 来启动ETS2LA</li>
      </Typography>
      <CodeBlock defaultValue="bash" data={[{ language: 'bash', filename: 'Bash', code: 'uv run main.py' }]}>
        <CodeBlockHeader>
          <CodeBlockFilename value="bash">Bash</CodeBlockFilename>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>

      <Typography variant="h2" id="simplify-startup">4. 简化启动</Typography>
      <Typography>
        可以通过创建批处理文件简化启动流程
        在 `Euro-Truck-Simulator-2-Lane-Assist` 文件夹内新建文本文档，将以下内容复制到文本文档中，将文本文档重命名为 `start.bat` (该步骤需要在资源管理器中打开文件后缀显示才能更改成功)
      </Typography>
      <CodeBlock defaultValue="batch" data={[{ language: 'batch', filename: 'start.bat', code: '@echo off\ncd /d %~dp0\nuv run main.py\npause' }]}>
        <CodeBlockHeader>
          <CodeBlockFilename value="batch">start.bat</CodeBlockFilename>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    </div>
  );
}
