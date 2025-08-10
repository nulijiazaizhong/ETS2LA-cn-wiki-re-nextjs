'use client'

import { Typography } from '@/components/Typography'
import { UpdateCodeBlock } from '@/components/UpdateCodeBlock'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'
import { useEffect } from 'react'

export default function UpdatePage() {
  const { setToc } = useTableOfContents()

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
    <div className="p-8">
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
      </div>
    </div>
  )
}
