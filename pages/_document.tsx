import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-[#25282C] overflow-x-hidden'>
      <Head>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Head>
      <body className=" text-black ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
