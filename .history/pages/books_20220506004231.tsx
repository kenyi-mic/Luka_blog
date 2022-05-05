import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Book } from '../typings'

interface Props{ 
  books:[Book]
}

function books({books}: Props) {
  return (
    <div>
      <Head>
        <title> Books | Luka's Blog</title>
      </Head>
      <Header/>
      <hr />
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 ">
          {books.map((book) => ( 
            <Link key={book._id} href={`/book/${book.slug.current}`}>
              <div className="group border overflow-hidden shadow-lg my-4 w-5/6 lg:w-full md:w-full sm:w-full mx-auto">
                <img className="lg:h-80 md:h-80 sm:h-80  w-full group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(book.mainImage).url()!} alt={book.title} />
                <div className="flex justify-between lg:justify-evenly px-2">
                  <div className="py-4">
                    <p className="font-bold">{book.title}</p>
                    <p className="font-extralight text-sm">{book.description}</p>
                    <Link href={book.url}>
                    <p className="font-bold text-blue-700">{book.link}</p>
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
      </div>
    </div>
  )
}

export default books

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