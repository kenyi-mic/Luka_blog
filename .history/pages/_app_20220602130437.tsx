import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer/>
    </div>
  
  )
}

export default MyApp
