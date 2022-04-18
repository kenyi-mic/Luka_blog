import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between px-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
          <Link href="/">
           <img className="w-32 h-16 object-contain cursor-pointer" src="/logo.png" alt="logo"/>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 ">
              <h3 className="cursor-pointer ">About</h3>
              <h3 className="cursor-pointer">Contact</h3>
              <h3 className="text-white bg-gradient-to-br from-amber-600  to-yellow-400 py-1 px-4 rounded-full cursor-pointer">Follow</h3>
          </div>

      </div>
      <div className="md:inline-flex items-center  space-x-5 text-amber-600 ">
          <h3 className="cursor-pointer ">Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-amber-600">Get Started</h3>
      </div>
    </header>
  )
}

export default Header