import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
          <Link href="/">
           <img src="/logo.png" alt="logo" width="300" height="100"/>
          </Link>
          
      </div>
      <div></div>
    </header>
  )
}

export default Header