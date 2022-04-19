import React from 'react'

function footer() {
  return (
    <div className="bg-blue-900">
       <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 max-w-6xl mx-auto sm:flex sm:items-center sm:max-w-7xl">
       {/* first*/}
       <div  className="flex flex-1 flex-col">
         <img className="w-44" src="/logo.png" alt="logo" />
         <p className="text-sm text-gray-200">Let's connect the world with our fashionated Ideas.</p>

       </div>
      {/* second*/}
      <div className="flex flex-1 flex-col text-gray-200 ">
        <h2 className="text-2xl font-bold text-gray-900 ">What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team</h4>
      </div >
       {/* third*/}
       <div className="flex flex-1 flex-col text-gray-200 ">
        <h2 className="text-2xl font-bold text-gray-900 ">What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack </h4>
        
        </div>
       
        {/* fourth*/}
        <div  className="flex flex-1 flex-col text-gray-200 ">
        <h2 className="text-2xl font-bold text-gray-900 ">What to do</h2>
        <h4>Advertise with us</h4>
        <h4>Join the blog</h4>
        <h4>Donate</h4>
        <h4>Our slack team </h4>
        </div>
      </div>
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700"/>
      <h1 className="text-3xl shadow-green-700 font-bold text-gray-200 text-shadow text-center py-5">Luka Garang's Blog <span className="text-amber-600 text-sm text-extralight">	&copy; 2022</span></h1>
    </div>
  )
}

export default footer