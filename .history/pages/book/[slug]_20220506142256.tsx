import { GetStaticProps } from "next";
import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity";
import {Book} from "../../typings"
import PortableText from "react-portable-text"
import Head from "next/head";

interface Props{
    book: Book;
}

function Book({book}:Props) {
   

  return (
    <main>
      <Head>
      <title>{book.title}</title>
      </Head>
      <Header/>
      <div>
      <img className="w-2/4" src={urlFor(book.mainImage).url()!} alt={book.title} />
      </div>
    </main>
  )
}

export default Book;

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