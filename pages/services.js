import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const services = () => {
  return (
    <div>
      <Head>
    <title>Services - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
      
  <Navbar/>
  {/* Service page here */}
  <div className='mt-10 mb-12 flex items-center justify-center '>
  <img className='w-full' src='/s1.png'/>
  </div>
  <div className='mt-10 mb-12 bg-white flex items-center justify-center '>
  <img className='w-full' src='/s8.png'/> 
  </div>
  <div className='mt-10 mb-12 flex items-center justify-center '>
  <img className='w-full' src='/s2.png'/> 
  </div>
  <div className='mt-4 text-center bg-white text-black'>
  <div className='pt-4 mb-12  text-3xl font-bold '>Our Development Process</div>
  <div className=' text-md md:mx-80 mx-4'>Nazra Software Solutions a team of professionals with of experience in IT development. Professionalism, Skill, and Expertise are the tools we use to make the work of your business bringing in maximum return on your investment in shortest possible time. Following are the prominent web technologies we hold expertise in:</div>
  <img className='object-center md:mx-auto mt-8' src="/s3.png" />
  </div>
  <div>
  <img src='/s4.png'/> 
  </div>
  <div className='mt-10 text-center'>
  <div className='mb-8 text-3xl font-bold '>Our Uncompromised Working Verticals</div>
  <div className=' text-md md:mx-80 mx-4'>NazraSoft a wide range of services for all industry</div>
  <img className='object-center mt-8 w-full' src="/s5.png" />
  </div>
  <div className='mx-auto hidden md:block'>
  <div className="bg-[url('/s9.png')] h-[540px] text-center bg-no-repeat md:mx-36">
      <Form/> 
  </div>
  </div>
  <div className='mx-auto md:hidden'>
  <img src='/s9.png'/>
      <Form/> 
  </div>

  <Footer />
  </div>
  )
}

export default services