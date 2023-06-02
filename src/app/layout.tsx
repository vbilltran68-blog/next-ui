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
    icon: config.icon,
    apple: {
      rel: 'apple-touch-icon-precomposed',
      url: config.icon,
      sizes: '114x114',
    }
  },
  keywords: config.keywords,
  robots: { index: true, follow: true },
  themeColor: config.themeColor,
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
