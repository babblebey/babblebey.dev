import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = Inter({ 
  subsets: ['latin'],
  variable: "--font-sans"
});

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  keywords: [
    "Olabode",
    "Babblebey",
    "Olabode Lawal-Shittabey",
    "Bode",
    "Lawal-Shittabey",
    "Shittabey",
    "Lawal"
  ],
  authors: [
    {
      name: "babblebey",
      url: "https://babblebey.dev",
    },
  ],
  creator: "babblebey",
  icons: {
    icon: "/favicon.ico"
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`], // Pending
    creator: "@babblebey",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
