import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = () => {
  return (
    <div>
      <Head>
    <title>Services - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
      
  <Navbar/>
      <Footer/></div>
  )
}

export default services