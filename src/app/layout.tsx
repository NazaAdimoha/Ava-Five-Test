import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryProvider } from './ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ava Five Test',
  description: 'Build an Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
          <body className={inter.className}>{children}</body>
      </ReactQueryProvider>
    </html>
    
  )
}
