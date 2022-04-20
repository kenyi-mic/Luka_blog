import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Typed from 'typed.js';

function About() {
  

const options = {
  strings: ['Learn from great.', 'See knowedge as yours.'],
  typeSpeed: 40
};


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
           <h1>{options}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About