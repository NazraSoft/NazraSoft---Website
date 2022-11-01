import type { NextPage } from 'next'
import Spinner from "../components/Spinner"
import Landing from "../components/Landing"
import Plans from "../components/Plans"
import Faq from "../components/Faq"
import Head from "next/head"

const Home: NextPage = () => {    
  return ( 
  <div>

        <Head>
        <title>Home - NazraSoft</title>
        <meta name="description" content="Software Solutions" />
        <link rel="icon" href="/logo.jpg" />

      </Head>
    <Landing />
    <Plans />  
    <Faq/> 
    <Spinner props="NazraSoft" />
    </div>
  )
}

export default Home
