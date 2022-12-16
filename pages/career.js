import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerPage from '../components/CareerPage'

const career = () => {
  return (
    <div>
        <Head>
    <title>Carrer - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
  {/* Career page started */} 
        <CareerPage/>
  {/* career page ended */}
  <Footer/>
    </div>
  )
}

export default career

    



