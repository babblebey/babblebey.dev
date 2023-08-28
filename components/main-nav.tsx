"use client"

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import type { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <header>
      <div className="container max-w-6xl px-4 sm:px-8 flex justify-between items-center">
        <div className="py-6 flex gap-6 md:gap-10">
          <Link href="/" className="hidden md:flex items-center space-x-2">
            <Icons.logo className="w-9 h-9 dark:invert" />
            <span className="hidden sm:flex flex-col justify-end">
              <span className="font-bold">
                {siteConfig.title}
              </span>
              <span className="text-xs opacity-50">
                /@{siteConfig.author}
              </span>
            </span>
          </Link>
          {items?.length ? (
            <nav className="hidden md:flex gap-6">
              {items?.map((item, index) => (
                <a key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          ) : null}
          <button
            className="flex items-center space-x-2 md:hidden focus-visible:outline-0 focus-visible:border-0 focus-within:outline-0 focus-within:border-0"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <Icons.cancel /> : <Icons.logo className="w-6 h-6 dark:invert"/>}
            <span className="font-bold">Menu</span>
          </button>
          {showMobileMenu && items && (
            <MobileNav items={items} setShowMobileMenu={setShowMobileMenu} />
          )}
        </div>
        <nav>
          <Link
            href="/resume"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 gap-2"
            )}
          >
            <Icons.download className="w-4 h-4" />
            <span>
              <span className="hidden md:inline-flex">Download</span>{" "}Resume
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}