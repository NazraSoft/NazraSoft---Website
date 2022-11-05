import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import {FaMoon,FaSun,FaSearch} from "react-icons/fa"
import {useTheme} from "next-themes";
import { useSession, signIn } from "next-auth/react"
import {Button} from "@chakra-ui/react"

const Navbar = () => {

  const { data: session ,status} = useSession()
  
    const {systemTheme , theme, setTheme} = useTheme ();
    const renderThemeChanger= () => {
  
      const currentTheme = theme === "system" ? systemTheme : theme ;
  
      if(currentTheme === "dark"){
        return (
          <div>

            <FaSun className="w-10 h-6 text-yellow-600 border-l-2 border-red-600 " role="button" onClick={() => setTheme('light')} />
          </div>
        )
      }
      else {
        return (
          <div>
            <FaMoon className="w-10 h-6 text-gray-900 border-l-2 border-red-600 " role="button" onClick={() => setTheme('dark')} />
            </div>
        )
      }
   };
  return (
    <div>
      
 <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
  <div className="absolute hidden text-gray-100 md:block -left-40 -top-40 dark:text-gray-600" style={{"zIndex": -40}}>
  </div>
  <nav className="flex flex-row items-center justify-between px-4 py-10 md:px-20">
    {/* <!-- Small little logo :) --> */}
    <div className="relative flex flex-row items-center space-x-1">    
      <div className="hidden md:block absolute w-6 transform r-2 2h-8 top-1 left-1"><Image width={40} height={40} src='/logo.jpg' layout="responsive" /></div>
      <div><h1 className="pl-5 ml-3 text-2xl italic font-bold text-gray-700 dark:text-gray-50"><Link href="/">NazraSoft</Link></h1></div>           
      
    {renderThemeChanger()} 
    </div>
    <div className="flex flex-row items-center space-x-8">
      <a href="/" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Home</a>
      <a href="/services" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Services</a>
      <a href="/pricing" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">Plans</a>
      <a href="/about" className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:underline dark:text-gray-200">About us</a>
      <div className="hidden font-semibold text-gray-500 transition duration-100 md:block hover:text-green-500 dark:text-gray-200">
        {/* Search BAR */}
        <div  className='hidden bg-black border-black rounded-full shadow-md dark:bg-white lg:block border-1 w-80 h-9 '>
              <div className= 'flex flex-row  focus:border-blue-700 w-[97%] h-[80%] border-1 mx-1 pt-1'>
                 <input className='dark:bg-white flex w-[93%] h-[96%] border-1 bg-black mx-1 p-2' type="search" name="search" placeholder='Search Here' />
                 <FaSearch className='w-5 h-5 mt-1 dark:text-black' />
              </div>
            </div> 
      </div>
      {status === "unauthenticated" && 
      <div onClick={() => signIn()} className="relative px-8 py-2 bg-white border border-gray-800 cursor-pointer rounded-3xl dark:border-gray-50 hover:bg-gray-300 transition duration-100 transform hover:text-green-500 hover:-translate-y-2 hover:-translate-x-1">
        <p className="relative font-light text-gray-700 ">Login</p>
      </div>}
      {status === "authenticated" && <Link href="/account">
      <Link href="/account"><img  src={session.user.image} className="relative w-12 h-12 rounded-full " /></Link>
     </Link> }
    </div>
   <div>
        


      </div>
    
  </nav>

  
  
</main>

    </div>
  )
}

export default Navbar