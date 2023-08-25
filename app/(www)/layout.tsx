import { MainNav } from "@/components/main-nav";
import { navConfig } from "@/config/nav";

interface IndexPageLayoutProps {
  children: React.ReactNode
}

export default async function IndexPageLayout({ children }: IndexPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav items={navConfig.items} />
      <main className="container max-w-6xl px-4 sm:px-8">
        {children}
      </main>
    </div>
  )
}