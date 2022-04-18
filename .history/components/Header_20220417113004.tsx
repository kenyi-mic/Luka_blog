import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
          <Link href="/">
           <Image src="/logo.png" alt="logo" />
          </Link>
          
      </div>
      <div></div>
    </header>
  )
}

export default Header