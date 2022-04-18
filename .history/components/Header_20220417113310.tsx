import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
          <Link href="/">
           <img className="w-44 object-contain cursor-pointer" src="/logo.png" alt="logo"/>
          </Link>
          
      </div>
      <div></div>
    </header>
  )
}

export default Header