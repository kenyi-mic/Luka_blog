
import Head from 'next/head'
import { sanityClient} from "../sanity"
import  Header from "../components/Header"
import { Post } from '../typings';
import Link from 'next/link';
interface Props{
posts: [Post];
}
const Home = ({posts}: Props) => {
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
  <div>
    {posts.map((post) => (
      <Link key={post._id} href={`/post/${post.slug.current}`}>
           <div>
             Okay this is the post
           </div>
      </Link>
    ))}
  </div>
  </div>
  )
}

export default Home

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