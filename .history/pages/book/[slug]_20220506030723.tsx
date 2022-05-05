import {sanityClient} from '../../sanity';
import { GetStaticProps } from 'next/types';
import React from 'react'
import { Book } from '../../typings';
import Header from '../../components/Header';


interface Props{
  books:[Book]
}

function book({books}:Props) {
  return (
    <div>
      <main>
        <Header/>
        <hr/>
      </main>
    </div>
  )
}

export default book


export const getStaticPaths = async () => {
  const query = `*[_type== "post"]{
      _id,
      slug{
          current
      },

  }`;

  const books = await sanityClient.fetch(query);

  const paths = books.map((book: Book) => ({
   params:{
       slug:book.slug.current,
   }
  }))

  return{ 
      paths,
      fallback: 'blocking'
  }
}

export  const getStaticProps: GetStaticProps = async ({params}) =>{
  const query = `*[_type == "book" && slug.current == $slug][0]{
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

const book = await sanityClient.fetch(query,{
  slug:params?.slug,
});
if(!book){
  return{ notFound: true}
}

return { 
  props:{
      book,
  },
  revalidate:60, 
}

}