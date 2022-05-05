import React from 'react'
import { sanityClient } from '../../sanity'

function book() {
  return (
    <div>
        
        
    </div>
  )
}

export default book

export const getServerSideprops = async() => {
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

  const book = await sanityClient.fetch(query)

}