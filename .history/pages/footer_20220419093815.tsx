import React from 'react'

function footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 max-w-6xl mx-auto pt-10 my-10 items-center justify-center">
       {/* first*/}
       <div  className="flex flex-1 flex-col">
         <img src="/logo.png" alt="logo" />
         <p>Let's connect the world with our fashionated Ideas.</p>

       </div>
      {/* second*/}
      <div className="flex flex-1 flex-col">
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
      </div >
       {/* third*/}
       <div className="flex flex-1 flex-col">
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack </h4>
        
        </div>
       
        {/* fourth*/}
        <div  className="flex flex-1 flex-col">
        <h2>What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team </h4>
        </div>
      </div>
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700"/>
      <h1 className="text-3xl shadow-green-700 font-bold text-gray-200 text-shadow text-center">Luka Garang's Blog</h1>
    </div>
  )
}

export default footer