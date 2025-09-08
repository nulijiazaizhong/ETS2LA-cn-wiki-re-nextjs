import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-10 py-10 md:h-24 md:flex-row md:px-38.5">
        <div className="flex flex-col items-center gap-4 px-7 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
            <Button variant="link" asChild>
              <Link href="https://beian.miit.gov.cn/" target="_blank">
                苏ICP备2025160641号-3
              </Link>
            </Button>
            <span className="hidden md:inline">|</span>
            <Button variant="link" asChild>
              <Link href="https://beian.mps.gov.cn/#/" target="_blank">
                苏公网安备32120202010796号
              </Link>
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ETS2LA CN Team. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <Link
              href="/author"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Author
            </Link>
            <Link
              href="https://yhfx.jwznb.com/share?key=3gn9gaH3qMps&ts=1754318808"
              target="_blank"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Communication
            </Link>
            <Link
              href="mailto:goodnightan@ets2la.cn"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
