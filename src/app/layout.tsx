// app/layout.tsx
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title:
    "Uncovered - Competitive Intelligence Platform for B2B SaaS. Made in Europe 🇪🇺",
  description:
    "Uncovered - Monitor your B2B SaaS competitors. Free trial. Monitor competitors, analyze market trends, find your competitor's pricing, and identify how to win.",
  openGraph: {
    type: "website",
    title:
      "Uncovered - Competitive Intelligence Platform for B2B SaaS. Made in Europe 🇪🇺",
    description:
      "Uncovered - Monitor your B2B SaaS competitors. Free trial. Monitor competitors, analyze market trends...",
    images: [
      "https://framerusercontent.com/assets/XDpA2o07vKaQPYKkJ8HrQ0RqU.png",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-slate-950 text-slate-100 tracking-wide font-sans">
        {children}
      </body>
    </html>
  )
}
