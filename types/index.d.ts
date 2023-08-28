export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  wip?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  title: string
  author: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedIn: string
    email: string
    openSauced: string
  }
  tools: string[]
}

export type NavConfig = {
  items: MainNavItem[]
}

export type Quote = string

export type Project = {
  title: string
  url: string
  linkText: string
  image: string
  desc: string
  category: ProjectCategory
}

export type ProjectCategoryObj = {
  title: ProjectCategory
  icon: string
  desc: string
}

export type ProjectCategory = "itbey Co." | "hack" | "tool"