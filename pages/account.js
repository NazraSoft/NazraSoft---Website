import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession, signIn, signOut, newUser } from "next-auth/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const account = () => {
  const [state ,setState] = useState([])
  const { data: session ,status} = useSession()
  return (
    <div><Head>
    <title> - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
  <Footer/>
  
  </div>
  )
}

export default account