
import Head from 'next/head'
import { sanityClient, urlFor} from "../sanity"
import  Header from "../components/Header"
import { Post } from '../typings';
import Link from 'next/link';
interface Props{
posts: [Post];
}
export default function Home({posts}: Props) {
  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Luka Garang | BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

{/* Main page*/}
  <div className="flex justify-between items-center bg-gradient-to-br from-blue-700 to-purple-700 border-y border-black py-10 lg:py-0 ">
 {/*left*/}
  <div className="px-10 space-y-5">
     <h1 className="text-6xl font-serif max-w-xl">
       <span className="underline decoration-slate-600 decoration-4 ">Luka Garang's</span> blog is the place to share your ideas with the world.
     </h1>
     <h2>Here We value your thoughts & your ideas. Let's connect with other million writers and readers across the globe.</h2>
     
    </div>
    {/*Right*/}
    
    <img className="hidden md:inline-flex h-32 lg:full mr-6" src="/image.png" alt="logo" />

  </div>
  {/* posts*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gsp-3 md:gap-6 p-2 md:p-6">
    {posts.map((post) => (
      <Link key={post._id} href={`/post/${post.slug.current}`}>
           <div className="border rounded-lg overflow-hidden group cursor-pointer">
           <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200  ease-in-out " src={
             urlFor(post.mainImage).url()!
           } alt="" />
           <div className="flex justify-between p-5 bg-white">
               <div>
                 <p>{post.title}</p>
                 <p>
                   {post.description} by {post.author.name}
                 </p>
               </div>
               <img className="h-12 w-12 rounded-full" src={
                 urlFor(post.author.image).url()!
               } alt={post.author.name} />
           </div>
           </div>
      </Link>
    ))}
  </div>
  </div>
  )
}



export const getServerSideProps = async () =>{
  const query = `*[_type == 'post']{
    _id,
    title,
    author ->{
    name,
    image,
  },
  description,
  mainImage,
  slug,
  }`;

  const posts = await sanityClient.fetch(query);

  return { props:{
    posts,
  }}
}