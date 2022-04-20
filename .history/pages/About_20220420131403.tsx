import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Typed from 'typed.js';

function About() {
  

const options = {
  strings: ['Learn from great.', 'See knowedge as yours.'],
  typeSpeed: 40
};

const typed = new Typed('.type', options);
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
            <h1 className=".type">You  {typed}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About