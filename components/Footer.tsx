import Link from "next/link";
import { Button } from "@/components/ui/button";
import UmamiStats from "@/components/UmamiStats";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="flex w-full flex-col gap-0 px-6 py-3 md:px-38.5">
        {/* 顶部行：左侧统计数据标题，中间备案信息，右侧作者/交流；三者同一水平线 */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start self-start">
            <div className="text-sm font-medium text-muted-foreground">统计数据</div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground justify-self-center">
            <Button variant="link" asChild>
              <Link href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
                苏ICP备2025160641号-3
              </Link>
            </Button>
            <span className="hidden md:inline">|</span>
            <Button variant="link" asChild>
              <Link href="https://beian.mps.gov.cn/#/" target="_blank" rel="noreferrer">
                苏公网安备32120202010796号
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 justify-self-end">
            <nav className="flex gap-4 md:gap-6">
              <Link
                href="/author"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                作者
              </Link>
              <Link
                href="https://kook.vip/VZaUPP"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                交流
              </Link>
            </nav>
          </div>
        </div>

        {/* 底部行：左侧统计数据，中间版权信息，右侧 Built with；三者同一水平线 */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start">
            <UmamiStats />
          </div>
          <p className="text-center text-sm text-muted-foreground justify-self-center">
            &copy; {new Date().getFullYear()} ETS2LA CN Team. All rights reserved.
          </p>
          <p className="text-sm leading-loose text-muted-foreground justify-self-end">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
