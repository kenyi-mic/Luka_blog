import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Book } from "../../typings";
import PortableText from "react-portable-text";
import Head from "next/head";
import Link from "next/link";

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
      <hr className="mb-10" />
      <div>
        {/*Header title */}
        <div>
          <h1 className="text-center underline underline-offset-2">
            Details of{" "}
            <span className="text-gray-500 hover:text-amber-500 font-light text-lg text-center">
              {book.title}
            </span>
          </h1>
        </div>
        {/*main page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/*left */}
          <div>
            <img
              title={book.description}
              className="w-52 h-80"
              src={urlFor(book.mainImage).url()!}
              alt={book.title}
            />
            <p>{book.title}</p>
            <Link href={book.url}>
              <span>Buy now on {book.link}</span>
            </Link>
          </div>
          <div>
            <div className="mt-10">
              <PortableText
                className=""
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                content={book.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl font-bold my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className="text-xl font-bold my-5" {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className="ml-4 list-disc ">{children}</li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-amber-700 hover:underline">
                      {children}
                    </a>
                  ),
                }}
              />
            </div>
          </div>
          {/* Author details */}
          <div>
            <img
              className="w-14 h-14 rounded-full"
              src={urlFor(book.author.image).url()!}
              alt={book.title}
            />
            <div>
              <PortableText
                className=""
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                content={book.author.bio}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl font-bold my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className="text-xl font-bold my-5" {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className="ml-4 list-disc ">{children}</li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-amber-700 hover:underline">
                      {children}
                    </a>
                  ),
                }}
              />
            </div>
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
      bio,
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
