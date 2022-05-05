import React from 'react'
import { sanityClient } from '../../sanity'
import { Book } from '../../typings'

interface Props{
books:[Book]
}

function book({books}:Props) {
  console.log(books)
  return (
    <div>
        
        
    </div>
  )
}

export default book

export const getServerSideProps = async() => {
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

  return {props:{
    books,
  }}

}