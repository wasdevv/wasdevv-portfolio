import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'
import { hpThemeScript } from '@/lib/hp-theme'
import { PageTransition } from '@/components/page-transition'

// One type system for the whole site: IBM Plex Sans for reading, Plex Mono only
// for code, data and measurements.
const plexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const plexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
// Display pair borrowed from omp.sh, used by the homepage hero for now.
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
})

export const metadata: Metadata = {
  title: {
    default: 'Washington Cardoso — Backend Engineer',
    template: '%s — Washington Cardoso',
  },
  description:
    'Rails and PostgreSQL developer who makes slow apps fast and keeps them correct, on software used by 50+ Brazilian municipalities.',
  // Just a bold serif "W" on a transparent background, rendered to PNG so every
  // browser shows the same glyph: light on dark browser chrome, dark on light.
  icons: {
    icon: [
      { url: '/icon-32-dark.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-32-light.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${plexSans.variable} ${plexMono.variable} ${geist.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: hpThemeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <PageTransition />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
