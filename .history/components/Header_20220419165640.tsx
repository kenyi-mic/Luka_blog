import React from 'react'
import Link from 'next/link'

function Header() {
  return (
      <div>
     <header className="grid grid-col lg:grid-cols-3 md:grid-cols-3 px-5  max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
          <Link href="/">
           <img className="w-32 h-16 object-contain cursor-pointer py-1" src="/logo.png" alt="logo"/>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 ">
              <h3 className="cursor-pointer ">About</h3>
              <h3 className="cursor-pointer">Contact</h3>
              <h3 className="text-white bg-gradient-to-br from-amber-600  to-yellow-400 py-1 px-4 rounded-full cursor-pointer">Follow</h3>
          </div>
          <div className=" hidden md:inline-flex items-center space-x-5 justify-center bg-white border border-amber-500 ml-10 rounded-full p-1">
            <input type="text"  className=" h-7  w-72 outline-none rounded-full text-2xl"/>
          </div>

      </div>
      <div className=" flex md:inline-flex items-center  space-x-5 text-amber-600 ">
          <h3 className="cursor-pointer ">Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-amber-600 cursor-pointer">Get Started</h3>
      </div>
    </header>

  
    


    </div>
    
  )
}

export default Header