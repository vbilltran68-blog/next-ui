import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="none" data-theme="none">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
