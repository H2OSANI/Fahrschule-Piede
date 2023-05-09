import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/piede.ico" />
    </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
