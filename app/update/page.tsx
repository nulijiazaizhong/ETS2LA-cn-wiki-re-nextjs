'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Typography } from '@/components/Typography'
import { UpdateCodeBlock } from '@/components/UpdateCodeBlock'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'
import { useEffect, useState } from 'react'

export default function UpdatePage() {
  const { setToc } = useTableOfContents()
  const [isAlertOpen, setIsAlertOpen] = useState(true)

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2')
    const tocItems = Array.from(headings).map((heading) => ({
      id: heading.id,
      level: parseInt(heading.tagName.substring(1), 10),
      text: heading.textContent || '',
    }))
    setToc(tocItems)
  }, [setToc])

  return (
    <>
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-500">提示</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div>
                <p className="text-yellow-500">
                  本页面所有更新内容均来自
                  <a
                    href="https://discord.com/channels/1120719484982939790/1120734880133820537"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    discord社区updates频道
                  </a>
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsAlertOpen(false)}>
              我已了解
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="p-8">
        <Typography variant="h1" id="2025-09-01">
          2025.09.01
        </Typography>

        <div id="2025-09-01-23-51" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-23-51">
            23:51
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： TTS will now handle the initial case of no
            closest city.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Previously this would throw an error.</li>
              <li>TTS will now also log more errors if the happen.</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7a655b7725ef9c678d1e4c68d7809472db9574e5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={'=== Plugins/TTS/main.py ===\n+ 86 lines\n- 65 lines'}
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 7a655b772
          </p>
          <p className="mt-4">
            <strong>标题</strong>： TTS 现在将处理没有最近城市的初始情况。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>以前这会抛出错误。</li>
              <li>如果发生这种情况，TTS 现在还将记录更多错误。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7a655b7725ef9c678d1e4c68d7809472db9574e5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={'=== Plugins/TTS/main.py ===\n+ 86 lines\n- 65 lines'}
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 7a655b772
          </p>
        </div>

        <div id="2025-09-01-23-12" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-23-12">
            23:12
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Fix about page crashing when user does not
            have any usage time.
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d326254b6ad15f9932e64903f1045e0716259ca5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== Pages/about.py ===\n+ 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: d326254b6
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 修复用户没有任何使用时间时页面崩溃的问题。
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d326254b6ad15f9932e64903f1045e0716259ca5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== Pages/about.py ===\n+ 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: d326254b6
          </p>
        </div>

        <div id="2025-09-01-23-11" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-23-11">
            23:11
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Fix ACC not ignoring time spent paused
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/9c321287e1f8cd9cf83bebcdc93328447086e29a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 3 lines\n- 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 9c321287e
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 修复 ACC 不忽略暂停所花费的时间
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/9c321287e1f8cd9cf83bebcdc93328447086e29a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 3 lines\n- 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 9c321287e
          </p>
        </div>

        <div id="2025-09-01-21-47" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-21-47">
            21:47
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Update TTS
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Fix speedlimit notifications.</li>
              <li>Fix closest city notifications.</li>
              <li>Fix route distance notifications.</li>
              <li>Add notifications about incoming traffic lights.</li>
              <li>Add notification when changing headlight status.</li>
              <li>Increase update rate to 2fps instead of 1fps.</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b73829f5f1054866b054348b3a9d73eb8d1cdc50"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/Map/route/classes.py ===\n+ 4 lines\n- 11 lines\n\n=== Plugins/TTS/main.py ===\n+ 3 lines\n- 5 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: b73829f5f
          </p>
        </div>

        <div id="2025-09-01-21-31" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-21-31">
            21:31
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Update TTS
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Fix speedlimit notifications.</li>
              <li>Fix closest city notifications.</li>
              <li>Fix route distance notifications.</li>
              <li>Add notifications about incoming traffic lights.</li>
              <li>Add notification when changing headlight status.</li>
              <li>Increase update rate to 2fps instead of 1fps.</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b73829f5f1054866b054348b3a9d73eb8d1cdc50"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/Map/route/classes.py ===\n+ 4 lines\n- 11 lines\n\n=== Plugins/TTS/main.py ===\n+ 3 lines\n- 5 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: b73829f5f
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 更新 TTS
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>修复限速通知。</li>
              <li>修复最近的城市通知。</li>
              <li>修复路线距离通知。</li>
              <li>添加有关传入交通信号灯的通知。</li>
              <li>更改大灯状态时添加通知。</li>
              <li>将更新速率提高到 2fps 而不是 1fps。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b73829f5f1054866b054348b3a9d73eb8d1cdc50"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 6 lines\n- 4 lines\n\n=== Plugins/TTS/main.py ===\n+ 130 lines\n- 49 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: b73829f5f
          </p>
        </div>

        <div id="2025-09-01-21-47-2" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-21-47-2">
            21:47
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Slight tweaks to TTS and Map
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Fix Map turning indicators on and off constantly causing lag.
              </li>
              <li>Tweak TTS route distance notification frequency.</li>
              <li>
                TTS will now say distances to cities in game distance (20x
                higher), not real distance.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/50c10416aed27526bc9103fb2e4b266993fac04e"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/Map/route/classes.py ===\n+ 4 lines\n- 11 lines\n\n=== Plugins/TTS/main.py ===\n+ 3 lines\n- 5 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 50c10416a
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 对 TTS 和地图进行了轻微调整
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>修复地图转向指示灯不断打开和关闭导致滞后的问题。</li>
              <li>调整 TTS 路由距离通知频率。</li>
              <li>
                TTS 现在会以游戏距离（高 20 倍）显示到城市的距离，而不是实际距离。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/50c10416aed27526bc9103fb2e4b266993fac04e"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 6 lines\n- 4 lines\n\n=== Plugins/TTS/main.py ===\n+ 130 lines\n- 49 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 50c10416a
          </p>
        </div>

        <div id="2025-09-01-21-31-2" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-21-31-2">
            21:31
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Update TTS
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Fix speedlimit notifications.</li>
              <li>Fix closest city notifications.</li>
              <li>Fix route distance notifications.</li>
              <li>Add notifications about incoming traffic lights.</li>
              <li>Add notification when changing headlight status.</li>
              <li>Increase update rate to 2fps instead of 1fps.</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b73829f5f1054866b054348b3a9d73eb8d1cdc50"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/Map/route/classes.py ===\n+ 4 lines\n- 11 lines\n\n=== Plugins/TTS/main.py ===\n+ 3 lines\n- 5 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: b73829f5f
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 更新 TTS
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>修复限速通知。</li>
              <li>修复最近的城市通知。</li>
              <li>修复路线距离通知。</li>
              <li>添加有关传入交通信号灯的通知。</li>
              <li>更改大灯状态时添加通知。</li>
              <li>将更新速率提高到 2fps 而不是 1fps。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b73829f5f1054866b054348b3a9d73eb8d1cdc50"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 6 lines\n- 4 lines\n\n=== Plugins/TTS/main.py ===\n+ 130 lines\n- 49 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: b73829f5f
          </p>
        </div>

        <div id="2025-09-01-20-18" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-20-18">
            20:18
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Add dependencies with uv.
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/efe158298f80d135e19bd53f568340ebd1f3de6d"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== .gitignore ===\n+ 2 lines\n\n=== pyproject.toml ===\n+ 46 lines\n- 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: efe158298
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 使用 uv 添加依赖项。
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/efe158298f80d135e19bd53f568340ebd1f3de6d"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== .gitignore ===\n+ 2 lines\n\n=== pyproject.toml ===\n+ 46 lines\n- 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: efe158298
          </p>
        </div>

        <div id="2025-09-01-19-58" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-19-58">
            19:58
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Language can no longer be set to be empty.
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/63587cabe14e53adccc7ecc550fa3ef4b0d1f448"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Pages/global_settings.py ===\n+ 2 lines\n- 1 lines\n\n=== Pages/onboarding.py ===\n+ 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 63587cabe
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 语言不能设置为空。
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/63587cabe14e53adccc7ecc550fa3ef4b0d1f448"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Pages/global_settings.py ===\n+ 2 lines\n- 1 lines\n\n=== Pages/onboarding.py ===\n+ 2 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 63587cabe
          </p>
        </div>

        <div id="2025-09-01-19-04" className="mt-8">
          <Typography variant="h2" id="title-2025-09-01-19-04">
            19:04
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Cleanup codebase.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Remove old unused plugins.</li>
              <li>
                ETS2LA is now ruff and black compliant, the linter shows no
                errors. Before this commit ETS2LA raised around 3500 errors.
              </li>
              <li>
                ETS2LA is now formatted using the ruff formatter. This
                formatting applies to all files and default plugins. Plugin
                developers can turn off the formatting if they wish to.
              </li>
              <li>
                Add a pyproject.toml file. We will be transitioning from
                metadata.json into the standardized pyproject format.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/3f0f2b67bc1a74b99458a5234dc3efc5a6d851fc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '... 163 files changed ...\n+ 17280 lines\n- 12044 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 3f0f2b67b
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 清理代码库。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>删除旧的未使用的插件。</li>
              <li>
                ETS2LA 现在符合 ruff 和 black 标准，linter 没有显示错误。在此提交之前，ETS2LA
                引发了大约 3500 个错误。
              </li>
              <li>
                ETS2LA 现在使用翻边格式化程序进行格式化。此格式适用于所有文件和默认插件。插件开发人员可以根据需要关闭格式。
              </li>
              <li>
                添加一个 pyproject.toml 文件。我们将从 metadata.json
                过渡到标准化的 pyproject 格式。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/3f0f2b67bc1a74b99458a5234dc3efc5a6d851fc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '... 163 files changed ...\n+ 17280 lines\n- 12044 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 3f0f2b67b
          </p>
        </div>

        <Typography variant="h1" id="2025-08-31">
          2025.08.31
        </Typography>

        <div id="2025-08-31-23-15" className="mt-8">
          <Typography variant="h2" id="title-2025-08-31-23-15">
            23:15
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Improve traffic light detection.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Especially ATS will receive large improvements from this PR.
              </li>
              <li>
                I fixed a lot of issues regarding the selection and filtering of
                lights. I will also made lights wait at the start of their
                intersection, instead of at the light itself. This means that
                lights on the other side of intersections will work as expected.
              </li>
              <li>
                This update also provides some offset changes to the ATS
                projections on the map. You should see that the line and arrow
                are much closer than they were before.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d111a50e7ecbc03ab8bfd24df9dc1a4f26a74e94"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 94 lines\n- 30 lines\n\n=== Plugins/Map/navigation/navigation.py ===\n+ 1 lines\n- 1 lines\n\n=== Plugins/NavigationSockets/projections.py ===\n+ 3 lines\n- 9 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: d111a50e7
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 改进交通灯检测。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>尤其是 ATS 将从这个 PR 中得到很大的改进。</li>
              <li>
                我修复了很多关于灯光选择和过滤的问题。我还让灯在交叉点的起点等待，而不是在灯本身等待。这意味着十字路口另一侧的灯将按预期工作。
              </li>
              <li>
                此更新还对地图上的 ATS 投影进行了一些偏移更改。您应该看到线条和箭头比以前更近。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d111a50e7ecbc03ab8bfd24df9dc1a4f26a74e94"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== Plugins/AdaptiveCruiseControl/main.py ===\n+ 94 lines\n- 30 lines\n\n=== Plugins/Map/navigation/navigation.py ===\n+ 1 lines\n- 1 lines\n\n=== Plugins/NavigationSockets/projections.py ===\n+ 3 lines\n- 9 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: d111a50e7
          </p>
        </div>

        <div id="2025-08-31-01-14" className="mt-8">
          <Typography variant="h2" id="title-2025-08-31-01-14">
            01:14
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Slight UI tweaks.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Window will no longer be resizable when running with --local.
                This was left as a debug mode when we were still trying to get
                it to work.
              </li>
              <li>
                Plugins page advanced mode now has bottom padding.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0fedda14676989c4756d8563f32ac92a3bbe2a63"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== ETS2LA/Window/window.py ===\n- 1 lines\n\n=== Pages/plugins.py ===\n+ 1 lines\n- 3 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 0fedda146
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 轻微的 UI 调整。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                使用 --local 运行时，窗口将不再可调整大小。当我们仍在尝试让它工作时，这被保留为调试模式。
              </li>
              <li>插件页面高级模式现在有底部填充。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0fedda14676989c4756d8563f32ac92a3bbe2a63"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock
            code={
              '=== ETS2LA/Window/window.py ===\n- 1 lines\n\n=== Pages/plugins.py ===\n+ 1 lines\n- 3 lines'
            }
          />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 0fedda146
          </p>
        </div>

        <Typography variant="h1" id="2025-08-30">
          2025.08.30
        </Typography>

        <div id="2025-08-30-17-34" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-17-34">
            17:34
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Fix manager page crash.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Page now correctly filters out plugins that do not have descriptions for whatever reason.
              </li>
              <li>
                Backend will now send a crash report for failed builds of pages.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7811bd593fc2cb46aeee8bbadf26c3b2522dad57"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/Console/logs.py ===\n+ 6 lines\n- 2 lines\n\n=== main.py ===\n+ 5 lines\n- 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 7811bd593
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 修复管理器页面崩溃。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                许多人似乎都明白了这一点，所以我更清楚地表明，由于现有的 ETS2LA 实例，这种情况的发生。
              </li>
              <li>
                如果您在任何地方都找不到它，那么它可能在后台打开。从任务管理器关闭 python 通常有效，或者您可以重新启动 PC。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7811bd593fc2cb46aeee8bbadf26c3b2522dad57"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/Console/logs.py ===\n+ 6 lines\n- 2 lines\n\n=== main.py ===\n+ 5 lines\n- 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 7811bd593
          </p>
        </div>

        <div id="2025-08-30-02-58" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-02-58">
            02:58
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Add more information about an error on startup.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Many people seem to be getting it, so I am making it more clear it is happening because of an existing ETS2LA instance.
              </li>
              <li>
                If you can not find it anywhere then it is probably open in the background. Closing python from the task manager usually works, or you could just restart your PC.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/98f2066f270cbde5916dc94694656bfe18d25f9a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/Console/logs.py ===\n+ 6 lines\n- 2 lines\n\n=== main.py ===\n+ 5 lines\n- 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 98f2066f2
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 添加有关启动时错误的更多信息。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                许多人似乎都明白了这一点，所以我更清楚地表明，由于现有的 ETS2LA 实例，这种情况的发生。
              </li>
              <li>
                如果您在任何地方都找不到它，那么它可能在后台打开。从任务管理器关闭 python 通常有效，或者您可以重新启动 PC。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/98f2066f270cbde5916dc94694656bfe18d25f9a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/Console/logs.py ===\n+ 6 lines\n- 2 lines\n\n=== main.py ===\n+ 5 lines\n- 2 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 98f2066f2
          </p>
        </div>

        <div id="2025-08-30-02-47" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-02-47">
            02:47
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Remove umami as we will moved over to google analytics.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Originally we used umami since it does not need cookies, now analytics is fine as we have google cookies on the site anyway.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/2f5c9bc7b27b4343b239f5c2afd6c1ea92808427"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/umami.py ===\n- 31 lines\n\n=== Pages/about.py ===\n- 5 lines\n\n=== Pages/updater.py ===\n- 5 lines\n\n=== requirements.txt ===\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 2f5c9bc7b
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 删除umami，因为我们已经转移到谷歌分析。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                最初我们使用umami，因为它不需要 cookie，现在分析很好，因为我们在网站上有谷歌 cookie。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/2f5c9bc7b27b4343b239f5c2afd6c1ea92808427"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Utils/umami.py ===\n- 31 lines\n\n=== Pages/about.py ===\n- 5 lines\n\n=== Pages/updater.py ===\n- 5 lines\n\n=== requirements.txt ===\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 2f5c9bc7b
          </p>
        </div>

        <div id="2025-08-30-02-21" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-02-21">
            02:21
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Renove crash reports disabled comment
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Renove crash reports disabled comment
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/4ecc2832a4eabae9726ac2cf4e5546646b56af1f"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== main.py ===\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 4ecc2832a
          </p>
          <p className="mt-4">
            <strong>标题</strong>： Renove崩溃报告禁用评论
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Renove 崩溃报告禁用评论
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/4ecc2832a4eabae9726ac2cf4e5546646b56af1f"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== main.py ===\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 4ecc2832a
          </p>
        </div>

        <div id="2025-08-30-01-52" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-01-52">
            01:52
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Tweak feedback page wording.
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/16cf0278853d06ee1855698048801cd9ff350162"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== Pages/feedback.py ===\n+ 1 lines\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 16cf02788
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 调整反馈页面措辞。
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/16cf0278853d06ee1855698048801cd9ff350162"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== Pages/feedback.py ===\n+ 1 lines\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 16cf02788
          </p>
        </div>

        <div id="2025-08-30-00-22" className="mt-8">
          <Typography variant="h2" id="title-2025-08-30-00-22">
            00:22
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Add crash reporting and feedback page.
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Crash reports are automatically enabled. You can disable them in Settings - Global - Miscellaneous
              </li>
              <li>
                Runtime errors for plugins do not create crash reports as many plugins are programmed in a way where they expect to keep running after a crash.
              </li>
              <li>
                The feedback page can send a request for comment, as well as your current location. We recommend using the location toggle when sending road issues, as this helps us debug them way faster.
              </li>
              <li>
                This update also implements some UI changes as well as updates to the Discord bot and our API.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8f19c72baf5a16cc9e5fbe0291cba3711469fa8f"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Handlers/plugins.py ===\n+ 31 lines\n\n=== ETS2LA/Networking/cloud.py ===\n+ 81 lines\n- 39 lines\n\n=== ETS2LA/Plugin/process.py ===\n+ 4 lines\n- 4 lines\n\n=== Pages/about.py ===\n+ 1 lines\n- 1 lines\n\n=== Pages/feedback.py ===\n+ 97 lines\n\n=== main.py ===\n+ 4 lines\n- 3 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 8f19c72ba
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 添加崩溃报告和反馈页面。
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                崩溃报告会自动启用。您可以在设置 - 全局 - 杂项中禁用它们- 插件的运行时错误不会创建崩溃报告，因为许多插件的编程方式是它们期望在崩溃后继续运行。
              </li>
              <li>
                反馈页面可以发送评论请求，以及您当前的位置。我们建议在发送道路问题时使用位置切换，因为这有助于我们更快地调试它们。
              </li>
              <li>
                此更新还实现了一些 UI 更改以及对 Discord 机器人和我们的 API 的更新。
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8f19c72baf5a16cc9e5fbe0291cba3711469fa8f"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== ETS2LA/Handlers/plugins.py ===\n+ 31 lines\n\n=== ETS2LA/Networking/cloud.py ===\n+ 81 lines\n- 39 lines\n\n=== ETS2LA/Plugin/process.py ===\n+ 4 lines\n- 4 lines\n\n=== Pages/about.py ===\n+ 1 lines\n- 1 lines\n\n=== Pages/feedback.py ===\n+ 97 lines\n\n=== main.py ===\n+ 4 lines\n- 3 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 8f19c72ba
          </p>
        </div>

        <Typography variant="h1" id="2025-08-29">
          2025.08.29
        </Typography>

        <div id="2025-08-29-21-40" className="mt-8">
          <Typography variant="h2" id="title-2025-08-29-21-40">
            21:40
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： FSleep slightly after telling frontend to enter update mode@
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/bb62432f31b92684b28c0777547a614af12d2567"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== main.py ===\n+ 1 lines\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: bb62432f3
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 告诉前端进入更新模式后稍微休眠@
          </p>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/bb62432f31b92684b28c0777547a614af12d2567"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'=== main.py ===\n+ 1 lines\n- 1 lines'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: bb62432f3
          </p>
        </div>

        <Typography variant="h1" id="2025-08-28">
          2025.08.28
        </Typography>
        
        <div id="2025-08-28-01-53" className="mt-8">
          <Typography variant="h2" id="title-2025-08-28-01-53">
            01:53
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Fix frontend crash
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Fix crash when selected language does not have the required key.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/a996a6f496ce07c777890900ee14a2f34b66b794"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 0 additions\n- 3 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: a996a6f49
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 修复前端崩溃
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>修复了当所选语言没有所需键时崩溃的问题。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/a996a6f496ce07c777890900ee14a2f34b66b794"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 0 additions\n- 3 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: a996a6f49
          </p>
        </div>

        <div id="2025-08-28-01-49" className="mt-8">
          <Typography variant="h2" id="title-2025-08-28-01-49">
            01:49
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Fix translator issues
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Languages with territory codes will now be parsed properly.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d789c9757dcf643ee112dc2a03c6d4a01f954288"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 24 additions\n- 7 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: d789c9757
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 解决翻译器问题
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>现在将正确解析具有区域代码的语言。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/d789c9757dcf643ee112dc2a03c6d4a01f954288"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 24 additions\n- 7 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: d789c9757
          </p>
        </div>

        <Typography variant="h1" id="2025-08-23">
          2025.08.23
        </Typography>

        <div id="2025-08-23-03-28" className="mt-8">
          <Typography variant="h2" id="title-2025-08-23-03-28">
            03:28
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Merge pull request #411 from motionzlol/main
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>Merge pull request #411 from motionzlol/main</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7642a19997c3a6832454d6af556063a8126fac54"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: b760885a5
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 合并来自 motionzlol/main 的拉取请求 #411
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>合并来自 motionzlol/main 的拉取请求 #411</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7642a19997c3a6832454d6af556063a8126fac54"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: b760885a5
          </p>
        </div>

        <div id="2025-08-23-02-28" className="mt-8">
          <Typography variant="h2" id="title-2025-08-23-02-28">
            02:28
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Map Updates
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                User initiated lane changes now skip the initial indicate state.
                (they happen instantly)
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7642a19997c3a6832454d6af556063a8126fac54"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 7 additions\n- 2 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 7642a1999
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 地图更新
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                用户发起的车道变更现在会跳过初始指示状态。（它们立即发生）
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/7642a19997c3a6832454d6af556063a8126fac54"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 7 additions\n- 2 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 7642a1999
          </p>
        </div>

        <div id="2025-08-23-01-34" className="mt-8">
          <Typography variant="h2" id="title-2025-08-23-01-34">
            01:34
          </Typography>
          <p className="mt-4">
            <strong>Title</strong>： Visualization Update
          </p>
          <div className="mt-2">
            <p>
              <strong>Description</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>
                Visualization will automatically zoom out as the window
                resolution increases.
              </li>
              <li>
                Users can now zoom the visualization using the scroll wheel.
              </li>
              <li>
                Users can now pan the visualization (temporarily) using the left
                mouse button.
              </li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/165becf97d777ab712a75b5174ab4db94bc45264"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Changes: View detailed information
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>version</strong>: 165becf97
          </p>
          <p className="mt-4">
            <strong>标题</strong>： 可视化更新
          </p>
          <div className="mt-2">
            <p>
              <strong>描述</strong>：
            </p>
            <ul className="list-disc list-inside">
              <li>可视化效果将随着窗口分辨率的增加而自动缩小。</li>
              <li>用户现在可以使用滚轮缩放可视化效果。</li>
              <li>用户现在可以使用鼠标左键（临时）平移可视化效果。</li>
            </ul>
          </div>
          <Typography variant="p" className="mt-2">
            <a
              href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/165becf97d777ab712a75b5174ab4db94bc45264"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              修改：查看详细信息
            </a>
          </Typography>
          <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
          <p className="mt-4 text-green-600 dark:text-green-400">
            <strong>版本号</strong>: 165becf97
          </p>
        </div>

        <Typography variant="h1" id="2025-08-18">
          2025.08.18
        </Typography>

      <div id="2025-08-18-22-39" className="mt-8">
        <Typography variant="h2" id="title-2025-08-18-22-39">
          22:39
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Frontend updates.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Fix visualization page sometimes not filling up the entire screen.
            </li>
            <li>
              Fix visualization page corners not having the right rounding.
            </li>
            <li>
              Notifications will now always show up in the bottom center, they
              will not move to the bottom right automatically.
            </li>
            <li>Fix sidebar not always having full height.</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0df029ba20107e2e67c690a5dc0804142ad0b927"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 1eb32ae4e
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 前端更新
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>修复可视化页面有时不会填满整个屏幕的问题。</li>
            <li>修复可视化页面角没有正确的舍入。</li>
            <li>
              通知现在将始终显示在底部中心，它们不会自动移动到右下角。
            </li>
            <li>修复侧边栏并不总是具有全高的问题。。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0df029ba20107e2e67c690a5dc0804142ad0b927"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 1eb32ae4e
        </p>
      </div>

      <Typography variant="h1" id="2025-08-12">
        2025.08.12
      </Typography>

      <div id="2025-08-12-21-30" className="mt-8">
        <Typography variant="h2" id="title-2025-08-12-21-30">
          21:30
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Fix error when plugin response is None.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Fix error when plugin response is None.</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/1eb32ae4e64c1d6f50108a1cd265c630e6271b6d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 1eb32ae4e
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 修复插件响应为 None 时的错误。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>修复插件响应为 None 时的错误。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/1eb32ae4e64c1d6f50108a1cd265c630e6271b6d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 1eb32ae4e
        </p>
      </div>

      <div id="2025-08-12-13-29" className="mt-8">
        <Typography variant="h2" id="title-2025-08-12-13-29">
          13:29
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Translation update from Weblate (Vietnamese)
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Updates by Giangg giangg@ets2la.com (thank you!)</li>
            <li>
              Language is currently translated at 100.0% (576 of 576 strings)
            </li>
            <li>
              You can help us translate ETS2LA at https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/ddf37aaef3c29aa7ce5b238e69f3483fef7a9ad7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: ddf37aaef
        </p>
        <p className="mt-4">
          <strong>标题</strong>： Weblate （越南语） 的翻译更新
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Giangg giangg@ets2la.com 的更新（谢谢！</li>
            <li>语言目前翻译率为 100.0%（576 个字符串中的 576 个）</li>
            <li>
              您可以通过 https://weblate.ets2la.com/ 帮助我们翻译 ETS2LA
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/ddf37aaef3c29aa7ce5b238e69f3483fef7a9ad7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: ddf37aaef
        </p>
      </div>

      <div id="2025-08-12-11-07" className="mt-8">
        <Typography variant="h2" id="title-2025-08-12-11-07">
          11:07
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Translation update from Weblate (Chinese
          (Simplified Han script))
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Updates by goodnightan goodnightan@ets2la.com (thank you!)
            </li>
            <li>
              Language is currently translated at 100.0% (576 of 576 strings)
            </li>
            <li>
              You can help us translate ETS2LA at https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/50913c8bc011b683e93c999d088ef8f2773f891c"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 50913c8bc
        </p>
        <p className="mt-4">
          <strong>标题</strong>： Weblate 翻译更新（中文（简体汉字））
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>goodnightan goodnightan@ets2la.com 的更新（谢谢！</li>
            <li>语言目前翻译率为 100.0%（576 个字符串中的 576 个）</li>
            <li>
              您可以通过 https://weblate.ets2la.com/ 帮助我们翻译 ETS2LA
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/50913c8bc011b683e93c999d088ef8f2773f891c"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 2 additions\n- 2 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 50913c8bc
        </p>
      </div>
      <Typography variant="h1" id="2025-08-11">
        2025.08.11
      </Typography>

      <div id="2025-08-11-20-14" className="mt-8">
        <Typography variant="h2" id="title-2025-08-11-20-14">
          20:14
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Implement fullscreen mode.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              You can now make ETS2LA fullscreen on a monitor by middle clicking
              on the green button in the top right of the window.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/13c4c9fb42037deeea1d91b04aac5bd669a9ef31"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 17 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 13c4c9fb4
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 实现全屏模式。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              您现在可以通过中键单击窗口右上角的绿色按钮在显示器上使
              ETS2LA 全屏显示。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/13c4c9fb42037deeea1d91b04aac5bd669a9ef31"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 17 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 13c4c9fb4
        </p>
      </div>

      <div id="2025-08-11-20-02" className="mt-8">
        <Typography variant="h2" id="title-2025-08-11-20-02">
          20:02
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Slight UI tweak
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              The visualization page will now automatically close the sidebar.
              You can open it again like in the onboarding.
            </li>
            <li>
              The window controls are now less visible when the sidebar is not
              open.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8d8e998f2292ef8f19df19f62d347852068121a4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 0 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 8d8e998f2
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 轻微的 UI 调整
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              可视化页面现在将自动关闭侧边栏。您可以像在入职时一样再次打开它。
            </li>
            <li>现在，当侧边栏未打开时，窗口控件不太可见。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8d8e998f2292ef8f19df19f62d347852068121a4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 0 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 8d8e998f2
        </p>
      </div>

      <Typography variant="h1" id="2025-08-10">
        2025.08.10
      </Typography>

      <div id="2025-08-10-17-35" className="mt-8">
        <Typography variant="h2" id="title-2025-08-10-17-35">
          17:35
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Try to fix turn signals lagging the steering
          in some edge cases.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Try to fix turn signals lagging the steering in some edge cases.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/6d38bd4b0015290e9efba6c7f49dc5132f68c6be"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 4 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 6d38bd4b0
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 尝试修复在某些极端情况下滞后转向的转向灯。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>尝试修复在某些极端情况下滞后转向的转向灯。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/6d38bd4b0015290e9efba6c7f49dc5132f68c6be"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1 additions\n- 4 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 6d38bd4b0
        </p>
      </div>

      <div id="2025-08-10-16-37" className="mt-8">
        <Typography variant="h2" id="title-2025-08-10-16-37">
          16:37
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Fix ACC not slowing down for vehicles at all.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Fix ACC not slowing down for vehicles at all.</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/4ff93a09921503d94acff81d504784a1a83944b9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 9 additions\n- 5 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 4ff93a099
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 修复车辆不减速的 ACC 问题。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>修复车辆根本不减速的 ACC 问题。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/4ff93a09921503d94acff81d504784a1a83944b9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 9 additions\n- 5 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 4ff93a099
        </p>
      </div>

      <div id="2025-08-10-16-20" className="mt-8">
        <Typography variant="h2" id="title-2025-08-10-16-20">
          16:20
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： TruckersMP Updates
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Support for multiple trailers on the visualization. We now extract
              all trailers from all players, this should hopefully fix ETS2LA
              not braking in time.
            </li>
            <li>
              Use dedicated booleans for is_tmp and is_trailer to alleviate
              issues with accidentally classifying some singleplayer vehicles as
              TMP.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/712eda26b0c92b6c1101b40a07049e7264c13a7f"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 18 additions\n- 23 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 712eda26b
        </p>
        <p className="mt-4">
          <strong>标题</strong>： TruckersMP 更新
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              支持可视化中的多个预告片。我们现在从所有玩家那里提取所有预告片，这有望解决
              ETS2LA 无法及时制动的问题。
            </li>
            <li>
              使用专用的布尔值进行is_tmp和is_trailer，以缓解意外将某些单人战车归类为
              TMP 的问题。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/712eda26b0c92b6c1101b40a07049e7264c13a7f"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 18 additions\n- 23 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 712eda26b
        </p>
      </div>

      <div id="2025-08-10-15-07" className="mt-8">
        <Typography variant="h2" id="title-2025-08-10-15-07">
          15:07
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Translation update from Weblate (Estonian)
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Updates by Roke roke@ets2la.com (thank you!)</li>
            <li>
              Language is currently translated at 100.0% (576 of 576 strings)
            </li>
            <li>
              You can help us translate ETS2LA at https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b9ef45ad4670e20b74beaa95899663b0c99642d1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 39 additions\n- 21 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: b9ef45ad4
        </p>
        <p className="mt-4">
          <strong>标题</strong>： Weblate 的翻译更新（爱沙尼亚语）
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Roke roke@ets2la.com 的更新（谢谢！)</li>
            <li>语言目前翻译率为 100.0%（576 个字符串中的 576 个）</li>
            <li>
              您可以通过以下方式帮助我们翻译 ETS2LA
              https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/b9ef45ad4670e20b74beaa95899663b0c99642d1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 39 additions\n- 21 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: b9ef45ad4
        </p>
      </div>

      <Typography variant="h1" id="2025-08-09">
        2025.08.09
      </Typography>

      <div id="2025-08-09-12-38" className="mt-8">
        <Typography variant="h2" id="title-2025-08-09-12-38">
          12:38
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Translation update from Weblate (Spanish)
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Updates by erjulixn erjulixn@ets2la.com (thank you!)</li>
            <li>
              Language is currently translated at 11.9% (69 of 576 strings)
            </li>
            <li>
              You can help us translate ETS2LA at https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8bf48c16959c7107c52a20ac46b4ce7389a06694"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 5 additions\n- 4 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 8bf48c169
        </p>
        <p className="mt-4">
          <strong>标题</strong>： Weblate 的翻译更新（西班牙语）
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>erjulixn erjulixn@ets2la.com 的更新（谢谢！</li>
            <li>语言目前翻译率为 11.9%（69 个字符串中的 576 个）</li>
            <li>
              您可以通过 https://weblate.ets2la.com/ 帮助我们翻译 ETS2LA
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8bf48c16959c7107c52a20ac46b4ce7389a06694"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 5 additions\n- 4 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 8bf48c169
        </p>
      </div>

      <Typography variant="h1" id="2025-08-08">
        2025.08.08
      </Typography>

      <div id="2025-08-08-18-14" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-18-14">
          18:14
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Fix traditional chinese translation
          generation.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Fix traditional chinese translation generation.</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/fc9cca7ee9fb57b4f3c62a1e7d5e880bfddcd7da"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1110 additions\n- 672 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: fc9cca7ee
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 修复繁体中文翻译生成。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>修复繁体中文翻译生成。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/fc9cca7ee9fb57b4f3c62a1e7d5e880bfddcd7da"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1110 additions\n- 672 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: fc9cca7ee
        </p>
      </div>

      <div id="2025-08-08-18-13" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-18-13">
          18:13
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Translation update from Weblate (Finnish)
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Updates by Weblate Admin tumppi066@ets2la.com (thank you!),
            </li>
            <li>
              Language is currently translated at 100.0% (576 of 576 strings),
            </li>
            <li>
              You can help us translate ETS2LA at https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/fc9cca7ee9fb57b4f3c62a1e7d5e880bfddcd7da"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4">
          <strong>version</strong>: fc9cca7ee
        </p>
        <p className="mt-4">
          <strong>标题</strong>： Weblate 的翻译更新（芬兰语）
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Weblate 管理员 tumppi066@ets2la.com 的更新（谢谢！</li>
            <li>语言目前翻译率为 100.0%（576 个字符串中的 576 个）</li>
            <li>
              您可以通过以下方式帮助我们翻译 ETS2LA
              https://weblate.ets2la.com/
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/fc9cca7ee9fb57b4f3c62a1e7d5e880bfddcd7da"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4">
          <strong>版本号</strong>: fc9cca7ee
        </p>
      </div>

      <div id="2025-08-08-18-02" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-18-02">
          18:02
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Update translation files to follow new
          changes.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Update translation files to follow new changes.</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/c05f2abb37b8500ec53572c9a6cffc479d6d6e81"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: c05f2abb3
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 更新翻译文件以跟随新的更改。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>更新翻译文件以跟随新的更改。</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/c05f2abb37b8500ec53572c9a6cffc479d6d6e81"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: c05f2abb3
        </p>
      </div>

      <div id="2025-08-08-18-01" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-18-01">
          18:01
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Replace HUD plugin with NGHUD.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              This update also includes initial support for changing the scaling
              of the new HUD elements. Please note however that it will cause
              layout issues.
            </li>
            <li>
              For everyone that is not been using NGHUD, you can find extensive
              customization options in the settings.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/12ebb2aec5e6e2ed3dd4f24270976af1eaf53144"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 12ebb2aec
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 将 HUD 插件替换为 NGHUD。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              此更新还包括对更改新 HUD
              元素缩放的初始支持。但请注意，这会导致布局问题。
            </li>
            <li>
              对于没有使用 NGHUD 的每个人，您可以在设置中找到广泛的自定义选项。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/12ebb2aec5e6e2ed3dd4f24270976af1eaf53144"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 1814 additions\n- 2729 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 12ebb2aec
        </p>
      </div>

      <div id="2025-08-08-17-35" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-17-35">
          17:35
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Acceleration fallback is now enabled by
          default.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              will not affect existing installations, but new ones will default to
              fallback first.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/c654a1d04e914123f93053f6a46adddf1ab2aa36"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 3 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: c654a1d04
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 现在默认启用加速回退。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              不会影响现有安装，但新安装将默认为首先回退。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/c654a1d04e914123f93053f6a46adddf1ab2aa36"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 3 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: c654a1d04
        </p>
      </div>

      <div id="2025-08-08-01-26" className="mt-8">
        <Typography variant="h2" id="title-2025-08-08-01-26">
          01:26
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Fix ACC not resuming from traffic lights.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Clutch check will now make sure you are moving at more than 10kph
              before activating itself.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/424d6752649c1654c42117e73a2a2cab9910be3b"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 424d67526
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 修复 ACC 无法从红绿灯恢复的问题。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              离合器检查现在将确保您在启动之前以超过 10
              公里/小时的速度行驶。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/5fcb555eb9d8ea30d207192c7f521833a13b20d7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={'+ 3 additions\n- 1 deletions'} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 5fcb555eb
        </p>
      </div>

      <Typography variant="h1" id="2025-08-04" className="mt-8">
        2025.08.04
      </Typography>

      <div id="2025-08-04-14-54" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-14-54">
          14:54
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Implemented custom ads to replace
          automatic the Google ones.
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              All ads inside of ETS2LA are optional. You can change the ad
              preferences in `Settings - Global - Variables`.
            </li>
            <li>
              The default and recommended option is `Minimal`, this will only
              show one add in the about page when launching ETS2LA.
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/5fcb555eb9d8ea30d207192c7f521833a13b20d7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 145 additions\n- 5 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 5fcb555eb
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 实施了自定义广告以取代自动 Google 广告。
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              ETS2LA 内部的所有广告都是可选的。您可以在`设置 - 全局设置 - 变量`中更改广告偏好设置。
            </li>
            <li>
              默认和推荐选项是`Minimal`，这将在启动 ETS2LA 时在关于页面中显示一个添加。
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/5fcb555eb9d8ea30d207192c7f521833a13b20d7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 145 additions\n- 5 deletions`} />
        <p className="mt-4">
          <strong>版本号</strong>: 5fcb555eb
        </p>
      </div>

      <div id="2025-08-04-03-46" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-03-46">
          03:46
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Increase git timeout
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>The timeout of 2 seconds would require a fast internet connection</li>
            <li>Changed the timeout to 4</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8a5e5a25d570df57ee43dead4c0aa4dd86ad1c6a"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 1 additions\n- 1 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 8a5e5a25d
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 增加 git 超时
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>2 秒的超时需要快速的互联网连接</li>
            <li>将超时更改为 4</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/8a5e5a25d570df57ee43dead4c0aa4dd86ad1c6a"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 1 additions\n- 1 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 8a5e5a25d
        </p>
      </div>

      <div id="2025-08-04-03-39" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-03-39">
          03:39
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Add window timeout setting
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>The default timeout is 10 seconds</li>
            <li>
              This setting can be useful if your windows always takes forever to
              load, it will prevent the timeout error
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/eba2d28aa8e764a9573964e5c4d8cc1b939e986e"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 17 additions\n- 3 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: eba2d28aa
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 添加窗口超时设置
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>默认超时为 10 秒</li>
            <li>
              如果您的窗口总是需要很长时间才能加载，此设置会很有用，它可以防止超时错误
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/eba2d28aa8e764a9573964e5c4d8cc1b939e986e"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 17 additions\n- 3 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: eba2d28aa
        </p>
      </div>

      <div id="2025-08-04-03-25" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-03-25">
          03:25
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Remove {"\"connection open\""} log
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>The websockets module would log {"\"connection open\""} on startup</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0ee5ea51e096fcf1c21603ed475e5ad19201b740"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 3 additions\n- 0 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 0ee5ea51e
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 删除“连接打开”日志
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>websockets 模块将在启动时记录“连接打开”</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0ee5ea51e096fcf1c21603ed475e5ad19201b740"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 3 additions\n- 0 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 0ee5ea51e
        </p>
      </div>

      <div id="2025-08-04-03-11" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-03-11">
          03:11
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Add frontend mirror default setting
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              Add a setting which allows you to choose between ETS2LA mirrors to
              avoid the mirror selection process on startup
            </li>
            <li>Setting your mirror manually can reduce startup times</li>
            <li>
              Note that if you choose a mirror which always times out, you may
              have to manually switch
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/1fb99585cb669bacded8bb9947ed7e12f10c36e5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 35 additions\n- 18 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 1fb99585c
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 添加前端镜像默认设置
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>
              添加一个设置，允许您在 ETS2LA 镜像之间进行选择，以避免启动时的镜像选择过程
            </li>
            <li>手动设置镜像可以减少启动时间</li>
            <li>
              请注意，如果您选择的镜像总是超时，则可能需要手动切换
            </li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/1fb99585cb669bacded8bb9947ed7e12f10c36e5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 35 additions\n- 18 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 1fb99585c
        </p>
      </div>

      <div id="2025-08-04-02-39" className="mt-8">
        <Typography variant="h2" id="title-2025-08-04-02-39">
          02:39
        </Typography>
        <p className="mt-4">
          <strong>Title</strong>： Move frontend mirrors list to variables
        </p>
        <div className="mt-2">
          <p>
            <strong>Description</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>Move frontend mirrors list to variables</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0093b214f34f28bb3c6e315611463c3ae0115641"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Changes: View detailed information
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 8 additions\n- 5 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>version</strong>: 0093b214f
        </p>
        <p className="mt-4">
          <strong>标题</strong>： 将前端镜像列表移动到变量
        </p>
        <div className="mt-2">
          <p>
            <strong>描述</strong>：
          </p>
          <ul className="list-disc list-inside">
            <li>将前端镜像列表移动到变量</li>
          </ul>
        </div>
        <Typography variant="p" className="mt-2">
          <a
            href="https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/commit/0093b214f34f28bb3c6e315611463c3ae0115641"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            修改：查看详细信息
          </a>
        </Typography>
        <UpdateCodeBlock code={`+ 8 additions\n- 5 deletions`} />
        <p className="mt-4 text-green-600 dark:text-green-400">
          <strong>版本号</strong>: 0093b214f
        </p>
      </div>
      </div>
    </>
  )
}
