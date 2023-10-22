import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Restock',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}