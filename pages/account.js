'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { Spinner } from '@chakra-ui/react'

const account = () => {
  const [state ,setState] = useState([])
  const { data: session ,status} = useSession()

const router = useRouter();

// useEffect(() => {
//   status == 'unauthenticated' ? router.push('/signIn') : ""
// })
  return (
    <div><Head>
    <title>Account - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
    {status == 'loading' ? <Spinner /> : (
      <div>
        {session.user.email}
        {session.user.name}
        {session.user.image}
        {status == 'authenticated' ? <button onClick={() => signOut()}>Sign Out</button> : <button onClick={() => signIn()}>Sign In</button>}
      </div>
    )}

  <Footer/>
  
  </div>
  )
}

export default account