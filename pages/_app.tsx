import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/global-styles.css'
import '../styles/gutenberg.scss'
import '../styles/alignments.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
