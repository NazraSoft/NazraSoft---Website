'use client'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const account = () => {
  const [state ,setState] = useState([])
  const { data: session ,status} = useSession()
  const router = useRouter();

  useEffect(() => {
    (status == 'unauthenticated') ? router.push('/signIn') : ""
  })
  return (
    <div><Head>
    <title>Account - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
    {status == 'authenticated' &&
      <div className='flex flex-col items-center justify-between mt-12 '>
        <div className='flex flex-row '>
        <img src={session.user.image} className="w-32 h-32 rounded-full shadow-md" />
      
        </div>
        <div className='flex flex-row mt-8'>
        <h1>Name - </h1>  {session.user.name}

        </div>
        <div className='flex flex-row mt-8'>
        <h1>Email -</h1> {" " + session.user.email}

        </div>
       
          <button className='w-32 h-12 mt-8 rounded-full border-1 p-1 border-red-500 bg-gray-300 text-black hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1' onClick={() => signOut()}>Sign Out</button> 
        </div>
    }
    
  <Footer/>
  
  </div>
  )
}

export default account