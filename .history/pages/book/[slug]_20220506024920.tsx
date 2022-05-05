import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Book } from '../../typings'

interface Props{
book:[Book]
}

function book({book}:Props) {
  console.log(book)
  book.map((data:Book) =>{
    console.log("The data item", data)
  })
  return (
    <div>
       <main>
         <Header/>
         <hr/>
         <div>
           {/*left */}
           <div>

           </div>
           {/*right */}
         </div>
       </main>
    </div>
  )
}

export default book;

export const getStaticPaths = async () => {
  const query = `*[_type== "book"]{
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

export  const getStaticProps: GetStaticProps = async({params}) => {
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