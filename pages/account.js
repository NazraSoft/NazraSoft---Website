import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession, signIn, signOut, newUser } from "next-auth/react"
const account = () => {
  const [state ,setState] = useState([])
  const { data: session ,status} = useSession()
  console.table(session.user)
  return (
    <div><Head>
    <title> - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  
  
  </div>
  )
}

export default account