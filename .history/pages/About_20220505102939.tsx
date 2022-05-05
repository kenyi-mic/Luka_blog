

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
  console.log(books)
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
        <div className="w-72">
          {books.map((book) => ( 
            <Link key={book._id} href={`/book/${book.slug.current}`}>
              <div>
                <img src={urlFor(book.mainImage).url()!} alt={book.title} />
                <div className="flex flex-col-1 justify-between">
                  <div>
                    <p className="font-bold">{book.title}</p>
                    <p className="font-extralight text-sm">{book.description}</p>
                    <p className="font-bold text-blue-700">{book.link}</p>
                  </div>
                  <div className="flex flex-col-1">
                  <p className="text-xs font-extralight text-yellow-600">{book.author.name}</p>
                  <img className="w-10 h-10 rounded-full " src={urlFor(book.author.image).url()!} alt={book.author.name} />
                  
                  </div>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*Check more button */}
        <button className="flex flex-col items-center justify-center rounded-full hover:border-amber-500 bg-indigo-500  py-2 px-4 text-xl text-blue-200 mx-auto">See More</button>
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