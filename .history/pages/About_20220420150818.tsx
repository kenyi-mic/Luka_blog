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
      <div className="max-w-6xl mx-auto py-10 ">
        <div className="grid grid-col lg:grid-cols-2 md:grid-cols-2">
          {/*left */}
          <div className="flex flex-col items-center judtify-center">
          <div>
            <img className="rounded" src="luka.jpg" alt="Luka" />
            </div>
          </div>
          {/*right */}
          <div className=" flex flex-col  ">
            <h2 className="text-3xl font-light text-gray-800 ">
              About Me
            </h2>
            <p className="py-5 max-w-3xl">I'm Luka garang a student of Business in the University of global village, I spend most of my time reading and researching from the world's great thinkers. So I created this blog site to share what I learned with you all. i will be glade If you give me feedbacks in comment secrion to help me to understand your opinion on the blog.
            The best ideas can change who we are. Here is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.

We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
            </p>
          </div>
        </div>
        <hr className="h-2 bg-gray-300 max-7xl mx-auto"/>
        {/*Third container */}
        <h1 className="text-center text-4xl  underline py-5 font-bold text-gray-500 hover:text-gray-900">The Books I Read</h1>
        <div className="grid grid-col lg:grid-cols-4 md:grid-cols-2 py-10 lg:gap-6 md:gap-3">
         
         <div className="bg-gray-200 rounded p-5 shadow shadow-indigo-300 ">
           <img className="w-64 hover:scale-105 transition duration-500 overflow-hidden" src="thinkandgrowrich.jpg" alt="Think and grow rich" />
           <h2 className="text-xl text-semibold">Books Name</h2>
           <p className="text-sm text-gray-400">Description</p>
           <h4 className="text-xs text-amber-600 text-light cursor-pointer hover:text-blue-500">Link to the book</h4>

         </div>
         <div className="bg-gray-200 rounded p-5 shadow shadow-indigo-300 ">
           <img className="w-64 hover:scale-105 transition duration-500 overflow-hidden" src="thinkandgrowrich.jpg" alt="Think and grow rich" />
           <h2 className="text-xl text-semibold">Books Name</h2>
           <p className="text-sm text-gray-400">Description</p>
           <h4 className="text-xs text-amber-600 text-light cursor-pointer hover:text-blue-500">Link to the book</h4>

         </div>
         <div className="bg-gray-200 rounded p-5 shadow shadow-indigo-300 ">
           <img className="w-64 hover:scale-105 transition duration-500 overflow-hidden" src="thinkandgrowrich.jpg" alt="Think and grow rich" />
           <h2 className="text-xl text-semibold">Books Name</h2>
           <p className="text-sm text-gray-400">Description</p>
           <h4 className="text-xs text-amber-600 text-light cursor-pointer hover:text-blue-500">Link to the book</h4>

         </div>
         <div className="bg-gray-200 rounded p-5 shadow shadow-indigo-300 ">
           <img className="w-64 hover:scale-105 transition duration-500 overflow-hidden" src="thinkandgrowrich.jpg" alt="Think and grow rich" />
           <h2 className="text-xl text-semibold">Books Name</h2>
           <p className="text-sm text-gray-400">Description</p>
           <h4 className="text-xs text-amber-600 text-light cursor-pointer hover:text-blue-500">Link to the book</h4>

         </div>
         <div className="bg-gray-200 rounded p-5 shadow shadow-indigo-300 ">
           <img className="w-64 hover:scale-105 transition duration-500 overflow-hidden" src="thinkandgrowrich.jpg" alt="Think and grow rich" />
           <h2 className="text-xl text-semibold">Books Name</h2>
           <p className="text-sm text-gray-400">Description</p>
           <h4 className="text-xs text-amber-600 text-light cursor-pointer hover:text-blue-500">Link to the book</h4>

         </div>
        </div>
      </div>
    </div>
  )
}

export default About