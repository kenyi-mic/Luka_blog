import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
          <Link href="/">
           <img src="/../images/logo.png" alt="" width="64" height="64"/>
          </Link>
          
      </div>
      <div></div>
    </header>
  )
}

export default Header