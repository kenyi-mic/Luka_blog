import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'


function About() {

  return (
    <div>
      <Head>
        <title>About | Luka's Blog</title>
      </Head>
      <Header/>
      <div>
        <div>
          {/*left */}
          <div>
          <div><img src="luka.jpg" alt="Luka" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About