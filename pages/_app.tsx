import { AppProps } from "next/dist/shared/lib/router/router"
import Head from 'next/head'
import { Fragment } from "react"
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
	  <Fragment>
		  <Head>
			  <title>MyTop - the best top</title>
		  </Head>
		  <Component {...pageProps} />
	  </Fragment>
  )
}

export default MyApp
