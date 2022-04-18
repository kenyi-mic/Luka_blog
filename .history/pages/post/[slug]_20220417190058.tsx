import Header from "../../components/Header"
import { sanityClient } from "../../sanity";
import {Post} from "../../typings"


function Post() {
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type== "post"]{
        _id,
        slug{
            current
        },

    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
     params:{
         slug: post.slug.current,
     }
    }))

    return{ 
        paths,
        fallback: 'blocking'
    }
}