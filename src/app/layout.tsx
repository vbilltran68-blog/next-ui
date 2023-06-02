import '@styles/global.scss'

import { AppProvider } from '@hooks/useApp'
import config from '@root/app.config.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? ''),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  icons: {
    icon: '/assets/logo/144x144.png',
    apple: [
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        url: '/assets/logo/57x57.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        url: '/assets/logo/72x72.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        url: '/assets/logo/144x144.png',
      },
    ],
  },
  keywords: config.keywords,
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1D2226" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],
  viewport: "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimal-ui",
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': config.themeColor,
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="none">
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
