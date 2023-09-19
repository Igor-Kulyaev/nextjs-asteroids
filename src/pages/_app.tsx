import '@/src/styles/reset.css'
import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "@/src/shared/Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Asteroids App</title>
        <meta name="description" content="Application about astoroids moving to the Earth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
