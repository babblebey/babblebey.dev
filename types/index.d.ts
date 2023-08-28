export type NavItem = {
  title: string
  href: string
  disabled?: boolean
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