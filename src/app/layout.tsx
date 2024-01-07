import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[
      "w-screen",
      "h-screen",
      "overflow-hidden"
    ].join(" ")}>
      <body className={[
        "flex",
        "flex-col",
        "antialiased",
        "w-full",
        "h-full",
        ubuntu.className
      ].join(" ")}>{children}</body>
    </html>
  )
}
