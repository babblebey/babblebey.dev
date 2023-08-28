import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";

interface MobileNavProps {
  items: MainNavItem[],
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>,
  children?: React.ReactNode
}

export function MobileNav({ items, setShowMobileMenu }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto px-4 pt-2 pb-32 shadow-md animate-in slide-in-from-left-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 pt-2 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <a key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md py-2 font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={() => !item.disabled && setShowMobileMenu(false) }
            >
              {item.title}
            </a>
          ))}
        </nav>
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="w-9 h-9 dark:invert" />
          <span className="flex flex-col justify-end">
            <span className="font-bold">
              {siteConfig.title}
            </span>
            <span className="text-xs opacity-50">
              /@{siteConfig.author}
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}