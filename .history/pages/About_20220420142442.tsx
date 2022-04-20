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
      <div className="max-w-6xl">
        <div className="grid grid-col lg:grid-cols-2 md:grid-cols-2">
          {/*left */}
          <div className="flex flex-col items-center judtify-center">
          <div><img src="luka.jpg" alt="Luka" /></div>
          </div>
          {/*right */}
          <div className=" flex flex-col  ">
            <h2>
              About Me
            </h2>
            <p>I'm Luka garang a student of Business in the University of global village, I spend most of my time reading and researching from the world's great thinkers. So I created this blog site to share what I learned with you all. i will be glade If you give me feedbacks in comment secrion to help me to understand your opinion on the blog.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About