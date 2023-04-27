import '@styles/styles.scss';

import Layout from '@components/Layout'
import { AppProvider } from '@hooks/app'
import { App } from '@interfaces/app'
import { APP_URL, GITHUB_REPO } from '@lib/constants';
import datetime from '@lib/datetime'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useMemo } from 'react'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  const { noLayout } = pageProps || {}

  // TODO: read from env file
  const appData: App = useMemo(() => ({
    name: 'Bill',
    avatar: 'https://avatars.githubusercontent.com/u/28431254?v=4',
    year: datetime.now().year(),
    title: `Bill Tech Ký Sự`,
    description: 'My personal blog about software development',
    githubRepo: GITHUB_REPO,
    appURL: APP_URL,
  }), [])

  return (
    <>
      <Head>
        <title>{appData.title}</title>
        <link rel="shortcut icon" href={appData.avatar} />
        <link
          rel="apple-touch-icon"
          href={appData.avatar}
        />
        <meta name="theme-color" content={appData.themeColor} />
        <meta
          name="description"
          content={appData.description}
        />
      </Head>
      <DefaultSeo themeColor={appData.themeColor} openGraph={{
        type: 'website',
        locale: appData.locale,
        url: appData.appURL,
        site_name: appData.title,
      }} />
      <AppProvider value={appData}>
        <Layout noLayout={noLayout}>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </AppProvider>
    </>
  )
}

export default App
