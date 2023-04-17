import { ReactNode } from 'react'

import './globals.css'

export const metadata = {
  title: 'Desafio_12',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-purple-700 flex">{children}</body>
    </html>
  )
}
