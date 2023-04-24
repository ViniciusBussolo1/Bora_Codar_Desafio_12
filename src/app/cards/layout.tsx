import { ReactNode } from 'react'

export const metadata = {
  title: 'Desafio_12',
}

export default function CardsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
