import React from 'react'

function footer() {
  return (
    <div className="bg-blue-900">
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 md:gap-6 p-2 md:p-6 max-w-6xl mx-auto">
       {/* first*/}
       <div  className="">
         <img className="w-44" src="/logo.png" alt="logo" />
         <p className="text-sm text-gray-200">Let's connect the world with our fashionated Ideas.</p>

       </div>
      {/* second*/}
      <div className=" text-gray-400 ">
        <h2 className="text-2xl font-bold  text-gray-200 ">Our Services</h2>
        <h4 className="hover:text-amber-600 hover:underline cursor-pointer">Blog</h4>
        <h4 className="hover:text-amber-600 hover:underline cursor-pointer">Advertisment</h4>
        <h4 className="hover:text-amber-600 hover:underline cursor-pointer">Business Tips</h4>
        <h4 className="hover:text-amber-600 hover:underline cursor-pointer">Interview</h4>
        <h4 className="hover:text-amber-600 hover:underline cursor-pointer">Latest Updates</h4>
      </div >
       {/* third*/}
       <div className=" text-gray-400 ">
        <h2 className="text-2xl font-bold text-gray-200">Social Network</h2>
        <h4>Facebook</h4>
        <h4>Instagram</h4>
        <h4>Twitter</h4>
        <h4>Medium</h4>
        <h4>Telegram</h4>
        <h4>Discord</h4>
        
        </div>
       
        {/* fourth*/}
        <div  className=" text-gray-400 ">
        <h2 className="text-2xl font-bold  text-gray-200">Contact Us </h2>
        <h4>lukagarang011@gmail.com</h4>
        <h4>+880181234567890</h4>
        <h4>+88017123456789</h4>
        <h4>Skype</h4>
        <h4></h4>
        </div>
      </div>
      <hr className="w-full h-2 bg-gradient-to-tr from-indigo-600 to-pink-700"/>
      <h1 className="text-3xl shadow-green-700 font-bold text-gray-200 text-shadow text-center py-5">Luka Garang's Blog <span className="text-amber-600 text-sm text-extralight">	&copy; 2022</span></h1>
    </div>
  )
}

export default footer