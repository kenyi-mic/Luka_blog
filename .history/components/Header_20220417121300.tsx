import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex ">
      <div className="flex items-center space-x-5">
          <Link href="/">
           <img className="w-32 object-contain cursor-pointer" src="/logo.png" alt="logo"/>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 text-xl">
              <h3 className="cursor-pointer ">About</h3>
              <h3 className="cursor-pointer">Contact</h3>
              <h3 className="text-white bg-green-600 py-1 px-2 rounded-full cursor-pointer">Follow</h3>
          </div>

      </div>
      <div className="md:inline-flex items-center  space-x-5 text-orange-600 ">
          <h3>Sign In</h3>
          <h3>Get started</h3>
      </div>
    </header>
  )
}

export default Header