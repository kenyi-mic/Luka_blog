import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" dark:text-gray-50 dark:bg-slate-800">
      <Component {...pageProps} />
      <Footer/>
    </div>
  
  )
}

export default MyApp
