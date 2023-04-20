import { AppProps } from 'next/app'
import '../styles/index.css'
import '@wordpress/block-library/build-style/reset.css'
import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
