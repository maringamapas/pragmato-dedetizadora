import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PragMato Dedetizadora | Cuiabá e Várzea Grande | Ligue (65) 99227-5627 | Controle de Pragas Profissional",
  description:
    "PragMato Dedetizadora - Controle de pragas profissional em Cuiabá e Várzea Grande. Empresa em conformidade com a ANVISA. Ligue (65) 99227-5627",
  keywords: "dedetizadora cuiabá, dedetização várzea grande, desratização, descupinização, controle de pragas, escorpiões, baratas, ratos, cupins",
  generator: "v0.app",
  verification: {
    google: "OQ18zxm5jwjtUma02of36qhsH3hzOuIvHqnZSk-kd_A",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
