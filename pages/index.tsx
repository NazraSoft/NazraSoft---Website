import type { NextPage } from 'next'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useUserData } from '@nhost/nextjs'

const Home: NextPage = () => {
  const user = useUserData()
  console.log(user);
  
  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}

export default Home
