import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Book } from "../../typings";
import PortableText from "react-portable-text";
import Head from "next/head";

interface Props {
  book: Book;
}

function Book({ book }: Props) {
  return (
    <main>
      <Head>
        <title>{book.title}</title>
      </Head>
      <Header />
      <div>
        <div>
          <h1 className="text-center underline">
            Details of{" "}
            <span className="text-gray-500 hover:text-amber-500 font-light text-lg text-center">
              {book.title}
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 md:gap-3 lg:grid-cols-3">
          <div>
            <img
              title={book.description}
              className="w-52 h-80"
              src={urlFor(book.mainImage).url()!}
              alt={book.title}
            />
          </div>
        </div>
      </div>
    </main>
  );
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
    params: {
      slug: book.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
}`;

  const book = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!book) {
    return { notFound: true };
  }

  return {
    props: {
      book,
    },
    revalidate: 60,
  };
};
