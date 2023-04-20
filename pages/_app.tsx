import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/gutenberg.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
