import { MainNav } from "@/components/main-nav"
import { navConfig } from "@/config/nav"

interface IndexPageLayoutProps {
  children: React.ReactNode
}

export default async function IndexPageLayout({ children }: IndexPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav items={navConfig.items} />
      {children}
    </div>
  )
}