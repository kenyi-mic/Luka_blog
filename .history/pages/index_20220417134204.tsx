import type { NextPage } from 'next'
import Head from 'next/head'
import  Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Luka Garang | BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

{/* Main page*/}
  <div className="flex justify-between items-center bg-gradient-to-br from-blue-700 to-purple-700 border-y border-black py-10 lg:py-0 ">
 {/*left*/}
  <div className="px-10 space-y-5">
     <h1 className="text-6xl font-serif max-w-xl">
       <span className="underline decoration-slate-600 decoration-4 ">Luka Garang's</span> blog is the place to share your ideas with the world.
     </h1>
     <h2>Here We value your thoughts & your ideas. Let's connect with other million writers and readers across the globe.</h2>
     
    </div>
    {/*Right*/}
    
    <img className="hidden md:inline-flex h-32 lg:full mr-6" src="/image.png" alt="logo" />

  </div>
    </div>
  )
}

export default Home
