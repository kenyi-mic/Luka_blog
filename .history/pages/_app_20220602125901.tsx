import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" dark:text-indigo-500 dark:bg-slate-900">
      <Component {...pageProps} />
      <Footer/>
    </div>
  
  )
}

export default MyApp
