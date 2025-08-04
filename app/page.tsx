"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [line1] = useState("Euro Truck Simulator 2 Lane Assist");
  const [line2] = useState("中文维基");
  const [delays, setDelays] = useState({ delay1: 40, delay2: 40 });
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, []);

  useEffect(() => {
    const totalDuration = 3000; // Target duration in ms
    const len1 = line1.length;
    const len2 = line2.length;

    if (len1 > 0 && len2 > 0) {
      setDelays({
        delay1: totalDuration / len1,
        delay2: totalDuration / len2,
      });
    }
  }, [line1, line2]);

  const handleConfirm = () => {
    router.push("/docs/Introduction");
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 -z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        poster="/images/poster.webp"
      >
        <source src="/videos/background.webm" type="video/webm" />
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-4xl font-bold">
          <Typewriter
            options={{
              strings: [line1],
              autoStart: true,
              loop: true,
              delay: delays.delay1,
            }}
          />
        </div>
        <div className="mt-4 text-lg">
          <Typewriter
            options={{
              strings: [line2],
              autoStart: true,
              loop: true,
              delay: delays.delay2,
            }}
          />
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="mt-8">
              快速开始
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-6xl">
            <AlertDialogHeader>
              <AlertDialogTitle>许可协议</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div className="max-h-[60vh] overflow-y-auto pr-4">
                  <p>
                    本教程名为：
                    <strong>ETS2LA 中国区安装与使用指南</strong>
                    <br />
                    由{" "}
                    <a
                      href="https://space.bilibili.com/525984002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      晚安
                    </a>
                    , Srlily, 及{" "}
                    <a
                      href="https://space.bilibili.com/357816575"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      MR-UIAW
                    </a>{" "}
                    共同创作。
                  </p>
                  <p className="mt-4">
                    本作品采用{" "}
                    <a
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
                      (CC BY-NC-SA 4.0)
                    </a>{" "}
                    进行许可。
                  </p>
                  <hr className="my-4" />
                  <h3 className="font-bold text-lg">分享</h3>
                  <p>只要您遵守以下许可协议条款：</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <strong>署名 (BY)</strong> —
                      您必须给出适当的署名，提供指向本许可协议的链接，并指出是否对原始内容进行了更改。您可以用任何合理的方式来署名，但不得以任何方式表明许可人为您或您的使用背书。
                    </li>
                    <li className="mt-2">
                      <strong>非商业性使用 (NC)</strong> —
                      您不得将本作品用于商业目的。
                    </li>
                    <li className="mt-2">
                      <strong>相同方式共享 (SA)</strong> —
                      如果您修改、转换或基于本作品进行创作，您必须基于与原先许可协议相同的许可协议分发您的贡献。
                    </li>
                  </ul>
                  <p className="mt-4">您可以自由地：</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <strong>分享</strong> —
                      在任何媒介或格式下复制和分发本作品。
                    </li>
                    <li className="mt-2">
                      <strong>演绎</strong> —
                      修改、转换或基于本作品进行二次创作。
                    </li>
                  </ul>
                  <p className="mt-4">示例：</p>
                  <div className="p-2 mt-2 border rounded bg-gray-100 dark:bg-gray-800">
                    <p>
                      <strong>允许的</strong>
                    </p>
                    <p className="mt-1">
                      您可以将将网页教程完整复制到一份腾讯文档中。他在文档开头写上：“本文内容来源于
                      ETS2LA 中国区安装与使用指南 by
                      ETS2LA中国区管理团队,采用CC BY-NC-SA
                      4.0许可。任何人可在相同条款下自由分享和修改本文档。”
                      https://wili.ets2la.cn
                    </p>
                  </div>
                  <div className="p-2 mt-2 border rounded bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-200">
                    <p>
                      <strong>不允许的</strong>
                    </p>
                    <p className="mt-1">
                      您直接将网页教程完整复制到一份腾讯文档中并在文档中打上你自己的水印或者要求别人需要花钱购买才能获得教程
                      违反：你们侵犯了我们原创者的版权！（您未履行协议中的
                      署名 要求，如果您进行了商业活动，那么您违背了协议中的
                      非商业性使用 要求）
                    </p>
                  </div>
                  <hr className="my-4" />
                  <h3 className="font-bold text-lg">权利声明与法律责任</h3>
                  <p className="mt-2">
                    请注意，上述“知识共享许可协议”是我们在法律允许范围内，预先授权您使用本作品的方式。
                  </p>
                  <p className="mt-2">
                    任何超出本许可协议授权范围的使用行为，例如：在转载或使用中未进行适当署名、将本作品用于商业目的、或在修改本作品后采用更严格的许可协议发布，均构成对我们著作权的直接侵犯。
                  </p>
                  <p className="mt-2">
                    对此，我们保留采取一切法律手段追究侵权方法律责任的权利，包括但不限于要求停止侵权、消除影响、公开道歉以及赔偿损失等。
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>否</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirm}>是</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
}
