import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Redx Events Management LLC | Dubai Event Planning',
  description: 'Premiere Event Management in Dubai. Luxury Weddings, Corporate Galas, and Private Celebrations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        sans.variable,
        serif.variable
      )}>
        {children}
      </body>
    </html>
  )
}
