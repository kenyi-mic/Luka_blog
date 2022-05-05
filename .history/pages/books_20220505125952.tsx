import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'


function books() {
  return (
    <div>
      <Head>
        <title> Books | Luka's Blog</title>
      </Head>
      <Header/>
      <hr />
    </div>
  )
}

export default books