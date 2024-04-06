import React from 'react'
import Head from 'next/head'
import './index.scss'
import '../styles/globals.css'

import { register } from 'swiper/element/bundle'
register()

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Absolution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
