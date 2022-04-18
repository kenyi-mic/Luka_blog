import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
      <div>
          <Image src="../images/logo.png" alt="" width="64" height="64"/>
      </div>
      <div></div>
    </header>
  )
}

export default Header