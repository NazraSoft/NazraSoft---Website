import type { NextPage } from 'next'
import Spinner from "../components/Spinner"
import Landing from "../components/Landing"
import Plans from "../components/Plans"
import Faq from "../components/Faq"
import Head from "next/head"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {    
  const { data: session ,status} = useSession()
  
  return ( 
  <div>

        <Head>
        <title>Home - NazraSoft</title>
        <meta name="description" content="Software Solutions" />
        <link rel="icon" href="/logo.jpg" />

      </Head>
      <Navbar/>

      {status == 'loading' ? <Spinner props="NazraSoft" /> : (
        <>
        
    <Landing />
    <Plans />  
    <Faq/> 
    <Footer/>
    </>)}
    </div>
  )
}

export default Home
