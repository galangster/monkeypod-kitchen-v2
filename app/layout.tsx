import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from './components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Monkeypod Kitchen by Merriman | Hawaii Restaurant',
  description: 'Where the day ends and the evening begins. Farm-to-table dining in Maui, Oahu, and Waikiki.',
  openGraph: {
    title: 'Monkeypod Kitchen by Merriman',
    description: 'Farm-to-table dining in Hawaii',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-body bg-monkeypod-cream text-monkeypod-dark antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
