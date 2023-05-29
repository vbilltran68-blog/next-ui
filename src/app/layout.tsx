import '@styles/main.scss'

import { AppProvider } from '@hooks/useApp'
import config from '@root/app.config.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  icons: {
    icon: config.icon,
    apple: config.icon,
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
