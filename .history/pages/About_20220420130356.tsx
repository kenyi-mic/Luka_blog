import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Typed from 'typed.js';

function About() {
  

const options = {
  strings: ['<i>First</i> sentence.', '& a second sentence.'],
  typeSpeed: 40
};

const typed = new Typed('.element', options);
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
            <h1>{options.strings}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About