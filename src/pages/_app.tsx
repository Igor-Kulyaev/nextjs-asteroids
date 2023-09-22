import '@/src/styles/reset.css'
import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "@/src/shared/ui/Layout/Layout";
import Head from "next/head";
import {AsteroidOrdersProvider} from "@/src/providers/AsteroidOrdersContext/AsteroidOrderProvider";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Asteroids App</title>
        <meta name="description" content="Application about astoroids moving to the Earth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AsteroidOrdersProvider>
        <NextNProgress height={8} color={"rgb(227,108,28)"}/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AsteroidOrdersProvider>
    </>
  )
}
