

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Book } from '../typings'

interface Props{ 
  books:[Book]
}


function About({books}:Props) {

function truncateString() {
    books.map(book => {
    if(book.description.length > 100){
      return book.description.slice(0, 25) + '...';
    }else{
      return book.description
    }

     });
    }

  return (
    <div>
      <Head>
        <title>About | Luka's Blog</title>
      </Head>
      <Header/>
      <hr />
      <div className="max-w-6xl mx-auto py-10 ">
        <div className="grid grid-col lg:grid-cols-2 md:grid-cols-2">
          {/*left */}
          <div className="flex flex-col items-center justify-center max-w-full">
          <div>
            <img className="rounded w-80" src="luka.jpg" alt="Luka" />
            </div>
          </div>
          {/*right */}
          <div className=" flex flex-col  ">
            <h2 className="text-3xl font-light text-gray-800 ">
              About Me
            </h2>
            <p className="py-5 max-w-3xl">I'm Luka garang a student of Business in the University of global village, I spend most of my time reading and researching from the world's great thinkers. So I created this blog to share what I learned with you all. I will be glade If you give me feedbacks in comment section to help me to understand your opinion on any of my blog post.
            The best ideas can change who we are. Here is where those ideas take shape, take off, and spark powerful conversations. This is an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. My purpose is to spread these ideas and deepen understanding of the world.

            We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, I'm building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
            </p>
          </div>
        </div>
        <hr className="h-2 bg-gray-300 max-7xl mx-auto my-5"/>
        {/*Third container */}
        <h1 className="text-center text-4xl  underline py-5 font-bold text-gray-500 hover:text-gray-900">The Books I Read</h1>
        {/*Books */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 ">
          {books.map((book) => ( 
            <Link key={book._id} href={`/book/${book.slug.current}`}>
              <div className="group border overflow-hidden shadow-lg">
                <img className="lg:h-80 md:h-80  w-full group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(book.mainImage).url()!} alt={book.title} />
                <div className="flex justify-between lg:justify-evenly px-2">
                  <div className="py-4 ">
                    <p className="font-medium text-indigo-600">{book.title}</p>
                    <p className="text-sm font-extralight text-gray-600 mb-3">{book.description.length > 50 ? book.description.slice(0, 40) + '...' : book.description }</p>
                    <Link href={book.url} >
                    <p className="hover:text-yellow-600 text-indigo-500 bg-gray-200 hover:bg-gray-400 w-20 px-2 py-1 rounded-full">{book.link}</p>
                    </Link>
                   
                  </div>
                  <div className="flex flex-col-1 my-4">
                  
                  <img className="w-10 h-10 rounded-full " src={urlFor(book.author.image).url()!} alt={book.author.name} />
                  
                  </div>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*Check more button */}
        <Link href="/books">
        <button className="flex flex-col items-center justify-center rounded-full hover:border-amber-500 bg-indigo-500  py-2 px-4 text-xl text-blue-200 mx-auto">See More</button>
        </Link>
        
      </div>
    </div>
  )
}

export default About



export const getServerSideProps = async () =>{
 const query = `*[_type == 'book']{
  _id,
  title,
  slug,
  link,
  url,
  description,
  mainImage,
  body,
  author->{
    name,
    image,
  },
 
}` 
const books = await sanityClient.fetch(query);

  return { props:{
    books,
  }}
}