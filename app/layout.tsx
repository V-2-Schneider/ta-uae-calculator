import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "uae calculator demo",
  description: "demo version of an easier version of uae unit calculator",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
