import type { NextPage } from 'next'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useUserData } from '@nhost/nextjs'
import Spinner from "../components/Spinner"
import {useEffect} from "react"
import Landing from "../components/Landing"
import Plans from "../components/Plans"
import Faq from "../components/Faq"
const Home: NextPage = () => {
  const user = useUserData();
    
  return (
    <>
    <Landing />
    <Plans />  
    <Faq/> 
    <Spinner props="NazraSoft" />
    </>
  )
}

export default Home
