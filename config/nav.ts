import type { NavConfig } from "@/types";

export const navConfig: NavConfig = {
  items: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true, // Pending Feature Built
      wip: true
    },
    {
      title: "Tools",
      href: "#tools"
    },
    {
      title: "Projects",
      href: "#projects"
    },
  ]
}