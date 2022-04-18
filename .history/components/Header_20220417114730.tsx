import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-5">
          <Link href="/">
           <img className="w-32 object-contain cursor-pointer" src="/logo.png" alt="logo"/>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className="text-white bg-green-600 py-1 px-2 rounded-full">Follow</h3>
          </div>

      </div>
      <div></div>
    </header>
  )
}

export default Header