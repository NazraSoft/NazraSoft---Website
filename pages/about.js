import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
      <Head>
    <title>About us - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
      <Footer/></div>
  )
}

export default about