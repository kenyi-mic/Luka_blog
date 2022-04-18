import { GetStaticProps } from "next";
import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity";
import {Post} from "../../typings"
import PortableText from "react-portable-text"
import {useForm, SubmitHandler} from "react-hook-form"
interface IFormInput{
    _id: string;
    name: string;
    email: string;
    comment: string;
}
interface Props{
    post: Post;
}

function Post({post}:Props) {
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
       console.log(data)
    }

  return (
    <main>
        <Header/>
        <img className="w-full h-40 object-cover" src={urlFor(post.mainImage).url()!} alt={post.title} />
        <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl  mb-3">
            {post.title}
        </h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">{post.description}</h2>
       
       <div className="flex items-center space-x-2 ">
           <img className="h-10 w-10 rounded-full" src={urlFor(post.author.image).url()!} alt={post.author.name} />
       
          <p className="font-extralight text-sm">
            Blog post by <span className="text-amber-600">{post.author.name}</span>  - Published at {new Date(post._createdAt).toLocaleString()}
          </p>
       </div>
       <div className="mt-10">
           <PortableText
           className=""
           projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
           dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
           content={post.body}
             serializers = {{
                 h1: (props: any)=>( 
                     <h1 className="text-2xl font-bold my-5" {...props}/>
                 ),
                 h2:(props: any)=>( 
                    <h1 className="text-xl font-bold my-5" {...props}/>
                 ),
                 li:({children}: any)=>( 
                     <li className="ml-4 list-disc ">{children}</li>
                 ),
                 link:({href, children}: any)=>( 
                     <a href={href} className="text-blue-700 hover:underline">{children}</a>
                 )
             }}
             />
       </div>
    </article>
    <hr className="max-w-lg my-5 mx-auto border border-amber-600"/>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
        <h3 className="text-sm text-amber-600">Enjoy this article?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-3 mt-2"/>

        <input type="hidden" {...register("_id") } name="_id" value={post._id} />
        
        <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input {...register("name", {required: true}) } className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-amber-200 outline-none focus:ring" type="text"  placeholder="eg. John Doe"/>
        </label>
        <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input {...register("email", {required: true}) } className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-amber-200 outline-none focus:ring" type="email"  placeholder="eg.example@xml.com"/>
        </label>
        <label className="block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea {...register("comment", {required: true}) } className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-amber-200 outline-none focus:ring" placeholder="Write your text here" rows={8}/>
        </label>
        {/*Error will be displayed below if validation fails*/}
        <div className="flex flex-col p-5">
            {errors.name && (
                <span className="text-red-500">
                    - Name is required
                </span>
            )}
            {errors.email && (
                <span className="text-red-500">
                    - Email is required
                </span>
            )}
            {errors.comment && (
                <span className="text-red-500">
                    - Comment is required
                </span>
            )}
        </div>

        <input type="submit" className="shadow bg-amber-600 hover:bg-amber-400 focus:shadow-outline focus:outline-none text-gray-200 font-bold py-2 px-4 rounded cursor-pointer" />
    </form>
    </main>
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
         slug:post.slug.current,
     }
    }))

    return{ 
        paths,
        fallback: 'blocking'
    }
}

export  const getStaticProps: GetStaticProps = async ({params}) =>{
    const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author ->{
        name,
        image
    },
    'comments': *[
        _type == "comment" && post._ref == ^._id&&aproved == true
    ],
    description,
    mainImage,
    slug,
    body
}`

const post = await sanityClient.fetch(query,{
    slug:params?.slug,
});
if(!post){
    return{ notFound: true}
}

return { 
    props:{
        post,
    },
    revalidate:60, 
}

}