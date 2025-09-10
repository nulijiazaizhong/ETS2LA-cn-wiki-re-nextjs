'use client'

import { Typography } from '@/components/Typography';
import Link from 'next/link';
import { useEffect } from 'react';
import { useTableOfContents } from '@/contexts/TableOfContentsContext';

export default function Page() {
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
      <Typography variant="h1">无法安装</Typography>
      <Typography variant="h2" id="installer-wont-open">安装程序打不开</Typography>
      <Typography>
        我们使用名为 <code>NSIS</code> 的标准化安装程序。该程序也被许多其他应用程序使用。如果安装程序甚至无法打开，请检查您的防病毒设置以确保它没有被阻止。还要确保您从
        <Link href="https://github.com/ets2la/installer/releases/latest">
          官方存储库
        </Link>
        （github.com）或
        <Link href="https://downloads.ets2la.cn/public/share/M7sjeYENhGbNcauzgmftBA">
          国内镜像
        </Link>
        (ets2la.cn) 下载安装程序
      </Typography>
      <Typography variant="h2" id="error-messages">安装时显示错误消息</Typography>
      <Typography>
        如果安装程序引发错误消息，则可能是多种情况之一。要正确确定您面临的问题，请单击 <code>确定</code> 在错误消息上，然后单击 <code>显示详细信息</code> 安装程序窗口中的按钮。然后，您可以查看最新的日志，以将它们与下面看到的案例进行匹配
      </Typography>
      <Typography variant="h3" id="warning-retrying"><code>WARNING: Retrying (Retry(total=4...</code></Typography>
      <Typography>
        这意味着安装程序在连接到 python 服务器时遇到问题。请检查您的互联网连接并确保您可以访问 python。通常，再安装时勾选 <code>aliyun mirror</code>可以解决这个问题，如果你勾选了仍然没有解决这个问题，可以尝试使用我 <i>修改过</i> 的包含 <i>我自建的</i>  python 加速选项的
        <Link href="https://downloads.ets2la.cn/public/share/5-kQkZQ4kiMCd1RtmBZMkg">
          安装包
        </Link>
        ；当然如果你有一些 <i>特殊手段</i> 也是可以的
      </Typography>
      <Typography variant="h3" id="fatal-destination-exists"><code>fatal: destination path '.' already exists and is not an empty directory.</code></Typography>
      <Typography>
        这意味着您尝试将 ETS2LA 安装到的目录不为空。如果您没有更改任何设置，则应删除 <code>C：\ETS2LA</code> 文件夹并重试
      </Typography>
      <Typography variant="h3" id="fatal-unable-access"><code>fatal: unable to access '...'</code></Typography>
      <Typography>
        这意味着安装程序无法连接到您选择的下载镜像。请检查您的互联网连接并确保您可以访问至少一个镜像。通常，国内用户可以通过选择CNB仓库来解决这个问题
      </Typography>
      <Typography variant="h3" id="warning-remote-branch"><code>warning: Could not find remote branch rewrite to clone.</code></Typography>
      <Typography>
        这意味着您仍在使用与存储库所做的更改不兼容的旧安装程序。请从
        <Link href="https://github.com/ets2la/installer/releases/latest">
          官方存储库
        </Link>
        （github.com）或
        <Link href="https://downloads.ets2la.cn/public/share/M7sjeYENhGbNcauzgmftBA">
          国内镜像
        </Link>
        (ets2la.cn) 下载最新版本的安装程序
      </Typography>
      <Typography variant="h2" id="installer-crash">安装程序完全崩溃</Typography>
      <Typography>
        这还没有发生，但如果发生了，请立即通过我们的
        <Link href="https://ets2la.com/discord">
          Discord 服务器
        </Link>
        （ets2la.com）或
        <Link href="https://yhfx.jwznb.com/share?key=3gn9gaH3qMps&ts=1754318808">
          云湖
        </Link>
        联系我们与我们联系。我们会尽快修复它。安装程序崩溃永远不会发生。
      </Typography>
    </div>
  );
}
