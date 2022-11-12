'use client'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import  Spinner  from '../components/Spinner'
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'

const account = () => {
  const [state ,setState] = useState([])
  const { data: session ,status} = useSession()
  const { user:users, error, isLoading } = useUser();
  if (isLoading) return <Spinner props="Loading"/>;
  if (error) return <Spinner props={error.message}/>;
  const router = useRouter();

  useEffect(() => {
    (status == 'unauthenticated' || !users) ? router.push('/signIn') : ""
  })
  return (
    <div><Head>
    <title>Account - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
    {status == 'authenticated' &&
      <div>
        {session.user.email}
        {session.user.name}
        {session.user.image}
        <button onClick={() => signOut()}>Sign Out</button> 
        </div>
    }
    {users &&
      <div>
        {users.email}
        {users.name}
        <img src={users.picture} alt={users.name} />
        <Link href="/api/auth0/logout" >Sign Out</Link> 
        </div>}
  <Footer/>
  
  </div>
  )
}

export default account