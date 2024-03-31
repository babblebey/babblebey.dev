import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Capitalise } from "@/components/capitalise";
import { buttonVariants } from "@/components/ui/button";
import { getAProblemFirstQuote } from "@/data/problem-first-quote";
import type { SiteConfig } from "@/types";
import { ThemeToggle } from "./theme-toggle";

interface FooterProps extends SiteConfig {}

export function Footer({ title, author, links }: FooterProps) {
  return(
    <footer>
      <div className="container max-w-6xl px-4 sm:px-8 space-y-10 pb-10">
        <div className="border-t w-full" />

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="w-9 h-9 dark:invert" />
              <span className="flex flex-col justify-end">
                <span className="font-bold">
                  { title }
                </span>
                <span className="text-xs opacity-50">
                  /@{ author }
                </span>
              </span>
            </Link>
            <p>{ getAProblemFirstQuote() }</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-semibold leading-none tracking-tight">
              Connect with me
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(links).map((key, index) => {
                const Icon = Icons[key as keyof typeof Icons];
                const link = links[key as keyof typeof links];
                return (
                  <Link key={index} href={link} target="_blank" className={cn(buttonVariants({ variant: "outline" }), "gap-2")}>
                    <Icon className="w-4 h-4" /> <Capitalise text={key} />
                  </Link>
                )}
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© { (new Date).getFullYear() } { title }.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}